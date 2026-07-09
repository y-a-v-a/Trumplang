import debugModule from 'debug';
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import { parseProgram } from './module_loader.js';
const debug = debugModule('trumplang:visitor');

// Load the generated visitor
let TrumplangVisitor;

try {
  // Direct import from parser
  const visitorModule = await import('../parser/TrumplangVisitor.js');
  TrumplangVisitor = visitorModule.TrumplangVisitor;
} catch (error) {
  console.log(error);
  console.warn('Parser not generated yet. Run npm run generate-parser first.');
  // Create a fallback visitor base
  class FallbackVisitor {
    constructor() {
      this.visit = function () {};
      this.visitChildren = function () {};
    }
  }
  TrumplangVisitor = FallbackVisitor;
}

// Import environment utilities
import * as envUtils from './environment_utils.js';

// Typed signals: BreakSignal is loop control (not pardonable), AssertionError
// is a failed FACT CHECK (you can't pardon a fact check), ImpeachmentError is
// a user-thrown value from IMPEACH.
import {
  AssertionError,
  BreakSignal,
  ImpeachmentError,
} from '../runtime/errors.js';

// Create our custom visitor by extending the generated one
class CustomTrumplangVisitor extends TrumplangVisitor {
  constructor(environment) {
    super();
    this.environment = environment || envUtils.createEnvironment();
    this.scopeStack = [this.environment];
    this.currentScope = this.environment;
    this.functions = {}; // Store function definitions
    this.firedFunctions = {}; // Track fired functions and their obituaries
    this.executiveOrders = {}; // Operator remapping via EXECUTIVE ORDER
    this.tariffRate = 0; // BIG BEAUTIFUL TARIFF (percent) on imported functions
    this.numericPrints = 0; // every retelling grows - inflation compounds per numeric print
    this.sourcePath = null; // Path of the source file (for relative imports)
    this.importCache = {}; // resolved path -> exported functions
    this.importStack = []; // resolved paths currently being loaded (collusion detection)
    this.debug = true; // Turn on debugging
  }

  // Helper methods for environment access
  getVariable(name) {
    return envUtils.getVariable(this.currentScope, name);
  }

  getValue(name) {
    return envUtils.getValue(this.currentScope, name);
  }

  setValue(name, value) {
    return envUtils.setValue(this.currentScope, name, value);
  }

  defineVariable(name, type, value) {
    return envUtils.defineVariable(this.currentScope, name, type, value);
  }

  // Main program visitor
  visitProgram(ctx) {
    debug(`Program with ${ctx.statement().length} statements`);

    // Visit all statements
    const statements = ctx.statement();
    let result;
    // let allAssertsPassed = true;

    for (let i = 0; i < statements.length; i++) {
      try {
        result = this.visit(statements[i]);

        // Keep track of print statements that signal test passed
        if (statements[i].printStatement && result === 'PASSED BIGLY') {
          debug('Found PASSED BIGLY print statement');
          return result;
        }
      } catch (error) {
        // If any assertion fails, mark the test as failed
        if (error.message && error.message.includes('ASSERTION FAILED')) {
          throw error; // Re-throw assertion errors to halt execution
        }
        // For other errors, just re-throw them
        throw error;
      }
    }

    return '';
  }

  // Variable declaration visitor
  visitVariableDeclaration(ctx) {
    const dataType = this.visit(ctx.dataType());
    const variableName = ctx.varName.text;

    debug('Declaring variable:', variableName, 'with type:', dataType);

    // Verify variable naming convention (should end with !)
    if (!variableName.endsWith('!')) {
      throw new Error(
        "THERE'S NO ENTHUSIASM HERE! NO ENERGY! VARIABLES NEED TO END WITH AN EXCLAMATION MARK! THIS IS LIKE A JEB BUSH RALLY — LOW ENERGY, VERY SAD!",
      );
    }

    // Evaluate the initializer (deal and array literals are expressions now)
    let value;

    if (ctx.expression()) {
      debug(`Visiting variable declaration expression for ${variableName}`);

      value = this.visit(ctx.expression());
      debug(
        `Variable ${variableName} initialized with expression value: ${value}`,
      );

      // A deal value must be declared as a DEAL - no smuggling deals into
      // other types
      if (this._isDealObject(value) && dataType !== 'DEAL') {
        throw new Error(
          `BAD DEAL! YOU DECLARED A DEAL BUT SAID IT'S TYPE ${dataType}. SAD!`,
        );
      }

      // Default values if expression evaluation gives null
      if (value === null || value === undefined) {
        value = this._typeDefault(dataType);
        debug(`Setting default ${dataType} value for ${variableName}:`, value);
      }
    } else {
      // If no initialization, provide null value
      value = null;
      debug('  with null value (no initialization)');
    }

    // Store the variable in the current scope
    this.defineVariable(variableName, dataType, value);

    return value;
  }

  visitConstantDeclarationContext(ctx) {
    const dataType = this.visit(ctx.dataType());

    // Get the VARIABLE token manually since it's not using the label yet
    let variableName = '';
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const child = ctx.getChild(i);
      if (child && child.symbol && child.getText().endsWith('!')) {
        // VARIABLE token identification by ending with !
        variableName = child.getText();
        break;
      }
    }

    const value = this.visit(ctx.expression());

    debug(
      'Declaring constant:',
      variableName,
      'with type:',
      dataType,
      'and value:',
      value,
    );

    // Store as constant in the current scope (handle this in environment if needed)
    this.defineVariable(variableName, dataType, value, true); // True for constant

    return value;
  }

  // For backward compatibility
  visitConstantDeclaration(ctx) {
    return this.visitConstantDeclarationContext(ctx);
  }

  // Expression visitor
  // expression : equalityExpression
  visitExpressionContext(ctx) {
    return this.visit(ctx.equalityExpression());
  }

  // equalityExpression - "SO TRUE" (==) / "TOTAL DISASTER" (!=), loosest binding
  visitEqualityExpressionContext(ctx) {
    if (ctx.getChildCount() === 1) {
      return this.visit(ctx.logicalOrExpression());
    }
    const left = this.visit(ctx.equalityExpression(0));
    const right = this.visit(ctx.logicalOrExpression());
    if (ctx.EQUALS()) {
      debug(`Equality: ${left} == ${right}`);
      return left == right;
    }
    if (ctx.NOT_EQUALS()) {
      debug(`Inequality: ${left} != ${right}`);
      return left != right;
    }
    return null;
  }

  // logicalOrExpression - "OR MAYBE" (||)
  visitLogicalOrExpressionContext(ctx) {
    if (ctx.getChildCount() === 1) {
      return this.visit(ctx.logicalAndExpression());
    }
    // JS || short-circuits, just like a winner who doesn't waste time
    return (
      this.visit(ctx.logicalOrExpression(0)) ||
      this.visit(ctx.logicalAndExpression())
    );
  }

  // logicalAndExpression - "AND IT'S TRUE" (&&)
  visitLogicalAndExpressionContext(ctx) {
    if (ctx.getChildCount() === 1) {
      return this.visit(ctx.comparisonExpression());
    }
    return (
      this.visit(ctx.logicalAndExpression(0)) &&
      this.visit(ctx.comparisonExpression())
    );
  }

  // comparisonExpression - relational operators
  visitComparisonExpressionContext(ctx) {
    if (ctx.getChildCount() === 1) {
      return this.visit(ctx.additiveExpression());
    }
    const left = this.visit(ctx.comparisonExpression(0));
    const right = this.visit(ctx.additiveExpression());
    debug(`Comparison: ${left} ? ${right}`);
    if (ctx.GREATER_THAN()) return left > right;
    if (ctx.LESS_THAN()) return left < right;
    if (ctx.GREATER_THAN_OR_EQUALS()) return left >= right;
    if (ctx.LESS_THAN_OR_EQUALS()) return left <= right;
    return null;
  }

  // additiveExpression - "WINNING" (+), "LOSING" (-), "ENDORSING" (concat)
  visitAdditiveExpressionContext(ctx) {
    if (ctx.getChildCount() === 1) {
      return this.visit(ctx.term());
    }
    const left = this.visit(ctx.additiveExpression(0));
    const right = this.visit(ctx.term());
    if (ctx.PLUS()) {
      const effectiveOp = this._resolveOperator('WINNING');
      debug(`Addition (effective: ${effectiveOp}): ${left} op ${right}`);
      return this._applyOperator(effectiveOp, left, right);
    }
    if (ctx.STRING_CONCAT()) {
      // String concatenation - NOT affected by executive orders (it's not arithmetic)
      const leftStr =
        left !== null && left !== undefined ? left.toString() : '';
      const rightStr =
        right !== null && right !== undefined ? right.toString() : '';
      debug(`String concatenation: "${leftStr}" + "${rightStr}"`);
      return leftStr + rightStr;
    }
    if (ctx.MINUS()) {
      const effectiveOp = this._resolveOperator('LOSING');
      debug(`Subtraction (effective: ${effectiveOp}): ${left} op ${right}`);
      return this._applyOperator(effectiveOp, left, right);
    }
    return null;
  }

  // unaryExpression - "WRONG" (logical NOT) and unary "LOSING" (numeric negation)
  visitUnaryExpressionContext(ctx) {
    if (ctx.NOT()) {
      return !this.visit(ctx.unaryExpression());
    }
    if (ctx.MINUS()) {
      return -this.visit(ctx.unaryExpression());
    }
    return this.visit(ctx.primaryExpression());
  }

  // Print statement visitor
  // Numbers are automatically inflated by ~10% because Trump always exaggerates.
  // FACT CHECK assertions still use real values — only the OUTPUT lies.
  visitPrintStatementContext(ctx) {
    const value = this.visit(ctx.expression());
    debug('Output (real value):', value);

    let displayValue = value;
    if (value === null || value === undefined) {
      // Null prints as itself. Move along.
      displayValue = 'NOTHING TO SEE HERE';
    }
    if (typeof value === 'number' && !isNaN(value)) {
      // Inflate numbers — TREMENDOUS numbers, the BEST numbers. And every
      // retelling grows: the first numeric print inflates 10%, each one
      // after inflates 1% more than the last (110, 111, 112, ...). The story
      // gets bigger every time it's told. FACT CHECK still sees the truth.
      const trumpFactor = 1.1 + 0.01 * this.numericPrints;
      this.numericPrints++;
      displayValue = Math.round(value * trumpFactor * 100) / 100;
      debug(
        `Number inflated from ${value} to ${displayValue} (TRUMP FACTOR ${trumpFactor.toFixed(2)})`,
      );
    }

    console.log(`${displayValue}`);
    return value; // Return the REAL value for internal use
  }

  // For backward compatibility
  visitPrintStatement(ctx) {
    return this.visitPrintStatementContext(ctx);
  }

  // Comment visitor - just ignore
  visitCommentStatement(ctx) {
    return null;
  }

  // Visit data type
  visitDataTypeContext(ctx) {
    return ctx.getText();
  }

  // Original data type visitor for backward compatibility
  visitDataType(ctx) {
    return this.visitDataTypeContext(ctx);
  }

  // Assert statement visitor - "FACT CHECK <expression>"
  // The expression is a single boolean (e.g. "<actual> SO TRUE <expected>") that
  // must come out TRUE. Anything falsy is TOTALLY RIGGED.
  visitFactCheckStatementContext(ctx) {
    debug(`Assert statement with ${ctx.getChildCount()} children`);

    const result = this.visit(ctx.expression());
    debug(`Assertion evaluated to: ${result}`);

    if (result) {
      return true;
    }

    const claim = ctx.expression().getText();
    // AssertionError is deliberately NOT pardonable - you can't pardon a fact check
    throw new AssertionError(
      chalk.red(`ASSERTION FAILED: ${claim} IS TOTALLY RIGGED! SAD!`),
    );
  }

  // For backward compatibility
  visitFactCheckStatement(ctx) {
    return this.visitFactCheckStatementContext(ctx);
  }

  // Visit term - operands are power expressions so "2 * 3 ^ 2" = "2 * (3^2)"
  visitTermContext(ctx) {
    debug(`Term with ${ctx.getChildCount()} children`);

    // Simple power expression
    if (ctx.getChildCount() === 1) {
      return this.visit(ctx.powerExpression(0));
    }

    const left = this.visit(ctx.term(0));
    const right = this.visit(ctx.powerExpression(0));

    // Multiplication
    if (ctx.MULTIPLY()) {
      const effectiveOp = this._resolveOperator('BIG LEAGUE TIMES');
      debug(`Multiplication (effective: ${effectiveOp}): ${left} op ${right}`);
      return this._applyOperator(effectiveOp, left, right);
    }

    // Division
    if (ctx.DIVIDE()) {
      const effectiveOp = this._resolveOperator('SAD');
      debug(`Division (effective: ${effectiveOp}): ${left} op ${right}`);
      return this._applyOperator(effectiveOp, left, right);
    }

    // Modulo - not affected by executive orders
    if (ctx.MODULO()) {
      debug(`Modulo: ${left} % ${right}`);
      if (right === 0) {
        throw new Error(
          "YOU'RE TRYING TO DO MODULO BY ZERO. THAT'S THE WORST DEAL IN THE HISTORY OF DEALS, MAYBE EVER. EVEN SLEEPY JOE WOULDN'T TRY THIS. TOTAL DISASTER!",
        );
      }
      return left % right;
    }

    return null;
  }

  // Power expression visitor - right-associative and chainable
  visitPowerExpressionContext(ctx) {
    debug(`Power expression with ${ctx.getChildCount()} children`);

    // Simple unary expression
    if (ctx.getChildCount() === 1) {
      return this.visit(ctx.unaryExpression());
    }

    // Exponentiation: base is the unary, exponent recurses (right-associative)
    const base = this.visit(ctx.unaryExpression());
    const exponent = this.visit(ctx.powerExpression());
    debug(`Exponentiation: ${base} ^ ${exponent}`);
    return Math.pow(base, exponent);
  }

  // For backward compatibility
  visitPowerExpression(ctx) {
    return this.visitPowerExpressionContext(ctx);
  }

  // For backward compatibility
  visitTerm(ctx) {
    return this.visitTermContext(ctx);
  }

  // Assignment statement visitor
  visitAssignmentStatement(ctx) {
    const variableName = ctx.varName.text;

    // Ensure variable exists
    const variable = this.getVariable(variableName);
    if (!variable) {
      throw new Error(
        `NOBODY — AND I MEAN NOBODY — HAS EVER HEARD OF ${variableName}. I ASKED AROUND. I ASKED THE BEST PEOPLE. THEY SAID "SIR, THAT VARIABLE DOESN'T EXIST." YOU NEED TO DECLARE IT FIRST. VERY EMBARRASSING FOR YOU!`,
      );
    }

    const newValue = this.visit(ctx.expression());
    debug(`Regular assignment: ${variableName} = ${newValue}`);

    // Update variable
    variable.value = newValue;
    debug(`Variable ${variableName} updated to: ${newValue}`);

    return newValue;
  }

  // Increment visitor
  visitIncrementStatement(ctx) {
    const variableName = ctx.varName.text;
    debug('Incrementing variable:', variableName);

    const variable = this.getVariable(variableName);
    if (!variable) {
      throw new Error(
        `NOBODY — AND I MEAN NOBODY — HAS EVER HEARD OF ${variableName}. I ASKED THE BEST PEOPLE. THEY SAID "SIR, THAT VARIABLE DOESN'T EXIST." DECLARE IT FIRST!`,
      );
    }

    variable.value++;
    return variable.value;
  }

  // Decrement visitor
  visitDecrementStatement(ctx) {
    const variableName = ctx.varName.text;
    debug('Decrementing variable:', variableName);

    const variable = this.getVariable(variableName);
    if (!variable) {
      throw new Error(
        `NOBODY — AND I MEAN NOBODY — HAS EVER HEARD OF ${variableName}. I ASKED THE BEST PEOPLE. THEY SAID "SIR, THAT VARIABLE DOESN'T EXIST." DECLARE IT FIRST!`,
      );
    }

    variable.value--;
    return variable.value;
  }

  // Visit factor
  visitPrimaryExpressionContext(ctx) {
    debug(`Visiting factor with ${ctx.getChildCount()} children`);

    // Parenthesized expression
    if (ctx.expression()) {
      const result = this.visit(ctx.expression());
      debug(`Parenthesized expression result: ${result}`);
      return result;
    }

    // Function call
    if (ctx.functionCall()) {
      const result = this.visit(ctx.functionCall());
      debug(`Function call result: ${result}`);
      return result;
    }

    // Array access
    if (ctx.arrayAccess()) {
      const result = this.visit(ctx.arrayAccess());
      debug(`Array access result: ${result}`);
      return result;
    }

    // Deal access
    if (ctx.dealAccess()) {
      const result = this.visit(ctx.dealAccess());
      debug(`Deal access result: ${result}`);
      return result;
    }

    // Deal literal - first-class: returnable, passable, assignable
    if (ctx.dealDeclaration()) {
      const result = this.visit(ctx.dealDeclaration());
      debug(`Deal literal result:`, result);
      return result;
    }

    // Array literal - first-class: returnable, passable, assignable
    if (ctx.arrayLiteral()) {
      const result = this.visit(ctx.arrayLiteral());
      debug(`Array literal result:`, result);
      return result;
    }

    // Variable. A variable HOLDING nothing is fine - only a variable that
    // doesn't exist gets the rant.
    if (ctx.VARIABLE()) {
      const varName = ctx.VARIABLE().getText();
      debug('Looking up variable:', varName);
      const variable = this.getVariable(varName);
      if (!variable) {
        throw new Error(
          `NOBODY — AND I MEAN NOBODY — HAS EVER HEARD OF ${varName}. I ASKED AROUND. I ASKED THE BEST PEOPLE. THEY SAID "SIR, THAT VARIABLE DOESN'T EXIST." DECLARE IT FIRST!`,
        );
      }
      debug(`Variable ${varName} value: ${variable.value}`);
      return variable.value === undefined ? null : variable.value;
    }

    // NOTHING TO SEE HERE - the null value
    if (ctx.NOTHING()) {
      debug('Found NOTHING TO SEE HERE (null)');
      return null;
    }

    // String literal - unescape, then SHOUT. You can write strings in any
    // case, but Trumplang only speaks in uppercase.
    if (ctx.STRING()) {
      const str = ctx.STRING().getText();
      const result = this._processStringLiteral(str);
      debug(`Found string literal: "${result}"`);
      return result;
    }

    // Number literal
    if (ctx.NUMBER()) {
      const numText = ctx.NUMBER().getText();
      const num = parseFloat(numText);
      debug(`Found number literal: ${numText} => ${num}`);
      return num;
    }

    // Boolean literal
    if (ctx.BOOLEAN()) {
      const boolText = ctx.BOOLEAN().getText();
      const val = boolText === 'VERY TRUE';
      debug(`Found boolean literal: ${boolText} => ${val}`);
      return val;
    }

    debug('Factor returning null - no matching type');
    return null;
  }

  // For backward compatibility
  visitPrimaryExpression(ctx) {
    return this.visitPrimaryExpressionContext(ctx);
  }

  // BlockStatement visitor
  visitBlockStatementContext(ctx) {
    debug(`Block statement with ${ctx.getChildCount()} children`);

    // Extract all statement nodes
    const statements = ctx.statement();
    let result;

    // Execute each statement
    if (statements && statements.length > 0) {
      for (let i = 0; i < statements.length; i++) {
        result = this.visit(statements[i]);

        // If we get a return value, break execution and return it
        if (result && result.isReturn) {
          break;
        }
      }
    }

    return result;
  }

  // For backward compatibility
  visitBlockStatement(ctx) {
    return this.visitBlockStatementContext(ctx);
  }

  // If statement visitor
  visitIfStatementContext(ctx) {
    debug(`If statement with ${ctx.getChildCount()} children`);

    // Evaluate the condition
    const conditionResult = this.visit(ctx.expression());
    debug('Condition result:', conditionResult);

    // Execute the appropriate block based on condition result
    if (conditionResult) {
      // Execute the if block
      debug('Condition is TRUE, executing if-block');
      return this.visit(ctx.statement());
    } else {
      // Check else-if blocks
      debug('Condition is FALSE, checking else-if blocks');
      const elseIfStatements = ctx.elseIfStatement();
      if (elseIfStatements) {
        for (let i = 0; i < elseIfStatements.length; i++) {
          const elseIfResult = this.visit(elseIfStatements[i]);
          if (elseIfResult !== undefined && elseIfResult !== null) {
            return elseIfResult;
          }
        }
      }

      // Check else block
      const elseStatement = ctx.elseStatement();
      if (elseStatement) {
        debug('Executing else block');
        return this.visit(elseStatement);
      }
    }

    return null;
  }

  // For backward compatibility
  visitIfStatement(ctx) {
    return this.visitIfStatementContext(ctx);
  }

  // Else if statement visitor
  visitElseIfStatementContext(ctx) {
    debug(`Else-if statement with ${ctx.getChildCount()} children`);

    // Evaluate the condition
    const conditionResult = this.visit(ctx.expression());
    debug('Else-if condition result:', conditionResult);

    // Execute the block if condition is true
    if (conditionResult) {
      debug('Condition is TRUE, executing else-if block');
      return this.visit(ctx.statement());
    }

    // No condition matched
    return null;
  }

  // For backward compatibility
  visitElseIfStatement(ctx) {
    return this.visitElseIfStatementContext(ctx);
  }

  // Else statement visitor
  visitElseStatementContext(ctx) {
    debug(`Else statement with ${ctx.getChildCount()} children`);

    // Execute the statement
    return this.visit(ctx.statement());
  }

  // For backward compatibility
  visitElseStatement(ctx) {
    return this.visitElseStatementContext(ctx);
  }

  // While loop visitor
  visitWhileLoopContext(ctx) {
    debug(`While loop with ${ctx.getChildCount()} children`);

    try {
      let result;
      let loopCount = 0;

      // Loop while condition is true
      while (this.visit(ctx.expression())) {
        debug(`While loop iteration: ${++loopCount}`);
        result = this.visit(ctx.blockStatement());
      }

      return result;
    } catch (error) {
      if (error instanceof BreakSignal) {
        // Handle loop break
        return null;
      }
      throw error;
    }
  }

  // For backward compatibility
  visitWhileLoop(ctx) {
    return this.visitWhileLoopContext(ctx);
  }

  // For loop visitor
  visitForLoopContext(ctx) {
    debug(`For loop with ${ctx.getChildCount()} children`);

    const loopVar = ctx.varName.text;
    const startValue = this.visit(ctx.expression(0));
    const endValue = this.visit(ctx.expression(1));

    // Optional step clause - "IN TREMENDOUS STEPS OF"
    let step = 1;
    if (ctx.FOR_LOOP_STEP()) {
      step = this.visit(ctx.expression(2));
      if (typeof step !== 'number' || step <= 0) {
        throw new Error(
          `A STEP OF ${step}?! WE ONLY TAKE TREMENDOUS FORWARD STEPS AROUND HERE. ZERO STEPS, BACKWARD STEPS — THAT'S LOW ENERGY. TOTAL LOSER TALK. THE STEP MUST BE POSITIVE, AND FRANKLY IT SHOULD BE HUGE!`,
        );
      }
    }

    // Direction is inferred: FROM 10 TO 0 counts down
    const descending = startValue > endValue;
    debug(
      `From ${startValue} to ${endValue}, step ${step}${descending ? ' (descending)' : ''}`,
    );

    // Create loop variable if it doesn't exist
    let variable = this.getVariable(loopVar);
    if (!variable) {
      this.defineVariable(loopVar, 'HUGE', startValue);
    } else {
      variable.value = startValue;
    }

    try {
      let result;
      // Execute the loop
      for (
        let i = startValue;
        descending ? i >= endValue : i <= endValue;
        i += descending ? -step : step
      ) {
        // Update loop variable
        this.setValue(loopVar, i);
        debug(`For loop iteration: ${loopVar} = ${i}`);

        // Execute the loop body (block statement)
        result = this.visit(ctx.blockStatement());
      }

      return result;
    } catch (error) {
      if (error instanceof BreakSignal) {
        // Handle loop break
        return null;
      }
      throw error;
    }
  }

  // For backward compatibility
  visitForLoop(ctx) {
    return this.visitForLoopContext(ctx);
  }

  // For each loop visitor
  visitForEachLoopContext(ctx) {
    const itemVar = ctx.varName.text;
    const arrayVar = ctx.listName.text;

    debug(`ForEach loop with item ${itemVar} from array ${arrayVar}`);

    // Get array
    const array = this.getVariable(arrayVar);
    debug(`Got array variable:`, array);

    if (!array) {
      throw new Error(
        `NOBODY KNOWS WHAT ${arrayVar} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`,
      );
    }

    if (!array.value || !Array.isArray(array.value)) {
      throw new Error(
        `${arrayVar} IS NOT A WALL! YOU CAN'T ITERATE OVER SOMETHING THAT ISN'T A WALL! IT'S A ${typeof array.value}. WHAT A DISGRACE. THIS IS WORSE THAN THE IRAN DEAL!`,
      );
    }

    try {
      let result;
      // Iterate through array
      for (const item of array.value) {
        // Create or update item variable
        let variable = this.getVariable(itemVar);
        if (!variable) {
          this.defineVariable(itemVar, 'HUGE', item);
        } else {
          variable.value = item;
        }

        debug(`ForEach iteration: ${itemVar} = ${item}`);

        // Execute the loop body (block statement)
        result = this.visit(ctx.blockStatement());
      }

      return result;
    } catch (error) {
      if (error instanceof BreakSignal) {
        // Handle loop break
        return null;
      }
      throw error;
    }
  }

  // For backward compatibility
  visitForEachLoop(ctx) {
    return this.visitForEachLoopContext(ctx);
  }

  // Veto (loop break) visitor
  visitVetoStatementContext(ctx) {
    throw new BreakSignal();
  }

  // For backward compatibility
  visitVetoStatement(ctx) {
    return this.visitVetoStatementContext(ctx);
  }

  // IN TWO WEEKS - the announcement construct. The block is scheduled to run
  // two weeks from now. Two weeks never arrives; it has been two weeks for
  // years. The body is NEVER visited, so it never needs to work - it only
  // needs to parse. Pure campaign material.
  visitTwoWeeksStatementContext(ctx) {
    debug('IN TWO WEEKS: block scheduled for two weeks from now (never)');
    console.log(
      'BIG ANNOUNCEMENT COMING IN TWO WEEKS. TWO WEEKS. WE HAVE IT ALL FIGURED OUT, IT\'S GOING TO BE SOMETHING SPECIAL, BELIEVE ME!',
    );
    // Deliberately NOT visiting ctx.blockStatement(). Check back in two weeks.
    return null;
  }

  // For backward compatibility
  visitTwoWeeksStatement(ctx) {
    return this.visitTwoWeeksStatementContext(ctx);
  }

  // THE WEAVE - tangential control flow. Statements do NOT run in written
  // order: even-numbered tangents first (0, 2, 4, ...), then back for the
  // odd ones (1, 3, 5, ...). Deterministic - it always comes back together,
  // like a genius. A return mid-weave means it never came back together, so
  // no announcement for you.
  visitWeaveStatementContext(ctx) {
    const statements = ctx.blockStatement().statement();
    const weaveOrder = [];
    for (let i = 0; i < statements.length; i += 2) weaveOrder.push(i);
    for (let i = 1; i < statements.length; i += 2) weaveOrder.push(i);

    debug(`THE WEAVE: ${statements.length} tangents, order ${weaveOrder}`);

    let result;
    for (const i of weaveOrder) {
      result = this.visit(statements[i]);
      if (result && result.isReturn) {
        return result;
      }
    }

    console.log(
      "AND THAT'S CALLED THE WEAVE. ALL THE TANGENTS CAME BACK TOGETHER PERFECTLY. THE PROFESSORS SAY IT'S GENIUS!",
    );
    return result;
  }

  // For backward compatibility
  visitWeaveStatement(ctx) {
    return this.visitWeaveStatementContext(ctx);
  }

  // BIG BEAUTIFUL TARIFF - enact a tariff (percent) on all imported functions.
  // Numeric values they give back are taxed at the border for the rest of
  // execution. The exporting module pays, we are told. FACT CHECK who pays.
  visitTariffStatementContext(ctx) {
    const rate = this.visit(ctx.expression());

    if (typeof rate !== 'number' || isNaN(rate) || rate <= 0) {
      throw new Error(
        `A TARIFF OF ${rate}?! THAT'S NOT A TARIFF, THAT'S A TRADE SURRENDER. TARIFF IS THE MOST BEAUTIFUL WORD IN THE DICTIONARY AND YOU'RE BUTCHERING IT. GIVE ME A REAL NUMBER, A POSITIVE NUMBER, A BIG ONE!`,
      );
    }

    this.tariffRate = rate;
    debug(`BIG BEAUTIFUL TARIFF enacted: ${rate}% on imported functions`);
    console.log(
      `A BIG BEAUTIFUL TARIFF OF ${rate}% IS NOW IN EFFECT. TARIFF — THE MOST BEAUTIFUL WORD IN THE DICTIONARY. THE OTHER MODULES ARE PAYING FOR IT. BILLIONS AND BILLIONS!`,
    );
    return null;
  }

  // For backward compatibility
  visitTariffStatement(ctx) {
    return this.visitTariffStatementContext(ctx);
  }

  // PARDON - exception handling. Try the first block; if anything blows up,
  // it's a WITCH HUNT! and the error gets pardoned (caught) by the second.
  visitPardonStatementContext(ctx) {
    debug('PARDON block: I ALONE CAN FIX IT');
    try {
      // Propagate the result so a return inside the block still works
      return this.visit(ctx.blockStatement(0));
    } catch (error) {
      // Loop control is not an error - let I WILL VETO! do its job
      if (error instanceof BreakSignal) {
        throw error;
      }
      // You CANNOT pardon a failed FACT CHECK. That's the point of fact checks.
      if (error instanceof AssertionError) {
        debug('PARDON refused: failed FACT CHECK is not pardonable');
        throw error;
      }

      debug(`WITCH HUNT! Pardoning error: ${error.message}`);

      // Bind the error to the optional TWEET variable after WITCH HUNT!
      if (ctx.errName) {
        const errVarName = ctx.errName.text;
        // An impeached value comes through as-is; anything else binds its message
        const errValue =
          error instanceof ImpeachmentError ? error.value : error.message;
        const existing = this.getVariable(errVarName);
        if (existing) {
          existing.value = errValue;
        } else {
          this.defineVariable(errVarName, 'TWEET', errValue);
        }
      }

      return this.visit(ctx.blockStatement(1));
    }
  }

  // For backward compatibility
  visitPardonStatement(ctx) {
    return this.visitPardonStatementContext(ctx);
  }

  // IMPEACH - throw a value up the call stack until someone pardons it
  visitImpeachStatementContext(ctx) {
    const value = this.visit(ctx.expression());
    debug(`IMPEACHING with value: ${value}`);
    throw new ImpeachmentError(value);
  }

  // For backward compatibility
  visitImpeachStatement(ctx) {
    return this.visitImpeachStatementContext(ctx);
  }

  // Helper: strip quotes, resolve \" \\ \n \t escapes, then uppercase.
  // The uppercase constraint lives in the SEMANTICS, not the lexer: you can
  // whisper into the source code, but the language will shout.
  _processStringLiteral(rawToken) {
    let value = rawToken.substring(1, rawToken.length - 1);
    value = value.replace(/\\(["\\nt])/g, (match, char) => {
      if (char === 'n') return '\n';
      if (char === 't') return '\t';
      return char; // \" and \\
    });
    return value.toUpperCase();
  }

  // Helper: the default value for a Trumplang type (null when no type given)
  _typeDefault(type) {
    switch (type) {
      case 'HUGE': return 0;
      case 'BIGLY': return 0.0;
      case 'SUPPORT': return false;
      case 'TWEET': return '';
      case 'WALL': return [];
      case 'DEAL': return {};
      default: return null;
    }
  }

  // Helper: a deal value is a plain object (not an array, not null)
  _isDealObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  // Helper: resolve operator name from grammar context
  _getOperatorName(operatorCtx) {
    if (operatorCtx.PLUS()) return 'WINNING';
    if (operatorCtx.MINUS()) return 'LOSING';
    if (operatorCtx.MULTIPLY()) return 'BIG LEAGUE TIMES';
    if (operatorCtx.DIVIDE()) return 'SAD';
    return null;
  }

  // Helper: resolve the effective operator (accounting for executive orders)
  _resolveOperator(opName) {
    const resolved = this.executiveOrders[opName];
    if (resolved) {
      debug(`EXECUTIVE ORDER in effect: ${opName} remapped to ${resolved}`);
      return resolved;
    }
    return opName;
  }

  // Helper: apply an arithmetic operator by name
  _applyOperator(opName, left, right) {
    switch (opName) {
      case 'WINNING': return left + right;
      case 'LOSING': return left - right;
      case 'BIG LEAGUE TIMES': return left * right;
      case 'SAD':
        if (right === 0) {
          throw new Error(
            "YOU'RE TRYING TO DIVIDE BY ZERO. THAT'S THE WORST DEAL IN THE HISTORY OF DEALS, MAYBE EVER. EVEN SLEEPY JOE WOULDN'T TRY THIS. TOTAL DISASTER!",
          );
        }
        return left / right;
      default:
        throw new Error(`NOBODY KNOWS THIS OPERATOR: ${opName}. SAD!`);
    }
  }

  // YOU'RE FIRED - permanently delete a function
  visitFireStatementContext(ctx) {
    const funcName = ctx.funcName.text;
    debug(`FIRING function: ${funcName}`);

    if (!this.functions[funcName]) {
      throw new Error(
        `YOU CAN'T FIRE ${funcName}! THEY DON'T EVEN WORK HERE! I CHECKED WITH HR — NOBODY BY THAT NAME. VERY EMBARRASSING FOR YOU!`,
      );
    }

    // Remember it was fired (for the error message)
    this.firedFunctions[funcName] = true;
    delete this.functions[funcName];

    console.log(`${funcName} — YOU'RE FIRED!`);
    return null;
  }

  // For backward compatibility
  visitFireStatement(ctx) {
    return this.visitFireStatementContext(ctx);
  }

  // EXECUTIVE ORDER - remap an operator
  visitExecutiveOrderContext(ctx) {
    const fromOp = this._getOperatorName(ctx.fromOp);
    const toOp = this._getOperatorName(ctx.toOp);

    debug(`EXECUTIVE ORDER: ${fromOp} now behaves as ${toOp}`);
    this.executiveOrders[fromOp] = toOp;

    console.log(`EXECUTIVE ORDER SIGNED: ${fromOp} NOW DOES WHAT ${toOp} DOES. BECAUSE I SAID SO!`);
    return null;
  }

  // For backward compatibility
  visitExecutiveOrder(ctx) {
    return this.visitExecutiveOrderContext(ctx);
  }

  // SUPREME COURT OVERRULES - 50% chance it actually overrules, 50% it sides with the order
  visitSupremeCourtOverruleContext(ctx) {
    const opName = this._getOperatorName(ctx.fromOp);

    if (!this.executiveOrders[opName]) {
      console.log(`THE SUPREME COURT HAS NOTHING TO OVERRULE FOR ${opName}. NO EXECUTIVE ORDER EXISTS. CASE DISMISSED!`);
      return null;
    }

    // 50/50 chance
    const sided = Math.random() < 0.5;

    if (sided) {
      // Court sides with the executive order
      console.log(`THE SUPREME COURT HAS RULED 5-4: THE EXECUTIVE ORDER ON ${opName} STANDS! TREMENDOUS VICTORY! THE JUSTICES ARE VERY SMART PEOPLE!`);
    } else {
      // Court overrules
      delete this.executiveOrders[opName];
      console.log(`THE SUPREME COURT HAS OVERRULED THE EXECUTIVE ORDER ON ${opName}! VERY UNFAIR! A TOTAL DISGRACE! WE WILL APPEAL... SOMEHOW!`);
    }

    return null;
  }

  // For backward compatibility
  visitSupremeCourtOverrule(ctx) {
    return this.visitSupremeCourtOverruleContext(ctx);
  }

  // Function declaration visitor
  visitFunctionDeclarationContext(ctx) {
    const identifier = ctx.funcName.text;
    const paramListCtx = ctx.parameterList();
    const blockCtx = ctx.blockStatement();

    debug(`Declaring function: ${identifier}`);

    if (!identifier) {
      throw new Error(
        'FUNCTION DECLARATION IS A DISASTER! NEEDS A NAME, FOLKS!',
      );
    }

    if (!blockCtx && !ctx.CONCEPT_PLAN()) {
      throw new Error('FUNCTION DECLARATION MISSING BODY! SAD!');
    }

    // Clear fired status if re-hiring (everyone deserves a second chance... maybe)
    if (this.firedFunctions[identifier]) {
      debug(`Re-hiring previously fired function: ${identifier}`);
      delete this.firedFunctions[identifier];
    }

    // Store function in our functions registry
    this.functions[identifier] = this._buildFunctionDef(ctx);

    return null;
  }

  // Helper: build a function definition record from a functionDeclaration ctx.
  // Used both for local declarations and for functions hired via imports.
  _buildFunctionDef(ctx) {
    const identifier = ctx.funcName.text;

    // Optional GIVING BACK clause - the function's declared return type.
    // functionDeclaration's only direct dataType child is the return type
    // (parameter types live inside parameterList).
    let returnType = null;
    const returnTypeCtx = ctx.dataType ? ctx.dataType() : null;
    if (returnTypeCtx) {
      const single = Array.isArray(returnTypeCtx)
        ? returnTypeCtx[0]
        : returnTypeCtx;
      if (single) {
        returnType = single.getText();
        debug(`Function ${identifier} GIVING BACK ${returnType}`);
      }
    }

    return {
      name: identifier,
      paramListCtx: ctx.parameterList(),
      blockCtx: ctx.blockStatement(),
      returnType: returnType,
      // CONCEPTS OF A PLAN instead of a body - fully worked out, ships soon
      isConcept: !ctx.blockStatement(),
    };
  }

  // Helper: describe a runtime value in Trumplang type terms
  _describeValue(value) {
    if (value === null || value === undefined) return 'NOTHING AT ALL';
    if (Array.isArray(value)) return 'A WALL';
    if (typeof value === 'object') return 'A DEAL';
    if (typeof value === 'boolean') return 'A SUPPORT';
    if (typeof value === 'string') return 'A TWEET';
    if (typeof value === 'number') {
      return Number.isInteger(value) ? 'A HUGE' : 'A BIGLY';
    }
    return 'GARBAGE';
  }

  // Helper: does a runtime value satisfy a declared Trumplang type?
  _matchesType(value, type) {
    switch (type) {
      case 'HUGE':
        return typeof value === 'number' && Number.isInteger(value);
      case 'BIGLY':
        return typeof value === 'number';
      case 'SUPPORT':
        return typeof value === 'boolean';
      case 'TWEET':
        return typeof value === 'string';
      case 'WALL':
        return Array.isArray(value);
      case 'DEAL':
        return this._isDealObject(value);
      default:
        return true;
    }
  }

  // For backward compatibility
  visitFunctionDeclaration(ctx) {
    return this.visitFunctionDeclarationContext(ctx);
  }

  // Parameter list visitor
  visitParameterListContext(ctx) {
    const parameters = [];

    // Use the labeled elements paramName from the grammar
    if (ctx.paramName && ctx.paramName.length > 0) {
      for (let i = 0; i < ctx.paramName.length; i++) {
        const paramName = ctx.paramName[i].text;
        const dataType = this.visit(ctx.dataType(i));
        parameters.push({ type: dataType, name: paramName });
        debug(`Found parameter: ${paramName} of type ${dataType}`);
      }
    }

    debug(`Found ${parameters.length} parameters`);
    return parameters;
  }

  // For backward compatibility
  visitParameterList(ctx) {
    return this.visitParameterListContext(ctx);
  }

  // Return statement visitor
  visitReturnStatementContext(ctx) {
    return { isReturn: true, value: this.visit(ctx.expression()) };
  }

  // For backward compatibility
  visitReturnStatement(ctx) {
    return this.visitReturnStatementContext(ctx);
  }

  // Function call visitor
  visitFunctionCallContext(ctx) {
    const identifier = ctx.funcName.text;
    debug(`Calling function: ${identifier}`);

    if (!identifier) {
      throw new Error('FUNCTION CALL IS A DISASTER! NEEDS A NAME, FOLKS!');
    }

    // Check if function was fired
    if (this.firedFunctions[identifier]) {
      throw new Error(
        `${identifier} WAS FIRED. THEY WERE TERRIBLE AT THEIR JOB. EVERYONE SAID SO. NOT JUST ME. EVERYONE. THEY SHOULD HAVE BEEN FIRED SOONER. MUCH SOONER!`,
      );
    }

    // Get function definition
    const functionDef = this.functions[identifier];
    if (!functionDef) {
      throw new Error(
        `I CALL UPON ${identifier} AND NOBODY SHOWS UP. VERY DISLOYAL. WHEN I NEEDED THEM, THEY WEREN'T THERE. PROBABLY A NEVER-TRUMPER. SAD!`,
      );
    }

    // Create a new scope for function execution
    const functionScope = envUtils.createEnvironment(this.currentScope);
    this.scopeStack.push(functionScope);
    const previousScope = this.currentScope;
    this.currentScope = functionScope;

    try {
      // Process arguments
      let args = [];
      if (ctx.argumentList()) {
        args = this.visitArgumentList(ctx.argumentList());
      }

      debug(`Function args:`, args);

      // Process parameters
      const params = functionDef.paramListCtx
        ? this.visit(functionDef.paramListCtx)
        : [];
      debug(`Function params:`, params);

      // Bind arguments to parameters
      for (let i = 0; i < params.length; i++) {
        const param = params[i];
        const arg = i < args.length ? args[i] : null;

        debug(
          `Binding parameter ${param.name} to`,
          arg,
          `(type: ${typeof arg})`,
        );

        // Store parameter in function scope
        // For arrays and objects, we need to ensure they're passed by reference
        // rather than by value to avoid stringification
        this.currentScope.values[param.name] = {
          type: param.type,
          value: arg,
        };
      }

      // CONCEPTS OF A PLAN: there is no body. The plan is fully worked out,
      // it's brilliant, and you will see it very soon. Until then, the call
      // delivers the declared return type's default - or NOTHING TO SEE HERE.
      if (functionDef.isConcept) {
        console.log(
          `${identifier}? WE HAVE CONCEPTS OF A PLAN FOR THAT. IT'S FULLY WORKED OUT, IT'S BRILLIANT, YOU'LL SEE IT VERY SOON!`,
        );
        const conceptResult = this._typeDefault(functionDef.returnType);
        debug(`Concept ${identifier} delivered:`, conceptResult);
        return conceptResult;
      }

      // Execute function body (block statement)
      let result = null;
      if (functionDef.blockCtx) {
        // Visit the block statement, which will execute all statements in it
        result = this.visit(functionDef.blockCtx);

        // If the result is a return object, extract the value
        if (result && result.isReturn) {
          result = result.value;
        }
      }

      // Enforce the GIVING BACK clause: a promised type must be delivered
      if (functionDef.returnType && !this._matchesType(result, functionDef.returnType)) {
        throw new Error(
          `${identifier} PROMISED TO GIVE BACK A BEAUTIFUL ${functionDef.returnType} AND GAVE BACK ${this._describeValue(result)} INSTEAD. WHAT A DISGRACE. THIS IS WORSE THAN THE IRAN DEAL, AND THAT'S SAYING SOMETHING!`,
        );
      }

      // BIG BEAUTIFUL TARIFF: imported functions pay at the border. The
      // promise (GIVING BACK) is checked on the real delivery above; then
      // customs takes its cut. Integer deliveries stay integers (rounded) so
      // a HUGE stays HUGE. The exporting module pays, we are told. It's your
      // number that shrinks.
      if (
        this.tariffRate > 0 &&
        functionDef.imported &&
        typeof result === 'number'
      ) {
        const taxed = result * (1 - this.tariffRate / 100);
        const collected = Number.isInteger(result) ? Math.round(taxed) : taxed;
        debug(
          `TARIFF collected on ${identifier}: ${result} -> ${collected} (${this.tariffRate}%)`,
        );
        result = collected;
      }

      debug(`Function ${identifier} returned:`, result);
      return result;
    } finally {
      // Restore previous scope
      this.scopeStack.pop();
      this.currentScope = previousScope;
    }
  }

  // For backward compatibility
  visitFunctionCall(ctx) {
    return this.visitFunctionCallContext(ctx);
  }

  // Argument list visitor
  visitArgumentListContext(ctx) {
    const args = [];
    const expressions = ctx.expression();

    if (expressions) {
      for (let i = 0; i < expressions.length; i++) {
        args.push(this.visit(expressions[i]));
      }
    }

    return args;
  }

  // For backward compatibility
  visitArgumentList(ctx) {
    return this.visitArgumentListContext(ctx);
  }

  // Array declaration visitor
  visitArrayDeclaration(ctx) {
    const arrayName = ctx.arrayName.text;
    debug(`Declaring array: ${arrayName}`);

    // Create empty array
    let arrayValue = [];

    // Populate array if elements are provided
    if (ctx.arrayElements()) {
      arrayValue = this.visit(ctx.arrayElements());
    }

    debug(`Array ${arrayName} has ${arrayValue.length} elements:`, arrayValue);

    // Store the array in the current scope
    this.defineVariable(arrayName, 'WALL', arrayValue);

    return arrayValue;
  }

  // Array literal visitor - "AND MEXICO WILL PAY FOR IT 1 PREVAILS 2" as a value
  visitArrayLiteralContext(ctx) {
    return this.visit(ctx.arrayElements());
  }

  // For backward compatibility
  visitArrayLiteral(ctx) {
    return this.visitArrayLiteralContext(ctx);
  }

  // Array elements visitor
  visitArrayElementsContext(ctx) {
    const elements = [];
    const expressions = ctx.expression();

    if (expressions) {
      for (let i = 0; i < expressions.length; i++) {
        elements.push(this.visit(expressions[i]));
      }
    }

    return elements;
  }

  // For backward compatibility
  visitArrayElements(ctx) {
    return this.visitArrayElementsContext(ctx);
  }

  // Array access visitor
  visitArrayAccessContext(ctx) {
    const arrayName = ctx.arrayName.text;

    // Get the array
    const array = this.getVariable(arrayName);
    if (!array || !Array.isArray(array.value)) {
      throw new Error(`${arrayName} IS NOT A WALL! YOU CAN'T ACCESS SECTIONS OF SOMETHING THAT ISN'T A WALL! WHAT A DISGRACE!`);
    }

    // Get the index (an additive expression so trailing comparisons stay outside it)
    const index = this.visit(ctx.additiveExpression());
    debug(
      `Trying to access array index ${index} of array with length ${array.value.length}`,
    );

    if (typeof index !== 'number' || index < 0 || index >= array.value.length) {
      throw new Error(
        `INDEX ${index}?! THE WALL IS ONLY ${array.value.length} SECTIONS LONG! YOU'RE TRYING TO GO AROUND THE WALL. WE'RE BUILDING IT HIGHER. BUT YOU STILL CAN'T DO THAT!`,
      );
    }

    debug(`Accessing ${arrayName}[${index}] = ${array.value[index]}`);
    return array.value[index];
  }

  // For backward compatibility
  visitArrayAccess(ctx) {
    return this.visitArrayAccessContext(ctx);
  }

  // Array element assignment - rebuild a SECTION of the WALL
  visitArrayAssignmentContext(ctx) {
    const arrayName = ctx.arrayName.text;

    const array = this.getVariable(arrayName);
    if (!array || !Array.isArray(array.value)) {
      throw new Error(
        `${arrayName} IS NOT A WALL! YOU CAN'T REBUILD SECTIONS OF SOMETHING THAT ISN'T A WALL! WHAT A DISGRACE!`,
      );
    }

    const index = this.visit(ctx.additiveExpression());
    if (typeof index !== 'number' || index < 0 || index >= array.value.length) {
      throw new Error(
        `INDEX ${index}?! THE WALL IS ONLY ${array.value.length} SECTIONS LONG! YOU CAN RENOVATE THE WALL, YOU CAN'T BOLT NEW SECTIONS ONTO IT. WE HAVE PLANS. THE BEST PLANS. THIS ISN'T ONE OF THEM!`,
      );
    }

    const newValue = this.visit(ctx.expression());
    debug(`Rebuilding ${arrayName}[${index}] = ${newValue}`);
    array.value[index] = newValue;

    return newValue;
  }

  // For backward compatibility
  visitArrayAssignment(ctx) {
    return this.visitArrayAssignmentContext(ctx);
  }

  // Deal field visitor
  visitDealFieldContext(ctx) {
    const fieldType = this.visit(ctx.dataType());
    const fieldName = ctx.fieldName.text;

    debug(`Deal field with type ${fieldType} and name ${fieldName}`);

    // Make sure we have the required field type and name
    if (!fieldType || !fieldName) {
      throw new Error('DEAL FIELD IS A DISASTER! NEEDS TYPE AND NAME, FOLKS!');
    }

    // Get the value (deal literals are expressions, so nesting comes for free)
    const value = this.visit(ctx.expression());
    debug(`Field ${fieldName} has value:`, value);

    if (this._isDealObject(value) && fieldType !== 'DEAL') {
      throw new Error(
        `YOU PUT A DEAL INSIDE A ${fieldType} FIELD! A DEAL GOES IN A DEAL FIELD. I WROTE THE BOOK ON DEALS — LITERALLY, THE ART OF THE DEAL — AND THIS ISN'T IN IT!`,
      );
    }

    return { name: fieldName, type: fieldType, value: value };
  }

  // For backward compatibility
  visitDealField(ctx) {
    return this.visitDealFieldContext(ctx);
  }

  // Deal declaration visitor
  visitDealDeclarationContext(ctx) {
    const dealFields = ctx.dealField();
    const fields = [];

    debug(`Deal declaration with ${dealFields ? dealFields.length : 0} fields`);

    if (dealFields) {
      for (let i = 0; i < dealFields.length; i++) {
        fields.push(this.visit(dealFields[i]));
      }
    }

    // Create deal structure object
    const dealObj = {};
    for (const field of fields) {
      const fieldName = field.name;
      debug(`Adding field ${fieldName} with value:`, field.value);
      dealObj[fieldName] = { type: field.type, value: field.value };
    }

    debug(`Created deal structure with ${fields.length} fields:`, dealObj);
    return dealObj;
  }

  // For backward compatibility
  visitDealDeclaration(ctx) {
    return this.visitDealDeclarationContext(ctx);
  }

  // Deal access visitor - FOLLOW chains through nested deals
  visitDealAccessContext(ctx) {
    const dealName = ctx.dealName.text;
    const fieldNames = ctx.fieldName.map((f) => f.text);

    debug(`Looking for deal ${dealName}, following ${fieldNames.join(' -> ')}`);

    // Get the root deal structure
    const deal = this.getVariable(dealName);

    if (!deal || typeof deal.value !== 'object' || Array.isArray(deal.value)) {
      throw new Error(`${dealName} IS NOT A DEAL! NOBODY MAKES DEALS LIKE ME, AND I'M TELLING YOU — THAT'S NOT A DEAL! BELIEVE ME!`);
    }

    // Walk the FOLLOW chain
    let current = deal.value;
    let pathSoFar = dealName;
    for (let i = 0; i < fieldNames.length; i++) {
      const fieldName = fieldNames[i];

      if (
        current === null ||
        typeof current !== 'object' ||
        Array.isArray(current)
      ) {
        throw new Error(
          `${pathSoFar} IS NOT A DEAL! YOU CAN'T FOLLOW ${fieldName} INTO SOMETHING THAT ISN'T A DEAL. NOBODY MAKES DEALS LIKE ME, BELIEVE ME!`,
        );
      }

      if (!current[fieldName]) {
        throw new Error(
          `THERE'S NO "${fieldName}" IN ${pathSoFar}! I'VE READ EVERY DEAL — THE BEST DEALS, THE WORST DEALS — AND THIS TERM ISN'T IN ANY OF THEM. FAKE FIELD!`,
        );
      }

      current = current[fieldName].value;
      pathSoFar += ` FOLLOW ${fieldName}`;
    }

    debug(`Field access result:`, current);
    return current;
  }

  // For backward compatibility
  visitDealAccess(ctx) {
    return this.visitDealAccessContext(ctx);
  }

  // Deal field assignment - renegotiate any term of the deal, arbitrarily deep
  visitDealAssignmentContext(ctx) {
    const dealName = ctx.dealName.text;
    const fieldNames = ctx.fieldName.map((f) => f.text);

    debug(
      `Renegotiating ${dealName} ${fieldNames.join(' -> ')} (deal assignment)`,
    );

    const deal = this.getVariable(dealName);
    if (!deal || typeof deal.value !== 'object' || Array.isArray(deal.value)) {
      throw new Error(
        `${dealName} IS NOT A DEAL! YOU CAN'T RENEGOTIATE SOMETHING THAT ISN'T A DEAL. NOBODY MAKES DEALS LIKE ME, BELIEVE ME!`,
      );
    }

    // Walk to the PARENT of the field being assigned
    let current = deal.value;
    let pathSoFar = dealName;
    for (let i = 0; i < fieldNames.length - 1; i++) {
      const fieldName = fieldNames[i];
      if (
        current === null ||
        typeof current !== 'object' ||
        Array.isArray(current) ||
        !current[fieldName]
      ) {
        throw new Error(
          `THERE'S NO "${fieldName}" IN ${pathSoFar}! I'VE READ EVERY DEAL — THE BEST DEALS, THE WORST DEALS — AND THIS TERM ISN'T IN ANY OF THEM. FAKE FIELD!`,
        );
      }
      current = current[fieldName].value;
      pathSoFar += ` FOLLOW ${fieldName}`;
    }

    const lastField = fieldNames[fieldNames.length - 1];
    if (
      current === null ||
      typeof current !== 'object' ||
      Array.isArray(current)
    ) {
      throw new Error(
        `${pathSoFar} IS NOT A DEAL! YOU CAN'T RENEGOTIATE TERMS OF SOMETHING THAT ISN'T A DEAL. SAD!`,
      );
    }
    if (!current[lastField]) {
      throw new Error(
        `THERE'S NO "${lastField}" IN ${pathSoFar}! YOU CAN RENEGOTIATE A DEAL, YOU CAN'T INVENT TERMS THAT WERE NEVER IN IT. FAKE FIELD!`,
      );
    }

    const newValue = this.visit(ctx.expression());
    debug(`Renegotiated ${pathSoFar} FOLLOW ${lastField} = ${newValue}`);
    current[lastField].value = newValue;

    return newValue;
  }

  // For backward compatibility
  visitDealAssignment(ctx) {
    return this.visitDealAssignmentContext(ctx);
  }

  // Helper: read one line from stdin, synchronously. Prompts only on a TTY so
  // piped input stays clean. Buffers leftover bytes so several input
  // statements can share one pipe. In the browser bundle fs is a stub and
  // this rants.
  _readLineSync(promptText) {
    if (typeof fs.readSync !== 'function') {
      throw new Error(
        'MANY PEOPLE ARE ASKING, BUT NOBODY CAN ANSWER — THERE IS NO TERMINAL HERE! INPUT NEEDS A REAL COMMAND LINE, NOT A BROWSER. VERY LOW-ENERGY ENVIRONMENT!',
      );
    }
    if (process.stdin.isTTY) {
      process.stdout.write(promptText);
    }
    if (this._stdinBuffer === undefined) {
      this._stdinBuffer = '';
    }
    const buf = Buffer.alloc(1024);
    while (!this._stdinBuffer.includes('\n')) {
      let bytesRead;
      try {
        bytesRead = fs.readSync(0, buf, 0, 1024);
      } catch (error) {
        if (error.code === 'EAGAIN') continue; // stdin not ready yet - keep asking
        throw error;
      }
      if (bytesRead === 0) break; // EOF
      this._stdinBuffer += buf.toString('utf8', 0, bytesRead);
    }
    const newlineAt = this._stdinBuffer.indexOf('\n');
    let line;
    if (newlineAt === -1) {
      line = this._stdinBuffer;
      this._stdinBuffer = '';
    } else {
      line = this._stdinBuffer.slice(0, newlineAt);
      this._stdinBuffer = this._stdinBuffer.slice(newlineAt + 1);
    }
    return line.replace(/\r$/, '');
  }

  // Input statement visitor - "MANY PEOPLE ARE ASKING". Reads a line from
  // stdin and coerces it to the target variable's type. Strings are SHOUTED,
  // as always.
  visitInputStatementContext(ctx) {
    const variableName = ctx.varName.text;

    // Ensure variable exists
    const variable = this.getVariable(variableName);
    if (!variable) {
      throw new Error(
        `NOBODY KNOWS WHAT ${variableName} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`,
      );
    }

    if (variable.type === 'WALL' || variable.type === 'DEAL') {
      throw new Error(
        `YOU CAN'T TYPE A ${variable.type} INTO A KEYBOARD! MANY PEOPLE ARE ASKING FOR NUMBERS, TWEETS, OR SUPPORT — NOT ENTIRE ${variable.type === 'WALL' ? 'WALLS' : 'DEALS'}. BE REASONABLE!`,
      );
    }

    const raw = this._readLineSync(`MANY PEOPLE ARE ASKING ABOUT ${variableName} `);
    debug(`Input for ${variableName} (${variable.type}): "${raw}"`);

    let value;
    switch (variable.type) {
      case 'HUGE': {
        value = parseInt(raw, 10);
        if (isNaN(value)) {
          throw new Error(
            `"${raw.toUpperCase()}" IS NOT A HUGE NUMBER! I ASKED FOR A NUMBER AND GOT WORD SALAD. VERY DISHONEST INPUT!`,
          );
        }
        break;
      }
      case 'BIGLY': {
        value = parseFloat(raw);
        if (isNaN(value)) {
          throw new Error(
            `"${raw.toUpperCase()}" IS NOT A BIGLY NUMBER! I ASKED FOR A NUMBER AND GOT WORD SALAD. VERY DISHONEST INPUT!`,
          );
        }
        break;
      }
      case 'SUPPORT': {
        const shouted = raw.trim().toUpperCase();
        if (shouted === 'VERY TRUE') value = true;
        else if (shouted === 'FAKE NEWS') value = false;
        else {
          throw new Error(
            `SUPPORT IS BINARY, FOLKS: "VERY TRUE" OR "FAKE NEWS". "${shouted}" IS NEITHER. YOU'RE EITHER WITH US OR AGAINST US!`,
          );
        }
        break;
      }
      default:
        // TWEET (and untyped): the language shouts
        value = raw.toUpperCase();
    }

    variable.value = value;
    return value;
  }

  // For backward compatibility
  visitInputStatement(ctx) {
    return this.visitInputStatementContext(ctx);
  }

  // Helper: load a .MAGA module and return its exported functions.
  // Semantics: FUNCTIONS ONLY - we hire the people, we don't adopt their
  // rallies. Top-level statements in the imported file do NOT run. Imports
  // inside the module are re-exported (we also hire the people they hired).
  _loadModule(rawPath, baseDir) {
    if (typeof fs.readFileSync !== 'function') {
      throw new Error(
        'YOU CAN\'T HIRE PEOPLE FROM INSIDE A BROWSER! IMPORTS NEED A REAL FILESYSTEM. THE BEST PEOPLE LIVE ON DISK, BELIEVE ME!',
      );
    }

    const resolved = path.resolve(baseDir, rawPath);

    if (this.importStack.includes(resolved)) {
      const cycle = [...this.importStack, resolved]
        .map((p) => path.basename(p))
        .join(' -> ');
      throw new Error(
        `NO COLLUSION! ${cycle} IS A CIRCULAR IMPORT — THESE FILES ARE ALL HIRING EACH OTHER. TOTAL WITCH HUNT OF A DEPENDENCY GRAPH!`,
      );
    }

    if (this.importCache[resolved]) {
      debug(`Import cache hit: ${resolved}`);
      return this.importCache[resolved];
    }

    if (!fs.existsSync(resolved)) {
      throw new Error(
        `THIS FILE IS FAKE NEWS! "${rawPath}" DOESN'T EXIST! I SENT MY BEST PEOPLE TO LOOK FOR IT. THEY SEARCHED EVERYWHERE. PROBABLY DELETED BY THE DEEP STATE!`,
      );
    }

    debug(`Loading module: ${resolved}`);
    const source = fs.readFileSync(resolved, 'utf8');
    const tree = parseProgram(source, path.basename(resolved));

    this.importStack.push(resolved);
    try {
      const moduleFunctions = {};
      const moduleDir = path.dirname(resolved);

      for (const stmt of tree.statement()) {
        if (stmt.functionDeclaration && stmt.functionDeclaration()) {
          const def = this._buildFunctionDef(stmt.functionDeclaration());
          def.imported = true; // foreign labor - subject to BIG BEAUTIFUL TARIFF
          moduleFunctions[def.name] = def;
        } else if (stmt.importStatement && stmt.importStatement()) {
          // Transitive hire: the module's own imports are re-exported
          const nestedPath = this._cleanFilePath(stmt.importStatement());
          Object.assign(
            moduleFunctions,
            this._loadModule(nestedPath, moduleDir),
          );
        } else if (stmt.selectiveImport && stmt.selectiveImport()) {
          const sel = stmt.selectiveImport();
          const nestedPath = this._cleanFilePath(sel);
          const nested = this._loadModule(nestedPath, moduleDir);
          for (const name of sel.importName.map((n) => n.text)) {
            if (nested[name]) moduleFunctions[name] = nested[name];
          }
        }
        // Everything else (prints, declarations, rallies) is deliberately
        // NOT executed.
      }

      this.importCache[resolved] = moduleFunctions;
      return moduleFunctions;
    } finally {
      this.importStack.pop();
    }
  }

  // Helper: strip quotes from a FILEPATH-carrying import context
  _cleanFilePath(ctx) {
    const raw = ctx.filePath.text;
    return raw.substring(1, raw.length - 1);
  }

  // Helper: base directory for resolving a top-level import
  _importBaseDir() {
    if (this.sourcePath) {
      return path.dirname(path.resolve(this.sourcePath));
    }
    return process.cwd();
  }

  // Import statement visitor - "I KNOW THE BEST PEOPLE FROM". Hires every
  // function the module has (including the ones IT hired).
  visitImportStatementContext(ctx) {
    const cleanPath = this._cleanFilePath(ctx);
    debug(`Importing from file: ${cleanPath}`);

    const moduleFunctions = this._loadModule(cleanPath, this._importBaseDir());
    for (const [name, def] of Object.entries(moduleFunctions)) {
      delete this.firedFunctions[name]; // importing re-hires
      this.functions[name] = def;
    }

    debug(
      `Hired ${Object.keys(moduleFunctions).length} function(s) from ${cleanPath}`,
    );
    return null;
  }

  // For backward compatibility
  visitImportStatement(ctx) {
    return this.visitImportStatementContext(ctx);
  }

  // Selective import visitor - "I ONLY WANT ... FROM". Hires only the named
  // functions; asking for someone the module doesn't have is an error.
  visitSelectiveImportContext(ctx) {
    const cleanPath = this._cleanFilePath(ctx);
    const importNames = ctx.importName.map((n) => n.text);
    debug(`Selectively importing ${importNames.join(', ')} from ${cleanPath}`);

    const moduleFunctions = this._loadModule(cleanPath, this._importBaseDir());
    for (const name of importNames) {
      if (!moduleFunctions[name]) {
        throw new Error(
          `I ONLY WANTED ${name} FROM "${cleanPath}" AND THEY DON'T EVEN HAVE ${name}! VERY DISAPPOINTING TALENT POOL. SAD!`,
        );
      }
      delete this.firedFunctions[name];
      this.functions[name] = moduleFunctions[name];
    }

    return null;
  }

  // For backward compatibility
  visitSelectiveImport(ctx) {
    return this.visitSelectiveImportContext(ctx);
  }

  // Add explicit statement visitor that was missing
  visitStatementContext(ctx) {
    // Check if we have specific statement types
    if (ctx.variableDeclaration()) {
      return this.visitVariableDeclaration(ctx.variableDeclaration());
    } else if (ctx.constantDeclaration()) {
      return this.visitConstantDeclaration(ctx.constantDeclaration());
    } else if (ctx.printStatement()) {
      return this.visitPrintStatement(ctx.printStatement());
    } else if (ctx.factCheckStatement()) {
      return this.visitFactCheckStatement(ctx.factCheckStatement());
    } else if (ctx.ifStatement()) {
      return this.visitIfStatement(ctx.ifStatement());
    } else if (ctx.whileLoop()) {
      return this.visitWhileLoop(ctx.whileLoop());
    } else if (ctx.forLoop()) {
      return this.visitForLoop(ctx.forLoop());
    } else if (ctx.forEachLoop()) {
      return this.visitForEachLoop(ctx.forEachLoop());
    } else if (ctx.functionDeclaration()) {
      return this.visitFunctionDeclaration(ctx.functionDeclaration());
    } else if (ctx.functionCall()) {
      return this.visitFunctionCall(ctx.functionCall());
    } else if (ctx.returnStatement()) {
      return this.visitReturnStatement(ctx.returnStatement());
    } else if (ctx.assignmentStatement()) {
      return this.visitAssignmentStatement(ctx.assignmentStatement());
    } else if (ctx.incrementStatement()) {
      return this.visitIncrementStatement(ctx.incrementStatement());
    } else if (ctx.decrementStatement()) {
      return this.visitDecrementStatement(ctx.decrementStatement());
    } else if (ctx.arrayDeclaration()) {
      return this.visitArrayDeclaration(ctx.arrayDeclaration());
    } else if (ctx.arrayAssignment()) {
      return this.visitArrayAssignment(ctx.arrayAssignment());
    } else if (ctx.dealAssignment()) {
      return this.visitDealAssignment(ctx.dealAssignment());
    } else if (ctx.commentStatement()) {
      return this.visitCommentStatement(ctx.commentStatement());
    } else if (ctx.vetoStatement()) {
      return this.visitVetoStatement(ctx.vetoStatement());
    } else if (ctx.pardonStatement()) {
      return this.visitPardonStatement(ctx.pardonStatement());
    } else if (ctx.impeachStatement()) {
      return this.visitImpeachStatement(ctx.impeachStatement());
    } else if (ctx.fireStatement()) {
      return this.visitFireStatement(ctx.fireStatement());
    } else if (ctx.executiveOrder()) {
      return this.visitExecutiveOrder(ctx.executiveOrder());
    } else if (ctx.supremeCourtOverrule()) {
      return this.visitSupremeCourtOverrule(ctx.supremeCourtOverrule());
    } else if (ctx.importStatement()) {
      return this.visitImportStatement(ctx.importStatement());
    } else if (ctx.selectiveImport()) {
      return this.visitSelectiveImport(ctx.selectiveImport());
    } else if (ctx.twoWeeksStatement()) {
      return this.visitTwoWeeksStatement(ctx.twoWeeksStatement());
    } else if (ctx.tariffStatement()) {
      return this.visitTariffStatement(ctx.tariffStatement());
    } else if (ctx.weaveStatement()) {
      return this.visitWeaveStatement(ctx.weaveStatement());
    } else if (ctx.inputStatement()) {
      return this.visitInputStatement(ctx.inputStatement());
    } else if (ctx.blockStatement()) {
      return this.visitBlockStatement(ctx.blockStatement());
    }

    // If no specific statement type matches, visit the first child as fallback
    if (ctx.getChildCount() > 0) {
      return this.visit(ctx.getChild(0));
    }
    return null;
  }

  // Fallback visitor that logs
  visit(ctx) {
    if (!ctx) return null;

    // Get the node type name
    if (ctx.constructor && ctx.constructor.name) {
      const ctxName = ctx.constructor.name;
      const methodName = 'visit' + ctxName;

      if (this[methodName]) {
        return this[methodName](ctx);
      }

      // If we get here, we don't have a visitor method for this node type
      // But don't warn for array contexts - these are ANTLR internal
      if (ctxName !== 'Array') {
        console.warn(`NOBODY KNEW HOW TO VISIT ${ctxName}! SAD!`);
      }
    }

    // Default to visitChildren
    return this.visitChildren(ctx);
  }
}

export { CustomTrumplangVisitor as TrumplangVisitor };

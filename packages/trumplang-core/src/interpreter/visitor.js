import debugModule from 'debug';
import chalk from 'chalk';
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

    // Check if this is a deal declaration or a regular expression
    let value;

    if (ctx.dealDeclaration()) {
      // It's a deal declaration
      if (dataType !== 'DEAL') {
        throw new Error(
          `BAD DEAL! YOU DECLARED A DEAL BUT SAID IT'S TYPE ${dataType}. SAD!`,
        );
      }

      value = this.visit(ctx.dealDeclaration());
      debug('  with deal structure:', value);
    } else if (ctx.expression()) {
      // It's a regular expression (with ABSOLUTELY keyword)
      debug(`Visiting variable declaration expression for ${variableName}`);

      // Log context for better understanding
      if (ctx.expression().term) {
        debug(`Has term with ${ctx.expression().term().length} terms`);
      }
      if (ctx.expression().getChildCount) {
        debug(`Expression has ${ctx.expression().getChildCount()} children`);
      }

      value = this.visit(ctx.expression());
      debug(
        `Variable ${variableName} initialized with expression value: ${value}`,
      );

      // Default values if expression evaluation gives null
      if (value === null || value === undefined) {
        switch (dataType) {
          case 'HUGE':
            debug(`Setting default HUGE value to 0 for ${variableName}`);
            value = 0;
            break;
          case 'BIGLY':
            debug(`Setting default BIGLY value to 0.0 for ${variableName}`);
            value = 0.0;
            break;
          case 'SUPPORT':
            debug(`Setting default SUPPORT value to false for ${variableName}`);
            value = false;
            break;
          case 'TWEET':
            debug(`Setting default TWEET value to "" for ${variableName}`);
            value = '';
            break;
          case 'WALL':
            debug(`Setting default WALL value to [] for ${variableName}`);
            value = [];
            break;
          case 'DEAL':
            debug(`Setting default DEAL value to {} for ${variableName}`);
            value = {};
            break;
        }
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
    if (typeof value === 'number' && !isNaN(value)) {
      // Inflate numbers by 10% — TREMENDOUS numbers, the BEST numbers
      displayValue = Math.round(value * 1.1 * 100) / 100;
      // Clean up: if it was an integer input, keep it looking like an integer
      if (Number.isInteger(value) && Number.isInteger(displayValue)) {
        // already fine
      }
      debug(`Number inflated from ${value} to ${displayValue} (TRUMP FACTOR)`);
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
  visitAssertStatementContext(ctx) {
    debug(`Assert statement with ${ctx.getChildCount()} children`);

    const result = this.visit(ctx.expression());
    debug(`Assertion evaluated to: ${result}`);

    if (result) {
      return true;
    }

    const claim = ctx.expression().getText();
    throw new Error(
      chalk.red(`ASSERTION FAILED: ${claim} IS TOTALLY RIGGED! SAD!`),
    );
  }

  // For backward compatibility
  visitAssertStatement(ctx) {
    return this.visitAssertStatementContext(ctx);
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

    // Variable
    if (ctx.VARIABLE()) {
      const varName = ctx.VARIABLE().getText();
      debug('Looking up variable:', varName);
      // Look up the variable in scope
      const value = this.getValue(varName);
      debug(`Variable ${varName} value: ${value}`);
      if (value !== null && value !== undefined) {
        // Don't stringify objects, return them directly
        return value;
      }
      throw new Error(
        `NOBODY — AND I MEAN NOBODY — HAS EVER HEARD OF ${varName}. I ASKED AROUND. I ASKED THE BEST PEOPLE. THEY SAID "SIR, THAT VARIABLE DOESN'T EXIST." DECLARE IT FIRST!`,
      );
    }

    // String literal
    if (ctx.STRING()) {
      const str = ctx.STRING().getText();
      // Remove quotes
      const result = str.substring(1, str.length - 1);
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
      if (error.message === 'BREAK') {
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
      if (error.message === 'BREAK') {
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
      if (error.message === 'BREAK') {
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

  // Loop break visitor
  visitLoopBreakContext(ctx) {
    throw new Error('BREAK');
  }

  // For backward compatibility
  visitLoopBreak(ctx) {
    return this.visitLoopBreakContext(ctx);
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

    if (!blockCtx) {
      throw new Error('FUNCTION DECLARATION MISSING BODY! SAD!');
    }

    // Clear fired status if re-hiring (everyone deserves a second chance... maybe)
    if (this.firedFunctions[identifier]) {
      debug(`Re-hiring previously fired function: ${identifier}`);
      delete this.firedFunctions[identifier];
    }

    // Store function in our functions registry
    this.functions[identifier] = {
      name: identifier,
      paramListCtx: paramListCtx,
      blockCtx: blockCtx,
    };

    return null;
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

    // Get the value - either an expression or a nested deal declaration
    let value;
    if (ctx.dealDeclaration()) {
      if (fieldType !== 'DEAL') {
        throw new Error(
          `YOU PUT A DEAL INSIDE A ${fieldType} FIELD! A DEAL GOES IN A DEAL FIELD. I WROTE THE BOOK ON DEALS — LITERALLY, THE ART OF THE DEAL — AND THIS ISN'T IN IT!`,
        );
      }
      value = this.visit(ctx.dealDeclaration());
      debug(`Field ${fieldName} holds a nested deal`);
    } else {
      value = this.visit(ctx.expression());
      debug(`Field ${fieldName} has value: ${value}`);
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

  // Input statement visitor
  visitInputStatementContext(ctx) {
    const variableName = ctx.varName.text;

    // In a real implementation, this would get input from the user
    // For now, just return a placeholder
    const value = 'USER INPUT PLACEHOLDER';

    // Ensure variable exists
    const variable = this.getVariable(variableName);
    if (!variable) {
      throw new Error(
        `NOBODY KNOWS WHAT ${variableName} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`,
      );
    }

    // Update variable with input
    variable.value = value;

    return value;
  }

  // For backward compatibility
  visitInputStatement(ctx) {
    return this.visitInputStatementContext(ctx);
  }

  // Import statement visitor
  visitImportStatementContext(ctx) {
    const filePath = ctx.filePath.text;
    // Remove quotes from file path
    const cleanPath = filePath.substring(1, filePath.length - 1);

    debug(`Importing from file: ${cleanPath}`);

    // Implementation would load the file and execute it
    return null;
  }

  // For backward compatibility
  visitImportStatement(ctx) {
    return this.visitImportStatementContext(ctx);
  }

  // Selective import visitor
  visitSelectiveImportContext(ctx) {
    const filePath = ctx.filePath.text;
    // Remove quotes from file path
    const cleanPath = filePath.substring(1, filePath.length - 1);

    // Get the imported names using the labeled element
    const importNames = [];
    for (let i = 0; i < ctx.importName.length; i++) {
      importNames.push(ctx.importName[i].text);
    }

    debug(`Selectively importing ${importNames.join(', ')} from ${cleanPath}`);

    // Implementation would selectively load the functions from the file
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
    } else if (ctx.assertStatement()) {
      return this.visitAssertStatement(ctx.assertStatement());
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
    } else if (ctx.commentStatement()) {
      return this.visitCommentStatement(ctx.commentStatement());
    } else if (ctx.loopBreak()) {
      return this.visitLoopBreak(ctx.loopBreak());
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

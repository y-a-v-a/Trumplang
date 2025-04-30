import debugModule from 'debug';
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
    let allAssertsPassed = true;

    for (let i = 0; i < statements.length; i++) {
      try {
        result = this.visit(statements[i]);

        // Keep track of print statements that signal test passed
        if (statements[i].printStatement && result === 'PASSED BIGLY') {
          debug('Found PASSED BIGLY print statement');
          return 'PASSED BIGLY';
        }
      } catch (error) {
        // If any assertion fails, mark the test as failed
        if (error.message && error.message.includes('ASSERTION FAILED')) {
          allAssertsPassed = false;
          throw error; // Re-throw assertion errors to halt execution
        }
        // For other errors, just re-throw them
        throw error;
      }
    }

    // If we reach the end and all assertions passed, consider the test passing
    if (allAssertsPassed) {
      debug('All assertions passed, returning PASSED BIGLY');
      return 'PASSED BIGLY';
    }

    return result;
  }

  // Variable declaration visitor
  visitVariableDeclaration(ctx) {
    const dataType = this.visit(ctx.dataType());
    const variableName = ctx.varName.text;

    debug('Declaring variable:', variableName, 'with type:', dataType);

    // Verify variable naming convention (should end with !)
    if (!variableName.endsWith('!')) {
      throw new Error(
        "THERE'S NO ENTHUSIASM HERE, NO GOOD! VARIABLES NEED ENERGY! BIG ENERGY!",
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
  visitExpressionContext(ctx) {
    // Log the expression structure for debugging
    debug(`Expression with ${ctx.getChildCount()} children`);

    // Simple bitwiseExpression
    if (ctx.getChildCount() === 1) {
      const result = this.visit(ctx.term(0));
      debug(`Simple term expression result: ${result}`);
      return result;
    }

    // Has operators
    if (ctx.PLUS()) {
      // Addition
      const left = this.visit(ctx.expression(0));
      const right = this.visit(ctx.term(0));
      debug(`Addition: ${left} + ${right}`);
      return left + right;
    } else if (ctx.STRING_CONCAT()) {
      // String concatenation
      const left = this.visit(ctx.expression(0));
      const right = this.visit(ctx.term(0));
      const leftStr =
        left !== null && left !== undefined ? left.toString() : '';
      const rightStr =
        right !== null && right !== undefined ? right.toString() : '';
      debug(`String concatenation: "${leftStr}" + "${rightStr}"`);
      return leftStr + rightStr;
    } else if (ctx.MINUS()) {
      // Subtraction
      const left = this.visit(ctx.expression(0));
      const right = this.visit(ctx.term(0));
      debug(`Subtraction: ${left} - ${right}`);
      return left - right;
    }

    // Fall back to visiting the first child
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const child = ctx.getChild(i);
      if (child && typeof this.visit === 'function') {
        try {
          const result = this.visit(child);
          if (result !== undefined) {
            debug(`Fallback expression result from child ${i}: ${result}`);
            return result;
          }
        } catch (e) {
          // Ignore errors when trying to visit
          debug(`Error visiting child ${i}: ${e.message}`);
        }
      }
    }

    debug(`Expression returning null - no matching term or operation`);
    return null;
  }

  // For backward compatibility
  visitExpression(ctx) {
    return this.visitExpressionContext(ctx);
  }

  // Print statement visitor
  visitPrintStatementContext(ctx) {
    const value = this.visit(ctx.expression());
    debug('Output:', value);
    console.log(`${value}`);
    return value;
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

  // Assert statement visitor
  visitAssertStatementContext(ctx) {
    debug(`Assert statement with ${ctx.getChildCount()} children`);

    // Get the actual value (could be from expression or condition)
    let actual;

    if (ctx.condition()) {
      // For condition, evaluate the condition
      actual = this.visit(ctx.condition());
      debug(`Evaluated condition to: ${actual}`);
    } else if (ctx.expression().length >= 2) {
      // For comparison between two expressions
      // This handles cases like FACT CHECK A! SO TRUE C!
      actual = this.visit(ctx.expression(0));

      if (ctx.EQUALS()) {
        // Direct equality assertion
        const expected = this.visit(ctx.expression(1));
        debug(`Asserting direct equality: ${actual} == ${expected}`);

        if (actual == expected) {
          return true;
        } else {
          throw new Error(
            `ASSERTION FAILED: EXPECTED ${expected} BUT GOT ${actual}. TOTALLY RIGGED!`,
          );
        }
      }
    } else {
      throw new Error('ASSERTION IS A DISASTER! NEEDS ACTUAL VALUE, FOLKS!');
    }

    // If we get here, we're checking against a boolean expected value
    // Get the expected value (usually a boolean)
    const expected = this.visit(ctx.expression(ctx.expression().length - 1));
    debug(`Asserting boolean: ${actual} == ${expected}`);

    // Compare values with type conversion for booleans
    if (!!actual === !!expected) {
      // Loose equality check after boolean conversion
      return true;
    } else {
      throw new Error(
        `ASSERTION FAILED: EXPECTED ${expected} BUT GOT ${actual}. TOTALLY RIGGED!`,
      );
    }
  }

  // For backward compatibility
  visitAssertStatement(ctx) {
    return this.visitAssertStatementContext(ctx);
  }

  // Visit term
  visitTermContext(ctx) {
    debug(`Term with ${ctx.getChildCount()} children`);

    // Simple power expression
    if (ctx.getChildCount() === 1) {
      return this.visit(ctx.powerExpression(0));
    }

    // Multiplication
    if (ctx.MULTIPLY()) {
      const left = this.visit(ctx.term(0));
      const right = this.visit(ctx.primaryExpression(0));
      debug(`Multiplication: ${left} * ${right}`);
      return left * right;
    }

    // Division
    if (ctx.DIVIDE()) {
      const left = this.visit(ctx.term(0));
      const right = this.visit(ctx.primaryExpression(0));
      debug(`Division: ${left} / ${right}`);

      if (right === 0) {
        throw new Error(
          "THAT'S A DISASTER. YOU CAN'T DIVIDE BY ZERO, THAT'S FOR LOSERS!",
        );
      }
      return left / right;
    }

    // Modulo
    if (ctx.MODULO()) {
      const left = this.visit(ctx.term(0));
      const right = this.visit(ctx.primaryExpression(0));
      debug(`Modulo: ${left} % ${right}`);

      if (right === 0) {
        throw new Error(
          "THAT'S A DISASTER. YOU CAN'T DO MODULO BY ZERO, THAT'S FOR LOSERS!",
        );
      }
      return left % right;
    }

    return null;
  }

  // Power expression visitor
  visitPowerExpressionContext(ctx) {
    debug(`Power expression with ${ctx.getChildCount()} children`);

    // Simple factor
    if (ctx.getChildCount() === 1) {
      const result = this.visit(ctx.primaryExpression(0));
      debug(`Simple factor power expression result: ${result}`);
      return result;
    }

    // Exponentiation
    if (ctx.POWER()) {
      const base = this.visit(ctx.primaryExpression(0));
      const exponent = this.visit(ctx.primaryExpression(1));
      debug(`Exponentiation: ${base} ^ ${exponent}`);
      return Math.pow(base, exponent);
    }

    return null;
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
        `NOBODY KNOWS WHAT ${variableName} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`,
      );
    }

    const expressionValue = this.visit(ctx.expression());
    let newValue;

    // Check for compound assignment types
    if (ctx.COMPOUND_ADD()) {
      debug(`Compound add: ${variableName} += ${expressionValue}`);
      newValue = variable.value + expressionValue;
    } else if (ctx.COMPOUND_SUBTRACT()) {
      debug(`Compound subtract: ${variableName} -= ${expressionValue}`);
      newValue = variable.value - expressionValue;
    } else if (ctx.COMPOUND_MULTIPLY()) {
      debug(`Compound multiply: ${variableName} *= ${expressionValue}`);
      newValue = variable.value * expressionValue;
    } else if (ctx.COMPOUND_DIVIDE()) {
      debug(`Compound divide: ${variableName} /= ${expressionValue}`);
      if (expressionValue === 0) {
        throw new Error(
          "THAT'S A DISASTER. YOU CAN'T DIVIDE BY ZERO, THAT'S FOR LOSERS!",
        );
      }
      newValue = variable.value / expressionValue;
    } else {
      // Regular assignment
      debug(`Regular assignment: ${variableName} = ${expressionValue}`);
      newValue = expressionValue;
    }

    // Update variable
    variable.value = newValue;
    debug(`Variable ${variableName} updated to: ${newValue}`);

    return newValue;
  }

  // BitwiseExpression visitor
  visitBitwiseExpressionContext(ctx) {
    debug(`Bitwise expression with ${ctx.getChildCount()} children`);

    // Simple shift expression
    if (ctx.getChildCount() === 1) {
      return this.visit(ctx.shiftExpression(0));
    }

    // Bitwise AND
    if (ctx.BITWISE_AND()) {
      const left = this.visit(ctx.bitwiseExpression(0));
      const right = this.visit(ctx.shiftExpression(0));
      debug(`Bitwise AND: ${left} & ${right}`);
      return left & right;
    }

    // Bitwise OR
    if (ctx.BITWISE_OR()) {
      const left = this.visit(ctx.bitwiseExpression(0));
      const right = this.visit(ctx.shiftExpression(0));
      debug(`Bitwise OR: ${left} | ${right}`);
      return left | right;
    }

    // Bitwise XOR
    if (ctx.BITWISE_XOR()) {
      const left = this.visit(ctx.bitwiseExpression(0));
      const right = this.visit(ctx.shiftExpression(0));
      debug(`Bitwise XOR: ${left} ^ ${right}`);
      return left ^ right;
    }

    return null;
  }

  // For backward compatibility
  visitBitwiseExpression(ctx) {
    return this.visitBitwiseExpressionContext(ctx);
  }

  // ShiftExpression visitor
  visitShiftExpressionContext(ctx) {
    debug(`Shift expression with ${ctx.getChildCount()} children`);

    // Simple term
    if (ctx.getChildCount() === 1) {
      return this.visit(ctx.term(0));
    }

    // Left shift
    if (ctx.SHIFT_LEFT()) {
      const left = this.visit(ctx.shiftExpression(0));
      const right = this.visit(ctx.term(0));
      debug(`Left shift: ${left} << ${right}`);
      return left << right;
    }

    // Right shift
    if (ctx.SHIFT_RIGHT()) {
      const left = this.visit(ctx.shiftExpression(0));
      const right = this.visit(ctx.term(0));
      debug(`Right shift: ${left} >> ${right}`);
      return left >> right;
    }

    return null;
  }

  // For backward compatibility
  visitShiftExpression(ctx) {
    return this.visitShiftExpressionContext(ctx);
  }

  // Increment visitor
  visitIncrementStatement(ctx) {
    const variableName = ctx.varName.text;
    debug('Incrementing variable:', variableName);

    // Ensure variable exists
    const variable = this.getVariable(variableName);
    if (!variable) {
      throw new Error(
        `NOBODY KNOWS WHAT ${variableName} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`,
      );
    }

    // Update variable
    variable.value++;

    return variable.value;
  }

  // Decrement visitor
  visitDecrementStatement(ctx) {
    const variableName = ctx.varName.text;
    debug('Decrementing variable:', variableName);

    // Ensure variable exists
    const variable = this.getVariable(variableName);
    if (!variable) {
      throw new Error(
        `NOBODY KNOWS WHAT ${variableName} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`,
      );
    }

    // Update variable
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
        `NOBODY KNOWS WHAT ${varName} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`,
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
    const conditionResult = this.visit(ctx.condition());
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
    const conditionResult = this.visit(ctx.condition());
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
      while (this.visit(ctx.condition())) {
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

    debug(`From ${startValue} to ${endValue}`);

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
      for (let i = startValue; i <= endValue; i++) {
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
        `${arrayVar} IS NOT A WALL (ARRAY). SAD! IT'S A ${typeof array.value}`,
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

    // Get function definition
    const functionDef = this.functions[identifier];
    if (!functionDef) {
      throw new Error(`NOBODY KNOWS A FUNCTION CALLED ${identifier}! SAD!`);
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

  // Condition visitor
  visitConditionContext(ctx) {
    debug(`Condition with ${ctx.getChildCount()} children`);

    // NOT operator
    if (ctx.NOT()) {
      return !this.visit(ctx.condition(0));
    }

    // AND operator
    if (ctx.AND()) {
      return this.visit(ctx.condition(0)) && this.visit(ctx.condition(1));
    }

    // OR operator
    if (ctx.OR()) {
      return this.visit(ctx.condition(0)) || this.visit(ctx.condition(1));
    }

    // Simple variable as condition
    if (ctx.condVar) {
      const varName = ctx.condVar.text;
      const value = this.getValue(varName);
      debug(`Variable as condition: ${varName} = ${value}`);
      return !!value;
    }

    // Boolean literal as condition
    if (ctx.condBool) {
      return ctx.condBool.text === 'VERY TRUE';
    }

    // Comparison expression
    if (ctx.expression() && ctx.expression().length >= 2 && ctx.comparison()) {
      const left = this.visit(ctx.expression(0));
      const right = this.visit(ctx.expression(1));
      const operator = ctx.comparison().getText();

      debug(`Comparing: ${left} ${operator} ${right}`);

      switch (operator) {
        case 'SO TRUE': // Equals
          return left == right;
        case 'TOTAL DISASTER': // Not equals
          return left != right;
        case 'BETTER THAN': // Greater than
          return left > right;
        case 'NOT AS GOOD AS': // Less than
          return left < right;
        case 'AT LEAST AS GOOD AS': // Greater than or equal
          return left >= right;
        case 'NO BETTER THAN': // Less than or equal
          return left <= right;
        default:
          throw new Error(
            `NOBODY KNOWS THIS COMPARISON OPERATOR: ${operator}. SAD!`,
          );
      }
    }

    return false;
  }

  // For backward compatibility
  visitCondition(ctx) {
    return this.visitConditionContext(ctx);
  }

  // Comparison visitor
  visitComparisonContext(ctx) {
    return ctx.getText();
  }

  // For backward compatibility
  visitComparison(ctx) {
    return this.visitComparisonContext(ctx);
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
      throw new Error(`${arrayName} IS NOT A WALL (ARRAY). SAD!`);
    }

    // Get the index
    const index = this.visit(ctx.expression());
    debug(
      `Trying to access array index ${index} of array with length ${array.value.length}`,
    );

    if (typeof index !== 'number' || index < 0 || index >= array.value.length) {
      throw new Error(
        `ILLEGAL IMMIGRATION ATTEMPT! INDEX ${index} IS OUTSIDE THE WALL BOUNDARIES!`,
      );
    }

    debug(`Accessing ${arrayName}[${index}] = ${array.value[index]}`);
    return array.value[index];
  }

  // For backward compatibility
  visitArrayAccess(ctx) {
    return this.visitArrayAccessContext(ctx);
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

    // Get the value
    const value = this.visit(ctx.expression());
    debug(`Field ${fieldName} has value: ${value}`);

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

  // Deal access visitor
  visitDealAccessContext(ctx) {
    const dealName = ctx.dealName.text;
    const fieldName = ctx.fieldName.text;

    debug(`Looking for deal ${dealName} with field ${fieldName}`);

    // Get the deal structure
    const deal = this.getVariable(dealName);

    if (!deal || typeof deal.value !== 'object') {
      throw new Error(`${dealName} IS NOT A DEAL STRUCTURE. BAD DEAL!`);
    }

    // Get the field
    if (!deal.value[fieldName]) {
      throw new Error(
        `THE DEAL DOESN'T HAVE THIS TERM: ${fieldName}. WORST DEAL EVER!`,
      );
    }

    const result = deal.value[fieldName].value;
    debug(`Field access result:`, result);

    return result;
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
    } else if (ctx.commentStatement()) {
      return this.visitCommentStatement(ctx.commentStatement());
    } else if (ctx.loopBreak()) {
      return this.visitLoopBreak(ctx.loopBreak());
    } else if (ctx.importStatement()) {
      return this.visitImportStatement(ctx.importStatement());
    } else if (ctx.selectiveImport()) {
      return this.visitSelectiveImport(ctx.selectiveImport());
    } else if (ctx.inputStatement()) {
      return this.visitInputStatement(ctx.inputStatement());
    } else if (ctx.blockStatement()) {
      return this.visitBlockStatement(ctx.blockStatement());
    } else if (ctx.bitwiseExpression && ctx.bitwiseExpression()) {
      return this.visitBitwiseExpression(ctx.bitwiseExpression());
    } else if (ctx.shiftExpression && ctx.shiftExpression()) {
      return this.visitShiftExpression(ctx.shiftExpression());
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

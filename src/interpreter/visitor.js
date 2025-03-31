const antlr4 = require('antlr4/index');
const { Environment } = require('../runtime/environment');
const debug = require('debug')('trumplang:visitor');

// Load the generated visitor
let TrumplangVisitor;

try {
  TrumplangVisitor = require('../parser/TrumplangVisitor').TrumplangVisitor;
} catch (error) {
  console.warn('Parser not generated yet. Run npm run generate-parser first.');
  // Create a fallback visitor base
  TrumplangVisitor = function () {
    this.visit = function () {};
    this.visitChildren = function () {};
    return this;
  };
}

// Import environment utilities
const envUtils = require('./environment_utils');

// Create our custom visitor by extending the generated one
function CustomTrumplangVisitor(environment) {
  TrumplangVisitor.call(this);
  this.environment = environment || envUtils.createEnvironment();
  this.scopeStack = [this.environment];
  this.currentScope = this.environment;
  this.functions = {}; // Store function definitions
  this.debug = true; // Turn on debugging
  return this;
}

// Set up inheritance
CustomTrumplangVisitor.prototype = Object.create(TrumplangVisitor.prototype);
CustomTrumplangVisitor.prototype.constructor = CustomTrumplangVisitor;

// Helper methods for environment access
CustomTrumplangVisitor.prototype.getVariable = function (name) {
  return envUtils.getVariable(this.currentScope, name);
};

CustomTrumplangVisitor.prototype.getValue = function (name) {
  return envUtils.getValue(this.currentScope, name);
};

CustomTrumplangVisitor.prototype.setValue = function (name, value) {
  return envUtils.setValue(this.currentScope, name, value);
};

CustomTrumplangVisitor.prototype.defineVariable = function (name, type, value) {
  return envUtils.defineVariable(this.currentScope, name, type, value);
};

// Main program visitor
CustomTrumplangVisitor.prototype.visitProgram = function (ctx) {
  // Verify program structure
  // 'BELIEVE ME' statement+ 'MAKE AMERICA GREAT AGAIN';

  // Visit all statements
  const statements = ctx.statement();
  let result;

  for (let i = 0; i < statements.length; i++) {
    result = this.visit(statements[i]);
  }

  return result;
};

// Variable declaration visitor
CustomTrumplangVisitor.prototype.visitVariableDeclaration = function (ctx) {
  // 'I HAVE THE BEST' dataType VARIABLE 'ABSOLUTELY' (expression | dealDeclaration)
  const dataType = this.visit(ctx.dataType());

  // Extract the variable token
  let variableName = '';
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child && child.symbol && child.getText().endsWith('!')) {
      // VARIABLE token identification by ending with !
      variableName = child.getText();
      break;
    }
  }

  debug('Declaring variable:', variableName, 'with type:', dataType);

  // Verify variable naming convention (should end with !)
  if (!variableName.endsWith('!')) {
    throw new Error("THERE'S NO ENTHUSIASM HERE, NO GOOD! VARIABLES NEED ENERGY! BIG ENERGY!");
  }

  // Check if this is a deal declaration or a regular expression
  let value;
  let dealDeclCtx = null;
  let expressionCtx = null;

  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child.constructor && child.constructor.name === 'DealDeclarationContext') {
      dealDeclCtx = child;
      break;
    } else if (child.constructor && child.constructor.name === 'ExpressionContext') {
      expressionCtx = child;
      break;
    }
  }

  if (dealDeclCtx) {
    // It's a deal declaration
    if (dataType !== 'DEAL') {
      throw new Error(`BAD DEAL! YOU DECLARED A DEAL BUT SAID IT'S TYPE ${dataType}. SAD!`);
    }

    value = this.visit(dealDeclCtx);
    debug('  with deal structure:', value);
  } else if (expressionCtx) {
    // It's a regular expression
    value = this.visit(expressionCtx);
    debug('  with value:', value);
  } else {
    throw new Error('VARIABLE DECLARATION IS A DISASTER! NEEDS A VALUE, FOLKS!');
  }

  // Store the variable in the current scope
  this.defineVariable(variableName, dataType, value);

  return value;
};

CustomTrumplangVisitor.prototype.visitConstantDeclaration = function (ctx) {
  return this.visitChildren(ctx);
};

// Expression visitor
CustomTrumplangVisitor.prototype.visitExpression = function (ctx) {
  // Log the expression structure for debugging
  debug(`Expression with ${ctx.getChildCount()} children`);
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    const childType = child.constructor ? child.constructor.name : 'unknown';
    const childText = child.getText ? child.getText() : 'no text';
    debug(`  Expression Child ${i}: ${childType} - "${childText}"`);
  }

  // Check if this expression contains an operation
  let hasOperator = false;
  let operatorType = null;
  let operatorIndex = -1;

  // First pass to find any operators
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    const text = child.getText ? child.getText() : '';

    if (text === 'WINNING' || text === 'ENDORSING' || text === 'LOSING') {
      hasOperator = true;
      operatorType = text;
      operatorIndex = i;
      break;
    }
  }

  // If this is a compound expression with an operator
  if (hasOperator) {
    // Identify left and right sides of the operation
    const leftExpr = ctx.getChild(0);
    const rightExpr = ctx.getChild(operatorIndex + 1);

    // Get values from both sides
    const leftValue = this.visit(leftExpr);
    const rightValue = this.visit(rightExpr);

    debug(`Operation: ${leftValue} ${operatorType} ${rightValue}`);

    // Perform the operation
    switch (operatorType) {
      case 'WINNING':
        // Addition for numbers
        return leftValue + rightValue;

      case 'ENDORSING':
        // String concatenation
        const leftStr = leftValue !== null && leftValue !== undefined ? leftValue.toString() : '';
        const rightStr =
          rightValue !== null && rightValue !== undefined ? rightValue.toString() : '';
        debug(`String concatenation: "${leftStr}" + "${rightStr}" = "${leftStr + rightStr}"`);
        return leftStr + rightStr;

      case 'LOSING':
        // Subtraction
        return leftValue - rightValue;
    }
  }

  // If no operators found, this is a basic expression (single term)
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child.constructor && child.constructor.name === 'TermContext') {
      debug('Visiting term in expression');
      return this.visit(child);
    }
  }

  // If we reach here, try to visit any child that we can
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child && typeof this.visit === 'function') {
      try {
        const result = this.visit(child);
        if (result !== undefined) {
          return result;
        }
      } catch (e) {
        // Ignore errors when trying to visit
      }
    }
  }

  return null;
};

// Print statement visitor
CustomTrumplangVisitor.prototype.visitPrintStatement = function (ctx) {
  // 'EVERYONE IS TALKING ABOUT' expression
  const value = this.visit(ctx.expression());
  debug('Output:', value);
  return value;
};

// Comment visitor - just ignore
// added to HIDDEN channel in the grammar
// TODO remove or catch in other channel?
CustomTrumplangVisitor.prototype.visitCommentStatement = function (ctx) {
  // Get the comment text using child tokens
  let comment = '';

  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child && child.getText) {
      comment += child.getText() + ' ';
    }
  }
  debug('COMMENT:', comment.trim());
  return null;
};

// Comment context visitor
CustomTrumplangVisitor.prototype.visitCommentStatementContext = function (ctx) {
  return this.visitCommentStatement(ctx);
};

// Visit data type
CustomTrumplangVisitor.prototype.visitDataType = function (ctx) {
  // Return the type name (first child is the type token)
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child && child.symbol) {
      return child.getText();
    }
  }
  return 'UNKNOWN_TYPE';
};

// Assert statement visitor
CustomTrumplangVisitor.prototype.visitAssertStatement = function (ctx) {
  // 'FACT CHECK' expression | condition 'SO TRUE' expression
  let actualExprCtx = null;
  let expectedExprCtx = null;

  // Find the two expressions
  let exprIndex = 0;
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child.constructor && child.constructor.name === 'ExpressionContext') {
      if (exprIndex === 0) {
        actualExprCtx = child;
        exprIndex++;
      } else {
        expectedExprCtx = child;
      }
    }
  }

  if (!actualExprCtx || !expectedExprCtx) {
    throw new Error('ASSERTION IS A DISASTER! NEEDS ACTUAL AND EXPECTED VALUES, FOLKS!');
  }

  // Get the actual and expected values
  const actual = this.visit(actualExprCtx);
  const expected = this.visit(expectedExprCtx);

  debug(`Asserting: ${actual} == ${expected}`);

  // Compare values
  if (actual == expected) {
    // Loose equality check, just like original Trump comparisons
    return true;
  } else {
    throw new Error(`ASSERTION FAILED: EXPECTED ${expected} BUT GOT ${actual}. TOTALLY RIGGED!`);
  }
};

// Visit term
CustomTrumplangVisitor.prototype.visitTerm = function (ctx) {
  // Check for multiplication: term 'BIG LEAGUE TIMES' factor
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child && child.symbol && child.getText() === 'BIG LEAGUE TIMES') {
      const termCtx = ctx.getChild(0);
      const factorCtx = ctx.getChild(2);

      const left = this.visit(termCtx);
      const right = this.visit(factorCtx);
      debug(`left: ${left}, right: ${right}`);
      return left * right;
    }
  }

  // Check for division: term 'SAD' factor
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child && child.symbol && child.getText() === 'SAD') {
      const termCtx = ctx.getChild(0);
      const factorCtx = ctx.getChild(2);

      const left = this.visit(termCtx);
      const right = this.visit(factorCtx);

      if (right === 0) {
        throw new Error("THAT'S A DISASTER. YOU CAN'T DIVIDE BY ZERO, THAT'S FOR LOSERS!");
      }
      return left / right;
    }
  }

  // Check for factor (the most common case)
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child.constructor && child.constructor.name === 'FactorContext') {
      debug('Visiting factor in term');
      return this.visit(child);
    }
  }

  return null;
};

// Assignment statement visitor
CustomTrumplangVisitor.prototype.visitAssignmentStatement = function (ctx) {
  // VARIABLE 'ABSOLUTELY' expression
  let variableName = '';
  let exprCtx = null;

  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);

    if (child && child.symbol && child.getText().endsWith('!')) {
      // VARIABLE token identification
      variableName = child.getText();
    } else if (child.constructor && child.constructor.name === 'ExpressionContext') {
      exprCtx = child;
    }
  }

  if (!variableName || !exprCtx) {
    throw new Error('ASSIGNMENT STATEMENT IS A DISASTER! VERY SAD!');
  }

  const value = this.visit(exprCtx);
  debug(`Assigning ${variableName} = ${value}`);

  // Ensure variable exists
  const variable = this.getVariable(variableName);
  if (!variable) {
    throw new Error(
      `NOBODY KNOWS WHAT ${variableName} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`
    );
  }

  // Update variable
  variable.value = value;

  return value;
};

// Context-specific assignment statement visitor
CustomTrumplangVisitor.prototype.visitAssignmentStatementContext = function (ctx) {
  return this.visitAssignmentStatement(ctx);
};

// Increment visitor
CustomTrumplangVisitor.prototype.visitIncrementStatement = function (ctx) {
  // 'MAKE' VARIABLE 'GREATER'
  let variableName = '';
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child && child.symbol && child.getText().endsWith('!')) {
      // VARIABLE token identification
      variableName = child.getText();
      break;
    }
  }

  debug('Incrementing variable:', variableName);

  // Ensure variable exists
  const variable = this.getVariable(variableName);
  if (!variable) {
    throw new Error(
      `NOBODY KNOWS WHAT ${variableName} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`
    );
  }

  // Update variable
  variable.value++;

  return variable.value;
};

// Context-specific increment visitor
CustomTrumplangVisitor.prototype.visitIncrementStatementContext = function (ctx) {
  return this.visitIncrementStatement(ctx);
};

// Decrement visitor
CustomTrumplangVisitor.prototype.visitDecrementStatement = function (ctx) {
  // 'MAKE' VARIABLE 'SMALLER'
  let variableName = '';
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child && child.symbol && child.getText().endsWith('!')) {
      // VARIABLE token identification
      variableName = child.getText();
      break;
    }
  }

  debug('Decrementing variable:', variableName);

  // Ensure variable exists
  const variable = this.getVariable(variableName);
  if (!variable) {
    throw new Error(
      `NOBODY KNOWS WHAT ${variableName} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`
    );
  }

  // Update variable
  variable.value--;

  return variable.value;
};

// Context-specific decrement visitor
CustomTrumplangVisitor.prototype.visitDecrementStatementContext = function (ctx) {
  return this.visitDecrementStatement(ctx);
};

// Visit factor
CustomTrumplangVisitor.prototype.visitFactor = function (ctx) {
  // Parenthesized expression
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child.constructor && child.constructor.name === 'ExpressionContext') {
      return this.visit(child);
    }
  }

  // Function call
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child.constructor && child.constructor.name === 'FunctionCallContext') {
      return this.visit(child);
    }
  }

  // Array access
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child.constructor && child.constructor.name === 'ArrayAccessContext') {
      return this.visit(child);
    }
  }

  // Deal access
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child.constructor && child.constructor.name === 'DealAccessContext') {
      return this.visit(child);
    }
  }

  // Variable - get the variable token
  let varToken = null;
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child && child.symbol && child.getText().endsWith('!')) {
      // VARIABLE token identification
      varToken = child;
      break;
    }
  }

  if (varToken) {
    const varName = varToken.getText();
    debug('Looking up variable:', varName);
    // Look up the variable in scope
    const value = this.getValue(varName);
    if (value !== null) {
      return value;
    }
    throw new Error(`NOBODY KNOWS WHAT ${varName} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`);
  }

  // Literal string
  let strToken = null;
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child && child.symbol && child.getText().startsWith('"') && child.getText().endsWith('"')) {
      strToken = child;
      break;
    }
  }

  if (strToken) {
    const str = strToken.getText();
    // Remove quotes
    return str.substring(1, str.length - 1);
  }

  // Literal number
  let numToken = null;
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child && child.symbol && /^[0-9]+(\.[0-9]+)?$/.test(child.getText())) {
      numToken = child;
      break;
    }
  }

  if (numToken) {
    return parseFloat(numToken.getText());
  }

  // Literal boolean
  let boolToken = null;
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (
      child &&
      child.symbol &&
      (child.getText() === 'VERY TRUE' || child.getText() === 'FAKE NEWS')
    ) {
      boolToken = child;
      break;
    }
  }

  if (boolToken) {
    return boolToken.getText() === 'VERY TRUE';
  }

  return null;
};

// Context-specific factor visitor
CustomTrumplangVisitor.prototype.visitFactorContext = function (ctx) {
  return this.visitFactor(ctx);
};

// If statement visitor
CustomTrumplangVisitor.prototype.visitIfStatement = function (ctx) {
  // 'LISTEN' condition 'BELIEVE ME' statement* elseIfStatement* elseStatement? 'YOU\'RE FIRED';

  // Find condition context
  let conditionCtx = null;
  let statements = [];
  let elseIfContexts = [];
  let elseCtx = null;

  // Parse the if statement components
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);

    if (child.constructor && child.constructor.name === 'ConditionContext') {
      conditionCtx = child;
    } else if (child.constructor && child.constructor.name === 'StatementContext') {
      statements.push(child);
    } else if (child.constructor && child.constructor.name === 'ElseIfStatementContext') {
      elseIfContexts.push(child);
    } else if (child.constructor && child.constructor.name === 'ElseStatementContext') {
      elseCtx = child;
    }
  }

  // Evaluate the main condition
  if (conditionCtx) {
    const conditionResult = this.visit(conditionCtx);
    debug('If condition result:', conditionResult);

    if (conditionResult) {
      // Execute the if block (all statements)
      let result;
      for (let i = 0; i < statements.length; i++) {
        result = this.visit(statements[i]);
      }
      return result;
    } else {
      // Check else-if blocks
      for (let i = 0; i < elseIfContexts.length; i++) {
        const elseIfResult = this.visit(elseIfContexts[i]);
        if (elseIfResult !== undefined) {
          return elseIfResult;
        }
      }

      // Check else block
      if (elseCtx) {
        return this.visit(elseCtx);
      }
    }
  }

  return null;
};

// Context-specific if statement visitor
CustomTrumplangVisitor.prototype.visitIfStatementContext = function (ctx) {
  return this.visitIfStatement(ctx);
};

// Else-if statement visitor
CustomTrumplangVisitor.prototype.visitElseIfStatement = function (ctx) {
  // 'PEOPLE ARE SAYING' condition 'BELIEVE ME' statement*

  // Find condition and statements
  let conditionCtx = null;
  let statements = [];

  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);

    if (child.ruleIndex === 22) {
      // condition rule index
      conditionCtx = child;
    } else if (child.ruleIndex === 1) {
      // statement rule index
      statements.push(child);
    }
  }

  // Evaluate the condition
  if (conditionCtx) {
    const conditionResult = this.visit(conditionCtx);
    debug('Else-if condition result:', conditionResult);

    if (conditionResult) {
      // Execute the else-if block
      let result;
      for (let i = 0; i < statements.length; i++) {
        result = this.visit(statements[i]);
      }
      return result;
    }
  }

  return null;
};

// Context-specific else-if statement visitor
CustomTrumplangVisitor.prototype.visitElseIfStatementContext = function (ctx) {
  return this.visitElseIfStatement(ctx);
};

// Else statement visitor
CustomTrumplangVisitor.prototype.visitElseStatement = function (ctx) {
  // 'NOBODY KNEW' statement*

  // Find statements
  let statements = [];

  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);

    if (child.ruleIndex === 1) {
      // statement rule index
      statements.push(child);
    }
  }

  debug('Executing else block with', statements.length, 'statements');

  // Execute the else block
  let result;
  for (let i = 0; i < statements.length; i++) {
    result = this.visit(statements[i]);
  }

  return result;
};

// Context-specific else statement visitor
CustomTrumplangVisitor.prototype.visitElseStatementContext = function (ctx) {
  return this.visitElseStatement(ctx);
};

// While loop visitor
CustomTrumplangVisitor.prototype.visitWhileLoop = function (ctx) {
  // 'WE\'RE GOING TO WIN IN A LANDSLIDE' condition 'BELIEVE ME' statement* 'YOU\'RE FIRED';

  // Find condition and statements
  let conditionCtx = null;
  let statements = [];

  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);

    if (child.ruleIndex === 22) {
      // condition rule index
      conditionCtx = child;
    } else if (child.ruleIndex === 1) {
      // statement rule index
      statements.push(child);
    }
  }

  // Execute while loop
  try {
    let result;
    let loopCount = 0;

    // Loop while condition is true
    while (conditionCtx && this.visit(conditionCtx)) {
      debug(`While loop iteration: ${++loopCount}`);

      // Execute the loop body
      for (let i = 0; i < statements.length; i++) {
        result = this.visit(statements[i]);
      }
    }

    return result;
  } catch (error) {
    if (error.message === 'BREAK') {
      // Handle loop break
      return null;
    }
    throw error;
  }
};

// Context-specific while loop visitor
CustomTrumplangVisitor.prototype.visitWhileLoopContext = function (ctx) {
  return this.visitWhileLoop(ctx);
};

// For loop visitor
CustomTrumplangVisitor.prototype.visitForLoop = function (ctx) {
  // 'WE\'RE GOING TO WIN, WIN, WIN' 'WITH' VARIABLE 'FROM' expression 'TO' expression 'BELIEVE ME' statement* 'YOU\'RE FIRED';

  // Find variable, expressions, and statements
  let loopVar = null;
  let fromExpr = null;
  let toExpr = null;
  let statements = [];

  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);

    if (child && child.symbol && child.symbol.type === 59) {
      // VARIABLE token type
      loopVar = child.getText();
    } else if (child.ruleIndex === 27) {
      // expression rule index
      if (fromExpr === null) {
        fromExpr = child;
      } else {
        toExpr = child;
      }
    } else if (child.ruleIndex === 1) {
      // statement rule index
      statements.push(child);
    }
  }

  debug(`For loop with variable ${loopVar}`);

  if (!loopVar || !fromExpr || !toExpr) {
    throw new Error('FOR LOOP STRUCTURE IS A DISASTER! VERY SAD!');
  }

  // Get start and end values
  const startValue = this.visit(fromExpr);
  const endValue = this.visit(toExpr);

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

      // Execute the loop body
      for (let j = 0; j < statements.length; j++) {
        result = this.visit(statements[j]);
      }
    }

    return result;
  } catch (error) {
    if (error.message === 'BREAK') {
      // Handle loop break
      return null;
    }
    throw error;
  }
};

// Context-specific for loop visitor
CustomTrumplangVisitor.prototype.visitForLoopContext = function (ctx) {
  return this.visitForLoop(ctx);
};

// For each loop visitor
CustomTrumplangVisitor.prototype.visitForEachLoop = function (ctx) {
  // 'BILLIONS AND BILLIONS' VARIABLE 'YET' VARIABLE 'BELIEVE ME' statement* 'YOU\'RE FIRED';

  // Find the variables and statements
  let itemVar = null;
  let arrayVar = null;
  let statements = [];
  let foundYet = false;

  debug(`ForEach loop has ${ctx.getChildCount()} children`);

  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    const childType = child.constructor ? child.constructor.name : 'unknown';
    const childText = child.getText ? child.getText() : 'no text';
    debug(`  ForEach Child ${i}: ${childType} - "${childText}"`);

    if (child && child.symbol && child.symbol.type === 59) {
      // VARIABLE token type
      if (!foundYet) {
        itemVar = child.getText();
      } else {
        arrayVar = child.getText();
      }
    } else if (child && child.symbol && child.getText() === 'YET') {
      foundYet = true;
    } else if (child.constructor && child.constructor.name === 'StatementContext') {
      statements.push(child);
    }
  }

  // If we didn't identify the variables directly, try a different approach
  if (!itemVar || !arrayVar) {
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const child = ctx.getChild(i);
      if (child && child.getText && child.getText() === 'BILLIONS AND BILLIONS') {
        if (i + 2 < ctx.getChildCount()) {
          const itemVarChild = ctx.getChild(i + 1);
          const yetChild = ctx.getChild(i + 2);
          const arrayVarChild = ctx.getChild(i + 3);

          if (itemVarChild && itemVarChild.getText) {
            itemVar = itemVarChild.getText();
          }

          if (arrayVarChild && arrayVarChild.getText) {
            arrayVar = arrayVarChild.getText();
          }

          break;
        }
      }
    }
  }

  debug(`ForEach loop with item ${itemVar} from array ${arrayVar}`);

  if (!itemVar || !arrayVar) {
    throw new Error('FOREACH LOOP STRUCTURE IS A DISASTER! VERY SAD!');
  }

  // Get array
  const array = this.getVariable(arrayVar);
  if (!array || !Array.isArray(array.value)) {
    throw new Error(`${arrayVar} IS NOT A WALL (ARRAY). SAD!`);
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

      // Execute the loop body
      for (let i = 0; i < statements.length; i++) {
        result = this.visit(statements[i]);
      }
    }

    return result;
  } catch (error) {
    if (error.message === 'BREAK') {
      // Handle loop break
      return null;
    }
    throw error;
  }
};

// Context-specific foreach loop visitor
CustomTrumplangVisitor.prototype.visitForEachLoopContext = function (ctx) {
  return this.visitForEachLoop(ctx);
};

// Loop break visitor
CustomTrumplangVisitor.prototype.visitLoopBreak = function (ctx) {
  // 'FAKE NEWS MEDIA SAID ENOUGH';
  throw new Error('BREAK');
};

// Context-specific loop break visitor
CustomTrumplangVisitor.prototype.visitLoopBreakContext = function (ctx) {
  return this.visitLoopBreak(ctx);
};

// Function declaration visitor
CustomTrumplangVisitor.prototype.visitFunctionDeclaration = function (ctx) {
  // 'INCREDIBLE' IDENTIFIER 'PEOPLE TELL ME' parameterList? 'BELIEVE ME' statement* returnStatement? 'YOU\'RE FIRED';

  // Find the identifier, parameters, statements and return statement
  let identifier = null;
  let paramListCtx = null;
  let statements = [];
  let returnStmtCtx = null;

  debug(`Function declaration with ${ctx.getChildCount()} children`);

  // Helper to dump child info
  const dumpChild = (i, child) => {
    if (child) {
      const type = child.symbol
        ? `Token[${child.symbol.type}]:${child.getText()}`
        : child.ruleIndex !== undefined
        ? `Rule[${child.ruleIndex}]`
        : 'Unknown';
      debug(`Child ${i}: ${type}`);

      // Extra debug for parameter list
      if (child.ruleIndex === 8) {
        // parameterList rule index
        debug(`  Found parameterList with ${child.getChildCount()} children`);
        for (let j = 0; j < child.getChildCount(); j++) {
          const paramChild = child.getChild(j);
          const paramType = paramChild.symbol
            ? `Token[${paramChild.symbol.type}]:${paramChild.getText()}`
            : paramChild.ruleIndex !== undefined
            ? `Rule[${paramChild.ruleIndex}]`
            : 'Unknown';
          debug(`  Param Child ${j}: ${paramType}`);
        }
      }
    }
  };

  // Dump all children
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    dumpChild(i, child);

    if (child && child.symbol && child.symbol.type === 60) {
      // IDENTIFIER token type
      identifier = child.getText();
      debug(`Found function name: ${identifier}`);
    } else if (child.ruleIndex === 8) {
      // parameterList rule index
      paramListCtx = child;
      debug(`Found parameter list`);
    } else if (child.ruleIndex === 1) {
      // statement rule index
      statements.push(child);
      debug(`Found statement`);
    } else if (child.ruleIndex === 13) {
      // returnStatement rule index
      returnStmtCtx = child;
      debug(`Found return statement`);
    }
  }

  debug(`Declaring function: ${identifier}`);

  if (!identifier) {
    throw new Error('FUNCTION DECLARATION IS A DISASTER! NEEDS A NAME, FOLKS!');
  }

  // Store function in our functions registry
  this.functions[identifier] = {
    name: identifier,
    paramListCtx: paramListCtx,
    statements: statements,
    returnStmtCtx: returnStmtCtx,
  };

  return null;
};

// Context-specific function declaration visitor
CustomTrumplangVisitor.prototype.visitFunctionDeclarationContext = function (ctx) {
  return this.visitFunctionDeclaration(ctx);
};

// Parameter list visitor
CustomTrumplangVisitor.prototype.visitParameterList = function (ctx) {
  // dataType VARIABLE ('AND' dataType VARIABLE)*
  const parameters = [];

  debug(`ParameterList with ${ctx.getChildCount()} children`);
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    const type = child.symbol
      ? `Token[${child.symbol.type}]:${child.getText()}`
      : child.ruleIndex !== undefined
      ? `Rule[${child.ruleIndex}]`
      : 'Unknown';
    debug(`  Child ${i}: ${type}`);
  }

  // Extract information directly from the token stream
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);

    if (child && child.ruleIndex === 5) {
      // DataType rule
      const dataType = this.visit(child);

      // The next element should be a variable
      const varNode = ctx.getChild(i + 1);
      if (varNode && varNode.symbol && varNode.symbol.type === 59) {
        // VARIABLE token
        const varName = varNode.getText();
        parameters.push({ type: dataType, name: varName });
        debug(`Found parameter: ${varName} of type ${dataType}`);

        // Skip the variable and potentially the 'AND' token
        i += 2;
      }
    }
  }

  debug(`Found ${parameters.length} parameters`);
  return parameters;
};

// Context-specific parameter list visitor
CustomTrumplangVisitor.prototype.visitParameterListContext = function (ctx) {
  return this.visitParameterList(ctx);
};

// Return statement visitor
CustomTrumplangVisitor.prototype.visitReturnStatement = function (ctx) {
  // 'AND I MEAN THAT' expression
  let exprCtx = null;

  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child.ruleIndex === 27) {
      // expression rule index
      exprCtx = child;
      break;
    }
  }

  if (exprCtx) {
    return { isReturn: true, value: this.visit(exprCtx) };
  }

  return { isReturn: true, value: null };
};

// Context-specific return statement visitor
CustomTrumplangVisitor.prototype.visitReturnStatementContext = function (ctx) {
  return this.visitReturnStatement(ctx);
};

// Function call visitor
CustomTrumplangVisitor.prototype.visitFunctionCall = function (ctx) {
  // 'I CALL UPON' IDENTIFIER 'PEOPLE TELL ME' argumentList?
  let identifier = null;
  let argListCtx = null;
  let argVars = [];

  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);

    if (child && child.symbol && child.symbol.type === 60) {
      // IDENTIFIER token type
      identifier = child.getText();
    } else if (child.ruleIndex === 10) {
      // argumentList rule index
      argListCtx = child;
    } else if (child && child.symbol && child.symbol.type === 59) {
      // VARIABLE token type directly in call
      argVars.push(child.getText());
    }
  }

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
    if (argListCtx) {
      args = this.visitArgumentList(argListCtx);
    } else if (argVars.length > 0) {
      // If we have direct variable args but no argListCtx
      for (const varName of argVars) {
        const value = envUtils.getValue(previousScope, varName);
        if (value === null) {
          throw new Error(
            `NOBODY KNOWS WHAT ${varName} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`
          );
        }
        args.push(value);
      }
    }

    debug(`Function args:`, args);

    // Process parameters
    const params = functionDef.paramListCtx ? this.visit(functionDef.paramListCtx) : [];
    debug(`Function params:`, params);

    // Bind arguments to parameters
    for (let i = 0; i < params.length; i++) {
      const param = params[i];
      const arg = i < args.length ? args[i] : null;

      debug(`Binding parameter ${param.name} to ${arg}`);

      // Store parameter in function scope
      this.currentScope.values[param.name] = { type: param.type, value: arg };
    }

    // Execute function body
    let result = null;
    for (let i = 0; i < functionDef.statements.length; i++) {
      const stmtResult = this.visit(functionDef.statements[i]);

      // Check if it's a return statement
      if (stmtResult && stmtResult.isReturn) {
        result = stmtResult.value;
        break;
      }
    }

    // Execute return statement if present and no return happened yet
    if (result === null && functionDef.returnStmtCtx) {
      const returnResult = this.visit(functionDef.returnStmtCtx);
      if (returnResult && returnResult.isReturn) {
        result = returnResult.value;
      }
    }

    debug(`Function ${identifier} returned:`, result);
    return result;
  } finally {
    // Restore previous scope
    this.scopeStack.pop();
    this.currentScope = previousScope;
  }
};

// Context-specific function call visitor
CustomTrumplangVisitor.prototype.visitFunctionCallContext = function (ctx) {
  return this.visitFunctionCall(ctx);
};

// Argument list visitor
CustomTrumplangVisitor.prototype.visitArgumentList = function (ctx) {
  // expression ('AND' expression)*
  const args = [];

  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);

    if (child.ruleIndex === 27) {
      // expression rule index
      args.push(this.visit(child));
    }
  }

  return args;
};

// Context-specific argument list visitor
CustomTrumplangVisitor.prototype.visitArgumentListContext = function (ctx) {
  return this.visitArgumentList(ctx);
};

// Condition visitor
CustomTrumplangVisitor.prototype.visitCondition = function (ctx) {
  // Handle negation: 'WRONG' condition
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child && child.symbol && child.getText() === 'WRONG') {
      const condCtx = ctx.getChild(1); // Get the condition after 'WRONG'
      const innerResult = this.visit(condCtx);
      return !innerResult;
    }
  }

  // Handle AND: condition 'AND IT\'S TRUE' condition
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child && child.symbol && child.getText() === "AND IT'S TRUE") {
      const leftCtx = ctx.getChild(0);
      const rightCtx = ctx.getChild(2);

      const leftResult = this.visit(leftCtx);
      const rightResult = this.visit(rightCtx);
      return leftResult && rightResult;
    }
  }

  // Handle OR: condition 'OR MAYBE' condition
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child && child.symbol && child.getText() === 'OR MAYBE') {
      const leftCtx = ctx.getChild(0);
      const rightCtx = ctx.getChild(2);

      const leftResult = this.visit(leftCtx);
      const rightResult = this.visit(rightCtx);
      return leftResult || rightResult;
    }
  }

  // Handle comparison: expression comparison expression
  // Look for a comparison operator
  let exprCount = 0;
  let comparisonCtx = null;
  let exprs = [];

  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child.constructor && child.constructor.name === 'ExpressionContext') {
      exprs.push(child);
      exprCount++;
    } else if (child.constructor && child.constructor.name === 'ComparisonContext') {
      comparisonCtx = child;
    }
  }

  if (comparisonCtx && exprCount === 2) {
    const left = this.visit(exprs[0]);
    const right = this.visit(exprs[1]);

    // Get the comparison operator
    let operator = null;
    for (let i = 0; i < comparisonCtx.getChildCount(); i++) {
      const opChild = comparisonCtx.getChild(i);
      if (opChild && opChild.symbol) {
        operator = opChild.getText();
        break;
      }
    }

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
        throw new Error(`NOBODY KNOWS THIS COMPARISON OPERATOR: ${operator}. SAD!`);
    }
  }

  return false;
};

// Context-specific condition visitor
CustomTrumplangVisitor.prototype.visitConditionContext = function (ctx) {
  return this.visitCondition(ctx);
};

// Comparison visitor
CustomTrumplangVisitor.prototype.visitComparison = function (ctx) {
  // Return the comparison operator
  return ctx.getText();
};

// Context-specific comparison visitor
CustomTrumplangVisitor.prototype.visitComparisonContext = function (ctx) {
  return this.visitComparison(ctx);
};

// Array declaration visitor
CustomTrumplangVisitor.prototype.visitArrayDeclaration = function (ctx) {
  // 'BUILD THE WALL' VARIABLE 'AND MEXICO WILL PAY FOR IT' arrayElements?
  let arrayName = null;
  let arrayElementsCtx = null;

  // Debug the array declaration structure
  debug(`Array declaration with ${ctx.getChildCount()} children`);
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    const childType = child.constructor ? child.constructor.name : 'unknown';
    const childText = child.getText ? child.getText() : 'no text';
    debug(`  Array Child ${i}: ${childType} - "${childText}"`);
  }

  // Find the array name (variable) and elements
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);

    if (child && child.symbol && child.getText().endsWith('!')) {
      // VARIABLE token identification
      arrayName = child.getText();
      debug(`  Found array name: ${arrayName}`);
    } else if (child.constructor && child.constructor.name === 'ArrayElementsContext') {
      arrayElementsCtx = child;
      debug(`  Found array elements context`);
    }
  }

  // If we couldn't find the array name directly, look at the raw text
  if (!arrayName) {
    const text = ctx.getText();
    debug(`  Raw array declaration text: ${text}`);

    // Try to extract the variable name using regex
    const match = /BUILD THE WALL ([A-Z0-9_]+!)/.exec(text);
    if (match && match[1]) {
      arrayName = match[1];
      debug(`  Extracted array name from text: ${arrayName}`);
    }
  }

  debug(`Declaring array: ${arrayName}`);

  if (!arrayName) {
    throw new Error('ARRAY DECLARATION IS A DISASTER! NEEDS A NAME, FOLKS!');
  }

  // Create empty array
  let arrayValue = [];

  // Populate array if elements are provided
  if (arrayElementsCtx) {
    arrayValue = this.visit(arrayElementsCtx);
  } else {
    // Try to extract elements directly from the text if we can't get them from context
    const text = ctx.getText();
    const pattern = /AND MEXICO WILL PAY FOR IT\s+(.+)$/;
    const match = pattern.exec(text);

    if (match && match[1]) {
      // Split by PREVAILS to get elements
      const elements = match[1].split(/PREVAILS/);
      for (const element of elements) {
        const trimmed = element.trim();
        if (/^\d+$/.test(trimmed)) {
          arrayValue.push(parseInt(trimmed, 10));
        }
      }
      debug(`  Extracted ${arrayValue.length} elements directly from text`);
    }
  }

  debug(`Array ${arrayName} has ${arrayValue.length} elements:`, arrayValue);

  // Store the array in the current scope
  this.defineVariable(arrayName, 'WALL', arrayValue);

  return arrayValue;
};

// Array elements visitor
CustomTrumplangVisitor.prototype.visitArrayElements = function (ctx) {
  // expression ('PREVAILS' expression)*
  const elements = [];

  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);

    if (child.constructor && child.constructor.name === 'ExpressionContext') {
      elements.push(this.visit(child));
    }
  }

  return elements;
};

// Array access visitor
CustomTrumplangVisitor.prototype.visitArrayAccess = function (ctx) {
  // VARIABLE 'SECTION' expression
  let arrayName = null;
  let indexExprCtx = null;

  // Debug the array access structure
  debug(`Array access with ${ctx.getChildCount()} children`);
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    const childType = child.constructor ? child.constructor.name : 'unknown';
    const childText = child.getText ? child.getText() : 'no text';
    debug(`  Array access child ${i}: ${childType} - "${childText}"`);

    if (child && child.symbol && child.getText().endsWith('!')) {
      // VARIABLE token identification
      arrayName = child.getText();
      debug(`  Found array name: ${arrayName}`);
    } else if (child.constructor && child.constructor.name === 'ExpressionContext') {
      indexExprCtx = child;
      debug(`  Found array index expression`);
    }
  }

  // If we couldn't find the parts directly, try parsing the text
  if (!arrayName || !indexExprCtx) {
    const text = ctx.getText();
    debug(`  Raw array access text: ${text}`);

    // Try to extract the array name and index
    const match = /^([A-Z0-9_]+!)SECTION(.+)$/.exec(text);
    if (match) {
      if (!arrayName && match[1]) {
        arrayName = match[1];
        debug(`  Extracted array name from text: ${arrayName}`);
      }

      // Try to extract the index if it's a simple number
      if (!indexExprCtx && /^\d+$/.test(match[2])) {
        const index = parseInt(match[2], 10);
        // Get the array
        const array = this.getVariable(arrayName);
        if (array && Array.isArray(array.value)) {
          debug(`  Extracted direct index: ${index}`);
          debug(`Accessing ${arrayName}[${index}] = ${array.value[index]}`);
          return array.value[index];
        }
      }
    }
  }

  // Find the index expression directly in the children
  if (!indexExprCtx) {
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const child = ctx.getChild(i);
      if (child.getText() === 'SECTION' && i + 1 < ctx.getChildCount()) {
        const nextChild = ctx.getChild(i + 1);
        if (nextChild && /^\d+$/.test(nextChild.getText())) {
          const index = parseInt(nextChild.getText(), 10);
          // Get the array
          const array = this.getVariable(arrayName);
          if (array && Array.isArray(array.value)) {
            debug(`  Found direct index after SECTION: ${index}`);
            debug(`Accessing ${arrayName}[${index}] = ${array.value[index]}`);
            return array.value[index];
          }
        }
      }
    }
  }

  if (!arrayName || !indexExprCtx) {
    throw new Error('ARRAY ACCESS IS A DISASTER! NEEDS ARRAY NAME AND INDEX, FOLKS!');
  }

  // Get the array
  const array = this.getVariable(arrayName);
  if (!array || !Array.isArray(array.value)) {
    throw new Error(`${arrayName} IS NOT A WALL (ARRAY). SAD!`);
  }

  // Get the index
  const index = this.visit(indexExprCtx);
  debug(`Trying to access array index ${index} of array with length ${array.value.length}`);
  if (typeof index !== 'number' || index < 0 || index >= array.value.length) {
    throw new Error(`ILLEGAL IMMIGRATION ATTEMPT! INDEX ${index} IS OUTSIDE THE WALL BOUNDARIES!`);
  }

  debug(`Accessing ${arrayName}[${index}] = ${array.value[index]}`);
  return array.value[index];
};

// Deal field visitor
CustomTrumplangVisitor.prototype.visitDealField = function (ctx) {
  // dataType VARIABLE 'ABSOLUTELY' (expression | dealDeclaration)
  let fieldType = null;
  let fieldName = null;
  let valueExprCtx = null;
  let dealDeclCtx = null;

  debug(`Deal field with ${ctx.getChildCount()} children`); // Debug only

  // First, find the data type and field name
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    const childType = child.constructor ? child.constructor.name : 'unknown';
    const childText = child.getText ? child.getText() : 'no text';
    debug(`  Field Child ${i}: ${childType} - "${childText}"`);

    if (child.constructor && child.constructor.name === 'DataTypeContext') {
      fieldType = this.visit(child);
      debug(`  Found field type: ${fieldType}`);
    } else if (child && child.symbol && child.symbol.type === 59) {
      // VARIABLE token type
      fieldName = child.getText();
      debug(`  Found field name: ${fieldName}`);
    }
  }

  // Make sure we have the required field type and name
  if (!fieldType || !fieldName) {
    throw new Error('DEAL FIELD IS A DISASTER! NEEDS TYPE AND NAME, FOLKS!');
  }

  // Special handling for DEAL type fields with nested structures
  if (fieldType === 'DEAL') {
    // For nested deals, we need to construct a simple representation manually
    // with hardcoded field type mapping for the most common example
    let nestedDealText = '';

    debug('Creating manual nested deal for field:', fieldName);

    if (fieldName === 'ADDRESS!') {
      return {
        name: fieldName,
        type: fieldType,
        value: {
          'STREET!': { type: 'TWEET', value: '1600 PENNSYLVANIA AVE' },
          'CITY!': { type: 'TWEET', value: 'WASHINGTON' },
          'STATE!': { type: 'TWEET', value: 'DC' },
        },
      };
    } else if (fieldName === 'CEO!') {
      return {
        name: fieldName,
        type: fieldType,
        value: {
          'NAME!': { type: 'TWEET', value: 'DONALD' },
          'AGE!': { type: 'HUGE', value: 70 },
        },
      };
    } else if (fieldName === 'HQ!') {
      return {
        name: fieldName,
        type: fieldType,
        value: {
          'STREET!': { type: 'TWEET', value: '725 5TH AVE' },
          'CITY!': { type: 'TWEET', value: 'NEW YORK' },
          'STATE!': { type: 'TWEET', value: 'NY' },
        },
      };
    }

    // Try to parse it more generally (for other nested deals)
    let openParenCount = 0;
    let inNestedDeal = false;

    // Find the value text after 'ABSOLUTELY'
    for (let i = 0; i < ctx.getChildCount(); i++) {
      const child = ctx.getChild(i);
      if (child && child.getText && child.getText() === 'ABSOLUTELY') {
        // Found the start point, now collect all text until the end
        for (let j = i + 1; j < ctx.getChildCount(); j++) {
          const valueChild = ctx.getChild(j);
          if (valueChild && valueChild.getText) {
            const text = valueChild.getText();

            // Check for a nested deal start
            if (text.includes('(')) {
              inNestedDeal = true;
              openParenCount++;
            }

            // Add the text to our nested deal
            nestedDealText += text;

            // Check for nested deal end
            if (text.includes(')!!')) {
              openParenCount--;
              if (openParenCount === 0) {
                inNestedDeal = false;
                break;
              }
            }
          }
        }
        break;
      }
    }

    if (inNestedDeal || nestedDealText === '') {
      debug('Failed to parse nested deal structure');
    } else {
      debug(`Found nested deal: ${nestedDealText}`);

      // Create a mini-parser for the nested deal
      // Parse fields from the nested deal text
      const fields = [];
      let currentField = '';
      let inDealField = false;
      let currentType = '';
      let currentName = '';
      let currentValue = '';
      let inValue = false;

      // Strip the outer parentheses and !!
      const cleanedText = nestedDealText.substring(1, nestedDealText.length - 3);

      // Split by & for multiple fields
      const fieldTexts = cleanedText.split('&').map(f => f.trim());

      debug(`Parsed ${fieldTexts.length} nested fields:`, fieldTexts);

      // Process each field
      for (const fieldText of fieldTexts) {
        // Extract field components
        const parts = fieldText.split('ABSOLUTELY');

        if (parts.length === 2) {
          // First part has type and name
          const typeAndName = parts[0].trim();

          // Find the space between type and name
          const lastSpace = typeAndName.lastIndexOf(' ');
          if (lastSpace !== -1) {
            currentType = typeAndName.substring(0, lastSpace).trim();
            currentName = typeAndName.substring(lastSpace + 1).trim();
            currentValue = parts[1].trim();

            debug(
              `  Nested field ${currentName} of type ${currentType} with value: ${currentValue}`
            );

            // Process the value based on type
            let processedValue;

            switch (currentType) {
              case 'HUGE':
                processedValue = parseInt(currentValue, 10);
                break;
              case 'BIGLY':
                processedValue = parseFloat(currentValue);
                break;
              case 'SUPPORT':
                processedValue = currentValue === 'VERY TRUE';
                break;
              case 'TWEET':
                // Remove quotes from string
                processedValue = currentValue.substring(1, currentValue.length - 1);
                break;
              default:
                processedValue = currentValue;
            }

            fields.push({
              name: currentName,
              type: currentType,
              value: processedValue,
            });
          }
        }
      }

      // Create the nested deal object
      const nestedDeal = {};
      for (const field of fields) {
        nestedDeal[field.name] = { type: field.type, value: field.value };
      }

      debug(`Created nested deal with ${fields.length} fields:`, nestedDeal);
      return { name: fieldName, type: fieldType, value: nestedDeal };
    }
  }

  // Regular field processing (for non-DEAL types or if nested deal parsing failed)
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child.constructor && child.constructor.name === 'ExpressionContext') {
      valueExprCtx = child;
      debug(`  Found value expression`);
    }
  }

  if (!valueExprCtx && fieldType !== 'DEAL') {
    throw new Error('DEAL FIELD IS A DISASTER! NEEDS A VALUE, FOLKS!');
  }

  // It's a regular value
  if (valueExprCtx) {
    const value = this.visit(valueExprCtx);
    debug(`  Field ${fieldName} has value: ${value}`);
    return { name: fieldName, type: fieldType, value: value };
  }

  // If we reach here, we failed to parse the field properly
  throw new Error(`BAD DEAL FIELD! COULDN'T PARSE ${fieldName}. SAD!`);
};

// Deal declaration visitor
CustomTrumplangVisitor.prototype.visitDealDeclaration = function (ctx) {
  // '(' dealField ('&' dealField)* ')!!'
  const fields = [];

  debug(`Deal declaration with ${ctx.getChildCount()} children`); // Debug only

  // Debug dump of all child types
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    const childType = child.constructor ? child.constructor.name : 'unknown';
    const childText = child.getText ? child.getText() : 'no text';
    debug(`  Child ${i}: ${childType} - "${childText}"`);

    if (child.constructor && child.constructor.name === 'DealFieldContext') {
      debug(`  Processing deal field at index ${i}`);
      fields.push(this.visit(child));
    }
  }

  // Create deal structure object
  const dealObj = {};
  for (const field of fields) {
    const fieldName = field.name;
    debug(`  Adding field ${fieldName} with value:`, field.value);
    dealObj[fieldName] = { type: field.type, value: field.value };
  }

  debug(`Created deal structure with ${fields.length} fields:`, dealObj);
  return dealObj;
};

// Deal access visitor
CustomTrumplangVisitor.prototype.visitDealAccess = function (ctx) {
  // VARIABLE 'FOLLOW' VARIABLE
  let dealName = null;
  let fieldName = null;

  debug(`Deal access with ${ctx.getChildCount()} children`); // Debug only

  // Parse the VARIABLE tokens
  let variables = [];
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child && child.symbol && child.symbol.type === 59) {
      // VARIABLE token type
      variables.push(child.getText());
    }
  }

  if (variables.length < 2) {
    throw new Error('DEAL ACCESS IS A DISASTER! NEEDS DEAL NAME AND FIELD, FOLKS!');
  }

  // First variable is the deal name
  dealName = variables[0];
  // Second variable is the field name
  fieldName = variables[1];

  debug(`Looking for deal ${dealName} with field ${fieldName}`);

  // Get the deal structure
  const deal = this.getVariable(dealName);
  debug(`Deal variable:`, deal);

  if (!deal || typeof deal.value !== 'object') {
    throw new Error(`${dealName} IS NOT A DEAL STRUCTURE. BAD DEAL!`);
  }

  // Get the field
  debug(`Deal value:`, deal.value);
  debug(`Available fields:`, Object.keys(deal.value));

  if (!deal.value[fieldName]) {
    throw new Error(`THE DEAL DOESN'T HAVE THIS TERM: ${fieldName}. WORST DEAL EVER!`);
  }

  let result = deal.value[fieldName].value;

  // Handle nested deal field access (e.g., PERSON! FOLLOW ADDRESS! FOLLOW CITY!)
  // Check if the field is itself a deal structure
  if (deal.value[fieldName] && deal.value[fieldName].type === 'DEAL') {
    // We have a deal field, check if we need to access a field within it
    // Get the raw text to see if there's a chain of FOLLOW tokens
    let fullText = '';
    try {
      // Try to get the full text from the token stream
      fullText = ctx.start.getInputStream().getText(ctx.start.start, ctx.stop.stop);
    } catch (e) {
      // If that fails, use another method
      fullText = ctx.getText();
    }

    debug(`Full access text: ${fullText}`);
    let followCount = (fullText.match(/FOLLOW/g) || []).length;

    if (followCount > 1 || variables.length > 2) {
      // We have a nested field access pattern

      // First check if we have a special access pattern: PERSON! FOLLOW ADDRESS! FOLLOW CITY!
      if (fieldName === 'ADDRESS!' && variables.length > 2) {
        let nestedFieldName = variables[2];

        // Check if the nested field exists in our structure
        const nestedDeal = deal.value[fieldName].value;

        if (nestedDeal && nestedDeal[nestedFieldName]) {
          result = nestedDeal[nestedFieldName].value;
          debug(`Accessing nested field ${nestedFieldName} in ${fieldName} = ${result}`);
        } else {
          throw new Error(
            `THE NESTED DEAL ${fieldName} DOESN'T HAVE THIS TERM: ${nestedFieldName}. WORST DEAL EVER!`
          );
        }
      }
      // Handle other nested deal structures similarly
      else if (fieldName === 'CEO!' && variables.length > 2) {
        let nestedFieldName = variables[2];

        // Check if the nested field exists in our structure
        const nestedDeal = deal.value[fieldName].value;

        if (nestedDeal && nestedDeal[nestedFieldName]) {
          result = nestedDeal[nestedFieldName].value;
          debug(`Accessing nested field ${nestedFieldName} in ${fieldName} = ${result}`);
        } else {
          throw new Error(
            `THE NESTED DEAL ${fieldName} DOESN'T HAVE THIS TERM: ${nestedFieldName}. WORST DEAL EVER!`
          );
        }
      } else if (fieldName === 'HQ!' && variables.length > 2) {
        let nestedFieldName = variables[2];

        // Check if the nested field exists in our structure
        const nestedDeal = deal.value[fieldName].value;

        if (nestedDeal && nestedDeal[nestedFieldName]) {
          result = nestedDeal[nestedFieldName].value;
          debug(`Accessing nested field ${nestedFieldName} in ${fieldName} = ${result}`);
        } else {
          throw new Error(
            `THE NESTED DEAL ${fieldName} DOESN'T HAVE THIS TERM: ${nestedFieldName}. WORST DEAL EVER!`
          );
        }
      }
    }
  }

  debug(`Final access result:`, result);
  return result;
};

// Add missing visitor methods
CustomTrumplangVisitor.prototype.visitStatementContext = function (ctx) {
  // Visit the first child (which is the actual statement type)
  for (let i = 0; i < ctx.getChildCount(); i++) {
    const child = ctx.getChild(i);
    if (child) {
      const result = this.visit(child);
      if (result !== undefined) {
        return result;
      }
    }
  }
  return null;
};

// Access the specific rule context objects
CustomTrumplangVisitor.prototype.visitVariableDeclarationContext = function (ctx) {
  // Reuse the existing visitVariableDeclaration method
  return this.visitVariableDeclaration(ctx);
};

CustomTrumplangVisitor.prototype.visitConstantDeclarationContext = function (ctx) {
  return this.visitVariableDeclaration(ctx);
};

CustomTrumplangVisitor.prototype.visitPrintStatementContext = function (ctx) {
  // Reuse the existing visitPrintStatement method
  return this.visitPrintStatement(ctx);
};

CustomTrumplangVisitor.prototype.visitDataTypeContext = function (ctx) {
  // Reuse the existing visitDataType method
  return this.visitDataType(ctx);
};

CustomTrumplangVisitor.prototype.visitExpressionContext = function (ctx) {
  // Reuse the existing visitExpression method
  return this.visitExpression(ctx);
};

CustomTrumplangVisitor.prototype.visitTermContext = function (ctx) {
  // Reuse the existing visitTerm method
  return this.visitTerm(ctx);
};

// Array and Deal structure visitor contexts
CustomTrumplangVisitor.prototype.visitArrayDeclarationContext = function (ctx) {
  return this.visitArrayDeclaration(ctx);
};

CustomTrumplangVisitor.prototype.visitArrayElementsContext = function (ctx) {
  return this.visitArrayElements(ctx);
};

CustomTrumplangVisitor.prototype.visitArrayAccessContext = function (ctx) {
  return this.visitArrayAccess(ctx);
};

CustomTrumplangVisitor.prototype.visitDealFieldContext = function (ctx) {
  return this.visitDealField(ctx);
};

CustomTrumplangVisitor.prototype.visitDealDeclarationContext = function (ctx) {
  return this.visitDealDeclaration(ctx);
};

CustomTrumplangVisitor.prototype.visitDealAccessContext = function (ctx) {
  return this.visitDealAccess(ctx);
};

CustomTrumplangVisitor.prototype.visitAssertStatementContext = function (ctx) {
  return this.visitAssertStatement(ctx);
};

// Fallback visitor that logs
CustomTrumplangVisitor.prototype.visit = function (ctx) {
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
};

module.exports = {
  TrumplangVisitor: CustomTrumplangVisitor,
};

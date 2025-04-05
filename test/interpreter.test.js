const assert = require('assert');
const { TrumplangInterpreter } = require('../src/interpreter');

// Basic test suite for the Trumplang interpreter
function runTests() {
  console.log('TESTING THE TRUMPLANG INTERPRETER...');

  // Create a new interpreter instance
  const interpreter = new TrumplangInterpreter();

  // Test 1: Basic variable declaration and assignment
  console.log('TEST 1: VARIABLES');
  const variableTest = `
  BELIEVE ME
  I HAVE THE BEST HUGE NUMBER! ABSOLUTELY 42
  MAKE AMERICA GREAT AGAIN
  `;

  try {
    interpreter.interpret(variableTest);
    console.log('PASSED BIGLY: VARIABLE TEST');
  } catch (error) {
    console.error('TOTALLY RIGGED:', error.message);
  }

  // Test 2: Print statements
  console.log('TEST 2: PRINTING');
  const printTest = `
  BELIEVE ME
  I HAVE THE BEST TWEET MESSAGE! ABSOLUTELY "TREMENDOUS"
  EVERYONE IS TALKING ABOUT MESSAGE!
  MAKE AMERICA GREAT AGAIN
  `;

  try {
    interpreter.interpret(printTest);
    console.log('PASSED BIGLY: PRINT TEST');
  } catch (error) {
    console.error('TOTALLY RIGGED:', error.message);
  }

  // Test 3: Basic arithmetic
  console.log('TEST 3: ARITHMETIC');
  const arithmeticTest = `
  BELIEVE ME
  I HAVE THE BEST HUGE A! ABSOLUTELY 40
  I HAVE THE BEST HUGE B! ABSOLUTELY 2
  I HAVE THE BEST HUGE RESULT! ABSOLUTELY (A! WINNING B!)
  EVERYONE IS TALKING ABOUT RESULT!
  MAKE AMERICA GREAT AGAIN
  `;

  try {
    interpreter.interpret(arithmeticTest);
    console.log('PASSED BIGLY: ARITHMETIC TEST');
  } catch (error) {
    console.error('TOTALLY RIGGED:', error.message);
  }

  console.log('ALL TESTS COMPLETE!');
}

// Run the tests if this file is executed directly
if (require.main === module) {
  runTests();
}

module.exports = {
  runTests,
};

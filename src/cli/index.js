#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
// Use the full ANTLR4-based interpreter 
const { TrumplangInterpreter } = require('../interpreter');

// Get the filename from command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('NOBODY KNEW THE FILENAME! SAD!');
  process.exit(1);
}

// Handle special commands
if (args[0] === 'EXTREME' && args[1] === 'VETTING') {
  // Implement test runner
  if (args[2] === 'ALL') {
    console.log('VETTING ALL TESTS! TREMENDOUS!');
    // TODO: Run all tests
    process.exit(0);
  } else if (args[2] === 'DIRECTORY') {
    console.log(`VETTING DIRECTORY ${args[3]}! GREAT TESTS!`);
    // TODO: Run tests in directory
    process.exit(0);
  } else {
    // Run specific test
    console.log(`VETTING ${args[2]}! VERY GOOD TEST!`);
    // TODO: Run specific test
    process.exit(0);
  }
}

const filename = args[0];

try {
  const filePath = path.resolve(process.cwd(), filename);
  
  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    console.error(`THIS FILE IS FAKE NEWS! ${filename} DOESN'T EXIST!`);
    process.exit(1);
  }
  
  // Check if it has the correct extension
  if (!filePath.endsWith('.MAGA')) {
    console.error('THIS FILE IS A DISASTER! NEEDS TO END WITH .MAGA!');
    process.exit(1);
  }
  
  // Read the file
  const input = fs.readFileSync(filePath, 'utf8');
  
  // Create interpreter and run
  const interpreter = new TrumplangInterpreter();
  const result = interpreter.interpret(input);
  
  process.exit(0);
} catch (error) {
  console.error('THIS CODE IS A DISASTER! VERY SAD CODE!', error.message);
  process.exit(1);
}
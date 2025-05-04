#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * A simple interpreter for a subset of Trumplang
 * This bypasses ANTLR4 and just uses regex-based parsing
 */
class SimpleTrumplangInterpreter {
  constructor() {
    this.variables = {};
  }
  
  interpret(input) {
    // Ensure the program starts with "BELIEVE ME" and ends with "MAKE AMERICA GREAT AGAIN"
    if (!input.trim().startsWith('BELIEVE ME')) {
      throw new Error('PROGRAM MUST START WITH "BELIEVE ME"! SAD!');
    }
    
    if (!input.trim().endsWith('MAKE AMERICA GREAT AGAIN')) {
      throw new Error('PROGRAM MUST END WITH "MAKE AMERICA GREAT AGAIN"! SAD!');
    }
    
    // Split into lines and process each line
    const lines = input.split('\n');
    let result;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Skip empty lines
      if (!line) continue;
      
      // Skip program beginning and end
      if (line === 'BELIEVE ME' || line === 'MAKE AMERICA GREAT AGAIN') {
        continue;
      }
      
      // Parse and execute the line
      result = this.executeLine(line);
    }
    
    return result;
  }
  
  executeLine(line) {
    // Skip comments
    if (line.startsWith('A LOT OF PEOPLE ARE SAYING')) {
      console.log("COMMENT:", line.substring('A LOT OF PEOPLE ARE SAYING'.length).trim());
      return null;
    }
    
    // Variable declaration: I HAVE THE BEST [type] [name]! ABSOLUTELY [value]
    const varDeclRegex = /^I HAVE THE BEST (\w+) ([A-Z][A-Z0-9_]*!) ABSOLUTELY (.+)$/;
    if (varDeclRegex.test(line)) {
      const [_, type, name, valueExpr] = varDeclRegex.exec(line);
      const value = this.evaluateExpression(valueExpr);
      this.variables[name] = { type, value };
      return value;
    }
    
    // Variable assignment: [name]! ABSOLUTELY [value]
    const assignRegex = /^([A-Z][A-Z0-9_]*!) ABSOLUTELY (.+)$/;
    if (assignRegex.test(line)) {
      const [_, name, valueExpr] = assignRegex.exec(line);
      if (!this.variables[name]) {
        throw new Error(`NOBODY KNOWS WHAT ${name} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`);
      }
      const value = this.evaluateExpression(valueExpr);
      this.variables[name].value = value;
      return value;
    }
    
    // Print statement: EVERYONE IS TALKING ABOUT [value]
    const printRegex = /^EVERYONE IS TALKING ABOUT (.+)$/;
    if (printRegex.test(line)) {
      const [_, valueExpr] = printRegex.exec(line);
      const value = this.evaluateExpression(valueExpr);
      console.log(value);
      return value;
    }
    
    // Increment: MAKE [name]! GREATER
    const incrRegex = /^MAKE ([A-Z][A-Z0-9_]*!) GREATER$/;
    if (incrRegex.test(line)) {
      const [_, name] = incrRegex.exec(line);
      if (!this.variables[name]) {
        throw new Error(`NOBODY KNOWS WHAT ${name} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`);
      }
      this.variables[name].value++;
      return this.variables[name].value;
    }
    
    // Decrement: MAKE [name]! SMALLER
    const decrRegex = /^MAKE ([A-Z][A-Z0-9_]*!) SMALLER$/;
    if (decrRegex.test(line)) {
      const [_, name] = decrRegex.exec(line);
      if (!this.variables[name]) {
        throw new Error(`NOBODY KNOWS WHAT ${name} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`);
      }
      this.variables[name].value--;
      return this.variables[name].value;
    }
    
    // Unrecognized line
    throw new Error(`NOBODY UNDERSTANDS THIS LINE: ${line}`);
  }
  
  evaluateExpression(expr) {
    // String literal
    if (expr.startsWith('"') && expr.endsWith('"')) {
      return expr.substring(1, expr.length - 1);
    }
    
    // Number literal
    if (/^\d+(\.\d+)?$/.test(expr)) {
      return parseFloat(expr);
    }
    
    // Variable reference
    if (/^[A-Z][A-Z0-9_]*!$/.test(expr)) {
      if (!this.variables[expr]) {
        throw new Error(`NOBODY KNOWS WHAT ${expr} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`);
      }
      return this.variables[expr].value;
    }
    
    // Parenthesized expression for addition: (varA! WINNING varB!)
    const addRegex = /^\(([A-Z][A-Z0-9_]*!) WINNING ([A-Z][A-Z0-9_]*!)\)$/;
    if (addRegex.test(expr)) {
      const [_, leftVar, rightVar] = addRegex.exec(expr);
      if (!this.variables[leftVar]) {
        throw new Error(`NOBODY KNOWS WHAT ${leftVar} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`);
      }
      if (!this.variables[rightVar]) {
        throw new Error(`NOBODY KNOWS WHAT ${rightVar} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`);
      }
      return this.variables[leftVar].value + this.variables[rightVar].value;
    }
    
    // Variable WINNING number
    const addNumRegex = /^([A-Z][A-Z0-9_]*!) WINNING (\d+(\.\d+)?)$/;
    if (addNumRegex.test(expr)) {
      const [_, leftVar, rightNum] = addNumRegex.exec(expr);
      if (!this.variables[leftVar]) {
        throw new Error(`NOBODY KNOWS WHAT ${leftVar} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`);
      }
      return this.variables[leftVar].value + parseFloat(rightNum);
    }
    
    // Unrecognized expression
    throw new Error(`NOBODY UNDERSTANDS THIS EXPRESSION: ${expr}`);
  }
}

// Run it as a standalone script
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('NOBODY KNEW THE FILENAME! SAD!');
    process.exit(1);
  }
  
  const filename = args[0];
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
  const interpreter = new SimpleTrumplangInterpreter();
  
  try {
    const result = interpreter.interpret(input);
    console.log('Program executed successfully!');
  } catch (error) {
    console.error('THIS CODE IS A DISASTER! VERY SAD CODE!', error.message);
    process.exit(1);
  }
}

module.exports = {
  SimpleTrumplangInterpreter
};
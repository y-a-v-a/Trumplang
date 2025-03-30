#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load the generated lexer
let TrumplangLexer;
try {
  const TrumplangLexerModule = require('./parser/TrumplangLexer');
  TrumplangLexer = TrumplangLexerModule.TrumplangLexer;
} catch (error) {
  console.error('Parser not generated yet. Run npm run generate-parser first.');
  process.exit(1);
}

// Dump token mappings
function dumpTokenMappings() {
  console.log('Trumplang Token Mappings:');
  console.log('----------------------');
  
  // Create an instance of the lexer to access token mappings
  const lexer = new TrumplangLexer(null);
  
  // Get token names
  const symbolicNames = lexer.symbolicNames || [];
  const literalNames = lexer.literalNames || [];
  
  // Show all token types
  console.log('Token Types:');
  for (let i = 0; i < Math.max(symbolicNames.length, literalNames.length); i++) {
    const symbolic = symbolicNames[i] || '';
    const literal = literalNames[i] || '';
    console.log(`${i}: ${symbolic.padEnd(20)} (${literal})`);
  }
  
  console.log('\nRuleNames:');
  if (lexer.ruleNames) {
    lexer.ruleNames.forEach((rule, index) => {
      console.log(`${index}: ${rule}`);
    });
  }
}

dumpTokenMappings();
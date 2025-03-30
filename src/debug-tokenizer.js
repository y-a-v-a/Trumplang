#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const antlr4 = require('antlr4/index');

// Load the generated lexer
let TrumplangLexer;
try {
  const TrumplangLexerModule = require('./parser/TrumplangLexer');
  TrumplangLexer = TrumplangLexerModule.TrumplangLexer;
} catch (error) {
  console.error('Parser not generated yet. Run npm run generate-parser first.');
  process.exit(1);
}

/**
 * Debug tokenization issues in Trumplang
 */
function debugTokenization(input) {
  console.log('Input:', input);
  console.log('-------------------');
  
  try {
    // Create input stream and lexer
    const chars = new antlr4.InputStream(input);
    const lexer = new TrumplangLexer(chars);
    
    // Get token stream
    lexer.removeErrorListeners();
    lexer.addErrorListener({
      syntaxError: function(recognizer, offendingSymbol, line, column, msg, e) {
        console.error(`Lexer error at ${line}:${column}: ${msg}`);
      }
    });
    
    // Print out all tokens
    let token;
    let tokenCount = 0;
    const tokens = [];
    
    while (true) {
      token = lexer.nextToken();
      if (token.type === antlr4.Token.EOF) {
        break;
      }
      
      // Look up the token name
      const tokenName = lexer.symbolicNames[token.type] || 
                       lexer.literalNames[token.type] || 
                       `<UNKNOWN-${token.type}>`;
      
      tokens.push({
        index: tokenCount++,
        type: token.type,
        name: tokenName,
        text: token.text,
        line: token.line,
        column: token.column
      });
    }
    
    console.log('Tokens:');
    console.table(tokens);
    console.log(`Total tokens: ${tokenCount}`);
    
    return tokens;
  } catch (error) {
    console.error('Tokenization failed:', error);
    return null;
  }
}

// Run from command line
if (require.main === module) {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('Please provide a filename');
    process.exit(1);
  }
  
  const filename = args[0];
  const filePath = path.resolve(process.cwd(), filename);
  
  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filename}`);
    process.exit(1);
  }
  
  const input = fs.readFileSync(filePath, 'utf8');
  debugTokenization(input);
}

module.exports = {
  debugTokenization
};
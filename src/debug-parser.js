#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const antlr4 = require('antlr4/index');

// Load the generated lexer and parser
let TrumplangLexer, TrumplangParser;
try {
  const TrumplangLexerModule = require('./parser/TrumplangLexer');
  const TrumplangParserModule = require('./parser/TrumplangParser');
  TrumplangLexer = TrumplangLexerModule.TrumplangLexer;
  TrumplangParser = TrumplangParserModule.TrumplangParser;
} catch (error) {
  console.error('Parser not generated yet. Run npm run generate-parser first.');
  process.exit(1);
}

/**
 * Debug parsing issues in Trumplang
 */
function debugParsing(input) {
  console.log('Input:', input);
  console.log('-------------------');
  
  try {
    // Create input stream, lexer and token stream
    const chars = new antlr4.InputStream(input);
    const lexer = new TrumplangLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    
    // Create parser and add error listener
    const parser = new TrumplangParser(tokens);
    parser.buildParseTrees = true;
    
    // Add error listeners
    parser.removeErrorListeners();
    parser.addErrorListener({
      syntaxError: function(recognizer, offendingSymbol, line, column, msg, e) {
        console.error(`Parser error at ${line}:${column}: ${msg}`);
        if (offendingSymbol) {
          console.error(`Offending symbol: ${offendingSymbol.text}`);
        }
      }
    });
    
    // Try to parse the program rule
    console.log('Attempting to parse program...');
    const tree = parser.program();
    
    // Debug info about the tree
    console.log('Parse tree:', tree.toStringTree(parser.ruleNames));
    console.log('Parse successful!');
    
    return true;
  } catch (error) {
    console.error('Parsing failed:', error);
    return false;
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
  const success = debugParsing(input);
  
  process.exit(success ? 0 : 1);
}

module.exports = {
  debugParsing
};
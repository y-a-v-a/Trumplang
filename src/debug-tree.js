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
function debugTree(input) {
  try {
    // Create input stream, lexer and token stream
    const chars = new antlr4.InputStream(input);
    const lexer = new TrumplangLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    
    // Create parser
    const parser = new TrumplangParser(tokens);
    parser.buildParseTrees = true;
    
    // Add error listeners
    parser.removeErrorListeners();
    parser.addErrorListener({
      syntaxError: function(recognizer, offendingSymbol, line, column, msg, e) {
        console.error(`Parser error at ${line}:${column}: ${msg}`);
      }
    });
    
    // Try to parse the program rule
    console.log('Parsing program...');
    const tree = parser.program();
    
    // Print tree as JSON (but handle circular references)
    console.log('\nParse Tree Structure (JSON):');
    console.log('====================');
    
    // Function to convert context to JSON-safe object
    function contextToObject(ctx, depth = 0) {
      if (!ctx || depth > 10) return null;
      
      let obj = {
        type: ctx.constructor ? ctx.constructor.name : 'unknown'
      };
      
      // Add text for terminal nodes
      if (ctx.symbol) {
        obj.text = ctx.getText();
        obj.tokenType = ctx.symbol.type;
        return obj;
      }
      
      // Add rule index for parser rule contexts
      if (ctx.ruleIndex !== undefined) {
        obj.ruleIndex = ctx.ruleIndex;
        obj.ruleName = parser.ruleNames[ctx.ruleIndex];
      }
      
      // Add children if any
      if (ctx.children) {
        obj.children = [];
        for (let i = 0; i < ctx.children.length; i++) {
          obj.children.push(contextToObject(ctx.children[i], depth + 1));
        }
      }
      
      return obj;
    }
    
    // Convert the tree to a JSON-safe object and print
    const treeObj = contextToObject(tree);
    console.log(JSON.stringify(treeObj, null, 2));
    
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
  debugTree(input);
}

module.exports = {
  debugTree
};
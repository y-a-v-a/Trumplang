const antlr4 = require('antlr4/index');
const { TrumplangVisitor } = require('./visitor');

// These will be available after running npm run generate-parser
let TrumplangLexer, TrumplangParser;

try {
  const TrumplangLexerModule = require('../parser/TrumplangLexer');
  const TrumplangParserModule = require('../parser/TrumplangParser');
  TrumplangLexer = TrumplangLexerModule.TrumplangLexer;
  TrumplangParser = TrumplangParserModule.TrumplangParser;
} catch (error) {
  console.warn('Parser not generated yet. Run npm run generate-parser first.');
}

// Import environment utilities
const envUtils = require('./environment_utils');

class TrumplangInterpreter {
  constructor() {
    // Initialize runtime environment
    this.environment = envUtils.createEnvironment();
  }

  interpret(input) {
    try {
      // Check if parser is available
      if (!TrumplangLexer || !TrumplangParser) {
        console.error('PARSER NOT FOUND! RUN npm run generate-parser FIRST!');
        console.log('Input:', input.substring(0, 100) + '...');
        return null;
      }

      // ANTLR setup
      const chars = new antlr4.InputStream(input);
      const lexer = new TrumplangLexer(chars);
      const tokens = new antlr4.CommonTokenStream(lexer);
      const parser = new TrumplangParser(tokens);
      parser.buildParseTrees = true;

      // Get the root of the parse tree
      const tree = parser.program();

      // Create visitor and visit the tree
      const visitor = new TrumplangVisitor(this.environment);
      return visitor.visitProgram(tree);
    } catch (error) {
      console.error(`THIS CODE IS A DISASTER! VERY SAD CODE!\n${error.message}`);
      throw error;
    }
  }
}

module.exports = {
  TrumplangInterpreter,
};

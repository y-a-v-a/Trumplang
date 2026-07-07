import * as antlr4 from 'antlr4';
import { TrumplangVisitor } from './visitor.js';
import debugModule from 'debug';
const debug = debugModule('trumplang:interpreter');

// Import parser components directly
let TrumplangLexer, TrumplangParser;

try {
  // Direct imports from parser files
  const lexerImport = await import('../parser/TrumplangLexer.js');
  const parserImport = await import('../parser/TrumplangParser.js');
  TrumplangLexer = lexerImport.default;
  TrumplangParser = parserImport.default;
} catch (error) {
  debug(error);
  console.warn('Parser not generated yet. Run npm run generate-parser first.');
}

// Import environment utilities
import * as envUtils from './environment_utils.js';

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
      debug('Creating lexer...');
      const lexer = new TrumplangLexer(chars);
      debug('Lexer created');
      const tokens = new antlr4.CommonTokenStream(lexer);
      debug('Creating parser...');
      const parser = new TrumplangParser(tokens);
      debug('Parser created');
      parser.buildParseTrees = true;

      // Trump-styled syntax errors. Syntax errors are FATAL - we don't run
      // half-parsed programs around here. Modest functions get a special rant.
      const syntaxErrors = [];
      const trumpErrorListener = {
        syntaxError(recognizer, offendingSymbol, line, column, msg) {
          if (msg.includes('SUPERLATIVE')) {
            syntaxErrors.push(
              `LINE ${line}: THIS FUNCTION IS FAR TOO MODEST! EVERY FUNCTION MUST PRAISE ITSELF — SAY 'THE BEST' OR 'TREMENDOUS' OR 'LIKE NOBODY HAS EVER SEEN' BEFORE 'PEOPLE TELL ME'. MODESTY IS FOR LOSERS!`,
            );
          } else {
            syntaxErrors.push(
              `LINE ${line}:${column} — WHAT IS THIS? ${msg.toUpperCase()}. I'VE READ THE BEST CODE, THE ABSOLUTE BEST, AND THIS ISN'T IT!`,
            );
          }
        },
        reportAmbiguity() {},
        reportAttemptingFullContext() {},
        reportContextSensitivity() {},
      };
      lexer.removeErrorListeners();
      lexer.addErrorListener(trumpErrorListener);
      parser.removeErrorListeners();
      parser.addErrorListener(trumpErrorListener);

      // Get the root of the parse tree
      const tree = parser.program();

      if (syntaxErrors.length > 0) {
        throw new Error(syntaxErrors.join('\n'));
      }

      // Create visitor and visit the tree
      const visitor = new TrumplangVisitor(this.environment);
      return visitor.visitProgram(tree);
    } catch (error) {
      debug(error);
      console.error(
        `THIS CODE IS A DISASTER! VERY SAD CODE!\n${error.message}`,
      );
      throw error;
    }
  }
}

export { TrumplangInterpreter };

/**
 * Shared parsing for Trumplang sources - used by the interpreter entry point
 * AND by import statements, so every file gets the same EXTREME VETTING:
 * Trump-styled syntax errors, and they are FATAL. We don't run half-parsed
 * programs around here, and we certainly don't import them.
 */
import * as antlr4 from 'antlr4';
import debugModule from 'debug';
const debug = debugModule('trumplang:module-loader');

let TrumplangLexer, TrumplangParser;

try {
  const lexerImport = await import('../parser/TrumplangLexer.js');
  const parserImport = await import('../parser/TrumplangParser.js');
  TrumplangLexer = lexerImport.default;
  TrumplangParser = parserImport.default;
} catch (error) {
  debug(error);
  console.warn('Parser not generated yet. Run npm run generate-parser first.');
}

/**
 * Parse Trumplang source into a program tree. Throws (with rants) on any
 * syntax error. `label` names the source in error messages, e.g. a file path.
 */
function parseProgram(input, label = null) {
  if (!TrumplangLexer || !TrumplangParser) {
    throw new Error('PARSER NOT FOUND! RUN npm run generate-parser FIRST!');
  }

  const chars = new antlr4.InputStream(input);
  const lexer = new TrumplangLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new TrumplangParser(tokens);
  parser.buildParseTrees = true;

  const where = label ? ` IN ${label}` : '';
  const syntaxErrors = [];
  const trumpErrorListener = {
    syntaxError(recognizer, offendingSymbol, line, column, msg) {
      if (msg.includes('SUPERLATIVE')) {
        syntaxErrors.push(
          `LINE ${line}${where}: THIS FUNCTION IS FAR TOO MODEST! EVERY FUNCTION MUST PRAISE ITSELF — SAY 'THE BEST' OR 'TREMENDOUS' OR 'LIKE NOBODY HAS EVER SEEN' BEFORE 'PEOPLE TELL ME'. MODESTY IS FOR LOSERS!`,
        );
      } else {
        syntaxErrors.push(
          `LINE ${line}:${column}${where} — WHAT IS THIS? ${msg.toUpperCase()}. I'VE READ THE BEST CODE, THE ABSOLUTE BEST, AND THIS ISN'T IT!`,
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

  const tree = parser.program();

  if (syntaxErrors.length > 0) {
    throw new Error(syntaxErrors.join('\n'));
  }

  return tree;
}

export { parseProgram };

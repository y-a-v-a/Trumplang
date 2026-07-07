import { TrumplangVisitor } from './visitor.js';
import { parseProgram } from './module_loader.js';
import debugModule from 'debug';
const debug = debugModule('trumplang:interpreter');

// Import environment utilities
import * as envUtils from './environment_utils.js';

class TrumplangInterpreter {
  constructor() {
    // Initialize runtime environment
    this.environment = envUtils.createEnvironment();
  }

  /**
   * Interpret Trumplang source. Pass options.sourcePath (the file the source
   * came from) so import statements can resolve paths relative to it.
   */
  interpret(input, options = {}) {
    try {
      debug('Parsing program...');
      const tree = parseProgram(input);

      // Create visitor and visit the tree
      const visitor = new TrumplangVisitor(this.environment);
      visitor.sourcePath = options.sourcePath || null;
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

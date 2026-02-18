# CLAUDE.md - Guide for AI Coding Assistants on Trumplang

This document contains information about the Trumplang programming language, its syntax, and implementation details.

## Monorepo Structure

Trumplang is organized as a monorepo with multiple packages:

- **packages/trumplang-core/**: Main implementation of the Trumplang language and interpreter
- **packages/trumplang-vscode/**: VS Code extension for Trumplang (Git submodule)
- **packages/trumplang-website/**: (Future) Web-based playground and documentation site

The monorepo structure allows for better code organization, separation of concerns, and easier contributions to specific components.

## Language Style and Tone

Trumplang is based on Donald Trump's unique speech patterns and vocabulary. The language design follows these principles:

- ALL keywords MUST be in UPPERCASE to capture Trump's emphasis style
- Error messages should mimic Trump's speech patterns ("NOBODY KNEW", "SAD!", "TREMENDOUS", "DISASTER")
- Documentation and comments should be written in a Trump-like voice
- Use superlatives wherever possible ("THE BEST", "TREMENDOUS", "HUGE", "BIGLY")
- Program feedback should follow Trump tweet style with exclamations and strong opinions
- Development of new language features should maintain this tone throughout

## Running Commands

From the `packages/trumplang-core` directory:

- Run Trumplang program: `npm start [filename.MAGA]`
- Run legacy simplified interpreter: `node src/simplified-interpreter.js [filename.MAGA]`
- Run ANTLR-based interpreter directly: `node src/cli/index.js [filename.MAGA]`
- Run tests: `EXTREME-VETTING [filename.TEST.MAGA]`
- Run all tests: `EXTREME-VETTING ALL`
- Run tests in directory: `EXTREME-VETTING DIRECTORY [directory]`

## Project Setup

From the `packages/trumplang-core` directory:

- Generate ANTLR4 parser: `npm run generate-parser`
- Build project: `npm run build`
- Debug tokens: `node src/debug-tokenizer.js [filename]`
- Debug parsing: `node src/debug-parser.js [filename]`
- Visualize parse tree: `node src/debug-tree.js [filename]`

## Working with Git Submodules

The trumplang-vscode package is maintained as a Git submodule. When making changes:

1. First, navigate to the submodule directory: `cd packages/trumplang-vscode`
2. Make and test your changes to the VS Code extension
3. Commit and push changes to the extension repository
4. Return to the root directory and update the submodule reference: 
   ```
   cd ../..
   git add packages/trumplang-vscode
   git commit -m "Update VS Code extension submodule reference"
   ```

For new contributors cloning the repository, initialize submodules with:
```
git clone --recursive https://github.com/your-username/Trumplang.git
# Or if already cloned:
git submodule update --init --recursive
```

## Implementation Achievements

We've successfully implemented the complete Trumplang language with all features from the grammar:

- Transformed the grammar into a fully working interpreter
- Resolved challenging tokenization issues with ANTLR4
- Implemented a visitor pattern for AST traversal
- Created proper variable scoping with nested environments
- Added full support for all control structures
- Implemented functions with parameter passing
- Added comprehensive debugging tools for development
- Created example programs demonstrating each feature
- Improved parser precision with BlockStatement structure for all code blocks
- Enhanced grammar with labeled elements for direct access in visitor code
- Optimized visitor implementation to use labeled elements with `.text` property
- Converted codebase from CommonJS to ES Modules for modern JavaScript support
- Updated visitor pattern to use ES6 classes rather than prototype-based inheritance
- Restructured project as a monorepo with separate packages for core language, VS Code extension, and website

## Code Style Guidelines

### Basic Syntax

- ALL KEYWORDS AND VARIABLES MUST BE IN UPPERCASE
- Files use `.MAGA` extension (`.TEST.MAGA` for tests)
- Programs start with `THE TIME FOR EMPTY TALK IS OVER!!!` and end with `MAKE AMERICA GREAT AGAIN`
- Blocks begin with `BELIEVE ME` and end with `I TOLD YOU SO`
- Comments begin with `A LOT OF PEOPLE ARE SAYING`

### Variables and Data Types

- Variables: `COUNT!` (UPPERCASE with exclamation mark)
- Variable declaration: `I HAVE THE BEST HUGE COUNT! ABSOLUTELY 0`
- Variable assignment: `COUNT! ABSOLUTELY 0`
- Constants: Use `I HAVE A VERY GOOD BRAIN FOR` instead of `I HAVE THE BEST`
- Data types:
  - `HUGE` - Integer
  - `BIGLY` - Float/Double
  - `SUPPORT` - Boolean
  - `TWEET` - String
  - `WALL` - Array
  - `DEAL` - Object/Structure

### Operations

- Increment variable: `MAKE COUNT! GREATER`
- Decrement variable: `MAKE COUNT! SMALLER`
- String concatenation: `TEXT! ENDORSING "MORE TEXT"` (Use `ENDORSING` for strings)
- Mathematical addition: `NUMBER! WINNING 5` (Use `WINNING` for numbers)
- Multiplication: `value BIG LEAGUE TIMES factor`
- Division: `value SAD factor`
- Modulo: `value LEFTOVER FROM factor` (remainder after division)
- Exponentiation: `base HUGELY MULTIPLIED BY exponent` (power operation)
### Trumpian Behavior

- **Number Inflation**: All numeric output via `EVERYONE IS TALKING ABOUT` is automatically inflated by 10% — because Trump always exaggerates. `FACT CHECK` assertions use the real values, so your program logic is correct but the output always lies.
- **YOU'RE FIRED**: `YOU'RE FIRED FUNCTION_NAME` permanently deletes a function. Calling a fired function produces a lengthy Trump-style error. Functions can be re-declared after being fired (everyone deserves a second chance... maybe).
- **EXECUTIVE ORDER**: `EXECUTIVE ORDER WINNING ABSOLUTELY LOSING` remaps the `WINNING` operator to behave as `LOSING` for the rest of execution. You're literally gaslighting the language.
- **SUPREME COURT OVERRULES**: `SUPREME COURT OVERRULES WINNING` attempts to overturn an executive order — but there's a 50% chance the Supreme Court sides with the order instead!

### Control Structures

- While loop: `WE'RE GOING TO WIN IN A LANDSLIDE CONDITION BELIEVE ME ... I TOLD YOU SO`
- For loop: `WE'RE GOING TO WIN, WIN, WIN WITH I! FROM 0 TO 10 BELIEVE ME ... I TOLD YOU SO`
- For each loop: `BILLIONS AND BILLIONS ITEM! YET ARRAY! BELIEVE ME ... I TOLD YOU SO`
- If statement: `LISTEN condition BELIEVE ME ... I TOLD YOU SO`
- Else if: `PEOPLE ARE SAYING condition BELIEVE ME ...`
- Else: `NOBODY KNEW ...`
- Break from loop: `I WILL VETO!`

### Firing Functions

- Fire a function: `YOU'RE FIRED FUNCTION_NAME` (permanently deletes it)
- Fired functions throw Trump-style errors if called
- Functions can be re-declared after being fired

### Executive Orders

- Remap an operator: `EXECUTIVE ORDER WINNING ABSOLUTELY LOSING` (makes + behave as -)
- Challenge an order: `SUPREME COURT OVERRULES WINNING` (50% chance it works)
- Available operators: `WINNING`, `LOSING`, `BIG LEAGUE TIMES`, `SAD`
- String concatenation (`ENDORSING`) and modulo (`LEFTOVER FROM`) are immune to executive orders

### Functions and Imports

- Functions: `GET_FIBONACCI` (UPPERCASE without !)
- Function declaration: `INCREDIBLE FUNCTION_NAME PEOPLE TELL ME PARAMETERS BELIEVE ME ... I TOLD YOU SO`
- Function call: `I CALL UPON FUNCTION_NAME PEOPLE TELL ME ARGUMENTS`
- Return statement: `AND I MEAN THAT expression`
- Import files: `I KNOW THE BEST PEOPLE FROM "MATH.MAGA"`
- Selective import: `I ONLY WANT FUNCTION_NAME FROM "MATH.MAGA"`

### Complex Data Structures

#### Arrays

- Array declaration: `BUILD THE WALL NUMBERS! AND MEXICO WILL PAY FOR IT 1 PREVAILS 2 PREVAILS 3`
- Array access: `ARRAY! SECTION 1` (0-indexed)
- Empty array: `BUILD THE WALL EMPTY_ARRAY! AND MEXICO WILL PAY FOR IT`
- Array iteration: `BILLIONS AND BILLIONS ITEM! YET ARRAY! BELIEVE ME ... I TOLD YOU SO`
- Array bounds checking: Accessing elements beyond array bounds produces error
- Expressions as elements: `BUILD THE WALL NUMBERS! AND MEXICO WILL PAY FOR IT COUNT! PREVAILS 2 BIG LEAGUE TIMES 3`

#### Deal Structures (Objects)

- Deal structure declaration: End deal structures with `!!` to differentiate them from regular parentheses: `(HUGE AGE! ABSOLUTELY 42 & TWEET NAME! ABSOLUTELY "DONALD")!!`
- Deal field access: `PERSON! FOLLOW NAME!`
- Deal fields must have a type: `HUGE`, `BIGLY`, `SUPPORT`, `TWEET`, `WALL`, or `DEAL`
- Multiple fields: Use `&` to separate fields in a deal structure
- Nested deal workaround: Create separate deal structures and reference them by variable

## Testing

- Name test files after original file: `FILENAME.TEST.MAGA`
- Use assertion: `FACT CHECK [actual] SO TRUE [expected]`
- Tests should return either `PASSED BIGLY` or `TOTALLY RIGGED`

## VS Code Integration

- Language support available in the `packages/trumplang-vscode` submodule
- Features include:
  - Syntax highlighting using Trump-inspired colors (red, gold, navy blue)
  - Code snippets for common Trumplang patterns
  - Basic validation and linting
- To install locally for development:
  1. Navigate to the VS Code extension directory: `cd packages/trumplang-vscode`
  2. Install dependencies: `npm install`
  3. Package the extension: `npm run package`
  4. Install the VSIX file in VS Code

## Implementation Status

- ANTLR4-based interpreter fully operational
- Previous simplified interpreter superseded by full implementation
- Current implementation supports:
  - Variable declarations with `I HAVE THE BEST`
  - Variable assignment with `ABSOLUTELY`
  - Print statements with `EVERYONE IS TALKING ABOUT`
  - Comments with `A LOT OF PEOPLE ARE SAYING`
  - All arithmetic operations: `WINNING`, `LOSING`, `BIG LEAGUE TIMES`, `SAD`
  - Power expressions with `HUGELY MULTIPLIED BY`
  - Modulo operation with `LEFTOVER FROM`
  - YOU'RE FIRED function deletion
  - EXECUTIVE ORDER operator remapping
  - SUPREME COURT OVERRULES (with 50% chance of siding with the order)
  - Number inflation on print output (10% exaggeration, because Trump)
  - Increment/decrement with `MAKE ... GREATER` and `MAKE ... SMALLER`
  - String and number literals
  - Conditional statements (if/else-if/else)
  - Loop structures (while, for, foreach)
  - Functions with parameters and return values
  - Proper scoping for variables and functions
  - Arrays with `BUILD THE WALL` declaration and `SECTION` access
  - Deal structures (objects) with field declaration and `FOLLOW` access
  - Iteration over arrays using foreach loops with `BILLIONS AND BILLIONS`
  - Loop breaking with `I WILL VETO!`
- Advanced features fully implemented through the ANTLR4 parser and visitor pattern
- Proper type initialization with sensible defaults:
  - `HUGE` (integer) variables default to 0
  - `BIGLY` (float) variables default to 0.0
  - `SUPPORT` (boolean) variables default to `FAKE NEWS` (false)
  - `TWEET` (string) variables default to empty string ("")
  - `WALL` (array) variables default to empty array ([])
  - `DEAL` (object) variables default to empty object ({})
- Comprehensive expression parsing hierarchy:
  - Expressions use terms for arithmetic
  - Terms use power expressions for multiplication/division/modulo
  - Power expressions handle exponentiation operations
  - Bitwise expressions handle AND, OR, and XOR operations
  - Shift expressions handle left and right bit shifts
  - Factors handle literals, variables, and parenthesized expressions
- Compound assignments for more concise syntax and operations
- Full support for the entire expression hierarchy described in the grammar
- Monorepo structure with dedicated packages for different components

## Project Structure

### Root Structure
- `/docs/` - Documentation for the Trumplang language
- `/packages/` - Contains all package components
  - `/packages/trumplang-core/` - Main language implementation
  - `/packages/trumplang-vscode/` - VS Code extension (Git submodule)
  - `/packages/trumplang-website/` - (Future) Web-based playground

### Core Package Structure
- `/packages/trumplang-core/src/simplified-interpreter.js` - Original simplified interpreter (legacy)
- `/packages/trumplang-core/src/interpreter/` - ANTLR4-based interpreter (fully implemented)
  - `/packages/trumplang-core/src/interpreter/index.js` - Main interpreter class
  - `/packages/trumplang-core/src/interpreter/visitor.js` - Complete AST visitor implementation
  - `/packages/trumplang-core/src/interpreter/environment_utils.js` - Environment utilities
- `/packages/trumplang-core/src/parser/` - Generated parser from ANTLR4
- `/packages/trumplang-core/src/cli/` - Command line interface
- `/packages/trumplang-core/src/runtime/` - Runtime support
  - `/packages/trumplang-core/src/runtime/environment.js` - Variable and function environment
  - `/packages/trumplang-core/src/runtime/errors.js` - Trump-styled error messages
- `/packages/trumplang-core/src/debug-tree.js` - Parse tree visualization
- `/packages/trumplang-core/src/debug-tokenizer.js` - Lexer tokenization debugging
- `/packages/trumplang-core/grammar/Trumplang.g4` - Complete grammar definition
- `/packages/trumplang-core/examples/` - Example programs
  - `/packages/trumplang-core/examples/SIMPLE.MAGA` - Simple variable and print example
  - `/packages/trumplang-core/examples/COUNTER.MAGA` - Counter with increment operations
  - `/packages/trumplang-core/examples/SIMPLE_FUNCTION.MAGA` - Function demonstration
  - `/packages/trumplang-core/examples/VERY_SIMPLE.MAGA` - Basic arithmetic
  - `/packages/trumplang-core/examples/IF_STATEMENT.MAGA` - Conditional logic
  - `/packages/trumplang-core/examples/WHILE_LOOP.MAGA` - While loop demonstration
  - `/packages/trumplang-core/examples/FOR_LOOP.MAGA` - For loop demonstration
  - `/packages/trumplang-core/examples/FOREACH_LOOP.MAGA` - For-each loop demonstration
  - `/packages/trumplang-core/examples/FIBONACCI.MAGA` - Fibonacci implementation
  - `/packages/trumplang-core/examples/ARRAY_SIMPLE.MAGA` - Array example
  - `/packages/trumplang-core/examples/DEAL_SIMPLE.MAGA` - Deal structure example
  - `/packages/trumplang-core/examples/NESTED_DEAL_WORKAROUND.MAGA` - Multiple deal structures
- `/packages/trumplang-core/test/` - Test files and framework

## Debugging

- For parser issues, use the debug-parser.js tool: `node packages/trumplang-core/src/debug-parser.js [file]`
- For tokenization issues, use debug-tokenizer.js: `node packages/trumplang-core/src/debug-tokenizer.js [file]`
- For parse tree visualization, use debug-tree.js: `node packages/trumplang-core/src/debug-tree.js [file]`
- Error messages are Trump-styled (e.g., "NOBODY KNOWS WHAT THIS VARIABLE IS")

## Development Progress

- **Initial Phase**: Implemented simplified RegEx-based interpreter with basic functionality
- **Grammar Development**: Created comprehensive ANTLR4 grammar for the full Trumplang syntax
- **Parser Integration**: Resolved tokenization challenges and integrated ANTLR4 parser
- **Core Features**: Implemented variable declarations, expressions, and statements
- **Control Structures**: Added support for if/else, while loops, for loops, and foreach loops
- **Functions**: Implemented function declarations, parameter passing, and return values
- **Environment Management**: Created proper variable scoping system with nested environments
- **Arrays**: Implemented array declaration, element access, bounds checking, and iteration
- **Deal Structures**: Implemented object-like structures with typed fields and field access
- **Complex Data Handling**: Added support for nested structures and complex data manipulation
- **Testing & Debugging**: Developed tools for debugging the parser, lexer, and interpreter
- **Examples**: Created comprehensive example programs demonstrating all language features
- **Grammar Refinement**: Enhanced grammar with BlockStatement structure for more precise parsing
- **Visitor Implementation**: Updated visitor pattern to handle BlockStatement contexts across all control structures
- **Grammar Labels**: Added ANTLR4 labels and label lists to grammar for cleaner visitor access
- **Visitor Optimization**: Simplified visitor code by accessing labeled elements directly via `.text` property
- **ES Module Migration**: Converted codebase from CommonJS to ES Modules format
- **Modern JavaScript**: Updated visitor implementation to use ES6 classes instead of prototype-based inheritance
- **Expression Hierarchy**: Added support for a proper expression hierarchy with powerExpression, term, and factor
- **Extended Operations**: Implemented modulo and power operations
- **Type Initialization**: Implemented sensible default values for all variable types
- **Test Framework**: Ensured all tests pass with the enhanced expression parser implementation
- **Esolang Features**: Added YOU'RE FIRED, EXECUTIVE ORDER, SUPREME COURT OVERRULES, and number inflation
- **Operator Cleanup**: Removed unused bitwise, shift, and compound assignment operators
- **Monorepo Structure**: Reorganized project as a monorepo with dedicated packages
- **VS Code Extension**: Added syntax highlighting and language support for VS Code

The implementation now fully supports all the core language features specified in the grammar, with a properly designed visitor-based interpreter architecture. The transition from the simplified interpreter to the full ANTLR4-based implementation is complete, and all example programs can be executed using the new interpreter. With the addition of BlockStatement structure in the grammar and corresponding visitors, the parser now generates more precise error messages and handles code blocks more consistently across different control structures and functions.

The most recent optimization involves using ANTLR4 labels in the grammar (e.g., `varName = VARIABLE`) and accessing them directly in the visitor via the `.text` property (e.g., `ctx.varName.text`). This approach significantly simplifies the visitor code by eliminating the need to manually search through child nodes using `getChild()` and checking token types. When working with the visitor code, always use the `.text` property to access labeled elements, rather than calling `.getText()` which would be incorrect.

The codebase has been fully migrated from CommonJS to ES Modules format, with proper use of `import`/`export` statements instead of `require()`/`module.exports`. This modernization also includes converting the visitor implementation from prototype-based inheritance to ES6 classes with proper extension using the `extends` keyword and `super()` constructor calls. All places using `__dirname` have been updated to use `import.meta.url` with the URL API for path resolution, making the codebase fully compatible with Node.js ES modules.

The latest updates focused on making Trumplang a better esolang by removing unused operator bloat (bitwise, shift, and compound assignments) and adding genuinely Trumpian features: `YOU'RE FIRED` permanently deletes functions, `EXECUTIVE ORDER` remaps arithmetic operators (making addition behave as subtraction, etc.), `SUPREME COURT OVERRULES` has a 50% chance of overturning an executive order (and 50% chance of siding with it), and all numeric print output is silently inflated by 10% because Trump always exaggerates crowd sizes. `FACT CHECK` assertions still use real values, so program logic is correct but the output always lies. Error messages have been rewritten to be longer, more unhinged, and more screenshot-worthy.

The language supports modulo (`LEFTOVER FROM`) and exponentiation (`HUGELY MULTIPLIED BY`). Default values for uninitialized variables have been implemented in a type-safe manner, providing appropriate defaults based on the variable's data type (e.g., 0 for integers, empty string for text).

With the monorepo structure, the project is now better organized with separate packages for the core language implementation, VS Code extension, and (soon) a web-based playground. This separation of concerns makes it easier for contributors to work on specific aspects of the project without affecting others.

## Error Messages

Trumplang error messages should follow Trump's speech patterns. Examples:

- Undefined variable: "NOBODY KNOWS WHAT [variable] IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!"
- Syntax error: "THIS DOESN'T MAKE SENSE, EVEN BY MY STANDARDS!"
- Division by zero: "THAT'S A DISASTER. YOU CAN'T DIVIDE BY ZERO, THAT'S FOR LOSERS!"
- Type error: "WRONG TYPE! SAD!"
- Missing file: "THIS FILE IS FAKE NEWS! [filename] DOESN'T EXIST!"
- Incorrect extension: "THIS FILE IS A DISASTER! NEEDS TO END WITH .MAGA!"
- Redeclaring constant: "[name] IS ALREADY THE BEST! YOU CAN'T CHANGE IT!"
- Unrecognized expression: "NOBODY UNDERSTANDS THIS EXPRESSION: [expr]"
- Array out of bounds: "YOU'RE TRYING TO CLIMB OVER THE WALL! STAY WITHIN THE BOUNDARIES!"
- Non-array access: "THAT'S NOT A WALL! YOU CAN'T ACCESS SECTIONS OF SOMETHING THAT ISN'T A WALL! SAD!"
- Invalid deal field: "THERE'S NO SUCH FIELD IN THIS DEAL! FAKE NEWS!"
- Non-deal access: "THAT'S NOT A DEAL! NOBODY MAKES DEALS LIKE ME, BELIEVE ME!"
- Invalid array element: "THAT'S A TERRIBLE ADDITION TO THE WALL! SAD!"
- Invalid deal field type: "WRONG TYPE FOR DEAL FIELD! WE ONLY MAKE THE BEST DEALS WITH PROPER TYPES!"
- Missing block structure: "NOBODY KNEW HOW TO VISIT BlockStatementContext! SAD!"

Error messages should always end with exclamations or "SAD!" for extra Trumpian effect.
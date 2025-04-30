# CLAUDE.md - Guide for AI Coding Assistants on Trumplang

This document contains information about the Trumplang programming language, its syntax, and implementation details.

## Language Style and Tone

Trumplang is based on Donald Trump's unique speech patterns and vocabulary. The language design follows these principles:

- ALL keywords MUST be in UPPERCASE to capture Trump's emphasis style
- Error messages should mimic Trump's speech patterns ("NOBODY KNEW", "SAD!", "TREMENDOUS", "DISASTER")
- Documentation and comments should be written in a Trump-like voice
- Use superlatives wherever possible ("THE BEST", "TREMENDOUS", "HUGE", "BIGLY")
- Program feedback should follow Trump tweet style with exclamations and strong opinions
- Development of new language features should maintain this tone throughout

## Running Commands

- Run Trumplang program: `npm start [filename.MAGA]`
- Run legacy simplified interpreter: `node src/simplified-interpreter.js [filename.MAGA]`
- Run ANTLR-based interpreter directly: `node src/cli/index.js [filename.MAGA]`
- Run tests: `EXTREME-VETTING [filename.TEST.MAGA]`
- Run all tests: `EXTREME-VETTING ALL`
- Run tests in directory: `EXTREME-VETTING DIRECTORY [directory]`

## Project Setup

- Generate ANTLR4 parser: `npm run generate-parser`
- Build project: `npm run build`
- Debug tokens: `node src/debug-tokenizer.js [filename]`
- Debug parsing: `node src/debug-parser.js [filename]`
- Visualize parse tree: `node src/debug-tree.js [filename]`

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

## Code Style Guidelines

### Basic Syntax

- ALL KEYWORDS AND VARIABLES MUST BE IN UPPERCASE
- Files use `.MAGA` extension (`.TEST.MAGA` for tests)
- Programs start with `BELIEVE ME` and end with `MAKE AMERICA GREAT AGAIN`
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
- Compound addition: `NUMBER! WINNING MASSIVELY 5` (equivalent to `NUMBER! += 5`)
- Compound subtraction: `NUMBER! LOOSING MASSIVELY 5` (equivalent to `NUMBER! -= 5`)
- Compound multiplication: `NUMBER! MANY TIMES HIGHER 5` (equivalent to `NUMBER! *= 5`)
- Compound division: `NUMBER! MANY TIMES LOWER 5` (equivalent to `NUMBER! /= 5`)
- Bitwise AND (simulated): `value ALLIANCE WITH other` (equivalent to `value & other`)
- Bitwise OR (simulated): `value COMBINED FORCES WITH other` (equivalent to `value | other`)
- Bitwise XOR (simulated): `value EXCLUSIVE DEAL WITH other` (equivalent to `value ^ other`)
- Bitwise left shift (simulated): `value PROMOTE amount` (equivalent to `value << amount`)
- Bitwise right shift (simulated): `value DEMOTE amount` (equivalent to `value >> amount`)

### Control Structures

- While loop: `WE'RE GOING TO WIN IN A LANDSLIDE CONDITION BELIEVE ME ... I TOLD YOU SO`
- For loop: `WE'RE GOING TO WIN, WIN, WIN WITH I! FROM 0 TO 10 BELIEVE ME ... I TOLD YOU SO`
- For each loop: `BILLIONS AND BILLIONS ITEM! YET ARRAY! BELIEVE ME ... I TOLD YOU SO`
- If statement: `LISTEN condition BELIEVE ME ... I TOLD YOU SO`
- Else if: `PEOPLE ARE SAYING condition BELIEVE ME ...`
- Else: `NOBODY KNEW ...`

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
- Deal fields must have a type: `HUGE`, `BIGLY`, `FAKE NEWS`, `TWEET`, `WALL`, or `DEAL`
- Multiple fields: Use `&` to separate fields in a deal structure
- Nested deal workaround: Create separate deal structures and reference them by variable

## Testing

- Name test files after original file: `FILENAME.TEST.MAGA`
- Use assertion: `FACT CHECK [actual] SO TRUE [expected]`
- Tests should return either `PASSED BIGLY` or `TOTALLY RIGGED`

## VS Code Integration

- Language support available in trumplang-vscode extension
- Syntax highlighting uses Trump-inspired colors: red, gold, navy blue

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
  - Compound assignments: `WINNING MASSIVELY`, `LOOSING MASSIVELY`, `MANY TIMES HIGHER`, `MANY TIMES LOWER`
  - Simulated bitwise operations: `ALLIANCE WITH`, `COMBINED FORCES WITH`, `EXCLUSIVE DEAL WITH`
  - Shift operations: `PROMOTE`, `DEMOTE`
  - Increment/decrement with `MAKE ... GREATER` and `MAKE ... SMALLER`
  - String and number literals
  - Conditional statements (if/else-if/else)
  - Loop structures (while, for, foreach)
  - Functions with parameters and return values
  - Proper scoping for variables and functions
  - Arrays with `BUILD THE WALL` declaration and `SECTION` access
  - Deal structures (objects) with field declaration and `FOLLOW` access
  - Iteration over arrays using foreach loops with `BILLIONS AND BILLIONS`
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

## Project Structure

- `/src/simplified-interpreter.js` - Original simplified interpreter (legacy)
- `/src/interpreter/` - ANTLR4-based interpreter (fully implemented)
  - `/src/interpreter/index.js` - Main interpreter class
  - `/src/interpreter/visitor.js` - Complete AST visitor implementation with support for all language features
  - `/src/interpreter/environment_utils.js` - Utilities for managing variable and function environments
- `/src/parser/` - Generated parser from ANTLR4
- `/src/cli/` - Command line interface (now updated to use the full interpreter)
- `/src/runtime/` - Runtime support for variables and functions
  - `/src/runtime/environment.js` - Variable and function environment with proper scope handling
  - `/src/runtime/errors.js` - Trump-styled error messages
- `/src/debug-tree.js` - Debugging tool for parse tree visualization
- `/src/debug-tokenizer.js` - Debugging tool for lexer tokenization
- `/grammar/Trumplang.g4` - Complete grammar definition with labeled elements and BlockStatement structure
- `/examples/` - Example Trumplang programs
  - `/examples/SIMPLE.MAGA` - Simple variable and print example
  - `/examples/COUNTER.MAGA` - Counter with increment operations
  - `/examples/SIMPLE_FUNCTION.MAGA` - Function demonstration with parameters and return values
  - `/examples/VERY_SIMPLE.MAGA` - Basic arithmetic and variable assignments
  - `/examples/IF_STATEMENT.MAGA` - Conditional logic demonstration
  - `/examples/WHILE_LOOP.MAGA` - While loop demonstration
  - `/examples/FOR_LOOP.MAGA` - For loop demonstration
  - `/examples/FOREACH_LOOP.MAGA` - For-each loop demonstration
  - `/examples/FIBONACCI.MAGA` - Fibonacci sequence implementation using a function
  - `/examples/ARRAY_SIMPLE.MAGA` - Basic array declaration and access example
  - `/examples/DEAL_SIMPLE.MAGA` - Basic deal structure declaration and access example
  - `/examples/NESTED_DEAL_WORKAROUND.MAGA` - Example of working with multiple deal structures
- `/test/` - Test files and test framework

## Debugging

- For parser issues, use the debug-parser.js tool: `node src/debug-parser.js [file]`
- For tokenization issues, use debug-tokenizer.js: `node src/debug-tokenizer.js [file]`
- For parse tree visualization, use debug-tree.js: `node src/debug-tree.js [file]`
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
- **Extended Operations**: Implemented bitwise, shift, modulo, and power operations
- **Compound Assignments**: Added support for compound assignment operators
- **Type Initialization**: Implemented sensible default values for all variable types
- **Test Framework**: Ensured all tests pass with the enhanced expression parser implementation
- **Grammar Extensions**: Added new expression types (bitwise and shift operations) to grammar
- **Enhanced Operators**: Added Trump-style syntax for new operator types

The implementation now fully supports all the core language features specified in the grammar, with a properly designed visitor-based interpreter architecture. The transition from the simplified interpreter to the full ANTLR4-based implementation is complete, and all example programs can be executed using the new interpreter. With the addition of BlockStatement structure in the grammar and corresponding visitors, the parser now generates more precise error messages and handles code blocks more consistently across different control structures and functions.

The most recent optimization involves using ANTLR4 labels in the grammar (e.g., `varName = VARIABLE`) and accessing them directly in the visitor via the `.text` property (e.g., `ctx.varName.text`). This approach significantly simplifies the visitor code by eliminating the need to manually search through child nodes using `getChild()` and checking token types. When working with the visitor code, always use the `.text` property to access labeled elements, rather than calling `.getText()` which would be incorrect.

The codebase has been fully migrated from CommonJS to ES Modules format, with proper use of `import`/`export` statements instead of `require()`/`module.exports`. This modernization also includes converting the visitor implementation from prototype-based inheritance to ES6 classes with proper extension using the `extends` keyword and `super()` constructor calls. All places using `__dirname` have been updated to use `import.meta.url` with the URL API for path resolution, making the codebase fully compatible with Node.js ES modules.

The latest updates include implementing proper support for the extended expression hierarchy introduced in the grammar. This includes adding visitors for the `bitwiseExpression`, `shiftExpression`, and `powerExpression` rules that handle bitwise operations, bit shifts, and exponentiation operations respectively. The `term` visitor has been enhanced to support modulo operations with the `LEFTOVER FROM` syntax. Additionally, compound assignment operators have been implemented for more concise code.

The language now supports a rich set of operations with Trump-style syntax, including bitwise operations (`ALLIANCE WITH`, `COMBINED FORCES WITH`, `EXCLUSIVE DEAL WITH`), shift operations (`PROMOTE`, `DEMOTE`), and mathematics operations like modulo (`LEFTOVER FROM`) and exponentiation (`HUGELY MULTIPLIED BY`). Default values for uninitialized variables have been implemented in a type-safe manner, providing appropriate defaults based on the variable's data type (e.g., 0 for integers, empty string for text).

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

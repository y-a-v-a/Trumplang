/*
 * Trumplang - A Trump-inspired esoteric programming language
 * 
 * This grammar defines a programming language based on Donald Trump's speech patterns,
 * famous quotes, and tweet style. The language is designed to look like Trump prose
 * while functioning as a proper programming language.
 *
 * Key design principles:
 * - ALL KEYWORDS IN UPPERCASE
 * - All variables end with exclamation mark (!) and are in UPPERCASE
 * - All strings must be in UPPERCASE
 * - The language should read like Trump-speech
 */

grammar Trumplang;

// Program structure
program
    : 'BELIEVE ME' statement+ 'MAKE AMERICA GREAT AGAIN'
    ;

// Statements
statement
    : variableDeclaration
    | constantDeclaration
    | functionDeclaration
    | functionCall
    | ifStatement
    | whileLoop
    | forLoop
    | arrayDeclaration
    | assignmentStatement
    | printStatement
    | inputStatement
    | returnStatement
    | commentStatement
    | loopBreak
    ;

// Comments - "A LOT OF PEOPLE ARE SAYING"
commentStatement
    : 'A LOT OF PEOPLE ARE SAYING' TEXT
    ;

// Variable declarations - "I HAVE THE BEST"
variableDeclaration
    : 'I HAVE THE BEST' dataType VARIABLE 'SO TRUE' expression
    ;

// Constants - uses "I HAVE A VERY GOOD BRAIN FOR"
constantDeclaration
    : 'I HAVE A VERY GOOD BRAIN FOR' dataType VARIABLE 'SO TRUE' expression
    ;

// Data types
dataType
    : 'HUGE'           // Integer
    | 'BIGLY'          // Float/Double
    | 'FAKE NEWS'      // Boolean
    | 'TWEET'          // String
    | 'WALL'           // Array
    | 'DEAL'           // Object/Structure
    ;

// Function declaration - "TREMENDOUS"
functionDeclaration
    : 'TREMENDOUS' IDENTIFIER 'PEOPLE TELL ME' parameterList? 'BELIEVE ME' 
      statement* 
      returnStatement? 
      'YOU\'RE FIRED'
    ;

// Function parameters
parameterList
    : dataType VARIABLE ('AND' dataType VARIABLE)*
    ;

// Return statement - "AND I MEAN THAT"
returnStatement
    : 'AND I MEAN THAT' expression
    ;

// Function call - "I CALL UPON"
functionCall
    : 'I CALL UPON' IDENTIFIER 'PEOPLE TELL ME' argumentList?
    ;

// Function arguments
argumentList
    : expression ('AND' expression)*
    ;

// If statement - "LISTEN"
ifStatement
    : 'LISTEN' condition 'BELIEVE ME' 
      statement* 
      elseIfStatement*
      elseStatement?
      'YOU\'RE FIRED'
    ;

// Else if statement - "PEOPLE ARE SAYING"
elseIfStatement
    : 'PEOPLE ARE SAYING' condition 'BELIEVE ME' statement*
    ;

// Else statement - "NOBODY KNEW"
elseStatement
    : 'NOBODY KNEW' statement*
    ;

// While loop - "WE'RE GOING TO WIN SO MUCH"
whileLoop
    : 'WE\'RE GOING TO WIN SO MUCH' 'YOU\'RE GOING TO GET TIRED OF WINNING' condition 'BELIEVE ME' 
      statement* 
      'YOU\'RE FIRED'
    ;

// For loop - "WE'RE GOING TO WIN, WIN, WIN"
forLoop
    : 'WE\'RE GOING TO WIN, WIN, WIN' 'WITH' VARIABLE 'FROM' expression 'TO' expression 'BELIEVE ME'
      statement*
      'YOU\'RE FIRED'
    ;

// Loop item iteration - "BILLIONS AND BILLIONS"
forEachLoop
    : 'BILLIONS AND BILLIONS' VARIABLE 'IN' VARIABLE 'BELIEVE ME'
      statement*
      'YOU\'RE FIRED'
    ;

// Break from loop early
loopBreak
    : 'FAKE NEWS MEDIA SAID ENOUGH'
    ;

// Array declaration - "BUILD THE WALL"
arrayDeclaration
    : 'BUILD THE WALL' VARIABLE 'AND MEXICO WILL PAY FOR IT' arrayElements?
    ;

// Array elements
arrayElements
    : expression ('WINNING' expression)*
    ;

// Assignment statement
assignmentStatement
    : VARIABLE 'SO TRUE' expression
    ;

// Print statement - "EVERYONE IS TALKING ABOUT"
printStatement
    : 'EVERYONE IS TALKING ABOUT' expression
    ;

// Input statement - "MANY PEOPLE ARE ASKING"
inputStatement
    : 'MANY PEOPLE ARE ASKING' VARIABLE
    ;

// Condition for control structures
condition
    : expression comparison expression
    | 'WRONG' condition
    | condition 'AND IT\'S TRUE' condition
    | condition 'OR MAYBE' condition
    ;

// Comparison operators
comparison
    : 'SO TRUE'                 // Equals
    | 'TOTAL DISASTER'          // Not equals
    | 'BETTER THAN'             // Greater than
    | 'NOT AS GOOD AS'          // Less than
    | 'AT LEAST AS GOOD AS'     // Greater than or equal
    | 'NO BETTER THAN'          // Less than or equal
    ;

// Expressions
expression
    : term
    | expression 'WINNING' term       // Addition
    | expression 'LOSING' term        // Subtraction
    ;

// Terms
term
    : factor
    | term 'TREMENDOUS' factor       // Multiplication
    | term 'SAD' factor              // Division
    ;

// Factors
factor
    : '(' expression ')'
    | VARIABLE
    | STRING
    | NUMBER
    | BOOLEAN
    | functionCall
    | arrayAccess
    ;

// Array access - using "WALL" metaphor
arrayAccess
    : VARIABLE 'SECTION' expression
    ;

// Lexer Rules

// Variables - UPPERCASE + exclamation mark
VARIABLE
    : [A-Z][A-Z0-9_]* '!'
    ;

// Identifiers for functions, etc. (no exclamation)
IDENTIFIER
    : [A-Z][A-Z0-9_]*
    ;

// Strings - must be in UPPERCASE
STRING
    : '"' [A-Z0-9 ,.!?':;()&\-]* '"'
    ;

// Numbers
NUMBER
    : [0-9]+ ('.' [0-9]+)?
    ;

// Boolean values
BOOLEAN
    : 'VERY TRUE'
    | 'FAKE NEWS'
    ;

// Text for comments - any characters until end of line
TEXT
    : ~[\r\n]+
    ;

// Whitespace and line terminators
WS
    : [ \t\r\n]+ -> skip
    ;
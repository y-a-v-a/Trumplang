/*
 * Trumplang - A Trump-inspired esoteric programming language
 * 
 * This grammar defines a programming language based on Donald Trump's speech patterns, famous
 * quotes, and tweet style. The language is designed to look like Trump prose while functioning as a
 * proper programming language.
 * 
 * Key design principles: - ALL KEYWORDS IN UPPERCASE - All variables end with exclamation mark (!)
 * and are in UPPERCASE - All strings must be in UPPERCASE - The language should read like
 * Trump-speech
 */

grammar Trumplang;

// Program structure
program: 'BELIEVE ME' statement+ 'MAKE AMERICA GREAT AGAIN';

// Statements
statement:
	importStatement
	| blockStatement
	| selectiveImport
	| variableDeclaration
	| constantDeclaration
	| functionDeclaration
	| functionCall
	| ifStatement
	| whileLoop
	| forLoop
	| forEachLoop
	| arrayDeclaration
	| assignmentStatement
	| incrementStatement
	| decrementStatement
	| printStatement
	| inputStatement
	| returnStatement
	| commentStatement
	| loopBreak
	| assertStatement;

// Comments - "A LOT OF PEOPLE ARE SAYING"
commentStatement: COMMENT;

// Variable declarations - "I HAVE THE BEST"
variableDeclaration:
	'I HAVE THE BEST' dataType VARIABLE ASSIGNMENT (
		expression
		| dealDeclaration
	);

// Constants - uses "I HAVE A VERY GOOD BRAIN FOR"
constantDeclaration:
	'I HAVE A VERY GOOD BRAIN FOR' dataType VARIABLE ASSIGNMENT expression;

// Data types
dataType:
	INTEGER_TYPE
	| FLOAT_TYPE
	| BOOLEAN_TYPE
	| STRING_TYPE
	| ARRAY_TYPE
	| STRUCTUR_TYPE;

// Function declaration - "INCREDIBLE" (was "TREMENDOUS")
functionDeclaration:
	'INCREDIBLE' IDENTIFIER 'PEOPLE TELL ME' parameterList? blockStatement;

blockStatement: OPEN_BLOCK statement* CLOSE_BLOCK;

// Function parameters
parameterList: dataType VARIABLE ('AND' dataType VARIABLE)*;

// Return statement - "AND I MEAN THAT"
returnStatement: 'AND I MEAN THAT' expression;

// Function call - "I CALL UPON"
functionCall:
	'I CALL UPON' IDENTIFIER 'PEOPLE TELL ME' argumentList?;

// Function arguments
argumentList: expression ('AND' expression)*;

// If statement - "LISTEN"
ifStatement:
	'LISTEN' condition statement elseIfStatement* elseStatement?;

// Else if statement - "PEOPLE ARE SAYING"
elseIfStatement: 'PEOPLE ARE SAYING' condition statement;

// Else statement - "NOBODY KNEW"
elseStatement: 'NOBODY KNEW' statement;

// While loop - "WE'RE GOING TO WIN IN A LANDSLIDE"
whileLoop:
	'WE\'RE GOING TO WIN IN A LANDSLIDE' condition blockStatement;

// For loop - "WE'RE GOING TO WIN, WIN, WIN"
forLoop:
	'WE\'RE GOING TO WIN, WIN, WIN' 'WITH' VARIABLE 'FROM' expression 'TO' expression blockStatement
		;

// Loop item iteration - "BILLIONS AND BILLIONS"
forEachLoop:
	'BILLIONS AND BILLIONS' VARIABLE 'YET' VARIABLE blockStatement;

// Break from loop early
loopBreak: 'I WILL VETO!';

// Array declaration - "BUILD THE WALL"
arrayDeclaration:
	'BUILD THE WALL' VARIABLE 'AND MEXICO WILL PAY FOR IT' arrayElements?;

// Array elements
arrayElements: expression ('PREVAILS' expression)*;

// Assignment statement - updated to "ABSOLUTELY" (was "IT IS YET", which was "IS YET", which was "JUST HIRED")
assignmentStatement: VARIABLE ASSIGNMENT expression;

// Print statement - "EVERYONE IS TALKING ABOUT"
printStatement: 'EVERYONE IS TALKING ABOUT' expression;

// Input statement - "MANY PEOPLE ARE ASKING"
inputStatement: 'MANY PEOPLE ARE ASKING' VARIABLE;

// Increment operation - "MAKE GREATER"
incrementStatement: 'MAKE' VARIABLE 'GREATER';

// Decrement operation - "MAKE SMALLER"
decrementStatement: 'MAKE' VARIABLE 'SMALLER';

// Condition for control structures
condition:
	expression comparison expression
	| VARIABLE
	| BOOLEAN
	| NOT condition
	| condition AND condition
	| condition OR condition;

// Comparison operators - "SO TRUE" remains for equality checks
comparison:
	EQUALS // Equals
	| NOT_EQUALS // Not equals
	| GREATER_THAN // Greater than
	| LESS_THAN // Less than
	| GREATER_THAN_OR_EQUALS // Greater than or equal
	| LESS_THAN_OR_EQUALS; // Less than or equal

// Expressions
expression:
	term
	| expression PLUS term // Numeric addition
	| expression STRING_CONCAT term // String concatenation
	| expression MINUS term; // Subtraction

// Terms - updated "TREMENDOUS" to "BIG LEAGUE TIMES" for multiplication
term:
	factor
	| term MULTIPLY factor // Multiplication (was "TREMENDOUS")
	| term DIVIDE factor; // Division

// Factors
factor:
	'(' expression ')'
	| VARIABLE
	| STRING
	| NUMBER
	| BOOLEAN
	| functionCall
	| arrayAccess
	| dealAccess;

// Array access - using "WALL" metaphor
arrayAccess: VARIABLE 'SECTION' expression;

// Deal field entries
dealField: dataType VARIABLE ASSIGNMENT expression;

// Deal structure declaration
dealDeclaration:
	'(' dealField (AMPERSAND dealField)* ')' DEAL_DECLARE;

// Deal field access
dealAccess: VARIABLE 'FOLLOW' VARIABLE;

// Assert statement - "FACT CHECK"
assertStatement:
	'FACT CHECK' (expression | condition) 'SO TRUE' expression;

// Import statement - "I KNOW THE BEST PEOPLE FROM"
importStatement: 'I KNOW THE BEST PEOPLE FROM' FILEPATH;

// Selective import - specific "people"
selectiveImport:
	'I ONLY WANT' IDENTIFIER ('AND' IDENTIFIER)* 'FROM' FILEPATH;

// Lexer Rules
EQUALS: 'SO TRUE';

NOT_EQUALS: 'TOTAL DISASTER';

GREATER_THAN: 'BETTER THAN';

GREATER_THAN_OR_EQUALS: 'AT LEAST AS GOOD AS';

LESS_THAN: 'NOT AS GOOD AS';

LESS_THAN_OR_EQUALS: 'NO BETTER THAN';

NOT: 'WRONG';

AND: 'AND IT\'S TRUE';

OR: 'OR MAYBE';

PLUS: 'WINNING';

MINUS: 'LOSING';

ASSIGNMENT: 'ABSOLUTELY';

STRING_CONCAT: 'ENDORSING';

DIVIDE: 'SAD';

MULTIPLY: 'BIG LEAGUE TIMES';

INTEGER_TYPE: 'HUGE'; // Integer

FLOAT_TYPE: 'BIGLY'; // Float/Double

BOOLEAN_TYPE: 'SUPPORT'; // Boolean

STRING_TYPE: 'TWEET'; // String

ARRAY_TYPE: 'WALL'; // Array

STRUCTUR_TYPE: 'DEAL'; // Object/Structure

OPEN_BLOCK: 'BELIEVE ME';

CLOSE_BLOCK: 'YOU\'RE FIRED';

AMPERSAND: '&';

DEAL_DECLARE: '!!';

VAR_DECLARE: '!';

// Variables - UPPERCASE + exclamation mark
VARIABLE: [A-Z][A-Z0-9_]* VAR_DECLARE;

// Identifiers for functions, etc. (no exclamation)
IDENTIFIER: [A-Z][A-Z0-9_]*;

// Strings - must be in UPPERCASE
STRING: '"' [A-Z0-9 ,.!?':;()&\-_]* '"';

// Numbers
NUMBER: [0-9]+ ('.' [0-9]+)?;

// Boolean values
BOOLEAN: TRUE | FALSE;

TRUE: 'VERY TRUE';

FALSE: 'FAKE NEWS';

// Comments - entire line starting with "A LOT OF PEOPLE ARE SAYING"
COMMENT:
	'A LOT OF PEOPLE ARE SAYING' ~[\n\r]* ([\n\r] | EOF) -> channel(HIDDEN);

// File paths for imports
FILEPATH: '"' [A-Z0-9_./]+ '.MAGA' '"';

// Whitespace and line terminators
WS: [ \t\r\n]+ -> skip;
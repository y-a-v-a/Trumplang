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
program: PROG_START statement+ PROG_END;

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
	| fireStatement
	| executiveOrder
	| supremeCourtOverrule
	| assertStatement;

// Comments - "A LOT OF PEOPLE ARE SAYING"
commentStatement: COMMENT;

// Variable declarations - "I HAVE THE BEST"
variableDeclaration:
	VARIABLE_DECL dataType varName = VARIABLE ASSIGNMENT (
		expression
		| dealDeclaration
	);

// Constants - uses "I HAVE A VERY GOOD BRAIN FOR"
constantDeclaration:
	CONSTANT_DECL dataType varName = VARIABLE ASSIGNMENT expression;

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
	FUNCTION_DECL funcName = IDENTIFIER PARAMS_ARGS_START parameterList? blockStatement;

blockStatement: OPEN_BLOCK statement* CLOSE_BLOCK;

// Function parameters
parameterList:
	dataType paramName += VARIABLE (
		PARAMS_ARGS_CHAIN dataType paramName += VARIABLE
	)*;

// Return statement - "AND I MEAN THAT"
returnStatement: RETURN expression;

// Function call - "I CALL UPON"
functionCall:
	FUNC_CALL funcName = IDENTIFIER PARAMS_ARGS_START argumentList?;

// Function arguments
argumentList: expression (PARAMS_ARGS_CHAIN expression)*;

// If statement - "LISTEN"
ifStatement:
	IF_DECL condition statement elseIfStatement* elseStatement?;

// Else if statement - "PEOPLE ARE SAYING"
elseIfStatement: ELSE_IF_DECL condition statement;

// Else statement - "NOBODY KNEW"
elseStatement: ELSE_DECL statement;

// While loop - "WE'RE GOING TO WIN IN A LANDSLIDE"
whileLoop: WHILE_LOOP_DECL condition blockStatement;

// For loop - "WE'RE GOING TO WIN, WIN, WIN"
forLoop:
	FOR_LOOP_DECL FOR_LOOP_WITH varName = VARIABLE FOR_LOOP_FROM expression FOR_LOOP_TO expression blockStatement;

// Loop item iteration - "BILLIONS AND BILLIONS"
forEachLoop:
	FOR_EACH_LOOP_DECL varName = VARIABLE FOR_EACH_FROM listName = VARIABLE blockStatement;

// Break from loop early
loopBreak: BREAK;

// Fire a function - permanently delete it, Trump's catchphrase
fireStatement: FIRE funcName=IDENTIFIER;

// Executive order - remap an operator to behave like another operator
executiveOrder: EXEC_ORDER fromOp=operator ASSIGNMENT toOp=operator;

// Supreme Court can overturn an executive order (50% chance it sides with the order instead!)
supremeCourtOverrule: SUPREME_COURT fromOp=operator;

// Operator tokens for executive orders
operator: PLUS | MINUS | MULTIPLY | DIVIDE;

// Array declaration - "BUILD THE WALL"
arrayDeclaration:
	ARRAY_DECL arrayName = VARIABLE ARRAY_ELEMENTS_DECL arrayElements?;

// Array elements
arrayElements: expression (ARRAY_CHAIN expression)*;

// Assignment statement - updated to "ABSOLUTELY" (was "IT IS YET", which was "IS YET", which was "JUST HIRED")
assignmentStatement: 
    varName = VARIABLE ASSIGNMENT expression;          // Basic assignment (=)

// Print statement - "EVERYONE IS TALKING ABOUT"
printStatement: PRINT expression;

// Input statement - "MANY PEOPLE ARE ASKING"
inputStatement: INPUT varName = VARIABLE;

// Increment operation - "MAKE GREATER"
incrementStatement: 'MAKE' varName = VARIABLE 'GREATER';

// Decrement operation - "MAKE SMALLER"
decrementStatement: 'MAKE' varName = VARIABLE 'SMALLER';

// Condition for control structures
condition:
	expression comparison expression
	| condVar = VARIABLE
	| condBool = BOOLEAN
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
	powerExpression
	| term MULTIPLY primaryExpression // Multiplication (was "TREMENDOUS")
	| term DIVIDE primaryExpression // Division
	| term MODULO primaryExpression; // Modulo (new)

powerExpression:
    primaryExpression
    | primaryExpression POWER primaryExpression;  // Exponentiation (right-associative)

// Factors
primaryExpression:
	'(' expression ')'
	| VARIABLE
	| STRING
	| NUMBER
	| BOOLEAN
	| functionCall
	| arrayAccess
	| dealAccess;

// Array access - using "WALL" metaphor
arrayAccess: arrayName = VARIABLE ARRAY_ACCESS expression;

// Deal field entries
dealField: dataType fieldName = VARIABLE ASSIGNMENT expression;

// Deal structure declaration
dealDeclaration:
	'(' dealField (AMPERSAND dealField)* ')' DEAL_DECLARE;

// Deal field access
dealAccess:
	dealName = VARIABLE DEAL_ACCESS_KEYWORD fieldName = VARIABLE;

// Assert statement - "FACT CHECK"
assertStatement:
	ASSERT_CALL (expression | condition) EQUALS expression;

// Import statement - "I KNOW THE BEST PEOPLE FROM"
importStatement: IMPORT filePath = FILEPATH;

// Selective import - specific "people"
selectiveImport:
	'I ONLY WANT' importName += IDENTIFIER (
		PARAMS_ARGS_CHAIN importName += IDENTIFIER
	)* 'FROM' filePath = FILEPATH;

// Lexer Rules
IF_DECL: 'LISTEN';

ELSE_IF_DECL: 'PEOPLE ARE SAYING';

ELSE_DECL: 'NOBODY KNEW';

ARRAY_DECL: 'BUILD THE WALL';

ARRAY_ELEMENTS_DECL: 'AND MEXICO WILL PAY FOR IT';

ARRAY_ACCESS: 'SECTION';

ARRAY_CHAIN: 'PREVAILS';

PROG_START: 'THE TIME FOR EMPTY TALK IS OVER!!!';

PROG_END: 'MAKE AMERICA GREAT AGAIN';

FUNCTION_DECL: 'INCREDIBLE';

VARIABLE_DECL: 'I HAVE THE BEST';

CONSTANT_DECL: 'I HAVE A VERY GOOD BRAIN FOR';

PARAMS_ARGS_START: 'PEOPLE TELL ME';

PARAMS_ARGS_CHAIN: 'AND';

RETURN: 'AND I MEAN THAT';

FUNC_CALL: 'I CALL UPON';

BREAK: 'I WILL VETO!';

FIRE: 'YOU\'RE FIRED';

EXEC_ORDER: 'EXECUTIVE ORDER';

SUPREME_COURT: 'SUPREME COURT OVERRULES';

WHILE_LOOP_DECL: 'WE\'RE GOING TO WIN IN A LANDSLIDE';

FOR_LOOP_DECL: 'WE\'RE GOING TO WIN, WIN, WIN';

FOR_LOOP_WITH: 'WITH';

FOR_LOOP_FROM: 'FROM';

FOR_LOOP_TO: 'TO';

FOR_EACH_LOOP_DECL: 'BILLIONS AND BILLIONS';

FOR_EACH_FROM: 'YET';

PRINT: 'EVERYONE IS TALKING ABOUT';

INPUT: 'MANY PEOPLE ARE ASKING';

IMPORT: 'I KNOW THE BEST PEOPLE FROM';

DEAL_ACCESS_KEYWORD: 'FOLLOW';

ASSERT_CALL: 'FACT CHECK';

EQUALS: 'SO TRUE'; // ==

NOT_EQUALS: 'TOTAL DISASTER'; // !==

GREATER_THAN: 'BETTER THAN'; // >

GREATER_THAN_OR_EQUALS: 'AT LEAST AS GOOD AS'; // >=

LESS_THAN: 'NOT AS GOOD AS'; // <

LESS_THAN_OR_EQUALS: 'NO BETTER THAN'; // <=

NOT: 'WRONG'; // !

AND: 'AND IT\'S TRUE'; // &&

OR: 'OR MAYBE'; // ||

PLUS: 'WINNING'; // +

MINUS: 'LOSING'; // -

ASSIGNMENT: 'ABSOLUTELY'; // =

STRING_CONCAT: 'ENDORSING';

MULTIPLY: 'BIG LEAGUE TIMES';

DIVIDE: 'SAD';

MODULO: 'LEFTOVER FROM';

POWER: 'HUGELY MULTIPLIED BY';

INTEGER_TYPE: 'HUGE'; // Integer

FLOAT_TYPE: 'BIGLY'; // Float/Double

BOOLEAN_TYPE: 'SUPPORT'; // Boolean

STRING_TYPE: 'TWEET'; // String

ARRAY_TYPE: 'WALL'; // Array

STRUCTUR_TYPE: 'DEAL'; // Object/Structure

OPEN_BLOCK: 'BELIEVE ME';

CLOSE_BLOCK: 'I TOLD YOU SO';

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
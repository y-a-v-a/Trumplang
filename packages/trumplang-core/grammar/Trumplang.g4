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
	| arrayAssignment
	| assignmentStatement
	| incrementStatement
	| decrementStatement
	| printStatement
	| inputStatement
	| returnStatement
	| commentStatement
	| loopBreak
	| pardonStatement
	| impeachStatement
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
	IF_DECL expression statement elseIfStatement* elseStatement?;

// Else if statement - "PEOPLE ARE SAYING"
elseIfStatement: ELSE_IF_DECL expression statement;

// Else statement - "NOBODY KNEW"
elseStatement: ELSE_DECL statement;

// While loop - "WE'RE GOING TO WIN IN A LANDSLIDE"
whileLoop: WHILE_LOOP_DECL expression blockStatement;

// For loop - "WE'RE GOING TO WIN, WIN, WIN". Direction is inferred: FROM 10 TO 0
// counts down, no extra keyword needed. The optional step clause must be a
// POSITIVE number - we only take tremendous forward steps around here.
forLoop:
	FOR_LOOP_DECL FOR_LOOP_WITH varName = VARIABLE FROM_KEYWORD expression FOR_LOOP_TO expression (
		FOR_LOOP_STEP expression
	)? blockStatement;

// Loop item iteration - "BILLIONS AND BILLIONS"
forEachLoop:
	FOR_EACH_LOOP_DECL varName = VARIABLE FOR_EACH_FROM listName = VARIABLE blockStatement;

// Break from loop early
loopBreak: BREAK;

// PARDON - exception handling. You attempt the block because I ALONE CAN FIX IT;
// when it blows up, that's a WITCH HUNT! and the error gets pardoned (caught).
// The optional variable after WITCH HUNT! receives the error as a TWEET.
// You CANNOT pardon a failed FACT CHECK - that is the entire point of fact checks.
pardonStatement:
	TRY_DECL blockStatement CATCH_DECL (errName = VARIABLE)? blockStatement;

// IMPEACH - throw. The impeached value flies up the call stack until some
// WITCH HUNT! clause pardons it. A perfect call, and they impeach anyway.
impeachStatement: IMPEACH expression;

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

// Array element assignment - rebuilding a SECTION of the WALL. Bounds-checked:
// you can renovate an existing section, you cannot bolt new sections onto the end.
arrayAssignment:
	arrayName = VARIABLE ARRAY_ACCESS index = additiveExpression ASSIGNMENT expression;

// Assignment statement - updated to "ABSOLUTELY" (was "IT IS YET", which was "IS YET", which was "JUST HIRED")
assignmentStatement: 
    varName = VARIABLE ASSIGNMENT expression;          // Basic assignment (=)

// Print statement - "EVERYONE IS TALKING ABOUT"
printStatement: PRINT expression;

// Input statement - "MANY PEOPLE ARE ASKING"
inputStatement: INPUT varName = VARIABLE;

// Increment operation - "MAKE GREATER"
incrementStatement: MAKE_DECL varName = VARIABLE INCREMENT_OP;

// Decrement operation - "MAKE SMALLER"
decrementStatement: MAKE_DECL varName = VARIABLE DECREMENT_OP;

// Unified expression grammar - one precedence ladder, lowest-binding first.
//
// Equality ("SO TRUE" / "TOTAL DISASTER") sits at the TOP (loosest binding) on
// purpose: it lets a whole boolean computation be checked against an expected
// value the way POTUS talks - "<this whole thing> SO TRUE <that>". It also keeps
// the FACT CHECK idiom working: `FACT CHECK <actual> SO TRUE <expected>` is just
// an equality expression that must come out TRUE.
expression: equalityExpression;

equalityExpression:
	logicalOrExpression
	| equalityExpression EQUALS logicalOrExpression       // == "SO TRUE"
	| equalityExpression NOT_EQUALS logicalOrExpression;  // != "TOTAL DISASTER"

logicalOrExpression:
	logicalAndExpression
	| logicalOrExpression OR logicalAndExpression;        // || "OR MAYBE"

logicalAndExpression:
	comparisonExpression
	| logicalAndExpression AND comparisonExpression;      // && "AND IT'S TRUE"

comparisonExpression:
	additiveExpression
	| comparisonExpression GREATER_THAN additiveExpression           // >
	| comparisonExpression LESS_THAN additiveExpression              // <
	| comparisonExpression GREATER_THAN_OR_EQUALS additiveExpression // >=
	| comparisonExpression LESS_THAN_OR_EQUALS additiveExpression;   // <=

additiveExpression:
	term
	| additiveExpression PLUS term          // Numeric addition "WINNING"
	| additiveExpression STRING_CONCAT term // String concatenation "ENDORSING"
	| additiveExpression MINUS term;        // Subtraction "LOSING"

// Terms - "BIG LEAGUE TIMES" for multiplication
term:
	powerExpression
	| term MULTIPLY powerExpression // Multiplication
	| term DIVIDE powerExpression   // Division
	| term MODULO powerExpression;  // Modulo

powerExpression:
	unaryExpression
	| unaryExpression POWER powerExpression; // Exponentiation (right-associative)

// Unary - logical NOT ("WRONG") and numeric negation ("LOSING")
unaryExpression:
	NOT unaryExpression
	| MINUS unaryExpression
	| primaryExpression;

// Factors
primaryExpression:
	OPEN_PAREN expression CLOSE_PAREN
	| VARIABLE
	| STRING
	| NUMBER
	| BOOLEAN
	| functionCall
	| arrayAccess
	| dealAccess;

// Array access - using "WALL" metaphor. The index is an additive expression so
// that a trailing comparison (e.g. "ARRAY! SECTION 0 SO TRUE 10") is not swallowed
// into the index - it stays "(ARRAY! SECTION 0) SO TRUE 10".
arrayAccess: arrayName = VARIABLE ARRAY_ACCESS additiveExpression;

// Deal field entries. A field's value may itself be a deal declaration -
// deals within deals, the ART of it.
dealField:
	dataType fieldName = VARIABLE ASSIGNMENT (
		expression
		| dealDeclaration
	);

// Deal structure declaration
dealDeclaration:
	OPEN_PAREN dealField (AMPERSAND dealField)* CLOSE_PAREN DEAL_DECLARE;

// Deal field access - FOLLOW chains through nested deals:
// COMPANY! FOLLOW CEO! FOLLOW NAME!
dealAccess:
	dealName = VARIABLE (DEAL_ACCESS_KEYWORD fieldName += VARIABLE)+;

// Assert statement - "FACT CHECK". Takes a single boolean expression that must
// come out TRUE. "FACT CHECK <actual> SO TRUE <expected>" now reads as the
// equality expression "<actual> SO TRUE <expected>".
assertStatement:
	ASSERT_CALL expression;

// Import statement - "I KNOW THE BEST PEOPLE FROM"
importStatement: IMPORT filePath = FILEPATH;

// Selective import - specific "people"
selectiveImport:
	SELECTIVE_IMPORT_DECL importName += IDENTIFIER (
		PARAMS_ARGS_CHAIN importName += IDENTIFIER
	)* FROM_KEYWORD filePath = FILEPATH;

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

TRY_DECL: 'I ALONE CAN FIX IT';

CATCH_DECL: 'WITCH HUNT!';

IMPEACH: 'IMPEACH';

EXEC_ORDER: 'EXECUTIVE ORDER';

SUPREME_COURT: 'SUPREME COURT OVERRULES';

WHILE_LOOP_DECL: 'WE\'RE GOING TO WIN IN A LANDSLIDE';

FOR_LOOP_DECL: 'WE\'RE GOING TO WIN, WIN, WIN';

FOR_LOOP_WITH: 'WITH';

FROM_KEYWORD: 'FROM';

FOR_LOOP_TO: 'TO';

FOR_LOOP_STEP: 'IN TREMENDOUS STEPS OF';

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

// Increment/decrement keywords - "MAKE ... GREATER" / "MAKE ... SMALLER"
MAKE_DECL: 'MAKE';

INCREMENT_OP: 'GREATER';

DECREMENT_OP: 'SMALLER';

// Selective import - "I ONLY WANT ... FROM"
SELECTIVE_IMPORT_DECL: 'I ONLY WANT';

// Grouping parentheses
OPEN_PAREN: '(';

CLOSE_PAREN: ')';

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
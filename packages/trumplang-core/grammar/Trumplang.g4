/*
 * Trumplang - A Trump-inspired esoteric programming language
 *
 * This grammar defines a programming language based on Donald Trump's speech patterns, famous
 * quotes, and tweet style. The language is designed to look like Trump prose while functioning as a
 * proper programming language.
 *
 * Key design principles: - ALL KEYWORDS IN UPPERCASE - All variables end with exclamation mark (!)
 * and are in UPPERCASE - String VALUES are always UPPERCASE: you may write them in any case,
 * but the runtime shouts them back - The language should read like Trump-speech
 *
 * THE IDENTITY OF THIS LANGUAGE - read this before anything else:
 *
 * The output lies, the logic doesn't. Every number printed via EVERYONE IS TALKING ABOUT is
 * inflated (crowd sizes, folks) and every retelling grows - the first numeric print inflates
 * 10%, each one after inflates 1% more than the last - while FACT CHECK assertions always
 * see the real values.
 *
 * The operators themselves can be gaslit. EXECUTIVE ORDER remaps arithmetic at runtime
 * (addition can be made to subtract), and SUPREME COURT OVERRULES has a 50% chance of striking
 * the order down - or siding with it. Nondeterminism is a branch of government here.
 *
 * The programmer is constrained by the theme. Functions MUST praise themselves (a superlative
 * is required syntax - modesty is a parse error), every string value is SHOUTED (uppercased
 * at runtime no matter how you wrote it), and a failed FACT CHECK can never be pardoned.
 *
 * Errors are governance. IMPEACH throws, WITCH HUNT! catches, YOU'RE FIRED deletes functions,
 * and I WILL VETO! leaves loops.
 *
 * Announcements are not deliveries. IN TWO WEEKS schedules a block that never runs - the
 * deadline is always two weeks away, and it has been for years.
 *
 * Trade is a weapon. BIG BEAUTIFUL TARIFF taxes every number an imported function gives
 * back. The exporting module pays, officially. FACT CHECK the delivery and see whose
 * number got smaller.
 *
 * Written order is a suggestion. THE WEAVE runs a block's statements as tangents - evens
 * first, then back for the odds - and it always comes back together. Genius, frankly.
 *
 * A body is optional. A function may have CONCEPTS OF A PLAN instead of a body: calling it
 * insists the plan is fully worked out and delivers the return type's default. Very soon.
 *
 * Counting is directional. STOP THE COUNT leaves a loop the moment its condition says we're
 * ahead; while we're behind, the count continues. It only ever stops in one direction.
 *
 * Debt is optional. CHAPTER 11 resets every variable to its type default and execution
 * continues like nothing happened. Six filings per program - the brand survives all of them.
 *
 * Silence is purchasable. HUSH MONEY settles an error from a numeric account with no handler
 * block and no output - unless the payment bounces, in which case it all goes in the papers.
 *
 * Loyalty is mandatory (no syntax, pure runtime). A function ignored for 10 straight calls
 * leaks tell-all chapters; after three the book publishes. Calling it back restores loyalty.
 */

grammar Trumplang;

// Program structure
program: PROG_START statement+ PROG_END;

// Statements. There is NO mandatory separator - adjacent statements
// disambiguate on keyword boundaries, and ANTLR's adaptive prediction handles
// most sequences. But when both readings are complete-viable (a zero-argument
// call followed by another call gets swallowed as its argument), end the
// statement with PERIOD. - the most emphatic optional terminator in any
// programming language, PERIOD.
statement:
	(
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
		| dealAssignment
		| assignmentStatement
		| incrementStatement
		| decrementStatement
		| printStatement
		| inputStatement
		| returnStatement
		| commentStatement
		| vetoStatement
		| pardonStatement
		| impeachStatement
		| fireStatement
		| executiveOrder
		| supremeCourtOverrule
		| factCheckStatement
		| twoWeeksStatement
		| tariffStatement
		| weaveStatement
		| stopCountStatement
		| bankruptcyStatement
	) PERIOD?;

// Comments - "A LOT OF PEOPLE ARE SAYING"
commentStatement: COMMENT;

// Variable declarations - "I HAVE THE BEST". Deal and array literals are
// first-class expressions, so the initializer is just an expression.
variableDeclaration:
	VARIABLE_DECL dataType varName = VARIABLE ASSIGNMENT expression;

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

// Function declaration - "INCREDIBLE" (was "TREMENDOUS").
// STRUCTURAL CONSTRAINT (INTERCAL tier): every function MUST praise itself.
// The parser rejects modest functions. The superlative slots in before
// PARAMS_ARGS_START so it reads as natural Trump:
//   INCREDIBLE FIB THE BEST PEOPLE TELL ME HUGE N! BELIEVE ME ...
// The optional GIVING BACK clause declares a return type, enforced at runtime:
//   INCREDIBLE FIB THE BEST PEOPLE TELL ME HUGE N! GIVING BACK HUGE BELIEVE ME ...
// A function may have CONCEPTS OF A PLAN instead of a body: perfectly legal,
// fully worked out, ships very soon. Calling it insists the plan exists and
// delivers the declared return type's default (or NOTHING TO SEE HERE).
// Re-declaring it with a body develops the concept into an actual plan.
// The superlative is still required - the concept praises itself too.
functionDeclaration:
	FUNCTION_DECL funcName = IDENTIFIER praise = SUPERLATIVE PARAMS_ARGS_START parameterList? (
		RETURN_TYPE_DECL dataType
	)? (blockStatement | CONCEPT_PLAN);

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

// Break from loop early - a very executive way to leave
vetoStatement: BREAK;

// PARDON - exception handling. You attempt the block because I ALONE CAN FIX IT;
// when it blows up, that's a WITCH HUNT! and the error gets pardoned (caught).
// The optional variable after WITCH HUNT! receives the error as a TWEET.
// You CANNOT pardon a failed FACT CHECK - that is the entire point of fact checks.
//
// ALTERNATIVELY: HUSH MONEY. No handler block, no pardon, no acknowledgment -
// the error is simply paid off from a numeric account and never spoken of
// again. If the account can't cover the price of silence, the payment bounces
// and EVERYTHING becomes public record. You cannot pay off a FACT CHECK.
pardonStatement:
	TRY_DECL blockStatement (
		CATCH_DECL (errName = VARIABLE)? blockStatement
		| HUSH_MONEY amount = expression FROM_KEYWORD account = VARIABLE
	);

// IMPEACH - throw. The impeached value flies up the call stack until some
// WITCH HUNT! clause pardons it. A perfect call, and they impeach anyway.
impeachStatement: IMPEACH expression;

// Fire a function - permanently delete it, Trump's catchphrase
fireStatement: FIRE funcName=IDENTIFIER;

// Executive order - remap an arithmetic operator to behave like another operator,
// for the REST OF EXECUTION. `EXECUTIVE ORDER WINNING ABSOLUTELY LOSING` makes
// addition subtract. This is the language being gaslit at runtime; string
// concatenation (ENDORSING) and modulo (LEFTOVER FROM) are immune.
executiveOrder: EXEC_ORDER fromOp=operator ASSIGNMENT toOp=operator;

// The Supreme Court can overturn an executive order - but this is a COIN FLIP:
// 50% it strikes the order down, 50% it rules the order STANDS. The only
// nondeterministic construct in the language, and it's the judiciary.
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

// Print statement - "EVERYONE IS TALKING ABOUT". THE OUTPUT LIES: any numeric
// value printed here is inflated by 10% at runtime (biggest crowds ever), while
// the program's internal value - and every FACT CHECK - stays honest. The one
// place where the grammar looks innocent and the runtime absolutely is not.
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

// Factors. Deal declarations and array literals are FIRST-CLASS VALUES: they
// can be returned, passed as arguments, and assigned anywhere an expression
// fits. The best values, frankly.
primaryExpression:
	OPEN_PAREN expression CLOSE_PAREN
	| VARIABLE
	| STRING
	| NUMBER
	| BOOLEAN
	| functionCall
	| arrayAccess
	| dealAccess
	| dealDeclaration
	| arrayLiteral
	| NOTHING;

// Array literal as an expression - "AND MEXICO WILL PAY FOR IT 1 PREVAILS 2".
// Requires at least one element: an EMPTY literal would swallow whatever comes
// next in the program (keyword-boundary parsing). For an empty WALL, declare it
// with BUILD THE WALL or rely on the WALL type default.
arrayLiteral: ARRAY_ELEMENTS_DECL arrayElements;

// Array access - using "WALL" metaphor. The index is an additive expression so
// that a trailing comparison (e.g. "ARRAY! SECTION 0 SO TRUE 10") is not swallowed
// into the index - it stays "(ARRAY! SECTION 0) SO TRUE 10".
arrayAccess: arrayName = VARIABLE ARRAY_ACCESS additiveExpression;

// Deal field entries. A field's value may itself be a deal declaration
// (deal literals are first-class expressions) - deals within deals, the ART of it.
dealField: dataType fieldName = VARIABLE ASSIGNMENT expression;

// Deal structure declaration
dealDeclaration:
	OPEN_PAREN dealField (AMPERSAND dealField)* CLOSE_PAREN DEAL_DECLARE;

// Deal field access - FOLLOW chains through nested deals:
// COMPANY! FOLLOW CEO! FOLLOW NAME!
dealAccess:
	dealName = VARIABLE (DEAL_ACCESS_KEYWORD fieldName += VARIABLE)+;

// Deal field assignment - deals are RENEGOTIABLE. Any term of the deal can be
// rewritten, arbitrarily deep: PERSON! FOLLOW ADDRESS! FOLLOW CITY! ABSOLUTELY "MOSCOW"
dealAssignment:
	dealName = VARIABLE (DEAL_ACCESS_KEYWORD fieldName += VARIABLE)+ ASSIGNMENT expression;

// IN TWO WEEKS - the announcement construct. Schedules a block to run in two
// weeks. Two weeks NEVER ARRIVES. The block must parse (we have a plan, a
// beautiful plan) but it is never executed - it is always two weeks away.
// The only construct in the language whose body is pure campaign material.
twoWeeksStatement: TWO_WEEKS blockStatement;

// CHAPTER 11 - strategic bankruptcy. Every variable in every reachable scope
// is reset to its type's default: the debts are wiped, the ledger is clean,
// execution continues like nothing happened. Functions survive - the brand
// stays on the building. Usable SIX times per program (the canonical six);
// the seventh time, even the banks stop returning our calls (pardonable).
bankruptcyStatement: CHAPTER_ELEVEN;

// STOP THE COUNT - the electoral loop exit. Takes a condition meaning "we are
// ahead". The moment it comes out TRUE, the count stops and victory is
// declared, regardless of what the loop condition wanted. When it comes out
// FALSE - when we are behind - nothing happens and the count continues until
// we find more votes. The count only ever stops in one direction.
stopCountStatement: STOP_COUNT expression;

// THE WEAVE - tangential control flow. The block's statements do NOT run in
// written order: the weave visits the even-numbered tangents first (0, 2,
// 4, ...), then comes back for the odd ones (1, 3, 5, ...). Deterministic -
// it ALWAYS comes back together, like a genius - but writing weave-safe code
// is your problem. The professors say it's brilliant.
weaveStatement: WEAVE blockStatement;

// BIG BEAUTIFUL TARIFF - trade policy for imports. Enacts a tariff (in
// percent) on every function hired from another module: numeric values they
// give back are taxed at the border for the rest of execution. The runtime
// insists the exporting module pays. FACT CHECK the delivery and see whose
// number got smaller. Locally declared functions are domestic - they trade
// free. Re-enacting replaces the rate (we can always double it).
tariffStatement: TARIFF_DECL rate = expression;

// Assert statement - "FACT CHECK". Takes a single boolean expression that must
// come out TRUE. "FACT CHECK <actual> SO TRUE <expected>" reads as the equality
// expression "<actual> SO TRUE <expected>". Fact checks see REAL values (never
// the inflated output) and a failed one cannot be pardoned by WITCH HUNT! -
// it is the one incorruptible construct in the language.
factCheckStatement:
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

// Mandatory self-praise for function declarations. Modesty is a parse error.
SUPERLATIVE: 'THE BEST' | 'TREMENDOUS' | 'LIKE NOBODY HAS EVER SEEN';

VARIABLE_DECL: 'I HAVE THE BEST';

CONSTANT_DECL: 'I HAVE A VERY GOOD BRAIN FOR';

PARAMS_ARGS_START: 'PEOPLE TELL ME';

PARAMS_ARGS_CHAIN: 'AND';

RETURN: 'AND I MEAN THAT';

RETURN_TYPE_DECL: 'GIVING BACK';

FUNC_CALL: 'I CALL UPON';

BREAK: 'I WILL VETO!';

// Optional statement terminator. And that's it, PERIOD.
PERIOD: 'PERIOD.';

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

// The announcement is coming IN TWO WEEKS. It has been two weeks for years.
TWO_WEEKS: 'IN TWO WEEKS';

// TARIFF - the most beautiful word in the dictionary.
TARIFF_DECL: 'BIG BEAUTIFUL TARIFF';

// You go off on tangents and it all comes back together. It's called the weave.
WEAVE: 'THE WEAVE';

// A body is optional. Concepts are forever.
CONCEPT_PLAN: 'CONCEPTS OF A PLAN';

// The count only ever stops while we're ahead.
STOP_COUNT: 'STOP THE COUNT';

// Strategic bankruptcy. Used brilliantly, six times.
CHAPTER_ELEVEN: 'CHAPTER 11';

// The quietest catch clause in any programming language.
HUSH_MONEY: 'HUSH MONEY';

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

// File paths for imports. MUST be defined before STRING: when both rules match
// the same text ("MATH.MAGA"), ANTLR gives the tie to the first-defined rule.
FILEPATH: '"' [A-Z0-9_./]+ '.MAGA' '"';

// Strings - write them in any case with any characters and \" \\ \n \t escapes.
// The RUNTIME uppercases every string value: Trumplang only SPEAKS in uppercase.
// The constraint moved from the lexer into the semantics - you can whisper,
// but the language will shout.
STRING: '"' (ESC_SEQ | ~["\\\r\n])* '"';

fragment ESC_SEQ: '\\' ["\\nt];

// Numbers
NUMBER: [0-9]+ ('.' [0-9]+)?;

// Boolean values
BOOLEAN: TRUE | FALSE;

TRUE: 'VERY TRUE';

FALSE: 'FAKE NEWS';

// The null value. Evaluates to nothing, prints as itself, equals only itself.
// Declaring a typed variable ABSOLUTELY NOTHING TO SEE HERE yields the type's
// default (types have defaults; nothing stays nothing only in assignments,
// returns, and comparisons).
NOTHING: 'NOTHING TO SEE HERE';

// Comments - entire line starting with "A LOT OF PEOPLE ARE SAYING"
COMMENT:
	'A LOT OF PEOPLE ARE SAYING' ~[\n\r]* ([\n\r] | EOF) -> channel(HIDDEN);

// Whitespace and line terminators
WS: [ \t\r\n]+ -> skip;
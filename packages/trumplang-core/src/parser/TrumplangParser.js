// jshint ignore: start
import antlr4 from 'antlr4';
import TrumplangListener from './TrumplangListener.js';
const serializedATN = [4,1,76,395,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,1,0,1,0,4,0,89,8,0,11,0,12,0,90,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,3,1,119,8,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,129,8,3,1,4,1,4,1,4,1,
4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,3,6,143,8,6,1,6,1,6,1,7,1,7,5,7,149,8,
7,10,7,12,7,152,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,162,8,8,10,8,12,
8,165,9,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,3,10,174,8,10,1,11,1,11,1,11,5,
11,179,8,11,10,11,12,11,182,9,11,1,12,1,12,1,12,1,12,5,12,188,8,12,10,12,
12,12,191,9,12,1,12,3,12,194,8,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,15,
1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,
17,1,17,1,17,1,17,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,21,
1,21,1,21,1,22,1,22,1,23,1,23,1,23,1,23,3,23,241,8,23,1,24,1,24,1,24,5,24,
246,8,24,10,24,12,24,249,9,24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,27,1,
27,1,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,
1,30,1,30,1,30,1,30,3,30,278,8,30,1,30,1,30,1,30,1,30,1,30,1,30,5,30,286,
8,30,10,30,12,30,289,9,30,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
32,1,32,1,32,1,32,1,32,5,32,305,8,32,10,32,12,32,308,9,32,1,33,1,33,1,33,
1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,5,33,322,8,33,10,33,12,33,325,
9,33,1,34,1,34,1,34,1,34,1,34,3,34,332,8,34,1,35,1,35,1,35,1,35,1,35,1,35,
1,35,1,35,1,35,1,35,1,35,3,35,345,8,35,1,36,1,36,1,36,1,36,1,37,1,37,1,37,
1,37,1,37,1,38,1,38,1,38,1,38,5,38,360,8,38,10,38,12,38,363,9,38,1,38,1,
38,1,38,1,39,1,39,1,39,1,39,1,40,1,40,1,40,3,40,375,8,40,1,40,1,40,1,40,
1,41,1,41,1,41,1,42,1,42,1,42,1,42,5,42,387,8,42,10,42,12,42,390,9,42,1,
42,1,42,1,42,1,42,0,3,60,64,66,43,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,
78,80,82,84,0,3,1,0,56,61,2,0,48,49,52,53,1,0,39,44,407,0,86,1,0,0,0,2,118,
1,0,0,0,4,120,1,0,0,0,6,122,1,0,0,0,8,130,1,0,0,0,10,136,1,0,0,0,12,138,
1,0,0,0,14,146,1,0,0,0,16,155,1,0,0,0,18,166,1,0,0,0,20,169,1,0,0,0,22,175,
1,0,0,0,24,183,1,0,0,0,26,195,1,0,0,0,28,199,1,0,0,0,30,202,1,0,0,0,32,206,
1,0,0,0,34,215,1,0,0,0,36,221,1,0,0,0,38,223,1,0,0,0,40,226,1,0,0,0,42,231,
1,0,0,0,44,234,1,0,0,0,46,236,1,0,0,0,48,242,1,0,0,0,50,250,1,0,0,0,52,254,
1,0,0,0,54,257,1,0,0,0,56,260,1,0,0,0,58,264,1,0,0,0,60,277,1,0,0,0,62,290,
1,0,0,0,64,292,1,0,0,0,66,309,1,0,0,0,68,331,1,0,0,0,70,344,1,0,0,0,72,346,
1,0,0,0,74,350,1,0,0,0,76,355,1,0,0,0,78,367,1,0,0,0,80,371,1,0,0,0,82,379,
1,0,0,0,84,382,1,0,0,0,86,88,5,14,0,0,87,89,3,2,1,0,88,87,1,0,0,0,89,90,
1,0,0,0,90,88,1,0,0,0,90,91,1,0,0,0,91,92,1,0,0,0,92,93,5,15,0,0,93,1,1,
0,0,0,94,119,3,82,41,0,95,119,3,14,7,0,96,119,3,84,42,0,97,119,3,6,3,0,98,
119,3,8,4,0,99,119,3,12,6,0,100,119,3,20,10,0,101,119,3,24,12,0,102,119,
3,30,15,0,103,119,3,32,16,0,104,119,3,34,17,0,105,119,3,46,23,0,106,119,
3,50,25,0,107,119,3,56,28,0,108,119,3,58,29,0,109,119,3,52,26,0,110,119,
3,54,27,0,111,119,3,18,9,0,112,119,3,4,2,0,113,119,3,36,18,0,114,119,3,38,
19,0,115,119,3,40,20,0,116,119,3,42,21,0,117,119,3,80,40,0,118,94,1,0,0,
0,118,95,1,0,0,0,118,96,1,0,0,0,118,97,1,0,0,0,118,98,1,0,0,0,118,99,1,0,
0,0,118,100,1,0,0,0,118,101,1,0,0,0,118,102,1,0,0,0,118,103,1,0,0,0,118,
104,1,0,0,0,118,105,1,0,0,0,118,106,1,0,0,0,118,107,1,0,0,0,118,108,1,0,
0,0,118,109,1,0,0,0,118,110,1,0,0,0,118,111,1,0,0,0,118,112,1,0,0,0,118,
113,1,0,0,0,118,114,1,0,0,0,118,115,1,0,0,0,118,116,1,0,0,0,118,117,1,0,
0,0,119,3,1,0,0,0,120,121,5,74,0,0,121,5,1,0,0,0,122,123,5,17,0,0,123,124,
3,10,5,0,124,125,5,67,0,0,125,128,5,50,0,0,126,129,3,64,32,0,127,129,3,76,
38,0,128,126,1,0,0,0,128,127,1,0,0,0,129,7,1,0,0,0,130,131,5,18,0,0,131,
132,3,10,5,0,132,133,5,67,0,0,133,134,5,50,0,0,134,135,3,64,32,0,135,9,1,
0,0,0,136,137,7,0,0,0,137,11,1,0,0,0,138,139,5,16,0,0,139,140,5,68,0,0,140,
142,5,19,0,0,141,143,3,16,8,0,142,141,1,0,0,0,142,143,1,0,0,0,143,144,1,
0,0,0,144,145,3,14,7,0,145,13,1,0,0,0,146,150,5,62,0,0,147,149,3,2,1,0,148,
147,1,0,0,0,149,152,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,153,1,0,
0,0,152,150,1,0,0,0,153,154,5,63,0,0,154,15,1,0,0,0,155,156,3,10,5,0,156,
163,5,67,0,0,157,158,5,20,0,0,158,159,3,10,5,0,159,160,5,67,0,0,160,162,
1,0,0,0,161,157,1,0,0,0,162,165,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,
164,17,1,0,0,0,165,163,1,0,0,0,166,167,5,21,0,0,167,168,3,64,32,0,168,19,
1,0,0,0,169,170,5,22,0,0,170,171,5,68,0,0,171,173,5,19,0,0,172,174,3,22,
11,0,173,172,1,0,0,0,173,174,1,0,0,0,174,21,1,0,0,0,175,180,3,64,32,0,176,
177,5,20,0,0,177,179,3,64,32,0,178,176,1,0,0,0,179,182,1,0,0,0,180,178,1,
0,0,0,180,181,1,0,0,0,181,23,1,0,0,0,182,180,1,0,0,0,183,184,5,7,0,0,184,
185,3,60,30,0,185,189,3,2,1,0,186,188,3,26,13,0,187,186,1,0,0,0,188,191,
1,0,0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,193,1,0,0,0,191,189,1,0,0,0,
192,194,3,28,14,0,193,192,1,0,0,0,193,194,1,0,0,0,194,25,1,0,0,0,195,196,
5,8,0,0,196,197,3,60,30,0,197,198,3,2,1,0,198,27,1,0,0,0,199,200,5,9,0,0,
200,201,3,2,1,0,201,29,1,0,0,0,202,203,5,27,0,0,203,204,3,60,30,0,204,205,
3,14,7,0,205,31,1,0,0,0,206,207,5,28,0,0,207,208,5,29,0,0,208,209,5,67,0,
0,209,210,5,30,0,0,210,211,3,64,32,0,211,212,5,31,0,0,212,213,3,64,32,0,
213,214,3,14,7,0,214,33,1,0,0,0,215,216,5,32,0,0,216,217,5,67,0,0,217,218,
5,33,0,0,218,219,5,67,0,0,219,220,3,14,7,0,220,35,1,0,0,0,221,222,5,23,0,
0,222,37,1,0,0,0,223,224,5,24,0,0,224,225,5,68,0,0,225,39,1,0,0,0,226,227,
5,25,0,0,227,228,3,44,22,0,228,229,5,50,0,0,229,230,3,44,22,0,230,41,1,0,
0,0,231,232,5,26,0,0,232,233,3,44,22,0,233,43,1,0,0,0,234,235,7,1,0,0,235,
45,1,0,0,0,236,237,5,10,0,0,237,238,5,67,0,0,238,240,5,11,0,0,239,241,3,
48,24,0,240,239,1,0,0,0,240,241,1,0,0,0,241,47,1,0,0,0,242,247,3,64,32,0,
243,244,5,13,0,0,244,246,3,64,32,0,245,243,1,0,0,0,246,249,1,0,0,0,247,245,
1,0,0,0,247,248,1,0,0,0,248,49,1,0,0,0,249,247,1,0,0,0,250,251,5,67,0,0,
251,252,5,50,0,0,252,253,3,64,32,0,253,51,1,0,0,0,254,255,5,34,0,0,255,256,
3,64,32,0,256,53,1,0,0,0,257,258,5,35,0,0,258,259,5,67,0,0,259,55,1,0,0,
0,260,261,5,1,0,0,261,262,5,67,0,0,262,263,5,2,0,0,263,57,1,0,0,0,264,265,
5,1,0,0,265,266,5,67,0,0,266,267,5,3,0,0,267,59,1,0,0,0,268,269,6,30,-1,
0,269,270,3,64,32,0,270,271,3,62,31,0,271,272,3,64,32,0,272,278,1,0,0,0,
273,278,5,67,0,0,274,278,5,71,0,0,275,276,5,45,0,0,276,278,3,60,30,3,277,
268,1,0,0,0,277,273,1,0,0,0,277,274,1,0,0,0,277,275,1,0,0,0,278,287,1,0,
0,0,279,280,10,2,0,0,280,281,5,46,0,0,281,286,3,60,30,3,282,283,10,1,0,0,
283,284,5,47,0,0,284,286,3,60,30,2,285,279,1,0,0,0,285,282,1,0,0,0,286,289,
1,0,0,0,287,285,1,0,0,0,287,288,1,0,0,0,288,61,1,0,0,0,289,287,1,0,0,0,290,
291,7,2,0,0,291,63,1,0,0,0,292,293,6,32,-1,0,293,294,3,66,33,0,294,306,1,
0,0,0,295,296,10,3,0,0,296,297,5,48,0,0,297,305,3,66,33,0,298,299,10,2,0,
0,299,300,5,51,0,0,300,305,3,66,33,0,301,302,10,1,0,0,302,303,5,49,0,0,303,
305,3,66,33,0,304,295,1,0,0,0,304,298,1,0,0,0,304,301,1,0,0,0,305,308,1,
0,0,0,306,304,1,0,0,0,306,307,1,0,0,0,307,65,1,0,0,0,308,306,1,0,0,0,309,
310,6,33,-1,0,310,311,3,68,34,0,311,323,1,0,0,0,312,313,10,3,0,0,313,314,
5,52,0,0,314,322,3,70,35,0,315,316,10,2,0,0,316,317,5,53,0,0,317,322,3,70,
35,0,318,319,10,1,0,0,319,320,5,54,0,0,320,322,3,70,35,0,321,312,1,0,0,0,
321,315,1,0,0,0,321,318,1,0,0,0,322,325,1,0,0,0,323,321,1,0,0,0,323,324,
1,0,0,0,324,67,1,0,0,0,325,323,1,0,0,0,326,332,3,70,35,0,327,328,3,70,35,
0,328,329,5,55,0,0,329,330,3,70,35,0,330,332,1,0,0,0,331,326,1,0,0,0,331,
327,1,0,0,0,332,69,1,0,0,0,333,334,5,4,0,0,334,335,3,64,32,0,335,336,5,5,
0,0,336,345,1,0,0,0,337,345,5,67,0,0,338,345,5,69,0,0,339,345,5,70,0,0,340,
345,5,71,0,0,341,345,3,20,10,0,342,345,3,72,36,0,343,345,3,78,39,0,344,333,
1,0,0,0,344,337,1,0,0,0,344,338,1,0,0,0,344,339,1,0,0,0,344,340,1,0,0,0,
344,341,1,0,0,0,344,342,1,0,0,0,344,343,1,0,0,0,345,71,1,0,0,0,346,347,5,
67,0,0,347,348,5,12,0,0,348,349,3,64,32,0,349,73,1,0,0,0,350,351,3,10,5,
0,351,352,5,67,0,0,352,353,5,50,0,0,353,354,3,64,32,0,354,75,1,0,0,0,355,
356,5,4,0,0,356,361,3,74,37,0,357,358,5,64,0,0,358,360,3,74,37,0,359,357,
1,0,0,0,360,363,1,0,0,0,361,359,1,0,0,0,361,362,1,0,0,0,362,364,1,0,0,0,
363,361,1,0,0,0,364,365,5,5,0,0,365,366,5,65,0,0,366,77,1,0,0,0,367,368,
5,67,0,0,368,369,5,37,0,0,369,370,5,67,0,0,370,79,1,0,0,0,371,374,5,38,0,
0,372,375,3,64,32,0,373,375,3,60,30,0,374,372,1,0,0,0,374,373,1,0,0,0,375,
376,1,0,0,0,376,377,5,39,0,0,377,378,3,64,32,0,378,81,1,0,0,0,379,380,5,
36,0,0,380,381,5,75,0,0,381,83,1,0,0,0,382,383,5,6,0,0,383,388,5,68,0,0,
384,385,5,20,0,0,385,387,5,68,0,0,386,384,1,0,0,0,387,390,1,0,0,0,388,386,
1,0,0,0,388,389,1,0,0,0,389,391,1,0,0,0,390,388,1,0,0,0,391,392,5,30,0,0,
392,393,5,75,0,0,393,85,1,0,0,0,24,90,118,128,142,150,163,173,180,189,193,
240,247,277,285,287,304,306,321,323,331,344,361,374,388];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TrumplangParser extends antlr4.Parser {

    static grammarFileName = "Trumplang.g4";
    static literalNames = [ null, "'MAKE'", "'GREATER'", "'SMALLER'", "'('", 
                            "')'", "'I ONLY WANT'", "'LISTEN'", "'PEOPLE ARE SAYING'", 
                            "'NOBODY KNEW'", "'BUILD THE WALL'", "'AND MEXICO WILL PAY FOR IT'", 
                            "'SECTION'", "'PREVAILS'", "'THE TIME FOR EMPTY TALK IS OVER!!!'", 
                            "'MAKE AMERICA GREAT AGAIN'", "'INCREDIBLE'", 
                            "'I HAVE THE BEST'", "'I HAVE A VERY GOOD BRAIN FOR'", 
                            "'PEOPLE TELL ME'", "'AND'", "'AND I MEAN THAT'", 
                            "'I CALL UPON'", "'I WILL VETO!'", "'YOU'RE FIRED'", 
                            "'EXECUTIVE ORDER'", "'SUPREME COURT OVERRULES'", 
                            "'WE'RE GOING TO WIN IN A LANDSLIDE'", "'WE'RE GOING TO WIN, WIN, WIN'", 
                            "'WITH'", "'FROM'", "'TO'", "'BILLIONS AND BILLIONS'", 
                            "'YET'", "'EVERYONE IS TALKING ABOUT'", "'MANY PEOPLE ARE ASKING'", 
                            "'I KNOW THE BEST PEOPLE FROM'", "'FOLLOW'", 
                            "'FACT CHECK'", "'SO TRUE'", "'TOTAL DISASTER'", 
                            "'BETTER THAN'", "'AT LEAST AS GOOD AS'", "'NOT AS GOOD AS'", 
                            "'NO BETTER THAN'", "'WRONG'", "'AND IT'S TRUE'", 
                            "'OR MAYBE'", "'WINNING'", "'LOSING'", "'ABSOLUTELY'", 
                            "'ENDORSING'", "'BIG LEAGUE TIMES'", "'SAD'", 
                            "'LEFTOVER FROM'", "'HUGELY MULTIPLIED BY'", 
                            "'HUGE'", "'BIGLY'", "'SUPPORT'", "'TWEET'", 
                            "'WALL'", "'DEAL'", "'BELIEVE ME'", "'I TOLD YOU SO'", 
                            "'&'", "'!!'", "'!'", null, null, null, null, 
                            null, "'VERY TRUE'", "'FAKE NEWS'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, "IF_DECL", 
                             "ELSE_IF_DECL", "ELSE_DECL", "ARRAY_DECL", 
                             "ARRAY_ELEMENTS_DECL", "ARRAY_ACCESS", "ARRAY_CHAIN", 
                             "PROG_START", "PROG_END", "FUNCTION_DECL", 
                             "VARIABLE_DECL", "CONSTANT_DECL", "PARAMS_ARGS_START", 
                             "PARAMS_ARGS_CHAIN", "RETURN", "FUNC_CALL", 
                             "BREAK", "FIRE", "EXEC_ORDER", "SUPREME_COURT", 
                             "WHILE_LOOP_DECL", "FOR_LOOP_DECL", "FOR_LOOP_WITH", 
                             "FOR_LOOP_FROM", "FOR_LOOP_TO", "FOR_EACH_LOOP_DECL", 
                             "FOR_EACH_FROM", "PRINT", "INPUT", "IMPORT", 
                             "DEAL_ACCESS_KEYWORD", "ASSERT_CALL", "EQUALS", 
                             "NOT_EQUALS", "GREATER_THAN", "GREATER_THAN_OR_EQUALS", 
                             "LESS_THAN", "LESS_THAN_OR_EQUALS", "NOT", 
                             "AND", "OR", "PLUS", "MINUS", "ASSIGNMENT", 
                             "STRING_CONCAT", "MULTIPLY", "DIVIDE", "MODULO", 
                             "POWER", "INTEGER_TYPE", "FLOAT_TYPE", "BOOLEAN_TYPE", 
                             "STRING_TYPE", "ARRAY_TYPE", "STRUCTUR_TYPE", 
                             "OPEN_BLOCK", "CLOSE_BLOCK", "AMPERSAND", "DEAL_DECLARE", 
                             "VAR_DECLARE", "VARIABLE", "IDENTIFIER", "STRING", 
                             "NUMBER", "BOOLEAN", "TRUE", "FALSE", "COMMENT", 
                             "FILEPATH", "WS" ];
    static ruleNames = [ "program", "statement", "commentStatement", "variableDeclaration", 
                         "constantDeclaration", "dataType", "functionDeclaration", 
                         "blockStatement", "parameterList", "returnStatement", 
                         "functionCall", "argumentList", "ifStatement", 
                         "elseIfStatement", "elseStatement", "whileLoop", 
                         "forLoop", "forEachLoop", "loopBreak", "fireStatement", 
                         "executiveOrder", "supremeCourtOverrule", "operator", 
                         "arrayDeclaration", "arrayElements", "assignmentStatement", 
                         "printStatement", "inputStatement", "incrementStatement", 
                         "decrementStatement", "condition", "comparison", 
                         "expression", "term", "powerExpression", "primaryExpression", 
                         "arrayAccess", "dealField", "dealDeclaration", 
                         "dealAccess", "assertStatement", "importStatement", 
                         "selectiveImport" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TrumplangParser.ruleNames;
        this.literalNames = TrumplangParser.literalNames;
        this.symbolicNames = TrumplangParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 30:
    	    		return this.condition_sempred(localctx, predIndex);
    	case 32:
    	    		return this.expression_sempred(localctx, predIndex);
    	case 33:
    	    		return this.term_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    condition_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 3);
    		case 3:
    			return this.precpred(this._ctx, 2);
    		case 4:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    term_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 5:
    			return this.precpred(this._ctx, 3);
    		case 6:
    			return this.precpred(this._ctx, 2);
    		case 7:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, TrumplangParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86;
	        this.match(TrumplangParser.PROG_START);
	        this.state = 88; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 87;
	            this.statement();
	            this.state = 90; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 535233730) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1073741917) !== 0) || _la===67 || _la===74);
	        this.state = 92;
	        this.match(TrumplangParser.PROG_END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, TrumplangParser.RULE_statement);
	    try {
	        this.state = 118;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 94;
	            this.importStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 95;
	            this.blockStatement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 96;
	            this.selectiveImport();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 97;
	            this.variableDeclaration();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 98;
	            this.constantDeclaration();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 99;
	            this.functionDeclaration();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 100;
	            this.functionCall();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 101;
	            this.ifStatement();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 102;
	            this.whileLoop();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 103;
	            this.forLoop();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 104;
	            this.forEachLoop();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 105;
	            this.arrayDeclaration();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 106;
	            this.assignmentStatement();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 107;
	            this.incrementStatement();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 108;
	            this.decrementStatement();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 109;
	            this.printStatement();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 110;
	            this.inputStatement();
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 111;
	            this.returnStatement();
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 112;
	            this.commentStatement();
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 113;
	            this.loopBreak();
	            break;

	        case 21:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 114;
	            this.fireStatement();
	            break;

	        case 22:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 115;
	            this.executiveOrder();
	            break;

	        case 23:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 116;
	            this.supremeCourtOverrule();
	            break;

	        case 24:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 117;
	            this.assertStatement();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	commentStatement() {
	    let localctx = new CommentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, TrumplangParser.RULE_commentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.match(TrumplangParser.COMMENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, TrumplangParser.RULE_variableDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(TrumplangParser.VARIABLE_DECL);
	        this.state = 123;
	        this.dataType();
	        this.state = 124;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 125;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 128;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 126;
	            this.expression(0);
	            break;

	        case 2:
	            this.state = 127;
	            this.dealDeclaration();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constantDeclaration() {
	    let localctx = new ConstantDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TrumplangParser.RULE_constantDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(TrumplangParser.CONSTANT_DECL);
	        this.state = 131;
	        this.dataType();
	        this.state = 132;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 133;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 134;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dataType() {
	    let localctx = new DataTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, TrumplangParser.RULE_dataType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        _la = this._input.LA(1);
	        if(!(((((_la - 56)) & ~0x1f) === 0 && ((1 << (_la - 56)) & 63) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, TrumplangParser.RULE_functionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(TrumplangParser.FUNCTION_DECL);
	        this.state = 139;
	        localctx.funcName = this.match(TrumplangParser.IDENTIFIER);
	        this.state = 140;
	        this.match(TrumplangParser.PARAMS_ARGS_START);
	        this.state = 142;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 56)) & ~0x1f) === 0 && ((1 << (_la - 56)) & 63) !== 0)) {
	            this.state = 141;
	            this.parameterList();
	        }

	        this.state = 144;
	        this.blockStatement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	blockStatement() {
	    let localctx = new BlockStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TrumplangParser.RULE_blockStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this.match(TrumplangParser.OPEN_BLOCK);
	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 535233730) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1073741917) !== 0) || _la===67 || _la===74) {
	            this.state = 147;
	            this.statement();
	            this.state = 152;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 153;
	        this.match(TrumplangParser.CLOSE_BLOCK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterList() {
	    let localctx = new ParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, TrumplangParser.RULE_parameterList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.dataType();
	        this.state = 156;
	        localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	        localctx.paramName.push(localctx._VARIABLE);
	        this.state = 163;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 157;
	            this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
	            this.state = 158;
	            this.dataType();
	            this.state = 159;
	            localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	            localctx.paramName.push(localctx._VARIABLE);
	            this.state = 165;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnStatement() {
	    let localctx = new ReturnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, TrumplangParser.RULE_returnStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(TrumplangParser.RETURN);
	        this.state = 167;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, TrumplangParser.RULE_functionCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.match(TrumplangParser.FUNC_CALL);
	        this.state = 170;
	        localctx.funcName = this.match(TrumplangParser.IDENTIFIER);
	        this.state = 171;
	        this.match(TrumplangParser.PARAMS_ARGS_START);
	        this.state = 173;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 172;
	            this.argumentList();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentList() {
	    let localctx = new ArgumentListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, TrumplangParser.RULE_argumentList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.expression(0);
	        this.state = 180;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 176;
	                this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
	                this.state = 177;
	                this.expression(0); 
	            }
	            this.state = 182;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, TrumplangParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.match(TrumplangParser.IF_DECL);
	        this.state = 184;
	        this.condition(0);
	        this.state = 185;
	        this.statement();
	        this.state = 189;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 186;
	                this.elseIfStatement(); 
	            }
	            this.state = 191;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	        this.state = 193;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 192;
	            this.elseStatement();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseIfStatement() {
	    let localctx = new ElseIfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, TrumplangParser.RULE_elseIfStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(TrumplangParser.ELSE_IF_DECL);
	        this.state = 196;
	        this.condition(0);
	        this.state = 197;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseStatement() {
	    let localctx = new ElseStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, TrumplangParser.RULE_elseStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(TrumplangParser.ELSE_DECL);
	        this.state = 200;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileLoop() {
	    let localctx = new WhileLoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, TrumplangParser.RULE_whileLoop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 202;
	        this.match(TrumplangParser.WHILE_LOOP_DECL);
	        this.state = 203;
	        this.condition(0);
	        this.state = 204;
	        this.blockStatement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forLoop() {
	    let localctx = new ForLoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, TrumplangParser.RULE_forLoop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.match(TrumplangParser.FOR_LOOP_DECL);
	        this.state = 207;
	        this.match(TrumplangParser.FOR_LOOP_WITH);
	        this.state = 208;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 209;
	        this.match(TrumplangParser.FOR_LOOP_FROM);
	        this.state = 210;
	        this.expression(0);
	        this.state = 211;
	        this.match(TrumplangParser.FOR_LOOP_TO);
	        this.state = 212;
	        this.expression(0);
	        this.state = 213;
	        this.blockStatement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forEachLoop() {
	    let localctx = new ForEachLoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, TrumplangParser.RULE_forEachLoop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(TrumplangParser.FOR_EACH_LOOP_DECL);
	        this.state = 216;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 217;
	        this.match(TrumplangParser.FOR_EACH_FROM);
	        this.state = 218;
	        localctx.listName = this.match(TrumplangParser.VARIABLE);
	        this.state = 219;
	        this.blockStatement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	loopBreak() {
	    let localctx = new LoopBreakContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, TrumplangParser.RULE_loopBreak);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this.match(TrumplangParser.BREAK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fireStatement() {
	    let localctx = new FireStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, TrumplangParser.RULE_fireStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(TrumplangParser.FIRE);
	        this.state = 224;
	        localctx.funcName = this.match(TrumplangParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	executiveOrder() {
	    let localctx = new ExecutiveOrderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, TrumplangParser.RULE_executiveOrder);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(TrumplangParser.EXEC_ORDER);
	        this.state = 227;
	        localctx.fromOp = this.operator();
	        this.state = 228;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 229;
	        localctx.toOp = this.operator();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	supremeCourtOverrule() {
	    let localctx = new SupremeCourtOverruleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, TrumplangParser.RULE_supremeCourtOverrule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(TrumplangParser.SUPREME_COURT);
	        this.state = 232;
	        localctx.fromOp = this.operator();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operator() {
	    let localctx = new OperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, TrumplangParser.RULE_operator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        _la = this._input.LA(1);
	        if(!(((((_la - 48)) & ~0x1f) === 0 && ((1 << (_la - 48)) & 51) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayDeclaration() {
	    let localctx = new ArrayDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, TrumplangParser.RULE_arrayDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.match(TrumplangParser.ARRAY_DECL);
	        this.state = 237;
	        localctx.arrayName = this.match(TrumplangParser.VARIABLE);
	        this.state = 238;
	        this.match(TrumplangParser.ARRAY_ELEMENTS_DECL);
	        this.state = 240;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 239;
	            this.arrayElements();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayElements() {
	    let localctx = new ArrayElementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, TrumplangParser.RULE_arrayElements);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.expression(0);
	        this.state = 247;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 243;
	            this.match(TrumplangParser.ARRAY_CHAIN);
	            this.state = 244;
	            this.expression(0);
	            this.state = 249;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentStatement() {
	    let localctx = new AssignmentStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, TrumplangParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 251;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 252;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	printStatement() {
	    let localctx = new PrintStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, TrumplangParser.RULE_printStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(TrumplangParser.PRINT);
	        this.state = 255;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inputStatement() {
	    let localctx = new InputStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, TrumplangParser.RULE_inputStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this.match(TrumplangParser.INPUT);
	        this.state = 258;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	incrementStatement() {
	    let localctx = new IncrementStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, TrumplangParser.RULE_incrementStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(TrumplangParser.T__0);
	        this.state = 261;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 262;
	        this.match(TrumplangParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decrementStatement() {
	    let localctx = new DecrementStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, TrumplangParser.RULE_decrementStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        this.match(TrumplangParser.T__0);
	        this.state = 265;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 266;
	        this.match(TrumplangParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	condition(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ConditionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 60;
	    this.enterRecursionRule(localctx, 60, TrumplangParser.RULE_condition, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 269;
	            this.expression(0);
	            this.state = 270;
	            this.comparison();
	            this.state = 271;
	            this.expression(0);
	            break;

	        case 2:
	            this.state = 273;
	            localctx.condVar = this.match(TrumplangParser.VARIABLE);
	            break;

	        case 3:
	            this.state = 274;
	            localctx.condBool = this.match(TrumplangParser.BOOLEAN);
	            break;

	        case 4:
	            this.state = 275;
	            this.match(TrumplangParser.NOT);
	            this.state = 276;
	            this.condition(3);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 287;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 285;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ConditionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_condition);
	                    this.state = 279;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 280;
	                    this.match(TrumplangParser.AND);
	                    this.state = 281;
	                    this.condition(3);
	                    break;

	                case 2:
	                    localctx = new ConditionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_condition);
	                    this.state = 282;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 283;
	                    this.match(TrumplangParser.OR);
	                    this.state = 284;
	                    this.condition(2);
	                    break;

	                } 
	            }
	            this.state = 289;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	comparison() {
	    let localctx = new ComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, TrumplangParser.RULE_comparison);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        _la = this._input.LA(1);
	        if(!(((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 63) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 64;
	    this.enterRecursionRule(localctx, 64, TrumplangParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293;
	        this.term(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 306;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 304;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_expression);
	                    this.state = 295;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 296;
	                    this.match(TrumplangParser.PLUS);
	                    this.state = 297;
	                    this.term(0);
	                    break;

	                case 2:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_expression);
	                    this.state = 298;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 299;
	                    this.match(TrumplangParser.STRING_CONCAT);
	                    this.state = 300;
	                    this.term(0);
	                    break;

	                case 3:
	                    localctx = new ExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_expression);
	                    this.state = 301;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 302;
	                    this.match(TrumplangParser.MINUS);
	                    this.state = 303;
	                    this.term(0);
	                    break;

	                } 
	            }
	            this.state = 308;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	term(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TermContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 66;
	    this.enterRecursionRule(localctx, 66, TrumplangParser.RULE_term, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this.powerExpression();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 323;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 321;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TermContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
	                    this.state = 312;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 313;
	                    this.match(TrumplangParser.MULTIPLY);
	                    this.state = 314;
	                    this.primaryExpression();
	                    break;

	                case 2:
	                    localctx = new TermContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
	                    this.state = 315;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 316;
	                    this.match(TrumplangParser.DIVIDE);
	                    this.state = 317;
	                    this.primaryExpression();
	                    break;

	                case 3:
	                    localctx = new TermContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
	                    this.state = 318;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 319;
	                    this.match(TrumplangParser.MODULO);
	                    this.state = 320;
	                    this.primaryExpression();
	                    break;

	                } 
	            }
	            this.state = 325;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	powerExpression() {
	    let localctx = new PowerExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, TrumplangParser.RULE_powerExpression);
	    try {
	        this.state = 331;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 326;
	            this.primaryExpression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 327;
	            this.primaryExpression();
	            this.state = 328;
	            this.match(TrumplangParser.POWER);
	            this.state = 329;
	            this.primaryExpression();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primaryExpression() {
	    let localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, TrumplangParser.RULE_primaryExpression);
	    try {
	        this.state = 344;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 333;
	            this.match(TrumplangParser.T__3);
	            this.state = 334;
	            this.expression(0);
	            this.state = 335;
	            this.match(TrumplangParser.T__4);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 337;
	            this.match(TrumplangParser.VARIABLE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 338;
	            this.match(TrumplangParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 339;
	            this.match(TrumplangParser.NUMBER);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 340;
	            this.match(TrumplangParser.BOOLEAN);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 341;
	            this.functionCall();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 342;
	            this.arrayAccess();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 343;
	            this.dealAccess();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayAccess() {
	    let localctx = new ArrayAccessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, TrumplangParser.RULE_arrayAccess);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 346;
	        localctx.arrayName = this.match(TrumplangParser.VARIABLE);
	        this.state = 347;
	        this.match(TrumplangParser.ARRAY_ACCESS);
	        this.state = 348;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dealField() {
	    let localctx = new DealFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, TrumplangParser.RULE_dealField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 350;
	        this.dataType();
	        this.state = 351;
	        localctx.fieldName = this.match(TrumplangParser.VARIABLE);
	        this.state = 352;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 353;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dealDeclaration() {
	    let localctx = new DealDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, TrumplangParser.RULE_dealDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this.match(TrumplangParser.T__3);
	        this.state = 356;
	        this.dealField();
	        this.state = 361;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===64) {
	            this.state = 357;
	            this.match(TrumplangParser.AMPERSAND);
	            this.state = 358;
	            this.dealField();
	            this.state = 363;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 364;
	        this.match(TrumplangParser.T__4);
	        this.state = 365;
	        this.match(TrumplangParser.DEAL_DECLARE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dealAccess() {
	    let localctx = new DealAccessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, TrumplangParser.RULE_dealAccess);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 367;
	        localctx.dealName = this.match(TrumplangParser.VARIABLE);
	        this.state = 368;
	        this.match(TrumplangParser.DEAL_ACCESS_KEYWORD);
	        this.state = 369;
	        localctx.fieldName = this.match(TrumplangParser.VARIABLE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assertStatement() {
	    let localctx = new AssertStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, TrumplangParser.RULE_assertStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 371;
	        this.match(TrumplangParser.ASSERT_CALL);
	        this.state = 374;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 372;
	            this.expression(0);
	            break;

	        case 2:
	            this.state = 373;
	            this.condition(0);
	            break;

	        }
	        this.state = 376;
	        this.match(TrumplangParser.EQUALS);
	        this.state = 377;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importStatement() {
	    let localctx = new ImportStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, TrumplangParser.RULE_importStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this.match(TrumplangParser.IMPORT);
	        this.state = 380;
	        localctx.filePath = this.match(TrumplangParser.FILEPATH);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	selectiveImport() {
	    let localctx = new SelectiveImportContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, TrumplangParser.RULE_selectiveImport);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 382;
	        this.match(TrumplangParser.T__5);
	        this.state = 383;
	        localctx._IDENTIFIER = this.match(TrumplangParser.IDENTIFIER);
	        localctx.importName.push(localctx._IDENTIFIER);
	        this.state = 388;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 384;
	            this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
	            this.state = 385;
	            localctx._IDENTIFIER = this.match(TrumplangParser.IDENTIFIER);
	            localctx.importName.push(localctx._IDENTIFIER);
	            this.state = 390;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 391;
	        this.match(TrumplangParser.FOR_LOOP_FROM);
	        this.state = 392;
	        localctx.filePath = this.match(TrumplangParser.FILEPATH);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

TrumplangParser.EOF = antlr4.Token.EOF;
TrumplangParser.T__0 = 1;
TrumplangParser.T__1 = 2;
TrumplangParser.T__2 = 3;
TrumplangParser.T__3 = 4;
TrumplangParser.T__4 = 5;
TrumplangParser.T__5 = 6;
TrumplangParser.IF_DECL = 7;
TrumplangParser.ELSE_IF_DECL = 8;
TrumplangParser.ELSE_DECL = 9;
TrumplangParser.ARRAY_DECL = 10;
TrumplangParser.ARRAY_ELEMENTS_DECL = 11;
TrumplangParser.ARRAY_ACCESS = 12;
TrumplangParser.ARRAY_CHAIN = 13;
TrumplangParser.PROG_START = 14;
TrumplangParser.PROG_END = 15;
TrumplangParser.FUNCTION_DECL = 16;
TrumplangParser.VARIABLE_DECL = 17;
TrumplangParser.CONSTANT_DECL = 18;
TrumplangParser.PARAMS_ARGS_START = 19;
TrumplangParser.PARAMS_ARGS_CHAIN = 20;
TrumplangParser.RETURN = 21;
TrumplangParser.FUNC_CALL = 22;
TrumplangParser.BREAK = 23;
TrumplangParser.FIRE = 24;
TrumplangParser.EXEC_ORDER = 25;
TrumplangParser.SUPREME_COURT = 26;
TrumplangParser.WHILE_LOOP_DECL = 27;
TrumplangParser.FOR_LOOP_DECL = 28;
TrumplangParser.FOR_LOOP_WITH = 29;
TrumplangParser.FOR_LOOP_FROM = 30;
TrumplangParser.FOR_LOOP_TO = 31;
TrumplangParser.FOR_EACH_LOOP_DECL = 32;
TrumplangParser.FOR_EACH_FROM = 33;
TrumplangParser.PRINT = 34;
TrumplangParser.INPUT = 35;
TrumplangParser.IMPORT = 36;
TrumplangParser.DEAL_ACCESS_KEYWORD = 37;
TrumplangParser.ASSERT_CALL = 38;
TrumplangParser.EQUALS = 39;
TrumplangParser.NOT_EQUALS = 40;
TrumplangParser.GREATER_THAN = 41;
TrumplangParser.GREATER_THAN_OR_EQUALS = 42;
TrumplangParser.LESS_THAN = 43;
TrumplangParser.LESS_THAN_OR_EQUALS = 44;
TrumplangParser.NOT = 45;
TrumplangParser.AND = 46;
TrumplangParser.OR = 47;
TrumplangParser.PLUS = 48;
TrumplangParser.MINUS = 49;
TrumplangParser.ASSIGNMENT = 50;
TrumplangParser.STRING_CONCAT = 51;
TrumplangParser.MULTIPLY = 52;
TrumplangParser.DIVIDE = 53;
TrumplangParser.MODULO = 54;
TrumplangParser.POWER = 55;
TrumplangParser.INTEGER_TYPE = 56;
TrumplangParser.FLOAT_TYPE = 57;
TrumplangParser.BOOLEAN_TYPE = 58;
TrumplangParser.STRING_TYPE = 59;
TrumplangParser.ARRAY_TYPE = 60;
TrumplangParser.STRUCTUR_TYPE = 61;
TrumplangParser.OPEN_BLOCK = 62;
TrumplangParser.CLOSE_BLOCK = 63;
TrumplangParser.AMPERSAND = 64;
TrumplangParser.DEAL_DECLARE = 65;
TrumplangParser.VAR_DECLARE = 66;
TrumplangParser.VARIABLE = 67;
TrumplangParser.IDENTIFIER = 68;
TrumplangParser.STRING = 69;
TrumplangParser.NUMBER = 70;
TrumplangParser.BOOLEAN = 71;
TrumplangParser.TRUE = 72;
TrumplangParser.FALSE = 73;
TrumplangParser.COMMENT = 74;
TrumplangParser.FILEPATH = 75;
TrumplangParser.WS = 76;

TrumplangParser.RULE_program = 0;
TrumplangParser.RULE_statement = 1;
TrumplangParser.RULE_commentStatement = 2;
TrumplangParser.RULE_variableDeclaration = 3;
TrumplangParser.RULE_constantDeclaration = 4;
TrumplangParser.RULE_dataType = 5;
TrumplangParser.RULE_functionDeclaration = 6;
TrumplangParser.RULE_blockStatement = 7;
TrumplangParser.RULE_parameterList = 8;
TrumplangParser.RULE_returnStatement = 9;
TrumplangParser.RULE_functionCall = 10;
TrumplangParser.RULE_argumentList = 11;
TrumplangParser.RULE_ifStatement = 12;
TrumplangParser.RULE_elseIfStatement = 13;
TrumplangParser.RULE_elseStatement = 14;
TrumplangParser.RULE_whileLoop = 15;
TrumplangParser.RULE_forLoop = 16;
TrumplangParser.RULE_forEachLoop = 17;
TrumplangParser.RULE_loopBreak = 18;
TrumplangParser.RULE_fireStatement = 19;
TrumplangParser.RULE_executiveOrder = 20;
TrumplangParser.RULE_supremeCourtOverrule = 21;
TrumplangParser.RULE_operator = 22;
TrumplangParser.RULE_arrayDeclaration = 23;
TrumplangParser.RULE_arrayElements = 24;
TrumplangParser.RULE_assignmentStatement = 25;
TrumplangParser.RULE_printStatement = 26;
TrumplangParser.RULE_inputStatement = 27;
TrumplangParser.RULE_incrementStatement = 28;
TrumplangParser.RULE_decrementStatement = 29;
TrumplangParser.RULE_condition = 30;
TrumplangParser.RULE_comparison = 31;
TrumplangParser.RULE_expression = 32;
TrumplangParser.RULE_term = 33;
TrumplangParser.RULE_powerExpression = 34;
TrumplangParser.RULE_primaryExpression = 35;
TrumplangParser.RULE_arrayAccess = 36;
TrumplangParser.RULE_dealField = 37;
TrumplangParser.RULE_dealDeclaration = 38;
TrumplangParser.RULE_dealAccess = 39;
TrumplangParser.RULE_assertStatement = 40;
TrumplangParser.RULE_importStatement = 41;
TrumplangParser.RULE_selectiveImport = 42;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_program;
    }

	PROG_START() {
	    return this.getToken(TrumplangParser.PROG_START, 0);
	};

	PROG_END() {
	    return this.getToken(TrumplangParser.PROG_END, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitProgram(this);
		}
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_statement;
    }

	importStatement() {
	    return this.getTypedRuleContext(ImportStatementContext,0);
	};

	blockStatement() {
	    return this.getTypedRuleContext(BlockStatementContext,0);
	};

	selectiveImport() {
	    return this.getTypedRuleContext(SelectiveImportContext,0);
	};

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	constantDeclaration() {
	    return this.getTypedRuleContext(ConstantDeclarationContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	whileLoop() {
	    return this.getTypedRuleContext(WhileLoopContext,0);
	};

	forLoop() {
	    return this.getTypedRuleContext(ForLoopContext,0);
	};

	forEachLoop() {
	    return this.getTypedRuleContext(ForEachLoopContext,0);
	};

	arrayDeclaration() {
	    return this.getTypedRuleContext(ArrayDeclarationContext,0);
	};

	assignmentStatement() {
	    return this.getTypedRuleContext(AssignmentStatementContext,0);
	};

	incrementStatement() {
	    return this.getTypedRuleContext(IncrementStatementContext,0);
	};

	decrementStatement() {
	    return this.getTypedRuleContext(DecrementStatementContext,0);
	};

	printStatement() {
	    return this.getTypedRuleContext(PrintStatementContext,0);
	};

	inputStatement() {
	    return this.getTypedRuleContext(InputStatementContext,0);
	};

	returnStatement() {
	    return this.getTypedRuleContext(ReturnStatementContext,0);
	};

	commentStatement() {
	    return this.getTypedRuleContext(CommentStatementContext,0);
	};

	loopBreak() {
	    return this.getTypedRuleContext(LoopBreakContext,0);
	};

	fireStatement() {
	    return this.getTypedRuleContext(FireStatementContext,0);
	};

	executiveOrder() {
	    return this.getTypedRuleContext(ExecutiveOrderContext,0);
	};

	supremeCourtOverrule() {
	    return this.getTypedRuleContext(SupremeCourtOverruleContext,0);
	};

	assertStatement() {
	    return this.getTypedRuleContext(AssertStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitStatement(this);
		}
	}


}



class CommentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_commentStatement;
    }

	COMMENT() {
	    return this.getToken(TrumplangParser.COMMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterCommentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitCommentStatement(this);
		}
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_variableDeclaration;
        this.varName = null;
    }

	VARIABLE_DECL() {
	    return this.getToken(TrumplangParser.VARIABLE_DECL, 0);
	};

	dataType() {
	    return this.getTypedRuleContext(DataTypeContext,0);
	};

	ASSIGNMENT() {
	    return this.getToken(TrumplangParser.ASSIGNMENT, 0);
	};

	VARIABLE() {
	    return this.getToken(TrumplangParser.VARIABLE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	dealDeclaration() {
	    return this.getTypedRuleContext(DealDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}


}



class ConstantDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_constantDeclaration;
        this.varName = null;
    }

	CONSTANT_DECL() {
	    return this.getToken(TrumplangParser.CONSTANT_DECL, 0);
	};

	dataType() {
	    return this.getTypedRuleContext(DataTypeContext,0);
	};

	ASSIGNMENT() {
	    return this.getToken(TrumplangParser.ASSIGNMENT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	VARIABLE() {
	    return this.getToken(TrumplangParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterConstantDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitConstantDeclaration(this);
		}
	}


}



class DataTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_dataType;
    }

	INTEGER_TYPE() {
	    return this.getToken(TrumplangParser.INTEGER_TYPE, 0);
	};

	FLOAT_TYPE() {
	    return this.getToken(TrumplangParser.FLOAT_TYPE, 0);
	};

	BOOLEAN_TYPE() {
	    return this.getToken(TrumplangParser.BOOLEAN_TYPE, 0);
	};

	STRING_TYPE() {
	    return this.getToken(TrumplangParser.STRING_TYPE, 0);
	};

	ARRAY_TYPE() {
	    return this.getToken(TrumplangParser.ARRAY_TYPE, 0);
	};

	STRUCTUR_TYPE() {
	    return this.getToken(TrumplangParser.STRUCTUR_TYPE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterDataType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitDataType(this);
		}
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_functionDeclaration;
        this.funcName = null;
    }

	FUNCTION_DECL() {
	    return this.getToken(TrumplangParser.FUNCTION_DECL, 0);
	};

	PARAMS_ARGS_START() {
	    return this.getToken(TrumplangParser.PARAMS_ARGS_START, 0);
	};

	blockStatement() {
	    return this.getTypedRuleContext(BlockStatementContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(TrumplangParser.IDENTIFIER, 0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}


}



class BlockStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_blockStatement;
    }

	OPEN_BLOCK() {
	    return this.getToken(TrumplangParser.OPEN_BLOCK, 0);
	};

	CLOSE_BLOCK() {
	    return this.getToken(TrumplangParser.CLOSE_BLOCK, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterBlockStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitBlockStatement(this);
		}
	}


}



class ParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_parameterList;
        this._VARIABLE = null;
        this.paramName = [];
    }

	dataType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DataTypeContext);
	    } else {
	        return this.getTypedRuleContext(DataTypeContext,i);
	    }
	};

	VARIABLE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TrumplangParser.VARIABLE);
	    } else {
	        return this.getToken(TrumplangParser.VARIABLE, i);
	    }
	};


	PARAMS_ARGS_CHAIN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TrumplangParser.PARAMS_ARGS_CHAIN);
	    } else {
	        return this.getToken(TrumplangParser.PARAMS_ARGS_CHAIN, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterParameterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitParameterList(this);
		}
	}


}



class ReturnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_returnStatement;
    }

	RETURN() {
	    return this.getToken(TrumplangParser.RETURN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterReturnStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitReturnStatement(this);
		}
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_functionCall;
        this.funcName = null;
    }

	FUNC_CALL() {
	    return this.getToken(TrumplangParser.FUNC_CALL, 0);
	};

	PARAMS_ARGS_START() {
	    return this.getToken(TrumplangParser.PARAMS_ARGS_START, 0);
	};

	IDENTIFIER() {
	    return this.getToken(TrumplangParser.IDENTIFIER, 0);
	};

	argumentList() {
	    return this.getTypedRuleContext(ArgumentListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitFunctionCall(this);
		}
	}


}



class ArgumentListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_argumentList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	PARAMS_ARGS_CHAIN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TrumplangParser.PARAMS_ARGS_CHAIN);
	    } else {
	        return this.getToken(TrumplangParser.PARAMS_ARGS_CHAIN, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterArgumentList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitArgumentList(this);
		}
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_ifStatement;
    }

	IF_DECL() {
	    return this.getToken(TrumplangParser.IF_DECL, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	elseIfStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElseIfStatementContext);
	    } else {
	        return this.getTypedRuleContext(ElseIfStatementContext,i);
	    }
	};

	elseStatement() {
	    return this.getTypedRuleContext(ElseStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitIfStatement(this);
		}
	}


}



class ElseIfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_elseIfStatement;
    }

	ELSE_IF_DECL() {
	    return this.getToken(TrumplangParser.ELSE_IF_DECL, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterElseIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitElseIfStatement(this);
		}
	}


}



class ElseStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_elseStatement;
    }

	ELSE_DECL() {
	    return this.getToken(TrumplangParser.ELSE_DECL, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterElseStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitElseStatement(this);
		}
	}


}



class WhileLoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_whileLoop;
    }

	WHILE_LOOP_DECL() {
	    return this.getToken(TrumplangParser.WHILE_LOOP_DECL, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	blockStatement() {
	    return this.getTypedRuleContext(BlockStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterWhileLoop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitWhileLoop(this);
		}
	}


}



class ForLoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_forLoop;
        this.varName = null;
    }

	FOR_LOOP_DECL() {
	    return this.getToken(TrumplangParser.FOR_LOOP_DECL, 0);
	};

	FOR_LOOP_WITH() {
	    return this.getToken(TrumplangParser.FOR_LOOP_WITH, 0);
	};

	FOR_LOOP_FROM() {
	    return this.getToken(TrumplangParser.FOR_LOOP_FROM, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	FOR_LOOP_TO() {
	    return this.getToken(TrumplangParser.FOR_LOOP_TO, 0);
	};

	blockStatement() {
	    return this.getTypedRuleContext(BlockStatementContext,0);
	};

	VARIABLE() {
	    return this.getToken(TrumplangParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterForLoop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitForLoop(this);
		}
	}


}



class ForEachLoopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_forEachLoop;
        this.varName = null;
        this.listName = null;
    }

	FOR_EACH_LOOP_DECL() {
	    return this.getToken(TrumplangParser.FOR_EACH_LOOP_DECL, 0);
	};

	FOR_EACH_FROM() {
	    return this.getToken(TrumplangParser.FOR_EACH_FROM, 0);
	};

	blockStatement() {
	    return this.getTypedRuleContext(BlockStatementContext,0);
	};

	VARIABLE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TrumplangParser.VARIABLE);
	    } else {
	        return this.getToken(TrumplangParser.VARIABLE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterForEachLoop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitForEachLoop(this);
		}
	}


}



class LoopBreakContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_loopBreak;
    }

	BREAK() {
	    return this.getToken(TrumplangParser.BREAK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterLoopBreak(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitLoopBreak(this);
		}
	}


}



class FireStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_fireStatement;
        this.funcName = null;
    }

	FIRE() {
	    return this.getToken(TrumplangParser.FIRE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(TrumplangParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterFireStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitFireStatement(this);
		}
	}


}



class ExecutiveOrderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_executiveOrder;
        this.fromOp = null;
        this.toOp = null;
    }

	EXEC_ORDER() {
	    return this.getToken(TrumplangParser.EXEC_ORDER, 0);
	};

	ASSIGNMENT() {
	    return this.getToken(TrumplangParser.ASSIGNMENT, 0);
	};

	operator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperatorContext);
	    } else {
	        return this.getTypedRuleContext(OperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterExecutiveOrder(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitExecutiveOrder(this);
		}
	}


}



class SupremeCourtOverruleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_supremeCourtOverrule;
        this.fromOp = null;
    }

	SUPREME_COURT() {
	    return this.getToken(TrumplangParser.SUPREME_COURT, 0);
	};

	operator() {
	    return this.getTypedRuleContext(OperatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterSupremeCourtOverrule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitSupremeCourtOverrule(this);
		}
	}


}



class OperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_operator;
    }

	PLUS() {
	    return this.getToken(TrumplangParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(TrumplangParser.MINUS, 0);
	};

	MULTIPLY() {
	    return this.getToken(TrumplangParser.MULTIPLY, 0);
	};

	DIVIDE() {
	    return this.getToken(TrumplangParser.DIVIDE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitOperator(this);
		}
	}


}



class ArrayDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_arrayDeclaration;
        this.arrayName = null;
    }

	ARRAY_DECL() {
	    return this.getToken(TrumplangParser.ARRAY_DECL, 0);
	};

	ARRAY_ELEMENTS_DECL() {
	    return this.getToken(TrumplangParser.ARRAY_ELEMENTS_DECL, 0);
	};

	VARIABLE() {
	    return this.getToken(TrumplangParser.VARIABLE, 0);
	};

	arrayElements() {
	    return this.getTypedRuleContext(ArrayElementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterArrayDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitArrayDeclaration(this);
		}
	}


}



class ArrayElementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_arrayElements;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	ARRAY_CHAIN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TrumplangParser.ARRAY_CHAIN);
	    } else {
	        return this.getToken(TrumplangParser.ARRAY_CHAIN, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterArrayElements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitArrayElements(this);
		}
	}


}



class AssignmentStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_assignmentStatement;
        this.varName = null;
    }

	ASSIGNMENT() {
	    return this.getToken(TrumplangParser.ASSIGNMENT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	VARIABLE() {
	    return this.getToken(TrumplangParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterAssignmentStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitAssignmentStatement(this);
		}
	}


}



class PrintStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_printStatement;
    }

	PRINT() {
	    return this.getToken(TrumplangParser.PRINT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterPrintStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitPrintStatement(this);
		}
	}


}



class InputStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_inputStatement;
        this.varName = null;
    }

	INPUT() {
	    return this.getToken(TrumplangParser.INPUT, 0);
	};

	VARIABLE() {
	    return this.getToken(TrumplangParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterInputStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitInputStatement(this);
		}
	}


}



class IncrementStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_incrementStatement;
        this.varName = null;
    }

	VARIABLE() {
	    return this.getToken(TrumplangParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterIncrementStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitIncrementStatement(this);
		}
	}


}



class DecrementStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_decrementStatement;
        this.varName = null;
    }

	VARIABLE() {
	    return this.getToken(TrumplangParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterDecrementStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitDecrementStatement(this);
		}
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_condition;
        this.condVar = null;
        this.condBool = null;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	comparison() {
	    return this.getTypedRuleContext(ComparisonContext,0);
	};

	VARIABLE() {
	    return this.getToken(TrumplangParser.VARIABLE, 0);
	};

	BOOLEAN() {
	    return this.getToken(TrumplangParser.BOOLEAN, 0);
	};

	NOT() {
	    return this.getToken(TrumplangParser.NOT, 0);
	};

	condition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionContext);
	    } else {
	        return this.getTypedRuleContext(ConditionContext,i);
	    }
	};

	AND() {
	    return this.getToken(TrumplangParser.AND, 0);
	};

	OR() {
	    return this.getToken(TrumplangParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitCondition(this);
		}
	}


}



class ComparisonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_comparison;
    }

	EQUALS() {
	    return this.getToken(TrumplangParser.EQUALS, 0);
	};

	NOT_EQUALS() {
	    return this.getToken(TrumplangParser.NOT_EQUALS, 0);
	};

	GREATER_THAN() {
	    return this.getToken(TrumplangParser.GREATER_THAN, 0);
	};

	LESS_THAN() {
	    return this.getToken(TrumplangParser.LESS_THAN, 0);
	};

	GREATER_THAN_OR_EQUALS() {
	    return this.getToken(TrumplangParser.GREATER_THAN_OR_EQUALS, 0);
	};

	LESS_THAN_OR_EQUALS() {
	    return this.getToken(TrumplangParser.LESS_THAN_OR_EQUALS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitComparison(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_expression;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	PLUS() {
	    return this.getToken(TrumplangParser.PLUS, 0);
	};

	STRING_CONCAT() {
	    return this.getToken(TrumplangParser.STRING_CONCAT, 0);
	};

	MINUS() {
	    return this.getToken(TrumplangParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitExpression(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_term;
    }

	powerExpression() {
	    return this.getTypedRuleContext(PowerExpressionContext,0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	MULTIPLY() {
	    return this.getToken(TrumplangParser.MULTIPLY, 0);
	};

	primaryExpression() {
	    return this.getTypedRuleContext(PrimaryExpressionContext,0);
	};

	DIVIDE() {
	    return this.getToken(TrumplangParser.DIVIDE, 0);
	};

	MODULO() {
	    return this.getToken(TrumplangParser.MODULO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitTerm(this);
		}
	}


}



class PowerExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_powerExpression;
    }

	primaryExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PrimaryExpressionContext);
	    } else {
	        return this.getTypedRuleContext(PrimaryExpressionContext,i);
	    }
	};

	POWER() {
	    return this.getToken(TrumplangParser.POWER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterPowerExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitPowerExpression(this);
		}
	}


}



class PrimaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_primaryExpression;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	VARIABLE() {
	    return this.getToken(TrumplangParser.VARIABLE, 0);
	};

	STRING() {
	    return this.getToken(TrumplangParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(TrumplangParser.NUMBER, 0);
	};

	BOOLEAN() {
	    return this.getToken(TrumplangParser.BOOLEAN, 0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	arrayAccess() {
	    return this.getTypedRuleContext(ArrayAccessContext,0);
	};

	dealAccess() {
	    return this.getTypedRuleContext(DealAccessContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterPrimaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitPrimaryExpression(this);
		}
	}


}



class ArrayAccessContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_arrayAccess;
        this.arrayName = null;
    }

	ARRAY_ACCESS() {
	    return this.getToken(TrumplangParser.ARRAY_ACCESS, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	VARIABLE() {
	    return this.getToken(TrumplangParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterArrayAccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitArrayAccess(this);
		}
	}


}



class DealFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_dealField;
        this.fieldName = null;
    }

	dataType() {
	    return this.getTypedRuleContext(DataTypeContext,0);
	};

	ASSIGNMENT() {
	    return this.getToken(TrumplangParser.ASSIGNMENT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	VARIABLE() {
	    return this.getToken(TrumplangParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterDealField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitDealField(this);
		}
	}


}



class DealDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_dealDeclaration;
    }

	dealField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DealFieldContext);
	    } else {
	        return this.getTypedRuleContext(DealFieldContext,i);
	    }
	};

	DEAL_DECLARE() {
	    return this.getToken(TrumplangParser.DEAL_DECLARE, 0);
	};

	AMPERSAND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TrumplangParser.AMPERSAND);
	    } else {
	        return this.getToken(TrumplangParser.AMPERSAND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterDealDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitDealDeclaration(this);
		}
	}


}



class DealAccessContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_dealAccess;
        this.dealName = null;
        this.fieldName = null;
    }

	DEAL_ACCESS_KEYWORD() {
	    return this.getToken(TrumplangParser.DEAL_ACCESS_KEYWORD, 0);
	};

	VARIABLE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TrumplangParser.VARIABLE);
	    } else {
	        return this.getToken(TrumplangParser.VARIABLE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterDealAccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitDealAccess(this);
		}
	}


}



class AssertStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_assertStatement;
    }

	ASSERT_CALL() {
	    return this.getToken(TrumplangParser.ASSERT_CALL, 0);
	};

	EQUALS() {
	    return this.getToken(TrumplangParser.EQUALS, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterAssertStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitAssertStatement(this);
		}
	}


}



class ImportStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_importStatement;
        this.filePath = null;
    }

	IMPORT() {
	    return this.getToken(TrumplangParser.IMPORT, 0);
	};

	FILEPATH() {
	    return this.getToken(TrumplangParser.FILEPATH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterImportStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitImportStatement(this);
		}
	}


}



class SelectiveImportContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_selectiveImport;
        this._IDENTIFIER = null;
        this.importName = [];
        this.filePath = null;
    }

	FOR_LOOP_FROM() {
	    return this.getToken(TrumplangParser.FOR_LOOP_FROM, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TrumplangParser.IDENTIFIER);
	    } else {
	        return this.getToken(TrumplangParser.IDENTIFIER, i);
	    }
	};


	FILEPATH() {
	    return this.getToken(TrumplangParser.FILEPATH, 0);
	};

	PARAMS_ARGS_CHAIN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TrumplangParser.PARAMS_ARGS_CHAIN);
	    } else {
	        return this.getToken(TrumplangParser.PARAMS_ARGS_CHAIN, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterSelectiveImport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitSelectiveImport(this);
		}
	}


}




TrumplangParser.ProgramContext = ProgramContext; 
TrumplangParser.StatementContext = StatementContext; 
TrumplangParser.CommentStatementContext = CommentStatementContext; 
TrumplangParser.VariableDeclarationContext = VariableDeclarationContext; 
TrumplangParser.ConstantDeclarationContext = ConstantDeclarationContext; 
TrumplangParser.DataTypeContext = DataTypeContext; 
TrumplangParser.FunctionDeclarationContext = FunctionDeclarationContext; 
TrumplangParser.BlockStatementContext = BlockStatementContext; 
TrumplangParser.ParameterListContext = ParameterListContext; 
TrumplangParser.ReturnStatementContext = ReturnStatementContext; 
TrumplangParser.FunctionCallContext = FunctionCallContext; 
TrumplangParser.ArgumentListContext = ArgumentListContext; 
TrumplangParser.IfStatementContext = IfStatementContext; 
TrumplangParser.ElseIfStatementContext = ElseIfStatementContext; 
TrumplangParser.ElseStatementContext = ElseStatementContext; 
TrumplangParser.WhileLoopContext = WhileLoopContext; 
TrumplangParser.ForLoopContext = ForLoopContext; 
TrumplangParser.ForEachLoopContext = ForEachLoopContext; 
TrumplangParser.LoopBreakContext = LoopBreakContext; 
TrumplangParser.FireStatementContext = FireStatementContext; 
TrumplangParser.ExecutiveOrderContext = ExecutiveOrderContext; 
TrumplangParser.SupremeCourtOverruleContext = SupremeCourtOverruleContext; 
TrumplangParser.OperatorContext = OperatorContext; 
TrumplangParser.ArrayDeclarationContext = ArrayDeclarationContext; 
TrumplangParser.ArrayElementsContext = ArrayElementsContext; 
TrumplangParser.AssignmentStatementContext = AssignmentStatementContext; 
TrumplangParser.PrintStatementContext = PrintStatementContext; 
TrumplangParser.InputStatementContext = InputStatementContext; 
TrumplangParser.IncrementStatementContext = IncrementStatementContext; 
TrumplangParser.DecrementStatementContext = DecrementStatementContext; 
TrumplangParser.ConditionContext = ConditionContext; 
TrumplangParser.ComparisonContext = ComparisonContext; 
TrumplangParser.ExpressionContext = ExpressionContext; 
TrumplangParser.TermContext = TermContext; 
TrumplangParser.PowerExpressionContext = PowerExpressionContext; 
TrumplangParser.PrimaryExpressionContext = PrimaryExpressionContext; 
TrumplangParser.ArrayAccessContext = ArrayAccessContext; 
TrumplangParser.DealFieldContext = DealFieldContext; 
TrumplangParser.DealDeclarationContext = DealDeclarationContext; 
TrumplangParser.DealAccessContext = DealAccessContext; 
TrumplangParser.AssertStatementContext = AssertStatementContext; 
TrumplangParser.ImportStatementContext = ImportStatementContext; 
TrumplangParser.SelectiveImportContext = SelectiveImportContext; 

// jshint ignore: start
import antlr4 from 'antlr4';
import TrumplangListener from './TrumplangListener.js';
const serializedATN = [4,1,82,495,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,1,0,1,0,4,0,107,8,0,11,0,12,0,108,1,0,1,0,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,141,8,1,1,2,1,2,1,3,1,3,1,3,1,
3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,3,6,164,8,
6,1,6,1,6,3,6,168,8,6,1,6,1,6,1,7,1,7,5,7,174,8,7,10,7,12,7,177,9,7,1,7,
1,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,187,8,8,10,8,12,8,190,9,8,1,9,1,9,1,9,1,
10,1,10,1,10,1,10,3,10,199,8,10,1,11,1,11,1,11,5,11,204,8,11,10,11,12,11,
207,9,11,1,12,1,12,1,12,1,12,5,12,213,8,12,10,12,12,12,216,9,12,1,12,3,12,
219,8,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,241,8,16,1,16,1,16,1,17,1,17,1,17,
1,17,1,17,1,17,1,18,1,18,1,19,1,19,1,19,1,19,3,19,257,8,19,1,19,1,19,1,20,
1,20,1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,24,1,
24,1,25,1,25,1,25,1,25,3,25,281,8,25,1,26,1,26,1,26,5,26,286,8,26,10,26,
12,26,289,9,26,1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,29,1,
29,1,29,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,33,1,33,
1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,5,34,326,8,34,10,34,12,34,329,
9,34,1,35,1,35,1,35,1,35,1,35,1,35,5,35,337,8,35,10,35,12,35,340,9,35,1,
36,1,36,1,36,1,36,1,36,1,36,5,36,348,8,36,10,36,12,36,351,9,36,1,37,1,37,
1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,5,37,368,
8,37,10,37,12,37,371,9,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,
38,1,38,1,38,5,38,385,8,38,10,38,12,38,388,9,38,1,39,1,39,1,39,1,39,1,39,
1,39,1,39,1,39,1,39,1,39,1,39,1,39,5,39,402,8,39,10,39,12,39,405,9,39,1,
40,1,40,1,40,1,40,1,40,3,40,412,8,40,1,41,1,41,1,41,1,41,1,41,3,41,419,8,
41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,
434,8,42,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,46,
1,46,1,46,1,46,5,46,452,8,46,10,46,12,46,455,9,46,1,46,1,46,1,46,1,47,1,
47,1,47,4,47,463,8,47,11,47,12,47,464,1,48,1,48,1,48,4,48,470,8,48,11,48,
12,48,471,1,48,1,48,1,48,1,49,1,49,1,49,1,50,1,50,1,50,1,51,1,51,1,51,1,
51,5,51,487,8,51,10,51,12,51,490,9,51,1,51,1,51,1,51,1,51,0,6,68,70,72,74,
76,78,52,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,
46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,
94,96,98,100,102,0,2,1,0,56,61,2,0,48,49,52,53,512,0,104,1,0,0,0,2,140,1,
0,0,0,4,142,1,0,0,0,6,144,1,0,0,0,8,150,1,0,0,0,10,156,1,0,0,0,12,158,1,
0,0,0,14,171,1,0,0,0,16,180,1,0,0,0,18,191,1,0,0,0,20,194,1,0,0,0,22,200,
1,0,0,0,24,208,1,0,0,0,26,220,1,0,0,0,28,224,1,0,0,0,30,227,1,0,0,0,32,231,
1,0,0,0,34,244,1,0,0,0,36,250,1,0,0,0,38,252,1,0,0,0,40,260,1,0,0,0,42,263,
1,0,0,0,44,266,1,0,0,0,46,271,1,0,0,0,48,274,1,0,0,0,50,276,1,0,0,0,52,282,
1,0,0,0,54,290,1,0,0,0,56,296,1,0,0,0,58,300,1,0,0,0,60,303,1,0,0,0,62,306,
1,0,0,0,64,310,1,0,0,0,66,314,1,0,0,0,68,316,1,0,0,0,70,330,1,0,0,0,72,341,
1,0,0,0,74,352,1,0,0,0,76,372,1,0,0,0,78,389,1,0,0,0,80,411,1,0,0,0,82,418,
1,0,0,0,84,433,1,0,0,0,86,435,1,0,0,0,88,438,1,0,0,0,90,442,1,0,0,0,92,447,
1,0,0,0,94,459,1,0,0,0,96,466,1,0,0,0,98,476,1,0,0,0,100,479,1,0,0,0,102,
482,1,0,0,0,104,106,5,8,0,0,105,107,3,2,1,0,106,105,1,0,0,0,107,108,1,0,
0,0,108,106,1,0,0,0,108,109,1,0,0,0,109,110,1,0,0,0,110,111,5,9,0,0,111,
1,1,0,0,0,112,141,3,100,50,0,113,141,3,14,7,0,114,141,3,102,51,0,115,141,
3,6,3,0,116,141,3,8,4,0,117,141,3,12,6,0,118,141,3,20,10,0,119,141,3,24,
12,0,120,141,3,30,15,0,121,141,3,32,16,0,122,141,3,34,17,0,123,141,3,50,
25,0,124,141,3,54,27,0,125,141,3,96,48,0,126,141,3,56,28,0,127,141,3,62,
31,0,128,141,3,64,32,0,129,141,3,58,29,0,130,141,3,60,30,0,131,141,3,18,
9,0,132,141,3,4,2,0,133,141,3,36,18,0,134,141,3,38,19,0,135,141,3,40,20,
0,136,141,3,42,21,0,137,141,3,44,22,0,138,141,3,46,23,0,139,141,3,98,49,
0,140,112,1,0,0,0,140,113,1,0,0,0,140,114,1,0,0,0,140,115,1,0,0,0,140,116,
1,0,0,0,140,117,1,0,0,0,140,118,1,0,0,0,140,119,1,0,0,0,140,120,1,0,0,0,
140,121,1,0,0,0,140,122,1,0,0,0,140,123,1,0,0,0,140,124,1,0,0,0,140,125,
1,0,0,0,140,126,1,0,0,0,140,127,1,0,0,0,140,128,1,0,0,0,140,129,1,0,0,0,
140,130,1,0,0,0,140,131,1,0,0,0,140,132,1,0,0,0,140,133,1,0,0,0,140,134,
1,0,0,0,140,135,1,0,0,0,140,136,1,0,0,0,140,137,1,0,0,0,140,138,1,0,0,0,
140,139,1,0,0,0,141,3,1,0,0,0,142,143,5,80,0,0,143,5,1,0,0,0,144,145,5,12,
0,0,145,146,3,10,5,0,146,147,5,73,0,0,147,148,5,50,0,0,148,149,3,66,33,0,
149,7,1,0,0,0,150,151,5,13,0,0,151,152,3,10,5,0,152,153,5,73,0,0,153,154,
5,50,0,0,154,155,3,66,33,0,155,9,1,0,0,0,156,157,7,0,0,0,157,11,1,0,0,0,
158,159,5,10,0,0,159,160,5,74,0,0,160,161,5,11,0,0,161,163,5,14,0,0,162,
164,3,16,8,0,163,162,1,0,0,0,163,164,1,0,0,0,164,167,1,0,0,0,165,166,5,17,
0,0,166,168,3,10,5,0,167,165,1,0,0,0,167,168,1,0,0,0,168,169,1,0,0,0,169,
170,3,14,7,0,170,13,1,0,0,0,171,175,5,62,0,0,172,174,3,2,1,0,173,172,1,0,
0,0,174,177,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,178,1,0,0,0,177,
175,1,0,0,0,178,179,5,63,0,0,179,15,1,0,0,0,180,181,3,10,5,0,181,188,5,73,
0,0,182,183,5,15,0,0,183,184,3,10,5,0,184,185,5,73,0,0,185,187,1,0,0,0,186,
182,1,0,0,0,187,190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,17,1,0,0,
0,190,188,1,0,0,0,191,192,5,16,0,0,192,193,3,66,33,0,193,19,1,0,0,0,194,
195,5,18,0,0,195,196,5,74,0,0,196,198,5,14,0,0,197,199,3,22,11,0,198,197,
1,0,0,0,198,199,1,0,0,0,199,21,1,0,0,0,200,205,3,66,33,0,201,202,5,15,0,
0,202,204,3,66,33,0,203,201,1,0,0,0,204,207,1,0,0,0,205,203,1,0,0,0,205,
206,1,0,0,0,206,23,1,0,0,0,207,205,1,0,0,0,208,209,5,1,0,0,209,210,3,66,
33,0,210,214,3,2,1,0,211,213,3,26,13,0,212,211,1,0,0,0,213,216,1,0,0,0,214,
212,1,0,0,0,214,215,1,0,0,0,215,218,1,0,0,0,216,214,1,0,0,0,217,219,3,28,
14,0,218,217,1,0,0,0,218,219,1,0,0,0,219,25,1,0,0,0,220,221,5,2,0,0,221,
222,3,66,33,0,222,223,3,2,1,0,223,27,1,0,0,0,224,225,5,3,0,0,225,226,3,2,
1,0,226,29,1,0,0,0,227,228,5,26,0,0,228,229,3,66,33,0,229,230,3,14,7,0,230,
31,1,0,0,0,231,232,5,27,0,0,232,233,5,28,0,0,233,234,5,73,0,0,234,235,5,
29,0,0,235,236,3,66,33,0,236,237,5,30,0,0,237,240,3,66,33,0,238,239,5,31,
0,0,239,241,3,66,33,0,240,238,1,0,0,0,240,241,1,0,0,0,241,242,1,0,0,0,242,
243,3,14,7,0,243,33,1,0,0,0,244,245,5,32,0,0,245,246,5,73,0,0,246,247,5,
33,0,0,247,248,5,73,0,0,248,249,3,14,7,0,249,35,1,0,0,0,250,251,5,19,0,0,
251,37,1,0,0,0,252,253,5,21,0,0,253,254,3,14,7,0,254,256,5,22,0,0,255,257,
5,73,0,0,256,255,1,0,0,0,256,257,1,0,0,0,257,258,1,0,0,0,258,259,3,14,7,
0,259,39,1,0,0,0,260,261,5,23,0,0,261,262,3,66,33,0,262,41,1,0,0,0,263,264,
5,20,0,0,264,265,5,74,0,0,265,43,1,0,0,0,266,267,5,24,0,0,267,268,3,48,24,
0,268,269,5,50,0,0,269,270,3,48,24,0,270,45,1,0,0,0,271,272,5,25,0,0,272,
273,3,48,24,0,273,47,1,0,0,0,274,275,7,1,0,0,275,49,1,0,0,0,276,277,5,4,
0,0,277,278,5,73,0,0,278,280,5,5,0,0,279,281,3,52,26,0,280,279,1,0,0,0,280,
281,1,0,0,0,281,51,1,0,0,0,282,287,3,66,33,0,283,284,5,7,0,0,284,286,3,66,
33,0,285,283,1,0,0,0,286,289,1,0,0,0,287,285,1,0,0,0,287,288,1,0,0,0,288,
53,1,0,0,0,289,287,1,0,0,0,290,291,5,73,0,0,291,292,5,6,0,0,292,293,3,76,
38,0,293,294,5,50,0,0,294,295,3,66,33,0,295,55,1,0,0,0,296,297,5,73,0,0,
297,298,5,50,0,0,298,299,3,66,33,0,299,57,1,0,0,0,300,301,5,34,0,0,301,302,
3,66,33,0,302,59,1,0,0,0,303,304,5,35,0,0,304,305,5,73,0,0,305,61,1,0,0,
0,306,307,5,64,0,0,307,308,5,73,0,0,308,309,5,65,0,0,309,63,1,0,0,0,310,
311,5,64,0,0,311,312,5,73,0,0,312,313,5,66,0,0,313,65,1,0,0,0,314,315,3,
68,34,0,315,67,1,0,0,0,316,317,6,34,-1,0,317,318,3,70,35,0,318,327,1,0,0,
0,319,320,10,2,0,0,320,321,5,39,0,0,321,326,3,70,35,0,322,323,10,1,0,0,323,
324,5,40,0,0,324,326,3,70,35,0,325,319,1,0,0,0,325,322,1,0,0,0,326,329,1,
0,0,0,327,325,1,0,0,0,327,328,1,0,0,0,328,69,1,0,0,0,329,327,1,0,0,0,330,
331,6,35,-1,0,331,332,3,72,36,0,332,338,1,0,0,0,333,334,10,1,0,0,334,335,
5,47,0,0,335,337,3,72,36,0,336,333,1,0,0,0,337,340,1,0,0,0,338,336,1,0,0,
0,338,339,1,0,0,0,339,71,1,0,0,0,340,338,1,0,0,0,341,342,6,36,-1,0,342,343,
3,74,37,0,343,349,1,0,0,0,344,345,10,1,0,0,345,346,5,46,0,0,346,348,3,74,
37,0,347,344,1,0,0,0,348,351,1,0,0,0,349,347,1,0,0,0,349,350,1,0,0,0,350,
73,1,0,0,0,351,349,1,0,0,0,352,353,6,37,-1,0,353,354,3,76,38,0,354,369,1,
0,0,0,355,356,10,4,0,0,356,357,5,41,0,0,357,368,3,76,38,0,358,359,10,3,0,
0,359,360,5,43,0,0,360,368,3,76,38,0,361,362,10,2,0,0,362,363,5,42,0,0,363,
368,3,76,38,0,364,365,10,1,0,0,365,366,5,44,0,0,366,368,3,76,38,0,367,355,
1,0,0,0,367,358,1,0,0,0,367,361,1,0,0,0,367,364,1,0,0,0,368,371,1,0,0,0,
369,367,1,0,0,0,369,370,1,0,0,0,370,75,1,0,0,0,371,369,1,0,0,0,372,373,6,
38,-1,0,373,374,3,78,39,0,374,386,1,0,0,0,375,376,10,3,0,0,376,377,5,48,
0,0,377,385,3,78,39,0,378,379,10,2,0,0,379,380,5,51,0,0,380,385,3,78,39,
0,381,382,10,1,0,0,382,383,5,49,0,0,383,385,3,78,39,0,384,375,1,0,0,0,384,
378,1,0,0,0,384,381,1,0,0,0,385,388,1,0,0,0,386,384,1,0,0,0,386,387,1,0,
0,0,387,77,1,0,0,0,388,386,1,0,0,0,389,390,6,39,-1,0,390,391,3,80,40,0,391,
403,1,0,0,0,392,393,10,3,0,0,393,394,5,52,0,0,394,402,3,80,40,0,395,396,
10,2,0,0,396,397,5,53,0,0,397,402,3,80,40,0,398,399,10,1,0,0,399,400,5,54,
0,0,400,402,3,80,40,0,401,392,1,0,0,0,401,395,1,0,0,0,401,398,1,0,0,0,402,
405,1,0,0,0,403,401,1,0,0,0,403,404,1,0,0,0,404,79,1,0,0,0,405,403,1,0,0,
0,406,412,3,82,41,0,407,408,3,82,41,0,408,409,5,55,0,0,409,410,3,80,40,0,
410,412,1,0,0,0,411,406,1,0,0,0,411,407,1,0,0,0,412,81,1,0,0,0,413,414,5,
45,0,0,414,419,3,82,41,0,415,416,5,49,0,0,416,419,3,82,41,0,417,419,3,84,
42,0,418,413,1,0,0,0,418,415,1,0,0,0,418,417,1,0,0,0,419,83,1,0,0,0,420,
421,5,68,0,0,421,422,3,66,33,0,422,423,5,69,0,0,423,434,1,0,0,0,424,434,
5,73,0,0,425,434,5,75,0,0,426,434,5,76,0,0,427,434,5,77,0,0,428,434,3,20,
10,0,429,434,3,88,44,0,430,434,3,94,47,0,431,434,3,92,46,0,432,434,3,86,
43,0,433,420,1,0,0,0,433,424,1,0,0,0,433,425,1,0,0,0,433,426,1,0,0,0,433,
427,1,0,0,0,433,428,1,0,0,0,433,429,1,0,0,0,433,430,1,0,0,0,433,431,1,0,
0,0,433,432,1,0,0,0,434,85,1,0,0,0,435,436,5,5,0,0,436,437,3,52,26,0,437,
87,1,0,0,0,438,439,5,73,0,0,439,440,5,6,0,0,440,441,3,76,38,0,441,89,1,0,
0,0,442,443,3,10,5,0,443,444,5,73,0,0,444,445,5,50,0,0,445,446,3,66,33,0,
446,91,1,0,0,0,447,448,5,68,0,0,448,453,3,90,45,0,449,450,5,70,0,0,450,452,
3,90,45,0,451,449,1,0,0,0,452,455,1,0,0,0,453,451,1,0,0,0,453,454,1,0,0,
0,454,456,1,0,0,0,455,453,1,0,0,0,456,457,5,69,0,0,457,458,5,71,0,0,458,
93,1,0,0,0,459,462,5,73,0,0,460,461,5,37,0,0,461,463,5,73,0,0,462,460,1,
0,0,0,463,464,1,0,0,0,464,462,1,0,0,0,464,465,1,0,0,0,465,95,1,0,0,0,466,
469,5,73,0,0,467,468,5,37,0,0,468,470,5,73,0,0,469,467,1,0,0,0,470,471,1,
0,0,0,471,469,1,0,0,0,471,472,1,0,0,0,472,473,1,0,0,0,473,474,5,50,0,0,474,
475,3,66,33,0,475,97,1,0,0,0,476,477,5,38,0,0,477,478,3,66,33,0,478,99,1,
0,0,0,479,480,5,36,0,0,480,481,5,81,0,0,481,101,1,0,0,0,482,483,5,67,0,0,
483,488,5,74,0,0,484,485,5,15,0,0,485,487,5,74,0,0,486,484,1,0,0,0,487,490,
1,0,0,0,488,486,1,0,0,0,488,489,1,0,0,0,489,491,1,0,0,0,490,488,1,0,0,0,
491,492,5,29,0,0,492,493,5,81,0,0,493,103,1,0,0,0,31,108,140,163,167,175,
188,198,205,214,218,240,256,280,287,325,327,338,349,367,369,384,386,401,
403,411,418,433,453,464,471,488];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class TrumplangParser extends antlr4.Parser {

    static grammarFileName = "Trumplang.g4";
    static literalNames = [ null, "'LISTEN'", "'PEOPLE ARE SAYING'", "'NOBODY KNEW'", 
                            "'BUILD THE WALL'", "'AND MEXICO WILL PAY FOR IT'", 
                            "'SECTION'", "'PREVAILS'", "'THE TIME FOR EMPTY TALK IS OVER!!!'", 
                            "'MAKE AMERICA GREAT AGAIN'", "'INCREDIBLE'", 
                            null, "'I HAVE THE BEST'", "'I HAVE A VERY GOOD BRAIN FOR'", 
                            "'PEOPLE TELL ME'", "'AND'", "'AND I MEAN THAT'", 
                            "'GIVING BACK'", "'I CALL UPON'", "'I WILL VETO!'", 
                            "'YOU'RE FIRED'", "'I ALONE CAN FIX IT'", "'WITCH HUNT!'", 
                            "'IMPEACH'", "'EXECUTIVE ORDER'", "'SUPREME COURT OVERRULES'", 
                            "'WE'RE GOING TO WIN IN A LANDSLIDE'", "'WE'RE GOING TO WIN, WIN, WIN'", 
                            "'WITH'", "'FROM'", "'TO'", "'IN TREMENDOUS STEPS OF'", 
                            "'BILLIONS AND BILLIONS'", "'YET'", "'EVERYONE IS TALKING ABOUT'", 
                            "'MANY PEOPLE ARE ASKING'", "'I KNOW THE BEST PEOPLE FROM'", 
                            "'FOLLOW'", "'FACT CHECK'", "'SO TRUE'", "'TOTAL DISASTER'", 
                            "'BETTER THAN'", "'AT LEAST AS GOOD AS'", "'NOT AS GOOD AS'", 
                            "'NO BETTER THAN'", "'WRONG'", "'AND IT'S TRUE'", 
                            "'OR MAYBE'", "'WINNING'", "'LOSING'", "'ABSOLUTELY'", 
                            "'ENDORSING'", "'BIG LEAGUE TIMES'", "'SAD'", 
                            "'LEFTOVER FROM'", "'HUGELY MULTIPLIED BY'", 
                            "'HUGE'", "'BIGLY'", "'SUPPORT'", "'TWEET'", 
                            "'WALL'", "'DEAL'", "'BELIEVE ME'", "'I TOLD YOU SO'", 
                            "'MAKE'", "'GREATER'", "'SMALLER'", "'I ONLY WANT'", 
                            "'('", "')'", "'&'", "'!!'", "'!'", null, null, 
                            null, null, null, "'VERY TRUE'", "'FAKE NEWS'" ];
    static symbolicNames = [ null, "IF_DECL", "ELSE_IF_DECL", "ELSE_DECL", 
                             "ARRAY_DECL", "ARRAY_ELEMENTS_DECL", "ARRAY_ACCESS", 
                             "ARRAY_CHAIN", "PROG_START", "PROG_END", "FUNCTION_DECL", 
                             "SUPERLATIVE", "VARIABLE_DECL", "CONSTANT_DECL", 
                             "PARAMS_ARGS_START", "PARAMS_ARGS_CHAIN", "RETURN", 
                             "RETURN_TYPE_DECL", "FUNC_CALL", "BREAK", "FIRE", 
                             "TRY_DECL", "CATCH_DECL", "IMPEACH", "EXEC_ORDER", 
                             "SUPREME_COURT", "WHILE_LOOP_DECL", "FOR_LOOP_DECL", 
                             "FOR_LOOP_WITH", "FROM_KEYWORD", "FOR_LOOP_TO", 
                             "FOR_LOOP_STEP", "FOR_EACH_LOOP_DECL", "FOR_EACH_FROM", 
                             "PRINT", "INPUT", "IMPORT", "DEAL_ACCESS_KEYWORD", 
                             "ASSERT_CALL", "EQUALS", "NOT_EQUALS", "GREATER_THAN", 
                             "GREATER_THAN_OR_EQUALS", "LESS_THAN", "LESS_THAN_OR_EQUALS", 
                             "NOT", "AND", "OR", "PLUS", "MINUS", "ASSIGNMENT", 
                             "STRING_CONCAT", "MULTIPLY", "DIVIDE", "MODULO", 
                             "POWER", "INTEGER_TYPE", "FLOAT_TYPE", "BOOLEAN_TYPE", 
                             "STRING_TYPE", "ARRAY_TYPE", "STRUCTUR_TYPE", 
                             "OPEN_BLOCK", "CLOSE_BLOCK", "MAKE_DECL", "INCREMENT_OP", 
                             "DECREMENT_OP", "SELECTIVE_IMPORT_DECL", "OPEN_PAREN", 
                             "CLOSE_PAREN", "AMPERSAND", "DEAL_DECLARE", 
                             "VAR_DECLARE", "VARIABLE", "IDENTIFIER", "STRING", 
                             "NUMBER", "BOOLEAN", "TRUE", "FALSE", "COMMENT", 
                             "FILEPATH", "WS" ];
    static ruleNames = [ "program", "statement", "commentStatement", "variableDeclaration", 
                         "constantDeclaration", "dataType", "functionDeclaration", 
                         "blockStatement", "parameterList", "returnStatement", 
                         "functionCall", "argumentList", "ifStatement", 
                         "elseIfStatement", "elseStatement", "whileLoop", 
                         "forLoop", "forEachLoop", "vetoStatement", "pardonStatement", 
                         "impeachStatement", "fireStatement", "executiveOrder", 
                         "supremeCourtOverrule", "operator", "arrayDeclaration", 
                         "arrayElements", "arrayAssignment", "assignmentStatement", 
                         "printStatement", "inputStatement", "incrementStatement", 
                         "decrementStatement", "expression", "equalityExpression", 
                         "logicalOrExpression", "logicalAndExpression", 
                         "comparisonExpression", "additiveExpression", "term", 
                         "powerExpression", "unaryExpression", "primaryExpression", 
                         "arrayLiteral", "arrayAccess", "dealField", "dealDeclaration", 
                         "dealAccess", "dealAssignment", "factCheckStatement", 
                         "importStatement", "selectiveImport" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = TrumplangParser.ruleNames;
        this.literalNames = TrumplangParser.literalNames;
        this.symbolicNames = TrumplangParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 34:
    	    		return this.equalityExpression_sempred(localctx, predIndex);
    	case 35:
    	    		return this.logicalOrExpression_sempred(localctx, predIndex);
    	case 36:
    	    		return this.logicalAndExpression_sempred(localctx, predIndex);
    	case 37:
    	    		return this.comparisonExpression_sempred(localctx, predIndex);
    	case 38:
    	    		return this.additiveExpression_sempred(localctx, predIndex);
    	case 39:
    	    		return this.term_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    equalityExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    logicalOrExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    logicalAndExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    comparisonExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 4:
    			return this.precpred(this._ctx, 4);
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

    additiveExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 8:
    			return this.precpred(this._ctx, 3);
    		case 9:
    			return this.precpred(this._ctx, 2);
    		case 10:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    term_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 11:
    			return this.precpred(this._ctx, 3);
    		case 12:
    			return this.precpred(this._ctx, 2);
    		case 13:
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
	        this.state = 104;
	        this.match(TrumplangParser.PROG_START);
	        this.state = 106; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 105;
	            this.statement();
	            this.state = 108; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 264057874) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1073741917) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 66057) !== 0));
	        this.state = 110;
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
	        this.state = 140;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 112;
	            this.importStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 113;
	            this.blockStatement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 114;
	            this.selectiveImport();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 115;
	            this.variableDeclaration();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 116;
	            this.constantDeclaration();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 117;
	            this.functionDeclaration();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 118;
	            this.functionCall();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 119;
	            this.ifStatement();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 120;
	            this.whileLoop();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 121;
	            this.forLoop();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 122;
	            this.forEachLoop();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 123;
	            this.arrayDeclaration();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 124;
	            this.arrayAssignment();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 125;
	            this.dealAssignment();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 126;
	            this.assignmentStatement();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 127;
	            this.incrementStatement();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 128;
	            this.decrementStatement();
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 129;
	            this.printStatement();
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 130;
	            this.inputStatement();
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 131;
	            this.returnStatement();
	            break;

	        case 21:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 132;
	            this.commentStatement();
	            break;

	        case 22:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 133;
	            this.vetoStatement();
	            break;

	        case 23:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 134;
	            this.pardonStatement();
	            break;

	        case 24:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 135;
	            this.impeachStatement();
	            break;

	        case 25:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 136;
	            this.fireStatement();
	            break;

	        case 26:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 137;
	            this.executiveOrder();
	            break;

	        case 27:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 138;
	            this.supremeCourtOverrule();
	            break;

	        case 28:
	            this.enterOuterAlt(localctx, 28);
	            this.state = 139;
	            this.factCheckStatement();
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
	        this.state = 142;
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
	        this.state = 144;
	        this.match(TrumplangParser.VARIABLE_DECL);
	        this.state = 145;
	        this.dataType();
	        this.state = 146;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 147;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 148;
	        this.expression();
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
	        this.state = 150;
	        this.match(TrumplangParser.CONSTANT_DECL);
	        this.state = 151;
	        this.dataType();
	        this.state = 152;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 153;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 154;
	        this.expression();
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
	        this.state = 156;
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
	        this.state = 158;
	        this.match(TrumplangParser.FUNCTION_DECL);
	        this.state = 159;
	        localctx.funcName = this.match(TrumplangParser.IDENTIFIER);
	        this.state = 160;
	        localctx.praise = this.match(TrumplangParser.SUPERLATIVE);
	        this.state = 161;
	        this.match(TrumplangParser.PARAMS_ARGS_START);
	        this.state = 163;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 56)) & ~0x1f) === 0 && ((1 << (_la - 56)) & 63) !== 0)) {
	            this.state = 162;
	            this.parameterList();
	        }

	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 165;
	            this.match(TrumplangParser.RETURN_TYPE_DECL);
	            this.state = 166;
	            this.dataType();
	        }

	        this.state = 169;
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
	        this.state = 171;
	        this.match(TrumplangParser.OPEN_BLOCK);
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 264057874) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1073741917) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 66057) !== 0)) {
	            this.state = 172;
	            this.statement();
	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 178;
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
	        this.state = 180;
	        this.dataType();
	        this.state = 181;
	        localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	        localctx.paramName.push(localctx._VARIABLE);
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 182;
	            this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
	            this.state = 183;
	            this.dataType();
	            this.state = 184;
	            localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	            localctx.paramName.push(localctx._VARIABLE);
	            this.state = 190;
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
	        this.state = 191;
	        this.match(TrumplangParser.RETURN);
	        this.state = 192;
	        this.expression();
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
	        this.state = 194;
	        this.match(TrumplangParser.FUNC_CALL);
	        this.state = 195;
	        localctx.funcName = this.match(TrumplangParser.IDENTIFIER);
	        this.state = 196;
	        this.match(TrumplangParser.PARAMS_ARGS_START);
	        this.state = 198;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 197;
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
	        this.state = 200;
	        this.expression();
	        this.state = 205;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 201;
	                this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
	                this.state = 202;
	                this.expression(); 
	            }
	            this.state = 207;
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
	        this.state = 208;
	        this.match(TrumplangParser.IF_DECL);
	        this.state = 209;
	        this.expression();
	        this.state = 210;
	        this.statement();
	        this.state = 214;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 211;
	                this.elseIfStatement(); 
	            }
	            this.state = 216;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	        }

	        this.state = 218;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 217;
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
	        this.state = 220;
	        this.match(TrumplangParser.ELSE_IF_DECL);
	        this.state = 221;
	        this.expression();
	        this.state = 222;
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
	        this.state = 224;
	        this.match(TrumplangParser.ELSE_DECL);
	        this.state = 225;
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
	        this.state = 227;
	        this.match(TrumplangParser.WHILE_LOOP_DECL);
	        this.state = 228;
	        this.expression();
	        this.state = 229;
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
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(TrumplangParser.FOR_LOOP_DECL);
	        this.state = 232;
	        this.match(TrumplangParser.FOR_LOOP_WITH);
	        this.state = 233;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 234;
	        this.match(TrumplangParser.FROM_KEYWORD);
	        this.state = 235;
	        this.expression();
	        this.state = 236;
	        this.match(TrumplangParser.FOR_LOOP_TO);
	        this.state = 237;
	        this.expression();
	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 238;
	            this.match(TrumplangParser.FOR_LOOP_STEP);
	            this.state = 239;
	            this.expression();
	        }

	        this.state = 242;
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
	        this.state = 244;
	        this.match(TrumplangParser.FOR_EACH_LOOP_DECL);
	        this.state = 245;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 246;
	        this.match(TrumplangParser.FOR_EACH_FROM);
	        this.state = 247;
	        localctx.listName = this.match(TrumplangParser.VARIABLE);
	        this.state = 248;
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



	vetoStatement() {
	    let localctx = new VetoStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, TrumplangParser.RULE_vetoStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
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



	pardonStatement() {
	    let localctx = new PardonStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, TrumplangParser.RULE_pardonStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 252;
	        this.match(TrumplangParser.TRY_DECL);
	        this.state = 253;
	        this.blockStatement();
	        this.state = 254;
	        this.match(TrumplangParser.CATCH_DECL);
	        this.state = 256;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===73) {
	            this.state = 255;
	            localctx.errName = this.match(TrumplangParser.VARIABLE);
	        }

	        this.state = 258;
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



	impeachStatement() {
	    let localctx = new ImpeachStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, TrumplangParser.RULE_impeachStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(TrumplangParser.IMPEACH);
	        this.state = 261;
	        this.expression();
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
	    this.enterRule(localctx, 42, TrumplangParser.RULE_fireStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(TrumplangParser.FIRE);
	        this.state = 264;
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
	    this.enterRule(localctx, 44, TrumplangParser.RULE_executiveOrder);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 266;
	        this.match(TrumplangParser.EXEC_ORDER);
	        this.state = 267;
	        localctx.fromOp = this.operator();
	        this.state = 268;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 269;
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
	    this.enterRule(localctx, 46, TrumplangParser.RULE_supremeCourtOverrule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        this.match(TrumplangParser.SUPREME_COURT);
	        this.state = 272;
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
	    this.enterRule(localctx, 48, TrumplangParser.RULE_operator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
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
	    this.enterRule(localctx, 50, TrumplangParser.RULE_arrayDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.match(TrumplangParser.ARRAY_DECL);
	        this.state = 277;
	        localctx.arrayName = this.match(TrumplangParser.VARIABLE);
	        this.state = 278;
	        this.match(TrumplangParser.ARRAY_ELEMENTS_DECL);
	        this.state = 280;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 279;
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
	    this.enterRule(localctx, 52, TrumplangParser.RULE_arrayElements);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 282;
	        this.expression();
	        this.state = 287;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 283;
	                this.match(TrumplangParser.ARRAY_CHAIN);
	                this.state = 284;
	                this.expression(); 
	            }
	            this.state = 289;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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



	arrayAssignment() {
	    let localctx = new ArrayAssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, TrumplangParser.RULE_arrayAssignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        localctx.arrayName = this.match(TrumplangParser.VARIABLE);
	        this.state = 291;
	        this.match(TrumplangParser.ARRAY_ACCESS);
	        this.state = 292;
	        localctx.index = this.additiveExpression(0);
	        this.state = 293;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 294;
	        this.expression();
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
	    this.enterRule(localctx, 56, TrumplangParser.RULE_assignmentStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 297;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 298;
	        this.expression();
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
	    this.enterRule(localctx, 58, TrumplangParser.RULE_printStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.match(TrumplangParser.PRINT);
	        this.state = 301;
	        this.expression();
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
	    this.enterRule(localctx, 60, TrumplangParser.RULE_inputStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 303;
	        this.match(TrumplangParser.INPUT);
	        this.state = 304;
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
	    this.enterRule(localctx, 62, TrumplangParser.RULE_incrementStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this.match(TrumplangParser.MAKE_DECL);
	        this.state = 307;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 308;
	        this.match(TrumplangParser.INCREMENT_OP);
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
	    this.enterRule(localctx, 64, TrumplangParser.RULE_decrementStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this.match(TrumplangParser.MAKE_DECL);
	        this.state = 311;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 312;
	        this.match(TrumplangParser.DECREMENT_OP);
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, TrumplangParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this.equalityExpression(0);
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


	equalityExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new EqualityExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 68;
	    this.enterRecursionRule(localctx, 68, TrumplangParser.RULE_equalityExpression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 317;
	        this.logicalOrExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 327;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 325;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_equalityExpression);
	                    this.state = 319;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 320;
	                    this.match(TrumplangParser.EQUALS);
	                    this.state = 321;
	                    this.logicalOrExpression(0);
	                    break;

	                case 2:
	                    localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_equalityExpression);
	                    this.state = 322;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 323;
	                    this.match(TrumplangParser.NOT_EQUALS);
	                    this.state = 324;
	                    this.logicalOrExpression(0);
	                    break;

	                } 
	            }
	            this.state = 329;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
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


	logicalOrExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new LogicalOrExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 70;
	    this.enterRecursionRule(localctx, 70, TrumplangParser.RULE_logicalOrExpression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        this.logicalAndExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 338;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new LogicalOrExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_logicalOrExpression);
	                this.state = 333;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 334;
	                this.match(TrumplangParser.OR);
	                this.state = 335;
	                this.logicalAndExpression(0); 
	            }
	            this.state = 340;
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


	logicalAndExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new LogicalAndExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 72;
	    this.enterRecursionRule(localctx, 72, TrumplangParser.RULE_logicalAndExpression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 342;
	        this.comparisonExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 349;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new LogicalAndExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_logicalAndExpression);
	                this.state = 344;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 345;
	                this.match(TrumplangParser.AND);
	                this.state = 346;
	                this.comparisonExpression(0); 
	            }
	            this.state = 351;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
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


	comparisonExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ComparisonExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 74;
	    this.enterRecursionRule(localctx, 74, TrumplangParser.RULE_comparisonExpression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 353;
	        this.additiveExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 369;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 367;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ComparisonExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_comparisonExpression);
	                    this.state = 355;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 356;
	                    this.match(TrumplangParser.GREATER_THAN);
	                    this.state = 357;
	                    this.additiveExpression(0);
	                    break;

	                case 2:
	                    localctx = new ComparisonExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_comparisonExpression);
	                    this.state = 358;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 359;
	                    this.match(TrumplangParser.LESS_THAN);
	                    this.state = 360;
	                    this.additiveExpression(0);
	                    break;

	                case 3:
	                    localctx = new ComparisonExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_comparisonExpression);
	                    this.state = 361;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 362;
	                    this.match(TrumplangParser.GREATER_THAN_OR_EQUALS);
	                    this.state = 363;
	                    this.additiveExpression(0);
	                    break;

	                case 4:
	                    localctx = new ComparisonExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_comparisonExpression);
	                    this.state = 364;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 365;
	                    this.match(TrumplangParser.LESS_THAN_OR_EQUALS);
	                    this.state = 366;
	                    this.additiveExpression(0);
	                    break;

	                } 
	            }
	            this.state = 371;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
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


	additiveExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new AdditiveExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 76;
	    this.enterRecursionRule(localctx, 76, TrumplangParser.RULE_additiveExpression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        this.term(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 386;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 384;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_additiveExpression);
	                    this.state = 375;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 376;
	                    this.match(TrumplangParser.PLUS);
	                    this.state = 377;
	                    this.term(0);
	                    break;

	                case 2:
	                    localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_additiveExpression);
	                    this.state = 378;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 379;
	                    this.match(TrumplangParser.STRING_CONCAT);
	                    this.state = 380;
	                    this.term(0);
	                    break;

	                case 3:
	                    localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_additiveExpression);
	                    this.state = 381;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 382;
	                    this.match(TrumplangParser.MINUS);
	                    this.state = 383;
	                    this.term(0);
	                    break;

	                } 
	            }
	            this.state = 388;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
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
	    const _startState = 78;
	    this.enterRecursionRule(localctx, 78, TrumplangParser.RULE_term, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 390;
	        this.powerExpression();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 403;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 401;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TermContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
	                    this.state = 392;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 393;
	                    this.match(TrumplangParser.MULTIPLY);
	                    this.state = 394;
	                    this.powerExpression();
	                    break;

	                case 2:
	                    localctx = new TermContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
	                    this.state = 395;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 396;
	                    this.match(TrumplangParser.DIVIDE);
	                    this.state = 397;
	                    this.powerExpression();
	                    break;

	                case 3:
	                    localctx = new TermContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
	                    this.state = 398;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 399;
	                    this.match(TrumplangParser.MODULO);
	                    this.state = 400;
	                    this.powerExpression();
	                    break;

	                } 
	            }
	            this.state = 405;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
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
	    this.enterRule(localctx, 80, TrumplangParser.RULE_powerExpression);
	    try {
	        this.state = 411;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 406;
	            this.unaryExpression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 407;
	            this.unaryExpression();
	            this.state = 408;
	            this.match(TrumplangParser.POWER);
	            this.state = 409;
	            this.powerExpression();
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



	unaryExpression() {
	    let localctx = new UnaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, TrumplangParser.RULE_unaryExpression);
	    try {
	        this.state = 418;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 45:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 413;
	            this.match(TrumplangParser.NOT);
	            this.state = 414;
	            this.unaryExpression();
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 415;
	            this.match(TrumplangParser.MINUS);
	            this.state = 416;
	            this.unaryExpression();
	            break;
	        case 5:
	        case 18:
	        case 68:
	        case 73:
	        case 75:
	        case 76:
	        case 77:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 417;
	            this.primaryExpression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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
	    this.enterRule(localctx, 84, TrumplangParser.RULE_primaryExpression);
	    try {
	        this.state = 433;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 420;
	            this.match(TrumplangParser.OPEN_PAREN);
	            this.state = 421;
	            this.expression();
	            this.state = 422;
	            this.match(TrumplangParser.CLOSE_PAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 424;
	            this.match(TrumplangParser.VARIABLE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 425;
	            this.match(TrumplangParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 426;
	            this.match(TrumplangParser.NUMBER);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 427;
	            this.match(TrumplangParser.BOOLEAN);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 428;
	            this.functionCall();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 429;
	            this.arrayAccess();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 430;
	            this.dealAccess();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 431;
	            this.dealDeclaration();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 432;
	            this.arrayLiteral();
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



	arrayLiteral() {
	    let localctx = new ArrayLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, TrumplangParser.RULE_arrayLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 435;
	        this.match(TrumplangParser.ARRAY_ELEMENTS_DECL);
	        this.state = 436;
	        this.arrayElements();
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
	    this.enterRule(localctx, 88, TrumplangParser.RULE_arrayAccess);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 438;
	        localctx.arrayName = this.match(TrumplangParser.VARIABLE);
	        this.state = 439;
	        this.match(TrumplangParser.ARRAY_ACCESS);
	        this.state = 440;
	        this.additiveExpression(0);
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
	    this.enterRule(localctx, 90, TrumplangParser.RULE_dealField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 442;
	        this.dataType();
	        this.state = 443;
	        localctx.fieldName = this.match(TrumplangParser.VARIABLE);
	        this.state = 444;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 445;
	        this.expression();
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
	    this.enterRule(localctx, 92, TrumplangParser.RULE_dealDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 447;
	        this.match(TrumplangParser.OPEN_PAREN);
	        this.state = 448;
	        this.dealField();
	        this.state = 453;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===70) {
	            this.state = 449;
	            this.match(TrumplangParser.AMPERSAND);
	            this.state = 450;
	            this.dealField();
	            this.state = 455;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 456;
	        this.match(TrumplangParser.CLOSE_PAREN);
	        this.state = 457;
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
	    this.enterRule(localctx, 94, TrumplangParser.RULE_dealAccess);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 459;
	        localctx.dealName = this.match(TrumplangParser.VARIABLE);
	        this.state = 462; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 460;
	        		this.match(TrumplangParser.DEAL_ACCESS_KEYWORD);
	        		this.state = 461;
	        		localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	        		localctx.fieldName.push(localctx._VARIABLE);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 464; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,28, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	dealAssignment() {
	    let localctx = new DealAssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, TrumplangParser.RULE_dealAssignment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 466;
	        localctx.dealName = this.match(TrumplangParser.VARIABLE);
	        this.state = 469; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 467;
	            this.match(TrumplangParser.DEAL_ACCESS_KEYWORD);
	            this.state = 468;
	            localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	            localctx.fieldName.push(localctx._VARIABLE);
	            this.state = 471; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===37);
	        this.state = 473;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 474;
	        this.expression();
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



	factCheckStatement() {
	    let localctx = new FactCheckStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, TrumplangParser.RULE_factCheckStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 476;
	        this.match(TrumplangParser.ASSERT_CALL);
	        this.state = 477;
	        this.expression();
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
	    this.enterRule(localctx, 100, TrumplangParser.RULE_importStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 479;
	        this.match(TrumplangParser.IMPORT);
	        this.state = 480;
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
	    this.enterRule(localctx, 102, TrumplangParser.RULE_selectiveImport);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 482;
	        this.match(TrumplangParser.SELECTIVE_IMPORT_DECL);
	        this.state = 483;
	        localctx._IDENTIFIER = this.match(TrumplangParser.IDENTIFIER);
	        localctx.importName.push(localctx._IDENTIFIER);
	        this.state = 488;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 484;
	            this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
	            this.state = 485;
	            localctx._IDENTIFIER = this.match(TrumplangParser.IDENTIFIER);
	            localctx.importName.push(localctx._IDENTIFIER);
	            this.state = 490;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 491;
	        this.match(TrumplangParser.FROM_KEYWORD);
	        this.state = 492;
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
TrumplangParser.IF_DECL = 1;
TrumplangParser.ELSE_IF_DECL = 2;
TrumplangParser.ELSE_DECL = 3;
TrumplangParser.ARRAY_DECL = 4;
TrumplangParser.ARRAY_ELEMENTS_DECL = 5;
TrumplangParser.ARRAY_ACCESS = 6;
TrumplangParser.ARRAY_CHAIN = 7;
TrumplangParser.PROG_START = 8;
TrumplangParser.PROG_END = 9;
TrumplangParser.FUNCTION_DECL = 10;
TrumplangParser.SUPERLATIVE = 11;
TrumplangParser.VARIABLE_DECL = 12;
TrumplangParser.CONSTANT_DECL = 13;
TrumplangParser.PARAMS_ARGS_START = 14;
TrumplangParser.PARAMS_ARGS_CHAIN = 15;
TrumplangParser.RETURN = 16;
TrumplangParser.RETURN_TYPE_DECL = 17;
TrumplangParser.FUNC_CALL = 18;
TrumplangParser.BREAK = 19;
TrumplangParser.FIRE = 20;
TrumplangParser.TRY_DECL = 21;
TrumplangParser.CATCH_DECL = 22;
TrumplangParser.IMPEACH = 23;
TrumplangParser.EXEC_ORDER = 24;
TrumplangParser.SUPREME_COURT = 25;
TrumplangParser.WHILE_LOOP_DECL = 26;
TrumplangParser.FOR_LOOP_DECL = 27;
TrumplangParser.FOR_LOOP_WITH = 28;
TrumplangParser.FROM_KEYWORD = 29;
TrumplangParser.FOR_LOOP_TO = 30;
TrumplangParser.FOR_LOOP_STEP = 31;
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
TrumplangParser.MAKE_DECL = 64;
TrumplangParser.INCREMENT_OP = 65;
TrumplangParser.DECREMENT_OP = 66;
TrumplangParser.SELECTIVE_IMPORT_DECL = 67;
TrumplangParser.OPEN_PAREN = 68;
TrumplangParser.CLOSE_PAREN = 69;
TrumplangParser.AMPERSAND = 70;
TrumplangParser.DEAL_DECLARE = 71;
TrumplangParser.VAR_DECLARE = 72;
TrumplangParser.VARIABLE = 73;
TrumplangParser.IDENTIFIER = 74;
TrumplangParser.STRING = 75;
TrumplangParser.NUMBER = 76;
TrumplangParser.BOOLEAN = 77;
TrumplangParser.TRUE = 78;
TrumplangParser.FALSE = 79;
TrumplangParser.COMMENT = 80;
TrumplangParser.FILEPATH = 81;
TrumplangParser.WS = 82;

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
TrumplangParser.RULE_vetoStatement = 18;
TrumplangParser.RULE_pardonStatement = 19;
TrumplangParser.RULE_impeachStatement = 20;
TrumplangParser.RULE_fireStatement = 21;
TrumplangParser.RULE_executiveOrder = 22;
TrumplangParser.RULE_supremeCourtOverrule = 23;
TrumplangParser.RULE_operator = 24;
TrumplangParser.RULE_arrayDeclaration = 25;
TrumplangParser.RULE_arrayElements = 26;
TrumplangParser.RULE_arrayAssignment = 27;
TrumplangParser.RULE_assignmentStatement = 28;
TrumplangParser.RULE_printStatement = 29;
TrumplangParser.RULE_inputStatement = 30;
TrumplangParser.RULE_incrementStatement = 31;
TrumplangParser.RULE_decrementStatement = 32;
TrumplangParser.RULE_expression = 33;
TrumplangParser.RULE_equalityExpression = 34;
TrumplangParser.RULE_logicalOrExpression = 35;
TrumplangParser.RULE_logicalAndExpression = 36;
TrumplangParser.RULE_comparisonExpression = 37;
TrumplangParser.RULE_additiveExpression = 38;
TrumplangParser.RULE_term = 39;
TrumplangParser.RULE_powerExpression = 40;
TrumplangParser.RULE_unaryExpression = 41;
TrumplangParser.RULE_primaryExpression = 42;
TrumplangParser.RULE_arrayLiteral = 43;
TrumplangParser.RULE_arrayAccess = 44;
TrumplangParser.RULE_dealField = 45;
TrumplangParser.RULE_dealDeclaration = 46;
TrumplangParser.RULE_dealAccess = 47;
TrumplangParser.RULE_dealAssignment = 48;
TrumplangParser.RULE_factCheckStatement = 49;
TrumplangParser.RULE_importStatement = 50;
TrumplangParser.RULE_selectiveImport = 51;

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

	arrayAssignment() {
	    return this.getTypedRuleContext(ArrayAssignmentContext,0);
	};

	dealAssignment() {
	    return this.getTypedRuleContext(DealAssignmentContext,0);
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

	vetoStatement() {
	    return this.getTypedRuleContext(VetoStatementContext,0);
	};

	pardonStatement() {
	    return this.getTypedRuleContext(PardonStatementContext,0);
	};

	impeachStatement() {
	    return this.getTypedRuleContext(ImpeachStatementContext,0);
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

	factCheckStatement() {
	    return this.getTypedRuleContext(FactCheckStatementContext,0);
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

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	VARIABLE() {
	    return this.getToken(TrumplangParser.VARIABLE, 0);
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
        this.praise = null;
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

	SUPERLATIVE() {
	    return this.getToken(TrumplangParser.SUPERLATIVE, 0);
	};

	parameterList() {
	    return this.getTypedRuleContext(ParameterListContext,0);
	};

	RETURN_TYPE_DECL() {
	    return this.getToken(TrumplangParser.RETURN_TYPE_DECL, 0);
	};

	dataType() {
	    return this.getTypedRuleContext(DataTypeContext,0);
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

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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

	FROM_KEYWORD() {
	    return this.getToken(TrumplangParser.FROM_KEYWORD, 0);
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

	FOR_LOOP_STEP() {
	    return this.getToken(TrumplangParser.FOR_LOOP_STEP, 0);
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



class VetoStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_vetoStatement;
    }

	BREAK() {
	    return this.getToken(TrumplangParser.BREAK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterVetoStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitVetoStatement(this);
		}
	}


}



class PardonStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_pardonStatement;
        this.errName = null;
    }

	TRY_DECL() {
	    return this.getToken(TrumplangParser.TRY_DECL, 0);
	};

	blockStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockStatementContext);
	    } else {
	        return this.getTypedRuleContext(BlockStatementContext,i);
	    }
	};

	CATCH_DECL() {
	    return this.getToken(TrumplangParser.CATCH_DECL, 0);
	};

	VARIABLE() {
	    return this.getToken(TrumplangParser.VARIABLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterPardonStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitPardonStatement(this);
		}
	}


}



class ImpeachStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_impeachStatement;
    }

	IMPEACH() {
	    return this.getToken(TrumplangParser.IMPEACH, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterImpeachStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitImpeachStatement(this);
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



class ArrayAssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_arrayAssignment;
        this.arrayName = null;
        this.index = null;
    }

	ARRAY_ACCESS() {
	    return this.getToken(TrumplangParser.ARRAY_ACCESS, 0);
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

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterArrayAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitArrayAssignment(this);
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

	MAKE_DECL() {
	    return this.getToken(TrumplangParser.MAKE_DECL, 0);
	};

	INCREMENT_OP() {
	    return this.getToken(TrumplangParser.INCREMENT_OP, 0);
	};

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

	MAKE_DECL() {
	    return this.getToken(TrumplangParser.MAKE_DECL, 0);
	};

	DECREMENT_OP() {
	    return this.getToken(TrumplangParser.DECREMENT_OP, 0);
	};

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

	equalityExpression() {
	    return this.getTypedRuleContext(EqualityExpressionContext,0);
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



class EqualityExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_equalityExpression;
    }

	logicalOrExpression() {
	    return this.getTypedRuleContext(LogicalOrExpressionContext,0);
	};

	equalityExpression() {
	    return this.getTypedRuleContext(EqualityExpressionContext,0);
	};

	EQUALS() {
	    return this.getToken(TrumplangParser.EQUALS, 0);
	};

	NOT_EQUALS() {
	    return this.getToken(TrumplangParser.NOT_EQUALS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterEqualityExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitEqualityExpression(this);
		}
	}


}



class LogicalOrExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_logicalOrExpression;
    }

	logicalAndExpression() {
	    return this.getTypedRuleContext(LogicalAndExpressionContext,0);
	};

	logicalOrExpression() {
	    return this.getTypedRuleContext(LogicalOrExpressionContext,0);
	};

	OR() {
	    return this.getToken(TrumplangParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterLogicalOrExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitLogicalOrExpression(this);
		}
	}


}



class LogicalAndExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_logicalAndExpression;
    }

	comparisonExpression() {
	    return this.getTypedRuleContext(ComparisonExpressionContext,0);
	};

	logicalAndExpression() {
	    return this.getTypedRuleContext(LogicalAndExpressionContext,0);
	};

	AND() {
	    return this.getToken(TrumplangParser.AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterLogicalAndExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitLogicalAndExpression(this);
		}
	}


}



class ComparisonExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_comparisonExpression;
    }

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
	};

	comparisonExpression() {
	    return this.getTypedRuleContext(ComparisonExpressionContext,0);
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
	        listener.enterComparisonExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitComparisonExpression(this);
		}
	}


}



class AdditiveExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_additiveExpression;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
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
	        listener.enterAdditiveExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitAdditiveExpression(this);
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

	unaryExpression() {
	    return this.getTypedRuleContext(UnaryExpressionContext,0);
	};

	POWER() {
	    return this.getToken(TrumplangParser.POWER, 0);
	};

	powerExpression() {
	    return this.getTypedRuleContext(PowerExpressionContext,0);
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



class UnaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_unaryExpression;
    }

	NOT() {
	    return this.getToken(TrumplangParser.NOT, 0);
	};

	unaryExpression() {
	    return this.getTypedRuleContext(UnaryExpressionContext,0);
	};

	MINUS() {
	    return this.getToken(TrumplangParser.MINUS, 0);
	};

	primaryExpression() {
	    return this.getTypedRuleContext(PrimaryExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterUnaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitUnaryExpression(this);
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

	OPEN_PAREN() {
	    return this.getToken(TrumplangParser.OPEN_PAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CLOSE_PAREN() {
	    return this.getToken(TrumplangParser.CLOSE_PAREN, 0);
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

	dealDeclaration() {
	    return this.getTypedRuleContext(DealDeclarationContext,0);
	};

	arrayLiteral() {
	    return this.getTypedRuleContext(ArrayLiteralContext,0);
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



class ArrayLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_arrayLiteral;
    }

	ARRAY_ELEMENTS_DECL() {
	    return this.getToken(TrumplangParser.ARRAY_ELEMENTS_DECL, 0);
	};

	arrayElements() {
	    return this.getTypedRuleContext(ArrayElementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterArrayLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitArrayLiteral(this);
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

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
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

	OPEN_PAREN() {
	    return this.getToken(TrumplangParser.OPEN_PAREN, 0);
	};

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

	CLOSE_PAREN() {
	    return this.getToken(TrumplangParser.CLOSE_PAREN, 0);
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
        this._VARIABLE = null;
        this.fieldName = [];
    }

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


	DEAL_ACCESS_KEYWORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TrumplangParser.DEAL_ACCESS_KEYWORD);
	    } else {
	        return this.getToken(TrumplangParser.DEAL_ACCESS_KEYWORD, i);
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



class DealAssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_dealAssignment;
        this.dealName = null;
        this._VARIABLE = null;
        this.fieldName = [];
    }

	ASSIGNMENT() {
	    return this.getToken(TrumplangParser.ASSIGNMENT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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


	DEAL_ACCESS_KEYWORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(TrumplangParser.DEAL_ACCESS_KEYWORD);
	    } else {
	        return this.getToken(TrumplangParser.DEAL_ACCESS_KEYWORD, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterDealAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitDealAssignment(this);
		}
	}


}



class FactCheckStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_factCheckStatement;
    }

	ASSERT_CALL() {
	    return this.getToken(TrumplangParser.ASSERT_CALL, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterFactCheckStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitFactCheckStatement(this);
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

	SELECTIVE_IMPORT_DECL() {
	    return this.getToken(TrumplangParser.SELECTIVE_IMPORT_DECL, 0);
	};

	FROM_KEYWORD() {
	    return this.getToken(TrumplangParser.FROM_KEYWORD, 0);
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
TrumplangParser.VetoStatementContext = VetoStatementContext; 
TrumplangParser.PardonStatementContext = PardonStatementContext; 
TrumplangParser.ImpeachStatementContext = ImpeachStatementContext; 
TrumplangParser.FireStatementContext = FireStatementContext; 
TrumplangParser.ExecutiveOrderContext = ExecutiveOrderContext; 
TrumplangParser.SupremeCourtOverruleContext = SupremeCourtOverruleContext; 
TrumplangParser.OperatorContext = OperatorContext; 
TrumplangParser.ArrayDeclarationContext = ArrayDeclarationContext; 
TrumplangParser.ArrayElementsContext = ArrayElementsContext; 
TrumplangParser.ArrayAssignmentContext = ArrayAssignmentContext; 
TrumplangParser.AssignmentStatementContext = AssignmentStatementContext; 
TrumplangParser.PrintStatementContext = PrintStatementContext; 
TrumplangParser.InputStatementContext = InputStatementContext; 
TrumplangParser.IncrementStatementContext = IncrementStatementContext; 
TrumplangParser.DecrementStatementContext = DecrementStatementContext; 
TrumplangParser.ExpressionContext = ExpressionContext; 
TrumplangParser.EqualityExpressionContext = EqualityExpressionContext; 
TrumplangParser.LogicalOrExpressionContext = LogicalOrExpressionContext; 
TrumplangParser.LogicalAndExpressionContext = LogicalAndExpressionContext; 
TrumplangParser.ComparisonExpressionContext = ComparisonExpressionContext; 
TrumplangParser.AdditiveExpressionContext = AdditiveExpressionContext; 
TrumplangParser.TermContext = TermContext; 
TrumplangParser.PowerExpressionContext = PowerExpressionContext; 
TrumplangParser.UnaryExpressionContext = UnaryExpressionContext; 
TrumplangParser.PrimaryExpressionContext = PrimaryExpressionContext; 
TrumplangParser.ArrayLiteralContext = ArrayLiteralContext; 
TrumplangParser.ArrayAccessContext = ArrayAccessContext; 
TrumplangParser.DealFieldContext = DealFieldContext; 
TrumplangParser.DealDeclarationContext = DealDeclarationContext; 
TrumplangParser.DealAccessContext = DealAccessContext; 
TrumplangParser.DealAssignmentContext = DealAssignmentContext; 
TrumplangParser.FactCheckStatementContext = FactCheckStatementContext; 
TrumplangParser.ImportStatementContext = ImportStatementContext; 
TrumplangParser.SelectiveImportContext = SelectiveImportContext; 

// jshint ignore: start
import antlr4 from 'antlr4';
import TrumplangListener from './TrumplangListener.js';
const serializedATN = [4,1,88,519,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,1,0,1,0,4,0,113,
8,0,11,0,12,0,114,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,3,1,150,8,1,1,1,3,1,153,8,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,
4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,6,3,6,176,8,6,1,6,1,6,3,6,180,
8,6,1,6,1,6,3,6,184,8,6,1,7,1,7,5,7,188,8,7,10,7,12,7,191,9,7,1,7,1,7,1,
8,1,8,1,8,1,8,1,8,1,8,5,8,201,8,8,10,8,12,8,204,9,8,1,9,1,9,1,9,1,10,1,10,
1,10,1,10,3,10,213,8,10,1,11,1,11,1,11,5,11,218,8,11,10,11,12,11,221,9,11,
1,12,1,12,1,12,1,12,5,12,227,8,12,10,12,12,12,230,9,12,1,12,3,12,233,8,12,
1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,
16,1,16,1,16,1,16,1,16,1,16,3,16,255,8,16,1,16,1,16,1,17,1,17,1,17,1,17,
1,17,1,17,1,18,1,18,1,19,1,19,1,19,1,19,3,19,271,8,19,1,19,1,19,1,20,1,20,
1,20,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,
25,1,25,1,25,1,25,3,25,295,8,25,1,26,1,26,1,26,5,26,300,8,26,10,26,12,26,
303,9,26,1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,
1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,33,1,33,1,34,1,
34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,5,34,340,8,34,10,34,12,34,343,9,34,
1,35,1,35,1,35,1,35,1,35,1,35,5,35,351,8,35,10,35,12,35,354,9,35,1,36,1,
36,1,36,1,36,1,36,1,36,5,36,362,8,36,10,36,12,36,365,9,36,1,37,1,37,1,37,
1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,5,37,382,8,37,
10,37,12,37,385,9,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,
38,1,38,5,38,399,8,38,10,38,12,38,402,9,38,1,39,1,39,1,39,1,39,1,39,1,39,
1,39,1,39,1,39,1,39,1,39,1,39,5,39,416,8,39,10,39,12,39,419,9,39,1,40,1,
40,1,40,1,40,1,40,3,40,426,8,40,1,41,1,41,1,41,1,41,1,41,3,41,433,8,41,1,
42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,
449,8,42,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,46,
1,46,1,46,1,46,5,46,467,8,46,10,46,12,46,470,9,46,1,46,1,46,1,46,1,47,1,
47,1,47,4,47,478,8,47,11,47,12,47,479,1,48,1,48,1,48,4,48,485,8,48,11,48,
12,48,486,1,48,1,48,1,48,1,49,1,49,1,49,1,50,1,50,1,50,1,51,1,51,1,51,1,
52,1,52,1,52,1,53,1,53,1,53,1,54,1,54,1,54,1,54,5,54,511,8,54,10,54,12,54,
514,9,54,1,54,1,54,1,54,1,54,0,6,68,70,72,74,76,78,55,0,2,4,6,8,10,12,14,
16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,
64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,
0,2,1,0,61,66,2,0,53,54,57,58,539,0,110,1,0,0,0,2,149,1,0,0,0,4,154,1,0,
0,0,6,156,1,0,0,0,8,162,1,0,0,0,10,168,1,0,0,0,12,170,1,0,0,0,14,185,1,0,
0,0,16,194,1,0,0,0,18,205,1,0,0,0,20,208,1,0,0,0,22,214,1,0,0,0,24,222,1,
0,0,0,26,234,1,0,0,0,28,238,1,0,0,0,30,241,1,0,0,0,32,245,1,0,0,0,34,258,
1,0,0,0,36,264,1,0,0,0,38,266,1,0,0,0,40,274,1,0,0,0,42,277,1,0,0,0,44,280,
1,0,0,0,46,285,1,0,0,0,48,288,1,0,0,0,50,290,1,0,0,0,52,296,1,0,0,0,54,304,
1,0,0,0,56,310,1,0,0,0,58,314,1,0,0,0,60,317,1,0,0,0,62,320,1,0,0,0,64,324,
1,0,0,0,66,328,1,0,0,0,68,330,1,0,0,0,70,344,1,0,0,0,72,355,1,0,0,0,74,366,
1,0,0,0,76,386,1,0,0,0,78,403,1,0,0,0,80,425,1,0,0,0,82,432,1,0,0,0,84,448,
1,0,0,0,86,450,1,0,0,0,88,453,1,0,0,0,90,457,1,0,0,0,92,462,1,0,0,0,94,474,
1,0,0,0,96,481,1,0,0,0,98,491,1,0,0,0,100,494,1,0,0,0,102,497,1,0,0,0,104,
500,1,0,0,0,106,503,1,0,0,0,108,506,1,0,0,0,110,112,5,8,0,0,111,113,3,2,
1,0,112,111,1,0,0,0,113,114,1,0,0,0,114,112,1,0,0,0,114,115,1,0,0,0,115,
116,1,0,0,0,116,117,5,9,0,0,117,1,1,0,0,0,118,150,3,106,53,0,119,150,3,14,
7,0,120,150,3,108,54,0,121,150,3,6,3,0,122,150,3,8,4,0,123,150,3,12,6,0,
124,150,3,20,10,0,125,150,3,24,12,0,126,150,3,30,15,0,127,150,3,32,16,0,
128,150,3,34,17,0,129,150,3,50,25,0,130,150,3,54,27,0,131,150,3,96,48,0,
132,150,3,56,28,0,133,150,3,62,31,0,134,150,3,64,32,0,135,150,3,58,29,0,
136,150,3,60,30,0,137,150,3,18,9,0,138,150,3,4,2,0,139,150,3,36,18,0,140,
150,3,38,19,0,141,150,3,40,20,0,142,150,3,42,21,0,143,150,3,44,22,0,144,
150,3,46,23,0,145,150,3,104,52,0,146,150,3,98,49,0,147,150,3,102,51,0,148,
150,3,100,50,0,149,118,1,0,0,0,149,119,1,0,0,0,149,120,1,0,0,0,149,121,1,
0,0,0,149,122,1,0,0,0,149,123,1,0,0,0,149,124,1,0,0,0,149,125,1,0,0,0,149,
126,1,0,0,0,149,127,1,0,0,0,149,128,1,0,0,0,149,129,1,0,0,0,149,130,1,0,
0,0,149,131,1,0,0,0,149,132,1,0,0,0,149,133,1,0,0,0,149,134,1,0,0,0,149,
135,1,0,0,0,149,136,1,0,0,0,149,137,1,0,0,0,149,138,1,0,0,0,149,139,1,0,
0,0,149,140,1,0,0,0,149,141,1,0,0,0,149,142,1,0,0,0,149,143,1,0,0,0,149,
144,1,0,0,0,149,145,1,0,0,0,149,146,1,0,0,0,149,147,1,0,0,0,149,148,1,0,
0,0,150,152,1,0,0,0,151,153,5,20,0,0,152,151,1,0,0,0,152,153,1,0,0,0,153,
3,1,0,0,0,154,155,5,87,0,0,155,5,1,0,0,0,156,157,5,12,0,0,157,158,3,10,5,
0,158,159,5,78,0,0,159,160,5,55,0,0,160,161,3,66,33,0,161,7,1,0,0,0,162,
163,5,13,0,0,163,164,3,10,5,0,164,165,5,78,0,0,165,166,5,55,0,0,166,167,
3,66,33,0,167,9,1,0,0,0,168,169,7,0,0,0,169,11,1,0,0,0,170,171,5,10,0,0,
171,172,5,79,0,0,172,173,5,11,0,0,173,175,5,14,0,0,174,176,3,16,8,0,175,
174,1,0,0,0,175,176,1,0,0,0,176,179,1,0,0,0,177,178,5,17,0,0,178,180,3,10,
5,0,179,177,1,0,0,0,179,180,1,0,0,0,180,183,1,0,0,0,181,184,3,14,7,0,182,
184,5,36,0,0,183,181,1,0,0,0,183,182,1,0,0,0,184,13,1,0,0,0,185,189,5,67,
0,0,186,188,3,2,1,0,187,186,1,0,0,0,188,191,1,0,0,0,189,187,1,0,0,0,189,
190,1,0,0,0,190,192,1,0,0,0,191,189,1,0,0,0,192,193,5,68,0,0,193,15,1,0,
0,0,194,195,3,10,5,0,195,202,5,78,0,0,196,197,5,15,0,0,197,198,3,10,5,0,
198,199,5,78,0,0,199,201,1,0,0,0,200,196,1,0,0,0,201,204,1,0,0,0,202,200,
1,0,0,0,202,203,1,0,0,0,203,17,1,0,0,0,204,202,1,0,0,0,205,206,5,16,0,0,
206,207,3,66,33,0,207,19,1,0,0,0,208,209,5,18,0,0,209,210,5,79,0,0,210,212,
5,14,0,0,211,213,3,22,11,0,212,211,1,0,0,0,212,213,1,0,0,0,213,21,1,0,0,
0,214,219,3,66,33,0,215,216,5,15,0,0,216,218,3,66,33,0,217,215,1,0,0,0,218,
221,1,0,0,0,219,217,1,0,0,0,219,220,1,0,0,0,220,23,1,0,0,0,221,219,1,0,0,
0,222,223,5,1,0,0,223,224,3,66,33,0,224,228,3,2,1,0,225,227,3,26,13,0,226,
225,1,0,0,0,227,230,1,0,0,0,228,226,1,0,0,0,228,229,1,0,0,0,229,232,1,0,
0,0,230,228,1,0,0,0,231,233,3,28,14,0,232,231,1,0,0,0,232,233,1,0,0,0,233,
25,1,0,0,0,234,235,5,2,0,0,235,236,3,66,33,0,236,237,3,2,1,0,237,27,1,0,
0,0,238,239,5,3,0,0,239,240,3,2,1,0,240,29,1,0,0,0,241,242,5,27,0,0,242,
243,3,66,33,0,243,244,3,14,7,0,244,31,1,0,0,0,245,246,5,28,0,0,246,247,5,
29,0,0,247,248,5,78,0,0,248,249,5,30,0,0,249,250,3,66,33,0,250,251,5,31,
0,0,251,254,3,66,33,0,252,253,5,32,0,0,253,255,3,66,33,0,254,252,1,0,0,0,
254,255,1,0,0,0,255,256,1,0,0,0,256,257,3,14,7,0,257,33,1,0,0,0,258,259,
5,37,0,0,259,260,5,78,0,0,260,261,5,38,0,0,261,262,5,78,0,0,262,263,3,14,
7,0,263,35,1,0,0,0,264,265,5,19,0,0,265,37,1,0,0,0,266,267,5,22,0,0,267,
268,3,14,7,0,268,270,5,23,0,0,269,271,5,78,0,0,270,269,1,0,0,0,270,271,1,
0,0,0,271,272,1,0,0,0,272,273,3,14,7,0,273,39,1,0,0,0,274,275,5,24,0,0,275,
276,3,66,33,0,276,41,1,0,0,0,277,278,5,21,0,0,278,279,5,79,0,0,279,43,1,
0,0,0,280,281,5,25,0,0,281,282,3,48,24,0,282,283,5,55,0,0,283,284,3,48,24,
0,284,45,1,0,0,0,285,286,5,26,0,0,286,287,3,48,24,0,287,47,1,0,0,0,288,289,
7,1,0,0,289,49,1,0,0,0,290,291,5,4,0,0,291,292,5,78,0,0,292,294,5,5,0,0,
293,295,3,52,26,0,294,293,1,0,0,0,294,295,1,0,0,0,295,51,1,0,0,0,296,301,
3,66,33,0,297,298,5,7,0,0,298,300,3,66,33,0,299,297,1,0,0,0,300,303,1,0,
0,0,301,299,1,0,0,0,301,302,1,0,0,0,302,53,1,0,0,0,303,301,1,0,0,0,304,305,
5,78,0,0,305,306,5,6,0,0,306,307,3,76,38,0,307,308,5,55,0,0,308,309,3,66,
33,0,309,55,1,0,0,0,310,311,5,78,0,0,311,312,5,55,0,0,312,313,3,66,33,0,
313,57,1,0,0,0,314,315,5,39,0,0,315,316,3,66,33,0,316,59,1,0,0,0,317,318,
5,40,0,0,318,319,5,78,0,0,319,61,1,0,0,0,320,321,5,69,0,0,321,322,5,78,0,
0,322,323,5,70,0,0,323,63,1,0,0,0,324,325,5,69,0,0,325,326,5,78,0,0,326,
327,5,71,0,0,327,65,1,0,0,0,328,329,3,68,34,0,329,67,1,0,0,0,330,331,6,34,
-1,0,331,332,3,70,35,0,332,341,1,0,0,0,333,334,10,2,0,0,334,335,5,44,0,0,
335,340,3,70,35,0,336,337,10,1,0,0,337,338,5,45,0,0,338,340,3,70,35,0,339,
333,1,0,0,0,339,336,1,0,0,0,340,343,1,0,0,0,341,339,1,0,0,0,341,342,1,0,
0,0,342,69,1,0,0,0,343,341,1,0,0,0,344,345,6,35,-1,0,345,346,3,72,36,0,346,
352,1,0,0,0,347,348,10,1,0,0,348,349,5,52,0,0,349,351,3,72,36,0,350,347,
1,0,0,0,351,354,1,0,0,0,352,350,1,0,0,0,352,353,1,0,0,0,353,71,1,0,0,0,354,
352,1,0,0,0,355,356,6,36,-1,0,356,357,3,74,37,0,357,363,1,0,0,0,358,359,
10,1,0,0,359,360,5,51,0,0,360,362,3,74,37,0,361,358,1,0,0,0,362,365,1,0,
0,0,363,361,1,0,0,0,363,364,1,0,0,0,364,73,1,0,0,0,365,363,1,0,0,0,366,367,
6,37,-1,0,367,368,3,76,38,0,368,383,1,0,0,0,369,370,10,4,0,0,370,371,5,46,
0,0,371,382,3,76,38,0,372,373,10,3,0,0,373,374,5,48,0,0,374,382,3,76,38,
0,375,376,10,2,0,0,376,377,5,47,0,0,377,382,3,76,38,0,378,379,10,1,0,0,379,
380,5,49,0,0,380,382,3,76,38,0,381,369,1,0,0,0,381,372,1,0,0,0,381,375,1,
0,0,0,381,378,1,0,0,0,382,385,1,0,0,0,383,381,1,0,0,0,383,384,1,0,0,0,384,
75,1,0,0,0,385,383,1,0,0,0,386,387,6,38,-1,0,387,388,3,78,39,0,388,400,1,
0,0,0,389,390,10,3,0,0,390,391,5,53,0,0,391,399,3,78,39,0,392,393,10,2,0,
0,393,394,5,56,0,0,394,399,3,78,39,0,395,396,10,1,0,0,396,397,5,54,0,0,397,
399,3,78,39,0,398,389,1,0,0,0,398,392,1,0,0,0,398,395,1,0,0,0,399,402,1,
0,0,0,400,398,1,0,0,0,400,401,1,0,0,0,401,77,1,0,0,0,402,400,1,0,0,0,403,
404,6,39,-1,0,404,405,3,80,40,0,405,417,1,0,0,0,406,407,10,3,0,0,407,408,
5,57,0,0,408,416,3,80,40,0,409,410,10,2,0,0,410,411,5,58,0,0,411,416,3,80,
40,0,412,413,10,1,0,0,413,414,5,59,0,0,414,416,3,80,40,0,415,406,1,0,0,0,
415,409,1,0,0,0,415,412,1,0,0,0,416,419,1,0,0,0,417,415,1,0,0,0,417,418,
1,0,0,0,418,79,1,0,0,0,419,417,1,0,0,0,420,426,3,82,41,0,421,422,3,82,41,
0,422,423,5,60,0,0,423,424,3,80,40,0,424,426,1,0,0,0,425,420,1,0,0,0,425,
421,1,0,0,0,426,81,1,0,0,0,427,428,5,50,0,0,428,433,3,82,41,0,429,430,5,
54,0,0,430,433,3,82,41,0,431,433,3,84,42,0,432,427,1,0,0,0,432,429,1,0,0,
0,432,431,1,0,0,0,433,83,1,0,0,0,434,435,5,73,0,0,435,436,3,66,33,0,436,
437,5,74,0,0,437,449,1,0,0,0,438,449,5,78,0,0,439,449,5,81,0,0,440,449,5,
82,0,0,441,449,5,83,0,0,442,449,3,20,10,0,443,449,3,88,44,0,444,449,3,94,
47,0,445,449,3,92,46,0,446,449,3,86,43,0,447,449,5,86,0,0,448,434,1,0,0,
0,448,438,1,0,0,0,448,439,1,0,0,0,448,440,1,0,0,0,448,441,1,0,0,0,448,442,
1,0,0,0,448,443,1,0,0,0,448,444,1,0,0,0,448,445,1,0,0,0,448,446,1,0,0,0,
448,447,1,0,0,0,449,85,1,0,0,0,450,451,5,5,0,0,451,452,3,52,26,0,452,87,
1,0,0,0,453,454,5,78,0,0,454,455,5,6,0,0,455,456,3,76,38,0,456,89,1,0,0,
0,457,458,3,10,5,0,458,459,5,78,0,0,459,460,5,55,0,0,460,461,3,66,33,0,461,
91,1,0,0,0,462,463,5,73,0,0,463,468,3,90,45,0,464,465,5,75,0,0,465,467,3,
90,45,0,466,464,1,0,0,0,467,470,1,0,0,0,468,466,1,0,0,0,468,469,1,0,0,0,
469,471,1,0,0,0,470,468,1,0,0,0,471,472,5,74,0,0,472,473,5,76,0,0,473,93,
1,0,0,0,474,477,5,78,0,0,475,476,5,42,0,0,476,478,5,78,0,0,477,475,1,0,0,
0,478,479,1,0,0,0,479,477,1,0,0,0,479,480,1,0,0,0,480,95,1,0,0,0,481,484,
5,78,0,0,482,483,5,42,0,0,483,485,5,78,0,0,484,482,1,0,0,0,485,486,1,0,0,
0,486,484,1,0,0,0,486,487,1,0,0,0,487,488,1,0,0,0,488,489,5,55,0,0,489,490,
3,66,33,0,490,97,1,0,0,0,491,492,5,33,0,0,492,493,3,14,7,0,493,99,1,0,0,
0,494,495,5,35,0,0,495,496,3,14,7,0,496,101,1,0,0,0,497,498,5,34,0,0,498,
499,3,66,33,0,499,103,1,0,0,0,500,501,5,43,0,0,501,502,3,66,33,0,502,105,
1,0,0,0,503,504,5,41,0,0,504,505,5,80,0,0,505,107,1,0,0,0,506,507,5,72,0,
0,507,512,5,79,0,0,508,509,5,15,0,0,509,511,5,79,0,0,510,508,1,0,0,0,511,
514,1,0,0,0,512,510,1,0,0,0,512,513,1,0,0,0,513,515,1,0,0,0,514,512,1,0,
0,0,515,516,5,30,0,0,516,517,5,80,0,0,517,109,1,0,0,0,33,114,149,152,175,
179,183,189,202,212,219,228,232,254,270,294,301,339,341,352,363,381,383,
398,400,415,417,425,432,448,468,479,486,512];


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
                            "'PERIOD.'", "'YOU'RE FIRED'", "'I ALONE CAN FIX IT'", 
                            "'WITCH HUNT!'", "'IMPEACH'", "'EXECUTIVE ORDER'", 
                            "'SUPREME COURT OVERRULES'", "'WE'RE GOING TO WIN IN A LANDSLIDE'", 
                            "'WE'RE GOING TO WIN, WIN, WIN'", "'WITH'", 
                            "'FROM'", "'TO'", "'IN TREMENDOUS STEPS OF'", 
                            "'IN TWO WEEKS'", "'BIG BEAUTIFUL TARIFF'", 
                            "'THE WEAVE'", "'CONCEPTS OF A PLAN'", "'BILLIONS AND BILLIONS'", 
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
                            "'MAKE'", "'GREATER'", "'SMALLER'", "'I ONLY WANT'", 
                            "'('", "')'", "'&'", "'!!'", "'!'", null, null, 
                            null, null, null, null, "'VERY TRUE'", "'FAKE NEWS'", 
                            "'NOTHING TO SEE HERE'" ];
    static symbolicNames = [ null, "IF_DECL", "ELSE_IF_DECL", "ELSE_DECL", 
                             "ARRAY_DECL", "ARRAY_ELEMENTS_DECL", "ARRAY_ACCESS", 
                             "ARRAY_CHAIN", "PROG_START", "PROG_END", "FUNCTION_DECL", 
                             "SUPERLATIVE", "VARIABLE_DECL", "CONSTANT_DECL", 
                             "PARAMS_ARGS_START", "PARAMS_ARGS_CHAIN", "RETURN", 
                             "RETURN_TYPE_DECL", "FUNC_CALL", "BREAK", "PERIOD", 
                             "FIRE", "TRY_DECL", "CATCH_DECL", "IMPEACH", 
                             "EXEC_ORDER", "SUPREME_COURT", "WHILE_LOOP_DECL", 
                             "FOR_LOOP_DECL", "FOR_LOOP_WITH", "FROM_KEYWORD", 
                             "FOR_LOOP_TO", "FOR_LOOP_STEP", "TWO_WEEKS", 
                             "TARIFF_DECL", "WEAVE", "CONCEPT_PLAN", "FOR_EACH_LOOP_DECL", 
                             "FOR_EACH_FROM", "PRINT", "INPUT", "IMPORT", 
                             "DEAL_ACCESS_KEYWORD", "ASSERT_CALL", "EQUALS", 
                             "NOT_EQUALS", "GREATER_THAN", "GREATER_THAN_OR_EQUALS", 
                             "LESS_THAN", "LESS_THAN_OR_EQUALS", "NOT", 
                             "AND", "OR", "PLUS", "MINUS", "ASSIGNMENT", 
                             "STRING_CONCAT", "MULTIPLY", "DIVIDE", "MODULO", 
                             "POWER", "INTEGER_TYPE", "FLOAT_TYPE", "BOOLEAN_TYPE", 
                             "STRING_TYPE", "ARRAY_TYPE", "STRUCTUR_TYPE", 
                             "OPEN_BLOCK", "CLOSE_BLOCK", "MAKE_DECL", "INCREMENT_OP", 
                             "DECREMENT_OP", "SELECTIVE_IMPORT_DECL", "OPEN_PAREN", 
                             "CLOSE_PAREN", "AMPERSAND", "DEAL_DECLARE", 
                             "VAR_DECLARE", "VARIABLE", "IDENTIFIER", "FILEPATH", 
                             "STRING", "NUMBER", "BOOLEAN", "TRUE", "FALSE", 
                             "NOTHING", "COMMENT", "WS" ];
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
                         "dealAccess", "dealAssignment", "twoWeeksStatement", 
                         "weaveStatement", "tariffStatement", "factCheckStatement", 
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
	        this.state = 110;
	        this.match(TrumplangParser.PROG_START);
	        this.state = 112; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 111;
	            this.statement();
	            this.state = 114; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 527250450) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 1495) !== 0) || ((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 1050661) !== 0));
	        this.state = 116;
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
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 118;
	            this.importStatement();
	            break;

	        case 2:
	            this.state = 119;
	            this.blockStatement();
	            break;

	        case 3:
	            this.state = 120;
	            this.selectiveImport();
	            break;

	        case 4:
	            this.state = 121;
	            this.variableDeclaration();
	            break;

	        case 5:
	            this.state = 122;
	            this.constantDeclaration();
	            break;

	        case 6:
	            this.state = 123;
	            this.functionDeclaration();
	            break;

	        case 7:
	            this.state = 124;
	            this.functionCall();
	            break;

	        case 8:
	            this.state = 125;
	            this.ifStatement();
	            break;

	        case 9:
	            this.state = 126;
	            this.whileLoop();
	            break;

	        case 10:
	            this.state = 127;
	            this.forLoop();
	            break;

	        case 11:
	            this.state = 128;
	            this.forEachLoop();
	            break;

	        case 12:
	            this.state = 129;
	            this.arrayDeclaration();
	            break;

	        case 13:
	            this.state = 130;
	            this.arrayAssignment();
	            break;

	        case 14:
	            this.state = 131;
	            this.dealAssignment();
	            break;

	        case 15:
	            this.state = 132;
	            this.assignmentStatement();
	            break;

	        case 16:
	            this.state = 133;
	            this.incrementStatement();
	            break;

	        case 17:
	            this.state = 134;
	            this.decrementStatement();
	            break;

	        case 18:
	            this.state = 135;
	            this.printStatement();
	            break;

	        case 19:
	            this.state = 136;
	            this.inputStatement();
	            break;

	        case 20:
	            this.state = 137;
	            this.returnStatement();
	            break;

	        case 21:
	            this.state = 138;
	            this.commentStatement();
	            break;

	        case 22:
	            this.state = 139;
	            this.vetoStatement();
	            break;

	        case 23:
	            this.state = 140;
	            this.pardonStatement();
	            break;

	        case 24:
	            this.state = 141;
	            this.impeachStatement();
	            break;

	        case 25:
	            this.state = 142;
	            this.fireStatement();
	            break;

	        case 26:
	            this.state = 143;
	            this.executiveOrder();
	            break;

	        case 27:
	            this.state = 144;
	            this.supremeCourtOverrule();
	            break;

	        case 28:
	            this.state = 145;
	            this.factCheckStatement();
	            break;

	        case 29:
	            this.state = 146;
	            this.twoWeeksStatement();
	            break;

	        case 30:
	            this.state = 147;
	            this.tariffStatement();
	            break;

	        case 31:
	            this.state = 148;
	            this.weaveStatement();
	            break;

	        }
	        this.state = 152;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 151;
	            this.match(TrumplangParser.PERIOD);

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
	        this.state = 154;
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
	        this.state = 156;
	        this.match(TrumplangParser.VARIABLE_DECL);
	        this.state = 157;
	        this.dataType();
	        this.state = 158;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 159;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 160;
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
	        this.state = 162;
	        this.match(TrumplangParser.CONSTANT_DECL);
	        this.state = 163;
	        this.dataType();
	        this.state = 164;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 165;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 166;
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
	        this.state = 168;
	        _la = this._input.LA(1);
	        if(!(((((_la - 61)) & ~0x1f) === 0 && ((1 << (_la - 61)) & 63) !== 0))) {
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
	        this.state = 170;
	        this.match(TrumplangParser.FUNCTION_DECL);
	        this.state = 171;
	        localctx.funcName = this.match(TrumplangParser.IDENTIFIER);
	        this.state = 172;
	        localctx.praise = this.match(TrumplangParser.SUPERLATIVE);
	        this.state = 173;
	        this.match(TrumplangParser.PARAMS_ARGS_START);
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 61)) & ~0x1f) === 0 && ((1 << (_la - 61)) & 63) !== 0)) {
	            this.state = 174;
	            this.parameterList();
	        }

	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 177;
	            this.match(TrumplangParser.RETURN_TYPE_DECL);
	            this.state = 178;
	            this.dataType();
	        }

	        this.state = 183;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 67:
	            this.state = 181;
	            this.blockStatement();
	            break;
	        case 36:
	            this.state = 182;
	            this.match(TrumplangParser.CONCEPT_PLAN);
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



	blockStatement() {
	    let localctx = new BlockStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, TrumplangParser.RULE_blockStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this.match(TrumplangParser.OPEN_BLOCK);
	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 527250450) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 1495) !== 0) || ((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 1050661) !== 0)) {
	            this.state = 186;
	            this.statement();
	            this.state = 191;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 192;
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
	        this.state = 194;
	        this.dataType();
	        this.state = 195;
	        localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	        localctx.paramName.push(localctx._VARIABLE);
	        this.state = 202;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 196;
	            this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
	            this.state = 197;
	            this.dataType();
	            this.state = 198;
	            localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	            localctx.paramName.push(localctx._VARIABLE);
	            this.state = 204;
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
	        this.state = 205;
	        this.match(TrumplangParser.RETURN);
	        this.state = 206;
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
	        this.state = 208;
	        this.match(TrumplangParser.FUNC_CALL);
	        this.state = 209;
	        localctx.funcName = this.match(TrumplangParser.IDENTIFIER);
	        this.state = 210;
	        this.match(TrumplangParser.PARAMS_ARGS_START);
	        this.state = 212;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 211;
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
	        this.state = 214;
	        this.expression();
	        this.state = 219;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 215;
	                this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
	                this.state = 216;
	                this.expression(); 
	            }
	            this.state = 221;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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
	        this.state = 222;
	        this.match(TrumplangParser.IF_DECL);
	        this.state = 223;
	        this.expression();
	        this.state = 224;
	        this.statement();
	        this.state = 228;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 225;
	                this.elseIfStatement(); 
	            }
	            this.state = 230;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	        this.state = 232;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 231;
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
	        this.state = 234;
	        this.match(TrumplangParser.ELSE_IF_DECL);
	        this.state = 235;
	        this.expression();
	        this.state = 236;
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
	        this.state = 238;
	        this.match(TrumplangParser.ELSE_DECL);
	        this.state = 239;
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
	        this.state = 241;
	        this.match(TrumplangParser.WHILE_LOOP_DECL);
	        this.state = 242;
	        this.expression();
	        this.state = 243;
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
	        this.state = 245;
	        this.match(TrumplangParser.FOR_LOOP_DECL);
	        this.state = 246;
	        this.match(TrumplangParser.FOR_LOOP_WITH);
	        this.state = 247;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 248;
	        this.match(TrumplangParser.FROM_KEYWORD);
	        this.state = 249;
	        this.expression();
	        this.state = 250;
	        this.match(TrumplangParser.FOR_LOOP_TO);
	        this.state = 251;
	        this.expression();
	        this.state = 254;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 252;
	            this.match(TrumplangParser.FOR_LOOP_STEP);
	            this.state = 253;
	            this.expression();
	        }

	        this.state = 256;
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
	        this.state = 258;
	        this.match(TrumplangParser.FOR_EACH_LOOP_DECL);
	        this.state = 259;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 260;
	        this.match(TrumplangParser.FOR_EACH_FROM);
	        this.state = 261;
	        localctx.listName = this.match(TrumplangParser.VARIABLE);
	        this.state = 262;
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
	        this.state = 264;
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
	        this.state = 266;
	        this.match(TrumplangParser.TRY_DECL);
	        this.state = 267;
	        this.blockStatement();
	        this.state = 268;
	        this.match(TrumplangParser.CATCH_DECL);
	        this.state = 270;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===78) {
	            this.state = 269;
	            localctx.errName = this.match(TrumplangParser.VARIABLE);
	        }

	        this.state = 272;
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
	        this.state = 274;
	        this.match(TrumplangParser.IMPEACH);
	        this.state = 275;
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
	        this.state = 277;
	        this.match(TrumplangParser.FIRE);
	        this.state = 278;
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
	        this.state = 280;
	        this.match(TrumplangParser.EXEC_ORDER);
	        this.state = 281;
	        localctx.fromOp = this.operator();
	        this.state = 282;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 283;
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
	        this.state = 285;
	        this.match(TrumplangParser.SUPREME_COURT);
	        this.state = 286;
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
	        this.state = 288;
	        _la = this._input.LA(1);
	        if(!(((((_la - 53)) & ~0x1f) === 0 && ((1 << (_la - 53)) & 51) !== 0))) {
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
	        this.state = 290;
	        this.match(TrumplangParser.ARRAY_DECL);
	        this.state = 291;
	        localctx.arrayName = this.match(TrumplangParser.VARIABLE);
	        this.state = 292;
	        this.match(TrumplangParser.ARRAY_ELEMENTS_DECL);
	        this.state = 294;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 293;
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
	        this.state = 296;
	        this.expression();
	        this.state = 301;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 297;
	                this.match(TrumplangParser.ARRAY_CHAIN);
	                this.state = 298;
	                this.expression(); 
	            }
	            this.state = 303;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
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
	        this.state = 304;
	        localctx.arrayName = this.match(TrumplangParser.VARIABLE);
	        this.state = 305;
	        this.match(TrumplangParser.ARRAY_ACCESS);
	        this.state = 306;
	        localctx.index = this.additiveExpression(0);
	        this.state = 307;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 308;
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
	        this.state = 310;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 311;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 312;
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
	        this.state = 314;
	        this.match(TrumplangParser.PRINT);
	        this.state = 315;
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
	        this.state = 317;
	        this.match(TrumplangParser.INPUT);
	        this.state = 318;
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
	        this.state = 320;
	        this.match(TrumplangParser.MAKE_DECL);
	        this.state = 321;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 322;
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
	        this.state = 324;
	        this.match(TrumplangParser.MAKE_DECL);
	        this.state = 325;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 326;
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
	        this.state = 328;
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
	        this.state = 331;
	        this.logicalOrExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 341;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 339;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_equalityExpression);
	                    this.state = 333;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 334;
	                    this.match(TrumplangParser.EQUALS);
	                    this.state = 335;
	                    this.logicalOrExpression(0);
	                    break;

	                case 2:
	                    localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_equalityExpression);
	                    this.state = 336;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 337;
	                    this.match(TrumplangParser.NOT_EQUALS);
	                    this.state = 338;
	                    this.logicalOrExpression(0);
	                    break;

	                } 
	            }
	            this.state = 343;
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
	        this.state = 345;
	        this.logicalAndExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 352;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new LogicalOrExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_logicalOrExpression);
	                this.state = 347;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 348;
	                this.match(TrumplangParser.OR);
	                this.state = 349;
	                this.logicalAndExpression(0); 
	            }
	            this.state = 354;
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
	        this.state = 356;
	        this.comparisonExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 363;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new LogicalAndExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_logicalAndExpression);
	                this.state = 358;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 359;
	                this.match(TrumplangParser.AND);
	                this.state = 360;
	                this.comparisonExpression(0); 
	            }
	            this.state = 365;
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
	        this.state = 367;
	        this.additiveExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 383;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 381;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ComparisonExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_comparisonExpression);
	                    this.state = 369;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 370;
	                    this.match(TrumplangParser.GREATER_THAN);
	                    this.state = 371;
	                    this.additiveExpression(0);
	                    break;

	                case 2:
	                    localctx = new ComparisonExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_comparisonExpression);
	                    this.state = 372;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 373;
	                    this.match(TrumplangParser.LESS_THAN);
	                    this.state = 374;
	                    this.additiveExpression(0);
	                    break;

	                case 3:
	                    localctx = new ComparisonExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_comparisonExpression);
	                    this.state = 375;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 376;
	                    this.match(TrumplangParser.GREATER_THAN_OR_EQUALS);
	                    this.state = 377;
	                    this.additiveExpression(0);
	                    break;

	                case 4:
	                    localctx = new ComparisonExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_comparisonExpression);
	                    this.state = 378;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 379;
	                    this.match(TrumplangParser.LESS_THAN_OR_EQUALS);
	                    this.state = 380;
	                    this.additiveExpression(0);
	                    break;

	                } 
	            }
	            this.state = 385;
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
	        this.state = 387;
	        this.term(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 400;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 398;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_additiveExpression);
	                    this.state = 389;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 390;
	                    this.match(TrumplangParser.PLUS);
	                    this.state = 391;
	                    this.term(0);
	                    break;

	                case 2:
	                    localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_additiveExpression);
	                    this.state = 392;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 393;
	                    this.match(TrumplangParser.STRING_CONCAT);
	                    this.state = 394;
	                    this.term(0);
	                    break;

	                case 3:
	                    localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_additiveExpression);
	                    this.state = 395;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 396;
	                    this.match(TrumplangParser.MINUS);
	                    this.state = 397;
	                    this.term(0);
	                    break;

	                } 
	            }
	            this.state = 402;
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
	        this.state = 404;
	        this.powerExpression();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 417;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 415;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TermContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
	                    this.state = 406;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 407;
	                    this.match(TrumplangParser.MULTIPLY);
	                    this.state = 408;
	                    this.powerExpression();
	                    break;

	                case 2:
	                    localctx = new TermContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
	                    this.state = 409;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 410;
	                    this.match(TrumplangParser.DIVIDE);
	                    this.state = 411;
	                    this.powerExpression();
	                    break;

	                case 3:
	                    localctx = new TermContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
	                    this.state = 412;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 413;
	                    this.match(TrumplangParser.MODULO);
	                    this.state = 414;
	                    this.powerExpression();
	                    break;

	                } 
	            }
	            this.state = 419;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
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
	        this.state = 425;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 420;
	            this.unaryExpression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 421;
	            this.unaryExpression();
	            this.state = 422;
	            this.match(TrumplangParser.POWER);
	            this.state = 423;
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
	        this.state = 432;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 50:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 427;
	            this.match(TrumplangParser.NOT);
	            this.state = 428;
	            this.unaryExpression();
	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 429;
	            this.match(TrumplangParser.MINUS);
	            this.state = 430;
	            this.unaryExpression();
	            break;
	        case 5:
	        case 18:
	        case 73:
	        case 78:
	        case 81:
	        case 82:
	        case 83:
	        case 86:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 431;
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
	        this.state = 448;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 434;
	            this.match(TrumplangParser.OPEN_PAREN);
	            this.state = 435;
	            this.expression();
	            this.state = 436;
	            this.match(TrumplangParser.CLOSE_PAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 438;
	            this.match(TrumplangParser.VARIABLE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 439;
	            this.match(TrumplangParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 440;
	            this.match(TrumplangParser.NUMBER);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 441;
	            this.match(TrumplangParser.BOOLEAN);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 442;
	            this.functionCall();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 443;
	            this.arrayAccess();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 444;
	            this.dealAccess();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 445;
	            this.dealDeclaration();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 446;
	            this.arrayLiteral();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 447;
	            this.match(TrumplangParser.NOTHING);
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
	        this.state = 450;
	        this.match(TrumplangParser.ARRAY_ELEMENTS_DECL);
	        this.state = 451;
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
	        this.state = 453;
	        localctx.arrayName = this.match(TrumplangParser.VARIABLE);
	        this.state = 454;
	        this.match(TrumplangParser.ARRAY_ACCESS);
	        this.state = 455;
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
	        this.state = 457;
	        this.dataType();
	        this.state = 458;
	        localctx.fieldName = this.match(TrumplangParser.VARIABLE);
	        this.state = 459;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 460;
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
	        this.state = 462;
	        this.match(TrumplangParser.OPEN_PAREN);
	        this.state = 463;
	        this.dealField();
	        this.state = 468;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===75) {
	            this.state = 464;
	            this.match(TrumplangParser.AMPERSAND);
	            this.state = 465;
	            this.dealField();
	            this.state = 470;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 471;
	        this.match(TrumplangParser.CLOSE_PAREN);
	        this.state = 472;
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
	        this.state = 474;
	        localctx.dealName = this.match(TrumplangParser.VARIABLE);
	        this.state = 477; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 475;
	        		this.match(TrumplangParser.DEAL_ACCESS_KEYWORD);
	        		this.state = 476;
	        		localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	        		localctx.fieldName.push(localctx._VARIABLE);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 479; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,30, this._ctx);
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
	        this.state = 481;
	        localctx.dealName = this.match(TrumplangParser.VARIABLE);
	        this.state = 484; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 482;
	            this.match(TrumplangParser.DEAL_ACCESS_KEYWORD);
	            this.state = 483;
	            localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	            localctx.fieldName.push(localctx._VARIABLE);
	            this.state = 486; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===42);
	        this.state = 488;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 489;
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



	twoWeeksStatement() {
	    let localctx = new TwoWeeksStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, TrumplangParser.RULE_twoWeeksStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 491;
	        this.match(TrumplangParser.TWO_WEEKS);
	        this.state = 492;
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



	weaveStatement() {
	    let localctx = new WeaveStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, TrumplangParser.RULE_weaveStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 494;
	        this.match(TrumplangParser.WEAVE);
	        this.state = 495;
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



	tariffStatement() {
	    let localctx = new TariffStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, TrumplangParser.RULE_tariffStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 497;
	        this.match(TrumplangParser.TARIFF_DECL);
	        this.state = 498;
	        localctx.rate = this.expression();
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
	    this.enterRule(localctx, 104, TrumplangParser.RULE_factCheckStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 500;
	        this.match(TrumplangParser.ASSERT_CALL);
	        this.state = 501;
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
	    this.enterRule(localctx, 106, TrumplangParser.RULE_importStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 503;
	        this.match(TrumplangParser.IMPORT);
	        this.state = 504;
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
	    this.enterRule(localctx, 108, TrumplangParser.RULE_selectiveImport);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 506;
	        this.match(TrumplangParser.SELECTIVE_IMPORT_DECL);
	        this.state = 507;
	        localctx._IDENTIFIER = this.match(TrumplangParser.IDENTIFIER);
	        localctx.importName.push(localctx._IDENTIFIER);
	        this.state = 512;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 508;
	            this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
	            this.state = 509;
	            localctx._IDENTIFIER = this.match(TrumplangParser.IDENTIFIER);
	            localctx.importName.push(localctx._IDENTIFIER);
	            this.state = 514;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 515;
	        this.match(TrumplangParser.FROM_KEYWORD);
	        this.state = 516;
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
TrumplangParser.PERIOD = 20;
TrumplangParser.FIRE = 21;
TrumplangParser.TRY_DECL = 22;
TrumplangParser.CATCH_DECL = 23;
TrumplangParser.IMPEACH = 24;
TrumplangParser.EXEC_ORDER = 25;
TrumplangParser.SUPREME_COURT = 26;
TrumplangParser.WHILE_LOOP_DECL = 27;
TrumplangParser.FOR_LOOP_DECL = 28;
TrumplangParser.FOR_LOOP_WITH = 29;
TrumplangParser.FROM_KEYWORD = 30;
TrumplangParser.FOR_LOOP_TO = 31;
TrumplangParser.FOR_LOOP_STEP = 32;
TrumplangParser.TWO_WEEKS = 33;
TrumplangParser.TARIFF_DECL = 34;
TrumplangParser.WEAVE = 35;
TrumplangParser.CONCEPT_PLAN = 36;
TrumplangParser.FOR_EACH_LOOP_DECL = 37;
TrumplangParser.FOR_EACH_FROM = 38;
TrumplangParser.PRINT = 39;
TrumplangParser.INPUT = 40;
TrumplangParser.IMPORT = 41;
TrumplangParser.DEAL_ACCESS_KEYWORD = 42;
TrumplangParser.ASSERT_CALL = 43;
TrumplangParser.EQUALS = 44;
TrumplangParser.NOT_EQUALS = 45;
TrumplangParser.GREATER_THAN = 46;
TrumplangParser.GREATER_THAN_OR_EQUALS = 47;
TrumplangParser.LESS_THAN = 48;
TrumplangParser.LESS_THAN_OR_EQUALS = 49;
TrumplangParser.NOT = 50;
TrumplangParser.AND = 51;
TrumplangParser.OR = 52;
TrumplangParser.PLUS = 53;
TrumplangParser.MINUS = 54;
TrumplangParser.ASSIGNMENT = 55;
TrumplangParser.STRING_CONCAT = 56;
TrumplangParser.MULTIPLY = 57;
TrumplangParser.DIVIDE = 58;
TrumplangParser.MODULO = 59;
TrumplangParser.POWER = 60;
TrumplangParser.INTEGER_TYPE = 61;
TrumplangParser.FLOAT_TYPE = 62;
TrumplangParser.BOOLEAN_TYPE = 63;
TrumplangParser.STRING_TYPE = 64;
TrumplangParser.ARRAY_TYPE = 65;
TrumplangParser.STRUCTUR_TYPE = 66;
TrumplangParser.OPEN_BLOCK = 67;
TrumplangParser.CLOSE_BLOCK = 68;
TrumplangParser.MAKE_DECL = 69;
TrumplangParser.INCREMENT_OP = 70;
TrumplangParser.DECREMENT_OP = 71;
TrumplangParser.SELECTIVE_IMPORT_DECL = 72;
TrumplangParser.OPEN_PAREN = 73;
TrumplangParser.CLOSE_PAREN = 74;
TrumplangParser.AMPERSAND = 75;
TrumplangParser.DEAL_DECLARE = 76;
TrumplangParser.VAR_DECLARE = 77;
TrumplangParser.VARIABLE = 78;
TrumplangParser.IDENTIFIER = 79;
TrumplangParser.FILEPATH = 80;
TrumplangParser.STRING = 81;
TrumplangParser.NUMBER = 82;
TrumplangParser.BOOLEAN = 83;
TrumplangParser.TRUE = 84;
TrumplangParser.FALSE = 85;
TrumplangParser.NOTHING = 86;
TrumplangParser.COMMENT = 87;
TrumplangParser.WS = 88;

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
TrumplangParser.RULE_twoWeeksStatement = 49;
TrumplangParser.RULE_weaveStatement = 50;
TrumplangParser.RULE_tariffStatement = 51;
TrumplangParser.RULE_factCheckStatement = 52;
TrumplangParser.RULE_importStatement = 53;
TrumplangParser.RULE_selectiveImport = 54;

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

	twoWeeksStatement() {
	    return this.getTypedRuleContext(TwoWeeksStatementContext,0);
	};

	tariffStatement() {
	    return this.getTypedRuleContext(TariffStatementContext,0);
	};

	weaveStatement() {
	    return this.getTypedRuleContext(WeaveStatementContext,0);
	};

	PERIOD() {
	    return this.getToken(TrumplangParser.PERIOD, 0);
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

	IDENTIFIER() {
	    return this.getToken(TrumplangParser.IDENTIFIER, 0);
	};

	SUPERLATIVE() {
	    return this.getToken(TrumplangParser.SUPERLATIVE, 0);
	};

	blockStatement() {
	    return this.getTypedRuleContext(BlockStatementContext,0);
	};

	CONCEPT_PLAN() {
	    return this.getToken(TrumplangParser.CONCEPT_PLAN, 0);
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

	NOTHING() {
	    return this.getToken(TrumplangParser.NOTHING, 0);
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



class TwoWeeksStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_twoWeeksStatement;
    }

	TWO_WEEKS() {
	    return this.getToken(TrumplangParser.TWO_WEEKS, 0);
	};

	blockStatement() {
	    return this.getTypedRuleContext(BlockStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterTwoWeeksStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitTwoWeeksStatement(this);
		}
	}


}



class WeaveStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_weaveStatement;
    }

	WEAVE() {
	    return this.getToken(TrumplangParser.WEAVE, 0);
	};

	blockStatement() {
	    return this.getTypedRuleContext(BlockStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterWeaveStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitWeaveStatement(this);
		}
	}


}



class TariffStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_tariffStatement;
        this.rate = null;
    }

	TARIFF_DECL() {
	    return this.getToken(TrumplangParser.TARIFF_DECL, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterTariffStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitTariffStatement(this);
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
TrumplangParser.TwoWeeksStatementContext = TwoWeeksStatementContext; 
TrumplangParser.WeaveStatementContext = WeaveStatementContext; 
TrumplangParser.TariffStatementContext = TariffStatementContext; 
TrumplangParser.FactCheckStatementContext = FactCheckStatementContext; 
TrumplangParser.ImportStatementContext = ImportStatementContext; 
TrumplangParser.SelectiveImportContext = SelectiveImportContext; 

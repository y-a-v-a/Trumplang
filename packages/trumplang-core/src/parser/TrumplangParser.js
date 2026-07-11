// jshint ignore: start
import antlr4 from 'antlr4';
import TrumplangListener from './TrumplangListener.js';
const serializedATN = [4,1,91,536,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,1,0,1,0,4,0,117,8,0,11,0,12,0,118,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,156,8,1,1,1,3,1,159,8,1,1,2,1,2,1,
3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,1,6,1,
6,3,6,182,8,6,1,6,1,6,3,6,186,8,6,1,6,1,6,3,6,190,8,6,1,7,1,7,5,7,194,8,
7,10,7,12,7,197,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,207,8,8,10,8,12,
8,210,9,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,3,10,219,8,10,1,11,1,11,1,11,5,
11,224,8,11,10,11,12,11,227,9,11,1,12,1,12,1,12,1,12,5,12,233,8,12,10,12,
12,12,236,9,12,1,12,3,12,239,8,12,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,15,
1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,261,8,16,
1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,18,1,18,1,19,1,19,1,19,1,19,3,
19,277,8,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,285,8,19,1,20,1,20,1,20,1,
21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,25,1,25,
1,25,1,25,3,25,307,8,25,1,26,1,26,1,26,5,26,312,8,26,10,26,12,26,315,9,26,
1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,30,1,
30,1,30,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,33,1,33,1,34,1,34,1,34,
1,34,1,34,1,34,1,34,1,34,1,34,5,34,352,8,34,10,34,12,34,355,9,34,1,35,1,
35,1,35,1,35,1,35,1,35,5,35,363,8,35,10,35,12,35,366,9,35,1,36,1,36,1,36,
1,36,1,36,1,36,5,36,374,8,36,10,36,12,36,377,9,36,1,37,1,37,1,37,1,37,1,
37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,5,37,394,8,37,10,37,
12,37,397,9,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,
38,5,38,411,8,38,10,38,12,38,414,9,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,
1,39,1,39,1,39,1,39,1,39,5,39,428,8,39,10,39,12,39,431,9,39,1,40,1,40,1,
40,1,40,1,40,3,40,438,8,40,1,41,1,41,1,41,1,41,1,41,3,41,445,8,41,1,42,1,
42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,461,
8,42,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,46,1,
46,1,46,1,46,5,46,479,8,46,10,46,12,46,482,9,46,1,46,1,46,1,46,1,47,1,47,
1,47,4,47,490,8,47,11,47,12,47,491,1,48,1,48,1,48,4,48,497,8,48,11,48,12,
48,498,1,48,1,48,1,48,1,49,1,49,1,49,1,50,1,50,1,51,1,51,1,51,1,52,1,52,
1,52,1,53,1,53,1,53,1,54,1,54,1,54,1,55,1,55,1,55,1,56,1,56,1,56,1,56,5,
56,528,8,56,10,56,12,56,531,9,56,1,56,1,56,1,56,1,56,0,6,68,70,72,74,76,
78,57,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,
96,98,100,102,104,106,108,110,112,0,2,1,0,64,69,2,0,56,57,60,61,557,0,114,
1,0,0,0,2,155,1,0,0,0,4,160,1,0,0,0,6,162,1,0,0,0,8,168,1,0,0,0,10,174,1,
0,0,0,12,176,1,0,0,0,14,191,1,0,0,0,16,200,1,0,0,0,18,211,1,0,0,0,20,214,
1,0,0,0,22,220,1,0,0,0,24,228,1,0,0,0,26,240,1,0,0,0,28,244,1,0,0,0,30,247,
1,0,0,0,32,251,1,0,0,0,34,264,1,0,0,0,36,270,1,0,0,0,38,272,1,0,0,0,40,286,
1,0,0,0,42,289,1,0,0,0,44,292,1,0,0,0,46,297,1,0,0,0,48,300,1,0,0,0,50,302,
1,0,0,0,52,308,1,0,0,0,54,316,1,0,0,0,56,322,1,0,0,0,58,326,1,0,0,0,60,329,
1,0,0,0,62,332,1,0,0,0,64,336,1,0,0,0,66,340,1,0,0,0,68,342,1,0,0,0,70,356,
1,0,0,0,72,367,1,0,0,0,74,378,1,0,0,0,76,398,1,0,0,0,78,415,1,0,0,0,80,437,
1,0,0,0,82,444,1,0,0,0,84,460,1,0,0,0,86,462,1,0,0,0,88,465,1,0,0,0,90,469,
1,0,0,0,92,474,1,0,0,0,94,486,1,0,0,0,96,493,1,0,0,0,98,503,1,0,0,0,100,
506,1,0,0,0,102,508,1,0,0,0,104,511,1,0,0,0,106,514,1,0,0,0,108,517,1,0,
0,0,110,520,1,0,0,0,112,523,1,0,0,0,114,116,5,8,0,0,115,117,3,2,1,0,116,
115,1,0,0,0,117,118,1,0,0,0,118,116,1,0,0,0,118,119,1,0,0,0,119,120,1,0,
0,0,120,121,5,9,0,0,121,1,1,0,0,0,122,156,3,110,55,0,123,156,3,14,7,0,124,
156,3,112,56,0,125,156,3,6,3,0,126,156,3,8,4,0,127,156,3,12,6,0,128,156,
3,20,10,0,129,156,3,24,12,0,130,156,3,30,15,0,131,156,3,32,16,0,132,156,
3,34,17,0,133,156,3,50,25,0,134,156,3,54,27,0,135,156,3,96,48,0,136,156,
3,56,28,0,137,156,3,62,31,0,138,156,3,64,32,0,139,156,3,58,29,0,140,156,
3,60,30,0,141,156,3,18,9,0,142,156,3,4,2,0,143,156,3,36,18,0,144,156,3,38,
19,0,145,156,3,40,20,0,146,156,3,42,21,0,147,156,3,44,22,0,148,156,3,46,
23,0,149,156,3,108,54,0,150,156,3,98,49,0,151,156,3,106,53,0,152,156,3,104,
52,0,153,156,3,102,51,0,154,156,3,100,50,0,155,122,1,0,0,0,155,123,1,0,0,
0,155,124,1,0,0,0,155,125,1,0,0,0,155,126,1,0,0,0,155,127,1,0,0,0,155,128,
1,0,0,0,155,129,1,0,0,0,155,130,1,0,0,0,155,131,1,0,0,0,155,132,1,0,0,0,
155,133,1,0,0,0,155,134,1,0,0,0,155,135,1,0,0,0,155,136,1,0,0,0,155,137,
1,0,0,0,155,138,1,0,0,0,155,139,1,0,0,0,155,140,1,0,0,0,155,141,1,0,0,0,
155,142,1,0,0,0,155,143,1,0,0,0,155,144,1,0,0,0,155,145,1,0,0,0,155,146,
1,0,0,0,155,147,1,0,0,0,155,148,1,0,0,0,155,149,1,0,0,0,155,150,1,0,0,0,
155,151,1,0,0,0,155,152,1,0,0,0,155,153,1,0,0,0,155,154,1,0,0,0,156,158,
1,0,0,0,157,159,5,20,0,0,158,157,1,0,0,0,158,159,1,0,0,0,159,3,1,0,0,0,160,
161,5,90,0,0,161,5,1,0,0,0,162,163,5,12,0,0,163,164,3,10,5,0,164,165,5,81,
0,0,165,166,5,58,0,0,166,167,3,66,33,0,167,7,1,0,0,0,168,169,5,13,0,0,169,
170,3,10,5,0,170,171,5,81,0,0,171,172,5,58,0,0,172,173,3,66,33,0,173,9,1,
0,0,0,174,175,7,0,0,0,175,11,1,0,0,0,176,177,5,10,0,0,177,178,5,82,0,0,178,
179,5,11,0,0,179,181,5,14,0,0,180,182,3,16,8,0,181,180,1,0,0,0,181,182,1,
0,0,0,182,185,1,0,0,0,183,184,5,17,0,0,184,186,3,10,5,0,185,183,1,0,0,0,
185,186,1,0,0,0,186,189,1,0,0,0,187,190,3,14,7,0,188,190,5,36,0,0,189,187,
1,0,0,0,189,188,1,0,0,0,190,13,1,0,0,0,191,195,5,70,0,0,192,194,3,2,1,0,
193,192,1,0,0,0,194,197,1,0,0,0,195,193,1,0,0,0,195,196,1,0,0,0,196,198,
1,0,0,0,197,195,1,0,0,0,198,199,5,71,0,0,199,15,1,0,0,0,200,201,3,10,5,0,
201,208,5,81,0,0,202,203,5,15,0,0,203,204,3,10,5,0,204,205,5,81,0,0,205,
207,1,0,0,0,206,202,1,0,0,0,207,210,1,0,0,0,208,206,1,0,0,0,208,209,1,0,
0,0,209,17,1,0,0,0,210,208,1,0,0,0,211,212,5,16,0,0,212,213,3,66,33,0,213,
19,1,0,0,0,214,215,5,18,0,0,215,216,5,82,0,0,216,218,5,14,0,0,217,219,3,
22,11,0,218,217,1,0,0,0,218,219,1,0,0,0,219,21,1,0,0,0,220,225,3,66,33,0,
221,222,5,15,0,0,222,224,3,66,33,0,223,221,1,0,0,0,224,227,1,0,0,0,225,223,
1,0,0,0,225,226,1,0,0,0,226,23,1,0,0,0,227,225,1,0,0,0,228,229,5,1,0,0,229,
230,3,66,33,0,230,234,3,2,1,0,231,233,3,26,13,0,232,231,1,0,0,0,233,236,
1,0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,238,1,0,0,0,236,234,1,0,0,0,
237,239,3,28,14,0,238,237,1,0,0,0,238,239,1,0,0,0,239,25,1,0,0,0,240,241,
5,2,0,0,241,242,3,66,33,0,242,243,3,2,1,0,243,27,1,0,0,0,244,245,5,3,0,0,
245,246,3,2,1,0,246,29,1,0,0,0,247,248,5,27,0,0,248,249,3,66,33,0,249,250,
3,14,7,0,250,31,1,0,0,0,251,252,5,28,0,0,252,253,5,29,0,0,253,254,5,81,0,
0,254,255,5,30,0,0,255,256,3,66,33,0,256,257,5,31,0,0,257,260,3,66,33,0,
258,259,5,32,0,0,259,261,3,66,33,0,260,258,1,0,0,0,260,261,1,0,0,0,261,262,
1,0,0,0,262,263,3,14,7,0,263,33,1,0,0,0,264,265,5,40,0,0,265,266,5,81,0,
0,266,267,5,41,0,0,267,268,5,81,0,0,268,269,3,14,7,0,269,35,1,0,0,0,270,
271,5,19,0,0,271,37,1,0,0,0,272,273,5,22,0,0,273,284,3,14,7,0,274,276,5,
23,0,0,275,277,5,81,0,0,276,275,1,0,0,0,276,277,1,0,0,0,277,278,1,0,0,0,
278,285,3,14,7,0,279,280,5,39,0,0,280,281,3,66,33,0,281,282,5,30,0,0,282,
283,5,81,0,0,283,285,1,0,0,0,284,274,1,0,0,0,284,279,1,0,0,0,285,39,1,0,
0,0,286,287,5,24,0,0,287,288,3,66,33,0,288,41,1,0,0,0,289,290,5,21,0,0,290,
291,5,82,0,0,291,43,1,0,0,0,292,293,5,25,0,0,293,294,3,48,24,0,294,295,5,
58,0,0,295,296,3,48,24,0,296,45,1,0,0,0,297,298,5,26,0,0,298,299,3,48,24,
0,299,47,1,0,0,0,300,301,7,1,0,0,301,49,1,0,0,0,302,303,5,4,0,0,303,304,
5,81,0,0,304,306,5,5,0,0,305,307,3,52,26,0,306,305,1,0,0,0,306,307,1,0,0,
0,307,51,1,0,0,0,308,313,3,66,33,0,309,310,5,7,0,0,310,312,3,66,33,0,311,
309,1,0,0,0,312,315,1,0,0,0,313,311,1,0,0,0,313,314,1,0,0,0,314,53,1,0,0,
0,315,313,1,0,0,0,316,317,5,81,0,0,317,318,5,6,0,0,318,319,3,76,38,0,319,
320,5,58,0,0,320,321,3,66,33,0,321,55,1,0,0,0,322,323,5,81,0,0,323,324,5,
58,0,0,324,325,3,66,33,0,325,57,1,0,0,0,326,327,5,42,0,0,327,328,3,66,33,
0,328,59,1,0,0,0,329,330,5,43,0,0,330,331,5,81,0,0,331,61,1,0,0,0,332,333,
5,72,0,0,333,334,5,81,0,0,334,335,5,73,0,0,335,63,1,0,0,0,336,337,5,72,0,
0,337,338,5,81,0,0,338,339,5,74,0,0,339,65,1,0,0,0,340,341,3,68,34,0,341,
67,1,0,0,0,342,343,6,34,-1,0,343,344,3,70,35,0,344,353,1,0,0,0,345,346,10,
2,0,0,346,347,5,47,0,0,347,352,3,70,35,0,348,349,10,1,0,0,349,350,5,48,0,
0,350,352,3,70,35,0,351,345,1,0,0,0,351,348,1,0,0,0,352,355,1,0,0,0,353,
351,1,0,0,0,353,354,1,0,0,0,354,69,1,0,0,0,355,353,1,0,0,0,356,357,6,35,
-1,0,357,358,3,72,36,0,358,364,1,0,0,0,359,360,10,1,0,0,360,361,5,55,0,0,
361,363,3,72,36,0,362,359,1,0,0,0,363,366,1,0,0,0,364,362,1,0,0,0,364,365,
1,0,0,0,365,71,1,0,0,0,366,364,1,0,0,0,367,368,6,36,-1,0,368,369,3,74,37,
0,369,375,1,0,0,0,370,371,10,1,0,0,371,372,5,54,0,0,372,374,3,74,37,0,373,
370,1,0,0,0,374,377,1,0,0,0,375,373,1,0,0,0,375,376,1,0,0,0,376,73,1,0,0,
0,377,375,1,0,0,0,378,379,6,37,-1,0,379,380,3,76,38,0,380,395,1,0,0,0,381,
382,10,4,0,0,382,383,5,49,0,0,383,394,3,76,38,0,384,385,10,3,0,0,385,386,
5,51,0,0,386,394,3,76,38,0,387,388,10,2,0,0,388,389,5,50,0,0,389,394,3,76,
38,0,390,391,10,1,0,0,391,392,5,52,0,0,392,394,3,76,38,0,393,381,1,0,0,0,
393,384,1,0,0,0,393,387,1,0,0,0,393,390,1,0,0,0,394,397,1,0,0,0,395,393,
1,0,0,0,395,396,1,0,0,0,396,75,1,0,0,0,397,395,1,0,0,0,398,399,6,38,-1,0,
399,400,3,78,39,0,400,412,1,0,0,0,401,402,10,3,0,0,402,403,5,56,0,0,403,
411,3,78,39,0,404,405,10,2,0,0,405,406,5,59,0,0,406,411,3,78,39,0,407,408,
10,1,0,0,408,409,5,57,0,0,409,411,3,78,39,0,410,401,1,0,0,0,410,404,1,0,
0,0,410,407,1,0,0,0,411,414,1,0,0,0,412,410,1,0,0,0,412,413,1,0,0,0,413,
77,1,0,0,0,414,412,1,0,0,0,415,416,6,39,-1,0,416,417,3,80,40,0,417,429,1,
0,0,0,418,419,10,3,0,0,419,420,5,60,0,0,420,428,3,80,40,0,421,422,10,2,0,
0,422,423,5,61,0,0,423,428,3,80,40,0,424,425,10,1,0,0,425,426,5,62,0,0,426,
428,3,80,40,0,427,418,1,0,0,0,427,421,1,0,0,0,427,424,1,0,0,0,428,431,1,
0,0,0,429,427,1,0,0,0,429,430,1,0,0,0,430,79,1,0,0,0,431,429,1,0,0,0,432,
438,3,82,41,0,433,434,3,82,41,0,434,435,5,63,0,0,435,436,3,80,40,0,436,438,
1,0,0,0,437,432,1,0,0,0,437,433,1,0,0,0,438,81,1,0,0,0,439,440,5,53,0,0,
440,445,3,82,41,0,441,442,5,57,0,0,442,445,3,82,41,0,443,445,3,84,42,0,444,
439,1,0,0,0,444,441,1,0,0,0,444,443,1,0,0,0,445,83,1,0,0,0,446,447,5,76,
0,0,447,448,3,66,33,0,448,449,5,77,0,0,449,461,1,0,0,0,450,461,5,81,0,0,
451,461,5,84,0,0,452,461,5,85,0,0,453,461,5,86,0,0,454,461,3,20,10,0,455,
461,3,88,44,0,456,461,3,94,47,0,457,461,3,92,46,0,458,461,3,86,43,0,459,
461,5,89,0,0,460,446,1,0,0,0,460,450,1,0,0,0,460,451,1,0,0,0,460,452,1,0,
0,0,460,453,1,0,0,0,460,454,1,0,0,0,460,455,1,0,0,0,460,456,1,0,0,0,460,
457,1,0,0,0,460,458,1,0,0,0,460,459,1,0,0,0,461,85,1,0,0,0,462,463,5,5,0,
0,463,464,3,52,26,0,464,87,1,0,0,0,465,466,5,81,0,0,466,467,5,6,0,0,467,
468,3,76,38,0,468,89,1,0,0,0,469,470,3,10,5,0,470,471,5,81,0,0,471,472,5,
58,0,0,472,473,3,66,33,0,473,91,1,0,0,0,474,475,5,76,0,0,475,480,3,90,45,
0,476,477,5,78,0,0,477,479,3,90,45,0,478,476,1,0,0,0,479,482,1,0,0,0,480,
478,1,0,0,0,480,481,1,0,0,0,481,483,1,0,0,0,482,480,1,0,0,0,483,484,5,77,
0,0,484,485,5,79,0,0,485,93,1,0,0,0,486,489,5,81,0,0,487,488,5,45,0,0,488,
490,5,81,0,0,489,487,1,0,0,0,490,491,1,0,0,0,491,489,1,0,0,0,491,492,1,0,
0,0,492,95,1,0,0,0,493,496,5,81,0,0,494,495,5,45,0,0,495,497,5,81,0,0,496,
494,1,0,0,0,497,498,1,0,0,0,498,496,1,0,0,0,498,499,1,0,0,0,499,500,1,0,
0,0,500,501,5,58,0,0,501,502,3,66,33,0,502,97,1,0,0,0,503,504,5,33,0,0,504,
505,3,14,7,0,505,99,1,0,0,0,506,507,5,38,0,0,507,101,1,0,0,0,508,509,5,37,
0,0,509,510,3,66,33,0,510,103,1,0,0,0,511,512,5,35,0,0,512,513,3,14,7,0,
513,105,1,0,0,0,514,515,5,34,0,0,515,516,3,66,33,0,516,107,1,0,0,0,517,518,
5,46,0,0,518,519,3,66,33,0,519,109,1,0,0,0,520,521,5,44,0,0,521,522,5,83,
0,0,522,111,1,0,0,0,523,524,5,75,0,0,524,529,5,82,0,0,525,526,5,15,0,0,526,
528,5,82,0,0,527,525,1,0,0,0,528,531,1,0,0,0,529,527,1,0,0,0,529,530,1,0,
0,0,530,532,1,0,0,0,531,529,1,0,0,0,532,533,5,30,0,0,533,534,5,83,0,0,534,
113,1,0,0,0,34,118,155,158,181,185,189,195,208,218,225,234,238,260,276,284,
306,313,351,353,364,375,393,395,410,412,427,429,437,444,460,480,491,498,
529];


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
                            "'THE WEAVE'", "'CONCEPTS OF A PLAN'", "'STOP THE COUNT'", 
                            "'CHAPTER 11'", "'HUSH MONEY'", "'BILLIONS AND BILLIONS'", 
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
                             "TARIFF_DECL", "WEAVE", "CONCEPT_PLAN", "STOP_COUNT", 
                             "CHAPTER_ELEVEN", "HUSH_MONEY", "FOR_EACH_LOOP_DECL", 
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
                         "bankruptcyStatement", "stopCountStatement", "weaveStatement", 
                         "tariffStatement", "factCheckStatement", "importStatement", 
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
	        this.state = 114;
	        this.match(TrumplangParser.PROG_START);
	        this.state = 116; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 115;
	            this.statement();
	            this.state = 118; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 527250450) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 11959) !== 0) || ((((_la - 70)) & ~0x1f) === 0 && ((1 << (_la - 70)) & 1050661) !== 0));
	        this.state = 120;
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
	        this.state = 155;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 122;
	            this.importStatement();
	            break;

	        case 2:
	            this.state = 123;
	            this.blockStatement();
	            break;

	        case 3:
	            this.state = 124;
	            this.selectiveImport();
	            break;

	        case 4:
	            this.state = 125;
	            this.variableDeclaration();
	            break;

	        case 5:
	            this.state = 126;
	            this.constantDeclaration();
	            break;

	        case 6:
	            this.state = 127;
	            this.functionDeclaration();
	            break;

	        case 7:
	            this.state = 128;
	            this.functionCall();
	            break;

	        case 8:
	            this.state = 129;
	            this.ifStatement();
	            break;

	        case 9:
	            this.state = 130;
	            this.whileLoop();
	            break;

	        case 10:
	            this.state = 131;
	            this.forLoop();
	            break;

	        case 11:
	            this.state = 132;
	            this.forEachLoop();
	            break;

	        case 12:
	            this.state = 133;
	            this.arrayDeclaration();
	            break;

	        case 13:
	            this.state = 134;
	            this.arrayAssignment();
	            break;

	        case 14:
	            this.state = 135;
	            this.dealAssignment();
	            break;

	        case 15:
	            this.state = 136;
	            this.assignmentStatement();
	            break;

	        case 16:
	            this.state = 137;
	            this.incrementStatement();
	            break;

	        case 17:
	            this.state = 138;
	            this.decrementStatement();
	            break;

	        case 18:
	            this.state = 139;
	            this.printStatement();
	            break;

	        case 19:
	            this.state = 140;
	            this.inputStatement();
	            break;

	        case 20:
	            this.state = 141;
	            this.returnStatement();
	            break;

	        case 21:
	            this.state = 142;
	            this.commentStatement();
	            break;

	        case 22:
	            this.state = 143;
	            this.vetoStatement();
	            break;

	        case 23:
	            this.state = 144;
	            this.pardonStatement();
	            break;

	        case 24:
	            this.state = 145;
	            this.impeachStatement();
	            break;

	        case 25:
	            this.state = 146;
	            this.fireStatement();
	            break;

	        case 26:
	            this.state = 147;
	            this.executiveOrder();
	            break;

	        case 27:
	            this.state = 148;
	            this.supremeCourtOverrule();
	            break;

	        case 28:
	            this.state = 149;
	            this.factCheckStatement();
	            break;

	        case 29:
	            this.state = 150;
	            this.twoWeeksStatement();
	            break;

	        case 30:
	            this.state = 151;
	            this.tariffStatement();
	            break;

	        case 31:
	            this.state = 152;
	            this.weaveStatement();
	            break;

	        case 32:
	            this.state = 153;
	            this.stopCountStatement();
	            break;

	        case 33:
	            this.state = 154;
	            this.bankruptcyStatement();
	            break;

	        }
	        this.state = 158;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 157;
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
	        this.state = 160;
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
	        this.state = 162;
	        this.match(TrumplangParser.VARIABLE_DECL);
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



	constantDeclaration() {
	    let localctx = new ConstantDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, TrumplangParser.RULE_constantDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(TrumplangParser.CONSTANT_DECL);
	        this.state = 169;
	        this.dataType();
	        this.state = 170;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 171;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 172;
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
	        this.state = 174;
	        _la = this._input.LA(1);
	        if(!(((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 63) !== 0))) {
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
	        this.state = 176;
	        this.match(TrumplangParser.FUNCTION_DECL);
	        this.state = 177;
	        localctx.funcName = this.match(TrumplangParser.IDENTIFIER);
	        this.state = 178;
	        localctx.praise = this.match(TrumplangParser.SUPERLATIVE);
	        this.state = 179;
	        this.match(TrumplangParser.PARAMS_ARGS_START);
	        this.state = 181;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 63) !== 0)) {
	            this.state = 180;
	            this.parameterList();
	        }

	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 183;
	            this.match(TrumplangParser.RETURN_TYPE_DECL);
	            this.state = 184;
	            this.dataType();
	        }

	        this.state = 189;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 70:
	            this.state = 187;
	            this.blockStatement();
	            break;
	        case 36:
	            this.state = 188;
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
	        this.state = 191;
	        this.match(TrumplangParser.OPEN_BLOCK);
	        this.state = 195;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 527250450) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 11959) !== 0) || ((((_la - 70)) & ~0x1f) === 0 && ((1 << (_la - 70)) & 1050661) !== 0)) {
	            this.state = 192;
	            this.statement();
	            this.state = 197;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 198;
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
	        this.state = 200;
	        this.dataType();
	        this.state = 201;
	        localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	        localctx.paramName.push(localctx._VARIABLE);
	        this.state = 208;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 202;
	            this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
	            this.state = 203;
	            this.dataType();
	            this.state = 204;
	            localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	            localctx.paramName.push(localctx._VARIABLE);
	            this.state = 210;
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
	        this.state = 211;
	        this.match(TrumplangParser.RETURN);
	        this.state = 212;
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
	        this.state = 214;
	        this.match(TrumplangParser.FUNC_CALL);
	        this.state = 215;
	        localctx.funcName = this.match(TrumplangParser.IDENTIFIER);
	        this.state = 216;
	        this.match(TrumplangParser.PARAMS_ARGS_START);
	        this.state = 218;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 217;
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
	        this.state = 220;
	        this.expression();
	        this.state = 225;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 221;
	                this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
	                this.state = 222;
	                this.expression(); 
	            }
	            this.state = 227;
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
	        this.state = 228;
	        this.match(TrumplangParser.IF_DECL);
	        this.state = 229;
	        this.expression();
	        this.state = 230;
	        this.statement();
	        this.state = 234;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 231;
	                this.elseIfStatement(); 
	            }
	            this.state = 236;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	        }

	        this.state = 238;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 237;
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
	        this.state = 240;
	        this.match(TrumplangParser.ELSE_IF_DECL);
	        this.state = 241;
	        this.expression();
	        this.state = 242;
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
	        this.state = 244;
	        this.match(TrumplangParser.ELSE_DECL);
	        this.state = 245;
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
	        this.state = 247;
	        this.match(TrumplangParser.WHILE_LOOP_DECL);
	        this.state = 248;
	        this.expression();
	        this.state = 249;
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
	        this.state = 251;
	        this.match(TrumplangParser.FOR_LOOP_DECL);
	        this.state = 252;
	        this.match(TrumplangParser.FOR_LOOP_WITH);
	        this.state = 253;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 254;
	        this.match(TrumplangParser.FROM_KEYWORD);
	        this.state = 255;
	        this.expression();
	        this.state = 256;
	        this.match(TrumplangParser.FOR_LOOP_TO);
	        this.state = 257;
	        this.expression();
	        this.state = 260;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 258;
	            this.match(TrumplangParser.FOR_LOOP_STEP);
	            this.state = 259;
	            this.expression();
	        }

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



	forEachLoop() {
	    let localctx = new ForEachLoopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, TrumplangParser.RULE_forEachLoop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        this.match(TrumplangParser.FOR_EACH_LOOP_DECL);
	        this.state = 265;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 266;
	        this.match(TrumplangParser.FOR_EACH_FROM);
	        this.state = 267;
	        localctx.listName = this.match(TrumplangParser.VARIABLE);
	        this.state = 268;
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
	        this.state = 270;
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
	        this.state = 272;
	        this.match(TrumplangParser.TRY_DECL);
	        this.state = 273;
	        this.blockStatement();
	        this.state = 284;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 23:
	            this.state = 274;
	            this.match(TrumplangParser.CATCH_DECL);
	            this.state = 276;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===81) {
	                this.state = 275;
	                localctx.errName = this.match(TrumplangParser.VARIABLE);
	            }

	            this.state = 278;
	            this.blockStatement();
	            break;
	        case 39:
	            this.state = 279;
	            this.match(TrumplangParser.HUSH_MONEY);
	            this.state = 280;
	            localctx.amount = this.expression();
	            this.state = 281;
	            this.match(TrumplangParser.FROM_KEYWORD);
	            this.state = 282;
	            localctx.account = this.match(TrumplangParser.VARIABLE);
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



	impeachStatement() {
	    let localctx = new ImpeachStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, TrumplangParser.RULE_impeachStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
	        this.match(TrumplangParser.IMPEACH);
	        this.state = 287;
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
	        this.state = 289;
	        this.match(TrumplangParser.FIRE);
	        this.state = 290;
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
	        this.state = 292;
	        this.match(TrumplangParser.EXEC_ORDER);
	        this.state = 293;
	        localctx.fromOp = this.operator();
	        this.state = 294;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 295;
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
	        this.state = 297;
	        this.match(TrumplangParser.SUPREME_COURT);
	        this.state = 298;
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
	        this.state = 300;
	        _la = this._input.LA(1);
	        if(!(((((_la - 56)) & ~0x1f) === 0 && ((1 << (_la - 56)) & 51) !== 0))) {
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
	        this.state = 302;
	        this.match(TrumplangParser.ARRAY_DECL);
	        this.state = 303;
	        localctx.arrayName = this.match(TrumplangParser.VARIABLE);
	        this.state = 304;
	        this.match(TrumplangParser.ARRAY_ELEMENTS_DECL);
	        this.state = 306;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 305;
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
	        this.state = 308;
	        this.expression();
	        this.state = 313;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 309;
	                this.match(TrumplangParser.ARRAY_CHAIN);
	                this.state = 310;
	                this.expression(); 
	            }
	            this.state = 315;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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
	        this.state = 316;
	        localctx.arrayName = this.match(TrumplangParser.VARIABLE);
	        this.state = 317;
	        this.match(TrumplangParser.ARRAY_ACCESS);
	        this.state = 318;
	        localctx.index = this.additiveExpression(0);
	        this.state = 319;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 320;
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
	        this.state = 322;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 323;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 324;
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
	        this.state = 326;
	        this.match(TrumplangParser.PRINT);
	        this.state = 327;
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
	        this.state = 329;
	        this.match(TrumplangParser.INPUT);
	        this.state = 330;
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
	        this.state = 332;
	        this.match(TrumplangParser.MAKE_DECL);
	        this.state = 333;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 334;
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
	        this.state = 336;
	        this.match(TrumplangParser.MAKE_DECL);
	        this.state = 337;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 338;
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
	        this.state = 340;
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
	        this.state = 343;
	        this.logicalOrExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 353;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 351;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_equalityExpression);
	                    this.state = 345;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 346;
	                    this.match(TrumplangParser.EQUALS);
	                    this.state = 347;
	                    this.logicalOrExpression(0);
	                    break;

	                case 2:
	                    localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_equalityExpression);
	                    this.state = 348;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 349;
	                    this.match(TrumplangParser.NOT_EQUALS);
	                    this.state = 350;
	                    this.logicalOrExpression(0);
	                    break;

	                } 
	            }
	            this.state = 355;
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
	        this.state = 357;
	        this.logicalAndExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 364;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new LogicalOrExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_logicalOrExpression);
	                this.state = 359;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 360;
	                this.match(TrumplangParser.OR);
	                this.state = 361;
	                this.logicalAndExpression(0); 
	            }
	            this.state = 366;
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
	        this.state = 368;
	        this.comparisonExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 375;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new LogicalAndExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_logicalAndExpression);
	                this.state = 370;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 371;
	                this.match(TrumplangParser.AND);
	                this.state = 372;
	                this.comparisonExpression(0); 
	            }
	            this.state = 377;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
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
	        this.state = 379;
	        this.additiveExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 395;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 393;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ComparisonExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_comparisonExpression);
	                    this.state = 381;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 382;
	                    this.match(TrumplangParser.GREATER_THAN);
	                    this.state = 383;
	                    this.additiveExpression(0);
	                    break;

	                case 2:
	                    localctx = new ComparisonExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_comparisonExpression);
	                    this.state = 384;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 385;
	                    this.match(TrumplangParser.LESS_THAN);
	                    this.state = 386;
	                    this.additiveExpression(0);
	                    break;

	                case 3:
	                    localctx = new ComparisonExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_comparisonExpression);
	                    this.state = 387;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 388;
	                    this.match(TrumplangParser.GREATER_THAN_OR_EQUALS);
	                    this.state = 389;
	                    this.additiveExpression(0);
	                    break;

	                case 4:
	                    localctx = new ComparisonExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_comparisonExpression);
	                    this.state = 390;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 391;
	                    this.match(TrumplangParser.LESS_THAN_OR_EQUALS);
	                    this.state = 392;
	                    this.additiveExpression(0);
	                    break;

	                } 
	            }
	            this.state = 397;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
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
	        this.state = 399;
	        this.term(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 412;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 410;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_additiveExpression);
	                    this.state = 401;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 402;
	                    this.match(TrumplangParser.PLUS);
	                    this.state = 403;
	                    this.term(0);
	                    break;

	                case 2:
	                    localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_additiveExpression);
	                    this.state = 404;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 405;
	                    this.match(TrumplangParser.STRING_CONCAT);
	                    this.state = 406;
	                    this.term(0);
	                    break;

	                case 3:
	                    localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_additiveExpression);
	                    this.state = 407;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 408;
	                    this.match(TrumplangParser.MINUS);
	                    this.state = 409;
	                    this.term(0);
	                    break;

	                } 
	            }
	            this.state = 414;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
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
	        this.state = 416;
	        this.powerExpression();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 429;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 427;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TermContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
	                    this.state = 418;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 419;
	                    this.match(TrumplangParser.MULTIPLY);
	                    this.state = 420;
	                    this.powerExpression();
	                    break;

	                case 2:
	                    localctx = new TermContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
	                    this.state = 421;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 422;
	                    this.match(TrumplangParser.DIVIDE);
	                    this.state = 423;
	                    this.powerExpression();
	                    break;

	                case 3:
	                    localctx = new TermContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
	                    this.state = 424;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 425;
	                    this.match(TrumplangParser.MODULO);
	                    this.state = 426;
	                    this.powerExpression();
	                    break;

	                } 
	            }
	            this.state = 431;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
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
	        this.state = 437;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 432;
	            this.unaryExpression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 433;
	            this.unaryExpression();
	            this.state = 434;
	            this.match(TrumplangParser.POWER);
	            this.state = 435;
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
	        this.state = 444;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 53:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 439;
	            this.match(TrumplangParser.NOT);
	            this.state = 440;
	            this.unaryExpression();
	            break;
	        case 57:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 441;
	            this.match(TrumplangParser.MINUS);
	            this.state = 442;
	            this.unaryExpression();
	            break;
	        case 5:
	        case 18:
	        case 76:
	        case 81:
	        case 84:
	        case 85:
	        case 86:
	        case 89:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 443;
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
	        this.state = 460;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 446;
	            this.match(TrumplangParser.OPEN_PAREN);
	            this.state = 447;
	            this.expression();
	            this.state = 448;
	            this.match(TrumplangParser.CLOSE_PAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 450;
	            this.match(TrumplangParser.VARIABLE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 451;
	            this.match(TrumplangParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 452;
	            this.match(TrumplangParser.NUMBER);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 453;
	            this.match(TrumplangParser.BOOLEAN);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 454;
	            this.functionCall();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 455;
	            this.arrayAccess();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 456;
	            this.dealAccess();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 457;
	            this.dealDeclaration();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 458;
	            this.arrayLiteral();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 459;
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
	        this.state = 462;
	        this.match(TrumplangParser.ARRAY_ELEMENTS_DECL);
	        this.state = 463;
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
	        this.state = 465;
	        localctx.arrayName = this.match(TrumplangParser.VARIABLE);
	        this.state = 466;
	        this.match(TrumplangParser.ARRAY_ACCESS);
	        this.state = 467;
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
	        this.state = 469;
	        this.dataType();
	        this.state = 470;
	        localctx.fieldName = this.match(TrumplangParser.VARIABLE);
	        this.state = 471;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 472;
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
	        this.state = 474;
	        this.match(TrumplangParser.OPEN_PAREN);
	        this.state = 475;
	        this.dealField();
	        this.state = 480;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===78) {
	            this.state = 476;
	            this.match(TrumplangParser.AMPERSAND);
	            this.state = 477;
	            this.dealField();
	            this.state = 482;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 483;
	        this.match(TrumplangParser.CLOSE_PAREN);
	        this.state = 484;
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
	        this.state = 486;
	        localctx.dealName = this.match(TrumplangParser.VARIABLE);
	        this.state = 489; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 487;
	        		this.match(TrumplangParser.DEAL_ACCESS_KEYWORD);
	        		this.state = 488;
	        		localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	        		localctx.fieldName.push(localctx._VARIABLE);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 491; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,31, this._ctx);
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
	        this.state = 493;
	        localctx.dealName = this.match(TrumplangParser.VARIABLE);
	        this.state = 496; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 494;
	            this.match(TrumplangParser.DEAL_ACCESS_KEYWORD);
	            this.state = 495;
	            localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	            localctx.fieldName.push(localctx._VARIABLE);
	            this.state = 498; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===45);
	        this.state = 500;
	        this.match(TrumplangParser.ASSIGNMENT);
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



	twoWeeksStatement() {
	    let localctx = new TwoWeeksStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, TrumplangParser.RULE_twoWeeksStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 503;
	        this.match(TrumplangParser.TWO_WEEKS);
	        this.state = 504;
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



	bankruptcyStatement() {
	    let localctx = new BankruptcyStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, TrumplangParser.RULE_bankruptcyStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 506;
	        this.match(TrumplangParser.CHAPTER_ELEVEN);
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



	stopCountStatement() {
	    let localctx = new StopCountStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, TrumplangParser.RULE_stopCountStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 508;
	        this.match(TrumplangParser.STOP_COUNT);
	        this.state = 509;
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



	weaveStatement() {
	    let localctx = new WeaveStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, TrumplangParser.RULE_weaveStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 511;
	        this.match(TrumplangParser.WEAVE);
	        this.state = 512;
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
	    this.enterRule(localctx, 106, TrumplangParser.RULE_tariffStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 514;
	        this.match(TrumplangParser.TARIFF_DECL);
	        this.state = 515;
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
	    this.enterRule(localctx, 108, TrumplangParser.RULE_factCheckStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 517;
	        this.match(TrumplangParser.ASSERT_CALL);
	        this.state = 518;
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
	    this.enterRule(localctx, 110, TrumplangParser.RULE_importStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 520;
	        this.match(TrumplangParser.IMPORT);
	        this.state = 521;
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
	    this.enterRule(localctx, 112, TrumplangParser.RULE_selectiveImport);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 523;
	        this.match(TrumplangParser.SELECTIVE_IMPORT_DECL);
	        this.state = 524;
	        localctx._IDENTIFIER = this.match(TrumplangParser.IDENTIFIER);
	        localctx.importName.push(localctx._IDENTIFIER);
	        this.state = 529;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 525;
	            this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
	            this.state = 526;
	            localctx._IDENTIFIER = this.match(TrumplangParser.IDENTIFIER);
	            localctx.importName.push(localctx._IDENTIFIER);
	            this.state = 531;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 532;
	        this.match(TrumplangParser.FROM_KEYWORD);
	        this.state = 533;
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
TrumplangParser.STOP_COUNT = 37;
TrumplangParser.CHAPTER_ELEVEN = 38;
TrumplangParser.HUSH_MONEY = 39;
TrumplangParser.FOR_EACH_LOOP_DECL = 40;
TrumplangParser.FOR_EACH_FROM = 41;
TrumplangParser.PRINT = 42;
TrumplangParser.INPUT = 43;
TrumplangParser.IMPORT = 44;
TrumplangParser.DEAL_ACCESS_KEYWORD = 45;
TrumplangParser.ASSERT_CALL = 46;
TrumplangParser.EQUALS = 47;
TrumplangParser.NOT_EQUALS = 48;
TrumplangParser.GREATER_THAN = 49;
TrumplangParser.GREATER_THAN_OR_EQUALS = 50;
TrumplangParser.LESS_THAN = 51;
TrumplangParser.LESS_THAN_OR_EQUALS = 52;
TrumplangParser.NOT = 53;
TrumplangParser.AND = 54;
TrumplangParser.OR = 55;
TrumplangParser.PLUS = 56;
TrumplangParser.MINUS = 57;
TrumplangParser.ASSIGNMENT = 58;
TrumplangParser.STRING_CONCAT = 59;
TrumplangParser.MULTIPLY = 60;
TrumplangParser.DIVIDE = 61;
TrumplangParser.MODULO = 62;
TrumplangParser.POWER = 63;
TrumplangParser.INTEGER_TYPE = 64;
TrumplangParser.FLOAT_TYPE = 65;
TrumplangParser.BOOLEAN_TYPE = 66;
TrumplangParser.STRING_TYPE = 67;
TrumplangParser.ARRAY_TYPE = 68;
TrumplangParser.STRUCTUR_TYPE = 69;
TrumplangParser.OPEN_BLOCK = 70;
TrumplangParser.CLOSE_BLOCK = 71;
TrumplangParser.MAKE_DECL = 72;
TrumplangParser.INCREMENT_OP = 73;
TrumplangParser.DECREMENT_OP = 74;
TrumplangParser.SELECTIVE_IMPORT_DECL = 75;
TrumplangParser.OPEN_PAREN = 76;
TrumplangParser.CLOSE_PAREN = 77;
TrumplangParser.AMPERSAND = 78;
TrumplangParser.DEAL_DECLARE = 79;
TrumplangParser.VAR_DECLARE = 80;
TrumplangParser.VARIABLE = 81;
TrumplangParser.IDENTIFIER = 82;
TrumplangParser.FILEPATH = 83;
TrumplangParser.STRING = 84;
TrumplangParser.NUMBER = 85;
TrumplangParser.BOOLEAN = 86;
TrumplangParser.TRUE = 87;
TrumplangParser.FALSE = 88;
TrumplangParser.NOTHING = 89;
TrumplangParser.COMMENT = 90;
TrumplangParser.WS = 91;

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
TrumplangParser.RULE_bankruptcyStatement = 50;
TrumplangParser.RULE_stopCountStatement = 51;
TrumplangParser.RULE_weaveStatement = 52;
TrumplangParser.RULE_tariffStatement = 53;
TrumplangParser.RULE_factCheckStatement = 54;
TrumplangParser.RULE_importStatement = 55;
TrumplangParser.RULE_selectiveImport = 56;

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

	stopCountStatement() {
	    return this.getTypedRuleContext(StopCountStatementContext,0);
	};

	bankruptcyStatement() {
	    return this.getTypedRuleContext(BankruptcyStatementContext,0);
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
        this.amount = null;
        this.account = null;
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

	HUSH_MONEY() {
	    return this.getToken(TrumplangParser.HUSH_MONEY, 0);
	};

	FROM_KEYWORD() {
	    return this.getToken(TrumplangParser.FROM_KEYWORD, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
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



class BankruptcyStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_bankruptcyStatement;
    }

	CHAPTER_ELEVEN() {
	    return this.getToken(TrumplangParser.CHAPTER_ELEVEN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterBankruptcyStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitBankruptcyStatement(this);
		}
	}


}



class StopCountStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = TrumplangParser.RULE_stopCountStatement;
    }

	STOP_COUNT() {
	    return this.getToken(TrumplangParser.STOP_COUNT, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.enterStopCountStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof TrumplangListener ) {
	        listener.exitStopCountStatement(this);
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
TrumplangParser.BankruptcyStatementContext = BankruptcyStatementContext; 
TrumplangParser.StopCountStatementContext = StopCountStatementContext; 
TrumplangParser.WeaveStatementContext = WeaveStatementContext; 
TrumplangParser.TariffStatementContext = TariffStatementContext; 
TrumplangParser.FactCheckStatementContext = FactCheckStatementContext; 
TrumplangParser.ImportStatementContext = ImportStatementContext; 
TrumplangParser.SelectiveImportContext = SelectiveImportContext; 

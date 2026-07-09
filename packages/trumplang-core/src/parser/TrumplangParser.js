// jshint ignore: start
import antlr4 from 'antlr4';
import TrumplangListener from './TrumplangListener.js';
const serializedATN = [4,1,87,517,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
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
8,6,1,6,1,6,1,7,1,7,5,7,186,8,7,10,7,12,7,189,9,7,1,7,1,7,1,8,1,8,1,8,1,
8,1,8,1,8,5,8,199,8,8,10,8,12,8,202,9,8,1,9,1,9,1,9,1,10,1,10,1,10,1,10,
3,10,211,8,10,1,11,1,11,1,11,5,11,216,8,11,10,11,12,11,219,9,11,1,12,1,12,
1,12,1,12,5,12,225,8,12,10,12,12,12,228,9,12,1,12,3,12,231,8,12,1,13,1,13,
1,13,1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,
16,1,16,1,16,1,16,3,16,253,8,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,
1,18,1,18,1,19,1,19,1,19,1,19,3,19,269,8,19,1,19,1,19,1,20,1,20,1,20,1,21,
1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,24,1,24,1,25,1,25,1,
25,1,25,3,25,293,8,25,1,26,1,26,1,26,5,26,298,8,26,10,26,12,26,301,9,26,
1,27,1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,30,1,
30,1,30,1,31,1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,33,1,33,1,34,1,34,1,34,
1,34,1,34,1,34,1,34,1,34,1,34,5,34,338,8,34,10,34,12,34,341,9,34,1,35,1,
35,1,35,1,35,1,35,1,35,5,35,349,8,35,10,35,12,35,352,9,35,1,36,1,36,1,36,
1,36,1,36,1,36,5,36,360,8,36,10,36,12,36,363,9,36,1,37,1,37,1,37,1,37,1,
37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,5,37,380,8,37,10,37,
12,37,383,9,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,
38,5,38,397,8,38,10,38,12,38,400,9,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,
1,39,1,39,1,39,1,39,1,39,5,39,414,8,39,10,39,12,39,417,9,39,1,40,1,40,1,
40,1,40,1,40,3,40,424,8,40,1,41,1,41,1,41,1,41,1,41,3,41,431,8,41,1,42,1,
42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,447,
8,42,1,43,1,43,1,43,1,44,1,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,46,1,
46,1,46,1,46,5,46,465,8,46,10,46,12,46,468,9,46,1,46,1,46,1,46,1,47,1,47,
1,47,4,47,476,8,47,11,47,12,47,477,1,48,1,48,1,48,4,48,483,8,48,11,48,12,
48,484,1,48,1,48,1,48,1,49,1,49,1,49,1,50,1,50,1,50,1,51,1,51,1,51,1,52,
1,52,1,52,1,53,1,53,1,53,1,54,1,54,1,54,1,54,5,54,509,8,54,10,54,12,54,512,
9,54,1,54,1,54,1,54,1,54,0,6,68,70,72,74,76,78,55,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,0,
2,1,0,60,65,2,0,52,53,56,57,536,0,110,1,0,0,0,2,149,1,0,0,0,4,154,1,0,0,
0,6,156,1,0,0,0,8,162,1,0,0,0,10,168,1,0,0,0,12,170,1,0,0,0,14,183,1,0,0,
0,16,192,1,0,0,0,18,203,1,0,0,0,20,206,1,0,0,0,22,212,1,0,0,0,24,220,1,0,
0,0,26,232,1,0,0,0,28,236,1,0,0,0,30,239,1,0,0,0,32,243,1,0,0,0,34,256,1,
0,0,0,36,262,1,0,0,0,38,264,1,0,0,0,40,272,1,0,0,0,42,275,1,0,0,0,44,278,
1,0,0,0,46,283,1,0,0,0,48,286,1,0,0,0,50,288,1,0,0,0,52,294,1,0,0,0,54,302,
1,0,0,0,56,308,1,0,0,0,58,312,1,0,0,0,60,315,1,0,0,0,62,318,1,0,0,0,64,322,
1,0,0,0,66,326,1,0,0,0,68,328,1,0,0,0,70,342,1,0,0,0,72,353,1,0,0,0,74,364,
1,0,0,0,76,384,1,0,0,0,78,401,1,0,0,0,80,423,1,0,0,0,82,430,1,0,0,0,84,446,
1,0,0,0,86,448,1,0,0,0,88,451,1,0,0,0,90,455,1,0,0,0,92,460,1,0,0,0,94,472,
1,0,0,0,96,479,1,0,0,0,98,489,1,0,0,0,100,492,1,0,0,0,102,495,1,0,0,0,104,
498,1,0,0,0,106,501,1,0,0,0,108,504,1,0,0,0,110,112,5,8,0,0,111,113,3,2,
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
3,1,0,0,0,154,155,5,86,0,0,155,5,1,0,0,0,156,157,5,12,0,0,157,158,3,10,5,
0,158,159,5,77,0,0,159,160,5,54,0,0,160,161,3,66,33,0,161,7,1,0,0,0,162,
163,5,13,0,0,163,164,3,10,5,0,164,165,5,77,0,0,165,166,5,54,0,0,166,167,
3,66,33,0,167,9,1,0,0,0,168,169,7,0,0,0,169,11,1,0,0,0,170,171,5,10,0,0,
171,172,5,78,0,0,172,173,5,11,0,0,173,175,5,14,0,0,174,176,3,16,8,0,175,
174,1,0,0,0,175,176,1,0,0,0,176,179,1,0,0,0,177,178,5,17,0,0,178,180,3,10,
5,0,179,177,1,0,0,0,179,180,1,0,0,0,180,181,1,0,0,0,181,182,3,14,7,0,182,
13,1,0,0,0,183,187,5,66,0,0,184,186,3,2,1,0,185,184,1,0,0,0,186,189,1,0,
0,0,187,185,1,0,0,0,187,188,1,0,0,0,188,190,1,0,0,0,189,187,1,0,0,0,190,
191,5,67,0,0,191,15,1,0,0,0,192,193,3,10,5,0,193,200,5,77,0,0,194,195,5,
15,0,0,195,196,3,10,5,0,196,197,5,77,0,0,197,199,1,0,0,0,198,194,1,0,0,0,
199,202,1,0,0,0,200,198,1,0,0,0,200,201,1,0,0,0,201,17,1,0,0,0,202,200,1,
0,0,0,203,204,5,16,0,0,204,205,3,66,33,0,205,19,1,0,0,0,206,207,5,18,0,0,
207,208,5,78,0,0,208,210,5,14,0,0,209,211,3,22,11,0,210,209,1,0,0,0,210,
211,1,0,0,0,211,21,1,0,0,0,212,217,3,66,33,0,213,214,5,15,0,0,214,216,3,
66,33,0,215,213,1,0,0,0,216,219,1,0,0,0,217,215,1,0,0,0,217,218,1,0,0,0,
218,23,1,0,0,0,219,217,1,0,0,0,220,221,5,1,0,0,221,222,3,66,33,0,222,226,
3,2,1,0,223,225,3,26,13,0,224,223,1,0,0,0,225,228,1,0,0,0,226,224,1,0,0,
0,226,227,1,0,0,0,227,230,1,0,0,0,228,226,1,0,0,0,229,231,3,28,14,0,230,
229,1,0,0,0,230,231,1,0,0,0,231,25,1,0,0,0,232,233,5,2,0,0,233,234,3,66,
33,0,234,235,3,2,1,0,235,27,1,0,0,0,236,237,5,3,0,0,237,238,3,2,1,0,238,
29,1,0,0,0,239,240,5,27,0,0,240,241,3,66,33,0,241,242,3,14,7,0,242,31,1,
0,0,0,243,244,5,28,0,0,244,245,5,29,0,0,245,246,5,77,0,0,246,247,5,30,0,
0,247,248,3,66,33,0,248,249,5,31,0,0,249,252,3,66,33,0,250,251,5,32,0,0,
251,253,3,66,33,0,252,250,1,0,0,0,252,253,1,0,0,0,253,254,1,0,0,0,254,255,
3,14,7,0,255,33,1,0,0,0,256,257,5,36,0,0,257,258,5,77,0,0,258,259,5,37,0,
0,259,260,5,77,0,0,260,261,3,14,7,0,261,35,1,0,0,0,262,263,5,19,0,0,263,
37,1,0,0,0,264,265,5,22,0,0,265,266,3,14,7,0,266,268,5,23,0,0,267,269,5,
77,0,0,268,267,1,0,0,0,268,269,1,0,0,0,269,270,1,0,0,0,270,271,3,14,7,0,
271,39,1,0,0,0,272,273,5,24,0,0,273,274,3,66,33,0,274,41,1,0,0,0,275,276,
5,21,0,0,276,277,5,78,0,0,277,43,1,0,0,0,278,279,5,25,0,0,279,280,3,48,24,
0,280,281,5,54,0,0,281,282,3,48,24,0,282,45,1,0,0,0,283,284,5,26,0,0,284,
285,3,48,24,0,285,47,1,0,0,0,286,287,7,1,0,0,287,49,1,0,0,0,288,289,5,4,
0,0,289,290,5,77,0,0,290,292,5,5,0,0,291,293,3,52,26,0,292,291,1,0,0,0,292,
293,1,0,0,0,293,51,1,0,0,0,294,299,3,66,33,0,295,296,5,7,0,0,296,298,3,66,
33,0,297,295,1,0,0,0,298,301,1,0,0,0,299,297,1,0,0,0,299,300,1,0,0,0,300,
53,1,0,0,0,301,299,1,0,0,0,302,303,5,77,0,0,303,304,5,6,0,0,304,305,3,76,
38,0,305,306,5,54,0,0,306,307,3,66,33,0,307,55,1,0,0,0,308,309,5,77,0,0,
309,310,5,54,0,0,310,311,3,66,33,0,311,57,1,0,0,0,312,313,5,38,0,0,313,314,
3,66,33,0,314,59,1,0,0,0,315,316,5,39,0,0,316,317,5,77,0,0,317,61,1,0,0,
0,318,319,5,68,0,0,319,320,5,77,0,0,320,321,5,69,0,0,321,63,1,0,0,0,322,
323,5,68,0,0,323,324,5,77,0,0,324,325,5,70,0,0,325,65,1,0,0,0,326,327,3,
68,34,0,327,67,1,0,0,0,328,329,6,34,-1,0,329,330,3,70,35,0,330,339,1,0,0,
0,331,332,10,2,0,0,332,333,5,43,0,0,333,338,3,70,35,0,334,335,10,1,0,0,335,
336,5,44,0,0,336,338,3,70,35,0,337,331,1,0,0,0,337,334,1,0,0,0,338,341,1,
0,0,0,339,337,1,0,0,0,339,340,1,0,0,0,340,69,1,0,0,0,341,339,1,0,0,0,342,
343,6,35,-1,0,343,344,3,72,36,0,344,350,1,0,0,0,345,346,10,1,0,0,346,347,
5,51,0,0,347,349,3,72,36,0,348,345,1,0,0,0,349,352,1,0,0,0,350,348,1,0,0,
0,350,351,1,0,0,0,351,71,1,0,0,0,352,350,1,0,0,0,353,354,6,36,-1,0,354,355,
3,74,37,0,355,361,1,0,0,0,356,357,10,1,0,0,357,358,5,50,0,0,358,360,3,74,
37,0,359,356,1,0,0,0,360,363,1,0,0,0,361,359,1,0,0,0,361,362,1,0,0,0,362,
73,1,0,0,0,363,361,1,0,0,0,364,365,6,37,-1,0,365,366,3,76,38,0,366,381,1,
0,0,0,367,368,10,4,0,0,368,369,5,45,0,0,369,380,3,76,38,0,370,371,10,3,0,
0,371,372,5,47,0,0,372,380,3,76,38,0,373,374,10,2,0,0,374,375,5,46,0,0,375,
380,3,76,38,0,376,377,10,1,0,0,377,378,5,48,0,0,378,380,3,76,38,0,379,367,
1,0,0,0,379,370,1,0,0,0,379,373,1,0,0,0,379,376,1,0,0,0,380,383,1,0,0,0,
381,379,1,0,0,0,381,382,1,0,0,0,382,75,1,0,0,0,383,381,1,0,0,0,384,385,6,
38,-1,0,385,386,3,78,39,0,386,398,1,0,0,0,387,388,10,3,0,0,388,389,5,52,
0,0,389,397,3,78,39,0,390,391,10,2,0,0,391,392,5,55,0,0,392,397,3,78,39,
0,393,394,10,1,0,0,394,395,5,53,0,0,395,397,3,78,39,0,396,387,1,0,0,0,396,
390,1,0,0,0,396,393,1,0,0,0,397,400,1,0,0,0,398,396,1,0,0,0,398,399,1,0,
0,0,399,77,1,0,0,0,400,398,1,0,0,0,401,402,6,39,-1,0,402,403,3,80,40,0,403,
415,1,0,0,0,404,405,10,3,0,0,405,406,5,56,0,0,406,414,3,80,40,0,407,408,
10,2,0,0,408,409,5,57,0,0,409,414,3,80,40,0,410,411,10,1,0,0,411,412,5,58,
0,0,412,414,3,80,40,0,413,404,1,0,0,0,413,407,1,0,0,0,413,410,1,0,0,0,414,
417,1,0,0,0,415,413,1,0,0,0,415,416,1,0,0,0,416,79,1,0,0,0,417,415,1,0,0,
0,418,424,3,82,41,0,419,420,3,82,41,0,420,421,5,59,0,0,421,422,3,80,40,0,
422,424,1,0,0,0,423,418,1,0,0,0,423,419,1,0,0,0,424,81,1,0,0,0,425,426,5,
49,0,0,426,431,3,82,41,0,427,428,5,53,0,0,428,431,3,82,41,0,429,431,3,84,
42,0,430,425,1,0,0,0,430,427,1,0,0,0,430,429,1,0,0,0,431,83,1,0,0,0,432,
433,5,72,0,0,433,434,3,66,33,0,434,435,5,73,0,0,435,447,1,0,0,0,436,447,
5,77,0,0,437,447,5,80,0,0,438,447,5,81,0,0,439,447,5,82,0,0,440,447,3,20,
10,0,441,447,3,88,44,0,442,447,3,94,47,0,443,447,3,92,46,0,444,447,3,86,
43,0,445,447,5,85,0,0,446,432,1,0,0,0,446,436,1,0,0,0,446,437,1,0,0,0,446,
438,1,0,0,0,446,439,1,0,0,0,446,440,1,0,0,0,446,441,1,0,0,0,446,442,1,0,
0,0,446,443,1,0,0,0,446,444,1,0,0,0,446,445,1,0,0,0,447,85,1,0,0,0,448,449,
5,5,0,0,449,450,3,52,26,0,450,87,1,0,0,0,451,452,5,77,0,0,452,453,5,6,0,
0,453,454,3,76,38,0,454,89,1,0,0,0,455,456,3,10,5,0,456,457,5,77,0,0,457,
458,5,54,0,0,458,459,3,66,33,0,459,91,1,0,0,0,460,461,5,72,0,0,461,466,3,
90,45,0,462,463,5,74,0,0,463,465,3,90,45,0,464,462,1,0,0,0,465,468,1,0,0,
0,466,464,1,0,0,0,466,467,1,0,0,0,467,469,1,0,0,0,468,466,1,0,0,0,469,470,
5,73,0,0,470,471,5,75,0,0,471,93,1,0,0,0,472,475,5,77,0,0,473,474,5,41,0,
0,474,476,5,77,0,0,475,473,1,0,0,0,476,477,1,0,0,0,477,475,1,0,0,0,477,478,
1,0,0,0,478,95,1,0,0,0,479,482,5,77,0,0,480,481,5,41,0,0,481,483,5,77,0,
0,482,480,1,0,0,0,483,484,1,0,0,0,484,482,1,0,0,0,484,485,1,0,0,0,485,486,
1,0,0,0,486,487,5,54,0,0,487,488,3,66,33,0,488,97,1,0,0,0,489,490,5,33,0,
0,490,491,3,14,7,0,491,99,1,0,0,0,492,493,5,35,0,0,493,494,3,14,7,0,494,
101,1,0,0,0,495,496,5,34,0,0,496,497,3,66,33,0,497,103,1,0,0,0,498,499,5,
42,0,0,499,500,3,66,33,0,500,105,1,0,0,0,501,502,5,40,0,0,502,503,5,79,0,
0,503,107,1,0,0,0,504,505,5,71,0,0,505,510,5,78,0,0,506,507,5,15,0,0,507,
509,5,78,0,0,508,506,1,0,0,0,509,512,1,0,0,0,510,508,1,0,0,0,510,511,1,0,
0,0,511,513,1,0,0,0,512,510,1,0,0,0,513,514,5,30,0,0,514,515,5,79,0,0,515,
109,1,0,0,0,32,114,149,152,175,179,187,200,210,217,226,230,252,268,292,299,
337,339,350,361,379,381,396,398,413,415,423,430,446,466,477,484,510];


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
                            "'THE WEAVE'", "'BILLIONS AND BILLIONS'", "'YET'", 
                            "'EVERYONE IS TALKING ABOUT'", "'MANY PEOPLE ARE ASKING'", 
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
                             "TARIFF_DECL", "WEAVE", "FOR_EACH_LOOP_DECL", 
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
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 527250450) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 751) !== 0) || ((((_la - 66)) & ~0x1f) === 0 && ((1 << (_la - 66)) & 1050661) !== 0));
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
	        if(!(((((_la - 60)) & ~0x1f) === 0 && ((1 << (_la - 60)) & 63) !== 0))) {
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
	        if(((((_la - 60)) & ~0x1f) === 0 && ((1 << (_la - 60)) & 63) !== 0)) {
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

	        this.state = 181;
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
	        this.state = 183;
	        this.match(TrumplangParser.OPEN_BLOCK);
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 527250450) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 751) !== 0) || ((((_la - 66)) & ~0x1f) === 0 && ((1 << (_la - 66)) & 1050661) !== 0)) {
	            this.state = 184;
	            this.statement();
	            this.state = 189;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 190;
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
	        this.state = 192;
	        this.dataType();
	        this.state = 193;
	        localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	        localctx.paramName.push(localctx._VARIABLE);
	        this.state = 200;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 194;
	            this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
	            this.state = 195;
	            this.dataType();
	            this.state = 196;
	            localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	            localctx.paramName.push(localctx._VARIABLE);
	            this.state = 202;
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
	        this.state = 203;
	        this.match(TrumplangParser.RETURN);
	        this.state = 204;
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
	        this.state = 206;
	        this.match(TrumplangParser.FUNC_CALL);
	        this.state = 207;
	        localctx.funcName = this.match(TrumplangParser.IDENTIFIER);
	        this.state = 208;
	        this.match(TrumplangParser.PARAMS_ARGS_START);
	        this.state = 210;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 209;
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
	        this.state = 212;
	        this.expression();
	        this.state = 217;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 213;
	                this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
	                this.state = 214;
	                this.expression(); 
	            }
	            this.state = 219;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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
	        this.state = 220;
	        this.match(TrumplangParser.IF_DECL);
	        this.state = 221;
	        this.expression();
	        this.state = 222;
	        this.statement();
	        this.state = 226;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 223;
	                this.elseIfStatement(); 
	            }
	            this.state = 228;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	        this.state = 230;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 229;
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
	        this.state = 232;
	        this.match(TrumplangParser.ELSE_IF_DECL);
	        this.state = 233;
	        this.expression();
	        this.state = 234;
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
	        this.state = 236;
	        this.match(TrumplangParser.ELSE_DECL);
	        this.state = 237;
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
	        this.state = 239;
	        this.match(TrumplangParser.WHILE_LOOP_DECL);
	        this.state = 240;
	        this.expression();
	        this.state = 241;
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
	        this.state = 243;
	        this.match(TrumplangParser.FOR_LOOP_DECL);
	        this.state = 244;
	        this.match(TrumplangParser.FOR_LOOP_WITH);
	        this.state = 245;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 246;
	        this.match(TrumplangParser.FROM_KEYWORD);
	        this.state = 247;
	        this.expression();
	        this.state = 248;
	        this.match(TrumplangParser.FOR_LOOP_TO);
	        this.state = 249;
	        this.expression();
	        this.state = 252;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 250;
	            this.match(TrumplangParser.FOR_LOOP_STEP);
	            this.state = 251;
	            this.expression();
	        }

	        this.state = 254;
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
	        this.state = 256;
	        this.match(TrumplangParser.FOR_EACH_LOOP_DECL);
	        this.state = 257;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 258;
	        this.match(TrumplangParser.FOR_EACH_FROM);
	        this.state = 259;
	        localctx.listName = this.match(TrumplangParser.VARIABLE);
	        this.state = 260;
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
	        this.state = 262;
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
	        this.state = 264;
	        this.match(TrumplangParser.TRY_DECL);
	        this.state = 265;
	        this.blockStatement();
	        this.state = 266;
	        this.match(TrumplangParser.CATCH_DECL);
	        this.state = 268;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===77) {
	            this.state = 267;
	            localctx.errName = this.match(TrumplangParser.VARIABLE);
	        }

	        this.state = 270;
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
	        this.state = 272;
	        this.match(TrumplangParser.IMPEACH);
	        this.state = 273;
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
	        this.state = 275;
	        this.match(TrumplangParser.FIRE);
	        this.state = 276;
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
	        this.state = 278;
	        this.match(TrumplangParser.EXEC_ORDER);
	        this.state = 279;
	        localctx.fromOp = this.operator();
	        this.state = 280;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 281;
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
	        this.state = 283;
	        this.match(TrumplangParser.SUPREME_COURT);
	        this.state = 284;
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
	        this.state = 286;
	        _la = this._input.LA(1);
	        if(!(((((_la - 52)) & ~0x1f) === 0 && ((1 << (_la - 52)) & 51) !== 0))) {
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
	        this.state = 288;
	        this.match(TrumplangParser.ARRAY_DECL);
	        this.state = 289;
	        localctx.arrayName = this.match(TrumplangParser.VARIABLE);
	        this.state = 290;
	        this.match(TrumplangParser.ARRAY_ELEMENTS_DECL);
	        this.state = 292;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 291;
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
	        this.state = 294;
	        this.expression();
	        this.state = 299;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 295;
	                this.match(TrumplangParser.ARRAY_CHAIN);
	                this.state = 296;
	                this.expression(); 
	            }
	            this.state = 301;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
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
	        this.state = 302;
	        localctx.arrayName = this.match(TrumplangParser.VARIABLE);
	        this.state = 303;
	        this.match(TrumplangParser.ARRAY_ACCESS);
	        this.state = 304;
	        localctx.index = this.additiveExpression(0);
	        this.state = 305;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 306;
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
	        this.state = 308;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 309;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 310;
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
	        this.state = 312;
	        this.match(TrumplangParser.PRINT);
	        this.state = 313;
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
	        this.state = 315;
	        this.match(TrumplangParser.INPUT);
	        this.state = 316;
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
	        this.state = 318;
	        this.match(TrumplangParser.MAKE_DECL);
	        this.state = 319;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 320;
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
	        this.state = 322;
	        this.match(TrumplangParser.MAKE_DECL);
	        this.state = 323;
	        localctx.varName = this.match(TrumplangParser.VARIABLE);
	        this.state = 324;
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
	        this.state = 326;
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
	        this.state = 329;
	        this.logicalOrExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 339;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 337;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_equalityExpression);
	                    this.state = 331;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 332;
	                    this.match(TrumplangParser.EQUALS);
	                    this.state = 333;
	                    this.logicalOrExpression(0);
	                    break;

	                case 2:
	                    localctx = new EqualityExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_equalityExpression);
	                    this.state = 334;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 335;
	                    this.match(TrumplangParser.NOT_EQUALS);
	                    this.state = 336;
	                    this.logicalOrExpression(0);
	                    break;

	                } 
	            }
	            this.state = 341;
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
	        this.state = 343;
	        this.logicalAndExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 350;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new LogicalOrExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_logicalOrExpression);
	                this.state = 345;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 346;
	                this.match(TrumplangParser.OR);
	                this.state = 347;
	                this.logicalAndExpression(0); 
	            }
	            this.state = 352;
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
	        this.state = 354;
	        this.comparisonExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 361;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new LogicalAndExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_logicalAndExpression);
	                this.state = 356;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 357;
	                this.match(TrumplangParser.AND);
	                this.state = 358;
	                this.comparisonExpression(0); 
	            }
	            this.state = 363;
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
	        this.state = 365;
	        this.additiveExpression(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 381;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 379;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ComparisonExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_comparisonExpression);
	                    this.state = 367;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 368;
	                    this.match(TrumplangParser.GREATER_THAN);
	                    this.state = 369;
	                    this.additiveExpression(0);
	                    break;

	                case 2:
	                    localctx = new ComparisonExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_comparisonExpression);
	                    this.state = 370;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 371;
	                    this.match(TrumplangParser.LESS_THAN);
	                    this.state = 372;
	                    this.additiveExpression(0);
	                    break;

	                case 3:
	                    localctx = new ComparisonExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_comparisonExpression);
	                    this.state = 373;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 374;
	                    this.match(TrumplangParser.GREATER_THAN_OR_EQUALS);
	                    this.state = 375;
	                    this.additiveExpression(0);
	                    break;

	                case 4:
	                    localctx = new ComparisonExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_comparisonExpression);
	                    this.state = 376;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 377;
	                    this.match(TrumplangParser.LESS_THAN_OR_EQUALS);
	                    this.state = 378;
	                    this.additiveExpression(0);
	                    break;

	                } 
	            }
	            this.state = 383;
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
	        this.state = 385;
	        this.term(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 398;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 396;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_additiveExpression);
	                    this.state = 387;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 388;
	                    this.match(TrumplangParser.PLUS);
	                    this.state = 389;
	                    this.term(0);
	                    break;

	                case 2:
	                    localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_additiveExpression);
	                    this.state = 390;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 391;
	                    this.match(TrumplangParser.STRING_CONCAT);
	                    this.state = 392;
	                    this.term(0);
	                    break;

	                case 3:
	                    localctx = new AdditiveExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_additiveExpression);
	                    this.state = 393;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 394;
	                    this.match(TrumplangParser.MINUS);
	                    this.state = 395;
	                    this.term(0);
	                    break;

	                } 
	            }
	            this.state = 400;
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
	        this.state = 402;
	        this.powerExpression();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 415;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 413;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TermContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
	                    this.state = 404;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 405;
	                    this.match(TrumplangParser.MULTIPLY);
	                    this.state = 406;
	                    this.powerExpression();
	                    break;

	                case 2:
	                    localctx = new TermContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
	                    this.state = 407;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 408;
	                    this.match(TrumplangParser.DIVIDE);
	                    this.state = 409;
	                    this.powerExpression();
	                    break;

	                case 3:
	                    localctx = new TermContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
	                    this.state = 410;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 411;
	                    this.match(TrumplangParser.MODULO);
	                    this.state = 412;
	                    this.powerExpression();
	                    break;

	                } 
	            }
	            this.state = 417;
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



	powerExpression() {
	    let localctx = new PowerExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, TrumplangParser.RULE_powerExpression);
	    try {
	        this.state = 423;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 418;
	            this.unaryExpression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 419;
	            this.unaryExpression();
	            this.state = 420;
	            this.match(TrumplangParser.POWER);
	            this.state = 421;
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
	        this.state = 430;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 49:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 425;
	            this.match(TrumplangParser.NOT);
	            this.state = 426;
	            this.unaryExpression();
	            break;
	        case 53:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 427;
	            this.match(TrumplangParser.MINUS);
	            this.state = 428;
	            this.unaryExpression();
	            break;
	        case 5:
	        case 18:
	        case 72:
	        case 77:
	        case 80:
	        case 81:
	        case 82:
	        case 85:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 429;
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
	        this.state = 446;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 432;
	            this.match(TrumplangParser.OPEN_PAREN);
	            this.state = 433;
	            this.expression();
	            this.state = 434;
	            this.match(TrumplangParser.CLOSE_PAREN);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 436;
	            this.match(TrumplangParser.VARIABLE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 437;
	            this.match(TrumplangParser.STRING);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 438;
	            this.match(TrumplangParser.NUMBER);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 439;
	            this.match(TrumplangParser.BOOLEAN);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 440;
	            this.functionCall();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 441;
	            this.arrayAccess();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 442;
	            this.dealAccess();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 443;
	            this.dealDeclaration();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 444;
	            this.arrayLiteral();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 445;
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
	        this.state = 448;
	        this.match(TrumplangParser.ARRAY_ELEMENTS_DECL);
	        this.state = 449;
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
	        this.state = 451;
	        localctx.arrayName = this.match(TrumplangParser.VARIABLE);
	        this.state = 452;
	        this.match(TrumplangParser.ARRAY_ACCESS);
	        this.state = 453;
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
	        this.state = 455;
	        this.dataType();
	        this.state = 456;
	        localctx.fieldName = this.match(TrumplangParser.VARIABLE);
	        this.state = 457;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 458;
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
	        this.state = 460;
	        this.match(TrumplangParser.OPEN_PAREN);
	        this.state = 461;
	        this.dealField();
	        this.state = 466;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===74) {
	            this.state = 462;
	            this.match(TrumplangParser.AMPERSAND);
	            this.state = 463;
	            this.dealField();
	            this.state = 468;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 469;
	        this.match(TrumplangParser.CLOSE_PAREN);
	        this.state = 470;
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
	        this.state = 472;
	        localctx.dealName = this.match(TrumplangParser.VARIABLE);
	        this.state = 475; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 473;
	        		this.match(TrumplangParser.DEAL_ACCESS_KEYWORD);
	        		this.state = 474;
	        		localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	        		localctx.fieldName.push(localctx._VARIABLE);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 477; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,29, this._ctx);
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
	        this.state = 479;
	        localctx.dealName = this.match(TrumplangParser.VARIABLE);
	        this.state = 482; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 480;
	            this.match(TrumplangParser.DEAL_ACCESS_KEYWORD);
	            this.state = 481;
	            localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
	            localctx.fieldName.push(localctx._VARIABLE);
	            this.state = 484; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===41);
	        this.state = 486;
	        this.match(TrumplangParser.ASSIGNMENT);
	        this.state = 487;
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
	        this.state = 489;
	        this.match(TrumplangParser.TWO_WEEKS);
	        this.state = 490;
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
	        this.state = 492;
	        this.match(TrumplangParser.WEAVE);
	        this.state = 493;
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
	        this.state = 495;
	        this.match(TrumplangParser.TARIFF_DECL);
	        this.state = 496;
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
	        this.state = 498;
	        this.match(TrumplangParser.ASSERT_CALL);
	        this.state = 499;
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
	        this.state = 501;
	        this.match(TrumplangParser.IMPORT);
	        this.state = 502;
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
	        this.state = 504;
	        this.match(TrumplangParser.SELECTIVE_IMPORT_DECL);
	        this.state = 505;
	        localctx._IDENTIFIER = this.match(TrumplangParser.IDENTIFIER);
	        localctx.importName.push(localctx._IDENTIFIER);
	        this.state = 510;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 506;
	            this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
	            this.state = 507;
	            localctx._IDENTIFIER = this.match(TrumplangParser.IDENTIFIER);
	            localctx.importName.push(localctx._IDENTIFIER);
	            this.state = 512;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 513;
	        this.match(TrumplangParser.FROM_KEYWORD);
	        this.state = 514;
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
TrumplangParser.FOR_EACH_LOOP_DECL = 36;
TrumplangParser.FOR_EACH_FROM = 37;
TrumplangParser.PRINT = 38;
TrumplangParser.INPUT = 39;
TrumplangParser.IMPORT = 40;
TrumplangParser.DEAL_ACCESS_KEYWORD = 41;
TrumplangParser.ASSERT_CALL = 42;
TrumplangParser.EQUALS = 43;
TrumplangParser.NOT_EQUALS = 44;
TrumplangParser.GREATER_THAN = 45;
TrumplangParser.GREATER_THAN_OR_EQUALS = 46;
TrumplangParser.LESS_THAN = 47;
TrumplangParser.LESS_THAN_OR_EQUALS = 48;
TrumplangParser.NOT = 49;
TrumplangParser.AND = 50;
TrumplangParser.OR = 51;
TrumplangParser.PLUS = 52;
TrumplangParser.MINUS = 53;
TrumplangParser.ASSIGNMENT = 54;
TrumplangParser.STRING_CONCAT = 55;
TrumplangParser.MULTIPLY = 56;
TrumplangParser.DIVIDE = 57;
TrumplangParser.MODULO = 58;
TrumplangParser.POWER = 59;
TrumplangParser.INTEGER_TYPE = 60;
TrumplangParser.FLOAT_TYPE = 61;
TrumplangParser.BOOLEAN_TYPE = 62;
TrumplangParser.STRING_TYPE = 63;
TrumplangParser.ARRAY_TYPE = 64;
TrumplangParser.STRUCTUR_TYPE = 65;
TrumplangParser.OPEN_BLOCK = 66;
TrumplangParser.CLOSE_BLOCK = 67;
TrumplangParser.MAKE_DECL = 68;
TrumplangParser.INCREMENT_OP = 69;
TrumplangParser.DECREMENT_OP = 70;
TrumplangParser.SELECTIVE_IMPORT_DECL = 71;
TrumplangParser.OPEN_PAREN = 72;
TrumplangParser.CLOSE_PAREN = 73;
TrumplangParser.AMPERSAND = 74;
TrumplangParser.DEAL_DECLARE = 75;
TrumplangParser.VAR_DECLARE = 76;
TrumplangParser.VARIABLE = 77;
TrumplangParser.IDENTIFIER = 78;
TrumplangParser.FILEPATH = 79;
TrumplangParser.STRING = 80;
TrumplangParser.NUMBER = 81;
TrumplangParser.BOOLEAN = 82;
TrumplangParser.TRUE = 83;
TrumplangParser.FALSE = 84;
TrumplangParser.NOTHING = 85;
TrumplangParser.COMMENT = 86;
TrumplangParser.WS = 87;

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

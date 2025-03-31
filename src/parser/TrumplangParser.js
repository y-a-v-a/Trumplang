// Generated from Trumplang.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TrumplangListener = require('./TrumplangListener').TrumplangListener;
var TrumplangVisitor = require('./TrumplangVisitor').TrumplangVisitor;

var grammarFileName = "Trumplang.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003E\u018a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0003\u0002\u0003\u0002\u0006\u0002O\n\u0002\r\u0002",
    "\u000e\u0002P\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003i\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005s\n\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b\u0081\n\b",
    "\u0003\b\u0003\b\u0007\b\u0085\n\b\f\b\u000e\b\u0088\u000b\b\u0003\b",
    "\u0005\b\u008b\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0007\t\u0095\n\t\f\t\u000e\t\u0098\u000b\t\u0003\n\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0005\u000b",
    "\u00a1\n\u000b\u0003\f\u0003\f\u0003\f\u0007\f\u00a6\n\f\f\f\u000e\f",
    "\u00a9\u000b\f\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u00af\n\r\f\r",
    "\u000e\r\u00b2\u000b\r\u0003\r\u0007\r\u00b5\n\r\f\r\u000e\r\u00b8\u000b",
    "\r\u0003\r\u0005\r\u00bb\n\r\u0003\r\u0003\r\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0007\u000e\u00c3\n\u000e\f\u000e\u000e\u000e",
    "\u00c6\u000b\u000e\u0003\u000f\u0003\u000f\u0007\u000f\u00ca\n\u000f",
    "\f\u000f\u000e\u000f\u00cd\u000b\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0007\u0010\u00d3\n\u0010\f\u0010\u000e\u0010\u00d6",
    "\u000b\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0007\u0011\u00e3\n\u0011\f\u0011\u000e\u0011\u00e6\u000b\u0011\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0007\u0012\u00f0\n\u0012\f\u0012\u000e\u0012\u00f3",
    "\u000b\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00fd\n\u0014\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0007\u0015\u0102\n\u0015\f\u0015\u000e",
    "\u0015\u0105\u000b\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u0120\n\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0007",
    "\u001b\u0128\n\u001b\f\u001b\u000e\u001b\u012b\u000b\u001b\u0003\u001c",
    "\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0007\u001d\u013b\n\u001d\f\u001d\u000e\u001d\u013e\u000b",
    "\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0007\u001e\u0149\n\u001e",
    "\f\u001e\u000e\u001e\u014c\u000b\u001e\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u0159\n\u001f\u0003 \u0003",
    " \u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0007\"\u0168\n\"\f\"\u000e\"\u016b\u000b\"\u0003\"\u0003",
    "\"\u0003#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0005$\u0176\n$",
    "\u0003$\u0003$\u0003$\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003",
    "&\u0007&\u0182\n&\f&\u000e&\u0185\u000b&\u0003&\u0003&\u0003&\u0003",
    "&\u0002\u000548:\'\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJ\u0002\u0004\u0003\u0002",
    "\b\r\u0003\u0002*/\u0002\u019b\u0002L\u0003\u0002\u0002\u0002\u0004",
    "h\u0003\u0002\u0002\u0002\u0006j\u0003\u0002\u0002\u0002\bl\u0003\u0002",
    "\u0002\u0002\nt\u0003\u0002\u0002\u0002\fz\u0003\u0002\u0002\u0002\u000e",
    "|\u0003\u0002\u0002\u0002\u0010\u008e\u0003\u0002\u0002\u0002\u0012",
    "\u0099\u0003\u0002\u0002\u0002\u0014\u009c\u0003\u0002\u0002\u0002\u0016",
    "\u00a2\u0003\u0002\u0002\u0002\u0018\u00aa\u0003\u0002\u0002\u0002\u001a",
    "\u00be\u0003\u0002\u0002\u0002\u001c\u00c7\u0003\u0002\u0002\u0002\u001e",
    "\u00ce\u0003\u0002\u0002\u0002 \u00d9\u0003\u0002\u0002\u0002\"\u00e9",
    "\u0003\u0002\u0002\u0002$\u00f6\u0003\u0002\u0002\u0002&\u00f8\u0003",
    "\u0002\u0002\u0002(\u00fe\u0003\u0002\u0002\u0002*\u0106\u0003\u0002",
    "\u0002\u0002,\u010a\u0003\u0002\u0002\u0002.\u010d\u0003\u0002\u0002",
    "\u00020\u0110\u0003\u0002\u0002\u00022\u0114\u0003\u0002\u0002\u0002",
    "4\u011f\u0003\u0002\u0002\u00026\u012c\u0003\u0002\u0002\u00028\u012e",
    "\u0003\u0002\u0002\u0002:\u013f\u0003\u0002\u0002\u0002<\u0158\u0003",
    "\u0002\u0002\u0002>\u015a\u0003\u0002\u0002\u0002@\u015e\u0003\u0002",
    "\u0002\u0002B\u0163\u0003\u0002\u0002\u0002D\u016e\u0003\u0002\u0002",
    "\u0002F\u0172\u0003\u0002\u0002\u0002H\u017a\u0003\u0002\u0002\u0002",
    "J\u017d\u0003\u0002\u0002\u0002LN\u0007\u0003\u0002\u0002MO\u0005\u0004",
    "\u0003\u0002NM\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002PN\u0003",
    "\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002",
    "RS\u0007\u0004\u0002\u0002S\u0003\u0003\u0002\u0002\u0002Ti\u0005H%",
    "\u0002Ui\u0005J&\u0002Vi\u0005\b\u0005\u0002Wi\u0005\n\u0006\u0002X",
    "i\u0005\u000e\b\u0002Yi\u0005\u0014\u000b\u0002Zi\u0005\u0018\r\u0002",
    "[i\u0005\u001e\u0010\u0002\\i\u0005 \u0011\u0002]i\u0005\"\u0012\u0002",
    "^i\u0005&\u0014\u0002_i\u0005*\u0016\u0002`i\u00050\u0019\u0002ai\u0005",
    "2\u001a\u0002bi\u0005,\u0017\u0002ci\u0005.\u0018\u0002di\u0005\u0012",
    "\n\u0002ei\u0005\u0006\u0004\u0002fi\u0005$\u0013\u0002gi\u0005F$\u0002",
    "hT\u0003\u0002\u0002\u0002hU\u0003\u0002\u0002\u0002hV\u0003\u0002\u0002",
    "\u0002hW\u0003\u0002\u0002\u0002hX\u0003\u0002\u0002\u0002hY\u0003\u0002",
    "\u0002\u0002hZ\u0003\u0002\u0002\u0002h[\u0003\u0002\u0002\u0002h\\",
    "\u0003\u0002\u0002\u0002h]\u0003\u0002\u0002\u0002h^\u0003\u0002\u0002",
    "\u0002h_\u0003\u0002\u0002\u0002h`\u0003\u0002\u0002\u0002ha\u0003\u0002",
    "\u0002\u0002hb\u0003\u0002\u0002\u0002hc\u0003\u0002\u0002\u0002hd\u0003",
    "\u0002\u0002\u0002he\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002",
    "hg\u0003\u0002\u0002\u0002i\u0005\u0003\u0002\u0002\u0002jk\u0007C\u0002",
    "\u0002k\u0007\u0003\u0002\u0002\u0002lm\u0007\u0005\u0002\u0002mn\u0005",
    "\f\u0007\u0002no\u0007>\u0002\u0002or\u0007\u0006\u0002\u0002ps\u0005",
    "8\u001d\u0002qs\u0005B\"\u0002rp\u0003\u0002\u0002\u0002rq\u0003\u0002",
    "\u0002\u0002s\t\u0003\u0002\u0002\u0002tu\u0007\u0007\u0002\u0002uv",
    "\u0005\f\u0007\u0002vw\u0007>\u0002\u0002wx\u0007\u0006\u0002\u0002",
    "xy\u00058\u001d\u0002y\u000b\u0003\u0002\u0002\u0002z{\t\u0002\u0002",
    "\u0002{\r\u0003\u0002\u0002\u0002|}\u0007\u000e\u0002\u0002}~\u0007",
    "?\u0002\u0002~\u0080\u0007\u000f\u0002\u0002\u007f\u0081\u0005\u0010",
    "\t\u0002\u0080\u007f\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002",
    "\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0086\u0007\u0003",
    "\u0002\u0002\u0083\u0085\u0005\u0004\u0003\u0002\u0084\u0083\u0003\u0002",
    "\u0002\u0002\u0085\u0088\u0003\u0002\u0002\u0002\u0086\u0084\u0003\u0002",
    "\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u008a\u0003\u0002",
    "\u0002\u0002\u0088\u0086\u0003\u0002\u0002\u0002\u0089\u008b\u0005\u0012",
    "\n\u0002\u008a\u0089\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002",
    "\u0002\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008d\u0007\u0010",
    "\u0002\u0002\u008d\u000f\u0003\u0002\u0002\u0002\u008e\u008f\u0005\f",
    "\u0007\u0002\u008f\u0096\u0007>\u0002\u0002\u0090\u0091\u0007\u0011",
    "\u0002\u0002\u0091\u0092\u0005\f\u0007\u0002\u0092\u0093\u0007>\u0002",
    "\u0002\u0093\u0095\u0003\u0002\u0002\u0002\u0094\u0090\u0003\u0002\u0002",
    "\u0002\u0095\u0098\u0003\u0002\u0002\u0002\u0096\u0094\u0003\u0002\u0002",
    "\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u0011\u0003\u0002\u0002",
    "\u0002\u0098\u0096\u0003\u0002\u0002\u0002\u0099\u009a\u0007\u0012\u0002",
    "\u0002\u009a\u009b\u00058\u001d\u0002\u009b\u0013\u0003\u0002\u0002",
    "\u0002\u009c\u009d\u0007\u0013\u0002\u0002\u009d\u009e\u0007?\u0002",
    "\u0002\u009e\u00a0\u0007\u000f\u0002\u0002\u009f\u00a1\u0005\u0016\f",
    "\u0002\u00a0\u009f\u0003\u0002\u0002\u0002\u00a0\u00a1\u0003\u0002\u0002",
    "\u0002\u00a1\u0015\u0003\u0002\u0002\u0002\u00a2\u00a7\u00058\u001d",
    "\u0002\u00a3\u00a4\u0007\u0011\u0002\u0002\u00a4\u00a6\u00058\u001d",
    "\u0002\u00a5\u00a3\u0003\u0002\u0002\u0002\u00a6\u00a9\u0003\u0002\u0002",
    "\u0002\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a7\u00a8\u0003\u0002\u0002",
    "\u0002\u00a8\u0017\u0003\u0002\u0002\u0002\u00a9\u00a7\u0003\u0002\u0002",
    "\u0002\u00aa\u00ab\u0007\u0014\u0002\u0002\u00ab\u00ac\u00054\u001b",
    "\u0002\u00ac\u00b0\u0007\u0003\u0002\u0002\u00ad\u00af\u0005\u0004\u0003",
    "\u0002\u00ae\u00ad\u0003\u0002\u0002\u0002\u00af\u00b2\u0003\u0002\u0002",
    "\u0002\u00b0\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b1\u0003\u0002\u0002",
    "\u0002\u00b1\u00b6\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002",
    "\u0002\u00b3\u00b5\u0005\u001a\u000e\u0002\u00b4\u00b3\u0003\u0002\u0002",
    "\u0002\u00b5\u00b8\u0003\u0002\u0002\u0002\u00b6\u00b4\u0003\u0002\u0002",
    "\u0002\u00b6\u00b7\u0003\u0002\u0002\u0002\u00b7\u00ba\u0003\u0002\u0002",
    "\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b9\u00bb\u0005\u001c\u000f",
    "\u0002\u00ba\u00b9\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002",
    "\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007\u0010\u0002",
    "\u0002\u00bd\u0019\u0003\u0002\u0002\u0002\u00be\u00bf\u0007\u0015\u0002",
    "\u0002\u00bf\u00c0\u00054\u001b\u0002\u00c0\u00c4\u0007\u0003\u0002",
    "\u0002\u00c1\u00c3\u0005\u0004\u0003\u0002\u00c2\u00c1\u0003\u0002\u0002",
    "\u0002\u00c3\u00c6\u0003\u0002\u0002\u0002\u00c4\u00c2\u0003\u0002\u0002",
    "\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5\u001b\u0003\u0002\u0002",
    "\u0002\u00c6\u00c4\u0003\u0002\u0002\u0002\u00c7\u00cb\u0007\u0016\u0002",
    "\u0002\u00c8\u00ca\u0005\u0004\u0003\u0002\u00c9\u00c8\u0003\u0002\u0002",
    "\u0002\u00ca\u00cd\u0003\u0002\u0002\u0002\u00cb\u00c9\u0003\u0002\u0002",
    "\u0002\u00cb\u00cc\u0003\u0002\u0002\u0002\u00cc\u001d\u0003\u0002\u0002",
    "\u0002\u00cd\u00cb\u0003\u0002\u0002\u0002\u00ce\u00cf\u0007\u0017\u0002",
    "\u0002\u00cf\u00d0\u00054\u001b\u0002\u00d0\u00d4\u0007\u0003\u0002",
    "\u0002\u00d1\u00d3\u0005\u0004\u0003\u0002\u00d2\u00d1\u0003\u0002\u0002",
    "\u0002\u00d3\u00d6\u0003\u0002\u0002\u0002\u00d4\u00d2\u0003\u0002\u0002",
    "\u0002\u00d4\u00d5\u0003\u0002\u0002\u0002\u00d5\u00d7\u0003\u0002\u0002",
    "\u0002\u00d6\u00d4\u0003\u0002\u0002\u0002\u00d7\u00d8\u0007\u0010\u0002",
    "\u0002\u00d8\u001f\u0003\u0002\u0002\u0002\u00d9\u00da\u0007\u0018\u0002",
    "\u0002\u00da\u00db\u0007\u0019\u0002\u0002\u00db\u00dc\u0007>\u0002",
    "\u0002\u00dc\u00dd\u0007\u001a\u0002\u0002\u00dd\u00de\u00058\u001d",
    "\u0002\u00de\u00df\u0007\u001b\u0002\u0002\u00df\u00e0\u00058\u001d",
    "\u0002\u00e0\u00e4\u0007\u0003\u0002\u0002\u00e1\u00e3\u0005\u0004\u0003",
    "\u0002\u00e2\u00e1\u0003\u0002\u0002\u0002\u00e3\u00e6\u0003\u0002\u0002",
    "\u0002\u00e4\u00e2\u0003\u0002\u0002\u0002\u00e4\u00e5\u0003\u0002\u0002",
    "\u0002\u00e5\u00e7\u0003\u0002\u0002\u0002\u00e6\u00e4\u0003\u0002\u0002",
    "\u0002\u00e7\u00e8\u0007\u0010\u0002\u0002\u00e8!\u0003\u0002\u0002",
    "\u0002\u00e9\u00ea\u0007\u001c\u0002\u0002\u00ea\u00eb\u0007>\u0002",
    "\u0002\u00eb\u00ec\u0007\u001d\u0002\u0002\u00ec\u00ed\u0007>\u0002",
    "\u0002\u00ed\u00f1\u0007\u0003\u0002\u0002\u00ee\u00f0\u0005\u0004\u0003",
    "\u0002\u00ef\u00ee\u0003\u0002\u0002\u0002\u00f0\u00f3\u0003\u0002\u0002",
    "\u0002\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002",
    "\u0002\u00f2\u00f4\u0003\u0002\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002",
    "\u0002\u00f4\u00f5\u0007\u0010\u0002\u0002\u00f5#\u0003\u0002\u0002",
    "\u0002\u00f6\u00f7\u0007\u001e\u0002\u0002\u00f7%\u0003\u0002\u0002",
    "\u0002\u00f8\u00f9\u0007\u001f\u0002\u0002\u00f9\u00fa\u0007>\u0002",
    "\u0002\u00fa\u00fc\u0007 \u0002\u0002\u00fb\u00fd\u0005(\u0015\u0002",
    "\u00fc\u00fb\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003\u0002\u0002\u0002",
    "\u00fd\'\u0003\u0002\u0002\u0002\u00fe\u0103\u00058\u001d\u0002\u00ff",
    "\u0100\u0007!\u0002\u0002\u0100\u0102\u00058\u001d\u0002\u0101\u00ff",
    "\u0003\u0002\u0002\u0002\u0102\u0105\u0003\u0002\u0002\u0002\u0103\u0101",
    "\u0003\u0002\u0002\u0002\u0103\u0104\u0003\u0002\u0002\u0002\u0104)",
    "\u0003\u0002\u0002\u0002\u0105\u0103\u0003\u0002\u0002\u0002\u0106\u0107",
    "\u0007>\u0002\u0002\u0107\u0108\u0007\u0006\u0002\u0002\u0108\u0109",
    "\u00058\u001d\u0002\u0109+\u0003\u0002\u0002\u0002\u010a\u010b\u0007",
    "\"\u0002\u0002\u010b\u010c\u00058\u001d\u0002\u010c-\u0003\u0002\u0002",
    "\u0002\u010d\u010e\u0007#\u0002\u0002\u010e\u010f\u0007>\u0002\u0002",
    "\u010f/\u0003\u0002\u0002\u0002\u0110\u0111\u0007$\u0002\u0002\u0111",
    "\u0112\u0007>\u0002\u0002\u0112\u0113\u0007%\u0002\u0002\u01131\u0003",
    "\u0002\u0002\u0002\u0114\u0115\u0007$\u0002\u0002\u0115\u0116\u0007",
    ">\u0002\u0002\u0116\u0117\u0007&\u0002\u0002\u01173\u0003\u0002\u0002",
    "\u0002\u0118\u0119\b\u001b\u0001\u0002\u0119\u011a\u00058\u001d\u0002",
    "\u011a\u011b\u00056\u001c\u0002\u011b\u011c\u00058\u001d\u0002\u011c",
    "\u0120\u0003\u0002\u0002\u0002\u011d\u011e\u0007\'\u0002\u0002\u011e",
    "\u0120\u00054\u001b\u0005\u011f\u0118\u0003\u0002\u0002\u0002\u011f",
    "\u011d\u0003\u0002\u0002\u0002\u0120\u0129\u0003\u0002\u0002\u0002\u0121",
    "\u0122\f\u0004\u0002\u0002\u0122\u0123\u0007(\u0002\u0002\u0123\u0128",
    "\u00054\u001b\u0005\u0124\u0125\f\u0003\u0002\u0002\u0125\u0126\u0007",
    ")\u0002\u0002\u0126\u0128\u00054\u001b\u0004\u0127\u0121\u0003\u0002",
    "\u0002\u0002\u0127\u0124\u0003\u0002\u0002\u0002\u0128\u012b\u0003\u0002",
    "\u0002\u0002\u0129\u0127\u0003\u0002\u0002\u0002\u0129\u012a\u0003\u0002",
    "\u0002\u0002\u012a5\u0003\u0002\u0002\u0002\u012b\u0129\u0003\u0002",
    "\u0002\u0002\u012c\u012d\t\u0003\u0002\u0002\u012d7\u0003\u0002\u0002",
    "\u0002\u012e\u012f\b\u001d\u0001\u0002\u012f\u0130\u0005:\u001e\u0002",
    "\u0130\u013c\u0003\u0002\u0002\u0002\u0131\u0132\f\u0005\u0002\u0002",
    "\u0132\u0133\u00070\u0002\u0002\u0133\u013b\u0005:\u001e\u0002\u0134",
    "\u0135\f\u0004\u0002\u0002\u0135\u0136\u00071\u0002\u0002\u0136\u013b",
    "\u0005:\u001e\u0002\u0137\u0138\f\u0003\u0002\u0002\u0138\u0139\u0007",
    "2\u0002\u0002\u0139\u013b\u0005:\u001e\u0002\u013a\u0131\u0003\u0002",
    "\u0002\u0002\u013a\u0134\u0003\u0002\u0002\u0002\u013a\u0137\u0003\u0002",
    "\u0002\u0002\u013b\u013e\u0003\u0002\u0002\u0002\u013c\u013a\u0003\u0002",
    "\u0002\u0002\u013c\u013d\u0003\u0002\u0002\u0002\u013d9\u0003\u0002",
    "\u0002\u0002\u013e\u013c\u0003\u0002\u0002\u0002\u013f\u0140\b\u001e",
    "\u0001\u0002\u0140\u0141\u0005<\u001f\u0002\u0141\u014a\u0003\u0002",
    "\u0002\u0002\u0142\u0143\f\u0004\u0002\u0002\u0143\u0144\u00073\u0002",
    "\u0002\u0144\u0149\u0005<\u001f\u0002\u0145\u0146\f\u0003\u0002\u0002",
    "\u0146\u0147\u00074\u0002\u0002\u0147\u0149\u0005<\u001f\u0002\u0148",
    "\u0142\u0003\u0002\u0002\u0002\u0148\u0145\u0003\u0002\u0002\u0002\u0149",
    "\u014c\u0003\u0002\u0002\u0002\u014a\u0148\u0003\u0002\u0002\u0002\u014a",
    "\u014b\u0003\u0002\u0002\u0002\u014b;\u0003\u0002\u0002\u0002\u014c",
    "\u014a\u0003\u0002\u0002\u0002\u014d\u014e\u00075\u0002\u0002\u014e",
    "\u014f\u00058\u001d\u0002\u014f\u0150\u00076\u0002\u0002\u0150\u0159",
    "\u0003\u0002\u0002\u0002\u0151\u0159\u0007>\u0002\u0002\u0152\u0159",
    "\u0007@\u0002\u0002\u0153\u0159\u0007A\u0002\u0002\u0154\u0159\u0007",
    "B\u0002\u0002\u0155\u0159\u0005\u0014\u000b\u0002\u0156\u0159\u0005",
    "> \u0002\u0157\u0159\u0005D#\u0002\u0158\u014d\u0003\u0002\u0002\u0002",
    "\u0158\u0151\u0003\u0002\u0002\u0002\u0158\u0152\u0003\u0002\u0002\u0002",
    "\u0158\u0153\u0003\u0002\u0002\u0002\u0158\u0154\u0003\u0002\u0002\u0002",
    "\u0158\u0155\u0003\u0002\u0002\u0002\u0158\u0156\u0003\u0002\u0002\u0002",
    "\u0158\u0157\u0003\u0002\u0002\u0002\u0159=\u0003\u0002\u0002\u0002",
    "\u015a\u015b\u0007>\u0002\u0002\u015b\u015c\u00077\u0002\u0002\u015c",
    "\u015d\u00058\u001d\u0002\u015d?\u0003\u0002\u0002\u0002\u015e\u015f",
    "\u0005\f\u0007\u0002\u015f\u0160\u0007>\u0002\u0002\u0160\u0161\u0007",
    "\u0006\u0002\u0002\u0161\u0162\u00058\u001d\u0002\u0162A\u0003\u0002",
    "\u0002\u0002\u0163\u0164\u00075\u0002\u0002\u0164\u0169\u0005@!\u0002",
    "\u0165\u0166\u00078\u0002\u0002\u0166\u0168\u0005@!\u0002\u0167\u0165",
    "\u0003\u0002\u0002\u0002\u0168\u016b\u0003\u0002\u0002\u0002\u0169\u0167",
    "\u0003\u0002\u0002\u0002\u0169\u016a\u0003\u0002\u0002\u0002\u016a\u016c",
    "\u0003\u0002\u0002\u0002\u016b\u0169\u0003\u0002\u0002\u0002\u016c\u016d",
    "\u00079\u0002\u0002\u016dC\u0003\u0002\u0002\u0002\u016e\u016f\u0007",
    ">\u0002\u0002\u016f\u0170\u0007:\u0002\u0002\u0170\u0171\u0007>\u0002",
    "\u0002\u0171E\u0003\u0002\u0002\u0002\u0172\u0175\u0007;\u0002\u0002",
    "\u0173\u0176\u00058\u001d\u0002\u0174\u0176\u00054\u001b\u0002\u0175",
    "\u0173\u0003\u0002\u0002\u0002\u0175\u0174\u0003\u0002\u0002\u0002\u0176",
    "\u0177\u0003\u0002\u0002\u0002\u0177\u0178\u0007*\u0002\u0002\u0178",
    "\u0179\u00058\u001d\u0002\u0179G\u0003\u0002\u0002\u0002\u017a\u017b",
    "\u0007<\u0002\u0002\u017b\u017c\u0007D\u0002\u0002\u017cI\u0003\u0002",
    "\u0002\u0002\u017d\u017e\u0007=\u0002\u0002\u017e\u0183\u0007?\u0002",
    "\u0002\u017f\u0180\u0007\u0011\u0002\u0002\u0180\u0182\u0007?\u0002",
    "\u0002\u0181\u017f\u0003\u0002\u0002\u0002\u0182\u0185\u0003\u0002\u0002",
    "\u0002\u0183\u0181\u0003\u0002\u0002\u0002\u0183\u0184\u0003\u0002\u0002",
    "\u0002\u0184\u0186\u0003\u0002\u0002\u0002\u0185\u0183\u0003\u0002\u0002",
    "\u0002\u0186\u0187\u0007\u001a\u0002\u0002\u0187\u0188\u0007D\u0002",
    "\u0002\u0188K\u0003\u0002\u0002\u0002 Phr\u0080\u0086\u008a\u0096\u00a0",
    "\u00a7\u00b0\u00b6\u00ba\u00c4\u00cb\u00d4\u00e4\u00f1\u00fc\u0103\u011f",
    "\u0127\u0129\u013a\u013c\u0148\u014a\u0158\u0169\u0175\u0183"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'BELIEVE ME'", "'MAKE AMERICA GREAT AGAIN'", 
                     "'I HAVE THE BEST'", "'ABSOLUTELY'", "'I HAVE A VERY GOOD BRAIN FOR'", 
                     "'HUGE'", "'BIGLY'", "'SUPPORT'", "'TWEET'", "'WALL'", 
                     "'DEAL'", "'INCREDIBLE'", "'PEOPLE TELL ME'", "'YOU'RE FIRED'", 
                     "'AND'", "'AND I MEAN THAT'", "'I CALL UPON'", "'LISTEN'", 
                     "'PEOPLE ARE SAYING'", "'NOBODY KNEW'", "'WE'RE GOING TO WIN IN A LANDSLIDE'", 
                     "'WE'RE GOING TO WIN, WIN, WIN'", "'WITH'", "'FROM'", 
                     "'TO'", "'BILLIONS AND BILLIONS'", "'YET'", "'FAKE NEWS MEDIA SAID ENOUGH'", 
                     "'BUILD THE WALL'", "'AND MEXICO WILL PAY FOR IT'", 
                     "'PREVAILS'", "'EVERYONE IS TALKING ABOUT'", "'MANY PEOPLE ARE ASKING'", 
                     "'MAKE'", "'GREATER'", "'SMALLER'", "'WRONG'", "'AND IT'S TRUE'", 
                     "'OR MAYBE'", "'SO TRUE'", "'TOTAL DISASTER'", "'BETTER THAN'", 
                     "'NOT AS GOOD AS'", "'AT LEAST AS GOOD AS'", "'NO BETTER THAN'", 
                     "'WINNING'", "'ENDORSING'", "'LOSING'", "'BIG LEAGUE TIMES'", 
                     "'SAD'", "'('", "')'", "'SECTION'", "'&'", "')!!'", 
                     "'FOLLOW'", "'FACT CHECK'", "'I KNOW THE BEST PEOPLE FROM'", 
                     "'I ONLY WANT'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, "VARIABLE", "IDENTIFIER", 
                      "STRING", "NUMBER", "BOOLEAN", "COMMENT", "FILEPATH", 
                      "WS" ];

var ruleNames =  [ "program", "statement", "commentStatement", "variableDeclaration", 
                   "constantDeclaration", "dataType", "functionDeclaration", 
                   "parameterList", "returnStatement", "functionCall", "argumentList", 
                   "ifStatement", "elseIfStatement", "elseStatement", "whileLoop", 
                   "forLoop", "forEachLoop", "loopBreak", "arrayDeclaration", 
                   "arrayElements", "assignmentStatement", "printStatement", 
                   "inputStatement", "incrementStatement", "decrementStatement", 
                   "condition", "comparison", "expression", "term", "factor", 
                   "arrayAccess", "dealField", "dealDeclaration", "dealAccess", 
                   "assertStatement", "importStatement", "selectiveImport" ];

function TrumplangParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

TrumplangParser.prototype = Object.create(antlr4.Parser.prototype);
TrumplangParser.prototype.constructor = TrumplangParser;

Object.defineProperty(TrumplangParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

TrumplangParser.EOF = antlr4.Token.EOF;
TrumplangParser.T__0 = 1;
TrumplangParser.T__1 = 2;
TrumplangParser.T__2 = 3;
TrumplangParser.T__3 = 4;
TrumplangParser.T__4 = 5;
TrumplangParser.T__5 = 6;
TrumplangParser.T__6 = 7;
TrumplangParser.T__7 = 8;
TrumplangParser.T__8 = 9;
TrumplangParser.T__9 = 10;
TrumplangParser.T__10 = 11;
TrumplangParser.T__11 = 12;
TrumplangParser.T__12 = 13;
TrumplangParser.T__13 = 14;
TrumplangParser.T__14 = 15;
TrumplangParser.T__15 = 16;
TrumplangParser.T__16 = 17;
TrumplangParser.T__17 = 18;
TrumplangParser.T__18 = 19;
TrumplangParser.T__19 = 20;
TrumplangParser.T__20 = 21;
TrumplangParser.T__21 = 22;
TrumplangParser.T__22 = 23;
TrumplangParser.T__23 = 24;
TrumplangParser.T__24 = 25;
TrumplangParser.T__25 = 26;
TrumplangParser.T__26 = 27;
TrumplangParser.T__27 = 28;
TrumplangParser.T__28 = 29;
TrumplangParser.T__29 = 30;
TrumplangParser.T__30 = 31;
TrumplangParser.T__31 = 32;
TrumplangParser.T__32 = 33;
TrumplangParser.T__33 = 34;
TrumplangParser.T__34 = 35;
TrumplangParser.T__35 = 36;
TrumplangParser.T__36 = 37;
TrumplangParser.T__37 = 38;
TrumplangParser.T__38 = 39;
TrumplangParser.T__39 = 40;
TrumplangParser.T__40 = 41;
TrumplangParser.T__41 = 42;
TrumplangParser.T__42 = 43;
TrumplangParser.T__43 = 44;
TrumplangParser.T__44 = 45;
TrumplangParser.T__45 = 46;
TrumplangParser.T__46 = 47;
TrumplangParser.T__47 = 48;
TrumplangParser.T__48 = 49;
TrumplangParser.T__49 = 50;
TrumplangParser.T__50 = 51;
TrumplangParser.T__51 = 52;
TrumplangParser.T__52 = 53;
TrumplangParser.T__53 = 54;
TrumplangParser.T__54 = 55;
TrumplangParser.T__55 = 56;
TrumplangParser.T__56 = 57;
TrumplangParser.T__57 = 58;
TrumplangParser.T__58 = 59;
TrumplangParser.VARIABLE = 60;
TrumplangParser.IDENTIFIER = 61;
TrumplangParser.STRING = 62;
TrumplangParser.NUMBER = 63;
TrumplangParser.BOOLEAN = 64;
TrumplangParser.COMMENT = 65;
TrumplangParser.FILEPATH = 66;
TrumplangParser.WS = 67;

TrumplangParser.RULE_program = 0;
TrumplangParser.RULE_statement = 1;
TrumplangParser.RULE_commentStatement = 2;
TrumplangParser.RULE_variableDeclaration = 3;
TrumplangParser.RULE_constantDeclaration = 4;
TrumplangParser.RULE_dataType = 5;
TrumplangParser.RULE_functionDeclaration = 6;
TrumplangParser.RULE_parameterList = 7;
TrumplangParser.RULE_returnStatement = 8;
TrumplangParser.RULE_functionCall = 9;
TrumplangParser.RULE_argumentList = 10;
TrumplangParser.RULE_ifStatement = 11;
TrumplangParser.RULE_elseIfStatement = 12;
TrumplangParser.RULE_elseStatement = 13;
TrumplangParser.RULE_whileLoop = 14;
TrumplangParser.RULE_forLoop = 15;
TrumplangParser.RULE_forEachLoop = 16;
TrumplangParser.RULE_loopBreak = 17;
TrumplangParser.RULE_arrayDeclaration = 18;
TrumplangParser.RULE_arrayElements = 19;
TrumplangParser.RULE_assignmentStatement = 20;
TrumplangParser.RULE_printStatement = 21;
TrumplangParser.RULE_inputStatement = 22;
TrumplangParser.RULE_incrementStatement = 23;
TrumplangParser.RULE_decrementStatement = 24;
TrumplangParser.RULE_condition = 25;
TrumplangParser.RULE_comparison = 26;
TrumplangParser.RULE_expression = 27;
TrumplangParser.RULE_term = 28;
TrumplangParser.RULE_factor = 29;
TrumplangParser.RULE_arrayAccess = 30;
TrumplangParser.RULE_dealField = 31;
TrumplangParser.RULE_dealDeclaration = 32;
TrumplangParser.RULE_dealAccess = 33;
TrumplangParser.RULE_assertStatement = 34;
TrumplangParser.RULE_importStatement = 35;
TrumplangParser.RULE_selectiveImport = 36;


function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitProgram(this);
	}
};

ProgramContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitProgram(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.ProgramContext = ProgramContext;

TrumplangParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, TrumplangParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.match(TrumplangParser.T__0);
        this.state = 76; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 75;
            this.statement();
            this.state = 78; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(((((_la - 3)) & ~0x1f) == 0 && ((1 << (_la - 3)) & ((1 << (TrumplangParser.T__2 - 3)) | (1 << (TrumplangParser.T__4 - 3)) | (1 << (TrumplangParser.T__11 - 3)) | (1 << (TrumplangParser.T__15 - 3)) | (1 << (TrumplangParser.T__16 - 3)) | (1 << (TrumplangParser.T__17 - 3)) | (1 << (TrumplangParser.T__20 - 3)) | (1 << (TrumplangParser.T__21 - 3)) | (1 << (TrumplangParser.T__25 - 3)) | (1 << (TrumplangParser.T__27 - 3)) | (1 << (TrumplangParser.T__28 - 3)) | (1 << (TrumplangParser.T__31 - 3)) | (1 << (TrumplangParser.T__32 - 3)) | (1 << (TrumplangParser.T__33 - 3)))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (TrumplangParser.T__56 - 57)) | (1 << (TrumplangParser.T__57 - 57)) | (1 << (TrumplangParser.T__58 - 57)) | (1 << (TrumplangParser.VARIABLE - 57)) | (1 << (TrumplangParser.COMMENT - 57)))) !== 0));
        this.state = 80;
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
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_statement;
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.importStatement = function() {
    return this.getTypedRuleContext(ImportStatementContext,0);
};

StatementContext.prototype.selectiveImport = function() {
    return this.getTypedRuleContext(SelectiveImportContext,0);
};

StatementContext.prototype.variableDeclaration = function() {
    return this.getTypedRuleContext(VariableDeclarationContext,0);
};

StatementContext.prototype.constantDeclaration = function() {
    return this.getTypedRuleContext(ConstantDeclarationContext,0);
};

StatementContext.prototype.functionDeclaration = function() {
    return this.getTypedRuleContext(FunctionDeclarationContext,0);
};

StatementContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

StatementContext.prototype.ifStatement = function() {
    return this.getTypedRuleContext(IfStatementContext,0);
};

StatementContext.prototype.whileLoop = function() {
    return this.getTypedRuleContext(WhileLoopContext,0);
};

StatementContext.prototype.forLoop = function() {
    return this.getTypedRuleContext(ForLoopContext,0);
};

StatementContext.prototype.forEachLoop = function() {
    return this.getTypedRuleContext(ForEachLoopContext,0);
};

StatementContext.prototype.arrayDeclaration = function() {
    return this.getTypedRuleContext(ArrayDeclarationContext,0);
};

StatementContext.prototype.assignmentStatement = function() {
    return this.getTypedRuleContext(AssignmentStatementContext,0);
};

StatementContext.prototype.incrementStatement = function() {
    return this.getTypedRuleContext(IncrementStatementContext,0);
};

StatementContext.prototype.decrementStatement = function() {
    return this.getTypedRuleContext(DecrementStatementContext,0);
};

StatementContext.prototype.printStatement = function() {
    return this.getTypedRuleContext(PrintStatementContext,0);
};

StatementContext.prototype.inputStatement = function() {
    return this.getTypedRuleContext(InputStatementContext,0);
};

StatementContext.prototype.returnStatement = function() {
    return this.getTypedRuleContext(ReturnStatementContext,0);
};

StatementContext.prototype.commentStatement = function() {
    return this.getTypedRuleContext(CommentStatementContext,0);
};

StatementContext.prototype.loopBreak = function() {
    return this.getTypedRuleContext(LoopBreakContext,0);
};

StatementContext.prototype.assertStatement = function() {
    return this.getTypedRuleContext(AssertStatementContext,0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitStatement(this);
	}
};

StatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.StatementContext = StatementContext;

TrumplangParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, TrumplangParser.RULE_statement);
    try {
        this.state = 102;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 82;
            this.importStatement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 83;
            this.selectiveImport();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 84;
            this.variableDeclaration();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 85;
            this.constantDeclaration();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 86;
            this.functionDeclaration();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 87;
            this.functionCall();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 88;
            this.ifStatement();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 89;
            this.whileLoop();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 90;
            this.forLoop();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 91;
            this.forEachLoop();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 92;
            this.arrayDeclaration();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 93;
            this.assignmentStatement();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 94;
            this.incrementStatement();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 95;
            this.decrementStatement();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 96;
            this.printStatement();
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 97;
            this.inputStatement();
            break;

        case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 98;
            this.returnStatement();
            break;

        case 18:
            this.enterOuterAlt(localctx, 18);
            this.state = 99;
            this.commentStatement();
            break;

        case 19:
            this.enterOuterAlt(localctx, 19);
            this.state = 100;
            this.loopBreak();
            break;

        case 20:
            this.enterOuterAlt(localctx, 20);
            this.state = 101;
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
};


function CommentStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_commentStatement;
    return this;
}

CommentStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommentStatementContext.prototype.constructor = CommentStatementContext;

CommentStatementContext.prototype.COMMENT = function() {
    return this.getToken(TrumplangParser.COMMENT, 0);
};

CommentStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterCommentStatement(this);
	}
};

CommentStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitCommentStatement(this);
	}
};

CommentStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitCommentStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.CommentStatementContext = CommentStatementContext;

TrumplangParser.prototype.commentStatement = function() {

    var localctx = new CommentStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, TrumplangParser.RULE_commentStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
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
};


function VariableDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_variableDeclaration;
    return this;
}

VariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationContext.prototype.constructor = VariableDeclarationContext;

VariableDeclarationContext.prototype.dataType = function() {
    return this.getTypedRuleContext(DataTypeContext,0);
};

VariableDeclarationContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
};

VariableDeclarationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

VariableDeclarationContext.prototype.dealDeclaration = function() {
    return this.getTypedRuleContext(DealDeclarationContext,0);
};

VariableDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterVariableDeclaration(this);
	}
};

VariableDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitVariableDeclaration(this);
	}
};

VariableDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitVariableDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.VariableDeclarationContext = VariableDeclarationContext;

TrumplangParser.prototype.variableDeclaration = function() {

    var localctx = new VariableDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, TrumplangParser.RULE_variableDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.match(TrumplangParser.T__2);
        this.state = 107;
        this.dataType();
        this.state = 108;
        this.match(TrumplangParser.VARIABLE);
        this.state = 109;
        this.match(TrumplangParser.T__3);
        this.state = 112;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 110;
            this.expression(0);
            break;

        case 2:
            this.state = 111;
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
};


function ConstantDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_constantDeclaration;
    return this;
}

ConstantDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantDeclarationContext.prototype.constructor = ConstantDeclarationContext;

ConstantDeclarationContext.prototype.dataType = function() {
    return this.getTypedRuleContext(DataTypeContext,0);
};

ConstantDeclarationContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
};

ConstantDeclarationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ConstantDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterConstantDeclaration(this);
	}
};

ConstantDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitConstantDeclaration(this);
	}
};

ConstantDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitConstantDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.ConstantDeclarationContext = ConstantDeclarationContext;

TrumplangParser.prototype.constantDeclaration = function() {

    var localctx = new ConstantDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, TrumplangParser.RULE_constantDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 114;
        this.match(TrumplangParser.T__4);
        this.state = 115;
        this.dataType();
        this.state = 116;
        this.match(TrumplangParser.VARIABLE);
        this.state = 117;
        this.match(TrumplangParser.T__3);
        this.state = 118;
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
};


function DataTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_dataType;
    return this;
}

DataTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataTypeContext.prototype.constructor = DataTypeContext;


DataTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterDataType(this);
	}
};

DataTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitDataType(this);
	}
};

DataTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitDataType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.DataTypeContext = DataTypeContext;

TrumplangParser.prototype.dataType = function() {

    var localctx = new DataTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, TrumplangParser.RULE_dataType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 120;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TrumplangParser.T__5) | (1 << TrumplangParser.T__6) | (1 << TrumplangParser.T__7) | (1 << TrumplangParser.T__8) | (1 << TrumplangParser.T__9) | (1 << TrumplangParser.T__10))) !== 0))) {
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
};


function FunctionDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_functionDeclaration;
    return this;
}

FunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.IDENTIFIER = function() {
    return this.getToken(TrumplangParser.IDENTIFIER, 0);
};

FunctionDeclarationContext.prototype.parameterList = function() {
    return this.getTypedRuleContext(ParameterListContext,0);
};

FunctionDeclarationContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

FunctionDeclarationContext.prototype.returnStatement = function() {
    return this.getTypedRuleContext(ReturnStatementContext,0);
};

FunctionDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitFunctionDeclaration(this);
	}
};

FunctionDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitFunctionDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.FunctionDeclarationContext = FunctionDeclarationContext;

TrumplangParser.prototype.functionDeclaration = function() {

    var localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, TrumplangParser.RULE_functionDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this.match(TrumplangParser.T__11);
        this.state = 123;
        this.match(TrumplangParser.IDENTIFIER);
        this.state = 124;
        this.match(TrumplangParser.T__12);
        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TrumplangParser.T__5) | (1 << TrumplangParser.T__6) | (1 << TrumplangParser.T__7) | (1 << TrumplangParser.T__8) | (1 << TrumplangParser.T__9) | (1 << TrumplangParser.T__10))) !== 0)) {
            this.state = 125;
            this.parameterList();
        }

        this.state = 128;
        this.match(TrumplangParser.T__0);
        this.state = 132;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 129;
                this.statement(); 
            }
            this.state = 134;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

        this.state = 136;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TrumplangParser.T__15) {
            this.state = 135;
            this.returnStatement();
        }

        this.state = 138;
        this.match(TrumplangParser.T__13);
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
};


function ParameterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_parameterList;
    return this;
}

ParameterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParameterListContext.prototype.constructor = ParameterListContext;

ParameterListContext.prototype.dataType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DataTypeContext);
    } else {
        return this.getTypedRuleContext(DataTypeContext,i);
    }
};

ParameterListContext.prototype.VARIABLE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TrumplangParser.VARIABLE);
    } else {
        return this.getToken(TrumplangParser.VARIABLE, i);
    }
};


ParameterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterParameterList(this);
	}
};

ParameterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitParameterList(this);
	}
};

ParameterListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitParameterList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.ParameterListContext = ParameterListContext;

TrumplangParser.prototype.parameterList = function() {

    var localctx = new ParameterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, TrumplangParser.RULE_parameterList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.dataType();
        this.state = 141;
        this.match(TrumplangParser.VARIABLE);
        this.state = 148;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TrumplangParser.T__14) {
            this.state = 142;
            this.match(TrumplangParser.T__14);
            this.state = 143;
            this.dataType();
            this.state = 144;
            this.match(TrumplangParser.VARIABLE);
            this.state = 150;
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
};


function ReturnStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_returnStatement;
    return this;
}

ReturnStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReturnStatementContext.prototype.constructor = ReturnStatementContext;

ReturnStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ReturnStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterReturnStatement(this);
	}
};

ReturnStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitReturnStatement(this);
	}
};

ReturnStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitReturnStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.ReturnStatementContext = ReturnStatementContext;

TrumplangParser.prototype.returnStatement = function() {

    var localctx = new ReturnStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, TrumplangParser.RULE_returnStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 151;
        this.match(TrumplangParser.T__15);
        this.state = 152;
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
};


function FunctionCallContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_functionCall;
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.IDENTIFIER = function() {
    return this.getToken(TrumplangParser.IDENTIFIER, 0);
};

FunctionCallContext.prototype.argumentList = function() {
    return this.getTypedRuleContext(ArgumentListContext,0);
};

FunctionCallContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterFunctionCall(this);
	}
};

FunctionCallContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitFunctionCall(this);
	}
};

FunctionCallContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitFunctionCall(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.FunctionCallContext = FunctionCallContext;

TrumplangParser.prototype.functionCall = function() {

    var localctx = new FunctionCallContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, TrumplangParser.RULE_functionCall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154;
        this.match(TrumplangParser.T__16);
        this.state = 155;
        this.match(TrumplangParser.IDENTIFIER);
        this.state = 156;
        this.match(TrumplangParser.T__12);
        this.state = 158;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        if(la_===1) {
            this.state = 157;
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
};


function ArgumentListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_argumentList;
    return this;
}

ArgumentListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentListContext.prototype.constructor = ArgumentListContext;

ArgumentListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ArgumentListContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterArgumentList(this);
	}
};

ArgumentListContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitArgumentList(this);
	}
};

ArgumentListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitArgumentList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.ArgumentListContext = ArgumentListContext;

TrumplangParser.prototype.argumentList = function() {

    var localctx = new ArgumentListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, TrumplangParser.RULE_argumentList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.expression(0);
        this.state = 165;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 161;
                this.match(TrumplangParser.T__14);
                this.state = 162;
                this.expression(0); 
            }
            this.state = 167;
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
};


function IfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_ifStatement;
    return this;
}

IfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfStatementContext.prototype.constructor = IfStatementContext;

IfStatementContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

IfStatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

IfStatementContext.prototype.elseIfStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElseIfStatementContext);
    } else {
        return this.getTypedRuleContext(ElseIfStatementContext,i);
    }
};

IfStatementContext.prototype.elseStatement = function() {
    return this.getTypedRuleContext(ElseStatementContext,0);
};

IfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterIfStatement(this);
	}
};

IfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitIfStatement(this);
	}
};

IfStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitIfStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.IfStatementContext = IfStatementContext;

TrumplangParser.prototype.ifStatement = function() {

    var localctx = new IfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, TrumplangParser.RULE_ifStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 168;
        this.match(TrumplangParser.T__17);
        this.state = 169;
        this.condition(0);
        this.state = 170;
        this.match(TrumplangParser.T__0);
        this.state = 174;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 3)) & ~0x1f) == 0 && ((1 << (_la - 3)) & ((1 << (TrumplangParser.T__2 - 3)) | (1 << (TrumplangParser.T__4 - 3)) | (1 << (TrumplangParser.T__11 - 3)) | (1 << (TrumplangParser.T__15 - 3)) | (1 << (TrumplangParser.T__16 - 3)) | (1 << (TrumplangParser.T__17 - 3)) | (1 << (TrumplangParser.T__20 - 3)) | (1 << (TrumplangParser.T__21 - 3)) | (1 << (TrumplangParser.T__25 - 3)) | (1 << (TrumplangParser.T__27 - 3)) | (1 << (TrumplangParser.T__28 - 3)) | (1 << (TrumplangParser.T__31 - 3)) | (1 << (TrumplangParser.T__32 - 3)) | (1 << (TrumplangParser.T__33 - 3)))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (TrumplangParser.T__56 - 57)) | (1 << (TrumplangParser.T__57 - 57)) | (1 << (TrumplangParser.T__58 - 57)) | (1 << (TrumplangParser.VARIABLE - 57)) | (1 << (TrumplangParser.COMMENT - 57)))) !== 0)) {
            this.state = 171;
            this.statement();
            this.state = 176;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 180;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TrumplangParser.T__18) {
            this.state = 177;
            this.elseIfStatement();
            this.state = 182;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 184;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===TrumplangParser.T__19) {
            this.state = 183;
            this.elseStatement();
        }

        this.state = 186;
        this.match(TrumplangParser.T__13);
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
};


function ElseIfStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_elseIfStatement;
    return this;
}

ElseIfStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseIfStatementContext.prototype.constructor = ElseIfStatementContext;

ElseIfStatementContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

ElseIfStatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ElseIfStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterElseIfStatement(this);
	}
};

ElseIfStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitElseIfStatement(this);
	}
};

ElseIfStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitElseIfStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.ElseIfStatementContext = ElseIfStatementContext;

TrumplangParser.prototype.elseIfStatement = function() {

    var localctx = new ElseIfStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, TrumplangParser.RULE_elseIfStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this.match(TrumplangParser.T__18);
        this.state = 189;
        this.condition(0);
        this.state = 190;
        this.match(TrumplangParser.T__0);
        this.state = 194;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 3)) & ~0x1f) == 0 && ((1 << (_la - 3)) & ((1 << (TrumplangParser.T__2 - 3)) | (1 << (TrumplangParser.T__4 - 3)) | (1 << (TrumplangParser.T__11 - 3)) | (1 << (TrumplangParser.T__15 - 3)) | (1 << (TrumplangParser.T__16 - 3)) | (1 << (TrumplangParser.T__17 - 3)) | (1 << (TrumplangParser.T__20 - 3)) | (1 << (TrumplangParser.T__21 - 3)) | (1 << (TrumplangParser.T__25 - 3)) | (1 << (TrumplangParser.T__27 - 3)) | (1 << (TrumplangParser.T__28 - 3)) | (1 << (TrumplangParser.T__31 - 3)) | (1 << (TrumplangParser.T__32 - 3)) | (1 << (TrumplangParser.T__33 - 3)))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (TrumplangParser.T__56 - 57)) | (1 << (TrumplangParser.T__57 - 57)) | (1 << (TrumplangParser.T__58 - 57)) | (1 << (TrumplangParser.VARIABLE - 57)) | (1 << (TrumplangParser.COMMENT - 57)))) !== 0)) {
            this.state = 191;
            this.statement();
            this.state = 196;
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
};


function ElseStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_elseStatement;
    return this;
}

ElseStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseStatementContext.prototype.constructor = ElseStatementContext;

ElseStatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ElseStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterElseStatement(this);
	}
};

ElseStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitElseStatement(this);
	}
};

ElseStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitElseStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.ElseStatementContext = ElseStatementContext;

TrumplangParser.prototype.elseStatement = function() {

    var localctx = new ElseStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, TrumplangParser.RULE_elseStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 197;
        this.match(TrumplangParser.T__19);
        this.state = 201;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 3)) & ~0x1f) == 0 && ((1 << (_la - 3)) & ((1 << (TrumplangParser.T__2 - 3)) | (1 << (TrumplangParser.T__4 - 3)) | (1 << (TrumplangParser.T__11 - 3)) | (1 << (TrumplangParser.T__15 - 3)) | (1 << (TrumplangParser.T__16 - 3)) | (1 << (TrumplangParser.T__17 - 3)) | (1 << (TrumplangParser.T__20 - 3)) | (1 << (TrumplangParser.T__21 - 3)) | (1 << (TrumplangParser.T__25 - 3)) | (1 << (TrumplangParser.T__27 - 3)) | (1 << (TrumplangParser.T__28 - 3)) | (1 << (TrumplangParser.T__31 - 3)) | (1 << (TrumplangParser.T__32 - 3)) | (1 << (TrumplangParser.T__33 - 3)))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (TrumplangParser.T__56 - 57)) | (1 << (TrumplangParser.T__57 - 57)) | (1 << (TrumplangParser.T__58 - 57)) | (1 << (TrumplangParser.VARIABLE - 57)) | (1 << (TrumplangParser.COMMENT - 57)))) !== 0)) {
            this.state = 198;
            this.statement();
            this.state = 203;
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
};


function WhileLoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_whileLoop;
    return this;
}

WhileLoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhileLoopContext.prototype.constructor = WhileLoopContext;

WhileLoopContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

WhileLoopContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

WhileLoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterWhileLoop(this);
	}
};

WhileLoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitWhileLoop(this);
	}
};

WhileLoopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitWhileLoop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.WhileLoopContext = WhileLoopContext;

TrumplangParser.prototype.whileLoop = function() {

    var localctx = new WhileLoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, TrumplangParser.RULE_whileLoop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 204;
        this.match(TrumplangParser.T__20);
        this.state = 205;
        this.condition(0);
        this.state = 206;
        this.match(TrumplangParser.T__0);
        this.state = 210;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 3)) & ~0x1f) == 0 && ((1 << (_la - 3)) & ((1 << (TrumplangParser.T__2 - 3)) | (1 << (TrumplangParser.T__4 - 3)) | (1 << (TrumplangParser.T__11 - 3)) | (1 << (TrumplangParser.T__15 - 3)) | (1 << (TrumplangParser.T__16 - 3)) | (1 << (TrumplangParser.T__17 - 3)) | (1 << (TrumplangParser.T__20 - 3)) | (1 << (TrumplangParser.T__21 - 3)) | (1 << (TrumplangParser.T__25 - 3)) | (1 << (TrumplangParser.T__27 - 3)) | (1 << (TrumplangParser.T__28 - 3)) | (1 << (TrumplangParser.T__31 - 3)) | (1 << (TrumplangParser.T__32 - 3)) | (1 << (TrumplangParser.T__33 - 3)))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (TrumplangParser.T__56 - 57)) | (1 << (TrumplangParser.T__57 - 57)) | (1 << (TrumplangParser.T__58 - 57)) | (1 << (TrumplangParser.VARIABLE - 57)) | (1 << (TrumplangParser.COMMENT - 57)))) !== 0)) {
            this.state = 207;
            this.statement();
            this.state = 212;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 213;
        this.match(TrumplangParser.T__13);
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
};


function ForLoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_forLoop;
    return this;
}

ForLoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForLoopContext.prototype.constructor = ForLoopContext;

ForLoopContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
};

ForLoopContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ForLoopContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ForLoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterForLoop(this);
	}
};

ForLoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitForLoop(this);
	}
};

ForLoopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitForLoop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.ForLoopContext = ForLoopContext;

TrumplangParser.prototype.forLoop = function() {

    var localctx = new ForLoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, TrumplangParser.RULE_forLoop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 215;
        this.match(TrumplangParser.T__21);
        this.state = 216;
        this.match(TrumplangParser.T__22);
        this.state = 217;
        this.match(TrumplangParser.VARIABLE);
        this.state = 218;
        this.match(TrumplangParser.T__23);
        this.state = 219;
        this.expression(0);
        this.state = 220;
        this.match(TrumplangParser.T__24);
        this.state = 221;
        this.expression(0);
        this.state = 222;
        this.match(TrumplangParser.T__0);
        this.state = 226;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 3)) & ~0x1f) == 0 && ((1 << (_la - 3)) & ((1 << (TrumplangParser.T__2 - 3)) | (1 << (TrumplangParser.T__4 - 3)) | (1 << (TrumplangParser.T__11 - 3)) | (1 << (TrumplangParser.T__15 - 3)) | (1 << (TrumplangParser.T__16 - 3)) | (1 << (TrumplangParser.T__17 - 3)) | (1 << (TrumplangParser.T__20 - 3)) | (1 << (TrumplangParser.T__21 - 3)) | (1 << (TrumplangParser.T__25 - 3)) | (1 << (TrumplangParser.T__27 - 3)) | (1 << (TrumplangParser.T__28 - 3)) | (1 << (TrumplangParser.T__31 - 3)) | (1 << (TrumplangParser.T__32 - 3)) | (1 << (TrumplangParser.T__33 - 3)))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (TrumplangParser.T__56 - 57)) | (1 << (TrumplangParser.T__57 - 57)) | (1 << (TrumplangParser.T__58 - 57)) | (1 << (TrumplangParser.VARIABLE - 57)) | (1 << (TrumplangParser.COMMENT - 57)))) !== 0)) {
            this.state = 223;
            this.statement();
            this.state = 228;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 229;
        this.match(TrumplangParser.T__13);
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
};


function ForEachLoopContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_forEachLoop;
    return this;
}

ForEachLoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForEachLoopContext.prototype.constructor = ForEachLoopContext;

ForEachLoopContext.prototype.VARIABLE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TrumplangParser.VARIABLE);
    } else {
        return this.getToken(TrumplangParser.VARIABLE, i);
    }
};


ForEachLoopContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

ForEachLoopContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterForEachLoop(this);
	}
};

ForEachLoopContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitForEachLoop(this);
	}
};

ForEachLoopContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitForEachLoop(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.ForEachLoopContext = ForEachLoopContext;

TrumplangParser.prototype.forEachLoop = function() {

    var localctx = new ForEachLoopContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, TrumplangParser.RULE_forEachLoop);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 231;
        this.match(TrumplangParser.T__25);
        this.state = 232;
        this.match(TrumplangParser.VARIABLE);
        this.state = 233;
        this.match(TrumplangParser.T__26);
        this.state = 234;
        this.match(TrumplangParser.VARIABLE);
        this.state = 235;
        this.match(TrumplangParser.T__0);
        this.state = 239;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(((((_la - 3)) & ~0x1f) == 0 && ((1 << (_la - 3)) & ((1 << (TrumplangParser.T__2 - 3)) | (1 << (TrumplangParser.T__4 - 3)) | (1 << (TrumplangParser.T__11 - 3)) | (1 << (TrumplangParser.T__15 - 3)) | (1 << (TrumplangParser.T__16 - 3)) | (1 << (TrumplangParser.T__17 - 3)) | (1 << (TrumplangParser.T__20 - 3)) | (1 << (TrumplangParser.T__21 - 3)) | (1 << (TrumplangParser.T__25 - 3)) | (1 << (TrumplangParser.T__27 - 3)) | (1 << (TrumplangParser.T__28 - 3)) | (1 << (TrumplangParser.T__31 - 3)) | (1 << (TrumplangParser.T__32 - 3)) | (1 << (TrumplangParser.T__33 - 3)))) !== 0) || ((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (TrumplangParser.T__56 - 57)) | (1 << (TrumplangParser.T__57 - 57)) | (1 << (TrumplangParser.T__58 - 57)) | (1 << (TrumplangParser.VARIABLE - 57)) | (1 << (TrumplangParser.COMMENT - 57)))) !== 0)) {
            this.state = 236;
            this.statement();
            this.state = 241;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 242;
        this.match(TrumplangParser.T__13);
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
};


function LoopBreakContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_loopBreak;
    return this;
}

LoopBreakContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LoopBreakContext.prototype.constructor = LoopBreakContext;


LoopBreakContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterLoopBreak(this);
	}
};

LoopBreakContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitLoopBreak(this);
	}
};

LoopBreakContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitLoopBreak(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.LoopBreakContext = LoopBreakContext;

TrumplangParser.prototype.loopBreak = function() {

    var localctx = new LoopBreakContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, TrumplangParser.RULE_loopBreak);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 244;
        this.match(TrumplangParser.T__27);
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
};


function ArrayDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_arrayDeclaration;
    return this;
}

ArrayDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayDeclarationContext.prototype.constructor = ArrayDeclarationContext;

ArrayDeclarationContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
};

ArrayDeclarationContext.prototype.arrayElements = function() {
    return this.getTypedRuleContext(ArrayElementsContext,0);
};

ArrayDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterArrayDeclaration(this);
	}
};

ArrayDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitArrayDeclaration(this);
	}
};

ArrayDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitArrayDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.ArrayDeclarationContext = ArrayDeclarationContext;

TrumplangParser.prototype.arrayDeclaration = function() {

    var localctx = new ArrayDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, TrumplangParser.RULE_arrayDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        this.match(TrumplangParser.T__28);
        this.state = 247;
        this.match(TrumplangParser.VARIABLE);
        this.state = 248;
        this.match(TrumplangParser.T__29);
        this.state = 250;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        if(la_===1) {
            this.state = 249;
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
};


function ArrayElementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_arrayElements;
    return this;
}

ArrayElementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayElementsContext.prototype.constructor = ArrayElementsContext;

ArrayElementsContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ArrayElementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterArrayElements(this);
	}
};

ArrayElementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitArrayElements(this);
	}
};

ArrayElementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitArrayElements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.ArrayElementsContext = ArrayElementsContext;

TrumplangParser.prototype.arrayElements = function() {

    var localctx = new ArrayElementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, TrumplangParser.RULE_arrayElements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 252;
        this.expression(0);
        this.state = 257;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TrumplangParser.T__30) {
            this.state = 253;
            this.match(TrumplangParser.T__30);
            this.state = 254;
            this.expression(0);
            this.state = 259;
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
};


function AssignmentStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_assignmentStatement;
    return this;
}

AssignmentStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentStatementContext.prototype.constructor = AssignmentStatementContext;

AssignmentStatementContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
};

AssignmentStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignmentStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterAssignmentStatement(this);
	}
};

AssignmentStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitAssignmentStatement(this);
	}
};

AssignmentStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitAssignmentStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.AssignmentStatementContext = AssignmentStatementContext;

TrumplangParser.prototype.assignmentStatement = function() {

    var localctx = new AssignmentStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, TrumplangParser.RULE_assignmentStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 260;
        this.match(TrumplangParser.VARIABLE);
        this.state = 261;
        this.match(TrumplangParser.T__3);
        this.state = 262;
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
};


function PrintStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_printStatement;
    return this;
}

PrintStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrintStatementContext.prototype.constructor = PrintStatementContext;

PrintStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrintStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterPrintStatement(this);
	}
};

PrintStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitPrintStatement(this);
	}
};

PrintStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitPrintStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.PrintStatementContext = PrintStatementContext;

TrumplangParser.prototype.printStatement = function() {

    var localctx = new PrintStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, TrumplangParser.RULE_printStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 264;
        this.match(TrumplangParser.T__31);
        this.state = 265;
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
};


function InputStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_inputStatement;
    return this;
}

InputStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InputStatementContext.prototype.constructor = InputStatementContext;

InputStatementContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
};

InputStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterInputStatement(this);
	}
};

InputStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitInputStatement(this);
	}
};

InputStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitInputStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.InputStatementContext = InputStatementContext;

TrumplangParser.prototype.inputStatement = function() {

    var localctx = new InputStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, TrumplangParser.RULE_inputStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 267;
        this.match(TrumplangParser.T__32);
        this.state = 268;
        this.match(TrumplangParser.VARIABLE);
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
};


function IncrementStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_incrementStatement;
    return this;
}

IncrementStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IncrementStatementContext.prototype.constructor = IncrementStatementContext;

IncrementStatementContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
};

IncrementStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterIncrementStatement(this);
	}
};

IncrementStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitIncrementStatement(this);
	}
};

IncrementStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitIncrementStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.IncrementStatementContext = IncrementStatementContext;

TrumplangParser.prototype.incrementStatement = function() {

    var localctx = new IncrementStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, TrumplangParser.RULE_incrementStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        this.match(TrumplangParser.T__33);
        this.state = 271;
        this.match(TrumplangParser.VARIABLE);
        this.state = 272;
        this.match(TrumplangParser.T__34);
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
};


function DecrementStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_decrementStatement;
    return this;
}

DecrementStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DecrementStatementContext.prototype.constructor = DecrementStatementContext;

DecrementStatementContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
};

DecrementStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterDecrementStatement(this);
	}
};

DecrementStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitDecrementStatement(this);
	}
};

DecrementStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitDecrementStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.DecrementStatementContext = DecrementStatementContext;

TrumplangParser.prototype.decrementStatement = function() {

    var localctx = new DecrementStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, TrumplangParser.RULE_decrementStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 274;
        this.match(TrumplangParser.T__33);
        this.state = 275;
        this.match(TrumplangParser.VARIABLE);
        this.state = 276;
        this.match(TrumplangParser.T__35);
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
};


function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ConditionContext.prototype.comparison = function() {
    return this.getTypedRuleContext(ComparisonContext,0);
};

ConditionContext.prototype.condition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ConditionContext);
    } else {
        return this.getTypedRuleContext(ConditionContext,i);
    }
};

ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitCondition(this);
	}
};

ConditionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitCondition(this);
    } else {
        return visitor.visitChildren(this);
    }
};



TrumplangParser.prototype.condition = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ConditionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 50;
    this.enterRecursionRule(localctx, 50, TrumplangParser.RULE_condition, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 285;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case TrumplangParser.T__16:
        case TrumplangParser.T__50:
        case TrumplangParser.VARIABLE:
        case TrumplangParser.STRING:
        case TrumplangParser.NUMBER:
        case TrumplangParser.BOOLEAN:
            this.state = 279;
            this.expression(0);
            this.state = 280;
            this.comparison();
            this.state = 281;
            this.expression(0);
            break;
        case TrumplangParser.T__36:
            this.state = 283;
            this.match(TrumplangParser.T__36);
            this.state = 284;
            this.condition(3);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 295;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 293;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ConditionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_condition);
                    this.state = 287;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 288;
                    this.match(TrumplangParser.T__37);
                    this.state = 289;
                    this.condition(3);
                    break;

                case 2:
                    localctx = new ConditionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_condition);
                    this.state = 290;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 291;
                    this.match(TrumplangParser.T__38);
                    this.state = 292;
                    this.condition(2);
                    break;

                } 
            }
            this.state = 297;
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
};


function ComparisonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_comparison;
    return this;
}

ComparisonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparisonContext.prototype.constructor = ComparisonContext;


ComparisonContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterComparison(this);
	}
};

ComparisonContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitComparison(this);
	}
};

ComparisonContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitComparison(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.ComparisonContext = ComparisonContext;

TrumplangParser.prototype.comparison = function() {

    var localctx = new ComparisonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, TrumplangParser.RULE_comparison);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 298;
        _la = this._input.LA(1);
        if(!(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (TrumplangParser.T__39 - 40)) | (1 << (TrumplangParser.T__40 - 40)) | (1 << (TrumplangParser.T__41 - 40)) | (1 << (TrumplangParser.T__42 - 40)) | (1 << (TrumplangParser.T__43 - 40)) | (1 << (TrumplangParser.T__44 - 40)))) !== 0))) {
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
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

ExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



TrumplangParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 54;
    this.enterRecursionRule(localctx, 54, TrumplangParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 301;
        this.term(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 314;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 312;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_expression);
                    this.state = 303;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 304;
                    this.match(TrumplangParser.T__45);
                    this.state = 305;
                    this.term(0);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_expression);
                    this.state = 306;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 307;
                    this.match(TrumplangParser.T__46);
                    this.state = 308;
                    this.term(0);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_expression);
                    this.state = 309;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 310;
                    this.match(TrumplangParser.T__47);
                    this.state = 311;
                    this.term(0);
                    break;

                } 
            }
            this.state = 316;
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
};


function TermContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_term;
    return this;
}

TermContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TermContext.prototype.constructor = TermContext;

TermContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

TermContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

TermContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterTerm(this);
	}
};

TermContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitTerm(this);
	}
};

TermContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitTerm(this);
    } else {
        return visitor.visitChildren(this);
    }
};



TrumplangParser.prototype.term = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new TermContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 56;
    this.enterRecursionRule(localctx, 56, TrumplangParser.RULE_term, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
        this.factor();
        this._ctx.stop = this._input.LT(-1);
        this.state = 328;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 326;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new TermContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
                    this.state = 320;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 321;
                    this.match(TrumplangParser.T__48);
                    this.state = 322;
                    this.factor();
                    break;

                case 2:
                    localctx = new TermContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
                    this.state = 323;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 324;
                    this.match(TrumplangParser.T__49);
                    this.state = 325;
                    this.factor();
                    break;

                } 
            }
            this.state = 330;
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
};


function FactorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_factor;
    return this;
}

FactorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FactorContext.prototype.constructor = FactorContext;

FactorContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

FactorContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
};

FactorContext.prototype.STRING = function() {
    return this.getToken(TrumplangParser.STRING, 0);
};

FactorContext.prototype.NUMBER = function() {
    return this.getToken(TrumplangParser.NUMBER, 0);
};

FactorContext.prototype.BOOLEAN = function() {
    return this.getToken(TrumplangParser.BOOLEAN, 0);
};

FactorContext.prototype.functionCall = function() {
    return this.getTypedRuleContext(FunctionCallContext,0);
};

FactorContext.prototype.arrayAccess = function() {
    return this.getTypedRuleContext(ArrayAccessContext,0);
};

FactorContext.prototype.dealAccess = function() {
    return this.getTypedRuleContext(DealAccessContext,0);
};

FactorContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterFactor(this);
	}
};

FactorContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitFactor(this);
	}
};

FactorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitFactor(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.FactorContext = FactorContext;

TrumplangParser.prototype.factor = function() {

    var localctx = new FactorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, TrumplangParser.RULE_factor);
    try {
        this.state = 342;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 331;
            this.match(TrumplangParser.T__50);
            this.state = 332;
            this.expression(0);
            this.state = 333;
            this.match(TrumplangParser.T__51);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 335;
            this.match(TrumplangParser.VARIABLE);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 336;
            this.match(TrumplangParser.STRING);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 337;
            this.match(TrumplangParser.NUMBER);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 338;
            this.match(TrumplangParser.BOOLEAN);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 339;
            this.functionCall();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 340;
            this.arrayAccess();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 341;
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
};


function ArrayAccessContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_arrayAccess;
    return this;
}

ArrayAccessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayAccessContext.prototype.constructor = ArrayAccessContext;

ArrayAccessContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
};

ArrayAccessContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ArrayAccessContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterArrayAccess(this);
	}
};

ArrayAccessContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitArrayAccess(this);
	}
};

ArrayAccessContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitArrayAccess(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.ArrayAccessContext = ArrayAccessContext;

TrumplangParser.prototype.arrayAccess = function() {

    var localctx = new ArrayAccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, TrumplangParser.RULE_arrayAccess);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 344;
        this.match(TrumplangParser.VARIABLE);
        this.state = 345;
        this.match(TrumplangParser.T__52);
        this.state = 346;
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
};


function DealFieldContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_dealField;
    return this;
}

DealFieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DealFieldContext.prototype.constructor = DealFieldContext;

DealFieldContext.prototype.dataType = function() {
    return this.getTypedRuleContext(DataTypeContext,0);
};

DealFieldContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
};

DealFieldContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DealFieldContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterDealField(this);
	}
};

DealFieldContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitDealField(this);
	}
};

DealFieldContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitDealField(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.DealFieldContext = DealFieldContext;

TrumplangParser.prototype.dealField = function() {

    var localctx = new DealFieldContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, TrumplangParser.RULE_dealField);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 348;
        this.dataType();
        this.state = 349;
        this.match(TrumplangParser.VARIABLE);
        this.state = 350;
        this.match(TrumplangParser.T__3);
        this.state = 351;
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
};


function DealDeclarationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_dealDeclaration;
    return this;
}

DealDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DealDeclarationContext.prototype.constructor = DealDeclarationContext;

DealDeclarationContext.prototype.dealField = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DealFieldContext);
    } else {
        return this.getTypedRuleContext(DealFieldContext,i);
    }
};

DealDeclarationContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterDealDeclaration(this);
	}
};

DealDeclarationContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitDealDeclaration(this);
	}
};

DealDeclarationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitDealDeclaration(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.DealDeclarationContext = DealDeclarationContext;

TrumplangParser.prototype.dealDeclaration = function() {

    var localctx = new DealDeclarationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, TrumplangParser.RULE_dealDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 353;
        this.match(TrumplangParser.T__50);
        this.state = 354;
        this.dealField();
        this.state = 359;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TrumplangParser.T__53) {
            this.state = 355;
            this.match(TrumplangParser.T__53);
            this.state = 356;
            this.dealField();
            this.state = 361;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 362;
        this.match(TrumplangParser.T__54);
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
};


function DealAccessContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_dealAccess;
    return this;
}

DealAccessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DealAccessContext.prototype.constructor = DealAccessContext;

DealAccessContext.prototype.VARIABLE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TrumplangParser.VARIABLE);
    } else {
        return this.getToken(TrumplangParser.VARIABLE, i);
    }
};


DealAccessContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterDealAccess(this);
	}
};

DealAccessContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitDealAccess(this);
	}
};

DealAccessContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitDealAccess(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.DealAccessContext = DealAccessContext;

TrumplangParser.prototype.dealAccess = function() {

    var localctx = new DealAccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, TrumplangParser.RULE_dealAccess);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 364;
        this.match(TrumplangParser.VARIABLE);
        this.state = 365;
        this.match(TrumplangParser.T__55);
        this.state = 366;
        this.match(TrumplangParser.VARIABLE);
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
};


function AssertStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_assertStatement;
    return this;
}

AssertStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssertStatementContext.prototype.constructor = AssertStatementContext;

AssertStatementContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

AssertStatementContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

AssertStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterAssertStatement(this);
	}
};

AssertStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitAssertStatement(this);
	}
};

AssertStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitAssertStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.AssertStatementContext = AssertStatementContext;

TrumplangParser.prototype.assertStatement = function() {

    var localctx = new AssertStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, TrumplangParser.RULE_assertStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 368;
        this.match(TrumplangParser.T__56);
        this.state = 371;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            this.state = 369;
            this.expression(0);
            break;

        case 2:
            this.state = 370;
            this.condition(0);
            break;

        }
        this.state = 373;
        this.match(TrumplangParser.T__39);
        this.state = 374;
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
};


function ImportStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_importStatement;
    return this;
}

ImportStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImportStatementContext.prototype.constructor = ImportStatementContext;

ImportStatementContext.prototype.FILEPATH = function() {
    return this.getToken(TrumplangParser.FILEPATH, 0);
};

ImportStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterImportStatement(this);
	}
};

ImportStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitImportStatement(this);
	}
};

ImportStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitImportStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.ImportStatementContext = ImportStatementContext;

TrumplangParser.prototype.importStatement = function() {

    var localctx = new ImportStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, TrumplangParser.RULE_importStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 376;
        this.match(TrumplangParser.T__57);
        this.state = 377;
        this.match(TrumplangParser.FILEPATH);
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
};


function SelectiveImportContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_selectiveImport;
    return this;
}

SelectiveImportContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectiveImportContext.prototype.constructor = SelectiveImportContext;

SelectiveImportContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TrumplangParser.IDENTIFIER);
    } else {
        return this.getToken(TrumplangParser.IDENTIFIER, i);
    }
};


SelectiveImportContext.prototype.FILEPATH = function() {
    return this.getToken(TrumplangParser.FILEPATH, 0);
};

SelectiveImportContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterSelectiveImport(this);
	}
};

SelectiveImportContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitSelectiveImport(this);
	}
};

SelectiveImportContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitSelectiveImport(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.SelectiveImportContext = SelectiveImportContext;

TrumplangParser.prototype.selectiveImport = function() {

    var localctx = new SelectiveImportContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, TrumplangParser.RULE_selectiveImport);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 379;
        this.match(TrumplangParser.T__58);
        this.state = 380;
        this.match(TrumplangParser.IDENTIFIER);
        this.state = 385;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TrumplangParser.T__14) {
            this.state = 381;
            this.match(TrumplangParser.T__14);
            this.state = 382;
            this.match(TrumplangParser.IDENTIFIER);
            this.state = 387;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 388;
        this.match(TrumplangParser.T__23);
        this.state = 389;
        this.match(TrumplangParser.FILEPATH);
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
};


TrumplangParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 25:
			return this.condition_sempred(localctx, predIndex);
	case 27:
			return this.expression_sempred(localctx, predIndex);
	case 28:
			return this.term_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

TrumplangParser.prototype.condition_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

TrumplangParser.prototype.expression_sempred = function(localctx, predIndex) {
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

TrumplangParser.prototype.term_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 5:
			return this.precpred(this._ctx, 2);
		case 6:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.TrumplangParser = TrumplangParser;

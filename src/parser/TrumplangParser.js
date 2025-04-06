// Generated from Trumplang.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TrumplangListener = require('./TrumplangListener').TrumplangListener;
var TrumplangVisitor = require('./TrumplangVisitor').TrumplangVisitor;

var grammarFileName = "Trumplang.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003I\u0168\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0003\u0002\u0003\u0002\u0006\u0002Q\n\u0002",
    "\r\u0002\u000e\u0002R\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003l\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0005\u0005",
    "v\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0005\b\u0084\n\b\u0003\b\u0003\b\u0003\t\u0003\t\u0007\t\u008a\n\t",
    "\f\t\u000e\t\u008d\u000b\t\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0007\n\u0097\n\n\f\n\u000e\n\u009a\u000b\n\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0005",
    "\f\u00a3\n\f\u0003\r\u0003\r\u0003\r\u0007\r\u00a8\n\r\f\r\u000e\r\u00ab",
    "\u000b\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0007\u000e",
    "\u00b1\n\u000e\f\u000e\u000e\u000e\u00b4\u000b\u000e\u0003\u000e\u0005",
    "\u000e\u00b7\n\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f",
    "\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0015",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u00d8\n\u0015\u0003",
    "\u0016\u0003\u0016\u0003\u0016\u0007\u0016\u00dd\n\u0016\f\u0016\u000e",
    "\u0016\u00e0\u000b\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c",
    "\u00fd\n\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001c\u0007\u001c\u0105\n\u001c\f\u001c\u000e\u001c\u0108",
    "\u000b\u001c\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0007\u001e\u0118\n\u001e\f\u001e",
    "\u000e\u001e\u011b\u000b\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0007",
    "\u001f\u0126\n\u001f\f\u001f\u000e\u001f\u0129\u000b\u001f\u0003 \u0003",
    " \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0005",
    " \u0136\n \u0003!\u0003!\u0003!\u0003!\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0003\"\u0003#\u0003#\u0003#\u0003#\u0007#\u0145\n#\f#\u000e#\u0148",
    "\u000b#\u0003#\u0003#\u0003#\u0003$\u0003$\u0003$\u0003$\u0003%\u0003",
    "%\u0003%\u0005%\u0154\n%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003",
    "\'\u0003\'\u0003\'\u0003\'\u0007\'\u0160\n\'\f\'\u000e\'\u0163\u000b",
    "\'\u0003\'\u0003\'\u0003\'\u0003\'\u0002\u00056:<(\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    ",.02468:<>@BDFHJL\u0002\u0004\u0003\u00025:\u0003\u0002&+\u0002\u0174",
    "\u0002N\u0003\u0002\u0002\u0002\u0004k\u0003\u0002\u0002\u0002\u0006",
    "m\u0003\u0002\u0002\u0002\bo\u0003\u0002\u0002\u0002\nw\u0003\u0002",
    "\u0002\u0002\f}\u0003\u0002\u0002\u0002\u000e\u007f\u0003\u0002\u0002",
    "\u0002\u0010\u0087\u0003\u0002\u0002\u0002\u0012\u0090\u0003\u0002\u0002",
    "\u0002\u0014\u009b\u0003\u0002\u0002\u0002\u0016\u009e\u0003\u0002\u0002",
    "\u0002\u0018\u00a4\u0003\u0002\u0002\u0002\u001a\u00ac\u0003\u0002\u0002",
    "\u0002\u001c\u00b8\u0003\u0002\u0002\u0002\u001e\u00bc\u0003\u0002\u0002",
    "\u0002 \u00bf\u0003\u0002\u0002\u0002\"\u00c3\u0003\u0002\u0002\u0002",
    "$\u00cb\u0003\u0002\u0002\u0002&\u00d1\u0003\u0002\u0002\u0002(\u00d3",
    "\u0003\u0002\u0002\u0002*\u00d9\u0003\u0002\u0002\u0002,\u00e1\u0003",
    "\u0002\u0002\u0002.\u00e5\u0003\u0002\u0002\u00020\u00e8\u0003\u0002",
    "\u0002\u00022\u00eb\u0003\u0002\u0002\u00024\u00ef\u0003\u0002\u0002",
    "\u00026\u00fc\u0003\u0002\u0002\u00028\u0109\u0003\u0002\u0002\u0002",
    ":\u010b\u0003\u0002\u0002\u0002<\u011c\u0003\u0002\u0002\u0002>\u0135",
    "\u0003\u0002\u0002\u0002@\u0137\u0003\u0002\u0002\u0002B\u013b\u0003",
    "\u0002\u0002\u0002D\u0140\u0003\u0002\u0002\u0002F\u014c\u0003\u0002",
    "\u0002\u0002H\u0150\u0003\u0002\u0002\u0002J\u0158\u0003\u0002\u0002",
    "\u0002L\u015b\u0003\u0002\u0002\u0002NP\u0007\u0010\u0002\u0002OQ\u0005",
    "\u0004\u0003\u0002PO\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002",
    "RP\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002",
    "\u0002TU\u0007\u0011\u0002\u0002U\u0003\u0003\u0002\u0002\u0002Vl\u0005",
    "J&\u0002Wl\u0005\u0010\t\u0002Xl\u0005L\'\u0002Yl\u0005\b\u0005\u0002",
    "Zl\u0005\n\u0006\u0002[l\u0005\u000e\b\u0002\\l\u0005\u0016\f\u0002",
    "]l\u0005\u001a\u000e\u0002^l\u0005 \u0011\u0002_l\u0005\"\u0012\u0002",
    "`l\u0005$\u0013\u0002al\u0005(\u0015\u0002bl\u0005,\u0017\u0002cl\u0005",
    "2\u001a\u0002dl\u00054\u001b\u0002el\u0005.\u0018\u0002fl\u00050\u0019",
    "\u0002gl\u0005\u0014\u000b\u0002hl\u0005\u0006\u0004\u0002il\u0005&",
    "\u0014\u0002jl\u0005H%\u0002kV\u0003\u0002\u0002\u0002kW\u0003\u0002",
    "\u0002\u0002kX\u0003\u0002\u0002\u0002kY\u0003\u0002\u0002\u0002kZ\u0003",
    "\u0002\u0002\u0002k[\u0003\u0002\u0002\u0002k\\\u0003\u0002\u0002\u0002",
    "k]\u0003\u0002\u0002\u0002k^\u0003\u0002\u0002\u0002k_\u0003\u0002\u0002",
    "\u0002k`\u0003\u0002\u0002\u0002ka\u0003\u0002\u0002\u0002kb\u0003\u0002",
    "\u0002\u0002kc\u0003\u0002\u0002\u0002kd\u0003\u0002\u0002\u0002ke\u0003",
    "\u0002\u0002\u0002kf\u0003\u0002\u0002\u0002kg\u0003\u0002\u0002\u0002",
    "kh\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002kj\u0003\u0002\u0002",
    "\u0002l\u0005\u0003\u0002\u0002\u0002mn\u0007G\u0002\u0002n\u0007\u0003",
    "\u0002\u0002\u0002op\u0007\u0013\u0002\u0002pq\u0005\f\u0007\u0002q",
    "r\u0007@\u0002\u0002ru\u00071\u0002\u0002sv\u0005:\u001e\u0002tv\u0005",
    "D#\u0002us\u0003\u0002\u0002\u0002ut\u0003\u0002\u0002\u0002v\t\u0003",
    "\u0002\u0002\u0002wx\u0007\u0014\u0002\u0002xy\u0005\f\u0007\u0002y",
    "z\u0007@\u0002\u0002z{\u00071\u0002\u0002{|\u0005:\u001e\u0002|\u000b",
    "\u0003\u0002\u0002\u0002}~\t\u0002\u0002\u0002~\r\u0003\u0002\u0002",
    "\u0002\u007f\u0080\u0007\u0012\u0002\u0002\u0080\u0081\u0007A\u0002",
    "\u0002\u0081\u0083\u0007\u0015\u0002\u0002\u0082\u0084\u0005\u0012\n",
    "\u0002\u0083\u0082\u0003\u0002\u0002\u0002\u0083\u0084\u0003\u0002\u0002",
    "\u0002\u0084\u0085\u0003\u0002\u0002\u0002\u0085\u0086\u0005\u0010\t",
    "\u0002\u0086\u000f\u0003\u0002\u0002\u0002\u0087\u008b\u0007;\u0002",
    "\u0002\u0088\u008a\u0005\u0004\u0003\u0002\u0089\u0088\u0003\u0002\u0002",
    "\u0002\u008a\u008d\u0003\u0002\u0002\u0002\u008b\u0089\u0003\u0002\u0002",
    "\u0002\u008b\u008c\u0003\u0002\u0002\u0002\u008c\u008e\u0003\u0002\u0002",
    "\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008e\u008f\u0007<\u0002",
    "\u0002\u008f\u0011\u0003\u0002\u0002\u0002\u0090\u0091\u0005\f\u0007",
    "\u0002\u0091\u0098\u0007@\u0002\u0002\u0092\u0093\u0007\u0016\u0002",
    "\u0002\u0093\u0094\u0005\f\u0007\u0002\u0094\u0095\u0007@\u0002\u0002",
    "\u0095\u0097\u0003\u0002\u0002\u0002\u0096\u0092\u0003\u0002\u0002\u0002",
    "\u0097\u009a\u0003\u0002\u0002\u0002\u0098\u0096\u0003\u0002\u0002\u0002",
    "\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u0013\u0003\u0002\u0002\u0002",
    "\u009a\u0098\u0003\u0002\u0002\u0002\u009b\u009c\u0007\u0017\u0002\u0002",
    "\u009c\u009d\u0005:\u001e\u0002\u009d\u0015\u0003\u0002\u0002\u0002",
    "\u009e\u009f\u0007\u0018\u0002\u0002\u009f\u00a0\u0007A\u0002\u0002",
    "\u00a0\u00a2\u0007\u0015\u0002\u0002\u00a1\u00a3\u0005\u0018\r\u0002",
    "\u00a2\u00a1\u0003\u0002\u0002\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002",
    "\u00a3\u0017\u0003\u0002\u0002\u0002\u00a4\u00a9\u0005:\u001e\u0002",
    "\u00a5\u00a6\u0007\u0016\u0002\u0002\u00a6\u00a8\u0005:\u001e\u0002",
    "\u00a7\u00a5\u0003\u0002\u0002\u0002\u00a8\u00ab\u0003\u0002\u0002\u0002",
    "\u00a9\u00a7\u0003\u0002\u0002\u0002\u00a9\u00aa\u0003\u0002\u0002\u0002",
    "\u00aa\u0019\u0003\u0002\u0002\u0002\u00ab\u00a9\u0003\u0002\u0002\u0002",
    "\u00ac\u00ad\u0007\t\u0002\u0002\u00ad\u00ae\u00056\u001c\u0002\u00ae",
    "\u00b2\u0005\u0004\u0003\u0002\u00af\u00b1\u0005\u001c\u000f\u0002\u00b0",
    "\u00af\u0003\u0002\u0002\u0002\u00b1\u00b4\u0003\u0002\u0002\u0002\u00b2",
    "\u00b0\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3",
    "\u00b6\u0003\u0002\u0002\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b5",
    "\u00b7\u0005\u001e\u0010\u0002\u00b6\u00b5\u0003\u0002\u0002\u0002\u00b6",
    "\u00b7\u0003\u0002\u0002\u0002\u00b7\u001b\u0003\u0002\u0002\u0002\u00b8",
    "\u00b9\u0007\n\u0002\u0002\u00b9\u00ba\u00056\u001c\u0002\u00ba\u00bb",
    "\u0005\u0004\u0003\u0002\u00bb\u001d\u0003\u0002\u0002\u0002\u00bc\u00bd",
    "\u0007\u000b\u0002\u0002\u00bd\u00be\u0005\u0004\u0003\u0002\u00be\u001f",
    "\u0003\u0002\u0002\u0002\u00bf\u00c0\u0007\u001a\u0002\u0002\u00c0\u00c1",
    "\u00056\u001c\u0002\u00c1\u00c2\u0005\u0010\t\u0002\u00c2!\u0003\u0002",
    "\u0002\u0002\u00c3\u00c4\u0007\u001c\u0002\u0002\u00c4\u00c5\u0007@",
    "\u0002\u0002\u00c5\u00c6\u0007\u001d\u0002\u0002\u00c6\u00c7\u0005:",
    "\u001e\u0002\u00c7\u00c8\u0007\u001e\u0002\u0002\u00c8\u00c9\u0005:",
    "\u001e\u0002\u00c9\u00ca\u0005\u0010\t\u0002\u00ca#\u0003\u0002\u0002",
    "\u0002\u00cb\u00cc\u0007\u001f\u0002\u0002\u00cc\u00cd\u0007@\u0002",
    "\u0002\u00cd\u00ce\u0007 \u0002\u0002\u00ce\u00cf\u0007@\u0002\u0002",
    "\u00cf\u00d0\u0005\u0010\t\u0002\u00d0%\u0003\u0002\u0002\u0002\u00d1",
    "\u00d2\u0007\u0019\u0002\u0002\u00d2\'\u0003\u0002\u0002\u0002\u00d3",
    "\u00d4\u0007\f\u0002\u0002\u00d4\u00d5\u0007@\u0002\u0002\u00d5\u00d7",
    "\u0007\r\u0002\u0002\u00d6\u00d8\u0005*\u0016\u0002\u00d7\u00d6\u0003",
    "\u0002\u0002\u0002\u00d7\u00d8\u0003\u0002\u0002\u0002\u00d8)\u0003",
    "\u0002\u0002\u0002\u00d9\u00de\u0005:\u001e\u0002\u00da\u00db\u0007",
    "\u000f\u0002\u0002\u00db\u00dd\u0005:\u001e\u0002\u00dc\u00da\u0003",
    "\u0002\u0002\u0002\u00dd\u00e0\u0003\u0002\u0002\u0002\u00de\u00dc\u0003",
    "\u0002\u0002\u0002\u00de\u00df\u0003\u0002\u0002\u0002\u00df+\u0003",
    "\u0002\u0002\u0002\u00e0\u00de\u0003\u0002\u0002\u0002\u00e1\u00e2\u0007",
    "@\u0002\u0002\u00e2\u00e3\u00071\u0002\u0002\u00e3\u00e4\u0005:\u001e",
    "\u0002\u00e4-\u0003\u0002\u0002\u0002\u00e5\u00e6\u0007!\u0002\u0002",
    "\u00e6\u00e7\u0005:\u001e\u0002\u00e7/\u0003\u0002\u0002\u0002\u00e8",
    "\u00e9\u0007\"\u0002\u0002\u00e9\u00ea\u0007@\u0002\u0002\u00ea1\u0003",
    "\u0002\u0002\u0002\u00eb\u00ec\u0007\u0003\u0002\u0002\u00ec\u00ed\u0007",
    "@\u0002\u0002\u00ed\u00ee\u0007\u0004\u0002\u0002\u00ee3\u0003\u0002",
    "\u0002\u0002\u00ef\u00f0\u0007\u0003\u0002\u0002\u00f0\u00f1\u0007@",
    "\u0002\u0002\u00f1\u00f2\u0007\u0005\u0002\u0002\u00f25\u0003\u0002",
    "\u0002\u0002\u00f3\u00f4\b\u001c\u0001\u0002\u00f4\u00f5\u0005:\u001e",
    "\u0002\u00f5\u00f6\u00058\u001d\u0002\u00f6\u00f7\u0005:\u001e\u0002",
    "\u00f7\u00fd\u0003\u0002\u0002\u0002\u00f8\u00fd\u0007@\u0002\u0002",
    "\u00f9\u00fd\u0007D\u0002\u0002\u00fa\u00fb\u0007,\u0002\u0002\u00fb",
    "\u00fd\u00056\u001c\u0005\u00fc\u00f3\u0003\u0002\u0002\u0002\u00fc",
    "\u00f8\u0003\u0002\u0002\u0002\u00fc\u00f9\u0003\u0002\u0002\u0002\u00fc",
    "\u00fa\u0003\u0002\u0002\u0002\u00fd\u0106\u0003\u0002\u0002\u0002\u00fe",
    "\u00ff\f\u0004\u0002\u0002\u00ff\u0100\u0007-\u0002\u0002\u0100\u0105",
    "\u00056\u001c\u0005\u0101\u0102\f\u0003\u0002\u0002\u0102\u0103\u0007",
    ".\u0002\u0002\u0103\u0105\u00056\u001c\u0004\u0104\u00fe\u0003\u0002",
    "\u0002\u0002\u0104\u0101\u0003\u0002\u0002\u0002\u0105\u0108\u0003\u0002",
    "\u0002\u0002\u0106\u0104\u0003\u0002\u0002\u0002\u0106\u0107\u0003\u0002",
    "\u0002\u0002\u01077\u0003\u0002\u0002\u0002\u0108\u0106\u0003\u0002",
    "\u0002\u0002\u0109\u010a\t\u0003\u0002\u0002\u010a9\u0003\u0002\u0002",
    "\u0002\u010b\u010c\b\u001e\u0001\u0002\u010c\u010d\u0005<\u001f\u0002",
    "\u010d\u0119\u0003\u0002\u0002\u0002\u010e\u010f\f\u0005\u0002\u0002",
    "\u010f\u0110\u0007/\u0002\u0002\u0110\u0118\u0005<\u001f\u0002\u0111",
    "\u0112\f\u0004\u0002\u0002\u0112\u0113\u00072\u0002\u0002\u0113\u0118",
    "\u0005<\u001f\u0002\u0114\u0115\f\u0003\u0002\u0002\u0115\u0116\u0007",
    "0\u0002\u0002\u0116\u0118\u0005<\u001f\u0002\u0117\u010e\u0003\u0002",
    "\u0002\u0002\u0117\u0111\u0003\u0002\u0002\u0002\u0117\u0114\u0003\u0002",
    "\u0002\u0002\u0118\u011b\u0003\u0002\u0002\u0002\u0119\u0117\u0003\u0002",
    "\u0002\u0002\u0119\u011a\u0003\u0002\u0002\u0002\u011a;\u0003\u0002",
    "\u0002\u0002\u011b\u0119\u0003\u0002\u0002\u0002\u011c\u011d\b\u001f",
    "\u0001\u0002\u011d\u011e\u0005> \u0002\u011e\u0127\u0003\u0002\u0002",
    "\u0002\u011f\u0120\f\u0004\u0002\u0002\u0120\u0121\u00074\u0002\u0002",
    "\u0121\u0126\u0005> \u0002\u0122\u0123\f\u0003\u0002\u0002\u0123\u0124",
    "\u00073\u0002\u0002\u0124\u0126\u0005> \u0002\u0125\u011f\u0003\u0002",
    "\u0002\u0002\u0125\u0122\u0003\u0002\u0002\u0002\u0126\u0129\u0003\u0002",
    "\u0002\u0002\u0127\u0125\u0003\u0002\u0002\u0002\u0127\u0128\u0003\u0002",
    "\u0002\u0002\u0128=\u0003\u0002\u0002\u0002\u0129\u0127\u0003\u0002",
    "\u0002\u0002\u012a\u012b\u0007\u0006\u0002\u0002\u012b\u012c\u0005:",
    "\u001e\u0002\u012c\u012d\u0007\u0007\u0002\u0002\u012d\u0136\u0003\u0002",
    "\u0002\u0002\u012e\u0136\u0007@\u0002\u0002\u012f\u0136\u0007B\u0002",
    "\u0002\u0130\u0136\u0007C\u0002\u0002\u0131\u0136\u0007D\u0002\u0002",
    "\u0132\u0136\u0005\u0016\f\u0002\u0133\u0136\u0005@!\u0002\u0134\u0136",
    "\u0005F$\u0002\u0135\u012a\u0003\u0002\u0002\u0002\u0135\u012e\u0003",
    "\u0002\u0002\u0002\u0135\u012f\u0003\u0002\u0002\u0002\u0135\u0130\u0003",
    "\u0002\u0002\u0002\u0135\u0131\u0003\u0002\u0002\u0002\u0135\u0132\u0003",
    "\u0002\u0002\u0002\u0135\u0133\u0003\u0002\u0002\u0002\u0135\u0134\u0003",
    "\u0002\u0002\u0002\u0136?\u0003\u0002\u0002\u0002\u0137\u0138\u0007",
    "@\u0002\u0002\u0138\u0139\u0007\u000e\u0002\u0002\u0139\u013a\u0005",
    ":\u001e\u0002\u013aA\u0003\u0002\u0002\u0002\u013b\u013c\u0005\f\u0007",
    "\u0002\u013c\u013d\u0007@\u0002\u0002\u013d\u013e\u00071\u0002\u0002",
    "\u013e\u013f\u0005:\u001e\u0002\u013fC\u0003\u0002\u0002\u0002\u0140",
    "\u0141\u0007\u0006\u0002\u0002\u0141\u0146\u0005B\"\u0002\u0142\u0143",
    "\u0007=\u0002\u0002\u0143\u0145\u0005B\"\u0002\u0144\u0142\u0003\u0002",
    "\u0002\u0002\u0145\u0148\u0003\u0002\u0002\u0002\u0146\u0144\u0003\u0002",
    "\u0002\u0002\u0146\u0147\u0003\u0002\u0002\u0002\u0147\u0149\u0003\u0002",
    "\u0002\u0002\u0148\u0146\u0003\u0002\u0002\u0002\u0149\u014a\u0007\u0007",
    "\u0002\u0002\u014a\u014b\u0007>\u0002\u0002\u014bE\u0003\u0002\u0002",
    "\u0002\u014c\u014d\u0007@\u0002\u0002\u014d\u014e\u0007$\u0002\u0002",
    "\u014e\u014f\u0007@\u0002\u0002\u014fG\u0003\u0002\u0002\u0002\u0150",
    "\u0153\u0007%\u0002\u0002\u0151\u0154\u0005:\u001e\u0002\u0152\u0154",
    "\u00056\u001c\u0002\u0153\u0151\u0003\u0002\u0002\u0002\u0153\u0152",
    "\u0003\u0002\u0002\u0002\u0154\u0155\u0003\u0002\u0002\u0002\u0155\u0156",
    "\u0007&\u0002\u0002\u0156\u0157\u0005:\u001e\u0002\u0157I\u0003\u0002",
    "\u0002\u0002\u0158\u0159\u0007#\u0002\u0002\u0159\u015a\u0007H\u0002",
    "\u0002\u015aK\u0003\u0002\u0002\u0002\u015b\u015c\u0007\b\u0002\u0002",
    "\u015c\u0161\u0007A\u0002\u0002\u015d\u015e\u0007\u0016\u0002\u0002",
    "\u015e\u0160\u0007A\u0002\u0002\u015f\u015d\u0003\u0002\u0002\u0002",
    "\u0160\u0163\u0003\u0002\u0002\u0002\u0161\u015f\u0003\u0002\u0002\u0002",
    "\u0161\u0162\u0003\u0002\u0002\u0002\u0162\u0164\u0003\u0002\u0002\u0002",
    "\u0163\u0161\u0003\u0002\u0002\u0002\u0164\u0165\u0007\u001d\u0002\u0002",
    "\u0165\u0166\u0007H\u0002\u0002\u0166M\u0003\u0002\u0002\u0002\u0019",
    "Rku\u0083\u008b\u0098\u00a2\u00a9\u00b2\u00b6\u00d7\u00de\u00fc\u0104",
    "\u0106\u0117\u0119\u0125\u0127\u0135\u0146\u0153\u0161"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'MAKE'", "'GREATER'", "'SMALLER'", "'('", "')'", 
                     "'I ONLY WANT'", "'LISTEN'", "'PEOPLE ARE SAYING'", 
                     "'NOBODY KNEW'", "'BUILD THE WALL'", "'AND MEXICO WILL PAY FOR IT'", 
                     "'SECTION'", "'PREVAILS'", "'GOD BLESS THE USA!!!'", 
                     "'MAKE AMERICA GREAT AGAIN'", "'INCREDIBLE'", "'I HAVE THE BEST'", 
                     "'I HAVE A VERY GOOD BRAIN FOR'", "'PEOPLE TELL ME'", 
                     "'AND'", "'AND I MEAN THAT'", "'I CALL UPON'", "'I WILL VETO!'", 
                     "'WE'RE GOING TO WIN IN A LANDSLIDE'", "'WE'RE GOING TO WIN, WIN, WIN'", 
                     "'WITH'", "'FROM'", "'TO'", "'BILLIONS AND BILLIONS'", 
                     "'YET'", "'EVERYONE IS TALKING ABOUT'", "'MANY PEOPLE ARE ASKING'", 
                     "'I KNOW THE BEST PEOPLE FROM'", "'FOLLOW'", "'FACT CHECK'", 
                     "'SO TRUE'", "'TOTAL DISASTER'", "'BETTER THAN'", "'AT LEAST AS GOOD AS'", 
                     "'NOT AS GOOD AS'", "'NO BETTER THAN'", "'WRONG'", 
                     "'AND IT'S TRUE'", "'OR MAYBE'", "'WINNING'", "'LOSING'", 
                     "'ABSOLUTELY'", "'ENDORSING'", "'SAD'", "'BIG LEAGUE TIMES'", 
                     "'HUGE'", "'BIGLY'", "'SUPPORT'", "'TWEET'", "'WALL'", 
                     "'DEAL'", "'BELIEVE ME'", "'YOU'RE FIRED'", "'&'", 
                     "'!!'", "'!'", null, null, null, null, null, "'VERY TRUE'", 
                     "'FAKE NEWS'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "IF_DECL", 
                      "ELSE_IF_DECL", "ELSE_DECL", "ARRAY_DECL", "ARRAY_ELEMENTS_DECL", 
                      "ARRAY_ACCESS", "ARRAY_CHAIN", "PROG_START", "PROG_END", 
                      "FUNCTION_DECL", "VARIABLE_DECL", "CONSTANT_DECL", 
                      "PARAMS_ARGS_START", "PARAMS_ARGS_CHAIN", "RETURN", 
                      "FUNC_CALL", "BREAK", "WHILE_LOOP_DECL", "FOR_LOOP_DECL", 
                      "FOR_LOOP_WITH", "FOR_LOOP_FROM", "FOR_LOOP_TO", "FOR_EACH_LOOP_DECL", 
                      "FOR_EACH_FROM", "PRINT", "INPUT", "IMPORT", "DEAL_ACCESS_KEYWORD", 
                      "ASSERT_CALL", "EQUALS", "NOT_EQUALS", "GREATER_THAN", 
                      "GREATER_THAN_OR_EQUALS", "LESS_THAN", "LESS_THAN_OR_EQUALS", 
                      "NOT", "AND", "OR", "PLUS", "MINUS", "ASSIGNMENT", 
                      "STRING_CONCAT", "DIVIDE", "MULTIPLY", "INTEGER_TYPE", 
                      "FLOAT_TYPE", "BOOLEAN_TYPE", "STRING_TYPE", "ARRAY_TYPE", 
                      "STRUCTUR_TYPE", "OPEN_BLOCK", "CLOSE_BLOCK", "AMPERSAND", 
                      "DEAL_DECLARE", "VAR_DECLARE", "VARIABLE", "IDENTIFIER", 
                      "STRING", "NUMBER", "BOOLEAN", "TRUE", "FALSE", "COMMENT", 
                      "FILEPATH", "WS" ];

var ruleNames =  [ "program", "statement", "commentStatement", "variableDeclaration", 
                   "constantDeclaration", "dataType", "functionDeclaration", 
                   "blockStatement", "parameterList", "returnStatement", 
                   "functionCall", "argumentList", "ifStatement", "elseIfStatement", 
                   "elseStatement", "whileLoop", "forLoop", "forEachLoop", 
                   "loopBreak", "arrayDeclaration", "arrayElements", "assignmentStatement", 
                   "printStatement", "inputStatement", "incrementStatement", 
                   "decrementStatement", "condition", "comparison", "expression", 
                   "term", "factor", "arrayAccess", "dealField", "dealDeclaration", 
                   "dealAccess", "assertStatement", "importStatement", "selectiveImport" ];

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
TrumplangParser.WHILE_LOOP_DECL = 24;
TrumplangParser.FOR_LOOP_DECL = 25;
TrumplangParser.FOR_LOOP_WITH = 26;
TrumplangParser.FOR_LOOP_FROM = 27;
TrumplangParser.FOR_LOOP_TO = 28;
TrumplangParser.FOR_EACH_LOOP_DECL = 29;
TrumplangParser.FOR_EACH_FROM = 30;
TrumplangParser.PRINT = 31;
TrumplangParser.INPUT = 32;
TrumplangParser.IMPORT = 33;
TrumplangParser.DEAL_ACCESS_KEYWORD = 34;
TrumplangParser.ASSERT_CALL = 35;
TrumplangParser.EQUALS = 36;
TrumplangParser.NOT_EQUALS = 37;
TrumplangParser.GREATER_THAN = 38;
TrumplangParser.GREATER_THAN_OR_EQUALS = 39;
TrumplangParser.LESS_THAN = 40;
TrumplangParser.LESS_THAN_OR_EQUALS = 41;
TrumplangParser.NOT = 42;
TrumplangParser.AND = 43;
TrumplangParser.OR = 44;
TrumplangParser.PLUS = 45;
TrumplangParser.MINUS = 46;
TrumplangParser.ASSIGNMENT = 47;
TrumplangParser.STRING_CONCAT = 48;
TrumplangParser.DIVIDE = 49;
TrumplangParser.MULTIPLY = 50;
TrumplangParser.INTEGER_TYPE = 51;
TrumplangParser.FLOAT_TYPE = 52;
TrumplangParser.BOOLEAN_TYPE = 53;
TrumplangParser.STRING_TYPE = 54;
TrumplangParser.ARRAY_TYPE = 55;
TrumplangParser.STRUCTUR_TYPE = 56;
TrumplangParser.OPEN_BLOCK = 57;
TrumplangParser.CLOSE_BLOCK = 58;
TrumplangParser.AMPERSAND = 59;
TrumplangParser.DEAL_DECLARE = 60;
TrumplangParser.VAR_DECLARE = 61;
TrumplangParser.VARIABLE = 62;
TrumplangParser.IDENTIFIER = 63;
TrumplangParser.STRING = 64;
TrumplangParser.NUMBER = 65;
TrumplangParser.BOOLEAN = 66;
TrumplangParser.TRUE = 67;
TrumplangParser.FALSE = 68;
TrumplangParser.COMMENT = 69;
TrumplangParser.FILEPATH = 70;
TrumplangParser.WS = 71;

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
TrumplangParser.RULE_arrayDeclaration = 19;
TrumplangParser.RULE_arrayElements = 20;
TrumplangParser.RULE_assignmentStatement = 21;
TrumplangParser.RULE_printStatement = 22;
TrumplangParser.RULE_inputStatement = 23;
TrumplangParser.RULE_incrementStatement = 24;
TrumplangParser.RULE_decrementStatement = 25;
TrumplangParser.RULE_condition = 26;
TrumplangParser.RULE_comparison = 27;
TrumplangParser.RULE_expression = 28;
TrumplangParser.RULE_term = 29;
TrumplangParser.RULE_factor = 30;
TrumplangParser.RULE_arrayAccess = 31;
TrumplangParser.RULE_dealField = 32;
TrumplangParser.RULE_dealDeclaration = 33;
TrumplangParser.RULE_dealAccess = 34;
TrumplangParser.RULE_assertStatement = 35;
TrumplangParser.RULE_importStatement = 36;
TrumplangParser.RULE_selectiveImport = 37;


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

ProgramContext.prototype.PROG_START = function() {
    return this.getToken(TrumplangParser.PROG_START, 0);
};

ProgramContext.prototype.PROG_END = function() {
    return this.getToken(TrumplangParser.PROG_END, 0);
};

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
        this.state = 76;
        this.match(TrumplangParser.PROG_START);
        this.state = 78; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 77;
            this.statement();
            this.state = 80; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TrumplangParser.T__0) | (1 << TrumplangParser.T__5) | (1 << TrumplangParser.IF_DECL) | (1 << TrumplangParser.ARRAY_DECL) | (1 << TrumplangParser.FUNCTION_DECL) | (1 << TrumplangParser.VARIABLE_DECL) | (1 << TrumplangParser.CONSTANT_DECL) | (1 << TrumplangParser.RETURN) | (1 << TrumplangParser.FUNC_CALL) | (1 << TrumplangParser.BREAK) | (1 << TrumplangParser.WHILE_LOOP_DECL) | (1 << TrumplangParser.FOR_LOOP_WITH) | (1 << TrumplangParser.FOR_EACH_LOOP_DECL) | (1 << TrumplangParser.PRINT))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (TrumplangParser.INPUT - 32)) | (1 << (TrumplangParser.IMPORT - 32)) | (1 << (TrumplangParser.ASSERT_CALL - 32)) | (1 << (TrumplangParser.OPEN_BLOCK - 32)) | (1 << (TrumplangParser.VARIABLE - 32)))) !== 0) || _la===TrumplangParser.COMMENT);
        this.state = 82;
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

StatementContext.prototype.blockStatement = function() {
    return this.getTypedRuleContext(BlockStatementContext,0);
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
        this.state = 105;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 84;
            this.importStatement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 85;
            this.blockStatement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 86;
            this.selectiveImport();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 87;
            this.variableDeclaration();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 88;
            this.constantDeclaration();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 89;
            this.functionDeclaration();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 90;
            this.functionCall();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 91;
            this.ifStatement();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 92;
            this.whileLoop();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 93;
            this.forLoop();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 94;
            this.forEachLoop();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 95;
            this.arrayDeclaration();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 96;
            this.assignmentStatement();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 97;
            this.incrementStatement();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 98;
            this.decrementStatement();
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 99;
            this.printStatement();
            break;

        case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 100;
            this.inputStatement();
            break;

        case 18:
            this.enterOuterAlt(localctx, 18);
            this.state = 101;
            this.returnStatement();
            break;

        case 19:
            this.enterOuterAlt(localctx, 19);
            this.state = 102;
            this.commentStatement();
            break;

        case 20:
            this.enterOuterAlt(localctx, 20);
            this.state = 103;
            this.loopBreak();
            break;

        case 21:
            this.enterOuterAlt(localctx, 21);
            this.state = 104;
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
        this.state = 107;
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
    this.varName = null; // Token
    return this;
}

VariableDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclarationContext.prototype.constructor = VariableDeclarationContext;

VariableDeclarationContext.prototype.VARIABLE_DECL = function() {
    return this.getToken(TrumplangParser.VARIABLE_DECL, 0);
};

VariableDeclarationContext.prototype.dataType = function() {
    return this.getTypedRuleContext(DataTypeContext,0);
};

VariableDeclarationContext.prototype.ASSIGNMENT = function() {
    return this.getToken(TrumplangParser.ASSIGNMENT, 0);
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
        this.state = 109;
        this.match(TrumplangParser.VARIABLE_DECL);
        this.state = 110;
        this.dataType();
        this.state = 111;
        localctx.varName = this.match(TrumplangParser.VARIABLE);
        this.state = 112;
        this.match(TrumplangParser.ASSIGNMENT);
        this.state = 115;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 113;
            this.expression(0);
            break;

        case 2:
            this.state = 114;
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
    this.varName = null; // Token
    return this;
}

ConstantDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConstantDeclarationContext.prototype.constructor = ConstantDeclarationContext;

ConstantDeclarationContext.prototype.CONSTANT_DECL = function() {
    return this.getToken(TrumplangParser.CONSTANT_DECL, 0);
};

ConstantDeclarationContext.prototype.dataType = function() {
    return this.getTypedRuleContext(DataTypeContext,0);
};

ConstantDeclarationContext.prototype.ASSIGNMENT = function() {
    return this.getToken(TrumplangParser.ASSIGNMENT, 0);
};

ConstantDeclarationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ConstantDeclarationContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
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
        this.state = 117;
        this.match(TrumplangParser.CONSTANT_DECL);
        this.state = 118;
        this.dataType();
        this.state = 119;
        localctx.varName = this.match(TrumplangParser.VARIABLE);
        this.state = 120;
        this.match(TrumplangParser.ASSIGNMENT);
        this.state = 121;
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

DataTypeContext.prototype.INTEGER_TYPE = function() {
    return this.getToken(TrumplangParser.INTEGER_TYPE, 0);
};

DataTypeContext.prototype.FLOAT_TYPE = function() {
    return this.getToken(TrumplangParser.FLOAT_TYPE, 0);
};

DataTypeContext.prototype.BOOLEAN_TYPE = function() {
    return this.getToken(TrumplangParser.BOOLEAN_TYPE, 0);
};

DataTypeContext.prototype.STRING_TYPE = function() {
    return this.getToken(TrumplangParser.STRING_TYPE, 0);
};

DataTypeContext.prototype.ARRAY_TYPE = function() {
    return this.getToken(TrumplangParser.ARRAY_TYPE, 0);
};

DataTypeContext.prototype.STRUCTUR_TYPE = function() {
    return this.getToken(TrumplangParser.STRUCTUR_TYPE, 0);
};

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
        this.state = 123;
        _la = this._input.LA(1);
        if(!(((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (TrumplangParser.INTEGER_TYPE - 51)) | (1 << (TrumplangParser.FLOAT_TYPE - 51)) | (1 << (TrumplangParser.BOOLEAN_TYPE - 51)) | (1 << (TrumplangParser.STRING_TYPE - 51)) | (1 << (TrumplangParser.ARRAY_TYPE - 51)) | (1 << (TrumplangParser.STRUCTUR_TYPE - 51)))) !== 0))) {
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
    this.funcName = null; // Token
    return this;
}

FunctionDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionDeclarationContext.prototype.constructor = FunctionDeclarationContext;

FunctionDeclarationContext.prototype.FUNCTION_DECL = function() {
    return this.getToken(TrumplangParser.FUNCTION_DECL, 0);
};

FunctionDeclarationContext.prototype.PARAMS_ARGS_START = function() {
    return this.getToken(TrumplangParser.PARAMS_ARGS_START, 0);
};

FunctionDeclarationContext.prototype.blockStatement = function() {
    return this.getTypedRuleContext(BlockStatementContext,0);
};

FunctionDeclarationContext.prototype.IDENTIFIER = function() {
    return this.getToken(TrumplangParser.IDENTIFIER, 0);
};

FunctionDeclarationContext.prototype.parameterList = function() {
    return this.getTypedRuleContext(ParameterListContext,0);
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
        this.state = 125;
        this.match(TrumplangParser.FUNCTION_DECL);
        this.state = 126;
        localctx.funcName = this.match(TrumplangParser.IDENTIFIER);
        this.state = 127;
        this.match(TrumplangParser.PARAMS_ARGS_START);
        this.state = 129;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (TrumplangParser.INTEGER_TYPE - 51)) | (1 << (TrumplangParser.FLOAT_TYPE - 51)) | (1 << (TrumplangParser.BOOLEAN_TYPE - 51)) | (1 << (TrumplangParser.STRING_TYPE - 51)) | (1 << (TrumplangParser.ARRAY_TYPE - 51)) | (1 << (TrumplangParser.STRUCTUR_TYPE - 51)))) !== 0)) {
            this.state = 128;
            this.parameterList();
        }

        this.state = 131;
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
};


function BlockStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_blockStatement;
    return this;
}

BlockStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockStatementContext.prototype.constructor = BlockStatementContext;

BlockStatementContext.prototype.OPEN_BLOCK = function() {
    return this.getToken(TrumplangParser.OPEN_BLOCK, 0);
};

BlockStatementContext.prototype.CLOSE_BLOCK = function() {
    return this.getToken(TrumplangParser.CLOSE_BLOCK, 0);
};

BlockStatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

BlockStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterBlockStatement(this);
	}
};

BlockStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitBlockStatement(this);
	}
};

BlockStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitBlockStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.BlockStatementContext = BlockStatementContext;

TrumplangParser.prototype.blockStatement = function() {

    var localctx = new BlockStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, TrumplangParser.RULE_blockStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 133;
        this.match(TrumplangParser.OPEN_BLOCK);
        this.state = 137;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TrumplangParser.T__0) | (1 << TrumplangParser.T__5) | (1 << TrumplangParser.IF_DECL) | (1 << TrumplangParser.ARRAY_DECL) | (1 << TrumplangParser.FUNCTION_DECL) | (1 << TrumplangParser.VARIABLE_DECL) | (1 << TrumplangParser.CONSTANT_DECL) | (1 << TrumplangParser.RETURN) | (1 << TrumplangParser.FUNC_CALL) | (1 << TrumplangParser.BREAK) | (1 << TrumplangParser.WHILE_LOOP_DECL) | (1 << TrumplangParser.FOR_LOOP_WITH) | (1 << TrumplangParser.FOR_EACH_LOOP_DECL) | (1 << TrumplangParser.PRINT))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (TrumplangParser.INPUT - 32)) | (1 << (TrumplangParser.IMPORT - 32)) | (1 << (TrumplangParser.ASSERT_CALL - 32)) | (1 << (TrumplangParser.OPEN_BLOCK - 32)) | (1 << (TrumplangParser.VARIABLE - 32)))) !== 0) || _la===TrumplangParser.COMMENT) {
            this.state = 134;
            this.statement();
            this.state = 139;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 140;
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


ParameterListContext.prototype.PARAMS_ARGS_CHAIN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TrumplangParser.PARAMS_ARGS_CHAIN);
    } else {
        return this.getToken(TrumplangParser.PARAMS_ARGS_CHAIN, i);
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
    this.enterRule(localctx, 16, TrumplangParser.RULE_parameterList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.dataType();
        this.state = 143;
        this.match(TrumplangParser.VARIABLE);
        this.state = 150;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TrumplangParser.PARAMS_ARGS_CHAIN) {
            this.state = 144;
            this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
            this.state = 145;
            this.dataType();
            this.state = 146;
            this.match(TrumplangParser.VARIABLE);
            this.state = 152;
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

ReturnStatementContext.prototype.RETURN = function() {
    return this.getToken(TrumplangParser.RETURN, 0);
};

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
    this.enterRule(localctx, 18, TrumplangParser.RULE_returnStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.match(TrumplangParser.RETURN);
        this.state = 154;
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
    this.funcName = null; // Token
    return this;
}

FunctionCallContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionCallContext.prototype.constructor = FunctionCallContext;

FunctionCallContext.prototype.FUNC_CALL = function() {
    return this.getToken(TrumplangParser.FUNC_CALL, 0);
};

FunctionCallContext.prototype.PARAMS_ARGS_START = function() {
    return this.getToken(TrumplangParser.PARAMS_ARGS_START, 0);
};

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
    this.enterRule(localctx, 20, TrumplangParser.RULE_functionCall);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 156;
        this.match(TrumplangParser.FUNC_CALL);
        this.state = 157;
        localctx.funcName = this.match(TrumplangParser.IDENTIFIER);
        this.state = 158;
        this.match(TrumplangParser.PARAMS_ARGS_START);
        this.state = 160;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        if(la_===1) {
            this.state = 159;
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

ArgumentListContext.prototype.PARAMS_ARGS_CHAIN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TrumplangParser.PARAMS_ARGS_CHAIN);
    } else {
        return this.getToken(TrumplangParser.PARAMS_ARGS_CHAIN, i);
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
    this.enterRule(localctx, 22, TrumplangParser.RULE_argumentList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.expression(0);
        this.state = 167;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 163;
                this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
                this.state = 164;
                this.expression(0); 
            }
            this.state = 169;
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

IfStatementContext.prototype.IF_DECL = function() {
    return this.getToken(TrumplangParser.IF_DECL, 0);
};

IfStatementContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

IfStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
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
    this.enterRule(localctx, 24, TrumplangParser.RULE_ifStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this.match(TrumplangParser.IF_DECL);
        this.state = 171;
        this.condition(0);
        this.state = 172;
        this.statement();
        this.state = 176;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 173;
                this.elseIfStatement(); 
            }
            this.state = 178;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

        this.state = 180;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        if(la_===1) {
            this.state = 179;
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

ElseIfStatementContext.prototype.ELSE_IF_DECL = function() {
    return this.getToken(TrumplangParser.ELSE_IF_DECL, 0);
};

ElseIfStatementContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

ElseIfStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
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
    this.enterRule(localctx, 26, TrumplangParser.RULE_elseIfStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.match(TrumplangParser.ELSE_IF_DECL);
        this.state = 183;
        this.condition(0);
        this.state = 184;
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

ElseStatementContext.prototype.ELSE_DECL = function() {
    return this.getToken(TrumplangParser.ELSE_DECL, 0);
};

ElseStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
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
    this.enterRule(localctx, 28, TrumplangParser.RULE_elseStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.match(TrumplangParser.ELSE_DECL);
        this.state = 187;
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

WhileLoopContext.prototype.WHILE_LOOP_DECL = function() {
    return this.getToken(TrumplangParser.WHILE_LOOP_DECL, 0);
};

WhileLoopContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

WhileLoopContext.prototype.blockStatement = function() {
    return this.getTypedRuleContext(BlockStatementContext,0);
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
    this.enterRule(localctx, 30, TrumplangParser.RULE_whileLoop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 189;
        this.match(TrumplangParser.WHILE_LOOP_DECL);
        this.state = 190;
        this.condition(0);
        this.state = 191;
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
    this.varName = null; // Token
    return this;
}

ForLoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForLoopContext.prototype.constructor = ForLoopContext;

ForLoopContext.prototype.FOR_LOOP_WITH = function() {
    return this.getToken(TrumplangParser.FOR_LOOP_WITH, 0);
};

ForLoopContext.prototype.FOR_LOOP_FROM = function() {
    return this.getToken(TrumplangParser.FOR_LOOP_FROM, 0);
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

ForLoopContext.prototype.FOR_LOOP_TO = function() {
    return this.getToken(TrumplangParser.FOR_LOOP_TO, 0);
};

ForLoopContext.prototype.blockStatement = function() {
    return this.getTypedRuleContext(BlockStatementContext,0);
};

ForLoopContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
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
    this.enterRule(localctx, 32, TrumplangParser.RULE_forLoop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.match(TrumplangParser.FOR_LOOP_WITH);
        this.state = 194;
        localctx.varName = this.match(TrumplangParser.VARIABLE);
        this.state = 195;
        this.match(TrumplangParser.FOR_LOOP_FROM);
        this.state = 196;
        this.expression(0);
        this.state = 197;
        this.match(TrumplangParser.FOR_LOOP_TO);
        this.state = 198;
        this.expression(0);
        this.state = 199;
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
    this.varName = null; // Token
    this.listName = null; // Token
    return this;
}

ForEachLoopContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForEachLoopContext.prototype.constructor = ForEachLoopContext;

ForEachLoopContext.prototype.FOR_EACH_LOOP_DECL = function() {
    return this.getToken(TrumplangParser.FOR_EACH_LOOP_DECL, 0);
};

ForEachLoopContext.prototype.FOR_EACH_FROM = function() {
    return this.getToken(TrumplangParser.FOR_EACH_FROM, 0);
};

ForEachLoopContext.prototype.blockStatement = function() {
    return this.getTypedRuleContext(BlockStatementContext,0);
};

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
    this.enterRule(localctx, 34, TrumplangParser.RULE_forEachLoop);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        this.match(TrumplangParser.FOR_EACH_LOOP_DECL);
        this.state = 202;
        localctx.varName = this.match(TrumplangParser.VARIABLE);
        this.state = 203;
        this.match(TrumplangParser.FOR_EACH_FROM);
        this.state = 204;
        localctx.listName = this.match(TrumplangParser.VARIABLE);
        this.state = 205;
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

LoopBreakContext.prototype.BREAK = function() {
    return this.getToken(TrumplangParser.BREAK, 0);
};

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
    this.enterRule(localctx, 36, TrumplangParser.RULE_loopBreak);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
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

ArrayDeclarationContext.prototype.ARRAY_DECL = function() {
    return this.getToken(TrumplangParser.ARRAY_DECL, 0);
};

ArrayDeclarationContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
};

ArrayDeclarationContext.prototype.ARRAY_ELEMENTS_DECL = function() {
    return this.getToken(TrumplangParser.ARRAY_ELEMENTS_DECL, 0);
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
    this.enterRule(localctx, 38, TrumplangParser.RULE_arrayDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 209;
        this.match(TrumplangParser.ARRAY_DECL);
        this.state = 210;
        this.match(TrumplangParser.VARIABLE);
        this.state = 211;
        this.match(TrumplangParser.ARRAY_ELEMENTS_DECL);
        this.state = 213;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        if(la_===1) {
            this.state = 212;
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

ArrayElementsContext.prototype.ARRAY_CHAIN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TrumplangParser.ARRAY_CHAIN);
    } else {
        return this.getToken(TrumplangParser.ARRAY_CHAIN, i);
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
    this.enterRule(localctx, 40, TrumplangParser.RULE_arrayElements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 215;
        this.expression(0);
        this.state = 220;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TrumplangParser.ARRAY_CHAIN) {
            this.state = 216;
            this.match(TrumplangParser.ARRAY_CHAIN);
            this.state = 217;
            this.expression(0);
            this.state = 222;
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

AssignmentStatementContext.prototype.ASSIGNMENT = function() {
    return this.getToken(TrumplangParser.ASSIGNMENT, 0);
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
    this.enterRule(localctx, 42, TrumplangParser.RULE_assignmentStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 223;
        this.match(TrumplangParser.VARIABLE);
        this.state = 224;
        this.match(TrumplangParser.ASSIGNMENT);
        this.state = 225;
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

PrintStatementContext.prototype.PRINT = function() {
    return this.getToken(TrumplangParser.PRINT, 0);
};

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
    this.enterRule(localctx, 44, TrumplangParser.RULE_printStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        this.match(TrumplangParser.PRINT);
        this.state = 228;
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

InputStatementContext.prototype.INPUT = function() {
    return this.getToken(TrumplangParser.INPUT, 0);
};

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
    this.enterRule(localctx, 46, TrumplangParser.RULE_inputStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
        this.match(TrumplangParser.INPUT);
        this.state = 231;
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
    this.varName = null; // Token
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
    this.enterRule(localctx, 48, TrumplangParser.RULE_incrementStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 233;
        this.match(TrumplangParser.T__0);
        this.state = 234;
        localctx.varName = this.match(TrumplangParser.VARIABLE);
        this.state = 235;
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
    this.varName = null; // Token
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
    this.enterRule(localctx, 50, TrumplangParser.RULE_decrementStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        this.match(TrumplangParser.T__0);
        this.state = 238;
        localctx.varName = this.match(TrumplangParser.VARIABLE);
        this.state = 239;
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

ConditionContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
};

ConditionContext.prototype.BOOLEAN = function() {
    return this.getToken(TrumplangParser.BOOLEAN, 0);
};

ConditionContext.prototype.NOT = function() {
    return this.getToken(TrumplangParser.NOT, 0);
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

ConditionContext.prototype.AND = function() {
    return this.getToken(TrumplangParser.AND, 0);
};

ConditionContext.prototype.OR = function() {
    return this.getToken(TrumplangParser.OR, 0);
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
    var _startState = 52;
    this.enterRecursionRule(localctx, 52, TrumplangParser.RULE_condition, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 250;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.state = 242;
            this.expression(0);
            this.state = 243;
            this.comparison();
            this.state = 244;
            this.expression(0);
            break;

        case 2:
            this.state = 246;
            this.match(TrumplangParser.VARIABLE);
            break;

        case 3:
            this.state = 247;
            this.match(TrumplangParser.BOOLEAN);
            break;

        case 4:
            this.state = 248;
            this.match(TrumplangParser.NOT);
            this.state = 249;
            this.condition(3);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 260;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 258;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ConditionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_condition);
                    this.state = 252;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 253;
                    this.match(TrumplangParser.AND);
                    this.state = 254;
                    this.condition(3);
                    break;

                case 2:
                    localctx = new ConditionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_condition);
                    this.state = 255;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 256;
                    this.match(TrumplangParser.OR);
                    this.state = 257;
                    this.condition(2);
                    break;

                } 
            }
            this.state = 262;
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

ComparisonContext.prototype.EQUALS = function() {
    return this.getToken(TrumplangParser.EQUALS, 0);
};

ComparisonContext.prototype.NOT_EQUALS = function() {
    return this.getToken(TrumplangParser.NOT_EQUALS, 0);
};

ComparisonContext.prototype.GREATER_THAN = function() {
    return this.getToken(TrumplangParser.GREATER_THAN, 0);
};

ComparisonContext.prototype.LESS_THAN = function() {
    return this.getToken(TrumplangParser.LESS_THAN, 0);
};

ComparisonContext.prototype.GREATER_THAN_OR_EQUALS = function() {
    return this.getToken(TrumplangParser.GREATER_THAN_OR_EQUALS, 0);
};

ComparisonContext.prototype.LESS_THAN_OR_EQUALS = function() {
    return this.getToken(TrumplangParser.LESS_THAN_OR_EQUALS, 0);
};

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
    this.enterRule(localctx, 54, TrumplangParser.RULE_comparison);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 263;
        _la = this._input.LA(1);
        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (TrumplangParser.EQUALS - 36)) | (1 << (TrumplangParser.NOT_EQUALS - 36)) | (1 << (TrumplangParser.GREATER_THAN - 36)) | (1 << (TrumplangParser.GREATER_THAN_OR_EQUALS - 36)) | (1 << (TrumplangParser.LESS_THAN - 36)) | (1 << (TrumplangParser.LESS_THAN_OR_EQUALS - 36)))) !== 0))) {
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

ExpressionContext.prototype.PLUS = function() {
    return this.getToken(TrumplangParser.PLUS, 0);
};

ExpressionContext.prototype.STRING_CONCAT = function() {
    return this.getToken(TrumplangParser.STRING_CONCAT, 0);
};

ExpressionContext.prototype.MINUS = function() {
    return this.getToken(TrumplangParser.MINUS, 0);
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
    var _startState = 56;
    this.enterRecursionRule(localctx, 56, TrumplangParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 266;
        this.term(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 279;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 277;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_expression);
                    this.state = 268;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 269;
                    this.match(TrumplangParser.PLUS);
                    this.state = 270;
                    this.term(0);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_expression);
                    this.state = 271;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 272;
                    this.match(TrumplangParser.STRING_CONCAT);
                    this.state = 273;
                    this.term(0);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_expression);
                    this.state = 274;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 275;
                    this.match(TrumplangParser.MINUS);
                    this.state = 276;
                    this.term(0);
                    break;

                } 
            }
            this.state = 281;
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

TermContext.prototype.MULTIPLY = function() {
    return this.getToken(TrumplangParser.MULTIPLY, 0);
};

TermContext.prototype.DIVIDE = function() {
    return this.getToken(TrumplangParser.DIVIDE, 0);
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
    var _startState = 58;
    this.enterRecursionRule(localctx, 58, TrumplangParser.RULE_term, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 283;
        this.factor();
        this._ctx.stop = this._input.LT(-1);
        this.state = 293;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 291;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new TermContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
                    this.state = 285;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 286;
                    this.match(TrumplangParser.MULTIPLY);
                    this.state = 287;
                    this.factor();
                    break;

                case 2:
                    localctx = new TermContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
                    this.state = 288;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 289;
                    this.match(TrumplangParser.DIVIDE);
                    this.state = 290;
                    this.factor();
                    break;

                } 
            }
            this.state = 295;
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
    this.enterRule(localctx, 60, TrumplangParser.RULE_factor);
    try {
        this.state = 307;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 296;
            this.match(TrumplangParser.T__3);
            this.state = 297;
            this.expression(0);
            this.state = 298;
            this.match(TrumplangParser.T__4);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 300;
            this.match(TrumplangParser.VARIABLE);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 301;
            this.match(TrumplangParser.STRING);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 302;
            this.match(TrumplangParser.NUMBER);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 303;
            this.match(TrumplangParser.BOOLEAN);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 304;
            this.functionCall();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 305;
            this.arrayAccess();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 306;
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

ArrayAccessContext.prototype.ARRAY_ACCESS = function() {
    return this.getToken(TrumplangParser.ARRAY_ACCESS, 0);
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
    this.enterRule(localctx, 62, TrumplangParser.RULE_arrayAccess);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
        this.match(TrumplangParser.VARIABLE);
        this.state = 310;
        this.match(TrumplangParser.ARRAY_ACCESS);
        this.state = 311;
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

DealFieldContext.prototype.ASSIGNMENT = function() {
    return this.getToken(TrumplangParser.ASSIGNMENT, 0);
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
    this.enterRule(localctx, 64, TrumplangParser.RULE_dealField);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 313;
        this.dataType();
        this.state = 314;
        this.match(TrumplangParser.VARIABLE);
        this.state = 315;
        this.match(TrumplangParser.ASSIGNMENT);
        this.state = 316;
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

DealDeclarationContext.prototype.DEAL_DECLARE = function() {
    return this.getToken(TrumplangParser.DEAL_DECLARE, 0);
};

DealDeclarationContext.prototype.AMPERSAND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TrumplangParser.AMPERSAND);
    } else {
        return this.getToken(TrumplangParser.AMPERSAND, i);
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
    this.enterRule(localctx, 66, TrumplangParser.RULE_dealDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 318;
        this.match(TrumplangParser.T__3);
        this.state = 319;
        this.dealField();
        this.state = 324;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TrumplangParser.AMPERSAND) {
            this.state = 320;
            this.match(TrumplangParser.AMPERSAND);
            this.state = 321;
            this.dealField();
            this.state = 326;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 327;
        this.match(TrumplangParser.T__4);
        this.state = 328;
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


DealAccessContext.prototype.DEAL_ACCESS_KEYWORD = function() {
    return this.getToken(TrumplangParser.DEAL_ACCESS_KEYWORD, 0);
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
    this.enterRule(localctx, 68, TrumplangParser.RULE_dealAccess);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 330;
        this.match(TrumplangParser.VARIABLE);
        this.state = 331;
        this.match(TrumplangParser.DEAL_ACCESS_KEYWORD);
        this.state = 332;
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

AssertStatementContext.prototype.ASSERT_CALL = function() {
    return this.getToken(TrumplangParser.ASSERT_CALL, 0);
};

AssertStatementContext.prototype.EQUALS = function() {
    return this.getToken(TrumplangParser.EQUALS, 0);
};

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
    this.enterRule(localctx, 70, TrumplangParser.RULE_assertStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 334;
        this.match(TrumplangParser.ASSERT_CALL);
        this.state = 337;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.state = 335;
            this.expression(0);
            break;

        case 2:
            this.state = 336;
            this.condition(0);
            break;

        }
        this.state = 339;
        this.match(TrumplangParser.EQUALS);
        this.state = 340;
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
    this.filePath = null; // Token
    return this;
}

ImportStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImportStatementContext.prototype.constructor = ImportStatementContext;

ImportStatementContext.prototype.IMPORT = function() {
    return this.getToken(TrumplangParser.IMPORT, 0);
};

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
    this.enterRule(localctx, 72, TrumplangParser.RULE_importStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 342;
        this.match(TrumplangParser.IMPORT);
        this.state = 343;
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


SelectiveImportContext.prototype.FOR_LOOP_FROM = function() {
    return this.getToken(TrumplangParser.FOR_LOOP_FROM, 0);
};

SelectiveImportContext.prototype.FILEPATH = function() {
    return this.getToken(TrumplangParser.FILEPATH, 0);
};

SelectiveImportContext.prototype.PARAMS_ARGS_CHAIN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(TrumplangParser.PARAMS_ARGS_CHAIN);
    } else {
        return this.getToken(TrumplangParser.PARAMS_ARGS_CHAIN, i);
    }
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
    this.enterRule(localctx, 74, TrumplangParser.RULE_selectiveImport);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 345;
        this.match(TrumplangParser.T__5);
        this.state = 346;
        this.match(TrumplangParser.IDENTIFIER);
        this.state = 351;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TrumplangParser.PARAMS_ARGS_CHAIN) {
            this.state = 347;
            this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
            this.state = 348;
            this.match(TrumplangParser.IDENTIFIER);
            this.state = 353;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 354;
        this.match(TrumplangParser.FOR_LOOP_FROM);
        this.state = 355;
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
	case 26:
			return this.condition_sempred(localctx, predIndex);
	case 28:
			return this.expression_sempred(localctx, predIndex);
	case 29:
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

// Generated from Trumplang.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var TrumplangListener = require('./TrumplangListener').TrumplangListener;
var TrumplangVisitor = require('./TrumplangVisitor').TrumplangVisitor;

var grammarFileName = "Trumplang.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003T\u01a4\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0003\u0002",
    "\u0003\u0002\u0006\u0002W\n\u0002\r\u0002\u000e\u0002X\u0003\u0002\u0003",
    "\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003r\n\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0005\u0005|\n\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0005\b\u008a\n\b\u0003\b\u0003\b\u0003\t",
    "\u0003\t\u0007\t\u0090\n\t\f\t\u000e\t\u0093\u000b\t\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u009d\n\n\f",
    "\n\u000e\n\u00a0\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0005\f\u00a9\n\f\u0003\r\u0003\r\u0003\r\u0007",
    "\r\u00ae\n\r\f\r\u000e\r\u00b1\u000b\r\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0007\u000e\u00b7\n\u000e\f\u000e\u000e\u000e\u00ba",
    "\u000b\u000e\u0003\u000e\u0005\u000e\u00bd\n\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005",
    "\u0015\u00de\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016",
    "\u00e3\n\u0016\f\u0016\u000e\u0016\u00e6\u000b\u0016\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0005\u0017\u00f7\n\u0017\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0005\u001c\u0110\n\u001c\u0003",
    "\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0007",
    "\u001c\u0118\n\u001c\f\u001c\u000e\u001c\u011b\u000b\u001c\u0003\u001d",
    "\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0007\u001e\u012b\n\u001e\f\u001e\u000e\u001e\u012e\u000b",
    "\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0007\u001f\u013c\n\u001f\f\u001f\u000e\u001f\u013f\u000b\u001f",
    "\u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0007",
    " \u014a\n \f \u000e \u014d\u000b \u0003!\u0003!\u0003!\u0003!\u0003",
    "!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0003!\u0007!\u015b\n!\f",
    "!\u000e!\u015e\u000b!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005",
    "\"\u0165\n\"\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003#\u0003",
    "#\u0003#\u0003#\u0003#\u0005#\u0172\n#\u0003$\u0003$\u0003$\u0003$\u0003",
    "%\u0003%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003&\u0003&\u0007&\u0181",
    "\n&\f&\u000e&\u0184\u000b&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0003",
    "\'\u0003\'\u0003(\u0003(\u0003(\u0005(\u0190\n(\u0003(\u0003(\u0003",
    "(\u0003)\u0003)\u0003)\u0003*\u0003*\u0003*\u0003*\u0007*\u019c\n*\f",
    "*\u000e*\u019f\u000b*\u0003*\u0003*\u0003*\u0003*\u0002\u00076:<>@+",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"$&(*,.02468:<>@BDFHJLNPR\u0002\u0004\u0003\u0002@E\u0003\u0002",
    "&+\u0002\u01b8\u0002T\u0003\u0002\u0002\u0002\u0004q\u0003\u0002\u0002",
    "\u0002\u0006s\u0003\u0002\u0002\u0002\bu\u0003\u0002\u0002\u0002\n}",
    "\u0003\u0002\u0002\u0002\f\u0083\u0003\u0002\u0002\u0002\u000e\u0085",
    "\u0003\u0002\u0002\u0002\u0010\u008d\u0003\u0002\u0002\u0002\u0012\u0096",
    "\u0003\u0002\u0002\u0002\u0014\u00a1\u0003\u0002\u0002\u0002\u0016\u00a4",
    "\u0003\u0002\u0002\u0002\u0018\u00aa\u0003\u0002\u0002\u0002\u001a\u00b2",
    "\u0003\u0002\u0002\u0002\u001c\u00be\u0003\u0002\u0002\u0002\u001e\u00c2",
    "\u0003\u0002\u0002\u0002 \u00c5\u0003\u0002\u0002\u0002\"\u00c9\u0003",
    "\u0002\u0002\u0002$\u00d1\u0003\u0002\u0002\u0002&\u00d7\u0003\u0002",
    "\u0002\u0002(\u00d9\u0003\u0002\u0002\u0002*\u00df\u0003\u0002\u0002",
    "\u0002,\u00f6\u0003\u0002\u0002\u0002.\u00f8\u0003\u0002\u0002\u0002",
    "0\u00fb\u0003\u0002\u0002\u00022\u00fe\u0003\u0002\u0002\u00024\u0102",
    "\u0003\u0002\u0002\u00026\u010f\u0003\u0002\u0002\u00028\u011c\u0003",
    "\u0002\u0002\u0002:\u011e\u0003\u0002\u0002\u0002<\u012f\u0003\u0002",
    "\u0002\u0002>\u0140\u0003\u0002\u0002\u0002@\u014e\u0003\u0002\u0002",
    "\u0002B\u0164\u0003\u0002\u0002\u0002D\u0171\u0003\u0002\u0002\u0002",
    "F\u0173\u0003\u0002\u0002\u0002H\u0177\u0003\u0002\u0002\u0002J\u017c",
    "\u0003\u0002\u0002\u0002L\u0188\u0003\u0002\u0002\u0002N\u018c\u0003",
    "\u0002\u0002\u0002P\u0194\u0003\u0002\u0002\u0002R\u0197\u0003\u0002",
    "\u0002\u0002TV\u0007\u0010\u0002\u0002UW\u0005\u0004\u0003\u0002VU\u0003",
    "\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XV\u0003\u0002\u0002\u0002",
    "XY\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z[\u0007\u0011\u0002",
    "\u0002[\u0003\u0003\u0002\u0002\u0002\\r\u0005P)\u0002]r\u0005\u0010",
    "\t\u0002^r\u0005R*\u0002_r\u0005\b\u0005\u0002`r\u0005\n\u0006\u0002",
    "ar\u0005\u000e\b\u0002br\u0005\u0016\f\u0002cr\u0005\u001a\u000e\u0002",
    "dr\u0005 \u0011\u0002er\u0005\"\u0012\u0002fr\u0005$\u0013\u0002gr\u0005",
    "(\u0015\u0002hr\u0005,\u0017\u0002ir\u00052\u001a\u0002jr\u00054\u001b",
    "\u0002kr\u0005.\u0018\u0002lr\u00050\u0019\u0002mr\u0005\u0014\u000b",
    "\u0002nr\u0005\u0006\u0004\u0002or\u0005&\u0014\u0002pr\u0005N(\u0002",
    "q\\\u0003\u0002\u0002\u0002q]\u0003\u0002\u0002\u0002q^\u0003\u0002",
    "\u0002\u0002q_\u0003\u0002\u0002\u0002q`\u0003\u0002\u0002\u0002qa\u0003",
    "\u0002\u0002\u0002qb\u0003\u0002\u0002\u0002qc\u0003\u0002\u0002\u0002",
    "qd\u0003\u0002\u0002\u0002qe\u0003\u0002\u0002\u0002qf\u0003\u0002\u0002",
    "\u0002qg\u0003\u0002\u0002\u0002qh\u0003\u0002\u0002\u0002qi\u0003\u0002",
    "\u0002\u0002qj\u0003\u0002\u0002\u0002qk\u0003\u0002\u0002\u0002ql\u0003",
    "\u0002\u0002\u0002qm\u0003\u0002\u0002\u0002qn\u0003\u0002\u0002\u0002",
    "qo\u0003\u0002\u0002\u0002qp\u0003\u0002\u0002\u0002r\u0005\u0003\u0002",
    "\u0002\u0002st\u0007R\u0002\u0002t\u0007\u0003\u0002\u0002\u0002uv\u0007",
    "\u0013\u0002\u0002vw\u0005\f\u0007\u0002wx\u0007K\u0002\u0002x{\u0007",
    "1\u0002\u0002y|\u0005:\u001e\u0002z|\u0005J&\u0002{y\u0003\u0002\u0002",
    "\u0002{z\u0003\u0002\u0002\u0002|\t\u0003\u0002\u0002\u0002}~\u0007",
    "\u0014\u0002\u0002~\u007f\u0005\f\u0007\u0002\u007f\u0080\u0007K\u0002",
    "\u0002\u0080\u0081\u00071\u0002\u0002\u0081\u0082\u0005:\u001e\u0002",
    "\u0082\u000b\u0003\u0002\u0002\u0002\u0083\u0084\t\u0002\u0002\u0002",
    "\u0084\r\u0003\u0002\u0002\u0002\u0085\u0086\u0007\u0012\u0002\u0002",
    "\u0086\u0087\u0007L\u0002\u0002\u0087\u0089\u0007\u0015\u0002\u0002",
    "\u0088\u008a\u0005\u0012\n\u0002\u0089\u0088\u0003\u0002\u0002\u0002",
    "\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008b\u0003\u0002\u0002\u0002",
    "\u008b\u008c\u0005\u0010\t\u0002\u008c\u000f\u0003\u0002\u0002\u0002",
    "\u008d\u0091\u0007F\u0002\u0002\u008e\u0090\u0005\u0004\u0003\u0002",
    "\u008f\u008e\u0003\u0002\u0002\u0002\u0090\u0093\u0003\u0002\u0002\u0002",
    "\u0091\u008f\u0003\u0002\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002",
    "\u0092\u0094\u0003\u0002\u0002\u0002\u0093\u0091\u0003\u0002\u0002\u0002",
    "\u0094\u0095\u0007G\u0002\u0002\u0095\u0011\u0003\u0002\u0002\u0002",
    "\u0096\u0097\u0005\f\u0007\u0002\u0097\u009e\u0007K\u0002\u0002\u0098",
    "\u0099\u0007\u0016\u0002\u0002\u0099\u009a\u0005\f\u0007\u0002\u009a",
    "\u009b\u0007K\u0002\u0002\u009b\u009d\u0003\u0002\u0002\u0002\u009c",
    "\u0098\u0003\u0002\u0002\u0002\u009d\u00a0\u0003\u0002\u0002\u0002\u009e",
    "\u009c\u0003\u0002\u0002\u0002\u009e\u009f\u0003\u0002\u0002\u0002\u009f",
    "\u0013\u0003\u0002\u0002\u0002\u00a0\u009e\u0003\u0002\u0002\u0002\u00a1",
    "\u00a2\u0007\u0017\u0002\u0002\u00a2\u00a3\u0005:\u001e\u0002\u00a3",
    "\u0015\u0003\u0002\u0002\u0002\u00a4\u00a5\u0007\u0018\u0002\u0002\u00a5",
    "\u00a6\u0007L\u0002\u0002\u00a6\u00a8\u0007\u0015\u0002\u0002\u00a7",
    "\u00a9\u0005\u0018\r\u0002\u00a8\u00a7\u0003\u0002\u0002\u0002\u00a8",
    "\u00a9\u0003\u0002\u0002\u0002\u00a9\u0017\u0003\u0002\u0002\u0002\u00aa",
    "\u00af\u0005:\u001e\u0002\u00ab\u00ac\u0007\u0016\u0002\u0002\u00ac",
    "\u00ae\u0005:\u001e\u0002\u00ad\u00ab\u0003\u0002\u0002\u0002\u00ae",
    "\u00b1\u0003\u0002\u0002\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00af",
    "\u00b0\u0003\u0002\u0002\u0002\u00b0\u0019\u0003\u0002\u0002\u0002\u00b1",
    "\u00af\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007\t\u0002\u0002\u00b3",
    "\u00b4\u00056\u001c\u0002\u00b4\u00b8\u0005\u0004\u0003\u0002\u00b5",
    "\u00b7\u0005\u001c\u000f\u0002\u00b6\u00b5\u0003\u0002\u0002\u0002\u00b7",
    "\u00ba\u0003\u0002\u0002\u0002\u00b8\u00b6\u0003\u0002\u0002\u0002\u00b8",
    "\u00b9\u0003\u0002\u0002\u0002\u00b9\u00bc\u0003\u0002\u0002\u0002\u00ba",
    "\u00b8\u0003\u0002\u0002\u0002\u00bb\u00bd\u0005\u001e\u0010\u0002\u00bc",
    "\u00bb\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002\u00bd",
    "\u001b\u0003\u0002\u0002\u0002\u00be\u00bf\u0007\n\u0002\u0002\u00bf",
    "\u00c0\u00056\u001c\u0002\u00c0\u00c1\u0005\u0004\u0003\u0002\u00c1",
    "\u001d\u0003\u0002\u0002\u0002\u00c2\u00c3\u0007\u000b\u0002\u0002\u00c3",
    "\u00c4\u0005\u0004\u0003\u0002\u00c4\u001f\u0003\u0002\u0002\u0002\u00c5",
    "\u00c6\u0007\u001a\u0002\u0002\u00c6\u00c7\u00056\u001c\u0002\u00c7",
    "\u00c8\u0005\u0010\t\u0002\u00c8!\u0003\u0002\u0002\u0002\u00c9\u00ca",
    "\u0007\u001c\u0002\u0002\u00ca\u00cb\u0007K\u0002\u0002\u00cb\u00cc",
    "\u0007\u001d\u0002\u0002\u00cc\u00cd\u0005:\u001e\u0002\u00cd\u00ce",
    "\u0007\u001e\u0002\u0002\u00ce\u00cf\u0005:\u001e\u0002\u00cf\u00d0",
    "\u0005\u0010\t\u0002\u00d0#\u0003\u0002\u0002\u0002\u00d1\u00d2\u0007",
    "\u001f\u0002\u0002\u00d2\u00d3\u0007K\u0002\u0002\u00d3\u00d4\u0007",
    " \u0002\u0002\u00d4\u00d5\u0007K\u0002\u0002\u00d5\u00d6\u0005\u0010",
    "\t\u0002\u00d6%\u0003\u0002\u0002\u0002\u00d7\u00d8\u0007\u0019\u0002",
    "\u0002\u00d8\'\u0003\u0002\u0002\u0002\u00d9\u00da\u0007\f\u0002\u0002",
    "\u00da\u00db\u0007K\u0002\u0002\u00db\u00dd\u0007\r\u0002\u0002\u00dc",
    "\u00de\u0005*\u0016\u0002\u00dd\u00dc\u0003\u0002\u0002\u0002\u00dd",
    "\u00de\u0003\u0002\u0002\u0002\u00de)\u0003\u0002\u0002\u0002\u00df",
    "\u00e4\u0005:\u001e\u0002\u00e0\u00e1\u0007\u000f\u0002\u0002\u00e1",
    "\u00e3\u0005:\u001e\u0002\u00e2\u00e0\u0003\u0002\u0002\u0002\u00e3",
    "\u00e6\u0003\u0002\u0002\u0002\u00e4\u00e2\u0003\u0002\u0002\u0002\u00e4",
    "\u00e5\u0003\u0002\u0002\u0002\u00e5+\u0003\u0002\u0002\u0002\u00e6",
    "\u00e4\u0003\u0002\u0002\u0002\u00e7\u00e8\u0007K\u0002\u0002\u00e8",
    "\u00e9\u00071\u0002\u0002\u00e9\u00f7\u0005:\u001e\u0002\u00ea\u00eb",
    "\u0007K\u0002\u0002\u00eb\u00ec\u00072\u0002\u0002\u00ec\u00f7\u0005",
    ":\u001e\u0002\u00ed\u00ee\u0007K\u0002\u0002\u00ee\u00ef\u00073\u0002",
    "\u0002\u00ef\u00f7\u0005:\u001e\u0002\u00f0\u00f1\u0007K\u0002\u0002",
    "\u00f1\u00f2\u00074\u0002\u0002\u00f2\u00f7\u0005:\u001e\u0002\u00f3",
    "\u00f4\u0007K\u0002\u0002\u00f4\u00f5\u00075\u0002\u0002\u00f5\u00f7",
    "\u0005:\u001e\u0002\u00f6\u00e7\u0003\u0002\u0002\u0002\u00f6\u00ea",
    "\u0003\u0002\u0002\u0002\u00f6\u00ed\u0003\u0002\u0002\u0002\u00f6\u00f0",
    "\u0003\u0002\u0002\u0002\u00f6\u00f3\u0003\u0002\u0002\u0002\u00f7-",
    "\u0003\u0002\u0002\u0002\u00f8\u00f9\u0007!\u0002\u0002\u00f9\u00fa",
    "\u0005:\u001e\u0002\u00fa/\u0003\u0002\u0002\u0002\u00fb\u00fc\u0007",
    "\"\u0002\u0002\u00fc\u00fd\u0007K\u0002\u0002\u00fd1\u0003\u0002\u0002",
    "\u0002\u00fe\u00ff\u0007\u0003\u0002\u0002\u00ff\u0100\u0007K\u0002",
    "\u0002\u0100\u0101\u0007\u0004\u0002\u0002\u01013\u0003\u0002\u0002",
    "\u0002\u0102\u0103\u0007\u0003\u0002\u0002\u0103\u0104\u0007K\u0002",
    "\u0002\u0104\u0105\u0007\u0005\u0002\u0002\u01055\u0003\u0002\u0002",
    "\u0002\u0106\u0107\b\u001c\u0001\u0002\u0107\u0108\u0005:\u001e\u0002",
    "\u0108\u0109\u00058\u001d\u0002\u0109\u010a\u0005:\u001e\u0002\u010a",
    "\u0110\u0003\u0002\u0002\u0002\u010b\u0110\u0007K\u0002\u0002\u010c",
    "\u0110\u0007O\u0002\u0002\u010d\u010e\u0007,\u0002\u0002\u010e\u0110",
    "\u00056\u001c\u0005\u010f\u0106\u0003\u0002\u0002\u0002\u010f\u010b",
    "\u0003\u0002\u0002\u0002\u010f\u010c\u0003\u0002\u0002\u0002\u010f\u010d",
    "\u0003\u0002\u0002\u0002\u0110\u0119\u0003\u0002\u0002\u0002\u0111\u0112",
    "\f\u0004\u0002\u0002\u0112\u0113\u0007-\u0002\u0002\u0113\u0118\u0005",
    "6\u001c\u0005\u0114\u0115\f\u0003\u0002\u0002\u0115\u0116\u0007.\u0002",
    "\u0002\u0116\u0118\u00056\u001c\u0004\u0117\u0111\u0003\u0002\u0002",
    "\u0002\u0117\u0114\u0003\u0002\u0002\u0002\u0118\u011b\u0003\u0002\u0002",
    "\u0002\u0119\u0117\u0003\u0002\u0002\u0002\u0119\u011a\u0003\u0002\u0002",
    "\u0002\u011a7\u0003\u0002\u0002\u0002\u011b\u0119\u0003\u0002\u0002",
    "\u0002\u011c\u011d\t\u0003\u0002\u0002\u011d9\u0003\u0002\u0002\u0002",
    "\u011e\u011f\b\u001e\u0001\u0002\u011f\u0120\u0005@!\u0002\u0120\u012c",
    "\u0003\u0002\u0002\u0002\u0121\u0122\f\u0005\u0002\u0002\u0122\u0123",
    "\u0007/\u0002\u0002\u0123\u012b\u0005@!\u0002\u0124\u0125\f\u0004\u0002",
    "\u0002\u0125\u0126\u0007;\u0002\u0002\u0126\u012b\u0005@!\u0002\u0127",
    "\u0128\f\u0003\u0002\u0002\u0128\u0129\u00070\u0002\u0002\u0129\u012b",
    "\u0005@!\u0002\u012a\u0121\u0003\u0002\u0002\u0002\u012a\u0124\u0003",
    "\u0002\u0002\u0002\u012a\u0127\u0003\u0002\u0002\u0002\u012b\u012e\u0003",
    "\u0002\u0002\u0002\u012c\u012a\u0003\u0002\u0002\u0002\u012c\u012d\u0003",
    "\u0002\u0002\u0002\u012d;\u0003\u0002\u0002\u0002\u012e\u012c\u0003",
    "\u0002\u0002\u0002\u012f\u0130\b\u001f\u0001\u0002\u0130\u0131\u0005",
    "> \u0002\u0131\u013d\u0003\u0002\u0002\u0002\u0132\u0133\f\u0005\u0002",
    "\u0002\u0133\u0134\u00076\u0002\u0002\u0134\u013c\u0005> \u0002\u0135",
    "\u0136\f\u0004\u0002\u0002\u0136\u0137\u00077\u0002\u0002\u0137\u013c",
    "\u0005> \u0002\u0138\u0139\f\u0003\u0002\u0002\u0139\u013a\u00078\u0002",
    "\u0002\u013a\u013c\u0005> \u0002\u013b\u0132\u0003\u0002\u0002\u0002",
    "\u013b\u0135\u0003\u0002\u0002\u0002\u013b\u0138\u0003\u0002\u0002\u0002",
    "\u013c\u013f\u0003\u0002\u0002\u0002\u013d\u013b\u0003\u0002\u0002\u0002",
    "\u013d\u013e\u0003\u0002\u0002\u0002\u013e=\u0003\u0002\u0002\u0002",
    "\u013f\u013d\u0003\u0002\u0002\u0002\u0140\u0141\b \u0001\u0002\u0141",
    "\u0142\u0005@!\u0002\u0142\u014b\u0003\u0002\u0002\u0002\u0143\u0144",
    "\f\u0004\u0002\u0002\u0144\u0145\u00079\u0002\u0002\u0145\u014a\u0005",
    "@!\u0002\u0146\u0147\f\u0003\u0002\u0002\u0147\u0148\u0007:\u0002\u0002",
    "\u0148\u014a\u0005@!\u0002\u0149\u0143\u0003\u0002\u0002\u0002\u0149",
    "\u0146\u0003\u0002\u0002\u0002\u014a\u014d\u0003\u0002\u0002\u0002\u014b",
    "\u0149\u0003\u0002\u0002\u0002\u014b\u014c\u0003\u0002\u0002\u0002\u014c",
    "?\u0003\u0002\u0002\u0002\u014d\u014b\u0003\u0002\u0002\u0002\u014e",
    "\u014f\b!\u0001\u0002\u014f\u0150\u0005B\"\u0002\u0150\u015c\u0003\u0002",
    "\u0002\u0002\u0151\u0152\f\u0005\u0002\u0002\u0152\u0153\u0007<\u0002",
    "\u0002\u0153\u015b\u0005D#\u0002\u0154\u0155\f\u0004\u0002\u0002\u0155",
    "\u0156\u0007=\u0002\u0002\u0156\u015b\u0005D#\u0002\u0157\u0158\f\u0003",
    "\u0002\u0002\u0158\u0159\u0007>\u0002\u0002\u0159\u015b\u0005D#\u0002",
    "\u015a\u0151\u0003\u0002\u0002\u0002\u015a\u0154\u0003\u0002\u0002\u0002",
    "\u015a\u0157\u0003\u0002\u0002\u0002\u015b\u015e\u0003\u0002\u0002\u0002",
    "\u015c\u015a\u0003\u0002\u0002\u0002\u015c\u015d\u0003\u0002\u0002\u0002",
    "\u015dA\u0003\u0002\u0002\u0002\u015e\u015c\u0003\u0002\u0002\u0002",
    "\u015f\u0165\u0005D#\u0002\u0160\u0161\u0005D#\u0002\u0161\u0162\u0007",
    "?\u0002\u0002\u0162\u0163\u0005D#\u0002\u0163\u0165\u0003\u0002\u0002",
    "\u0002\u0164\u015f\u0003\u0002\u0002\u0002\u0164\u0160\u0003\u0002\u0002",
    "\u0002\u0165C\u0003\u0002\u0002\u0002\u0166\u0167\u0007\u0006\u0002",
    "\u0002\u0167\u0168\u0005:\u001e\u0002\u0168\u0169\u0007\u0007\u0002",
    "\u0002\u0169\u0172\u0003\u0002\u0002\u0002\u016a\u0172\u0007K\u0002",
    "\u0002\u016b\u0172\u0007M\u0002\u0002\u016c\u0172\u0007N\u0002\u0002",
    "\u016d\u0172\u0007O\u0002\u0002\u016e\u0172\u0005\u0016\f\u0002\u016f",
    "\u0172\u0005F$\u0002\u0170\u0172\u0005L\'\u0002\u0171\u0166\u0003\u0002",
    "\u0002\u0002\u0171\u016a\u0003\u0002\u0002\u0002\u0171\u016b\u0003\u0002",
    "\u0002\u0002\u0171\u016c\u0003\u0002\u0002\u0002\u0171\u016d\u0003\u0002",
    "\u0002\u0002\u0171\u016e\u0003\u0002\u0002\u0002\u0171\u016f\u0003\u0002",
    "\u0002\u0002\u0171\u0170\u0003\u0002\u0002\u0002\u0172E\u0003\u0002",
    "\u0002\u0002\u0173\u0174\u0007K\u0002\u0002\u0174\u0175\u0007\u000e",
    "\u0002\u0002\u0175\u0176\u0005:\u001e\u0002\u0176G\u0003\u0002\u0002",
    "\u0002\u0177\u0178\u0005\f\u0007\u0002\u0178\u0179\u0007K\u0002\u0002",
    "\u0179\u017a\u00071\u0002\u0002\u017a\u017b\u0005:\u001e\u0002\u017b",
    "I\u0003\u0002\u0002\u0002\u017c\u017d\u0007\u0006\u0002\u0002\u017d",
    "\u0182\u0005H%\u0002\u017e\u017f\u0007H\u0002\u0002\u017f\u0181\u0005",
    "H%\u0002\u0180\u017e\u0003\u0002\u0002\u0002\u0181\u0184\u0003\u0002",
    "\u0002\u0002\u0182\u0180\u0003\u0002\u0002\u0002\u0182\u0183\u0003\u0002",
    "\u0002\u0002\u0183\u0185\u0003\u0002\u0002\u0002\u0184\u0182\u0003\u0002",
    "\u0002\u0002\u0185\u0186\u0007\u0007\u0002\u0002\u0186\u0187\u0007I",
    "\u0002\u0002\u0187K\u0003\u0002\u0002\u0002\u0188\u0189\u0007K\u0002",
    "\u0002\u0189\u018a\u0007$\u0002\u0002\u018a\u018b\u0007K\u0002\u0002",
    "\u018bM\u0003\u0002\u0002\u0002\u018c\u018f\u0007%\u0002\u0002\u018d",
    "\u0190\u0005:\u001e\u0002\u018e\u0190\u00056\u001c\u0002\u018f\u018d",
    "\u0003\u0002\u0002\u0002\u018f\u018e\u0003\u0002\u0002\u0002\u0190\u0191",
    "\u0003\u0002\u0002\u0002\u0191\u0192\u0007&\u0002\u0002\u0192\u0193",
    "\u0005:\u001e\u0002\u0193O\u0003\u0002\u0002\u0002\u0194\u0195\u0007",
    "#\u0002\u0002\u0195\u0196\u0007S\u0002\u0002\u0196Q\u0003\u0002\u0002",
    "\u0002\u0197\u0198\u0007\b\u0002\u0002\u0198\u019d\u0007L\u0002\u0002",
    "\u0199\u019a\u0007\u0016\u0002\u0002\u019a\u019c\u0007L\u0002\u0002",
    "\u019b\u0199\u0003\u0002\u0002\u0002\u019c\u019f\u0003\u0002\u0002\u0002",
    "\u019d\u019b\u0003\u0002\u0002\u0002\u019d\u019e\u0003\u0002\u0002\u0002",
    "\u019e\u01a0\u0003\u0002\u0002\u0002\u019f\u019d\u0003\u0002\u0002\u0002",
    "\u01a0\u01a1\u0007\u001d\u0002\u0002\u01a1\u01a2\u0007S\u0002\u0002",
    "\u01a2S\u0003\u0002\u0002\u0002\u001fXq{\u0089\u0091\u009e\u00a8\u00af",
    "\u00b8\u00bc\u00dd\u00e4\u00f6\u010f\u0117\u0119\u012a\u012c\u013b\u013d",
    "\u0149\u014b\u015a\u015c\u0164\u0171\u0182\u018f\u019d"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'MAKE'", "'GREATER'", "'SMALLER'", "'('", "')'", 
                     "'I ONLY WANT'", "'LISTEN'", "'PEOPLE ARE SAYING'", 
                     "'NOBODY KNEW'", "'BUILD THE WALL'", "'AND MEXICO WILL PAY FOR IT'", 
                     "'SECTION'", "'PREVAILS'", "'THE TIME FOR EMPTY TALK IS OVER!!!'", 
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
                     "'ABSOLUTELY'", "'WINNING MASSIVELY'", "'LOOSING MASSIVELY'", 
                     "'MANY TIMES HIGHER'", "'MANY TIMES LOWER'", "'ALLIANCE WITH'", 
                     "'COMBINED FORCES WITH'", "'EXCLUSIVE DEAL WITH'", 
                     "'PROMOTE'", "'DEMOTE'", "'ENDORSING'", "'BIG LEAGUE TIMES'", 
                     "'SAD'", "'LEFTOVER FROM'", "'HUGELY MULTIPLIED BY'", 
                     "'HUGE'", "'BIGLY'", "'SUPPORT'", "'TWEET'", "'WALL'", 
                     "'DEAL'", "'BELIEVE ME'", "'I TOLD YOU SO'", "'&'", 
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
                      "COMPOUND_ADD", "COMPOUND_SUBTRACT", "COMPOUND_MULTIPLY", 
                      "COMPOUND_DIVIDE", "BITWISE_AND", "BITWISE_OR", "BITWISE_XOR", 
                      "SHIFT_LEFT", "SHIFT_RIGHT", "STRING_CONCAT", "MULTIPLY", 
                      "DIVIDE", "MODULO", "POWER", "INTEGER_TYPE", "FLOAT_TYPE", 
                      "BOOLEAN_TYPE", "STRING_TYPE", "ARRAY_TYPE", "STRUCTUR_TYPE", 
                      "OPEN_BLOCK", "CLOSE_BLOCK", "AMPERSAND", "DEAL_DECLARE", 
                      "VAR_DECLARE", "VARIABLE", "IDENTIFIER", "STRING", 
                      "NUMBER", "BOOLEAN", "TRUE", "FALSE", "COMMENT", "FILEPATH", 
                      "WS" ];

var ruleNames =  [ "program", "statement", "commentStatement", "variableDeclaration", 
                   "constantDeclaration", "dataType", "functionDeclaration", 
                   "blockStatement", "parameterList", "returnStatement", 
                   "functionCall", "argumentList", "ifStatement", "elseIfStatement", 
                   "elseStatement", "whileLoop", "forLoop", "forEachLoop", 
                   "loopBreak", "arrayDeclaration", "arrayElements", "assignmentStatement", 
                   "printStatement", "inputStatement", "incrementStatement", 
                   "decrementStatement", "condition", "comparison", "expression", 
                   "bitwiseExpression", "shiftExpression", "term", "powerExpression", 
                   "factor", "arrayAccess", "dealField", "dealDeclaration", 
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
TrumplangParser.COMPOUND_ADD = 48;
TrumplangParser.COMPOUND_SUBTRACT = 49;
TrumplangParser.COMPOUND_MULTIPLY = 50;
TrumplangParser.COMPOUND_DIVIDE = 51;
TrumplangParser.BITWISE_AND = 52;
TrumplangParser.BITWISE_OR = 53;
TrumplangParser.BITWISE_XOR = 54;
TrumplangParser.SHIFT_LEFT = 55;
TrumplangParser.SHIFT_RIGHT = 56;
TrumplangParser.STRING_CONCAT = 57;
TrumplangParser.MULTIPLY = 58;
TrumplangParser.DIVIDE = 59;
TrumplangParser.MODULO = 60;
TrumplangParser.POWER = 61;
TrumplangParser.INTEGER_TYPE = 62;
TrumplangParser.FLOAT_TYPE = 63;
TrumplangParser.BOOLEAN_TYPE = 64;
TrumplangParser.STRING_TYPE = 65;
TrumplangParser.ARRAY_TYPE = 66;
TrumplangParser.STRUCTUR_TYPE = 67;
TrumplangParser.OPEN_BLOCK = 68;
TrumplangParser.CLOSE_BLOCK = 69;
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
TrumplangParser.RULE_bitwiseExpression = 29;
TrumplangParser.RULE_shiftExpression = 30;
TrumplangParser.RULE_term = 31;
TrumplangParser.RULE_powerExpression = 32;
TrumplangParser.RULE_factor = 33;
TrumplangParser.RULE_arrayAccess = 34;
TrumplangParser.RULE_dealField = 35;
TrumplangParser.RULE_dealDeclaration = 36;
TrumplangParser.RULE_dealAccess = 37;
TrumplangParser.RULE_assertStatement = 38;
TrumplangParser.RULE_importStatement = 39;
TrumplangParser.RULE_selectiveImport = 40;


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
        this.state = 82;
        this.match(TrumplangParser.PROG_START);
        this.state = 84; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 83;
            this.statement();
            this.state = 86; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TrumplangParser.T__0) | (1 << TrumplangParser.T__5) | (1 << TrumplangParser.IF_DECL) | (1 << TrumplangParser.ARRAY_DECL) | (1 << TrumplangParser.FUNCTION_DECL) | (1 << TrumplangParser.VARIABLE_DECL) | (1 << TrumplangParser.CONSTANT_DECL) | (1 << TrumplangParser.RETURN) | (1 << TrumplangParser.FUNC_CALL) | (1 << TrumplangParser.BREAK) | (1 << TrumplangParser.WHILE_LOOP_DECL) | (1 << TrumplangParser.FOR_LOOP_WITH) | (1 << TrumplangParser.FOR_EACH_LOOP_DECL) | (1 << TrumplangParser.PRINT))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (TrumplangParser.INPUT - 32)) | (1 << (TrumplangParser.IMPORT - 32)) | (1 << (TrumplangParser.ASSERT_CALL - 32)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (TrumplangParser.OPEN_BLOCK - 68)) | (1 << (TrumplangParser.VARIABLE - 68)) | (1 << (TrumplangParser.COMMENT - 68)))) !== 0));
        this.state = 88;
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
        this.state = 111;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 90;
            this.importStatement();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 91;
            this.blockStatement();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 92;
            this.selectiveImport();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 93;
            this.variableDeclaration();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 94;
            this.constantDeclaration();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 95;
            this.functionDeclaration();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 96;
            this.functionCall();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 97;
            this.ifStatement();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 98;
            this.whileLoop();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 99;
            this.forLoop();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 100;
            this.forEachLoop();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 101;
            this.arrayDeclaration();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 102;
            this.assignmentStatement();
            break;

        case 14:
            this.enterOuterAlt(localctx, 14);
            this.state = 103;
            this.incrementStatement();
            break;

        case 15:
            this.enterOuterAlt(localctx, 15);
            this.state = 104;
            this.decrementStatement();
            break;

        case 16:
            this.enterOuterAlt(localctx, 16);
            this.state = 105;
            this.printStatement();
            break;

        case 17:
            this.enterOuterAlt(localctx, 17);
            this.state = 106;
            this.inputStatement();
            break;

        case 18:
            this.enterOuterAlt(localctx, 18);
            this.state = 107;
            this.returnStatement();
            break;

        case 19:
            this.enterOuterAlt(localctx, 19);
            this.state = 108;
            this.commentStatement();
            break;

        case 20:
            this.enterOuterAlt(localctx, 20);
            this.state = 109;
            this.loopBreak();
            break;

        case 21:
            this.enterOuterAlt(localctx, 21);
            this.state = 110;
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
        this.state = 113;
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
        this.state = 115;
        this.match(TrumplangParser.VARIABLE_DECL);
        this.state = 116;
        this.dataType();
        this.state = 117;
        localctx.varName = this.match(TrumplangParser.VARIABLE);
        this.state = 118;
        this.match(TrumplangParser.ASSIGNMENT);
        this.state = 121;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.state = 119;
            this.expression(0);
            break;

        case 2:
            this.state = 120;
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
        this.state = 123;
        this.match(TrumplangParser.CONSTANT_DECL);
        this.state = 124;
        this.dataType();
        this.state = 125;
        localctx.varName = this.match(TrumplangParser.VARIABLE);
        this.state = 126;
        this.match(TrumplangParser.ASSIGNMENT);
        this.state = 127;
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
        this.state = 129;
        _la = this._input.LA(1);
        if(!(((((_la - 62)) & ~0x1f) == 0 && ((1 << (_la - 62)) & ((1 << (TrumplangParser.INTEGER_TYPE - 62)) | (1 << (TrumplangParser.FLOAT_TYPE - 62)) | (1 << (TrumplangParser.BOOLEAN_TYPE - 62)) | (1 << (TrumplangParser.STRING_TYPE - 62)) | (1 << (TrumplangParser.ARRAY_TYPE - 62)) | (1 << (TrumplangParser.STRUCTUR_TYPE - 62)))) !== 0))) {
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
        this.state = 131;
        this.match(TrumplangParser.FUNCTION_DECL);
        this.state = 132;
        localctx.funcName = this.match(TrumplangParser.IDENTIFIER);
        this.state = 133;
        this.match(TrumplangParser.PARAMS_ARGS_START);
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 62)) & ~0x1f) == 0 && ((1 << (_la - 62)) & ((1 << (TrumplangParser.INTEGER_TYPE - 62)) | (1 << (TrumplangParser.FLOAT_TYPE - 62)) | (1 << (TrumplangParser.BOOLEAN_TYPE - 62)) | (1 << (TrumplangParser.STRING_TYPE - 62)) | (1 << (TrumplangParser.ARRAY_TYPE - 62)) | (1 << (TrumplangParser.STRUCTUR_TYPE - 62)))) !== 0)) {
            this.state = 134;
            this.parameterList();
        }

        this.state = 137;
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
        this.state = 139;
        this.match(TrumplangParser.OPEN_BLOCK);
        this.state = 143;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << TrumplangParser.T__0) | (1 << TrumplangParser.T__5) | (1 << TrumplangParser.IF_DECL) | (1 << TrumplangParser.ARRAY_DECL) | (1 << TrumplangParser.FUNCTION_DECL) | (1 << TrumplangParser.VARIABLE_DECL) | (1 << TrumplangParser.CONSTANT_DECL) | (1 << TrumplangParser.RETURN) | (1 << TrumplangParser.FUNC_CALL) | (1 << TrumplangParser.BREAK) | (1 << TrumplangParser.WHILE_LOOP_DECL) | (1 << TrumplangParser.FOR_LOOP_WITH) | (1 << TrumplangParser.FOR_EACH_LOOP_DECL) | (1 << TrumplangParser.PRINT))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (TrumplangParser.INPUT - 32)) | (1 << (TrumplangParser.IMPORT - 32)) | (1 << (TrumplangParser.ASSERT_CALL - 32)))) !== 0) || ((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (TrumplangParser.OPEN_BLOCK - 68)) | (1 << (TrumplangParser.VARIABLE - 68)) | (1 << (TrumplangParser.COMMENT - 68)))) !== 0)) {
            this.state = 140;
            this.statement();
            this.state = 145;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 146;
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
    this._VARIABLE = null; // Token
    this.paramName = []; // of Tokens
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
        this.state = 148;
        this.dataType();
        this.state = 149;
        localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
        localctx.paramName.push(localctx._VARIABLE);
        this.state = 156;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TrumplangParser.PARAMS_ARGS_CHAIN) {
            this.state = 150;
            this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
            this.state = 151;
            this.dataType();
            this.state = 152;
            localctx._VARIABLE = this.match(TrumplangParser.VARIABLE);
            localctx.paramName.push(localctx._VARIABLE);
            this.state = 158;
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
        this.state = 159;
        this.match(TrumplangParser.RETURN);
        this.state = 160;
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
        this.state = 162;
        this.match(TrumplangParser.FUNC_CALL);
        this.state = 163;
        localctx.funcName = this.match(TrumplangParser.IDENTIFIER);
        this.state = 164;
        this.match(TrumplangParser.PARAMS_ARGS_START);
        this.state = 166;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        if(la_===1) {
            this.state = 165;
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
        this.state = 168;
        this.expression(0);
        this.state = 173;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 169;
                this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
                this.state = 170;
                this.expression(0); 
            }
            this.state = 175;
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
        this.state = 176;
        this.match(TrumplangParser.IF_DECL);
        this.state = 177;
        this.condition(0);
        this.state = 178;
        this.statement();
        this.state = 182;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 179;
                this.elseIfStatement(); 
            }
            this.state = 184;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

        this.state = 186;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        if(la_===1) {
            this.state = 185;
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
        this.state = 188;
        this.match(TrumplangParser.ELSE_IF_DECL);
        this.state = 189;
        this.condition(0);
        this.state = 190;
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
        this.state = 192;
        this.match(TrumplangParser.ELSE_DECL);
        this.state = 193;
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
        this.state = 195;
        this.match(TrumplangParser.WHILE_LOOP_DECL);
        this.state = 196;
        this.condition(0);
        this.state = 197;
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
        this.state = 199;
        this.match(TrumplangParser.FOR_LOOP_WITH);
        this.state = 200;
        localctx.varName = this.match(TrumplangParser.VARIABLE);
        this.state = 201;
        this.match(TrumplangParser.FOR_LOOP_FROM);
        this.state = 202;
        this.expression(0);
        this.state = 203;
        this.match(TrumplangParser.FOR_LOOP_TO);
        this.state = 204;
        this.expression(0);
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
        this.state = 207;
        this.match(TrumplangParser.FOR_EACH_LOOP_DECL);
        this.state = 208;
        localctx.varName = this.match(TrumplangParser.VARIABLE);
        this.state = 209;
        this.match(TrumplangParser.FOR_EACH_FROM);
        this.state = 210;
        localctx.listName = this.match(TrumplangParser.VARIABLE);
        this.state = 211;
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
        this.state = 213;
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
    this.arrayName = null; // Token
    return this;
}

ArrayDeclarationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayDeclarationContext.prototype.constructor = ArrayDeclarationContext;

ArrayDeclarationContext.prototype.ARRAY_DECL = function() {
    return this.getToken(TrumplangParser.ARRAY_DECL, 0);
};

ArrayDeclarationContext.prototype.ARRAY_ELEMENTS_DECL = function() {
    return this.getToken(TrumplangParser.ARRAY_ELEMENTS_DECL, 0);
};

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
    this.enterRule(localctx, 38, TrumplangParser.RULE_arrayDeclaration);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 215;
        this.match(TrumplangParser.ARRAY_DECL);
        this.state = 216;
        localctx.arrayName = this.match(TrumplangParser.VARIABLE);
        this.state = 217;
        this.match(TrumplangParser.ARRAY_ELEMENTS_DECL);
        this.state = 219;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
        if(la_===1) {
            this.state = 218;
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
        this.state = 221;
        this.expression(0);
        this.state = 226;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TrumplangParser.ARRAY_CHAIN) {
            this.state = 222;
            this.match(TrumplangParser.ARRAY_CHAIN);
            this.state = 223;
            this.expression(0);
            this.state = 228;
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
    this.varName = null; // Token
    return this;
}

AssignmentStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AssignmentStatementContext.prototype.constructor = AssignmentStatementContext;

AssignmentStatementContext.prototype.ASSIGNMENT = function() {
    return this.getToken(TrumplangParser.ASSIGNMENT, 0);
};

AssignmentStatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

AssignmentStatementContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
};

AssignmentStatementContext.prototype.COMPOUND_ADD = function() {
    return this.getToken(TrumplangParser.COMPOUND_ADD, 0);
};

AssignmentStatementContext.prototype.COMPOUND_SUBTRACT = function() {
    return this.getToken(TrumplangParser.COMPOUND_SUBTRACT, 0);
};

AssignmentStatementContext.prototype.COMPOUND_MULTIPLY = function() {
    return this.getToken(TrumplangParser.COMPOUND_MULTIPLY, 0);
};

AssignmentStatementContext.prototype.COMPOUND_DIVIDE = function() {
    return this.getToken(TrumplangParser.COMPOUND_DIVIDE, 0);
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
        this.state = 244;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 229;
            localctx.varName = this.match(TrumplangParser.VARIABLE);
            this.state = 230;
            this.match(TrumplangParser.ASSIGNMENT);
            this.state = 231;
            this.expression(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 232;
            localctx.varName = this.match(TrumplangParser.VARIABLE);
            this.state = 233;
            this.match(TrumplangParser.COMPOUND_ADD);
            this.state = 234;
            this.expression(0);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 235;
            localctx.varName = this.match(TrumplangParser.VARIABLE);
            this.state = 236;
            this.match(TrumplangParser.COMPOUND_SUBTRACT);
            this.state = 237;
            this.expression(0);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 238;
            localctx.varName = this.match(TrumplangParser.VARIABLE);
            this.state = 239;
            this.match(TrumplangParser.COMPOUND_MULTIPLY);
            this.state = 240;
            this.expression(0);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 241;
            localctx.varName = this.match(TrumplangParser.VARIABLE);
            this.state = 242;
            this.match(TrumplangParser.COMPOUND_DIVIDE);
            this.state = 243;
            this.expression(0);
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
        this.state = 246;
        this.match(TrumplangParser.PRINT);
        this.state = 247;
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
    this.varName = null; // Token
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
        this.state = 249;
        this.match(TrumplangParser.INPUT);
        this.state = 250;
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
        this.state = 252;
        this.match(TrumplangParser.T__0);
        this.state = 253;
        localctx.varName = this.match(TrumplangParser.VARIABLE);
        this.state = 254;
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
        this.state = 256;
        this.match(TrumplangParser.T__0);
        this.state = 257;
        localctx.varName = this.match(TrumplangParser.VARIABLE);
        this.state = 258;
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
    this.condVar = null; // Token
    this.condBool = null; // Token
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
        this.state = 269;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.state = 261;
            this.expression(0);
            this.state = 262;
            this.comparison();
            this.state = 263;
            this.expression(0);
            break;

        case 2:
            this.state = 265;
            localctx.condVar = this.match(TrumplangParser.VARIABLE);
            break;

        case 3:
            this.state = 266;
            localctx.condBool = this.match(TrumplangParser.BOOLEAN);
            break;

        case 4:
            this.state = 267;
            this.match(TrumplangParser.NOT);
            this.state = 268;
            this.condition(3);
            break;

        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 279;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 277;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ConditionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_condition);
                    this.state = 271;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 272;
                    this.match(TrumplangParser.AND);
                    this.state = 273;
                    this.condition(3);
                    break;

                case 2:
                    localctx = new ConditionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_condition);
                    this.state = 274;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 275;
                    this.match(TrumplangParser.OR);
                    this.state = 276;
                    this.condition(2);
                    break;

                } 
            }
            this.state = 281;
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
        this.state = 282;
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
        this.state = 285;
        this.term(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 298;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 296;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_expression);
                    this.state = 287;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 288;
                    this.match(TrumplangParser.PLUS);
                    this.state = 289;
                    this.term(0);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_expression);
                    this.state = 290;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 291;
                    this.match(TrumplangParser.STRING_CONCAT);
                    this.state = 292;
                    this.term(0);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_expression);
                    this.state = 293;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 294;
                    this.match(TrumplangParser.MINUS);
                    this.state = 295;
                    this.term(0);
                    break;

                } 
            }
            this.state = 300;
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
};


function BitwiseExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_bitwiseExpression;
    return this;
}

BitwiseExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BitwiseExpressionContext.prototype.constructor = BitwiseExpressionContext;

BitwiseExpressionContext.prototype.shiftExpression = function() {
    return this.getTypedRuleContext(ShiftExpressionContext,0);
};

BitwiseExpressionContext.prototype.bitwiseExpression = function() {
    return this.getTypedRuleContext(BitwiseExpressionContext,0);
};

BitwiseExpressionContext.prototype.BITWISE_AND = function() {
    return this.getToken(TrumplangParser.BITWISE_AND, 0);
};

BitwiseExpressionContext.prototype.BITWISE_OR = function() {
    return this.getToken(TrumplangParser.BITWISE_OR, 0);
};

BitwiseExpressionContext.prototype.BITWISE_XOR = function() {
    return this.getToken(TrumplangParser.BITWISE_XOR, 0);
};

BitwiseExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterBitwiseExpression(this);
	}
};

BitwiseExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitBitwiseExpression(this);
	}
};

BitwiseExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitBitwiseExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



TrumplangParser.prototype.bitwiseExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new BitwiseExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 58;
    this.enterRecursionRule(localctx, 58, TrumplangParser.RULE_bitwiseExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 302;
        this.shiftExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 315;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 313;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new BitwiseExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_bitwiseExpression);
                    this.state = 304;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 305;
                    this.match(TrumplangParser.BITWISE_AND);
                    this.state = 306;
                    this.shiftExpression(0);
                    break;

                case 2:
                    localctx = new BitwiseExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_bitwiseExpression);
                    this.state = 307;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 308;
                    this.match(TrumplangParser.BITWISE_OR);
                    this.state = 309;
                    this.shiftExpression(0);
                    break;

                case 3:
                    localctx = new BitwiseExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_bitwiseExpression);
                    this.state = 310;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 311;
                    this.match(TrumplangParser.BITWISE_XOR);
                    this.state = 312;
                    this.shiftExpression(0);
                    break;

                } 
            }
            this.state = 317;
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
};


function ShiftExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_shiftExpression;
    return this;
}

ShiftExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShiftExpressionContext.prototype.constructor = ShiftExpressionContext;

ShiftExpressionContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

ShiftExpressionContext.prototype.shiftExpression = function() {
    return this.getTypedRuleContext(ShiftExpressionContext,0);
};

ShiftExpressionContext.prototype.SHIFT_LEFT = function() {
    return this.getToken(TrumplangParser.SHIFT_LEFT, 0);
};

ShiftExpressionContext.prototype.SHIFT_RIGHT = function() {
    return this.getToken(TrumplangParser.SHIFT_RIGHT, 0);
};

ShiftExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterShiftExpression(this);
	}
};

ShiftExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitShiftExpression(this);
	}
};

ShiftExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitShiftExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



TrumplangParser.prototype.shiftExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ShiftExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 60;
    this.enterRecursionRule(localctx, 60, TrumplangParser.RULE_shiftExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 319;
        this.term(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 329;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 327;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ShiftExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_shiftExpression);
                    this.state = 321;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 322;
                    this.match(TrumplangParser.SHIFT_LEFT);
                    this.state = 323;
                    this.term(0);
                    break;

                case 2:
                    localctx = new ShiftExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_shiftExpression);
                    this.state = 324;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 325;
                    this.match(TrumplangParser.SHIFT_RIGHT);
                    this.state = 326;
                    this.term(0);
                    break;

                } 
            }
            this.state = 331;
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

TermContext.prototype.powerExpression = function() {
    return this.getTypedRuleContext(PowerExpressionContext,0);
};

TermContext.prototype.term = function() {
    return this.getTypedRuleContext(TermContext,0);
};

TermContext.prototype.MULTIPLY = function() {
    return this.getToken(TrumplangParser.MULTIPLY, 0);
};

TermContext.prototype.factor = function() {
    return this.getTypedRuleContext(FactorContext,0);
};

TermContext.prototype.DIVIDE = function() {
    return this.getToken(TrumplangParser.DIVIDE, 0);
};

TermContext.prototype.MODULO = function() {
    return this.getToken(TrumplangParser.MODULO, 0);
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
    var _startState = 62;
    this.enterRecursionRule(localctx, 62, TrumplangParser.RULE_term, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 333;
        this.powerExpression();
        this._ctx.stop = this._input.LT(-1);
        this.state = 346;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 344;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new TermContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
                    this.state = 335;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 336;
                    this.match(TrumplangParser.MULTIPLY);
                    this.state = 337;
                    this.factor();
                    break;

                case 2:
                    localctx = new TermContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
                    this.state = 338;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 339;
                    this.match(TrumplangParser.DIVIDE);
                    this.state = 340;
                    this.factor();
                    break;

                case 3:
                    localctx = new TermContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, TrumplangParser.RULE_term);
                    this.state = 341;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 342;
                    this.match(TrumplangParser.MODULO);
                    this.state = 343;
                    this.factor();
                    break;

                } 
            }
            this.state = 348;
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


function PowerExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = TrumplangParser.RULE_powerExpression;
    return this;
}

PowerExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PowerExpressionContext.prototype.constructor = PowerExpressionContext;

PowerExpressionContext.prototype.factor = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FactorContext);
    } else {
        return this.getTypedRuleContext(FactorContext,i);
    }
};

PowerExpressionContext.prototype.POWER = function() {
    return this.getToken(TrumplangParser.POWER, 0);
};

PowerExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.enterPowerExpression(this);
	}
};

PowerExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof TrumplangListener ) {
        listener.exitPowerExpression(this);
	}
};

PowerExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof TrumplangVisitor ) {
        return visitor.visitPowerExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




TrumplangParser.PowerExpressionContext = PowerExpressionContext;

TrumplangParser.prototype.powerExpression = function() {

    var localctx = new PowerExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, TrumplangParser.RULE_powerExpression);
    try {
        this.state = 354;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 349;
            this.factor();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 350;
            this.factor();
            this.state = 351;
            this.match(TrumplangParser.POWER);
            this.state = 352;
            this.factor();
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
    this.enterRule(localctx, 66, TrumplangParser.RULE_factor);
    try {
        this.state = 367;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 356;
            this.match(TrumplangParser.T__3);
            this.state = 357;
            this.expression(0);
            this.state = 358;
            this.match(TrumplangParser.T__4);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 360;
            this.match(TrumplangParser.VARIABLE);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 361;
            this.match(TrumplangParser.STRING);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 362;
            this.match(TrumplangParser.NUMBER);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 363;
            this.match(TrumplangParser.BOOLEAN);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 364;
            this.functionCall();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 365;
            this.arrayAccess();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 366;
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
    this.arrayName = null; // Token
    return this;
}

ArrayAccessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayAccessContext.prototype.constructor = ArrayAccessContext;

ArrayAccessContext.prototype.ARRAY_ACCESS = function() {
    return this.getToken(TrumplangParser.ARRAY_ACCESS, 0);
};

ArrayAccessContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ArrayAccessContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
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
    this.enterRule(localctx, 68, TrumplangParser.RULE_arrayAccess);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 369;
        localctx.arrayName = this.match(TrumplangParser.VARIABLE);
        this.state = 370;
        this.match(TrumplangParser.ARRAY_ACCESS);
        this.state = 371;
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
    this.fieldName = null; // Token
    return this;
}

DealFieldContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DealFieldContext.prototype.constructor = DealFieldContext;

DealFieldContext.prototype.dataType = function() {
    return this.getTypedRuleContext(DataTypeContext,0);
};

DealFieldContext.prototype.ASSIGNMENT = function() {
    return this.getToken(TrumplangParser.ASSIGNMENT, 0);
};

DealFieldContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

DealFieldContext.prototype.VARIABLE = function() {
    return this.getToken(TrumplangParser.VARIABLE, 0);
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
    this.enterRule(localctx, 70, TrumplangParser.RULE_dealField);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 373;
        this.dataType();
        this.state = 374;
        localctx.fieldName = this.match(TrumplangParser.VARIABLE);
        this.state = 375;
        this.match(TrumplangParser.ASSIGNMENT);
        this.state = 376;
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
    this.enterRule(localctx, 72, TrumplangParser.RULE_dealDeclaration);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 378;
        this.match(TrumplangParser.T__3);
        this.state = 379;
        this.dealField();
        this.state = 384;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TrumplangParser.AMPERSAND) {
            this.state = 380;
            this.match(TrumplangParser.AMPERSAND);
            this.state = 381;
            this.dealField();
            this.state = 386;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 387;
        this.match(TrumplangParser.T__4);
        this.state = 388;
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
    this.dealName = null; // Token
    this.fieldName = null; // Token
    return this;
}

DealAccessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DealAccessContext.prototype.constructor = DealAccessContext;

DealAccessContext.prototype.DEAL_ACCESS_KEYWORD = function() {
    return this.getToken(TrumplangParser.DEAL_ACCESS_KEYWORD, 0);
};

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
    this.enterRule(localctx, 74, TrumplangParser.RULE_dealAccess);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 390;
        localctx.dealName = this.match(TrumplangParser.VARIABLE);
        this.state = 391;
        this.match(TrumplangParser.DEAL_ACCESS_KEYWORD);
        this.state = 392;
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
    this.enterRule(localctx, 76, TrumplangParser.RULE_assertStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 394;
        this.match(TrumplangParser.ASSERT_CALL);
        this.state = 397;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.state = 395;
            this.expression(0);
            break;

        case 2:
            this.state = 396;
            this.condition(0);
            break;

        }
        this.state = 399;
        this.match(TrumplangParser.EQUALS);
        this.state = 400;
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
    this.enterRule(localctx, 78, TrumplangParser.RULE_importStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 402;
        this.match(TrumplangParser.IMPORT);
        this.state = 403;
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
    this._IDENTIFIER = null; // Token
    this.importName = []; // of Tokens
    this.filePath = null; // Token
    return this;
}

SelectiveImportContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SelectiveImportContext.prototype.constructor = SelectiveImportContext;

SelectiveImportContext.prototype.FOR_LOOP_FROM = function() {
    return this.getToken(TrumplangParser.FOR_LOOP_FROM, 0);
};

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
    this.enterRule(localctx, 80, TrumplangParser.RULE_selectiveImport);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 405;
        this.match(TrumplangParser.T__5);
        this.state = 406;
        localctx._IDENTIFIER = this.match(TrumplangParser.IDENTIFIER);
        localctx.importName.push(localctx._IDENTIFIER);
        this.state = 411;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===TrumplangParser.PARAMS_ARGS_CHAIN) {
            this.state = 407;
            this.match(TrumplangParser.PARAMS_ARGS_CHAIN);
            this.state = 408;
            localctx._IDENTIFIER = this.match(TrumplangParser.IDENTIFIER);
            localctx.importName.push(localctx._IDENTIFIER);
            this.state = 413;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 414;
        this.match(TrumplangParser.FOR_LOOP_FROM);
        this.state = 415;
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


TrumplangParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 26:
			return this.condition_sempred(localctx, predIndex);
	case 28:
			return this.expression_sempred(localctx, predIndex);
	case 29:
			return this.bitwiseExpression_sempred(localctx, predIndex);
	case 30:
			return this.shiftExpression_sempred(localctx, predIndex);
	case 31:
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

TrumplangParser.prototype.bitwiseExpression_sempred = function(localctx, predIndex) {
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

TrumplangParser.prototype.shiftExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 8:
			return this.precpred(this._ctx, 2);
		case 9:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

TrumplangParser.prototype.term_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 10:
			return this.precpred(this._ctx, 3);
		case 11:
			return this.precpred(this._ctx, 2);
		case 12:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.TrumplangParser = TrumplangParser;

// Generated from Trumplang.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by TrumplangParser.
function TrumplangListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

TrumplangListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
TrumplangListener.prototype.constructor = TrumplangListener;

// Enter a parse tree produced by TrumplangParser#program.
TrumplangListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#program.
TrumplangListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#statement.
TrumplangListener.prototype.enterStatement = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#statement.
TrumplangListener.prototype.exitStatement = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#commentStatement.
TrumplangListener.prototype.enterCommentStatement = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#commentStatement.
TrumplangListener.prototype.exitCommentStatement = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#variableDeclaration.
TrumplangListener.prototype.enterVariableDeclaration = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#variableDeclaration.
TrumplangListener.prototype.exitVariableDeclaration = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#constantDeclaration.
TrumplangListener.prototype.enterConstantDeclaration = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#constantDeclaration.
TrumplangListener.prototype.exitConstantDeclaration = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#dataType.
TrumplangListener.prototype.enterDataType = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#dataType.
TrumplangListener.prototype.exitDataType = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#functionDeclaration.
TrumplangListener.prototype.enterFunctionDeclaration = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#functionDeclaration.
TrumplangListener.prototype.exitFunctionDeclaration = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#blockStatement.
TrumplangListener.prototype.enterBlockStatement = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#blockStatement.
TrumplangListener.prototype.exitBlockStatement = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#parameterList.
TrumplangListener.prototype.enterParameterList = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#parameterList.
TrumplangListener.prototype.exitParameterList = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#returnStatement.
TrumplangListener.prototype.enterReturnStatement = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#returnStatement.
TrumplangListener.prototype.exitReturnStatement = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#functionCall.
TrumplangListener.prototype.enterFunctionCall = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#functionCall.
TrumplangListener.prototype.exitFunctionCall = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#argumentList.
TrumplangListener.prototype.enterArgumentList = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#argumentList.
TrumplangListener.prototype.exitArgumentList = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#ifStatement.
TrumplangListener.prototype.enterIfStatement = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#ifStatement.
TrumplangListener.prototype.exitIfStatement = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#elseIfStatement.
TrumplangListener.prototype.enterElseIfStatement = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#elseIfStatement.
TrumplangListener.prototype.exitElseIfStatement = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#elseStatement.
TrumplangListener.prototype.enterElseStatement = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#elseStatement.
TrumplangListener.prototype.exitElseStatement = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#whileLoop.
TrumplangListener.prototype.enterWhileLoop = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#whileLoop.
TrumplangListener.prototype.exitWhileLoop = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#forLoop.
TrumplangListener.prototype.enterForLoop = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#forLoop.
TrumplangListener.prototype.exitForLoop = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#forEachLoop.
TrumplangListener.prototype.enterForEachLoop = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#forEachLoop.
TrumplangListener.prototype.exitForEachLoop = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#loopBreak.
TrumplangListener.prototype.enterLoopBreak = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#loopBreak.
TrumplangListener.prototype.exitLoopBreak = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#arrayDeclaration.
TrumplangListener.prototype.enterArrayDeclaration = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#arrayDeclaration.
TrumplangListener.prototype.exitArrayDeclaration = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#arrayElements.
TrumplangListener.prototype.enterArrayElements = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#arrayElements.
TrumplangListener.prototype.exitArrayElements = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#assignmentStatement.
TrumplangListener.prototype.enterAssignmentStatement = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#assignmentStatement.
TrumplangListener.prototype.exitAssignmentStatement = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#printStatement.
TrumplangListener.prototype.enterPrintStatement = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#printStatement.
TrumplangListener.prototype.exitPrintStatement = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#inputStatement.
TrumplangListener.prototype.enterInputStatement = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#inputStatement.
TrumplangListener.prototype.exitInputStatement = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#incrementStatement.
TrumplangListener.prototype.enterIncrementStatement = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#incrementStatement.
TrumplangListener.prototype.exitIncrementStatement = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#decrementStatement.
TrumplangListener.prototype.enterDecrementStatement = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#decrementStatement.
TrumplangListener.prototype.exitDecrementStatement = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#condition.
TrumplangListener.prototype.enterCondition = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#condition.
TrumplangListener.prototype.exitCondition = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#comparison.
TrumplangListener.prototype.enterComparison = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#comparison.
TrumplangListener.prototype.exitComparison = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#expression.
TrumplangListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#expression.
TrumplangListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#bitwiseExpression.
TrumplangListener.prototype.enterBitwiseExpression = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#bitwiseExpression.
TrumplangListener.prototype.exitBitwiseExpression = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#shiftExpression.
TrumplangListener.prototype.enterShiftExpression = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#shiftExpression.
TrumplangListener.prototype.exitShiftExpression = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#term.
TrumplangListener.prototype.enterTerm = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#term.
TrumplangListener.prototype.exitTerm = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#powerExpression.
TrumplangListener.prototype.enterPowerExpression = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#powerExpression.
TrumplangListener.prototype.exitPowerExpression = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#factor.
TrumplangListener.prototype.enterFactor = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#factor.
TrumplangListener.prototype.exitFactor = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#arrayAccess.
TrumplangListener.prototype.enterArrayAccess = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#arrayAccess.
TrumplangListener.prototype.exitArrayAccess = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#dealField.
TrumplangListener.prototype.enterDealField = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#dealField.
TrumplangListener.prototype.exitDealField = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#dealDeclaration.
TrumplangListener.prototype.enterDealDeclaration = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#dealDeclaration.
TrumplangListener.prototype.exitDealDeclaration = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#dealAccess.
TrumplangListener.prototype.enterDealAccess = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#dealAccess.
TrumplangListener.prototype.exitDealAccess = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#assertStatement.
TrumplangListener.prototype.enterAssertStatement = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#assertStatement.
TrumplangListener.prototype.exitAssertStatement = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#importStatement.
TrumplangListener.prototype.enterImportStatement = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#importStatement.
TrumplangListener.prototype.exitImportStatement = function(ctx) {
};


// Enter a parse tree produced by TrumplangParser#selectiveImport.
TrumplangListener.prototype.enterSelectiveImport = function(ctx) {
};

// Exit a parse tree produced by TrumplangParser#selectiveImport.
TrumplangListener.prototype.exitSelectiveImport = function(ctx) {
};



exports.TrumplangListener = TrumplangListener;
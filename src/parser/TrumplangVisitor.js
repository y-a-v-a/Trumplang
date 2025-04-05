// Generated from Trumplang.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by TrumplangParser.

function TrumplangVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

TrumplangVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
TrumplangVisitor.prototype.constructor = TrumplangVisitor;

// Visit a parse tree produced by TrumplangParser#program.
TrumplangVisitor.prototype.visitProgram = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#statement.
TrumplangVisitor.prototype.visitStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#commentStatement.
TrumplangVisitor.prototype.visitCommentStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#variableDeclaration.
TrumplangVisitor.prototype.visitVariableDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#constantDeclaration.
TrumplangVisitor.prototype.visitConstantDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#dataType.
TrumplangVisitor.prototype.visitDataType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#functionDeclaration.
TrumplangVisitor.prototype.visitFunctionDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#blockStatement.
TrumplangVisitor.prototype.visitBlockStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#parameterList.
TrumplangVisitor.prototype.visitParameterList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#returnStatement.
TrumplangVisitor.prototype.visitReturnStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#functionCall.
TrumplangVisitor.prototype.visitFunctionCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#argumentList.
TrumplangVisitor.prototype.visitArgumentList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#ifStatement.
TrumplangVisitor.prototype.visitIfStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#elseIfStatement.
TrumplangVisitor.prototype.visitElseIfStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#elseStatement.
TrumplangVisitor.prototype.visitElseStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#whileLoop.
TrumplangVisitor.prototype.visitWhileLoop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#forLoop.
TrumplangVisitor.prototype.visitForLoop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#forEachLoop.
TrumplangVisitor.prototype.visitForEachLoop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#loopBreak.
TrumplangVisitor.prototype.visitLoopBreak = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#arrayDeclaration.
TrumplangVisitor.prototype.visitArrayDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#arrayElements.
TrumplangVisitor.prototype.visitArrayElements = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#assignmentStatement.
TrumplangVisitor.prototype.visitAssignmentStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#printStatement.
TrumplangVisitor.prototype.visitPrintStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#inputStatement.
TrumplangVisitor.prototype.visitInputStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#incrementStatement.
TrumplangVisitor.prototype.visitIncrementStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#decrementStatement.
TrumplangVisitor.prototype.visitDecrementStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#condition.
TrumplangVisitor.prototype.visitCondition = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#comparison.
TrumplangVisitor.prototype.visitComparison = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#expression.
TrumplangVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#term.
TrumplangVisitor.prototype.visitTerm = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#factor.
TrumplangVisitor.prototype.visitFactor = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#arrayAccess.
TrumplangVisitor.prototype.visitArrayAccess = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#dealField.
TrumplangVisitor.prototype.visitDealField = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#dealDeclaration.
TrumplangVisitor.prototype.visitDealDeclaration = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#dealAccess.
TrumplangVisitor.prototype.visitDealAccess = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#assertStatement.
TrumplangVisitor.prototype.visitAssertStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#importStatement.
TrumplangVisitor.prototype.visitImportStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by TrumplangParser#selectiveImport.
TrumplangVisitor.prototype.visitSelectiveImport = function(ctx) {
  return this.visitChildren(ctx);
};



exports.TrumplangVisitor = TrumplangVisitor;
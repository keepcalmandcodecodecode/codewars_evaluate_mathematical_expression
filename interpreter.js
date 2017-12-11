function SyntaxTreeNode() {
	this.vars = {};
	this.functions = {};
	this.leftNode = null;
	this.rightNode = null;
	this.value = null;
}

SyntaxTreeNode.prototype.calc = function () {
	if (this.leftNode instanceof SyntaxTreeNode) {
		this.leftNode = this.leftNode.calc();
	};
	if (this.value instanceof SyntaxTreeNode) {
		this.value = this.value.calc();
	};
	if (this.rightNode instanceof SyntaxTreeNode) {
		this.rightNode = this.rightNode.calc(); 
	};

	if (this.value == null) {
		if (this.leftNode == null && this.rightNode != null) {
			return this.rightNode;
		}
		else if (this.leftNode != null && this.rightNode == null) {
			return this.leftNode;
		}
	} else {
		if (this.leftNode == null && this.rightNode != null) {
			var node = new SyntaxTreeNode();
			node.leftNode = 0;
			node.rightNode = this.rightNode;
			node.value = this.value;
			return node.calc();
		}
		else if (this.leftNode != null && this.rightNode == null) {
			var node = new SyntaxTreeNode();
			node.leftNode = this.leftNode;
			node.rightNode = 0;
			node.value = this.value;
			return node.calc();
		}
	};

	switch (this.value) {
		case "+":
			return this.leftNode + this.rightNode;
			break;
		case "-":
			return this.leftNode - this.rightNode;
			break;
		case "/":
			return this.leftNode / this.rightNode;
			break;
		case "*":
			return this.leftNode * this.rightNode;
			break;
	};
}

function Interpreter() {
    this.vars = {};
    this.functions = {};
}

Interpreter.prototype.tokenize = function (program) {
    if (program === "")
        return [];

    var regex = /\s*(=>|[-+*\/\%=\(\)]|[0-9]*\.?[0-9]+)\s*/g;
    return program.split(regex).filter(function (s) { return !s.match(/^\s*$/); });
};

Interpreter.prototype.input = function(expr) {
    var tokens = this.tokenize(expr);
    var tree = [];
    var currentNode = new SyntaxTreeNode();
    var tokensLength = tokens.length
    for (var i = tokens.length - 1; i >= 0; i--) {
    	
    };
};

Interpreter.prototype.isNumber = function(token)  {
	return !isNaN(token)
};

Interpreter.prototype.isOperation = function(token) {
	return token === "+" || token === "-" || token === "/" || token === "*";
};

Interpreter.prototype.isNewNodeBegin = function(token) {
	return token === "(";
};

Interpreter.prototype.isNewNodeEnd = function(token) {
	return token === ")";
};

function calc(program) {
	var interpreter = new Interpreter();
	return interpreter.input(program);
};


module.exports = Interpreter;
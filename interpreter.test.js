const Interpreter = require('./interpreter');
var interpreter = new Interpreter();

test('check token is number', () => {
	expect(interpreter.isNumber('1')).toBe(true);
	expect(interpreter.isNumber('2')).toBe(true);
	expect(interpreter.isNumber('3')).toBe(true);
	expect(interpreter.isNumber('4')).toBe(true);
	expect(interpreter.isNumber('5')).toBe(true);
	expect(interpreter.isNumber('6')).toBe(true);
	expect(interpreter.isNumber('7')).toBe(true);
	expect(interpreter.isNumber('8')).toBe(true);
	expect(interpreter.isNumber('9')).toBe(true);
	expect(interpreter.isNumber('0')).toBe(true);
	expect(interpreter.isNumber('A')).toBe(false);
	expect(interpreter.isNumber('(')).toBe(false);
	expect(interpreter.isNumber(')')).toBe(false);
	expect(interpreter.isNumber('+')).toBe(false);
	expect(interpreter.isNumber('-')).toBe(false);
	expect(interpreter.isNumber('/')).toBe(false);
	expect(interpreter.isNumber('*')).toBe(false);
});

test('check token is operation', () => {
	expect(interpreter.isOperation('0')).toBe(false);
	expect(interpreter.isOperation('A')).toBe(false);
	expect(interpreter.isOperation('(')).toBe(false);
	expect(interpreter.isOperation(')')).toBe(false);
	expect(interpreter.isOperation('+')).toBe(true);
	expect(interpreter.isOperation('-')).toBe(true);
	expect(interpreter.isOperation('/')).toBe(true);
	expect(interpreter.isOperation('*')).toBe(true);
});

test('check token is new node beginning', () => {
	expect(interpreter.isNewNodeBegin('(')).toBe(true);
	expect(interpreter.isNewNodeBegin(')')).toBe(false);
	expect(interpreter.isNewNodeBegin('0')).toBe(false);
	expect(interpreter.isNewNodeBegin('A')).toBe(false);
});

test('check token is node ending', () => {
	expect(interpreter.isNewNodeEnd('(')).toBe(false);
	expect(interpreter.isNewNodeEnd(')')).toBe(true);
	expect(interpreter.isNewNodeEnd('0')).toBe(false);
	expect(interpreter.isNewNodeEnd('A')).toBe(false);
});

test('check simple programs with one operation and two operands', () => {
	expect(interpreter.input("1+1")).toBe(2);
	expect(interpreter.input("1-1")).toBe(0);
	expect(interpreter.input("20/10")).toBe(2);
	expect(interpreter.input("7*9")).toBe(63);
});
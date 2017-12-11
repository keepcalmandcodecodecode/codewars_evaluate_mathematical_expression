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
	expect(interpreter.isNumber('0')).toBe(false);
	expect(interpreter.isNumber('A')).toBe(false);
	expect(interpreter.isNumber('(')).toBe(false);
	expect(interpreter.isNumber(')')).toBe(false);
	expect(interpreter.isNumber('+')).toBe(false);
	expect(interpreter.isNumber('-')).toBe(false);
	expect(interpreter.isNumber('/')).toBe(false);
	expect(interpreter.isNumber('*')).toBe(false);
});
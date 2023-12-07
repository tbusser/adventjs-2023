import solver from './solution';

/* ========================================================================== */

describe('Turn the parentheses around', () => {
	test('it should handle a message with no parentheses', () => {
		expect(solver('abc')).toBe('abc');
	});
	test('it should handle a message with one level of parentheses', () => {
		expect(solver('(abc)')).toBe('cba');
		expect(solver('a(bcd)')).toBe('adcb');
		expect(solver('a (bcd)')).toBe('a dcb');
		expect(solver('(abc)d')).toBe('cbad');
		expect(solver('(abc) d')).toBe('cba d');
	});
	test('it should handle a message with nested parentheses', () => {
		expect(solver('(a(bcd)e)')).toBe('ebcda');
		expect(solver('((abcd)e)')).toBe('eabcd');
		expect(solver('(a(bcde))')).toBe('bcdea');
	});
	test('it should handle a message with two sets of parentheses', () => {
		expect(solver('(abc) (def)')).toBe('cba fed');
		expect(solver('(abc)(def)')).toBe('cbafed');
	});
});

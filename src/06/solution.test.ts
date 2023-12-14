import solver from './solution';

/* ========================================================================== */

describe('The Reindeer on trial', () => {
	test('it should handle movements all in the same direction', () => {
		expect(solver('>>>>>')).toBe(5);
		expect(solver('<<<<<')).toBe(5);
		expect(solver('*****')).toBe(5);
	});
	test('it should handle movements with alternating directions', () => {
		expect(solver('<>>><')).toBe(1);
		expect(solver('>>>><')).toBe(3);
		expect(solver('><><')).toBe(0);
	});
	test('it should handle only asterisks', () => {
		expect(solver('***')).toBe(3);
	});
	test('it should handle mixed movements', () => {
		expect(solver('**><')).toBe(2);
		expect(solver('>>>**')).toBe(5);
		expect(solver('>>><*')).toBe(3);
	});
	test('it should handle an empty string', () => {
		expect(solver('')).toBe(0);
	});
});

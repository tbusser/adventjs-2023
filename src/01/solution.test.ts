import solver from './solution';

/* ========================================================================== */

describe('First repeated gift', () => {
	test('it should return the first gift that is repeated', () => {
		expect(solver([2, 1, 3, 5, 3, 2])).toBe(3);
		expect(solver([5, 1, 5, 1])).toBe(5);
	});
	test('it should return -1 if no gift is repeated', () => {
		expect(solver([1, 2, 3, 4])).toBe(-1);
	});
});

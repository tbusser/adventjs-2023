import solver from './solution';

/* ========================================================================== */

describe('Sorting the warehouse', () => {
	test('it should properly organize the gifts', () => {
		expect(solver('76a11b')).toBe('[a]{a}{a}(aaaaaa){b}(b)');
	});
});

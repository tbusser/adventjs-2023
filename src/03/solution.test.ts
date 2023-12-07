import solver from './solution';

/* ========================================================================== */

describe('We start the factory', () => {
	test('it should return nothing when both sequences are the same', () => {
		expect(solver('abcd', 'abcd')).toEqual('');
	});
	test('it should return the last step when the modifier has an extra step added', () => {
		expect(solver('abcd', 'abcde')).toEqual('e');
	});
	test('it should return the step from the original sequence when it has been deleted', () => {
		expect(solver('abcdef', 'abcef')).toEqual('d');
	});
	test('it should return the step from the modified sequence when it has been added', () => {
		expect(solver('abcef', 'abcdef')).toEqual('d');
	});
});

import solver from './solution';

/* ========================================================================== */

describe('We start the factory', () => {
	test('it should return the gifts that can be created', () => {
		expect(new Set(solver(['tren', 'oso', 'pelota'], 'tronesa'))).toEqual(
			new Set(['tren', 'oso'])
		);
		expect(new Set(solver(['juego', 'puzzle'], 'jlepuz'))).toEqual(
			new Set(['puzzle'])
		);
	});
	test('it should return an empty array if no gift can be created', () => {
		expect(solver(['libro', 'ps5'], 'psli')).toEqual([]);
	});
});

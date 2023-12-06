export default function manufacture(gifts: string[], materials: string) {
	const p = new Set(materials.split(''));

	return gifts.filter(g => g.split('').every(l => p.has(l)));
}

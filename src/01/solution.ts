export default function findFirstRepeated(gifts: number[]): number {
	const visitedNumbers = new Set<number>();

	for (const gift of gifts) {
		if (visitedNumbers.has(gift)) {
			return gift;
		}

		visitedNumbers.add(gift);
	}

	return -1;
}

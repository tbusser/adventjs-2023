export default function decode(message: string): string {
	// Keeps track of the nesting level.
	let level = 0;
	// Keeps track of the result for each level.
	const result: string[] = [];

	for (const letter of message) {
		result[level] ??= '';

		switch (letter) {
			case '(':
				// Go a level deeper.
				level++;
				break;

			case ')':
				// The level is done, so reverse the string and add it to the
				// previous level.
				result[level - 1] =
					result[level - 1] + result[level].split('').reverse().join('');
				result[level] = '';
				level--;
				break;

			default:
				// It's a normal character, add it to the current level.
				result[level] = result[level] + letter;
				break;
		}
	}

	// Return the result of the first level.
	return result[0];
}

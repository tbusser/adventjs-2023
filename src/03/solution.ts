export default function findNaughtyStep(
	original: string,
	modified: string
): string {
	// When they're the same, there's no naughty step
	if (original === modified) {
		return '';
	}

	// Loop over all the steps in the original sequence.
	for (let i = 0; i < original.length; i++) {
		// Check if the step at the same index in the modified sequence
		// is different.
		if (original[i] !== modified[i]) {
			// When the length of the original sequence is longer it means the
			// step has been removed. When the modified sequence is longer it
			// means the step has been added.
			return original.length > modified.length ? original[i] : modified[i];
		}
	}

	// We've reached the end of the original sequence, this means the modified
	// sequence has been given an extra step at the end.
	return modified[modified.length - 1];
}

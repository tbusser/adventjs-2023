export default function maxDistance(movements) {
	const moves = movements.split('');
	const stepsToLeft = moves.filter(step => step === '<').length;
	const stepsToRight = moves.filter(step => step === '>').length;
	const jokers = moves.filter(move => move === '*').length;

	if (stepsToLeft > stepsToRight) {
		return stepsToLeft + jokers - stepsToRight;
	} else {
		return stepsToRight + jokers - stepsToLeft;
	}
}

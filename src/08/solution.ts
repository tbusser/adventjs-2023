export default function organizeGifts(gifts: string) {
	const giftsArray = gifts.split(/(\d+\w)/).filter(part => part !== '');

	return giftsArray
		.map(gift => {
			const [amount, symbol] = gift.split(/(\d+)/).filter(part => part !== '');
			const giftCount = Number(amount);

			const totalBoxes = Math.floor(giftCount / 10);
			const palletCount = Math.floor(totalBoxes / 5);
			const boxCount = totalBoxes - 5 * palletCount;
			const singlesCount = giftCount % 10;

			const pallets = palletCount === 0 ? '' : `[${symbol}]`.repeat(palletCount);
			const boxes = boxCount === 0 ? '' : `{${symbol}}`.repeat(boxCount);
			const singles = singlesCount === 0 ? '' : `(${symbol.repeat(singlesCount)})`;

			return `${pallets}${boxes}${singles}`;
		})
		.join('');
}

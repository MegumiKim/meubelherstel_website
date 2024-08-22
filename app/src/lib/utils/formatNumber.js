//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat

export default function formatNumber(number, displayOption = 'short') {
	return new Intl.NumberFormat('en-US', {
		maximumFractionDigits: 1,
		notation: 'compact',
		compactDisplay: displayOption
	})
		.format(number)
		.toLocaleLowerCase();
}

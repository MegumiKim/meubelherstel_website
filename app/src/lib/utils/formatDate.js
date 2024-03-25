export function formatDate(rawDate) {
	const options = {
		year: 'numeric',
		month: 'short'
	};
	const date = new Date(rawDate);
	return date.toLocaleDateString('en-US', options);
}

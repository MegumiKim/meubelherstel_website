// export let imageURL;
export let defaultConfig = {
	crop: 'entropy',
	quality: 80,
	fit: 'max',
	auto: 'format',
	width: 1920
};

export default function CustomUrlBuilder(imageURL, config = defaultConfig) {
	const url = new URL(imageURL);
	const screenSizes = [1920, 1600, 1200, 900, 700, 480];

	const newUrl = (width) => {
		const updatedConfig = { ...config, width };
		const params = new URLSearchParams(updatedConfig).toString();

		return `${url.origin}${url.pathname}?${params}`;
	};

	//Create SrcSet and Sizes
	const srcSet = screenSizes.map((size) => `${newUrl(size)} ${size}w`).join(', ');
	const sizes =
		screenSizes.map((size) => `(max-width: ${size}px) ${size}px`).join(', ') +
		`, ${screenSizes[0]}px`;

	return {
		imageUrl: newUrl(1920), // Default image URL for src attribute
		srcSet,
		sizes
	};
}

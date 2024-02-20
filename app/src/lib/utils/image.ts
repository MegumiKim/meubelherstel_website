import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity';

export let data;
export let alt;

const builder = imageUrlBuilder(client);

// Function to create image attributes
export function createImageAttributes(source) {
	const screenSizes = [1920, 1600, 1200, 900, 700, 480];

	const urlFor = (source, width) =>
		builder.image(source).auto('format').fit('max').crop('entropy').quality(80).width(width).url();

	const srcSet = screenSizes.map((size) => `${urlFor(source, size)} ${size}w`).join(', ');
	const sizes =
		screenSizes.map((size) => `(max-width: ${size}px) ${size}px`).join(', ') +
		`, ${screenSizes[0]}px`;

	return {
		imageUrl: urlFor(source, 1920), // Default image URL for src attribute
		srcSet,
		sizes
	};
}

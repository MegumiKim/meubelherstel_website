class TransformModel {
	image;
	transformed = [];

	#transforms;
	#defaultOptions;

	constructor(image, transforms = null, defaultOptions = []) {
		// This is where it would be nice to have images
		if (!image) {
			throw new Error('An unknown image object was used.');
		}

		// TODO: Check if is URL type and create if not
		this.image = new URL(image);

		this.#transforms = transforms;
		this.#defaultOptions = defaultOptions;
		this.transform(transforms);
	}

	transform(transforms) {
		if (!transforms) {
			return null;
		}

		const images = [];
		transforms.forEach((transform) => {
			transform = { ...this.#defaultOptions, ...transform };
			transform.url = this.buildTransform(this.image, transform);
			images.push(transform);
		});

		this.transformed = images;
	}

	buildTransform(url, transform) {
		// Handle aspect ratio
		if (transform.ar && typeof transform.ar === 'number') {
			if (transform.w && !transform.h) {
				transform.h = Math.round(transform.w / transform.ar);
				delete transform.ar;
			} else if (transform.h && !transform.w) {
				transform.w = Math.round(transform.h * transform.ar);
				delete transform.ar;
			}
		}

		const searchParams = new URLSearchParams(transform).toString();
		return `${url.origin}${url.pathname}?${searchParams}`;
	}

	srcset() {
		const widths = {};

		this.transformed.forEach((image) => {
			const width = image.w || null;

			if (width && !widths[width]) {
				widths[width] = `${image.url} ${width}w`;
			}
		});

		return Object.values(widths).join(', ');
	}

	src(index = 0) {
		return this.transformed[index].url;
	}

	width(index = 0) {
		return this.transformed[index].w;
	}

	height(index = 0) {
		return this.transformed[index].h;
	}
}

/**
 * @param null  asset
 * @param null  transforms
 * @param array defaultOptions
 *
 * @return TransformModel
 *
 */
export function transformImage(imageUrl, transforms = null, defaultOptions = []) {
	if (!imageUrl) {
		return null;
	}

	return new TransformModel(imageUrl, transforms, defaultOptions);
}

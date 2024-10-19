import { getSiteSetting } from '$lib/queries/sanity';

export async function load({ url }) {
	const siteSettings = await getSiteSetting();

	if (!siteSettings) {
		return { status: 404 };
	}

	return {
		siteSettings,
		url: url.pathname
	};
}

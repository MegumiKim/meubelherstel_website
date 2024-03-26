import { getSingleWorkBySlug } from '$lib/queries/sanity';

export async function load({ params }) {
	const data = await getSingleWorkBySlug(params.slug);
	if (!data) {
		return { status: 404 };
	}
	return data;
}

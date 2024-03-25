import { getAllWorks } from '$lib/queries/sanity';

export async function load() {
	const data = await getAllWorks();
	// console.log(data);
	if (!data) {
		return { status: 404 };
	}
	return { data };
}

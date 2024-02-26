import { getContact } from '$lib/queries/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
	const data = await getContact();
	// console.log(data);

	if (data) {
		return {
			data
		};
	}

	throw error(404, 'Not found');
}) satisfies PageLoad;

import { getContact } from '$lib/utils/sanity';
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

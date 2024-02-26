import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getProject } from '$lib/queries/sanity';

export const ssr = true;

export const load = (async ({ params }) => {
	const data = await getProject(params.slug);
	if (data) return data;

	throw error(404, 'Not found');
}) satisfies PageLoad;

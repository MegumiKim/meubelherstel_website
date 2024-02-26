// import { error } from '@sveltejs/kit';
// import type { PageLoad } from './$types';
import { getProjects } from '$lib/queries/sanity';

// export const load = (async () => {
// 	const data = await getProjects();
// 	console.log(data);

// 	if (data) {
// 		console.log('data', data);

// 		// return data;
// 	}

// 	throw error(404, 'Not found');
// }) satisfies PageLoad;

export async function load() {
	const data = await getProjects();
	// console.log(projects);
	if (!data) {
		return console.log('err');
	}
	return { data };
}

import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import regions from '$lib/content/regions.json';
import posters from '$lib/content/posters.json';

export const csr = true;
export const prerender = true;

export const load: PageLoad = ({ params }) => {
	const entry = Object.values(regions).find(
		(region) => region.link === `/learn-more/${params.slug}`
	);

	if (entry) {
		return {
			...entry.pageContent
			// posters: posters[params.slug as keyof typeof posters]
		};
	}

	throw error(404, 'Not found');
};

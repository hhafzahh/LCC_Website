import type { RegionsData } from '$lib/types/learn-more';
import regions from '$lib/content/regions.json';
import sections from '$lib/content/learn-more-sections.json';
import type { SectionsData } from '$lib/types/section';

export const csr = true;
export const prerender = true;

export function load() {
	return {
		regions: regions as RegionsData,
		sections: sections as SectionsData
	};
}

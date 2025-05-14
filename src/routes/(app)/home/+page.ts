import sections from '$lib/content/home-sections.json';
import type { SectionsData } from '$lib/types/section';

export const csr = true;
export const prerender = true;

export function load() {
	return {
		sections: sections as SectionsData
	};
}

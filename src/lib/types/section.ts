export interface Section {
	imagePath?: string;
	imageAlt?: string;
	title: string;
	subtitle: string;
	content?: string;
	homepage?: boolean;
}

export type SectionsData = Section[];

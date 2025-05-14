import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			screens: {
				xs: '448px',
				sm: '640px',
				md: '768px',
				lg: '1024px'
			},
			gridColumn: {
				'span-13': 'span 13 / span 13',
				'span-16': 'span 16 / span 16',
				'span-17': 'span 17 / span 17',
				'span-21': 'span 21 / span 21',
				'span-26': 'span 26 / span 26',
				'span-28': 'span 28 / span 28'
			},
			gridColumnStart: {
				'28': '28'
			},
			gridTemplateColumns: {
				'13': 'repeat(13, minmax(0, 1fr))',
				'16': 'repeat(16, minmax(0, 1fr))',
				'17': 'repeat(17, minmax(0, 1fr))',
				'21': 'repeat(21, minmax(0, 1fr))',
				'26': 'repeat(26, minmax(0, 1fr))',
				'33': 'repeat(33, minmax(0, 1fr))'
			},

			colors: {
				'dark-blue': '#2D3142',
				'brand-orange': '#EF8354',
				'light-gray': '#4F5D74',
				'light-orange': '#FDF4E0'
			}
		}
	},

	plugins: []
} as Config;

import { redirect } from '@sveltejs/kit';

export function load() {
	// const targetDate = new Date('2025-02-12T14:30:00+08:00');
	// const currentDate = new Date();

	// if (currentDate < targetDate) {
	// 	throw redirect(307, '/countdown');
	// } else {
	throw redirect(308, '/home');
	// }
}

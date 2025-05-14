// import { redirect, type Handle } from '@sveltejs/kit';

// export const handle: Handle = async ({ event, resolve }) => {
// 	// Get the current path
// 	const path = event.url.pathname;

// 	// List of paths that should not redirect
// 	const allowedPaths = ['/countdown'];

// 	// If the path is not in allowedPaths, redirect to /countdown
// 	const targetDate = new Date('February 01, 2025 14:30:00 GMT+08:00');
// 	const currentDate = new Date();

// 	// Only redirect if current time is before target date
// 	if (currentDate < targetDate) {
// 		// If the path is not in allowedPaths, redirect to /countdown
// 		if (!allowedPaths.some((allowedPath) => path.startsWith(allowedPath))) {
// 			throw redirect(307, '/countdown');
// 		}
// 	}

// 	return await resolve(event);
// };

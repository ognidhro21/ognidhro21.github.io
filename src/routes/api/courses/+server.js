// +server.js
import { courses } from '$lib/courses';
export const GET = async () => {
	const titles = courses.map((c) => c.titles);
	let ok = [];
	titles.forEach((element) => {
		element.forEach((el) => {
			ok = [...ok, el];
		});
	});
	const responseOptions = {
		status: 200,
		headers: {
			'content-type': 'application/json'
		}
	};

	return new Response(JSON.stringify(ok), responseOptions);
};

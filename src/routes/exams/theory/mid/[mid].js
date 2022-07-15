import fs from 'fs';
export function get({ params }) {
	// we could get the dynamic slug from the parameter of get.
	const { mid } = params;
	let fileName;
	if (mid) {
		fileName = mid;
	} else {
		fileName = 'L1S2';
	}
	const src = `src/data/schedules/exams/theory/${fileName}.json`;
	// get the json content
	const content = fs.readFileSync(src, 'utf8');
	// parse the json content
	const json = JSON.parse(content);

	// return the json content
	return {
		status: 200,
		headers: {},
		body: { json }
	};
}

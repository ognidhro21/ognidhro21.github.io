import fs from 'fs';
export function GET({ params }) {
	// we could GET the dynamic slug from the parameter of GET.
	const { mid } = params;
	let fileName;
	if (mid) {
		fileName = mid;
	} else {
		fileName = 'L1S2';
	}
	const src = `src/data/schedules/exams/theory/${fileName}.json`;
	// GET the json content
	const content = fs.readFileSync(src, 'utf8');
	// parse the json content
	const json = JSON.parse(content);

	// return the json content
	return {
		body: json
	};
}

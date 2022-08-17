import fs from 'fs';
export function GET({ params }) {
	// we could GET the dynamic slug from the parameter of GET.
	const { final } = params;
	let fileName;
	if (final) {
		fileName = final;
	} else {
		fileName = 'L1S2';
	}
	const src = `src/data/schedules/exams/theory/${fileName}.json`;
	// GET the json content
	const content = fs.readFileSync(src, 'utf8');
	// parse the json content
	const json = JSON.parse(content);

	return {
		body: json
	};
}

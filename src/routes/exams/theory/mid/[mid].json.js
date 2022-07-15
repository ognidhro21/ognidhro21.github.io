import fs from 'fs';
export function get({ params }) {
	// we could get the dynamic slug from the parameter of get.
	const { mid } = params;

	const src = `src/data/schedules/exams/theory/${mid}.json`;
	// get the json content
	const content = fs.readFileSync(src, 'utf8');
	// parse the json content
	const json = JSON.parse(content);

	const body = {
		name: json.name,
		detailedname: json.detailedname,
		...json.schedules.mid
	};

	console.log(body);
	// return the json content
	return { body };
}

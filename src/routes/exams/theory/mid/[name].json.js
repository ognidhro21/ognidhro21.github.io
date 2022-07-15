// mid
import fs from 'fs';
export function get({ params }) {
	// we could get the dynamic slug from the parameter of get.
	const { name } = params;
	const src = `src/data/schedules/exams/theory/${name}.json`;
	// get the json content
	const content = fs.readFileSync(src, 'utf8');
	// parse the json content
	const json = JSON.parse(content);
	const body = {
		name: json.name,
		detailedname: json.detailedname,
		examDetails: json.schedules.mid
	};
	console.log(content);
	// return the json content
	return { body };
}

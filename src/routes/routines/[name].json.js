import fs from 'fs';
export function get({ params }) {
	// we could get the dynamic slug from the parameter of get.
	const { name } = params;

	const src = `src/data/schedules/routines/${name}.json`;
	// get the json content
	const content = fs.readFileSync(src, 'utf8');
	// parse the json content
	const json = JSON.parse(content);
	// return the json content
	return { body: json };
}

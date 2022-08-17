import fs from 'fs';
export function GET({ params }) {
	// we could GET the dynamic slug from the parameter of GET.
	const { name } = params;

	const src = `src/data/schedules/routines/${name}.json`;
	// GET the json content
	const content = fs.readFileSync(src, 'utf8');
	// parse the json content
	const json = JSON.parse(content);
	// return the json content
	return { body: json };
}

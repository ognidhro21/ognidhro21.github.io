import fs from 'fs';
export function get() {
	// we could get the dynamic slug from the parameter of get.
	const src = `src/data/schedules/exams/theory/L1S2.json`;
	// get the json content
	const content = fs.readFileSync(src, 'utf8');
	// parse the json content
	const json = JSON.parse(content);
	const jsonbody = {
		name: json.name,
		detailedname: json.detailedname,
		exams: json.schedules.final
	};

	// return the json content
	return { body: jsonbody };
}

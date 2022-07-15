import fs from 'fs';
export async function get() {
	// our markdown files lie in src/posts.
	let postTitles = fs
		.readdirSync(`src/data/schedules/routines`)
		.map((fileName) => fileName.replace('.json', ''));
	let names = [];
	postTitles.forEach((element) => {
		const src = `src/data/schedules/routines/${element}.json`;
		// get the json content
		const content = fs.readFileSync(src, 'utf8');
		// parse the json content
		const json = JSON.parse(content);
		const { name, detailedname } = json;
		names = [...names, { name, detailedname }];
	});

	let body = names;
	return { body };
}

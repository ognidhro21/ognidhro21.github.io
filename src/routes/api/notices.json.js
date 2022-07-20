import fs from 'fs';
export async function get() {
	// our markdown files lie in src/posts.
	let titles = fs.readdirSync(`src/data/notices`).map((fileName) => fileName.replace('.json', ''));
	let notices = [];
	titles.forEach((element) => {
		const src = `src/data/notices/${element}.json`;
		// get the json content
		const content = fs.readFileSync(src, 'utf8');
		// parse the json content
		const json = JSON.parse(content);
		notices = [...notices, json];
	});

	let body = notices;
	return { body };
}

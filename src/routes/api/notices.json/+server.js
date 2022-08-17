import { json as json$1 } from '@sveltejs/kit';
import fs from 'fs';
export async function GET() {
	// our markdown files lie in src/posts.
	let titles = fs.readdirSync(`src/data/notices`).map((fileName) => fileName.replace('.json', ''));
	let notices = [];
	titles.forEach((element) => {
		const src = `src/data/notices/${element}.json`;
		// GET the json content
		const content = fs.readFileSync(src, 'utf8');
		// parse the json content
		const json = JSON.parse(content);
		notices = [...notices, json];
	});

	let body = notices;

	// Suggestion (check for correctness before using):
	return json$1(body);
	//return { body };
}

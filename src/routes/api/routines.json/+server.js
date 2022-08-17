import { json as json$1 } from '@sveltejs/kit';
import fs from 'fs';
export async function GET() {
	// our markdown files lie in src/posts.
	let postTitles = fs
		.readdirSync(`src/data/schedules/routines`)
		.map((fileName) => fileName.replace('.json', ''));
	let names = [];
	postTitles.forEach((element) => {
		const src = `src/data/schedules/routines/${element}.json`;
		// GET the json content
		const content = fs.readFileSync(src, 'utf8');
		// parse the json content
		const json = JSON.parse(content);
		const { name, detailedname } = json;
		names = [...names, { name, detailedname }];
	});

	let body = names;
	//throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
	// Suggestion (check for correctness before using):
	return json$1(body);
	//return { body };
}

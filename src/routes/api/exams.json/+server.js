import { json as json$1 } from '@sveltejs/kit';
import fs from 'fs';
export async function GET() {
	// our markdown files lie in src/posts.
	let postTitles = fs
		.readdirSync(`src/data/schedules/exams/theory`)
		.map((fileName) => fileName.replace('.json', ''));
	let exams = [];
	postTitles.forEach((element) => {
		const src = `src/data/schedules/exams/theory/${element}.json`;
		// GET the json content
		const content = fs.readFileSync(src, 'utf8');
		// parse the json content
		const json = JSON.parse(content);
		const { name, detailedname } = json;
		exams = [...exams, { name, detailedname }];
	});

	let body = exams;
	// Suggestion (check for correctness before using):
	return json$1(body);
}

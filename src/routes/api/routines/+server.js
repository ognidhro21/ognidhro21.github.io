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
	const responseOptions = {
		status: 200,
		headers: {
			'content-type': 'application/json'
		}
	};
	return new Response(JSON.stringify(body), responseOptions);
}

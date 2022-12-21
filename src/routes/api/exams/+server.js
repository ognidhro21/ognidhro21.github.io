export async function GET() {
	const responseOptions = {
		status: 200,
		headers: {
			'content-type': 'application/json'
		}
	};
	let pS = import.meta.glob('$lib/data/schedules/exams/theory/*.json');
	const iterable = Object.entries(pS);
	let exams = await Promise.all(
		iterable.map(async ([path, resolver]) => {
			const res = await resolver();
			const { name, detailedname } = res;
			return { name, detailedname };
		})
	);
	exams.sort((a, b) => {
		if (a.name < b.name) 1;
		else if (a.name > b.name) return -1;
		return 0;
	});
	return new Response(JSON.stringify(exams), responseOptions);
}

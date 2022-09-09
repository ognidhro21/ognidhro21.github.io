export async function GET() {
	const responseOptions = {
		status: 200,
		headers: {
			'content-type': 'application/json'
		}
	};
	let pS = import.meta.glob('../../../data/schedules/exams/theory/*.json');
	const iterable = Object.entries(pS);
	const exams = await Promise.all(
		iterable.map(async ([path, resolver]) => {
			const res = await resolver();
			const { name, detailedname } = res;
			return { name, detailedname };
		})
	);
	return new Response(JSON.stringify(exams), responseOptions);
}

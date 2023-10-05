export async function GET() {
	const responseOptions = {
		status: 200,
		headers: {
			'content-type': 'application/json'
		}
	};
	let classes = await import('$lib/data/schedules/routines/L3S1.json');

	return new Response(JSON.stringify(classes), responseOptions);
}

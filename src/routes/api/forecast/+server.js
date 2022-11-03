/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const responseOptions = {
		status: 200,
		headers: {
			'content-type': 'application/json'
		}
	};
	const rawData = await fetch(
		'https://raw.githubusercontent.com/imranmollajoy/bring-your-umbrella/master/data/data.json'
	);
	const forecast = await rawData.json();
	return new Response(JSON.stringify(forecast), responseOptions);
}

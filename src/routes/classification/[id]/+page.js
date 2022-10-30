/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const results = await import(`../../../data/results/${params.id}.json`);
	return { results };
}

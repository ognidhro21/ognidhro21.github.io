/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const results = await import(`../../../lib/data/results/${params.id}.json`);
	return { results };
}

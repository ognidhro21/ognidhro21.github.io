export async function load({ params }) {
	const slug = params.name;

	const routine = await import(`../../../lib/data/schedules/debug/${slug}.json`);

	return {
		routine
	};
}

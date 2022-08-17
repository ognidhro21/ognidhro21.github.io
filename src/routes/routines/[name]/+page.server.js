/**
 * @type {import("@svelte/kit").Load}
 */
export async function load({ params }) {
	const slug = params.name;

	const routine = await import(`../../../data/schedules/routines/${slug}.json`);
	return {
		routine
	};
}

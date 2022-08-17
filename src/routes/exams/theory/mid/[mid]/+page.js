/**
 * @type {import("@svelte/kit").Load}
 */
export async function load({ params }) {
	const slug = params.mid;

	const json = await import(`../../../../../data/schedules/exams/theory/${slug}.json`);
	return {
		json
	};
}

/**
 * @type {import("@svelte/kit").Load}
 */
export async function load({ params }) {
	const slug = params.final;
	const json = await import(`../../../../../lib/data/schedules/exams/theory/${slug}.json`);
	return {
		json
	};
}

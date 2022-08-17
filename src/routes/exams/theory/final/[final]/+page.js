export async function load({ params }) {
	const slug = params.final;
	const json = await import(`../../../../../data/schedules/exams/theory/${slug}.json`);
	return {
		json
	};
}

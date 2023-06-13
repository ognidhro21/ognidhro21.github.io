/** @type {import('./$types').PageLoad} */
export async function load() {
	const allClasses = await import.meta.glob('../../lib/data/results/*.json');
	const iterableClasses = Object.entries(allClasses);

	let results = await Promise.all(
		iterableClasses.map(async ([path, resolver]) => {
			const { info } = await resolver();
			return { ...info };
		})
	);
	results.sort((a, b) => {
		if (a.id < b.id) return 1;
		if (a.id > b.id) return -1;
		return 0;
	});
	return { results };
}

/** @type {import('./$types').PageLoad} */
export async function load() {
	const allClasses = await import.meta.glob('../../lib/data/results/*.json');
	const iterableClasses = Object.entries(allClasses);

	const results = await Promise.all(
		iterableClasses.map(async ([path, resolver]) => {
			const { info } = await resolver();
			return { ...info };
		})
	);
	return { results };
}

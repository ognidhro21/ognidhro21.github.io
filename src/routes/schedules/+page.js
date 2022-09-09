/**
 * @type {import("@svelte/kit").Load}
 */
export async function load({ url }) {
	const routinesList = await fetch(`${url.origin}/api/routines`).then((res) => res.json());
	const examsList = await fetch(`${url.origin}/api/exams`).then((res) => res.json());
	return {
		routinesList,
		examsList
	};
}

/**
 * @type {import("@svelte/kit").Load}
 */
export async function load({ fetch }) {
	const routinesList = await fetch(`/api/routines`).then((res) => res.json());
	const examsList = await fetch(`/api/exams`).then((res) => res.json());
	return {
		routinesList,
		examsList
	};
}

/**
 * @type {import("@svelte/kit").Load}
 */
export async function load({ fetch }) {
	const routinesList = await fetch(`/api/routines.json`).then((res) => res.json());
	const examsList = await fetch(`/api/exams.json`).then((res) => res.json());
	return {
		routinesList,
		examsList
	};
}

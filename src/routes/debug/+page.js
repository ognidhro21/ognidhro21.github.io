export const load = async ({ url }) => {
	const routinesRes = await fetch(`${url.origin}/api/routines`);
	const routinesList = await routinesRes.json();
	const examsRes = await fetch(`${url.origin}/api/exams`);
	const examsList = await examsRes.json();
	return {
		routinesList,
		examsList
	};
};

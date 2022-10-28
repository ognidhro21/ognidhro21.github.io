export const load = async ({ url }) => {
	const response = await fetch(`${url.origin}/api/materials`);
	const materialsList = await response.json();
	return {
		materialsList
	};
};

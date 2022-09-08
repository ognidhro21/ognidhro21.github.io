export const load = async ({ url }) => {
	const response = await fetch(`${url.origin}/api/courses`);

	const courses = await response.json();

	let res = [];
	while (courses.length !== 0) {
		let list = courses.shift();
		let arr = [list];
		for (let i = 0; i < courses.length; i++) {
			if (courses[i].id === list.id) {
				arr = arr.concat(courses.splice(i, 1));
				i--;
			}
		}
		res.push(arr);
	}
	return {
		res
	};
};

/* eslint-disable no-unused-vars */
export const courses = [
	//============================ACM============================
	{
		code: 'acm',
		name: 'Agricultural Chemistry',
		titles: [{ id: 'L1S2', title: 'Organic Chemistry' }]
	},
	//============================AES============================
	{
		code: 'aes',
		name: 'Agricultural Economics and Sociology',
		titles: [{ id: 'L1S2', title: 'Production Economics and Marketing' }]
	},
	//============================AGB============================
	{
		code: 'agb',
		name: 'Agricutural Botany',
		titles: [
			{ id: 'L2S1', title: 'Plant Morphology and Taxonomy' },
			{ id: 'L2S2', title: 'Plant Anatomy and Embryology' },
			{ id: 'L3S1', title: 'Principles of Plant Physiology' },
			{ id: 'L4S1', title: 'Applied Plant Physiology' },
			{ id: 'L4S2', title: 'Plant Ecology and Environment' }
		]
	},
	//============================AGE============================
	{
		code: 'age',
		name: 'Agricultural Engineering',
		titles: [{ id: 'L1S2', title: 'Fundamentals of Agricultural Engineering' }]
	},
	//============================AGR============================
	{
		code: 'agr',
		name: 'Agronomy',
		titles: [
			{ id: 'L1S2', title: 'Principle and Practices of Agronomy' },
			{ id: 'L2S2', title: 'Seeds Science and Technology' },
			{ id: 'L2S2', title: 'Weed Science' }
		]
	},
	//============================ARD============================
	{
		code: 'ard',
		title: 'Agricultural Extenstion and Rural Development',
		titles: [{ id: 'L2S1', title: 'Fundamentals of Agricultural Extension' }]
	},
	//============================BCM============================
	{
		code: 'bcm',
		name: 'Biomolecular Chemistry',
		titles: [
			{ id: 'L1S2', title: 'Chemistry of Biomolecules' },
			{ id: 'L2S1', title: 'Metabolism of Biomolecules' }
		]
	},
	//============================ENT============================
	{
		code: 'ent',
		name: 'Entomology',
		titles: [
			{ id: 'L2S1', title: 'Introduction to Entomology' },
			{ id: 'L2S2', title: 'Systematic Entomology' }
		]
	},
	//============================HRT============================
	{
		code: 'hrt',
		name: 'Horticulture',
		titles: [{ id: 'L1S2', title: 'Ornamental Horticulture' }]
	},
	//============================PLP============================
	{
		code: 'plp',
		name: 'Plant Pathology',
		titles: [
			{ id: 'L2S1', title: 'Aquaintance with Plant Pathogens-I' },
			{ id: 'L2S2', title: 'Aquaintance with Plant Pathogens-II' }
		]
	},
	//============================SSC============================
	{
		code: 'ssc',
		name: 'Soil Science',
		titles: [{ id: 'L1S2', title: 'Soil Survey and Classification' }]
	},
	//============================STT============================
	{
		code: 'stt',
		name: 'Statistics',
		titles: [
			{ id: 'L2S1', title: 'Fundamentals of Statistics' },
			{ id: 'L2S2', title: 'Experimental Design and Data Analysis' }
		]
	}
];

function getCourseTitle(code, id) {
	// make code lowercase
	// in case input is not lower case
	code = code.toLowerCase();

	const course = courses.find((c) => c.code === code);
	if (!course) return 'Course not found, add it';
	const title = course.titles.find((t) => t.id === id);
	if (!title) return 'Course title not found, add it';
	return title.title;
}

function getCourseName(code) {
	// make code lowercase
	// in case input is not lower case
	code = code.toLowerCase();

	const course = courses.find((c) => c.code === code);
	if (!course) return 'Course not found, add it';
	return course.name;
}

export { getCourseTitle as getTitle, getCourseName as getName };

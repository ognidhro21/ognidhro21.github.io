/* eslint-disable no-unused-vars */

/**
 * @courses TODO: SET titles types
 */
export const courses = [
	//============================MEETING=====================
	{
		code: 'meeting',
		name: '',
		titles: [{ id: 'L2S1', title: 'Meeting / Seminar / Presentation' }]
	},
	//============================ACM============================
	{
		code: 'acm',
		name: 'Agricultural Chemistry',
		titles: [
			{ id: 'L1S2', title: 'Organic Chemistry' },
			{ id: 'L3S1', title: 'Chemistry of Fertilizers and Pesticides', onlytheory: true },
			{ id: 'L3S2', title: 'Agro-Analytical Chemistry' },
			{ id: 'L4S1', title: 'Chemistry and Technology of Agricultural Products' }
		]
	},
	//============================AES============================
	{
		code: 'aes',
		name: 'Agricultural Economics and Sociology',
		titles: [{ id: 'L1S2', title: 'Production Economics and Marketing', onlytheory: true }]
	},
	//============================AGB============================
	{
		code: 'agb',
		name: 'Agricutural Botany',
		titles: [
			{ id: 'L2S1', title: 'Plant Morphology and Taxonomy' },
			{ id: 'L2S2', title: 'Plant Anatomy and Embryology' },
			{ id: 'L3S1', title: 'Principles of Plant Physiology' },
			{ id: 'L4S1', title: 'Applied Plant Physiology', onlytheory: true },
			{ id: 'L4S2', title: 'Plant Ecology and Environment' }
		]
	},
	//============================AGE============================
	{
		code: 'age',
		name: 'Agricultural Engineering',
		titles: [{ id: 'L1S2', title: 'Fundamentals of Agricultural Engineering' }]
	},
	//============================AGF============================
	{
		code: 'agf',
		name: 'Agroforestry',
		titles: [{ id: 'L3S2', title: 'Principles of Agroforestry' }]
	},
	//============================AGR============================
	{
		code: 'agr',
		name: 'Agronomy',
		titles: [
			{ id: 'L1S2', title: 'Principles and Practice of Agronomy' },
			{ id: 'L2S1', title: 'Seed Science and Technology' },
			{ id: 'L2S2', title: 'Weed Science' },
			{ id: 'L3S2', title: 'Field Crop Production' },
			{ id: 'L4S1', title: 'Environment Science and Crop Production' },
			{ id: 'L4S2', title: 'Farms and Farming' }
		]
	},
	//============================ARD============================
	{
		code: 'ard',
		name: 'Agricultural Extension and Rural Development',
		titles: [
			{ id: 'L2S1', title: 'Fundamentals of Agricultural Extension', onlytheory: true },
			{ id: 'L3S1', title: 'Extension Teaching and Communication' },
			{ id: 'L3S2', title: 'Rural Development' },
			{ id: 'L4S1', title: 'Extension Management and Training' },
			{ id: 'L4S2', title: 'Extension Program Building and Technology Transfer' }
		]
	},
	//============================BCM============================
	{
		code: 'bcm',
		name: 'Biochemistry and Food Analysis',
		titles: [
			{ id: 'L1S2', title: 'Chemistry of Biomolecules' },
			{ id: 'L2S1', title: 'Metabolism of Biomolecules' }
		]
	},
	//============================BTH============================
	{
		code: 'bth',
		name: 'Biotechnology',
		titles: [{ id: 'L4S1', title: 'Biotechnology' }]
	},
	//============================ENT============================
	{
		code: 'ent',
		name: 'Entomology',
		titles: [
			{ id: 'L2S1', title: 'Introduction to Entomology' },
			{ id: 'L2S2', title: 'Systematic Entomology' },
			{ id: 'L3S1', title: 'Insect Physiology and Nutrition' },
			{ id: 'L3S2', title: 'Insect Ecology and Pest Management' },
			{ id: 'L4S2', title: 'Economic Entomology' }
		]
	},
	//============================GPB============================
	{
		code: 'gpb',
		name: 'Genetics and Plant Breeding',
		titles: [
			{ id: 'L2S2', title: 'Fundamentals of Genetics' },
			{ id: 'L3S1', title: 'Molecular Genetics' },
			{ id: 'L3S2', title: 'Plant Breeding' },
			{ id: 'L4S2', title: 'Molecular Plant Breeding' }
		]
	},
	//============================HRT============================
	{
		code: 'hrt',
		name: 'Horticulture',
		titles: [
			{ id: 'L1S2', title: 'Ornamental Horticulture' },
			{ id: 'L3S1', title: 'Spices, Medicinal Plants and Plantation Crops' },
			{ id: 'L4S1', title: 'Vegetable Production' },
			{ id: 'L4S2', title: 'Fruit Production' }
		]
	},
	//============================PLP============================
	{
		code: 'plp',
		name: 'Plant Pathology',
		titles: [
			{ id: 'L2S1', title: 'Aquaintance with Plant Pathogens-I' },
			{ id: 'L2S2', title: 'Aquaintance with Plant Pathogens-II' },
			{ id: 'L3S1', title: 'Principles of Plant Pathology' },
			{ id: 'L4S1', title: 'Plant Disease-I' },
			{ id: 'L4S2', title: 'Plant Disease-II' }
		]
	},
	//============================SSC============================
	{
		code: 'ssc',
		name: 'Soil Science',
		titles: [
			{ id: 'L1S2', title: 'Soil Survey and Classification' },
			{ id: 'L2S2', title: 'Soil Physics' },
			{ id: 'L3S1', title: 'Soil Chemistry' },
			{ id: 'L4S1', title: 'Soil Microbiology and BNF' },
			{ id: 'L4S2', title: 'Soil Fertility and Nutrient Management' }
		]
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

/**
 * Returns the title of a course with a given code and title ID.
 *
 * @param {string} code - The code of the course to retrieve.
 * @param {number} id - The ID of the course title to retrieve.
 * @returns {string} The title of the specified course, or an error message if the course or title is not found.
 */
function getCourseTitle(code, id) {
	const course = courses.find((c) => c.code.toLowerCase === code);
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
/**
 *
 * @param {String} courseTitle
 * @returns
 */
function getCourseCode(courseTitle) {
	let k = '';
	courses.forEach((element, i) => {
		element.titles.forEach((mel, j) => {
			if (mel.title === courseTitle) {
				if (!courses[i].hideCode) k = courses[i].code;
				else k = '';
			}
		});
	});
	return k;
}

/**
 *
 * @param {string} id
 * @param {string} code
 * @param {boolean} practical
 */
function getFullCourseCode(id, code, practical) {
	if (code === 'meeting') return 'MEETING';
	code = code.toUpperCase();
	// trimming LS from {L1S2}
	var numbers = id.replace(/[^0-9.]/g, '');
	const trail = practical ? 2 : 1;
	return `${code}${numbers}${trail}`;
}

export {
	getCourseTitle as getTitle,
	getCourseName as getName,
	getCourseCode as getCode,
	getFullCourseCode as getFullCode
};

// console.log(getCourseTitle('STT', 'L2S1'));

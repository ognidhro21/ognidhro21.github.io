import * as data from '../data/results.json' assert { type: 'json' };
import fs from 'fs';

function generateSemesterTop(key = '', title = '', fileName = '', limit = 10) {
	const students = data.default;

	// Sorting the array by CGPA
	students.sort((a, b) => {
		if (b[key] === a[key]) {
			return a.CGPA - b.CGPA; // Sort by CGPA if keyed value is equal
		}
		if (b.CGPA === a.CGPA) {
			return a.ID - b.ID; // Sort by ID if CGPA is equal
		}

		return b[key] - a[key]; // Sort by CGPA in descending order
	});

	// Grouping students with the same position
	let currentPosition = 1;
	let previousStudent = null;

	let groupedStudents = [];
	let currentGroup = {
		position: currentPosition,
		students: [],
		gpa: null
	};

	students.forEach((student, index) => {
		if (previousStudent && student[key] !== previousStudent[key]) {
			currentGroup.gpa = previousStudent[key];
			groupedStudents.push(currentGroup);
			currentPosition++;
			currentGroup = {
				position: currentPosition,
				students: [],
				gpa: null
			};
		}

		currentGroup.students.push({ id: student.ID });

		previousStudent = student;

		if (index === students.length - 1) {
			groupedStudents.push(currentGroup);
		}
	});
	const limited = groupedStudents.slice(0, limit);
	const top10 = {
		info: {
			title,
			id: fileName
		},
		results: limited
	};
	const jsonData = JSON.stringify(top10, null, 0);

	// Save JSON to a file
	const path = `./src/lib/data/results/${fileName}.json`;
	fs.writeFile(path, jsonData, 'utf8', (err) => {
		if (err) {
			console.error('Error writing to file:', err);
		} else {
			console.log('JSON data saved to grouped_students.json');
		}
	});
}
generateSemesterTop('GPA2nd', 'L1S2 Top 10', 'L1S2');
generateSemesterTop('GPA1st', 'L1S1 Top 10', 'L1S1');
generateSemesterTop('GPA3rd', 'L2S1 Top 10', 'L2S1');

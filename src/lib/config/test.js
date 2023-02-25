const data = {
	name: 'L2S2',
	detailedname: 'Level 2, Semester 2',
	sections: [
		{
			name: 'Section 1',
			days: [
				{
					name: 'Sunday',
					schedules: [
						{
							code: 'agr',
							start: '10:20',
							end: '11:10'
						},
						{
							code: 'stt',
							start: '11:15',
							end: '12:05'
						},
						{
							code: 'ssc',
							start: '12:10',
							end: '15:00'
						}
					]
				},
				{
					name: 'Monday',
					schedules: [
						{
							code: 'ent',
							start: '10:20',
							end: '11:10'
						},
						{
							code: 'agb',
							start: '11:15',
							end: '12:05'
						},
						{
							code: 'gpb',
							start: '12:10',
							end: '13:00'
						}
					]
				}
			],
			groups: [
				{
					name: 'A',
					days: [
						{
							name: 'Saturday',
							schedules: [
								{
									code: 'plp',
									start: '8:30',
									end: '10:15'
								},
								{
									code: 'gpb',
									start: '14:30',
									end: '16:35'
								}
							]
						},
						{
							name: 'Monday',
							schedules: [
								{
									code: 'ent',
									start: '8:30',
									end: '10:15'
								},
								{
									code: 'ssc',
									start: '14:30',
									end: '16:15'
								}
							]
						}
					]
				},
				{
					name: 'B',
					days: [
						{
							name: 'Saturday',
							schedules: [
								{
									code: 'plp',
									start: '8:30',
									end: '10:15'
								},
								{
									code: 'ent',
									start: '14:30',
									end: '16:35'
								}
							]
						},
						{
							name: 'Monday',
							schedules: [
								{
									code: 'ent',
									start: '8:30',
									end: '10:15'
								},
								{
									code: 'ssc',
									start: '14:30',
									end: '16:15'
								}
							]
						}
					]
				}
			]
		}
	]
};
// Get the current time in milliseconds
const date = new Date();
const currentMilliseconds = date.getTime();
const currentDay = date.toLocaleString('en-us', { weekday: 'long' });
// Find ongoing schedules
const schedules = [];

for (const section of data.sections) {
	for (const day of section.days) {
		if (day.name === currentDay) {
			for (const schedule of day.schedules) {
				const startMilliseconds = new Date(`${date.toDateString()} ${schedule.start}`).getTime();
				const endMilliseconds = new Date(`${date.toDateString()} ${schedule.end}`).getTime();
				if (startMilliseconds <= currentMilliseconds && currentMilliseconds <= endMilliseconds) {
					const sch = { ...schedule, id: section.name };
					schedules.push(sch);
				}
			}
		}
	}

	for (const group of section.groups) {
		for (const day of group.days) {
			if (day.name === currentDay) {
				for (const schedule of day.schedules) {
					const startMilliseconds = new Date(`${date.toDateString()} ${schedule.start}`).getTime();
					const endMilliseconds = new Date(`${date.toDateString()} ${schedule.end}`).getTime();
					if (startMilliseconds <= currentMilliseconds && currentMilliseconds <= endMilliseconds) {
						const sch = { ...schedule, id: 'Group ' + group.name, practical: true };
						schedules.push(sch);
					}
				}
			}
		}
	}
}
// schedules.sort(function (a, b) {
// 	return Date.parse('1970/01/01 ' + a.start) - Date.parse('1970/01/01 ' + b.start);
// });
// Output the ongoing schedules
console.log(schedules);

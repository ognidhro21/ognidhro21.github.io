import { isInProgress } from '../../../lib/time/date';
export async function GET() {
	const responseOptions = {
		status: 200,
		headers: {
			'content-type': 'application/json'
		}
	};
	let all = await import('$lib/data/schedules/routines/L2S2.json');
	const sections = all.sections;
	const days = [];

	sections.forEach((section) => {
		const name = section.name;
		section.days.forEach((day) => {
			const updatedDay = { ...day, id: name };
			days.push(updatedDay);
		});
	});

	const date = new Date();
	const today = date.toLocaleDateString('en-US', { weekday: 'long' });
	const currentTime = date.getTime();
	const formatedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

	const filteredSchedules = days
		.filter((day) => day.name === today)
		.flatMap((day) =>
			day.schedules.map((schedule) => ({
				dayName: day.name,
				section: day.id,
				schedule
			}))
		)
		.filter((scheduleInfo) => {
			const startTime = new Date(`${formatedDate} ${scheduleInfo.schedule.start}`).getTime();
			const endTime = new Date(`${formatedDate} ${scheduleInfo.schedule.end}`).getTime();
			return startTime <= currentTime && currentTime <= endTime;
		});
	return new Response(JSON.stringify(filteredSchedules), responseOptions);
}

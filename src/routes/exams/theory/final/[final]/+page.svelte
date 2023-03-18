<script>
	import { isCompleted } from '$lib/time/date';
	import SEO from '$lib/components/shared/SEO/index.svelte';
	import ExamLayout from '../../ExamLayout.svelte';

	export let data;
	const json = data.json;

	const { name, detailedname, schedules } = json;
	const { final } = schedules;
	const { startTime, year, exams, message } = final;
	let expired = [];
	let upNext = [];

	if (!exams.message) {
		exams.forEach((e) => {
			const isExpired = isCompleted(year, e.date, startTime + e.credit);
			if (isExpired) {
				expired = [...expired, e];
			} else {
				upNext = [...upNext, e];
			}
		});
	}

	/**
	 * Filters the exams array and returns two new arrays, one with exams that have expired and
	 * one with exams that are upcoming.
	 *
	 * @param {Array} exams - The array of exams to filter
	 * @param {number} year - The year in which the exams are being taken
	 * @param {number} startTime - The start time of the exams in milliseconds
	 * @returns {Object} An object containing two arrays, expired and upNext
	 */
	function filterExams(exams, year, startTime) {
		let expired = [];
		let upNext = [];

		if (!exams.message) {
			exams.forEach((e) => {
				const isExpired = isCompleted(year, e.date, startTime + e.credit);
				if (isExpired) {
					expired.push(e);
				} else {
					upNext.push(e);
				}
			});
		}

		return { expired, upNext };
	}
	// const { expired, upNext } = filterExams();
</script>

<SEO title={`Final - ${name}`} />
<ExamLayout
	{exams}
	{expired}
	{upNext}
	{detailedname}
	{message}
	{startTime}
	{year}
	{name}
	type="Final"
/>

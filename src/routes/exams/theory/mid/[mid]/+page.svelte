<script>
	import { isCompleted } from '$lib/time/date';
	import Container from '../../../../../components/shared/Container.svelte';
	import ExamCard from '../../../../../components/shared/schedules/ExamCard.svelte';
	import SEO from '../../../../../components/shared/SEO/index.svelte';
	import ExamLayout from '../../ExamLayout.svelte';
	export let data;
	const json = data.json;
	const { name, detailedname, schedules } = json;
	const { mid } = schedules;
	const { startTime, year, endTime, exams, message } = mid;
	let expired = [];
	let upNext = [];
	if (!exams.message) {
		exams.forEach((e) => {
			const isExpired = isCompleted(year, e.date, endTime);
			if (isExpired) {
				expired = [...expired, e];
			} else {
				upNext = [...upNext, e];
			}
		});
	}
</script>

<SEO title={`Class Test - ${name}`} />
<ExamLayout
	{exams}
	{expired}
	{upNext}
	{detailedname}
	{message}
	{startTime}
	{year}
	{name}
	{endTime}
	type="Mid"
/>

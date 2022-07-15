<script context="module">
	import { aMOrPM, isCompleted } from '$lib/time/date';
	import Container from '../../../../components/shared/Container.svelte';
	export async function load({ params, fetch }) {
		const slug = params.mid;
		const examDetail = await fetch(`./${slug}.json`).then((res) => res.json());
		return {
			props: {
				examDetail
			}
		};
	}
</script>

<script>
	import MidCard from '../../../../components/shared/schedules/ExamCards/MidCard.svelte';

	export let examDetail;
	const { detailedname, exams, startTime, year, endTime } = examDetail;
	let expired = [];
	let upNext = [];
	exams.forEach((e) => {
		const isExpired = isCompleted(year, e.date, endTime);
		if (isExpired) {
			expired = [...expired, e];
		} else {
			upNext = [...upNext, e];
		}
	});
</script>

<Container>
	<h3>
		{detailedname} Mid Term
	</h3>
	{#if upNext.length > 0}
		<h4>Up Next</h4>
		{#each upNext as exam (exam.code)}
			<MidCard {exam} {startTime} {year} {endTime} />
		{/each}
	{/if}
	{#if expired.length > 0}
		<h4>Completed</h4>
		{#each expired as exam (exam.code)}
			<MidCard {exam} {startTime} {year} {endTime} completed={true} />
		{/each}
	{/if}
</Container>

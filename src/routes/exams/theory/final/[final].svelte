<script context="module">
	import { aMOrPM, isCompleted } from '$lib/time/date';
	import Container from '../../../../components/shared/Container.svelte';
	export async function load({ params, fetch }) {
		const slug = params.final;
		const examDetail = await fetch(`./${slug}.json`).then((res) => res.json());
		return {
			props: {
				examDetail
			}
		};
	}
</script>

<script>
	import FinalCard from '../../../../components/shared/schedules/ExamCards/FinalCard.svelte';

	export let examDetail;
	const { name, detailedname, exams, startTime, year } = examDetail;
	let expired = [];
	let upNext = [];

	exams.forEach((e) => {
		const isExpired = isCompleted(year, e.date, startTime + e.credit);
		if (isExpired) {
			expired = [...expired, e];
		} else {
			upNext = [...upNext, e];
		}
	});
</script>

<Container>
	<h3>
		{detailedname} Final
	</h3>
	{#if upNext.length > 0}
		<h4>Up Next</h4>
		{#each upNext as exam (exam.code)}
			<FinalCard {exam} {startTime} {year} />
		{/each}
	{/if}
	{#if expired.length > 0}
		<h4>Completed</h4>
		{#each expired as exam (exam.code)}
			<FinalCard {exam} {startTime} {year} completed={true} />
		{/each}
	{/if}
</Container>

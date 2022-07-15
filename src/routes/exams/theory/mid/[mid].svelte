<script context="module">
	import { aMOrPM, isCompleted } from '$lib/time/date';
	import Container from '../../../../components/shared/Container.svelte';
	import MidCard from '../../../../components/shared/schedules/ExamCards/MidCard.svelte';
	export async function load({ params, fetch }) {
		const slug = params.mid;
		const json = await fetch(`./${slug}.json`).then((res) => res.json());
		return {
			props: {
				json
			}
		};
	}
</script>

<script>
	export let json;
	const { detailedname, schedules } = json;
	const { mid } = schedules;
	const { startTime, year, endTime, exams } = mid;
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
			<MidCard {exam} {startTime} {endTime} completed={true} />
		{/each}
	{/if}
</Container>

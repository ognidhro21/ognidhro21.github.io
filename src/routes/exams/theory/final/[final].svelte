<script context="module">
	import { aMOrPM, isCompleted } from '$lib/time/date';
	import Container from '../../../../components/shared/Container.svelte';
	import FinalCard from '../../../../components/shared/schedules/ExamCards/FinalCard.svelte';
	import SEO from '../../../../components/shared/SEO/index.svelte';
	export async function load({ params }) {
		const slug = params.final;
		const json = await import(`../../../../data/schedules/exams/theory/${slug}.json`);
		return {
			props: {
				json
			}
		};
	}
</script>

<script>
	export let json;
	const { name, detailedname, schedules } = json;
	const { final } = schedules;
	const { startTime, year, exams } = final;
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

<SEO title={`Final - ${name}`} />
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

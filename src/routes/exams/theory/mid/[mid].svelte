<script context="module">
	import { aMOrPM, isCompleted } from '$lib/time/date';
	import Container from '../../../../components/shared/Container.svelte';
	import MidCard from '../../../../components/shared/schedules/ExamCards/MidCard.svelte';
	import SEO from '../../../../components/shared/SEO/index.svelte';

	export async function load({ params }) {
		const slug = params.mid;

		const json = await import(`../../../../data/schedules/exams/theory/${slug}.json`);
		return {
			props: {
				json
			}
		};
	}
</script>

<script>
	import Anim from '../../../../components/shared/Anim.svelte';

	export let json;
	const { name, detailedname, schedules } = json;
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

<SEO title={`Class Test - ${name}`} />
<Anim>
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
</Anim>

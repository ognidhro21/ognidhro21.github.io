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
	import Anim from '../../../../components/shared/Anim.svelte';

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
<Anim>
	<Container>
		<h3>
			{detailedname} Final
		</h3>
		<hr />
		{#if upNext.length > 0}
			<h4>Up Next ({upNext.length})</h4>
			{#each upNext as exam (exam.code)}
				<FinalCard {exam} {startTime} {year} />
			{/each}
		{/if}
		{#if expired.length > 0 && expired.length < exams.length}
			<details class="disclose mbs24">
				<summary class="disclose-title">Completed ({expired.length})</summary>
				<div class="disclose-panel">
					{#each expired as exam (exam.code)}
						<FinalCard {exam} {startTime} {year} completed={true} />
					{/each}
				</div>
			</details>
		{/if}
		{#if expired.length === exams.length}
			<details class="disclose mbs24" open>
				<summary class="disclose-title">Completed ({expired.length})</summary>
				<div class="disclose-panel">
					{#each expired as exam (exam.code)}
						<FinalCard {exam} {startTime} {year} completed={true} />
					{/each}
				</div>
			</details>
		{/if}
	</Container>
</Anim>

<style>
	.disclose-title {
		font-size: 1.3rem;
		cursor: pointer;
		font-weight: bold;
	}
</style>

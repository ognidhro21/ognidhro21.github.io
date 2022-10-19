<script>
	// throw new Error(
	// 	'@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)'
	// );

	import Anim from '../../../../../components/shared/Anim.svelte';
	import { isCompleted } from '$lib/time/date';
	import Container from '../../../../../components/shared/Container.svelte';
	import ExamCard from '../../../../../components/shared/schedules/ExamCard.svelte';
	import SEO from '../../../../../components/shared/SEO/index.svelte';
	export let data;
	const json = data.json;
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
<Container>
	<h4>
		{detailedname} Mid Term
	</h4>
	<div class="large-space" />

	{#if upNext.length > 0}
		<h4>Up Next ({upNext.length})</h4>
		<div class="medium-space" />
		{#each upNext as exam (exam.code)}
			<ExamCard {exam} {startTime} {year} {endTime} id={name} />
		{/each}
	{/if}
	{#if expired.length > 0 && expired.length < exams.length}
		<h4>Completed ({expired.length})</h4>
		<div class="medium-space" />
		<div>
			{#each expired as exam (exam.code)}
				<ExamCard {exam} {startTime} {year} {endTime} completed={true} id={name} />
			{/each}
		</div>
	{/if}
	{#if expired.length === exams.length}
		<h4>Completed ({expired.length})</h4>
		<div class="medium-space" />
		<div>
			{#each expired as exam (exam.code)}
				<ExamCard {exam} {startTime} {year} {endTime} completed={true} id={name} />
			{/each}
		</div>
	{/if}
</Container>

<style>
	.disclose-title {
		font-size: 1.3rem;
		font-weight: bold;
		cursor: pointer;
	}
</style>

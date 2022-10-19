<script>
	// throw new Error(
	// 	'@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)'
	// );
	import { isCompleted } from '$lib/time/date';
	import Container from '../../../../../components/shared/Container.svelte';
	import Anim from '../../../../../components/shared/Anim.svelte';
	import ExamCard from '../../../../../components/shared/schedules/ExamCard.svelte';
	import SEO from '../../../../../components/shared/SEO/index.svelte';
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
</script>

<SEO title={`Final - ${name}`} />
<Container>
	<h4>
		{detailedname} Final
	</h4>
	<div class="large-space" />
	{#if message}
		<h2>{message}</h2>
	{:else}
		{#if upNext.length > 0}
			<h4>Up Next ({upNext.length})</h4>
			<div class="medium-space" />
			{#each upNext as exam (exam.code)}
				<ExamCard {exam} {startTime} endTime={exam.credit + startTime} {year} />
			{/each}
		{/if}
		{#if expired.length > 0 && expired.length < exams.length}
			<h4>Completed ({expired.length})</h4>
			<div class="medium-space" />
			<div>
				{#each expired as exam (exam.code)}
					<ExamCard
						{exam}
						{startTime}
						endTime={exam.credit + startTime}
						{year}
						completed={true}
						id={name}
					/>
				{/each}
			</div>
		{/if}
		{#if expired.length === exams.length}
			<h4>Completed ({expired.length})</h4>
			<div class="medium-space" />
			<div class="disclose-panel">
				{#each expired as exam (exam.code)}
					<ExamCard
						{exam}
						{startTime}
						endTime={exam.credit + startTime}
						{year}
						completed={true}
						id={name}
					/>
				{/each}
			</div>
		{/if}
	{/if}
</Container>

<style>
	.disclose-title {
		font-size: 1.3rem;
		cursor: pointer;
		font-weight: bold;
	}
</style>

<script>
	import PageContainer from '../../../components/shared/PageContainer.svelte';
	import ExamCard from '../../../components/shared/schedules/ExamCard.svelte';

	export let exams;
	export let expired;
	export let upNext;
	export let detailedname;
	export let message;
	export let startTime;
	export let endTime;
	export let year;
	export let name;
	export let type;
</script>

<PageContainer title="{detailedname} {type}">
	{#if message}
		<h3>{message}</h3>
	{:else}
		{#if upNext.length > 0}
			<h5>Up Next ({upNext.length})</h5>
			<div class="small-space" />
			{#each upNext as exam (exam.code)}
				<ExamCard {exam} {startTime} {endTime} credit={exam.credit} {year} id={name} />
			{/each}
		{/if}
		{#if expired.length > 0 && expired.length < exams.length}
			<h5>Completed ({expired.length})</h5>
			<div class="small-space" />
			<div>
				{#each expired as exam (exam.code)}
					<ExamCard
						{exam}
						{startTime}
						{endTime}
						credit={exam.credit}
						{year}
						completed={true}
						id={name}
					/>
				{/each}
			</div>
		{/if}
		{#if expired.length === exams.length}
			<h5>Completed ({expired.length})</h5>
			<div class="small-space" />
			<div class="disclose-panel">
				{#each expired as exam (exam.code)}
					<ExamCard
						{exam}
						{startTime}
						{endTime}
						credit={exam.credit}
						{year}
						completed={true}
						id={name}
					/>
				{/each}
			</div>
		{/if}
	{/if}
</PageContainer>

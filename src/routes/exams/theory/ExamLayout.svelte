<script>
	import PageContainer from '$lib/components/shared/PageContainer.svelte';
	import ExamCard from '$lib/components/shared/schedules/ExamCard.svelte';
	import Tabs from '$lib/components/shared/Tabs.svelte';

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

	// TABS
	let items = [
		{
			name: 'Up next',
			icon: 'event_upcoming'
		},
		{
			name: 'Completed',
			icon: 'done'
		}
		// {
		// 	name: 'Events',
		// 	icon: 'table'
		// }
	];
	let selected = items[0].name;
	function tabChanged(e) {
		selected = e.detail;
	}
	$: if (expired.length === exams.length) {
		selected = items[1].name;
	}
</script>

<PageContainer title="{detailedname} {type}">
	{#if message}
		<h4>{message}</h4>
	{:else}
		<Tabs {items} {selected} on:tabChanged={tabChanged}>
			{#if selected === 'Up next'}
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<div id="panel-1" class="page active left" role="tabpanel" tabindex={0}>
					<!-- <h5>Up Next ({upNext.length})</h5> -->
					<div>
						{#each upNext as exam (exam.code)}
							<ExamCard {exam} {startTime} {endTime} credit={exam.credit} {year} id={name} />
						{/each}
					</div>
				</div>
			{:else if selected === 'Completed'}
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<div id="panel-2" class="page active left" role="tabpanel" tabindex={1}>
					<!-- <h5>Completed ({expired.length})</h5> -->
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
				</div>
			{/if}
		</Tabs>
		<!-- {#if upNext.length > 0}
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
		{/if} -->
	{/if}
</PageContainer>

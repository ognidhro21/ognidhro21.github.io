<script>
	import { getName, getTitle, getFullCode } from '$lib/courses';
	import { isInProgress, convertTo12 } from '$lib/time/date';

	export let schedule;
	export let id;
	export let day;

	$: practical = schedule.practical;
	$: CODE = getFullCode(id, schedule.code, schedule.practical);
	$: name = getName(schedule.code);
	$: title = getTitle(schedule.code, id);
	$: progressData = isInProgress(day, schedule.start, schedule.end);
</script>

<div class="row padding " class:primary-container={practical}>
	<div class="max">
		<h5>
			{name} - {CODE}
		</h5>
		<h5>{convertTo12(schedule.start)} - {convertTo12(schedule.end)}</h5>
		<p>{title}</p>
	</div>
	{#if progressData !== -1}
		<div
			class="progress left"
			style={`clip-path: polygon(0% 0%, 0% 100%, ${progressData}% 100%,  ${progressData}% 0%);`}
		/>
	{/if}
	{#if schedule.practical}
		<div class="row">
			<i class="error-text large">biotech</i>
			<!-- <span class="error round small-padding">PRACTICAL</span> -->
		</div>
	{/if}
</div>
<!-- <div class="space" /> -->

<!-- <div class="small-divider" /> -->
<style>
	.row {
		border-bottom: 1px var(--surface-variant) solid;
		margin-top: 0;
		border-radius: 0.25rem;
	}
	.max > * {
		margin-bottom: 0.25rem;
	}
</style>

<script>
	import { fly } from 'svelte/transition';
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

<article class="row padding">
	<!-- <i class="light-green-text">check_circle</i> -->
	<div class="max">
		<h6>
			{name} - {CODE}{#if schedule.practical}<span class="badge round top">PRACTICAL</span>{/if}
		</h6>

		<h5>{convertTo12(schedule.start)} - {convertTo12(schedule.end)}</h5>
		<p>{title}</p>
	</div>
	<div
		class="progress left"
		style={`clip-path: polygon(0% 0%, 0% 100%, ${progressData}% 100%, ${progressData}% 0%);`}
	/>
</article>

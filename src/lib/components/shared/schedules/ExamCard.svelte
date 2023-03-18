<script>
	import { fly } from 'svelte/transition';
	import { aMOrPM } from '$lib/time/date';
	import { getName, getTitle } from '$lib/courses';
	export let exam;
	let { code, date } = exam;
	export let startTime;
	export let endTime;
	export let completed = false;
	export let id;
	export let credit;
	$: name = getName(code);
	$: title = getTitle(code, id);
	$: endTime = endTime === undefined ? startTime + credit : endTime;
</script>

<div class="row padding" class:completed transition:fly>
	<div class="max">
		<h5>{name}</h5>
		<p>{title}</p>
	</div>
	<div>
		{#if exam.overrideTime}
			<p class="right-align">{aMOrPM(exam.overrideTime)} - {aMOrPM(exam.overrideEndTime)}</p>
		{:else}
			<p class="right-align">{aMOrPM(startTime)} - {aMOrPM(endTime)}</p>
		{/if}
		<h6 class="right-align">{date}</h6>
	</div>
</div>

<style>
	.row {
		border-radius: 0.25rem;
		border-bottom: 1px var(--surface-variant) solid;
	}
</style>

<script>
	import { fly } from 'svelte/transition';
	import { getName, getTitle } from '$lib/courses';
	import Badge from '../Badge.svelte';
	import './Card.css';
	export let schedule;
	export let id;
	$: name = getName(schedule.code);
	$: title = getTitle(schedule.code, id);
	$: practical = schedule.practical;
</script>

<div class="routine-card flex flex-row justify-between align-center" class:practical transition:fly>
	<div class="title flex flex-column">
		<h4>
			{name}
		</h4>
		<!-- <p>{schedule.code}</p> -->
		<p>{title}</p>
	</div>
	<div class="time flex flex-column items-end justify-center">
		<h5>
			<span>{schedule.start} - </span> <span>{schedule.end}</span>
		</h5>
		{#if schedule.practical}<Badge shape="rounded" type="warning">Practical</Badge> {/if}
	</div>
	<h2 class="abs">
		{schedule.code}
	</h2>
</div>

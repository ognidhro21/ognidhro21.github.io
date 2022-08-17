<script>
	import { fly } from 'svelte/transition';
	import { getName, getTitle } from '$lib/courses';
	import { isInProgress } from '$lib/time/date';

	import Badge from '../Badge.svelte';
	import './Card.css';

	export let schedule;
	export let id;
	export let day;
	const practical = schedule.practical;

	$: name = getName(schedule.code);
	$: title = getTitle(schedule.code, id);
	$: progressData = isInProgress(day, schedule.start, schedule.end);
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
	{#if progressData !== -1}
		<progress id="progressBar" max="100" value={progressData} />
	{/if}
</div>

<style>
	#progressBar {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		outline: none;
		margin: 0;
		/* Reset the default appearance */
		-webkit-appearance: none;
		appearance: none;
		height: 4px;
	}
	progress[value]::-webkit-progress-bar {
		background-color: transparent;
		border-radius: 0;
		box-shadow: none;
	}
	progress[value]::-webkit-progress-value {
		background-color: var(--agnostic-primary);

		border-radius: 2px;
		background-size: 35px 20px, 100% 100%, 100% 100%;
		-webkit-animation: animate-stripes 5s linear infinite;
		animation: animate-stripes 5s linear infinite;
	}
	@-webkit-keyframes animate-stripes {
		100% {
			background-position: -100px 0px;
		}
	}

	@keyframes animate-stripes {
		100% {
			background-position: -100px 0px;
		}
	}
</style>

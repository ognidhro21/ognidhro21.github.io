<script>
	import { fly } from 'svelte/transition';
	import { getName, getTitle, getFullCode } from '$lib/courses';
	import { isInProgress, convertTo12 } from '$lib/time/date';

	import Badge from '../Badge.svelte';
	import './Card.css';

	export let schedule;
	export let id;
	export let day;
	$: practical = schedule.practical;
	$: CODE = getFullCode(id, schedule.code, schedule.practical);
	$: name = getName(schedule.code);
	$: title = getTitle(schedule.code, id);
	$: progressData = isInProgress(day, schedule.start, schedule.end);
</script>

<div class="routine-card" class:practical transition:fly class:isInProgress={progressData !== -1}>
	<p><b> {name}</b> <span>{CODE}</span></p>
	<div class="title flex flex-row justify-between">
		<h5>{convertTo12(schedule.start)} - {convertTo12(schedule.end)}</h5>
		{#if schedule.practical}<Badge shape="rounded" type="warning">Practical</Badge> {/if}
	</div>
	<div class="time flex flex-row items-center justify-between">
		<p>{title}</p>
	</div>

	<h2 class="abs">
		{schedule.code}
	</h2>
	{#if progressData !== -1}
		<div class="progress-bg" style="width:{progressData}% ;">
			<p>.</p>
		</div>
		<progress id="progressBar" max="100" value={progressData} />
	{/if}
</div>

<style>
	.isInProgress {
		box-shadow: 0px 0px 14px rgba(141, 7, 7, 0.295);
		z-index: 2;
		transform: scale(1.02);
		border-radius: 0.6rem;
	}
	.progress-bg {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		background-color: rgba(255, 0, 0, 0.144);
	}
	.progress-bg > p {
		opacity: 0;
	}
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

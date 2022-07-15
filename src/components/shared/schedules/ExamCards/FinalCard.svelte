<script context="module">
	import { fly } from 'svelte/transition';
	import { aMOrPM, isCompleted } from '$lib/time/date';
	import { Tag } from 'agnostic-svelte';
	Tag;
</script>

<script>
	export let exam;
	const { code, date, credit, title } = exam;
	export let startTime;
	export let year;
	export let completed = false;
</script>

<div class="routine flex flex-row justify-between align-center" class:completed transition:fly>
	<div class="title flex flex-column">
		<h4>{code}</h4>
		<p>{title}</p>
	</div>
	<div class="time flex flex-column items-end justify-center">
		<h4>
			{date}
		</h4>
		<p>
			<span>{aMOrPM(startTime)} - </span> <span>{aMOrPM(startTime + credit)}</span>
		</p>
	</div>
</div>

<style>
	* {
		margin: 0;
		line-height: 1.2;
	}
	.routine {
		padding: 1rem;
		background: var(--plain);
		margin-top: 0.8rem;
		border-radius: 0.8rem;
		box-shadow: 0px 0px 12px 1px rgba(243, 114, 114, 0.09);
		position: relative;
	}
	.title {
		max-width: 60%;
	}
	h4 {
		text-transform: uppercase;
	}
	.time {
		text-align: right;
	}
	.completed {
		opacity: 0.4;
	}
	.completed h4,
	.completed p {
		text-decoration: line-through;
	}
</style>

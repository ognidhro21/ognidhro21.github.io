<script context="module">
	import { fly } from 'svelte/transition';
	import { aMOrPM } from '$lib/time/date';
	import { getName, getTitle } from '$lib/courses';
	import './Card.css';
</script>

<script>
	export let exam;
	const { code, date } = exam;
	export let startTime;
	export let endTime;
	export let completed = false;
	export let id;
	$: name = getName(code);
	$: title = getTitle(code, id);
</script>

<div class="routine-card flex flex-row justify-between align-center" class:completed transition:fly>
	<div class="title flex flex-column">
		<h4>{name}</h4>
		<p>{title}</p>
	</div>
	<div class="time flex flex-column items-end justify-center">
		<h4>
			{date}
		</h4>
		<p>
			<span>{aMOrPM(startTime)} - </span> <span>{aMOrPM(endTime)}</span>
		</p>
	</div>
	<h2 class="abs">
		{code}
	</h2>
</div>

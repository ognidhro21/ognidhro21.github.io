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

<div class="routine-card" class:completed transition:fly>
	<h4>{name}</h4>
	<p>{title}</p>
	<div class="flex flex-row justify-between items-center">
		<p>{aMOrPM(startTime)} - {aMOrPM(endTime)}</p>
		<h4>{date}</h4>
	</div>
	<h2 class="abs">{code}</h2>
</div>

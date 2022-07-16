<script context="module">
	import { fly } from 'svelte/transition';
	import { aMOrPM, isCompleted } from '$lib/time/date';
	import '../Card.css';
</script>

<script>
	export let exam;
	const { code, date, credit, title } = exam;
	export let startTime;
	export let completed = false;
</script>

<div class="routine-card flex flex-row justify-between align-center" class:completed transition:fly>
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
	<h2 class="abs">
		{code}
	</h2>
</div>

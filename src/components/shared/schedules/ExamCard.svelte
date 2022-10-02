<script context="module">
	import { fly } from 'svelte/transition';
	import { aMOrPM } from '$lib/time/date';
	import { getName, getTitle } from '$lib/courses';
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

<div class="row" class:completed transition:fly>
	<div class="max">
		<h5>{name}</h5>
		<p>{title}</p>
	</div>
	<div>
		<p>{aMOrPM(startTime)} - {aMOrPM(endTime)}</p>
		<h5>{date}</h5>
	</div>
</div>
<div class="medium-divider" />

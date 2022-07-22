<script>
	import { fly } from 'svelte/transition';
	import c2T from '$lib/codeToTitle';
	import Anim from '../Anim.svelte';
	import Badge from '../Badge.svelte';
	import './Card.css';
	export let schedule;
	$: name = c2T(schedule.code);
	$: practical = schedule.practical;
</script>

<div class="routine-card flex flex-row justify-between align-center" class:practical transition:fly>
	<div class="title flex flex-column">
		<h4>
			{schedule.code}
			{#if schedule.practical}<Badge shape="rounded" type="warning">Practical</Badge> {/if}
		</h4>
		<p>{name}</p>
	</div>
	<div class="time flex flex-column items-end justify-center">
		<h5>
			<span>{schedule.start} - </span> <span>{schedule.end}</span>
		</h5>
	</div>
	<h2 class="abs">
		{schedule.code}
	</h2>
</div>

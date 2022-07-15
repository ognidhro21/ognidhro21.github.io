<script>
	import { fly } from 'svelte/transition';
	import c2T from '../../../lib/codeToTitle';
	import Badge from '../Badge.svelte';
	export let schedule;
	$: name = c2T(schedule.code);
</script>

<div class="routine flex flex-row justify-between align-center" transition:fly>
	<div class="title flex flex-column">
		<h4>{schedule.code}</h4>
		<p>{name}</p>
	</div>
	<div class="time flex flex-column items-end justify-center">
		<h5>
			<span>{schedule.start} - </span> <span>{schedule.end}</span>
		</h5>
		{#if schedule.practical}<Badge shape="rounded" type="warning">Practical</Badge> {/if}
	</div>
</div>

<style>
	* {
		margin: 0;
	}
	.routine {
		padding: 1rem;
		background: var(--plain);
		margin-top: 0.8rem;
		border-radius: 0.8rem;
		box-shadow: 0px 0px 12px 1px rgba(243, 114, 114, 0.09);
	}
	h4 {
		text-transform: uppercase;
	}
</style>

<script>
	export let tabindex = 0;
	import { fade, fly } from 'svelte/transition';
	export let routinesList;
</script>

<div
	id="panel-1"
	class="tab-panel"
	role="tabpanel"
	{tabindex}
	in:fly={{
		y: 100,
		duration: 350,
		delay: 120 + 100
	}}
	out:fade={{
		duration: 120
	}}
>
	<h2>Classes</h2>
	{#each routinesList as r, i}
		<a href={`/routines/${r.name}`}>
			<h4>
				{r.detailedname}
			</h4>
		</a>
	{/each}
</div>

<style>
	h4 {
		margin: 0;
		margin-top: 1rem;
	}
</style>

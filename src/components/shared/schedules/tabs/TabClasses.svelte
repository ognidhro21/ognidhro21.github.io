<script>
	export let tabindex = 0;
	import Anim from '../../Anim.svelte';
	export let routinesList;
</script>

<Anim>
	<div id="panel-1" class="tab-panel" role="tabpanel" {tabindex}>
		<h2>Classes</h2>
		{#each routinesList as r, i}
			<a href={`/routines/${r.name}`}>
				<h4>
					{r.detailedname}
				</h4>
			</a>
		{/each}
	</div>
</Anim>

<style>
	h4 {
		margin: 0;
		margin-top: 1rem;
	}
</style>

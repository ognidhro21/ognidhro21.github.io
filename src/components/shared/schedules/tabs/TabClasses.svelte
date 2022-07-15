<script>
	export let tabindex = 0;
	export let routinesList;
</script>

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

<style>
	h4 {
		margin: 0;
		margin-top: 1rem;
	}
</style>

<script>
	export let tabindex = 0;
	import './TabData.css';
	export let routinesList;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div id="panel-1" class="page active left" role="tabpanel" {tabindex}>
	<div class="grid">
		{#each routinesList as r, i}
			<article class="padding secondary-container s12 m6 l4">
				<a href={`/routines/${r.name}`}>
					<h5>
						{r.detailedname}
					</h5>
				</a>
			</article>
		{/each}
	</div>
</div>

<style>
	article {
		margin: 0 !important;
	}
</style>

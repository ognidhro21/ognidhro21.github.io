<script>
	export let tabindex = 0;
	import CardAnchor from '../../CardAnchor.svelte';
	import './TabData.css';
	export let routinesList;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div id="panel-1" class="active left" role="tabpanel" {tabindex}>
	<div class="grid">
		{#each routinesList as r, i (r.name)}
			<CardAnchor href={`/routines/${r.name}`}>
				<span slot="title">
					{r.detailedname}
				</span>
			</CardAnchor>
		{/each}
	</div>
</div>

<style>
	article {
		margin: 0 !important;
	}
</style>

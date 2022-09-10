<script>
	export let tabindex = 0;
	import Anim from '../../Anim.svelte';
	import './TabData.css';
	export let routinesList;
</script>

<Anim>
	<div id="panel-1" class="tab-panel" role="tabpanel" {tabindex}>
		<h2>Classes</h2>
		{#each routinesList as r, i}
			<div class="entry">
				<a href={`/routines/${r.name}`}>
					<h3>
						{r.detailedname}
					</h3>
				</a>
			</div>
		{/each}
	</div>
</Anim>

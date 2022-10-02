<script>
	export let tabindex = 0;
	import Anim from '../../Anim.svelte';
	import './TabData.css';
	export let routinesList;
</script>

<div id="panel-1" class="page active" role="tabpanel" {tabindex}>
	<h3>Classes</h3>
	{#each routinesList as r, i}
		<article class="padding">
			<a href={`/routines/${r.name}`}>
				<h4>
					{r.detailedname}
				</h4>
			</a>
		</article>
	{/each}
</div>

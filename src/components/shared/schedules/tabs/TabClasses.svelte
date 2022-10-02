<script>
	export let tabindex = 0;
	import Anim from '../../Anim.svelte';
	import './TabData.css';
	export let routinesList;
</script>

<div id="panel-1" class="page active" role="tabpanel" {tabindex}>
	{#each routinesList as r, i}
		<article class="padding">
			<a href={`/routines/${r.name}`}>
				<h5>
					{r.detailedname}
				</h5>
			</a>
		</article>
	{/each}
</div>

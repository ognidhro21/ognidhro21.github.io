<script>
	export let tabindex = 0;
	import './TabData.css';
	export let routinesList;
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div id="panel-1" class="active left" role="tabpanel" {tabindex}>
	<div class="grid">
		{#each routinesList as r, i (r.name)}
			<a href={`/routines/${r.name}`} class="padding secondary-container s12 m6 l4 row">
				<h5 class="max">
					{r.detailedname}
				</h5>
				<i>chevron_right</i>
			</a>
		{/each}
	</div>
</div>

<style>
	article {
		margin: 0 !important;
	}
	a {
		border-radius: 0.4rem;
		transition: scale 0.15s ease-out;
	}
	a:active {
		scale: 0.98;
	}
</style>

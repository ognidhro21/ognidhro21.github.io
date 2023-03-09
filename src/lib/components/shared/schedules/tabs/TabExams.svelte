<script>
	export let tabindex = 1;
	export let examsList;
	import './TabData.css';
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div id="panel-2" class="active left" role="tabpanel" {tabindex}>
	<div class="grid">
		{#each examsList as r, i}
			<article class="padding no-elevate secondary-container s12 m6 l4">
				<h5>{r.detailedname}</h5>
				<nav class="no-space">
					<a class="button left-round secondary" href={`/exams/theory/final/${r.name}`}>
						<span>Final</span>
					</a>

					<a class="button  right-round secondary" href={`/exams/theory/mid/${r.name}`}>
						<span>Mid</span>
					</a>
				</nav>
			</article>
		{/each}
	</div>
</div>

<style>
	article {
		margin: 0 !important;
	}
</style>

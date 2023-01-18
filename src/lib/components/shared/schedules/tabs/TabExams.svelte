<script>
	export let tabindex = 1;
	export let examsList;
	import './TabData.css';
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div id="panel-2" class="page active left" role="tabpanel" {tabindex}>
	{#each examsList as r, i}
		<article class="padding no-elevate secondary-container">
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

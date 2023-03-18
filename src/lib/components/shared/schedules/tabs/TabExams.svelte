<script>
	export let tabindex = 1;
	export let examsList;
	import './TabData.css';
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div id="panel-2" class="active left" role="tabpanel" {tabindex}>
	<div class="grid">
		{#each examsList as r, i}
			<div class="exam padding no-elevate secondary-container s12 m6 l4">
				<h5>{r.detailedname}</h5>
				<nav class="no-space">
					<a class="button left-round secondary" href={`/exams/theory/final/${r.name}`}>
						<span>Final</span>
					</a>

					<a class="button  right-round secondary" href={`/exams/theory/mid/${r.name}`}>
						<span>Mid</span>
					</a>
				</nav>
			</div>
		{/each}
	</div>
</div>

<style>
	.exam {
		margin: 0;
		border-radius: 0.2rem;
	}
</style>

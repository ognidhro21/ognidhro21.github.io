<script>
	export let tabindex = 1;
	export let examsList;
</script>

<div id="panel-2" class="tab-panel" role="tabpanel" {tabindex}>
	<h2>Exams</h2>

	{#each examsList as r, i}
		<h4>{r.detailedname}</h4>
		<a href={`/exams/theory/final/${r.name}`}>
			<h4>Final</h4>
		</a>
		<a href={`/exams/theory/mid/${r.name}`}>
			<h4>Mid Term</h4>
		</a>
	{/each}
</div>

<style>
	h4 {
		margin: 0;
		margin-bottom: 1rem;
	}
</style>

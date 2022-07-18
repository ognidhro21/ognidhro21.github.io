<script>
	export let tabindex = 1;
	import Anim from '../../Anim.svelte';
	export let examsList;
</script>

<Anim>
	<div id="panel-2" class="tab-panel" role="tabpanel" {tabindex}>
		<h2>Exams</h2>

		{#each examsList as r, i}
			<h4>{r.detailedname}</h4>
			<div class="flex">
				<a class="mie24" href={`/exams/theory/final/${r.name}`}>
					<h4>Final</h4>
				</a>
				<a href={`/exams/theory/mid/${r.name}`}>
					<h4>Mid Term</h4>
				</a>
			</div>
		{/each}
	</div>
</Anim>

<style>
	h4 {
		margin: 0;
		margin-bottom: 1rem;
	}
</style>

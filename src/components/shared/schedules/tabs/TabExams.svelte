<script>
	export let tabindex = 1;
	import Anim from '../../Anim.svelte';
	export let examsList;
	import './TabData.css';
</script>

<Anim>
	<div id="panel-2" class="tab-panel" role="tabpanel" {tabindex}>
		<h2>Exams</h2>

		{#each examsList as r, i}
			<div class="entry">
				<h3>{r.detailedname}</h3>
				<div class="flex">
					<a class="mie24" href={`/exams/theory/final/${r.name}`}>
						<h4>Final</h4>
					</a>
					<a href={`/exams/theory/mid/${r.name}`}>
						<h4>Mid Term</h4>
					</a>
				</div>
			</div>
		{/each}
	</div>
</Anim>

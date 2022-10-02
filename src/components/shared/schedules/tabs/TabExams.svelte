<script>
	export let tabindex = 1;
	import Anim from '../../Anim.svelte';
	export let examsList;
	import './TabData.css';
</script>

<div id="panel-2" class="page active" role="tabpanel" {tabindex}>
	<h3>Exams</h3>

	{#each examsList as r, i}
		<article class="padding ">
			<h5>{r.detailedname}</h5>
			<nav class="no-space">
				<a class="button border left-round" href={`/exams/theory/final/${r.name}`}>
					<span>Final</span>
				</a>
				<a class="button border right-round" href={`/exams/theory/mid/${r.name}`}>
					<span>Mid</span>
				</a>
			</nav>
		</article>
	{/each}
</div>

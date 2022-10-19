<script>
	export let tabindex = 1;
	import Anim from '../../Anim.svelte';
	export let examsList;
	import './TabData.css';
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div id="panel-2" class="page active left" role="tabpanel" {tabindex}>
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

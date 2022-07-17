<script>
	export let tabindex = 1;
	import { fade, fly } from 'svelte/transition';
	export let examsList;
</script>

<div
	id="panel-2"
	class="tab-panel"
	role="tabpanel"
	{tabindex}
	in:fly={{
		y: 100,
		duration: 350,
		delay: 120 + 100
	}}
	out:fade={{
		duration: 120
	}}
>
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

<style>
	h4 {
		margin: 0;
		margin-bottom: 1rem;
	}
</style>

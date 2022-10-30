<script>
	import Container from '../../components/shared/Container.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const { results } = data;
</script>

<Container>
	<section class="grid">
		{#each results as { id, detailedname }}
			<article class="s12 m6 l4">
				<h4>{detailedname} Classification</h4>
				<a href="/classification/{id}" class="button no-margin">View</a>
			</article>
		{/each}
	</section>
</Container>

<style>
	article {
		margin: 0;
	}
</style>

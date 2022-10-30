<script>
	import Container from '../../components/shared/Container.svelte';
	import PageContainer from '../../components/shared/PageContainer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const { results } = data;
</script>

<PageContainer icon="leaderboard" title="Hall of Fame">
	<section class="grid">
		{#each results as { id, detailedname }}
			<article class="s12 m6 l4">
				<h4>{detailedname} Classification</h4>
				<a href="/classification/{id}" class="button no-margin">View</a>
			</article>
		{/each}
	</section>
</PageContainer>

<style>
	article {
		margin: 0;
	}
</style>

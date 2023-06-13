<script>
	import PageContainer from '$lib/components/shared/PageContainer.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	const { results } = data;
</script>

<PageContainer icon="leaderboard" title="Hall of Fame">
	<section class="grid">
		{#each results as { id, title }}
			<article class="s12 m6 l4 no-elevate secondary-container">
				<h4>{title} Classification</h4>
				<a href="/classification/{id}" class="button no-margin secondary">View</a>
			</article>
		{/each}
	</section>
</PageContainer>

<style>
	article {
		margin: 0;
	}
</style>

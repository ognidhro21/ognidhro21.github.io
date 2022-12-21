<script>
	import PageContainer from '$lib/components/shared/PageContainer.svelte';

	export let data;
	const { materialsList } = data;
</script>

<PageContainer title="Materials" icon="collections_bookmark">
	<div class="grid">
		{#each materialsList as material}
			<article class="s12 m6 l4 no-margin">
				<div>
					<h6 class="upper">{material.meta.course}</h6>
					<h5>{material.meta.title}</h5>
				</div>
				<div>
					<a href={material.path} class="button no-margin">View</a>
				</div>
			</article>
		{/each}
	</div>
</PageContainer>

<style>
	h6,
	h5 {
		margin-top: 0;
	}
	article {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>

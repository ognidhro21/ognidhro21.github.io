<script>
	import PageContainer from '$lib/components/shared/PageContainer.svelte';

	export let data;
	const { ranks, info } = data.results.default;
</script>

<PageContainer title="{info.detailedname} Classification">
	{#each ranks as { ID, GPA }, index}
		<div class="one row justify-between " class:tertiary-container={index === 0}>
			<div class="max">
				<h6>{index + 1}</h6>
				{#each ID as id, index (id)}
					<div class="row">
						<h5>{id}</h5>
					</div>
				{/each}
			</div>
			<p>{GPA}</p>
		</div>
	{/each}
</PageContainer>

<style>
	.one {
		border-bottom: 1px solid var(--surface-variant);
		padding: 1.3rem;
	}
	.tertiary-container {
		padding-block: 3rem;
	}
	.one.tertiary-container {
		border: none;
		border-radius: 1rem;
	}
</style>

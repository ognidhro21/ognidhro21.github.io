<script>
	import Container from '../../../components/shared/Container.svelte';
	import PageContainer from '../../../components/shared/PageContainer.svelte';

	export let data;
	const { ranks, info } = data.results.default;
</script>

<PageContainer title="{info.detailedname} Classification">
	{#each ranks as { ID, GPA }, index}
		<div class="one row justify-between tertiary-border" class:primary-container={index === 0}>
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
		border-bottom: 1px solid;
		padding: 24rem;
	}
	.primary-container {
		padding-block: 48rem;
	}
	.one.primary-container {
		border: none;
	}
</style>

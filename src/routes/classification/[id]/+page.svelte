<script>
	import PageContainer from '$lib/components/shared/PageContainer.svelte';

	export let data;
	const { results, info } = data.results.default;
</script>

<PageContainer title="{info.title} Classification">
	{#each results as { position, students, gpa }, index}
		<div class="one row justify-between" class:tertiary-container={position === 1}>
			<div class="max">
				<h6>{position}</h6>
				{#each students as { id }}
					<div class="row">
						<h5>{id}</h5>
					</div>
				{/each}
			</div>
			<p>{gpa}</p>
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

<script>
	import { getCode } from '../../lib/courses';
	import Container from '../../components/shared/Container.svelte';
	export let data;
	const current = 'L2S1';
</script>

<Container>
	{#each data.res as d}
		<details class="disclose mbs24" open={d[0].id === current}>
			<summary class="disclose-title"><h2>{d[0].id}</h2></summary>
			<div class="disclose-panel">
				{#each d as k}
					<div class="card">
						<h4>{k.title}</h4>
						<!-- <a href={`/courses/${k.id}-${k.title}-theory`}>Theory</a> -->
						<!-- wont be added for now -->
						{#if !k.onlytheory}
							<a href={k.title}>Practical</a>
							<p>{getCode(k.title).code}</p>
						{/if}
					</div>
				{/each}
			</div>
		</details>
	{/each}
</Container>

<style>
	.card,
	summary {
		padding: 2rem;
		background-color: var(--plain);
		border-radius: 0.4rem;
		margin-bottom: 1rem;
	}
	summary {
		background-color: var(--plain);
		padding: 2rem;
		margin-bottom: 0.2rem;
	}

	.card h4 {
		margin: 0;
	}
	.card a {
		margin-right: 1rem;
	}
	summary > h2 {
		display: inline;
	}
</style>

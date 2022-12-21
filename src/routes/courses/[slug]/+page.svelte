<!-- src/routes/[slug]/+page.svelte -->
<script>
	import Container from '$lib/components/shared/Container.svelte';
	export let data;
</script>

<Container>
	<h1 class="mbs24">{data.title}</h1>
	<img src={data.featuredImg} alt="" />
	<section class="post">
		{@html data.content}
	</section>
</Container>

<style>
	.post {
		margin-bottom: 2rem;
		padding: 1rem;
		background-color: var(--plain);
	}
</style>

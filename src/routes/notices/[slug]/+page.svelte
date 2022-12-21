<!-- src/routes/[slug]/+page.svelte -->
<script>
	import Container from '$lib/components/shared/Container.svelte';
	export let data;
</script>

<Container>
	<h1 class="mbs24">{data.title}</h1>
	<img src={data.featuredImg} alt="" />
	<article class="post">
		{@html data.content}
	</article>
</Container>

<style>
	img {
		max-width: 100%;
	}
	ul,
	ol {
		list-style: none;
	}
</style>

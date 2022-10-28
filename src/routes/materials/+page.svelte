<script>
	export let data;
	const { materialsList } = data;
</script>

<main class="responsive">
	{#each materialsList as material}
		<article>
			<h6 class="upper">{material.meta.course}</h6>
			<h5>{material.meta.title}</h5>
			<a href={material.path} class="button no-margin">View</a>
		</article>
	{/each}
</main>

<style>
	h6,
	h5 {
		margin-top: 0;
	}
</style>

<script>
	const layers = [0, 1, 2, 3];

	let y;
</script>

<svelte:window bind:scrollY={y} />

<div class="container" href="https://www.devsamples.com">
	{#each layers as layer}
		<img
			style="transform: translate(0, {y < 2 ? y * layer : (-y * layer) / (layers.length - 1)}px)"
			src="https://www.devsamples.com/parallax-layer{layer}.png"
			alt="parallax layer {layer}"
		/>
	{/each}
</div>

<p class="text">
	{y} Pixels scrolled
</p>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	.text {
		color: #ff4163;
		text-shadow: 1px 1px #ffffff;
		position: fixed;
		left: 15px;
		top: 15px;
		z-index: 100;
	}

	.container {
		background-color: #121212;
		height: 1000px;
		width: 100%;
	}

	.container img {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
	}
</style>

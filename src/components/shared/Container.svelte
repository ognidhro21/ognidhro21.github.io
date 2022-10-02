<script>
	export let fluid = true;
</script>

<main class:responsive={fluid}>
	<slot />
</main>

<style>
	main {
		padding-top: 24rem;
	}
	main.responsive {
		min-height: auto;
	}
</style>

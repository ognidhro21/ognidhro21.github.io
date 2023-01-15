<script>
	export let fluid = true;
</script>

<main class:responsive={fluid}>
	<slot />
</main>

<style>
	main.responsive {
		padding-top: 1.4rem;
	}
	main.responsive {
		min-height: auto;
	}
</style>

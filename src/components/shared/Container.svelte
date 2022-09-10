<script>
	export let fluid = false;
	export let bgColor = '--agnostic-light';
</script>

<div
	class="container"
	class:fluid
	style={`
	background-color: ${bgColor};
`}
>
	<div class="children">
		<slot />
	</div>
</div>

<style>
	.container {
		margin: 0 auto;
		padding: 1rem;
		max-width: 1024px;
		height: 100%;
	}
	.children {
		max-width: 1024px;
		margin: 0 auto;
	}
	.fluid {
		max-width: 100%;
		padding: 0;
	}
</style>

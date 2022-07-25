<script>
	export let palette = {
		name: '',
		contrast: '',
		color: ''
	};
</script>

<div class="bg" style="background-color: {palette.color}; color: {palette.contrast}">
	<h4>{palette.name}</h4>
	<p>{palette.color}</p>
</div>

<style>
	.bg {
		background-color: var(--agnostic-light-modelight);
		border: 1px solid #000;
		padding: 1rem;
	}
	h4 {
		margin: 0;
	}
	p {
		text-transform: uppercase;
	}
</style>

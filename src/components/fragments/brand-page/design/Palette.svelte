<script>
	export let palette = {
		name: '',
		contrast: '',
		colors: [
			{
				code: '',
				name: 0
			}
		]
	};
	const defaultColor = () => {
		return palette.colors.find((color) => color.default);
	};
	$: console.log(defaultColor());
</script>

<div class="palette">
	<div
		class="palette-name"
		style="background-color: #{defaultColor().code}; color: {palette.contrast}; padding: 1rem"
	>
		<h4>{palette.name}</h4>
		<p>{defaultColor().code} <span>{defaultColor().name}</span></p>
	</div>
	{#each palette.colors as color (color.code)}
		<div class="color" style="background-color: #{color.code}">
			<p>{color.name}</p>
			<p>#{color.code}</p>
		</div>
	{/each}
</div>

<style>
	h4 {
		margin: 0;
	}
	.color {
		display: flex;
		padding: 1rem;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	p {
		margin: 0;
		text-transform: uppercase;
	}
	.palette-name p {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>

<script>
	let primary = 'var(--agnostic-primary)';
	let light = 'var(--agnostic-light-modelight)';
</script>

<h4>Logo</h4>
<div class="logo-colors">
	<div class="torch" style={`background-color:${primary}`}>
		<h4>Torch Red</h4>
		<p>#ff1744</p>
	</div>
	<div class="lavender" style={`background-color:${light}`}>
		<h4>Lavender Blush</h4>
		<p>#ffebee</p>
	</div>
</div>

<style>
	.logo-colors {
		display: grid;
		/* make three columns */
		grid-template-columns: repeat(3, 1fr);
	}
	.logo-colors .torch {
		/* span to two-thirds of the grid */
		grid-column: span 2;
		color: var(--agnostic-light-modelight);
	}
	.logo-colors .lavender {
		border: 1px solid rgb(0, 0, 0);
		color: var(--agnostic-primary);
	}
	.logo-colors > div {
		padding: 1rem;
	}
	.logo-colors h4 {
		margin: 0;
	}
	p {
		text-transform: uppercase;
	}
</style>

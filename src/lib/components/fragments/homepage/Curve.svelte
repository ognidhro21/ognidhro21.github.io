<script>
	import C from './Curve.svg';
</script>

<img src={C} alt="" />

<style>
	img {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 100px;
	}

	@media (max-width: 699px) {
		.svg--lg {
			display: none;
		}
	}

	@media (min-width: 700px) {
		.svg--sm {
			display: none;
		}
	}
</style>

<script>
	import logo from '../../../images/O21-Big.png';
</script>

<div class="responsive center-align middle-align primary-container">
	<div class="hero ">
		<div class="medium-space" />
		<img src={logo} alt="" />
		<div class="medium-space" />
		<a href="/routines/L2S1" class="button primary small-elevate">L2S1 Routine </a>
	</div>
</div>

<style>
	div.responsive {
		min-height: 50vh;
	}
	.hero a {
		z-index: 4;
	}
	.hero > img {
		width: 60%;
		z-index: 2;
	}

	/* media for tablet */
	@media (min-width: 568px) {
		.hero > img {
			width: 25vw;
		}
	}
	/* media for tablet */
	@media (min-width: 1000px) {
		.hero > img {
			width: 20vw;
		}
	}
</style>

<script>
	import logo from '../../../images/O21-Big.png';
</script>

<div class="responsive center-align middle-align primary-container">
	<div class="hero ">
		<div class="medium-space" />
		<img src={logo} alt="" />
		<div class="medium-space" />

		<nav class="no-space">
			<div class="small-padding border left-round">
				<span>L2S1</span>
			</div>
			<a href="/exams/theory/mid/L2S1" class="button primary small-elevate no-round"
				>Mid Schedules
			</a>
			<a href="/routines/L2S1" class="button border primary-border right-round">Class Routine </a>
		</nav>
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

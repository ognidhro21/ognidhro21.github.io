<script>
	import logo from '$lib/images/O21-Big.png';
</script>

<div class="hero-container responsive center-align middle-align">
	<div class="hero">
		<img src={logo} alt="" />
		<div class="medium-space" />
		<div class="fixer center-align middle-align">
			<nav class="no-space">
				<span class="small-padding border left-round bold">
					<span>L3S2</span>
				</span>
				<a href="routines/L3S2" class="button secondary right-round">Classes</a>
				<!-- <a href="/exams/theory/final/L3S2" class="button primary right-round">Final Exam</a> -->
				<!-- <a href="/exams/theory/mid/L3S1" class="button primary right-round">Mid Schedules</a> -->
			</nav>
		</div>
	</div>
</div>

<style>
	.responsive {
		min-height: 50vh;
	}
	.hero-container {
		background:
			linear-gradient(
				135deg,
				var(--body) 21px,
				var(--primary) 22px,
				var(--primary) 24px,
				transparent 24px,
				transparent 67px,
				var(--primary) 67px,
				var(--primary) 69px,
				transparent 69px
			),
			linear-gradient(
					225deg,
					var(--body) 21px,
					var(--primary) 22px,
					var(--primary) 24px,
					transparent 24px,
					transparent 67px,
					var(--primary) 67px,
					var(--primary) 69px,
					transparent 69px
				)
				0 64px;
		background-size: 128px 64px;
		background-color: var(--body);
		animation: bgchange 7s infinite;
	}
	@keyframes bgchange {
		from {
			background-size: 128px 128px;
		}
		to {
			background-size: 64px 128px;
		}
	}
	.hero {
		position: relative;
		isolation: isolate;
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

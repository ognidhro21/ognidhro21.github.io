<script>
	import Container from '../../shared/Container.svelte';
	import logo from '../../../images/O21-Big.png';
	import BG from '../../../images/OgnidhroHero.svg';
	import Anim from '../../shared/Anim.svelte';
	import Button from '../../../components/shared/Button.svelte';
</script>

<Container>
	<div class="hero">
		<img src={logo} alt="" />
		<div class="medium-space" />
		<a href="/routines/L2S1" class="button primary small-elevate">L2S1 Routine </a>
	</div>
</Container>

<style>
	.hero-container {
		position: relative;
		background: linear-gradient(0deg, var(--plain) 25%, var(--agnostic-primary) 25%);
	}
	.hero {
		min-height: 50vh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		z-index: 2;
	}
	.hero a {
		z-index: 4;
	}
	.hero > img {
		width: 60%;
		z-index: 2;
	}
	.curve {
		position: absolute;
		bottom: 0;
		z-index: 1;
		width: 100%;
	}
	.curve img {
		width: 100vw;
	}
	/* media for tablet */
	@media (min-width: 568px) {
		.hero > img {
			width: 25vw;
		}
		.hero-container {
			background: linear-gradient(0deg, var(--plain) 35%, var(--agnostic-primary) 35%);
		}
	}
	/* media for tablet */
	@media (min-width: 1000px) {
		.hero > img {
			width: 20vw;
		}
		.hero-container {
			background: linear-gradient(0deg, var(--plain) 55%, var(--agnostic-primary) 55%);
		}
	}
</style>

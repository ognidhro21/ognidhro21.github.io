<script>
	import Container from '../../shared/Container.svelte';
	import logo from '../../../images/O21-Big.png';
</script>

<Container fluid bgColor="var(--agnostic-primary-modelight)"
	><div class="hero">
		<img src={logo} alt="" />
	</div></Container
>

<style>
	.hero {
		min-height: 90vh;
		width: 100%;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	img {
		width: 70%;
	}

	/* media for tablet */
	@media (min-width: 768px) {
		img {
			width: 50%;
		}
	}
	/* media for tablet */
	@media (min-width: 1024px) {
		img {
			width: 40%;
		}
	}
</style>

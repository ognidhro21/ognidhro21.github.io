<script>
	import { page } from '$app/stores';
	import Container from '../components/shared/Container.svelte';
	import SEO from '../components/shared/SEO/index.svelte';
</script>

<SEO title={$page.status} />
<Container>
	<div class="error-container">
		<div class="texts">
			<div class="top">
				<h2>Oh no...</h2>
				<p>An error just occured</p>
			</div>
			<div class="error-texts">
				<p>{$page.error.message}</p>
				<p>Status code: <span>{$page.status}</span></p>
			</div>
			<div class="bottom">
				<h2>Anyway,</h2>
				<a href="/">Go back to the home</a>
			</div>
		</div>
		<div class="img">
			<img src={Error} alt="" />
		</div>
	</div>
</Container>

<style>
	.error-container h2,
	.error-container p {
		margin: 0;
	}
	.error-container {
		min-height: 70vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 1rem;
		background-color: var(--plain);
		border-radius: 1rem;
		gap: 1rem;
		overflow-wrap: break-word;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
	}
	.error-container .top {
		margin-bottom: 2rem;
	}
	.error-container .top h2 {
		font-size: 400%;
		color: var(--agnostic-primary);
		font-weight: 300;
		line-height: 1.1;
	}
	.error-container .error-texts {
		max-width: 100%;
	}
	.error-container .error-texts p {
		text-overflow: clip;
	}
	.error-container .error-texts span {
		color: var(--agnostic-primary);
	}
	.error-container .bottom {
		margin-top: 2rem;
	}
	.error-container .bottom h2 {
		text-transform: capitalize;
	}
	.error-container .img {
		display: flex;
		justify-content: flex-end;
	}
	.error-container img {
		width: 100%;
	}
	/* media for tab */
	@media (min-width: 768px) {
		.error-container {
			min-width: 50%;

			flex-direction: row;
			align-items: center;
		}
		.error-container .texts {
			min-width: 50%;
		}
	}
</style>

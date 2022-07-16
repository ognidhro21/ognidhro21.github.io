<script>
	import Button from '../../shared/Button.svelte';
	import Container from '../../shared/Container.svelte';
	import SchedImg from '../../../images/well_done_undraw.svg';
	import FBImg from '../../../images/social_undraw.svg';

	const links = [
		{
			path: '/schedules',
			title: 'Schedules',
			details: 'Check out the routine of the Ognidhro 21!',
			bgImg: SchedImg
		},
		{
			path: 'https://www.facebook.com/ognidhro21/',
			title: 'Find us on Facebook',
			details: 'Like us on Facebook to keep up with the updates!',
			bgImg: FBImg
		}
	];
</script>

<Container>
	<div class="cards">
		{#each links as link}
			<a href={link.path} class="card">
				<div class="texts">
					<h3>{link.title}</h3>
					<p>{link.details}</p>
					<Button mode="primary" isCapsule>Go!</Button>
				</div>
				<img src={link.bgImg} alt="" />
			</a>
		{/each}
	</div>
</Container>

<style>
	* {
		margin: 0;
	}
	p {
		line-height: 1.1;
		margin-bottom: 1rem;
	}
	.cards {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 4rem 0;
	}
	.card {
		width: 100%;
		height: 100%;
		background-color: var(--plain);
		border-radius: 1rem;
		padding: 2rem 1rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		transition: all 0.3s ease-in-out;
		z-index: 1;
		color: var(--agnostic-dark);
		position: relative;
		overflow: hidden;
		border: 1px solid #fff;
	}
	.card:hover {
		box-shadow: 0px 0px 45px 14px rgba(141, 38, 38, 0.1);
		transform: rotate(1deg) scale(1.1);
		z-index: 2;
		text-decoration: none;
	}
	.card img {
		position: absolute;
		top: 0;
		right: 0;
		opacity: 1;
		z-index: 1;
		transition: all 0.3s ease-in-out;
	}

	.texts {
		z-index: 2;
	}
	/* media for mobile */
	@media (max-width: 768px) {
		.card img {
			width: 50%;
			opacity: 0.1;
		}
	}
</style>

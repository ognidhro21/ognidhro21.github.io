<script>
	import Button from '../../shared/Button.svelte';
	import Container from '../../shared/Container.svelte';
	import SchedImg from '../../../images/well_done_undraw.svg';
	import FBImg from '../../../images/social_undraw.svg';
	import Brand from '../../../images/brand_guide_undraw.svg';

	const links = [
		{
			path: '/schedules',
			title: 'Schedules',
			details: 'Check out the routine of Ognidhro 21',
			bgImg: SchedImg
		},
		// {
		// 	path: '/brand-guidelines',
		// 	title: 'Brand Guidelines',
		// 	details: 'Brand Guidelines of Ognidhro 21',
		// 	bgImg: Brand,
		// 	scroll: true
		// },
		{
			path: 'https://www.facebook.com/ognidhro21/',
			title: 'Find us on Facebook',
			details: 'Like us on Facebook to keep up with the updates!',
			bgImg: FBImg,
			target: '_blank'
		},
		{
			path: 'https://github.com/ognidhro21/ognidhro21.github.io',
			title: 'Source Code',
			details: 'The code of this site',
			target: '_blank'
		}
	];
</script>

<Container fluid>
	{#each links as link}
		<article>
			<h5>{link.title}</h5>
			<p>{link.details}</p>
			<nav>
				<a
					class="button border"
					href={link.path}
					data-sveltekit-noscroll={link.scroll}
					target={link.target}>Go!</a
				>
			</nav>
			<img src={link.bgImg} alt="" />
		</article>
	{/each}
</Container>

<style>
	article {
		position: relative;
		overflow: hidden;
		z-index: 2;
	}
	article img {
		position: absolute;
		right: 0;
		top: 0;
		z-index: -1;
		max-width: 50vw;
		opacity: 0.4;
	}
</style>

<script>
	import Button from '../../shared/Button.svelte';
	import Container from '../../shared/Container.svelte';

	const links = [
		{
			path: '/schedules',
			title: 'Schedules',
			details: 'Check out the routine of Ognidhro 21'
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
		</article>
	{/each}
</Container>

<style>
	article {
		position: relative;
		overflow: hidden;
		z-index: 2;
	}
</style>

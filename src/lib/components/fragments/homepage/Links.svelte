<script>
	import Container from '$lib/components/shared/Container.svelte';

	const links = [
		{
			path: '/classification',
			title: 'Hall of Fame',
			details: 'Results of previous semesters',
			color: 'primary'
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
			target: '_blank',
			color: 'tertiary'
		},
		{
			path: 'https://github.com/ognidhro21/ognidhro21.github.io',
			title: 'Source Code',
			details: 'The code of this site',
			target: '_blank',
			color: 'secondary'
		}
	];
</script>

<Container fluid>
	<div class="grid">
		{#each links as link}
			<article class="no-margin s12 l4 secondary-container">
				<hbox>
					<h5>{link.title}</h5>
					<p>{link.details}</p>
				</hbox>
				<nav>
					<a
						class="button secondary"
						href={link.path}
						data-sveltekit-noscroll={link.scroll}
						target={link.target}>Go!</a
					>
				</nav>
			</article>
		{/each}
	</div>
</Container>

<style>
	.grid {
		margin-block: 4rem;
	}
	article {
		position: relative;
		overflow: hidden;
		z-index: 2;
		box-shadow: none;
	}
	.grid {
		margin-block: 1rem;
	}
</style>

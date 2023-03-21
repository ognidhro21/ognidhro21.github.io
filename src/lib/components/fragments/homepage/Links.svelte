<script>
	import CardAnchor from '$lib/components/shared/CardAnchor.svelte';
	import Container from '$lib/components/shared/Container.svelte';

	const links = [
		{
			path: '/classification',
			title: 'Hall of Fame',
			details: 'Results of previous semesters',
			color: 'primary',
			icon: 'leaderboard'
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
			color: 'tertiary',
			icon: 'thumb_up'
		},
		// {
		// 	path: 'https://github.com/ognidhro21/ognidhro21.github.io',
		// 	title: 'Source Code',
		// 	details: 'The code of this site',
		// 	target: '_blank',
		// 	color: 'secondary'
		// }
		{
			path: '/materials',
			title: 'Study Materials',
			details: 'Some helpful guides and notes',
			color: 'primary',
			icon: 'book'
		}
	];
</script>

<Container fluid>
	<div class="grid">
		{#each links as link}
			<CardAnchor href={link.path} target={link.target}>
				<span slot="title">
					{#if link.icon}
						<i>{link.icon}</i>
					{/if}
					{link.title}
				</span>
				<span slot="subtitle">
					{link.details}
				</span>
			</CardAnchor>
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
	.materials {
		padding-block: 4rem;
		background-color: var(--secondary);
	}
</style>

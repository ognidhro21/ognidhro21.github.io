<script>
	import Container from '../../components/shared/Container.svelte';

	export let data;
</script>

<Container>
	<h2>Notices</h2>
	{#each data.noticeList as post}
		<a href={post.path}>
			<img src={post.meta.featuredImg} alt="" />
			<h2>
				{post.meta.title}
			</h2>
			<p>{post.meta.excerpt}</p>
		</a>
	{/each}
</Container>

<style>
	a {
		padding: 1rem;
		border-radius: 0.4rem;
		transition: all 0.2s ease-in-out;
		display: inline-block;
		position: relative;
		overflow: hidden;
		background-color: var(--plain);
		z-index: 2;
	}
	a h2,
	a p {
		margin: 0;
		color: var(--agnostic-dark);
	}

	a:hover {
		text-decoration: none;
		box-shadow: 0px 0px 45px 4px rgba(141, 38, 38, 0.1);
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
		opacity: 0.1;
		z-index: -1;
	}
	@media (min-width: 625px) {
		a:hover {
			transform: rotate(1deg) scale(1.1);
		}
	}
</style>

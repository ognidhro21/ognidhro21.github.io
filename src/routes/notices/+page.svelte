<script>
	import DATA from '../../stores/NoticeInfo';

	import Container from '../../components/shared/Container.svelte';
	import SEO from '../../components/shared/SEO/index.svelte';
	import { onMount } from 'svelte';
	import Anim from '../../components/shared/Anim.svelte';

	export let data;

	let noticeIds = [];

	let shownList = [];
	let newlyAdded = [];

	onMount(() => {
		newlyAdded = data.noticeList.filter((notice) => {
			return !$DATA.shownIds.includes(notice.meta.id);
		});
		data.noticeList.forEach((element) => {
			noticeIds = [element.meta.id, ...noticeIds];
		});

		shownList = $DATA.shownIds.map((id) => {
			// skip newlyAdded
			if (newlyAdded.find((notice) => notice.id === id)) {
				return null;
			}
			return data.noticeList.find((notice) => notice.meta.id === id);
		});
		$DATA.shownIds = noticeIds;

		// remove from $DATA.shownIds those that are not in noticeList
		$DATA.shownIds = $DATA.shownIds.filter((id) => {
			return data.noticeList.find((notice) => notice.meta.id === id);
		});
		$DATA.newlyAdded = [];
	});
</script>

<SEO title="Notices" />
<Anim>
	<Container>
		<h2>Notices</h2>
		{#each data.noticeList as post}
			<a href={post.path}>
				<img src={post.meta.featuredImg} alt="" />
				<h3>
					{post.meta.title}
				</h3>
				<p>{post.meta.excerpt}</p>
			</a>
		{/each}
	</Container>
</Anim>

<style>
	a {
		padding: 2rem;
		border-radius: 0.4rem;
		transition: all 0.2s ease-in-out;
		display: block;
		position: relative;
		overflow: hidden;
		background-color: var(--plain);
		z-index: 2;
		margin-bottom: 1rem;
	}
	a h3,
	a p {
		margin: 0;
		color: var(--agnostic-dark);
	}

	a:hover {
		text-decoration: none;
		box-shadow: 0px 0px 45px 4px rgba(141, 38, 38, 0.1);
		z-index: 3;
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

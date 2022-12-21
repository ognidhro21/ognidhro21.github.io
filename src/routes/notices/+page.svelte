<script>
	import { onMount } from 'svelte';
	import DATA from '$lib/stores/NoticeInfo';
	import SEO from '$lib/components/shared/SEO/index.svelte';
	import PageContainer from '$lib/components/shared/PageContainer.svelte';

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
<PageContainer title="Notices" icon="notifications">
	{#each data.noticeList as post}
		<article class="padding">
			<!-- <img src={post.meta.featuredImg} alt="" /> -->
			<h3>
				{post.meta.title}
			</h3>
			<p>{post.meta.excerpt}</p>
			<a href={post.path} class="button border no-margin">More</a>
		</article>
	{/each}
</PageContainer>

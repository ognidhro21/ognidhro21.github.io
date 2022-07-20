<script context="module">
	import DATA from '../stores/NoticeInfo';
	import SEO from '../components/shared/SEO/index.svelte';
	export async function load({ fetch }) {
		const noticeList = await fetch(`/api/notices.json`).then((res) => res.json());
		return {
			props: {
				noticeList
			}
		};
	}
</script>

<script>
	import { onMount } from 'svelte';
	import Anim from '../components/shared/Anim.svelte';
	import Container from '../components/shared/Container.svelte';
	import NoticeCard from '../components/shared/notices/NoticeCard.svelte';

	export let noticeList;
	let noticeIds = [];

	let shownList = [];
	let newlyAdded = [];

	onMount(() => {
		newlyAdded = noticeList.filter((notice) => {
			return !$DATA.shownIds.includes(notice.id);
		});
		noticeList.forEach((element) => {
			noticeIds = [element.id, ...noticeIds];
		});

		shownList = $DATA.shownIds.map((id) => {
			// skip newlyAdded
			if (newlyAdded.find((notice) => notice.id === id)) {
				return null;
			}
			return noticeList.find((notice) => notice.id === id);
		});
		$DATA.shownIds = noticeIds;

		// remove from $DATA.shownIds those that are not in noticeList
		$DATA.shownIds = $DATA.shownIds.filter((id) => {
			return noticeList.find((notice) => notice.id === id);
		});
		$DATA.newlyAdded = [];
	});
</script>

<SEO title="Notices" />
<Anim>
	<Container>
		<h3>Notices</h3>
		<hr />
		{#if newlyAdded.length > 0}
			<h4>Unseen</h4>
			<div class="notices-container">
				{#each newlyAdded as notice}
					<NoticeCard shown={false} data={notice} />
				{/each}
			</div>
		{/if}
		{#if shownList.length > 0}
			<h4>Seen</h4>
			<div class="notices-container">
				{#each shownList as notice}
					<NoticeCard shown={true} data={notice} />
				{/each}
			</div>
		{/if}
	</Container>
</Anim>

<style>
	h3,
	h4 {
		margin: 0;
		margin-top: 1rem;
	}
</style>

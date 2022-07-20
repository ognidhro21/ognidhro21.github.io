<script context="module">
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
	import '../styles/css/common.min.css';
	import '../styles/css/common.properties.min.css';
	import '../styles/css/common.resets.min.css';
	import '../styles/css/common.utilities.min.css';
	import '../styles/css/opinions.min.css';
	import '../styles/agnostic-overrides.css';
	import '../styles/select.css';
	import Navbar from '../components/shared/Navbar.svelte';
	import DATA from '../stores/NoticeInfo';
	import { onMount } from 'svelte';

	export let noticeList;

	let newlyAdded = [];
	onMount(() => {
		newlyAdded = noticeList.filter((notice) => {
			return !$DATA.shownIds.includes(notice.id);
		});
		$DATA.newlyAdded = newlyAdded;
	});
</script>

<div class="main">
	<Navbar />
	<div class="layout">
		<slot />
	</div>
</div>

<style>
	.layout {
		min-height: 90vh;
		position: relative;
		margin-bottom: 4rem;
	}
</style>

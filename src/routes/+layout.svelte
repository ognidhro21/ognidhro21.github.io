<script>
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import '$lib/styles/overrides.css';
	import '$lib/styles/colors.css';
	import Navbar from '$lib/components/shared/Navbar.svelte';
	import DATA from '$lib/stores/NoticeInfo';
	import dark from '$lib/stores/DarkMode';
	import { onMount } from 'svelte';
	import Analytics from '$lib/components/shared/Analytics.svelte';

	NProgress.configure({
		minimum: 0.16,
		showSpinner: true
	});
	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
	export let data;

	let newlyAdded = [];
	onMount(() => {
		newlyAdded = data.noticeList.filter((notice) => {
			return !$DATA.shownIds.includes(notice.meta.id);
		});
		$DATA.newlyAdded = newlyAdded;
	});
</script>

<Analytics />
<body class:dark={$dark}>
	<div class="layout">
		<Navbar />
		<slot />
	</div>
</body>

<style>
	.layout {
		min-height: 100vh;
		position: relative;
		margin-bottom: 4rem;
	}
</style>

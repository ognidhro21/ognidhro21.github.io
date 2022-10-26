<script>
	// import 'beercss';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import '../styles/beercss/beer.min.css';
	import '../styles/colors.css';
	import Navbar from '../components/shared/Navbar.svelte';
	import DATA from '../stores/NoticeInfo';
	import dark from '../stores/DarkMode';
	import { onMount } from 'svelte';
	import Analytics from '../components/shared/Analytics.svelte';

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
	<div class="main">
		<div class="layout">
			<Navbar />
			<div class="mt">
				<slot />
			</div>
		</div>
	</div>
</body>

<style>
	.layout {
		min-height: 100vh;
		position: relative;
		margin-bottom: 4rem;
	}
	.mt {
		margin-top: 128rem;
	}
</style>

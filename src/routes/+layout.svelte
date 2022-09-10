<script>
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import '../styles/css/common.min.css';
	import '../styles/css/opinions.min.css';
	import '../styles/agnostic-overrides.css';
	// import '../styles/material-type.css';
	import '../styles/select.css';
	import Navbar from '../components/shared/Navbar.svelte';
	import DATA from '../stores/NoticeInfo';
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
<div class="main">
	<Navbar />
	<div class="layout">
		<!-- {#if loading} -->
		<!-- <Jumper size="60" color="#FF3E00" unit="px" duration="1s" /> -->
		<!-- {:else} -->
		<slot />
		<!-- {/if} -->
	</div>
</div>

<style>
	.layout {
		min-height: 90vh;
		position: relative;
		margin-bottom: 4rem;
	}
</style>

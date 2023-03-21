<script>
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import '$lib/styles/overrides.min.css';
	import Navbar from '$lib/components/shared/Navbar.svelte';
	import { onMount } from 'svelte';
	import Analytics from '$lib/components/shared/Analytics.svelte';
	import OGDATA from '$lib/stores/Ognidhro_data';

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

	onMount(() => {
		let mode = window.ui('theme', $OGDATA.theme);
	});
</script>

<Analytics />
<div>
	<div class="layout">
		<Navbar />
		<slot />
	</div>
</div>

<style>
	.layout {
		min-height: 100dvh;
		position: relative;
		margin-bottom: 4rem;
	}
</style>

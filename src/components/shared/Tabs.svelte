<script>
	import Tab from './Tab.svelte';
	export let items = [];
	export let selected;
</script>

<section class="mbs12 tabs">
	<Tab {items} {selected} on:tabChanged />
	<div class="tab-items">
		<slot />
	</div>
</section>

<style>
	.tabs {
		width: 100%;
		background-color: var(--plain);
		padding: 1rem 0;
		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
		min-height: 70vh;
		border-radius: var(--border-radius);
	}
</style>

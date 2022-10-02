<script>
	import Tab from './Tab.svelte';
	export let items = [];
	export let selected;
</script>

<div>
	<Tab {items} {selected} on:tabChanged />
</div>
<slot />

<script>
	import { fade, fly } from 'svelte/transition';
	export let tabindex = 2;
</script>

<div
	id="panel-3"
	class="tab-panel"
	role="tabpanel"
	{tabindex}
	in:fly={{
		y: 100,
		duration: 350,
		delay: 120 + 100
	}}
	out:fade={{
		duration: 120
	}}
>
	<h3>Events will be displayed here.</h3>
</div>

<script>
	import { fade, fly } from 'svelte/transition';
	export let addDelay = 0;
</script>

<div
	in:fly={{
		y: 100,
		duration: 350,
		delay: 220 + 100 + addDelay
	}}
	class="animation-wrapper"
>
	<slot />
</div>

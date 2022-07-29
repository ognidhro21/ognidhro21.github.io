<script>
	import Background from './Palettes/Background.svelte';
	import Black from './Palettes/Black.svelte';
	import Danger from './Palettes/Danger.svelte';
	import Primary from './Palettes/Primary.svelte';
	import Secondary from './Palettes/Success.svelte';
	import Warning from './Palettes/Warning.svelte';
	import White from './Palettes/White.svelte';
</script>

<h4>Design</h4>
<div class="palettes">
	<Primary />
	<Secondary />
	<Warning />
	<Danger />
	<Background />
	<Black />
	<White />
</div>

<style>
	.palettes {
		display: grid;
		gap: 0.5rem;
		/* 2 col on mobile, 4 on destop */
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	}
</style>

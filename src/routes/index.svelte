<script>
	import { goto } from '$app/navigation';
	import Container from '../components/shared/Container.svelte';
	import About from '../components/fragments/homepage/About.svelte';
	import Hero from '../components/fragments/homepage/Hero.svelte';
	import Links from '../components/fragments/homepage/Links.svelte';

	function gotoRoutine() {
		goto('/routines/L1S2');
	}
</script>

<Hero />
<About />
<Links />

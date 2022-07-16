<script>
	import { goto } from '$app/navigation';
	import About from '../components/fragments/homepage/About.svelte';
	import Hero from '../components/fragments/homepage/Hero.svelte';
	import Links from '../components/fragments/homepage/Links.svelte';
	import SEO from '../components/shared/SEO/index.svelte';
</script>

<SEO title={`Home`} />
<Hero />
<About />
<Links />

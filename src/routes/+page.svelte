<script>
	import About from '../components/fragments/homepage/About.svelte';
	import Hero from '../components/fragments/homepage/Hero.svelte';
	import Links from '../components/fragments/homepage/Links.svelte';
	import MadeWith from '../components/fragments/homepage/MadeWith.svelte';
	import Anim from '../components/shared/Anim.svelte';
	import SEO from '../components/shared/SEO/index.svelte';
</script>

<SEO title={`Home`} />
<Hero />
<Links />
<About />
<MadeWith />

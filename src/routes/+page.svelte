<script>
	import About from '../components/fragments/homepage/About.svelte';
	import Forecast from '../components/fragments/homepage/Forecast.svelte';
	import Hero from '../components/fragments/homepage/Hero.svelte';
	import Links from '../components/fragments/homepage/Links.svelte';
	import MadeWith from '../components/fragments/homepage/MadeWith.svelte';
	import SEO from '../components/shared/SEO/index.svelte';
	export let data;
	const { Headline, rain } = data;
</script>

<SEO title={`Home`} />
<Hero />
<Forecast {Headline} {rain} />
<Links />
<About />
<MadeWith />

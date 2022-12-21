<script>
	import About from '$lib/components/fragments/homepage/About.svelte';
	import Forecast from '$lib/components/fragments/homepage/Forecast.svelte';
	import Hero from '$lib/components/fragments/homepage/Hero.svelte';
	import Links from '$lib/components/fragments/homepage/Links.svelte';
	import MadeWith from '$lib/components/fragments/homepage/MadeWith.svelte';
	import SEO from '$lib/components/shared/SEO/index.svelte';
	export let data;
	const { Headline, rain } = data;
</script>

<SEO title={`Home`} />
<Hero />
<Forecast {Headline} {rain} />
<Links />
<About />
<MadeWith />

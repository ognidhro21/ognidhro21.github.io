<script>
	import Charts from '$lib/components/fragments/homepage/Charts.svelte';
	import Forecast from '$lib/components/fragments/homepage/Forecast.svelte';
	import Hero from '$lib/components/fragments/homepage/Hero.svelte';
	import Links from '$lib/components/fragments/homepage/Links.svelte';
	import MadeWith from '$lib/components/fragments/homepage/MadeWith.svelte';
	import Ongoing from '$lib/components/fragments/homepage/Ongoing.svelte';
	import SEO from '$lib/components/shared/SEO/index.svelte';
	export let data;
	const { Headline, rain, classes } = data;
</script>

<SEO title={`Home`} />
<Hero />
<Ongoing {classes} />
<Forecast {Headline} {rain} />
<!-- <Actions /> -->
<Links />
<MadeWith />

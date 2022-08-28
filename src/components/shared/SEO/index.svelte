<script context="module">
	import defaultOgImage from '/OgnidhroCover.png';
	import defaultOgSquareImage from '/OgnidhroCoverSquare.png';

	import website from '$lib/config/website';
	import OpenGraph from './OpenGraph.svelte';
	import { base } from '$app/paths';
</script>

<script>
	const {
		author,
		entity,
		facebookAuthorPage,
		facebookPage,
		ogLanguage,
		siteLanguage,
		siteShortTitle,
		siteTitle,
		siteUrl,
		githubPage,
		themeColor
	} = website;

	export let article = false;
	export let breadcrumbs = [];
	export let entityMeta = null;
	export let lastUpdated;
	export let datePublished;
	export let metadescription =
		'Website for the Ognidhro 21, the 21st batch of Faculty of Agriculture, PSTU';
	export let slug;
	export let title;

	const defaultAlt = 'default image';

	// imported props with fallback defaults
	export let featuredImage = {
		url: base + defaultOgImage,
		alt: defaultAlt,
		width: 672,
		height: 448,
		caption: 'Home page'
	};
	export let ogImage = {
		url: base + defaultOgImage,
		alt: defaultAlt
	};
	export let ogSquareImage = {
		url: base + defaultOgSquareImage,
		alt: defaultAlt
	};

	const pageTitle = `${siteTitle} | ${title}`;
	const url = `${siteUrl}/${slug}`;
	const openGraphProps = {
		article,
		datePublished,
		lastUpdated,
		image: ogImage,
		squareImage: ogSquareImage,
		metadescription,
		ogLanguage,
		pageTitle,
		siteTitle,
		url,
		...(article ? { datePublished, lastUpdated, facebookPage, facebookAuthorPage } : {})
	};
	const schemaOrgProps = {
		article,
		author,
		breadcrumbs,
		datePublished,
		entity,
		lastUpdated,
		entityMeta,
		featuredImage,
		metadescription,
		siteLanguage,
		siteTitle,
		siteTitleAlt: siteShortTitle,
		siteUrl,
		title: pageTitle,
		url,
		facebookPage,
		githubPage
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta name="theme-color" content={themeColor} />
	<link rel="apple-touch-icon" href="/icons/icon-128x128.png" />
	<link rel="manifest" href="/manifest.json" />
</svelte:head>
<OpenGraph {...openGraphProps} />

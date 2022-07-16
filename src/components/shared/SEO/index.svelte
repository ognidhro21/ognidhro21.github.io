<script context="module">
	import defaultOgImage from '$lib/images/OgnidhroCover.png';
	import defaultOgSquareImage from '$lib/images/OgnidhroCoverSquare.png';

	import website from '$lib/config/website';
	import OpenGraph from './OpenGraph.svelte';
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
		githubPage
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
		url: defaultOgImage,
		alt: defaultAlt,
		width: 672,
		height: 448,
		caption: 'Home page'
	};
	export let ogImage = {
		url: defaultOgImage,
		alt: defaultAlt
	};
	export let ogSquareImage = {
		url: defaultOgSquareImage,
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
</svelte:head>
<OpenGraph {...openGraphProps} />

<script>
	import Container from './Container.svelte';
	import SEO from '$lib/components/shared/SEO/index.svelte';
	export let title;
	export let icon;
</script>

<SEO {title} />

<main class="responsive max secondary-container heading">
	<Container>
		<h3>
			{#if icon}
				<i>{icon}</i>
			{/if}
			<span>{title}</span>
		</h3>
	</Container>
</main>
<main class="responsive content">
	<section class="page left active">
		<slot />
	</section>
</main>

<style>
	i {
		margin-right: 0.8rem;
	}
	h3 {
		padding-top: 6rem;
	}
	.heading {
		padding-bottom: 1.2rem !important;
	}
	.content {
		padding-top: 1.2rem;
	}
	/* @media only screen and (max-width: 600px) {
		.content {
			margin-top: -1rem;
			background-color: var(--background);
			border-radius: 1rem 1rem 0 0;
		}
	} */
	@media print {
		h3 {
			margin: 0;
		}
	}
</style>

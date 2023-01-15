<script>
	import Container from './Container.svelte';

	export let title;
	export let icon;
</script>

<main class="responsive max primary-container sticky">
	<Container>
		<h3>
			{#if icon}
				<i>{icon}</i>
			{/if}
			<span>{title}</span>
		</h3>
	</Container>
</main>
<Container>
	<section class="page left active surface">
		<slot />
	</section>
</Container>

<style>
	i {
		margin-right: 0.8rem;
	}
	h3 {
		padding-top: 6rem;
	}
	.responsive {
		padding-bottom: 1.2rem !important;
	}

	@media print {
		h3 {
			margin: 0;
		}
	}
</style>

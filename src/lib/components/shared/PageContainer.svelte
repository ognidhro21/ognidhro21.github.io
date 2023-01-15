<script>
	import Container from './Container.svelte';

	export let title;
	export let icon;
</script>

<Container>
	<h3>
		{#if icon}
			<i>{icon}</i>
		{/if}
		<span>{title}</span>
	</h3>
	<section class="page left active">
		<slot />
	</section>
</Container>

<style>
	i {
		margin-right: 0.8rem;
	}
	h3 {
		margin-top: 6rem;
		margin-bottom: 1.4rem;
	}
	@media print {
		h3 {
			margin: 0;
		}
	}
</style>

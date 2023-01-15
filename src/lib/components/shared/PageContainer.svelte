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
		margin-right: 12rem;
	}
	h3 {
		margin-top: 96rem;
		margin-bottom: 24rem;
	}
	@media print {
		h2 {
			margin: 0;
		}
	}
</style>

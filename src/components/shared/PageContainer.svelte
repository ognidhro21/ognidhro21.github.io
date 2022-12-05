<script>
	import Container from './Container.svelte';

	export let title;
	export let icon;
</script>

<Container>
	<h2>
		{#if icon}
			<i>{icon}</i>
		{/if}
		<span>{title}</span>
	</h2>
	<section class="page left active">
		<slot />
	</section>
</Container>

<style>
	i {
		margin-right: 12rem;
	}
	h2 {
		margin-top: 96rem;
		margin-bottom: 24rem;
	}
	@media print {
		h2 {
			margin: 0;
		}
	}
</style>

<script>
	import Container from './Container.svelte';

	export let title;
	export let icon;
</script>

<Container>
	<h4>
		{#if icon}
			<i>{icon}</i>
		{/if}
		<span>{title}</span>
	</h4>
	<slot />
</Container>

<style>
	i {
		margin-right: 12rem;
	}
	h4 {
		margin-top: 96rem;
		margin-bottom: 24rem;
	}
</style>

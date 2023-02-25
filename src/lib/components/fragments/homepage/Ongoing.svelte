<script lang="ts">
	import Container from '$lib/components/shared/Container.svelte';
	import RoutineCard from '$lib/components/shared/schedules/RoutineCard.svelte';

	export let ongoing;
	const day = new Date().getDay();
	console.log(ongoing);
</script>

<Container>
	{#if ongoing.length !== 0}
		<h3>Ongoing</h3>
		{#each ongoing as { section, schedule }}
			<h4>{section}</h4>
			<RoutineCard {schedule} {day} id="L2S2" />
		{/each}
	{:else}
		<h4>No classes are in progress</h4>
	{/if}
</Container>

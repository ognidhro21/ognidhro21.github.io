<script context="module">
	import { base } from '$app/paths';
	export async function load({ fetch }) {
		const routinesList = await fetch(`./api/routines.json`).then((res) => res.json());
		const examsList = await fetch(`./api/exams.json`).then((res) => res.json());
		return {
			props: {
				routinesList,
				examsList
			}
		};
	}
</script>

<script>
	import TabClasses from '../components/shared/schedules/tabs/TabClasses.svelte';
	import TabExams from '../components/shared/schedules/tabs/TabExams.svelte';
	import TabEvents from '../components/shared/schedules/tabs/TabEvents.svelte';
	import Container from '../components/shared/Container.svelte';
	import Tab from '../components/shared/Tab.svelte';

	let items = ['Classes', 'Exams', 'Events'];
	let selected = items[0];
	function tabChanged(e) {
		selected = e.detail;
	}

	export let routinesList;
	export let examsList;
</script>

<Container>
	<section class="mbe24 tabs">
		<Tab {items} {selected} on:tabChanged={tabChanged} />
		{#if selected === 'Classes'}
			<TabClasses {routinesList} />
		{:else if selected === 'Exams'}
			<TabExams {examsList} />
		{:else if selected === 'Events'}
			<TabEvents />
		{/if}
	</section>
</Container>

<style>
	.tabs {
		background-color: var(--plain);
		padding: 1rem;
	}
</style>

<script context="module">
	import { base } from '$app/paths';
	export async function load({ fetch }) {
		const routinesList = await fetch(`/api/routines.json`).then((res) => res.json());
		const examsList = await fetch(`/api/exams.json`).then((res) => res.json());
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
	import InfoImg from '../images/update_info_undraw.svg';
	import Button from '../components/shared/Button.svelte';
	import DATA from '../stores/PersistantInfo';
	import { onMount } from 'svelte';
	import SEO from '../components/shared/SEO/index.svelte';

	let items = ['Classes', 'Exams', 'Events'];
	let selected = items[1];
	function tabChanged(e) {
		selected = e.detail;
	}

	export let routinesList;
	export let examsList;
	const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
	let selectedGroup = 5;
	$: info = {
		section: 1,
		group: 2,
		saved: false
	};
	$: saved = false;
	onMount(() => {
		if ($DATA) {
			info.section = $DATA[0].section;
			info.group = $DATA[0].group;
			info.saved = $DATA[0].saved;
			saved = info.saved;
		} else {
			$DATA[0] = info;
		}
	});
	function updateSection() {
		if (selectedGroup <= 2) {
			info.section = 0;
			info.group = selectedGroup;
		} else if (selectedGroup <= 5) {
			info.section = 1;
			info.group = selectedGroup - 3;
		} else {
			info.section = 2;
			info.group = selectedGroup - 6;
		}
	}
	function saveInfo() {
		info.saved = true;
		saved = true;
		$DATA[0] = info;
	}
	function resetInfo() {
		info = {
			section: 1,
			group: 2,
			saved: false
		};
		saved = false;
		$DATA[0] = info;
	}
</script>

<SEO title={`Schedules`} />
<Container>
	<Button mode="primary" isRounded on:click={resetInfo}>Reset Info</Button>
	{#if saved}
		<section class="mbe24 mbs12 tabs">
			<Tab {items} {selected} on:tabChanged={tabChanged} />
			{#if selected === 'Classes'}
				<TabClasses {routinesList} />
			{:else if selected === 'Exams'}
				<TabExams {examsList} />
			{:else if selected === 'Events'}
				<TabEvents />
			{/if}
		</section>
	{:else}
		<div class="save-info flex items-center  self-center mbs12">
			<div class="img-container">
				<img src={InfoImg} alt="" />
			</div>
			<div class="inputs mbe12">
				<div class="mbe24">
					<label for="groups">I am in...</label>
					<h4 class="m0 mbe12">Section {info.section + 1}</h4>
					<select name="groups" id="groups" bind:value={selectedGroup} on:change={updateSection}>
						{#each groups as group, i}
							<option value={i}>Group {group}</option>
						{/each}
					</select>
				</div>
				<!-- refresh current page -->

				<a href="/schedules" target="_self">
					<Button mode="primary" isRounded on:click={saveInfo}>Submit</Button></a
				>
			</div>
		</div>
	{/if}
</Container>

<style>
	.tabs {
		background-color: var(--plain);
		padding: 1rem;
		border-radius: 1rem;
	}
	.save-info {
		border-radius: 1rem;
		background-color: var(--plain);
		padding: 1rem;
		gap: 1rem;
		min-height: 80vh;
		justify-content: space-between;
	}
	.inputs {
		min-width: 50%;
	}
	.inputs label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: bold;
		text-transform: uppercase;
		font-size: 140%;
	}
	.save-info img {
		width: 100%;
	}
	/* media for mobile */
	@media (max-width: 475px) {
		.inputs {
			min-width: 100%;
		}
		.save-info {
			flex-direction: column;
			justify-content: end;
		}
	}
</style>

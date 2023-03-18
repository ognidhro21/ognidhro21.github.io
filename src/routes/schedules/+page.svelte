<script>
	import TabClasses from '$lib/components/shared/schedules/tabs/TabClasses.svelte';
	import TabExams from '$lib/components/shared/schedules/tabs/TabExams.svelte';
	import TabEvents from '$lib/components/shared/schedules/tabs/TabEvents.svelte';
	import InfoImg from '$lib/images/update_info_undraw.svg';
	import DATA from '$lib/stores/PersistantInfo';
	import { onMount } from 'svelte';
	import Tabs from '$lib/components/shared/Tabs.svelte';
	import PageContainer from '$lib/components/shared/PageContainer.svelte';
	import Skeleton from '$lib/components/shared/Skeleton.svelte';
	export let data;
	let items = [
		{
			name: 'Classes',
			icon: 'schedule'
		},
		{
			name: 'Exams',
			icon: 'book'
		}
		// {
		// 	name: 'Events',
		// 	icon: 'table'
		// }
	];

	let selected = items[0].name;
	function tabChanged(e) {
		selected = e.detail;
	}

	$: routinesList = data.routinesList;
	$: examsList = data.examsList;
	const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
	let selectedGroup = 5;
	$: info = {
		section: 1,
		group: 2,
		saved: false
	};
	$: saved = false;
	onMount(async () => {
		if ($DATA) {
			info.section = $DATA[0].section;
			info.group = $DATA[0].group;
			info.saved = $DATA[0].saved;
			saved = info.saved;
		} else {
			$DATA[0] = info;
		}
	});
	async function loadData() {
		return saved;
	}
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
	let prom = loadData();
</script>

<PageContainer title="Schedules" icon="event">
	{#await prom}
		<Skeleton />
	{:then ok}
		{#if saved}
			<!-- <button mode="primary mb12" isRounded on:click={resetInfo}>Change Default Group</button> -->
			<Tabs {items} {selected} on:tabChanged={tabChanged}>
				<!-- <Tab {items} {selected} on:tabChanged={tabChanged} /> -->
				{#if selected === 'Classes'}
					<TabClasses {routinesList} />
				{:else if selected === 'Exams'}
					<TabExams {examsList} />
				{:else if selected === 'Events'}
					<TabEvents />
				{/if}
			</Tabs>
		{:else}
			<div class="grid  middle-align">
				<div class="l6 s12">
					<img src={InfoImg} alt="" />
				</div>
				<div class="inputs l6 s12">
					<div class="field suffix">
						<h4>Section {info.section + 1}</h4>
						<select name="groups" id="groups" bind:value={selectedGroup} on:change={updateSection}>
							{#each groups as group, i}
								<option value={i}>Group {group}</option>
							{/each}
						</select>
					</div>
					<div class="large-space" />
					<button on:click={saveInfo}>Submit</button>
				</div>
			</div>
		{/if}
	{/await}
</PageContainer>

<style>
	img {
		width: 100%;
	}
</style>

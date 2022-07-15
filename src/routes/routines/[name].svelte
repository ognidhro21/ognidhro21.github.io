<script context="module">
	import { Button, Select } from 'agnostic-svelte';
	import Container from '../../components/shared/Container.svelte';
	export async function load({ params, fetch }) {
		const slug = params.name;
		const routine = await fetch(`./${slug}.json`).then((res) => res.json());
		return {
			props: {
				routine
			}
		};
	}
</script>

<script>
	import RoutineCard from '../../components/shared/schedules/RoutineCard.svelte';

	export let routine;
	const { name, detailedname, sections } = routine;

	let day = 0;
	let section = 0;
	let group = 0;
	let info = {
		day: 0,
		section: 0,
		group: 0,
		saved: false
	};
	$: infos = sections[section].groups[group].days[day].schedules;
</script>

<Container>
	<div class="header">
		<div class="flex-fix flex justify-between  mbe12 content-center">
			<h2 class="m0">{detailedname}</h2>
			<a href="/schedules">
				<Button mode="primary" isRounded>Change</Button>
			</a>
		</div>
		<div class="inputs flex">
			<select name="sections" id="sections" bind:value={section}>
				{#each sections as section, i}
					<option value={i}>{section.name}</option>
				{/each}
			</select>
			<select name="groups" id="groups" bind:value={group}>
				{#each sections[section].groups as group, i}
					<option value={i}>Group {group.name}</option>
				{/each}
			</select>
			<select name="days" id="days" bind:value={day}>
				{#each sections[section].groups[group].days as day, i}
					<option value={i}>{day.name}</option>
				{/each}
			</select>
		</div>
	</div>
	{#each infos as schedule}
		<RoutineCard {schedule} />
	{/each}
</Container>

<style>
	.header {
		padding: 1rem;
		background: #fff;
		margin-top: 0.8rem;
		margin-bottom: 2rem;
	}
	.inputs {
		gap: 0.6rem;
	}
	/* media for mobile */
	@media (max-width: 768px) {
		.flex-fix {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>

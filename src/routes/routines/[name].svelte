<script context="module">
	import Button from '../../components/shared/Button.svelte';
	import Container from '../../components/shared/Container.svelte';
	import { onMount } from 'svelte';
	import RoutineCard from '../../components/shared/schedules/RoutineCard.svelte';
	import SEO from '../../components/shared/SEO/index.svelte';

	export async function load({ params }) {
		const slug = params.name;

		const routine = await import(`../../data/schedules/routines/${slug}.json`);
		return {
			props: {
				routine
			}
		};
	}
</script>

<script>
	import DATA from '../../stores/PersistantInfo';
	export let routine;
	const { name, detailedname, sections } = routine;

	let day = 0;
	let section = 1;
	let group = 2;

	function setDay() {
		// set next day as default if current time is greater than 5 pm
		var dayIndex;
		const d = new Date();
		const today = d.getDay();
		const hour = d.getHours();
		if (hour >= 17) {
			const nextDay = today + 1;
			dayIndex = nextDay;
			if (nextDay >= 5) {
				dayIndex = 0;
			}
		} else {
			if (today >= 5) {
				dayIndex = 0;
			} else {
				dayIndex = today;
			}
		}
		day = dayIndex;
	}
	$: infos = sections[section].groups[group].days[day].schedules;
	onMount(() => {
		setDay();
		section = $DATA[0].section;
		group = $DATA[0].group;
	});
</script>

<SEO title={`Routine - ${name}`} />
<Container>
	<div class="header">
		<div class="flex-fix flex justify-between  mbe12 content-center">
			<h2 class="m0">{detailedname}</h2>
		</div>
		<div class="inputs flex">
			<div>
				<label for="sections">Section</label>
				<select name="sections" id="sections" bind:value={section}>
					{#each sections as section, i}
						<option value={i}>{i + 1}</option>
					{/each}
				</select>
			</div>
			<div>
				<label for="groups">Group</label>
				<select name="groups" id="groups" bind:value={group}>
					{#each sections[section].groups as group, i}
						<option value={i}>{group.name}</option>
					{/each}
				</select>
			</div>

			<div>
				<label for="sections">Day</label>
				<select name="days" id="days" bind:value={day}>
					{#each sections[section].groups[group].days as day, i}
						<option value={i}>{day.name}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>
	<!-- <h3>{sections[section].groups[group].days[day].name}</h3> -->
	{#each infos as schedule}
		<RoutineCard {schedule} />
	{/each}
</Container>

<style>
	.header {
		padding: 1rem;
		background: var(--plain);
		margin-top: 0.8rem;
		margin-bottom: 2rem;
	}
	.inputs {
		gap: 0.6rem;
	}
	label {
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--dark);
		opacity: 0.7;
	}
	/* media for mobile */
	@media (max-width: 768px) {
		.flex-fix {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>

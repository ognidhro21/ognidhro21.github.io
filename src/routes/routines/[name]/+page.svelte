<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Container from '../../../components/shared/Container.svelte';
	import RoutineCard from '../../../components/shared/schedules/RoutineCard.svelte';
	import SEO from '../../../components/shared/SEO/index.svelte';
	import Anim from '../../../components/shared/Anim.svelte';
	import DATA from '../../../stores/PersistantInfo';
	import AddToHome from '../../../components/shared/AddToHome.svelte';
	export let data;
	const routine = data.routine;
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
		if (hour >= 16) {
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
		if ($DATA[0].saved === true) {
			section = $DATA[0].section;
			group = $DATA[0].group;
		}
	});
</script>

<SEO title={`Routine - ${name}`} />
<Container fluid>
	<AddToHome />
	<div class="header mbe24">
		<div class="flex-fix flex justify-between  mbe12 content-center">
			<h4 class="m0">{detailedname}</h4>
		</div>
		<div class="grid">
			<div class="s4 l4">
				<div class="field suffix">
					<label for="sections">Section</label>
					<select name="sections" id="sections" bind:value={section}>
						{#each sections as section, i}
							<option value={i}>{i + 1}</option>
						{/each}
					</select>
					<i>arrow_drop_down</i>
				</div>
			</div>
			<div class="s3 l4">
				<div class="field suffix">
					<label for="groups">Group</label>
					<select name="groups" id="groups" bind:value={group}>
						{#each sections[section].groups as group, i}
							<option value={i}>{group.name}</option>
						{/each}
					</select>
					<i>arrow_drop_down</i>
				</div>
			</div>
			<div class="s5 l4">
				<div class="field suffix">
					<label for="sections">Day</label>
					<select name="days" id="days" bind:value={day}>
						{#each sections[section].groups[group].days as day, i}
							<option value={i}>{day.name}</option>
						{/each}
					</select>
					<i>arrow_drop_down</i>
				</div>
			</div>
		</div>
		{#each infos as schedule}
			<RoutineCard {schedule} id={name} {day} />
		{/each}
	</div>
</Container>

<style>
	.header {
		padding: 1rem;
		background: var(--plain);
		margin-top: 0.8rem;
		border-radius: 0.3rem 0.3rem 0 0;
	}

	.inputs {
		gap: 0.6rem;
	}
	label {
		font-size: 0.8rem;
		font-weight: 300;
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

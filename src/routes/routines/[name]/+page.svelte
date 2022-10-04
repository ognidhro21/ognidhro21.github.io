<script>
	import { onMount } from 'svelte';
	import Container from '../../../components/shared/Container.svelte';
	import RoutineCard from '../../../components/shared/schedules/RoutineCard.svelte';
	import SEO from '../../../components/shared/SEO/index.svelte';
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
		let dayIndex;
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
	onMount(() => {
		setDay();
		if ($DATA[0].saved === true) {
			section = $DATA[0].section;
			group = $DATA[0].group;
		}
	});
	$: infos = sections[section].groups[group].days[day].schedules;
</script>

<SEO title={`Routine - ${name}`} />
<Container fluid>
	<AddToHome />
	<article class="header small-elevate page active left">
		<h4>{detailedname}</h4>
		<div class="grid">
			<div class="s3 l4">
				<div class="field label suffix">
					<select name="sections" id="sections" bind:value={section}>
						{#each sections as section, i}
							<option value={i}>{i + 1}</option>
						{/each}
					</select>
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="active">Section</label>
					<i>arrow_drop_down</i>
				</div>
			</div>
			<div class="s4 l4">
				<div class="field label suffix">
					<select name="groups" id="groups" bind:value={group}>
						{#each sections[section].groups as group, i}
							<option value={i}>{group.name}</option>
						{/each}
					</select>
					<!-- svelte-ignore a11y-label-has-associated-control -->

					<label class="active">Group</label>
					<i>arrow_drop_down</i>
				</div>
			</div>
			<div class="s5 l4">
				<div class="field label suffix">
					<select name="days" id="days" bind:value={day}>
						{#each sections[section].groups[group].days as day, i}
							<option value={i}>{day.name}</option>
						{/each}
					</select>
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="active">Day</label>
					<i>arrow_drop_down</i>
				</div>
			</div>
		</div>
	</article>
	{#each infos as schedule}
		<RoutineCard {schedule} id={name} {day} />
	{/each}
</Container>

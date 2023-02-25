<script>
	import { onMount } from 'svelte';
	import RoutineCard from '$lib/components/shared/schedules/RoutineCard.svelte';
	import SEO from '$lib/components/shared/SEO/index.svelte';
	import DATA from '$lib//stores/PersistantInfo';
	import AddToHome from '$lib/components/shared/AddToHome.svelte';
	import PageContainer from '$lib/components/shared/PageContainer.svelte';

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
	// injecting practical class to true as these are from groups
	$: practicalClasses = sections[section].groups[group].days[day].schedules.map((data) => ({
		...data,
		practical: true
	}));
	$: classes = [...practicalClasses, ...sections[section].days[day].schedules];
	$: classes.sort(function (a, b) {
		return Date.parse('1970/01/01 ' + a.start) - Date.parse('1970/01/01 ' + b.start);
	});
</script>

<SEO title={`Routine - ${name}`} />
<PageContainer title={detailedname}>
	<AddToHome />
	<article class="header no-elevate secondary-container page active left">
		<div class="grid">
			<div class="s4 l4">
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
			<div class="s4 l4">
				<div class="field label suffix">
					<select name="days" id="days" bind:value={day}>
						{#each sections[section].groups[group].days as day, i}
							<option value={i}>{day.name.substring(0, 3)}</option>
						{/each}
					</select>
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="active">Day</label>
					<i>arrow_drop_down</i>
				</div>
			</div>
		</div>
	</article>
	{#each classes as schedule}
		<RoutineCard {schedule} id={name} {day} />
	{/each}
</PageContainer>

<style>
	.header {
		margin-bottom: 1rem;
	}
</style>

<script lang="ts">
	import Container from '$lib/components/shared/Container.svelte';
	import RoutineCard from '$lib/components/shared/schedules/RoutineCard.svelte';

	export let classes;
	// Get the current time in milliseconds
	const date = new Date();
	const currentMilliseconds = date.getTime();
	const currentDay = date.toLocaleString('en-us', { weekday: 'long' });
	const day = date.getDay();
	// Find ongoing schedules
	const schedules = [];

	for (const section of classes.sections) {
		for (const day of section.days) {
			if (day.name === currentDay) {
				for (const schedule of day.schedules) {
					const startMilliseconds = new Date(`${date.toDateString()} ${schedule.start}`).getTime();
					const endMilliseconds = new Date(`${date.toDateString()} ${schedule.end}`).getTime();
					if (startMilliseconds <= currentMilliseconds && currentMilliseconds <= endMilliseconds) {
						const sch = { ...schedule, classOf: section.name };
						schedules.push(sch);
					}
				}
			}
		}

		for (const group of section.groups) {
			for (const day of group.days) {
				if (day.name === currentDay) {
					for (const schedule of day.schedules) {
						const startMilliseconds = new Date(
							`${date.toDateString()} ${schedule.start}`
						).getTime();
						const endMilliseconds = new Date(`${date.toDateString()} ${schedule.end}`).getTime();
						if (
							startMilliseconds <= currentMilliseconds &&
							currentMilliseconds <= endMilliseconds
						) {
							const sch = { ...schedule, classOf: 'Group ' + group.name, practical: true };
							schedules.push(sch);
						}
					}
				}
			}
		}
	}
	console.log(schedules);
</script>

<Container>
	{#if schedules.length !== 0}
		<h3>Ongoing</h3>
		<div class="grid">
			{#each schedules as { code, start, end, classOf, practical }}
				<!-- <RoutineCard {schedule} {day} id="L2S2" /> -->
				<div class="row s6 m4 l3 small-divider">
					<div class="max">
						<p>{classOf}</p>
						<h5 class="upper">
							{#if practical}
								<span>
									<i>biotech</i>
								</span>
							{/if}
							<span>
								{code}
							</span>
						</h5>
					</div>
					<div class="right-align">
						<p>{start}</p>
						<p>{end}</p>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<h4>No classes are in progress</h4>
	{/if}
</Container>

<style>
	.small-divider {
		margin: 0 !important;
		border-bottom: none !important;
	}
</style>

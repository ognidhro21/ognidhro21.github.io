<script lang="ts">
	import Container from '$lib/components/shared/Container.svelte';
	import Skeleton from '$lib/components/shared/Skeleton.svelte';

	export let classes;

	/**
	 * Returns an array of ongoing classes for the current day.
	 *
	 * @async
	 * @function
	 * @returns {Promise<Array>} A promise that resolves to an array of objects representing the ongoing classes for the current day, with each object containing information about the class schedule, section/group name, and whether it is a practical class.
	 */
	async function getOngoingClasses() {
		// Get the current time in milliseconds
		const date = new Date();
		const currentMilliseconds = date.getTime();
		const currentDay = date.toLocaleString('en-us', { weekday: 'long' });
		const schedules = [];
		for (const section of classes.sections) {
			for (const day of section.days) {
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

		return schedules;
	}

	let promise = getOngoingClasses();
</script>

<Container>
	{#await promise}
		<h4>Checking</h4>
		<Skeleton />
	{:then sch}
		{#if sch.length !== 0}
			<h4>Ongoing</h4>
			<div class="grid">
				{#each sch as { code, start, end, classOf, practical }}
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
		{/if}
	{/await}
</Container>

<style>
	.small-divider {
		margin: 0 !important;
		border-bottom: none !important;
	}
</style>

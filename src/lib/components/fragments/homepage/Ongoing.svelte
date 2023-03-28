<script lang="ts">
	import Container from '$lib/components/shared/Container.svelte';
	import Skeleton from '$lib/components/shared/Skeleton.svelte';
	import OG21 from '$lib/stores/Ognidhro_data';
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

	const { section, group, saved } = $OG21.class;
	function getGroupIndexByName(groupName = 'Group F') {
		const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
		const index = groupName.slice(6, 7);
		return groups.indexOf(index);
	}
	function getSectionIndexByName(sectionName = 'Section 2') {
		const index = sectionName.slice(8, 9);
		return Number(index) - 1;
	}
	function isClassOfPreferred(practical, classOf) {
		if (!saved) return false;
		if (practical) return getGroupIndexByName(classOf) === 3 * section + group;
		return getSectionIndexByName(classOf) === section;
	}
</script>

<Container>
	{#await promise}
		<Skeleton />
	{:then sch}
		{#if sch.length !== 0}
			<h4>Ongoing</h4>
			<div class="grid">
				{#each sch as { code, start, end, classOf, practical }}
					<!-- <RoutineCard {schedule} {day} id="L2S2" /> -->
					<div
						class="class-chip row s6 m4 l3 small-divider"
						class:tertiary-container={isClassOfPreferred(practical, classOf)}
					>
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
	.class-chip {
		padding-inline: 0.5rem;
		border-radius: 0.2rem;
	}
	.small-divider {
		margin: 0 !important;
		border-bottom: none !important;
	}
</style>

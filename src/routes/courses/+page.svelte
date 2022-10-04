<script>
	import { getFullCode, getCode, courses } from '../../lib/courses';
	import Container from '../../components/shared/Container.svelte';
	import Tabs from '../../components/shared/Tabs.svelte';
	import { Accordions, Accordion } from '../../components/shared/Accordion';
	export let data;
	const current = 'L2S1';
	let items = [
		{
			name: 'Semester',
			icon: 'layers'
		},
		{
			name: 'Department',
			icon: 'list'
		}
	];
	$: selected = items[0].name;
	function tabChanged(e) {
		selected = e.detail;
	}
	// opened Accordion
	let openedAccordion = 1;
	const toggleAccordion = (e) => (openedAccordion = e.detail);
</script>

<Container>
	<Tabs {items} {selected} on:tabChanged={tabChanged}>
		{#if selected === 'Semester'}
			<Accordions>
				{#each data.res as d, i}
					<Accordion id={i} {openedAccordion} on:accordionSelected={toggleAccordion}>
						<span slot="title" class="title"><h4>{d[0].id}</h4></span>
						<span>
							{#each d as k}
								{#if getCode(k.title) !== 'meeting'}
									<div class="padding">
										<h5>{k.title}</h5>
										<!-- wont be added for now -->
										<!-- <a href={`/courses/${k.id}-${k.title}-theory`}>Theory</a> -->
										<p>{getFullCode(d[0].id, getCode(k.title), false)}</p>
										{#if !k.onlytheory}
											<!-- <a href={k.title}>Practical</a> -->
											<p>{getFullCode(d[0].id, getCode(k.title), true)}</p>
										{/if}
									</div>
									<!-- <div class="small-divider" /> -->
								{/if}
							{/each}
						</span>
					</Accordion>
				{/each}
			</Accordions>
		{:else if selected === 'Department'}
			<Accordions>
				{#each courses as course, i}
					{#if course.name !== ''}
						<Accordion
							id={data.res.length + i}
							{openedAccordion}
							on:accordionSelected={toggleAccordion}
						>
							<span slot="title" class="title"><h4>{course.name}</h4></span>
							<span>
								{#each course.titles as title}
									<div class="padding">
										<h5>{title.id}</h5>
										<p>{title.title}</p>
									</div>
								{/each}
							</span>
						</Accordion>
					{/if}
				{/each}
			</Accordions>
		{/if}
		<div class="space" />
	</Tabs>
</Container>

<script>
	import { getFullCode, getCode, courses } from '$lib/courses';
	import SEO from '$lib/components/shared/SEO/index.svelte';
	import Tabs from '$lib/components/shared/Tabs.svelte';
	import { Accordions, Accordion } from '$lib/components/shared/Accordion';
	import PageContainer from '$lib/components/shared/PageContainer.svelte';
	export let data;
	const current = 'L2S2';
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
	let openedAccordion = 2;
	const toggleAccordion = (e) => (openedAccordion = e.detail);
</script>

<PageContainer title="Courses" icon="info">
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
</PageContainer>

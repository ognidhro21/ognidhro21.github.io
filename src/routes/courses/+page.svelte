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
						<span slot="title" class="title"><h2>{d[0].id}</h2></span>
						<span>
							{#each d as k}
								{#if getCode(k.title) !== 'meeting'}
									<div class="card">
										<h4>{k.title}</h4>
										<!-- wont be added for now -->
										<!-- <a href={`/courses/${k.id}-${k.title}-theory`}>Theory</a> -->
										<p>{getFullCode(d[0].id, getCode(k.title), false)}</p>
										{#if !k.onlytheory}
											<!-- <a href={k.title}>Practical</a> -->
											<p>{getFullCode(d[0].id, getCode(k.title), true)}</p>
										{/if}
									</div>
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
							<span slot="title" class="title"><h2>{course.name}</h2></span>
							<span>
								{#each course.titles as title}
									<div class="card">
										<p>{title.id}</p>
										<h4>{title.title}</h4>
									</div>
								{/each}
							</span>
						</Accordion>
					{/if}
				{/each}
			</Accordions>
		{/if}
	</Tabs>
</Container>

<style>
	.card {
		border-bottom: 1px solid black;
		padding: 1rem;
	}

	.card h4 {
		margin: 0;
	}
	.card p {
		display: inline;
		margin-right: 1rem;
		font-weight: 300;
	}
	.card p:last-child {
		margin-right: 0;
	}
	.card a {
		margin-right: 1rem;
	}

	span h2 {
		margin: 0;
	}
</style>

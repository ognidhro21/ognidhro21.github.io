<script>
	import { getFullCode, getCode, courses } from '../../lib/courses';
	import Container from '../../components/shared/Container.svelte';
	import Tabs from '../../components/shared/Tabs.svelte';
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
</script>

<Container>
	<Tabs {items} {selected} on:tabChanged={tabChanged}>
		{#if selected === 'Semester'}
			{#each data.res as d}
				<details class="disclose" open={d[0].id === current}>
					<summary class="disclose-title"><h2>{d[0].id}</h2></summary>
					<div class="disclose-panel">
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
					</div>
				</details>
			{/each}
		{:else if selected === 'Department'}
			{#each courses as course}
				{#if course.name !== ''}
					<details class="disclose">
						<summary class="disclose-title"><h2>{course.name}</h2></summary>
						<div class="disclose-panel">
							{#each course.titles as title}
								<div class="card">
									<p>{title.id}</p>
									<h4>{title.title}</h4>
								</div>
							{/each}
						</div>
					</details>
				{/if}
			{/each}
		{/if}
	</Tabs>
</Container>

<style>
	summary,
	.card {
		padding: 1rem;
	}
	details,
	.card {
		border-bottom: 1px solid black;
	}
	details {
		padding: 1rem 0;
	}
	details:last-child,
	details > div > .card:last-child {
		border: none;
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
	summary > h2 {
		display: inline;
	}
</style>

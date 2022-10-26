<script>
	import {
		Timeline,
		TimelineItem,
		TimelineSeparator,
		TimelineDot,
		TimelineConnector,
		TimelineContent,
		TimelineOppositeContent
	} from 'svelte-vertical-timeline';

	const options = [
		{
			title: 'Agro-horticultural Society',
			time: '1820',
			description: 'It was established in Bengal by William Carry'
		},
		{
			title: 'Famine in Bengal',
			time: '1862-65',
			description:
				'Our country had to face a severe famine. Government formed famine commission which at first suggested for establishment of an agricultural department'
		},
		{
			title: 'Department of Agriculture',
			time: '1870',
			description: 'It was formed as a revenue department'
		},
		{
			title: 'Another one!',
			time: '1906',
			description: 'A seperate Department of Agriculture was established'
		},
		{
			title: 'Agricultural Reasearch Lab',
			time: '1908',
			description: 'For conducting agricultural research, a laboratory was established'
		},
		{
			title: 'Demonstration Farms',
			time: '1914',
			description: 'Each district in Bengal got its own demonstration farm'
		},
		{
			title: 'V-AID',
			time: '1953',
			description: 'Village Agricultural and Industrial Development project started'
		},
		{
			title: 'Comilla Model',
			time: '1955',
			description: ''
		},
		{
			title: 'DLS',
			time: '1962',
			description: 'Department of Livestock Services established for Livestock extension services'
		},
		{
			title: 'DAEM',
			time: '1968',
			description: 'Department of Agricultural Extension Management emerged'
		},
		{
			title: 'Extension Organizations',
			time: '1971',
			description: 'Existance of many monocrop extension organizations'
		},
		{
			title: 'Directorate of Agriculture',
			time: '1974',
			description: 'Directorate of Agriculture (Jute production) was established'
		},
		{
			title: 'Training and Visit Approach',
			time: '1977-82'
		},
		{
			title: 'DAE',
			time: '1982',
			description: 'Department of Agricultural Extension was established merging six departments'
		},
		{
			title: 'DOF',
			time: '1984',
			description: 'Department of Fisheries got its present form'
		},
		{
			title: 'A New Beginning!',
			time: '1996',
			description:
				'Governement adopted the New Agricultural Extension Policy (NAEP) to conduct a well planned Agricultural Extension Service in Bangladesh'
		}
	];
</script>

<main class="responsive">
	<h4>Historical Background of Agricultural Extension in Bangladesh</h4>
	<Timeline position="alternate">
		{#each options as option}
			<TimelineItem>
				<TimelineOppositeContent slot="opposite-content">
					<h5 class="primary-text">{option.time}</h5>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					<h6>{option.title}</h6>
					{#if option.description}
						<p>{option.description}</p>
					{/if}
				</TimelineContent>
			</TimelineItem>
		{/each}
	</Timeline>
	<article>
		<p>Composed from sheets of Badhon Mam ❤️</p>
	</article>
</main>

<style>
	h5,
	h6 {
		display: block;
		margin: 0;
	}
</style>

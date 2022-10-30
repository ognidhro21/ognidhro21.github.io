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
			title: 'Microscope!',
			time: '1675',
			description: 'Dutch worker Anton von Leeuwenhoek developed the first microscope'
		},
		{
			title: 'Fungi:Origin',
			time: '1729',
			description:
				'Italian botanist, P. A. Micheli (father of Mycology) proposed fungi comes from spores'
		},
		{
			title: 'What is bunt?',
			time: '1755',
			description:
				'French botanist Tillet published a paper on bunt or stinking smut of wheat; discovered bunt is a disease of wheat'
		},
		{
			title: 'Why is bunt?',
			time: '1807',
			description:
				'French scientist I. B. Prevost showed bunt of wheat is a fungus and showed evidence that a disease is caused by microorganism'
		},
		{
			title: 'No potato',
			time: '1845',
			description:
				'Irish potato famine due to Phythophthora infestans, caused starvation of million and immigration of 1.5 million people'
		},
		{
			title: 'Whoops! Yay! Accidental discovery',
			time: '1885',
			description:
				'Pierre Marie Alexis Millardet accidentally discovered the Bordeaux mixture for the control of downy mildew of grapvine'
		},
		{
			title: `"Penichilling" time!`,
			time: '1929',
			description:
				'Sir Alexander Flemming isolated the anitbiotic, Penicillin from the fungus, Penicillium notatum'
		},
		{
			title: 'Hypothesis time!',
			time: '1942',
			description: 'H. H. Flor developed gene-for-gene hypothesis in flax rust'
		},

		{
			title: 'Principles of Plant Pathology',
			time: '1957',
			description: 'A book written by E. C. Stakman with J. G. Harar'
		},
		{
			title: 'Resistance from all sides',
			time: '1963',
			description:
				'J. E. Van der Plank found out vertical and horizontal types of resistance in crop plants'
		},
		{
			title: `Root's disease,diasese`,
			time: '1970',
			description: 'D. Garett investigated the management of root diseaes. '
		}
	];
</script>

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
	<p>Composed from sheets of Rubel Sir ❤️</p>
</article>

<style>
	h5,
	h6 {
		display: block;
		margin: 0;
	}
</style>

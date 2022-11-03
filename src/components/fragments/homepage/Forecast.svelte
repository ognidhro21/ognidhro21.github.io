<script>
	import Container from '../../shared/Container.svelte';
	export let Headline;
	export let rain;
</script>

<Container>
	<h5><i>location_on</i><span> Dumki, Patuakhali</span></h5>
	<h6>{Headline.Text}</h6>

	<div class="scroll row">
		{#each rain as { probability, date }}
			<article
				class:primary-container={probability >= 40}
				class:on-primary-container={probability >= 40}
			>
				<p>{date}</p>
				<p><i>rainy</i>{probability}%</p>
			</article>
		{/each}
	</div>
	<a href="/forecast" class="button"><i>arrow_forward</i>More</a>
</Container>

<style>
	h5 {
		margin: 0;
	}
	h5 > i {
		margin-right: 12rem;
	}
	p > i {
		margin-right: 6rem;
	}
	article,
	.grid,
	a {
		margin: 0;
	}
</style>

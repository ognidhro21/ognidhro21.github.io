<script>
	import Container from '$lib/components/shared/Container.svelte';
	export let Headline;
	export let rain;
</script>

<Container>
	<h5><i>location_on</i><span> Dumki, Patuakhali</span></h5>
	<h5>{Headline.Text}</h5>

	<div class="scroll row">
		{#each rain as { probability, date }}
			<article class:tertiary-container={probability >= 20}>
				<p>{date}</p>
				<p><i>rainy</i>{probability}%</p>
			</article>
		{/each}
	</div>
	<dib class="medium-space" />
	<a href="/forecast" class="button secondary-container"><i>arrow_forward</i>More</a>
</Container>

<style>
	h5 {
		margin: 0;
	}
	h5 > i {
		margin-right: 0.8rem;
	}
	p > i {
		margin-right: 0.4rem;
	}
	article,
	a {
		margin-top: 1rem;
	}
	.row {
		padding: 1rem;
	}
</style>

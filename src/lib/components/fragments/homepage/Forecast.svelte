<script>
	import Container from '$lib/components/shared/Container.svelte';
	export let Headline;
	export let rain;
</script>

<Container>
	<h4><i>location_on</i><span> Dumki, Patuakhali</span></h4>
	<p>{Headline.Text}</p>

	<div class="scroll row">
		{#each rain as { probability, date }}
			<div class:tertiary-container={probability >= 20} class="weather-card padding">
				<p>{date}</p>
				<p><i>rainy</i>{probability}%</p>
			</div>
		{/each}
	</div>
	<dib class="medium-space" />
	<a href="/forecast" class="button secondary"><i>arrow_forward</i>More</a>
</Container>

<style>
	.weather-card {
		border-radius: 0.2rem;
	}
	h4 > i {
		margin-right: 0.8rem;
	}
	p > i {
		margin-right: 0.4rem;
	}
	.button {
		margin: 0;
		margin-top: 1rem;
	}
</style>

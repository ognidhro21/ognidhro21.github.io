<script>
	import Container from '../../shared/Container.svelte';
	export let Headline;
	export let rain;
</script>

<Container>
	<h5><i>location_on</i><span> Dumki, Patuakhali</span></h5>
	<div class="grid">
		<h6 class="l5 s12">{Headline.Text}</h6>
		<div class="scroll row l7 s12">
			{#each rain as { probability, date }}
				<article
					class:primary-container={probability >= 40}
					class:on-primary-container={probability >= 40}
				>
					<p>{date}</p>
					<p><i>rainy</i>{probability}%</p>
				</article>
			{/each}
			<a href="/forecast" class="button max"><i>arrow_forward</i>More</a>
		</div>
	</div>
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
	.grid {
		margin-top: 0;
	}
</style>

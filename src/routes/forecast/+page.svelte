<script>
	import PageContainer from '$lib/components/shared/PageContainer.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
	const { weather } = data;
</script>

<PageContainer title="Forecast" icon="cloud">
	<h5><i>location_on</i><span>Dumki</span></h5>
	{#each weather as { probability, date, min, max, day, night }}
		<div class="forecast padding">
			<p>{date}</p>
			<div class="row">
				<div class="max">
					<h6>
						Chance of Rain {probability}%
					</h6>
				</div>
				<h6><i>thermometer</i> {max}/{min}C</h6>
			</div>
			<div>
				<p><i>sunny</i>{day}</p>
				<p><i>clear_night</i>{night}</p>
			</div>
		</div>
	{/each}
	<p class="footer">Data from accuweather</p>
</PageContainer>

<style>
	.forecast {
		border-bottom: 1px solid var(--surface-variant);
	}
	.footer {
		margin-top: 3rem;
	}
	p > i {
		margin-right: 0.4rem;
	}
</style>

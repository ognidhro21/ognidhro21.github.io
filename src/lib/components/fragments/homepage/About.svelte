<script>
	import Container from '$lib/components/shared/Container.svelte';
	import IMG from '$lib/images/taking_notes_undraw.svg';
</script>

<Container fluid bgColor="var(--plain)">
	<div class="contents">
		<div class="text">
			<p>WE ARE the 21st batch of Agriculture in Patuakhali Science and Technology University.</p>
		</div>
		<div class="img">
			<img src={IMG} alt="" />
		</div>
	</div>
</Container>

<style>
	.contents {
		box-sizing: border-box;
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;
	}
	img {
		width: 100%;
	}
	.text {
		width: 100%;
	}

	/* media for tablet */
	@media (min-width: 768px) {
		.contents {
			flex-direction: row;
		}
		.text {
			width: 40%;
		}
	}
</style>

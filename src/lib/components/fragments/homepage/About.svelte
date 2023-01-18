<script>
	import Container from '$lib/components/shared/Container.svelte';
	import IMG from '$lib/images/taking_notes_undraw.svg';
</script>

<Container fluid bgColor="var(--plain)">
	<div class="contents">
		<div class="text">
			<p>
				We, the 21st batch of Agriculture students at Patuakhali Science and Technology University,
				would like to express our presence and introduce ourselves to you. As current students of
				the agriculture program at this esteemed institution, we are dedicated to gaining the
				knowledge and skills necessary to excel in our field. We take pride in being a part of this
				university and look forward to making valuable contributions to the field of agriculture.
			</p>
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

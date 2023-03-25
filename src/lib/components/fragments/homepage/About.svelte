<script>
	import Container from '$lib/components/shared/Container.svelte';
	import IMG from '$lib/images/taking_notes_undraw.svg';
</script>

<!-- <div class="blurred">
	<section class="img-bg" />
</div> -->
<Container fluid bgColor="var(--plain)">
	<div class="contents">
		<div class="text">
			<h2>Fostering the Future of Agriculture</h2>
			<!-- <h3>Building a Brighter Future for Bangladesh's Agriculture</h3> -->
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
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		flex-wrap: wrap;
	}
	h2 {
		line-height: 1.2;
	}
	.text {
		flex-grow: 1;
		flex-basis: 360px;
	}
	.img {
		flex-grow: 1;
		flex-basis: 460px;
	}

	/* media for tablet */
</style>

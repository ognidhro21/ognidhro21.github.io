<script>
	import Container from '$lib/components/shared/Container.svelte';
	import IMG from '$lib/images/taking_notes_undraw.svg';
	import Bird1 from '$lib/images/AboutAnim/Bird1.svg';
	import Bird2 from '$lib/images/AboutAnim/Bird2.svg';
	import Bird3 from '$lib/images/AboutAnim/Bird3.svg';
	import Cloud1 from '$lib/images/AboutAnim/Cloud1.svg';
	import Cloud2 from '$lib/images/AboutAnim/Cloud2.svg';
	import Trees from '$lib/images/AboutAnim/Trees.svg';
	let y = 0;
</script>

<svelte:window bind:scrollY={y} />

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
			<img
				src={Bird1}
				alt=""
				id="bird1"
				style="transform: translateY(-{y * 0.15}px) translateX(-{y * 0.15}px)"
			/>
			<img
				src={Bird2}
				alt=""
				id="bird2"
				style="transform: translateY(-{y * 0.05}px) translateX(-{y * 0.05}px)"
			/>
			<img
				src={Bird3}
				alt=""
				id="bird3"
				style="transform: translateY(-{y * 0.12}px) translateX(-{y * 0.12}px)"
			/>
			<img src={Cloud1} alt="" id="cloud1" style="transform: translateY(-{y * 0.15}px) " />
			<img src={Cloud2} alt="" id="cloud2" style="transform: translateY(-{y * 0.25}px) " />
		</div>
		<div class="paral">
			<!-- <img src={IMG} alt="" /> -->
			<img src={Trees} alt="" id="trees" />
		</div>
	</div>
</Container>

<style>
	.contents {
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
		width: 40%;
		border-bottom: 1px solid var(--outline);
		height: 100%;
		position: relative;
	}

	.paral {
		position: relative;
		width: 60%;
		min-height: 540px;
		box-sizing: border-box;
		border-top: 1px solid var(--outline);
		border-bottom: 1px solid var(--outline);
		isolation: isolate;
		z-index: -1;
	}
	.paral img,
	.text img {
		position: absolute;
		z-index: 34;
	}
	#bird1 {
		left: 220px;
		top: 23px;

		/* top: 45px; */
	}
	#bird2 {
		left: 180px;
		top: 23px;
	}
	#bird3 {
		left: 240px;
		top: 23px;
	}

	#cloud1 {
		left: 40px;
		top: 23px;
	}
	#cloud2 {
		left: 140px;
		top: 25px;
		top: 23px;
	}
	#trees {
		right: 0;
	}
	/* media for tablet */
	@media only screen and (min-width: 600px) {
		.contents {
			flex-direction: column;
		}
	}
	.text,
	.paral {
		width: 100%;
	}
</style>

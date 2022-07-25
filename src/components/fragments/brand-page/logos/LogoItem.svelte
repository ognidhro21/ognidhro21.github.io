<script>
	export let data = {
		title: '',
		color: '',
		bgCol: '',
		img: '',
		description: ''
	};
</script>

<div class="logo-item" style="background-color:{data.bgCol}; color: {data.color}">
	<div class="image">
		<img src={data.img} alt="" />
	</div>
	<div class="desc">
		<p>
			{data.description}
		</p>
	</div>
</div>

<style>
	.logo-item {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 1rem;
		gap: 1rem;
	}
	.image {
		max-width: 30%;
	}
	.image img {
		width: 100%;
	}
	.desc p {
		margin: 0;
	}
</style>

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
		<img src={data.img} alt="" class="mbe12" />
		<h4>{data.title}</h4>
	</div>
	<div class="desc">
		<p>
			{data.description}
		</p>
	</div>
</div>
<hr />

<style>
	.logo-item {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
		gap: 1rem;
	}
	.logo-item * {
		margin: 0;
	}
	.image {
		display: flex;
		flex-direction: row;
		gap: 1rem;
		align-items: center;
	}
	.image img {
		max-width: 40%;
		height: auto;
	}
	.desc {
		width: 100%;
	}
	.desc p {
		margin: 0;
	}

	/*  media query for tablet */
	@media (min-width: 625px) {
		.logo-item {
			flex-direction: row;
			align-items: center;
			gap: 1rem;
		}
		.image {
			max-width: 30%;
			flex-direction: column;
			align-items: flex-start;
		}
		.image img {
			width: 100%;
		}
		.desc {
			max-width: 70%;
		}
	}
</style>

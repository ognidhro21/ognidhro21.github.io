<script>
	export let shown = false;
	export let data;
	const { title, description } = data;
</script>

<div class="notice" class:shown>
	<div class="notice-header">
		<h4>{title}</h4>
	</div>
	<div class="notice-body">
		<p>
			{description}
		</p>
	</div>
</div>

<style>
	.notice {
		padding: 1rem;
		background: var(--plain);
		margin-top: 1rem;
		border-radius: 0.8rem;
		box-shadow: 0px 0px 20px 4px rgba(57, 28, 28, 0.058);
		position: relative;
		overflow: hidden;
	}
	.shown {
		background: var(--plain-opacity);
		box-shadow: none;
	}
	.notice h4,
	.notice p {
		margin: 0;
	}
	.notice-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.notice-body {
		margin-top: 0.5rem;
	}
</style>

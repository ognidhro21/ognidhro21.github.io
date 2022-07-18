<script>
	import '../styles/css/common.min.css';
	import '../styles/css/common.properties.min.css';
	import '../styles/css/common.resets.min.css';
	import '../styles/css/common.utilities.min.css';
	import '../styles/css/opinions.min.css';
	import '../styles/agnostic-overrides.css';
	import '../styles/select.css';
</script>

<div class="layout">
	<slot />
</div>
<footer>
	<div class="content">
		<div class="links">
			<a href="/" sveltekit:noscroll>Home</a>
			<a href="/schedules" sveltekit:noscroll>Schedules</a>
		</div>
	</div>
</footer>

<style>
	.layout {
		min-height: 90vh;
		position: relative;
	}
	footer {
		padding: 1rem;
		background-color: var(--plain);
		min-height: 10vh;
	}

	footer * {
		margin: 0;
	}
	footer .content {
		max-width: 1400px;
		margin: 0 auto;
	}
	.links {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
</style>

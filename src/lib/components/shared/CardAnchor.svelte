<script>
	export let href;
	export let target;
</script>

<a {href} {target} class="padding secondary-container s12 m6 l4 row">
	<div class="max">
		<h5>
			<slot name="title">
				<h5>Add title</h5>
			</slot>
		</h5>
		<p>
			<slot name="subtitle" />
		</p>
		<slot />
	</div>
	<i>chevron_right</i>
</a>

<style>
	a {
		border-radius: 1rem;
		box-shadow: var(--elevate1);
	}
</style>

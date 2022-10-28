<script>
	export let title = '';
</script>

<main class="responsive">
	<a href="/materials">Go back</a>
	<h3>{title}</h3>
	<article>
		<slot />
	</article>
</main>

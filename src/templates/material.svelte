<script>
	export let title = '';
</script>

<main class="responsive">
	<a href="/materials">Go back</a>
	<h5>{title}</h5>
	<article>
		<slot />
	</article>
</main>

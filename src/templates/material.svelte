<script>
	export let title = '';
</script>

<main class="responsive">
	<a href="/materials" class="button no-margin border secondary-border">Go back</a>
	<div class="small-space" />
	<h4>{title}</h4>
	<div class="medium-space" />
	<slot />
</main>

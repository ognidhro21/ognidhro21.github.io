<script>
	import { page } from '$app/stores';
	import Container from '$lib/components/shared/Container.svelte';
	import SEO from '$lib/components/shared/SEO/index.svelte';
</script>

<SEO title={$page.status} />
<Container>
	<article>
		<div class="texts">
			<div>
				<h2>Oh no...</h2>
				<p>An error just occured</p>
			</div>
			<div class="error-text">
				<p>{$page.error.message}</p>
				<p>Status code: <span>{$page.status}</span></p>
			</div>
			<div>
				<h4>Anyway,</h4>
				<a href="/" class="button no-margin">Go back to the home</a>
			</div>
		</div>
		<div>
			<img src={Error} alt="" />
		</div>
	</article>
</Container>

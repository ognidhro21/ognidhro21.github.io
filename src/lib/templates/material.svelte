<script>
	import PageContainer from '$lib/components/shared/PageContainer.svelte';

	export let title = '';
</script>

<PageContainer {title}>
	<a href="/materials" class="button no-margin secondary noprint">Go back</a>
	<div class="small-space" />
	<slot />
</PageContainer>

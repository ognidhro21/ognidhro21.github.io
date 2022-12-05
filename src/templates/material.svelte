<script>
	import PageContainer from '../components/shared/PageContainer.svelte';

	export let title = '';
</script>

<PageContainer {title}>
	<a href="/materials" class="button no-margin border secondary-border noprint">Go back</a>
	<div class="small-space" />
	<slot />
</PageContainer>

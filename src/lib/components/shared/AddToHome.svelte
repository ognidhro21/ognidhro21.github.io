<script>
	import img from '$lib/images/og21-add-to-home.png';
	import DATA from '$lib/stores/AddToHome';

	function closeBanner() {
		$DATA.closed = true;
	}
</script>

{#if !$DATA.closed}
	<div class="add-to-home">
		<img src={img} alt="banner" class="mbe12" />
		<button on:click={closeBanner}>Ok</button>
	</div>
{/if}

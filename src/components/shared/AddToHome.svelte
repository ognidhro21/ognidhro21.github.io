<script>
	import img from '../../images/og21-add-to-home.png';
	import DATA from '../../stores/AddToHome';
	import Button from './Button.svelte';

	function closeBanner() {
		$DATA.closed = true;
	}
</script>

{#if !$DATA.closed}
	<div class="add-to-home">
		<img src={img} alt="banner" class="mbe12" />
		<Button on:click={closeBanner}>OK SHUT UP</Button>
	</div>
{/if}

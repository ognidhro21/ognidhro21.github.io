<script>
	import { slide } from 'svelte/transition';
	//import { openAccordian } from "./AccordionStore.js";
	import { createEventDispatcher } from 'svelte';
	import Icon from '../Icon.svelte';
	const dispatch = createEventDispatcher();

	export let id = 0;
	export let openedAccordion = 0;
	// function setOpenAccordian(value) {
	//   openAccordian.update(n => (n == value ? 0 : value));
	// }
	$: direction = id === openedAccordion ? 's' : 'n';
</script>

<!-- on:click={()=>setOpenAccordian(id)} -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<article
	class="collapsible-header padding secondary-container row small-elevate"
	on:click={() => dispatch('accordionSelected', id)}
>
	<div class="max">
		<slot name="title" />
	</div>
	<Icon name="chevron-down" {direction} />
</article>

{#if id == openedAccordion}
	<div class="collapsible-body" transition:slide|local>
		<slot />
	</div>
{/if}

<style>
	.collapsible-header {
		cursor: pointer;
		border-radius: 1rem;
	}
	.collapsible-body {
		display: block;
	}
</style>

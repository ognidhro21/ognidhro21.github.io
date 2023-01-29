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
<article
	class="collapsible-header padding secondary-container"
	on:click={() => dispatch('accordionSelected', id)}
>
	<slot name="title" />
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
		padding: 2rem 1rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--plain-invert);
		border-radius: 1rem;
	}
	.collapsible-body {
		display: block;
	}
</style>

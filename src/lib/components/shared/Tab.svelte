<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let items = [];
	export let selected = items[0].name;
</script>

<div class="tabs left-align">
	{#each items as item}
		<!-- svelte-ignore a11y-missing-attribute -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<a
			data-sveltekit-noscroll
			class:active={selected === item.name}
			on:click={() => {
				dispatch('tabChanged', item.name);
			}}
		>
			<i>{item.icon}</i>
			<span>{item.name}</span>
		</a>
	{/each}
</div>

<div class="medium-space" />

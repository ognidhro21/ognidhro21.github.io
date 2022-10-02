<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let items = [];
	export let selected = items[0].name;
</script>

<div class="tabs left-align">
	{#each items as item}
		<!-- svelte-ignore a11y-missing-attribute -->
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

<!-- <style>
	.tabbuttons {
		max-width: 1024px;
		height: 100%;
		border-bottom: 1px solid var(--agnostic-primary);
		padding: 0 1rem;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		overflow-y: scroll;
		align-items: flex-end;
	}
	.tabbuttons::-webkit-scrollbar {
		display: none;
	}
	button {
		width: fit-content;
		height: 100%;
		border: none;
		padding: 0.4rem 0.6rem;
		background-color: transparent;
		transition: all 0.2s ease-in-out;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 0.3rem;
	}
	button p {
		margin: 0;
		line-height: 1;
	}
	button:hover:not(.active) {
		background-color: rgba(255, 0, 0, 0.099);

		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
	}
	.active {
		background-color: var(--agnostic-primary);
		color: var(--agnostic-light-modelight);
		/* top border radius */
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
		padding: 0.5rem 0.6rem;
	}
	/* button has active class and hovering */
</style> -->

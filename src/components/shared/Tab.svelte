<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let items = [];
	export let selected = items[0];
</script>

<div class="tab">
	<div class="tabbuttons">
		{#each items as item}
			<button
				sveltekit:noscroll
				class:active={selected === item}
				on:click={() => {
					dispatch('tabChanged', item);
				}}
			>
				{item}
			</button>
		{/each}
	</div>
</div>

<style>
	.tab {
		width: 100%;
	}
	.tabbuttons {
		max-width: 1024px;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.036);
		border-bottom: 1px solid var(--agnostic-primary);
		margin: -1rem;
		margin-top: 0;
		padding: 0 1rem;
	}
	button {
		display: inline-block;
		width: auto;
		height: 100%;
		border: none;
		padding: 0.4rem 1rem;
		background-color: transparent;
		transition: all 0.2s ease-in-out;
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
	}
	/* button has active class and hovering */
</style>

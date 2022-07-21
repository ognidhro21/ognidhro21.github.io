<script>
	import { createEventDispatcher } from 'svelte';
	import Icon from './Icon.svelte';
	const dispatch = createEventDispatcher();
	export let items = [];
	export let selected = items[0].name;
</script>

<div class="tab">
	<div class="tabbuttons">
		{#each items as item}
			<button
				sveltekit:noscroll
				class:active={selected === item.name}
				on:click={() => {
					dispatch('tabChanged', item.name);
				}}
			>
				<Icon name={item.icon} width={18} height={18} />
				<p>{item.name}</p>
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
		border-bottom: 1px solid var(--agnostic-primary);
		margin: -1rem;
		margin-top: 0;
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
</style>

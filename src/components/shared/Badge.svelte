<span class="tag">
	<slot />
</span>

<style>
	.tag {
		display: inline-flex;
		justify-content: center;
		white-space: nowrap;
		background-color: var(--agnostic-primary);
		color: var(--agnostic-light-modelight);
		font-size: var(--fluid-12);
		line-height: var(--agnostic-line-height, var(--fluid-20, 1.25rem));
		padding-block-start: var(--fluid-2);
		padding-block-end: var(--fluid-2);
		padding-inline-start: var(--fluid-8);
		padding-inline-end: var(--fluid-8);
		border-radius: 200px;
	}
</style>

<article class="contact-card">
	<div class="top-section">
		<slot name="top" />
	</div>
	<div class="bottom-section">
		<slot name="bottom" />
	</div>
	<slot name="progress" />
</article>

<style>
	.contact-card {
		padding: 1rem;
		background: var(--plain);
		box-shadow: 0px 0px 20px 4px rgba(57, 28, 28, 0.058);
		position: relative;
		overflow: hidden;
		/* cant be selected */
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		border-bottom: 1px solid var(--plain-invert);
	}
	.top-section > div,
	.bottom-section > * {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	h2 {
		padding: 0 0 0.2em 0;
		margin: 0 0 1em 0;
		border-bottom: 1px solid #ff3e00;
	}

	.address,
	.email {
		padding: 0 0 0 1.5em;
		background: 0 0 no-repeat;
		background-size: 20px 20px;
		margin: 0 0 0.5em 0;
		line-height: 1.2;
	}
</style>

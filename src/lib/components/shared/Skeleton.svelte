<div class="skeleton-loading grid">
	<div class="row s6 m4 l3 small-divider">
		<div class="max">
			<div class="primary-container small-padding" />
			<div class="primary-container small-padding" />
		</div>
		<div>
			<div class="primary-container small-padding" />
			<div class="primary-container small-padding" />
		</div>
	</div>
	<div class="row s6 m4 l3 small-divider">
		<div class="max">
			<div class="primary-container small-padding" />
			<div class="primary-container small-padding" />
		</div>
		<div>
			<div class="primary-container small-padding" />
			<div class="primary-container small-padding" />
		</div>
	</div>
</div>

<style>
	.small-divider {
		margin: 0 !important;
		border-bottom: none !important;
	}
	.skeleton-loading {
		animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
	}
	.skeleton-loading .primary-container {
		background-color: var(--surface-variant) !important;
		margin-bottom: 1rem;
		border-radius: 1rem;
	}

	@keyframes pulse {
		50% {
			opacity: 0.5;
		}
	}
</style>

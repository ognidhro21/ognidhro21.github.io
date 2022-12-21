<script>
	// @ts-nocheck

	import feather from 'feather-icons';
	export const directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
	export let name;
	export let direction = 'n';
	export let strokeWidth;
	export let stroke;
	export let width = '24';
	export let height = '24';
	$: icon = feather.icons[name];
	$: rotation = directions.indexOf(direction) * 45;
	$: if (icon) {
		if (stroke) icon.attrs['stroke'] = stroke;
		if (strokeWidth) icon.attrs['stroke-width'] = strokeWidth;
	}
</script>

{#if icon}
	<svg {...icon.attrs} style="width: {width}; height: {height}; transform: rotate({rotation}deg);">
		<g>
			{@html icon.contents}
		</g>
	</svg>
{/if}

<style>
	svg {
		overflow: visible;
		transform-origin: 50% 50%;
	}
</style>

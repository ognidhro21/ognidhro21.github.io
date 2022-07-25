<script>
	import Palette from '../Palette.svelte';

	let palette = {
		name: 'Danger',
		contrast: 'var(--agnostic-light-modelight)',
		colors: [
			{
				code: 'ffdad5',
				name: 50
			},
			{
				code: 'ffbca5',
				name: 100
			},
			{
				code: 'ff997a',
				name: 200
			},
			{
				code: 'ff7950',
				name: 300
			},
			{
				code: 'ff5a2d',
				name: 400
			},
			{
				code: 'ff3d00',
				name: 500,
				default: true
			},
			{
				code: 'f33600',
				name: 600
			},
			{
				code: 'e63000',
				name: 700
			},
			{
				code: 'd62700',
				name: 800
			},
			{
				code: 'bf1900',
				name: 900
			}
		]
	};
</script>

<Palette {palette} />

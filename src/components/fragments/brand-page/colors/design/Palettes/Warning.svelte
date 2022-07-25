<script>
	import Palette from '../Palette.svelte';

	let palette = {
		name: 'Warning',
		contrast: 'var(--agnostic-light-modelight)',
		colors: [
			{
				code: 'fff8e0',
				name: 50
			},
			{
				code: 'ffecb2',
				name: 100
			},
			{
				code: 'fddf82',
				name: 200
			},
			{
				code: 'fed54d',
				name: 300
			},
			{
				code: 'f3ca26',
				name: 400
			},
			{
				code: 'ffc107',
				name: 500,
				default: true
			},
			{
				code: 'ffb400',
				name: 600
			},
			{
				code: 'fda000',
				name: 700
			},
			{
				code: 'ff9103',
				name: 800
			},
			{
				code: 'fe6e01',
				name: 900
			}
		]
	};
</script>

<Palette {palette} />

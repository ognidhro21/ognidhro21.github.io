<script>
	import Palette from '../Palette.svelte';

	let palette = {
		name: 'Success',
		contrast: 'var(--agnostic-light-modelight)',
		colors: [
			{
				code: 'e7f4e8',
				name: 50
			},
			{
				code: 'c9e7ca',
				name: 100
			},
			{
				code: 'a5d5a6',
				name: 200
			},
			{
				code: '80c683',
				name: 300
			},
			{
				code: '67bb6a',
				name: 400
			},
			{
				code: '4caf50',
				name: 500,
				default: true
			},
			{
				code: '43a148',
				name: 600
			},
			{
				code: '378d3c',
				name: 700
			},
			{
				code: '2b7c31',
				name: 800
			},
			{
				code: '1c5f22',
				name: 900
			}
		]
	};
</script>

<Palette {palette} />

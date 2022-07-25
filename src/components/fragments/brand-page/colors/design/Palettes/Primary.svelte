<script>
	import Palette from '../Palette.svelte';

	let palette = {
		name: 'Primary',
		contrast: 'var(--agnostic-light-modelight)',
		colors: [
			{
				code: 'ffe2ed',
				name: 50
			},
			{
				code: 'ffc4d3',
				name: 100
			},
			{
				code: 'f58e9c',
				name: 200
			},
			{
				code: 'eb657a',
				name: 300
			},
			{
				code: 'f93c5b',
				name: 400
			},
			{
				code: 'ff1744',
				name: 500,
				default: true
			},
			{
				code: 'ee0442',
				name: 600
			},
			{
				code: 'db003b',
				name: 700
			},
			{
				code: 'cf0033',
				name: 800
			},
			{
				code: 'c10027',
				name: 900
			}
		]
	};
</script>

<Palette {palette} />

<script>
	import LogoItem from './LogoItem.svelte';
	import LOGO from './Ognidhro21SolidRounded.png';
	let data = {
		title: 'Ognidhro Ekush Solid Rounded',
		img: LOGO,
		description: `This logo should be used in such cases:
The color of the backround is not the colors defined in the first section of this guideline and,
The background is highly saturated and not very dark or light.`
	};
</script>

<LogoItem {data} />

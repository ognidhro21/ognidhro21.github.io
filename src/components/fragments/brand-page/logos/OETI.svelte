<script>
	import LogoItem from './LogoItem.svelte';
	import LOGO from './Ognihro21TransparentInverted.png';
	let data = {
		title: 'Ognidhro Ekush Transparent Inverted',
		img: LOGO,
		description: `If the background is lighter then this logo can be used. Recommended to use only if the logo above looks bad when placed against a lighter, low saturated background.`
	};
</script>

<LogoItem {data} />

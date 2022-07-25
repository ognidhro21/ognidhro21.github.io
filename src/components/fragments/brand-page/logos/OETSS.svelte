<script>
	import LogoItem from './LogoItem.svelte';
	import LOGO from './Ognidhro21SolidSquare.png';
	let data = {
		title: 'Ognidhro Ekush Solid Square',
		img: LOGO,
		description: `This logo should be used only and only as social media handles i.e. Facebook page etc.`
	};
</script>

<LogoItem {data} />

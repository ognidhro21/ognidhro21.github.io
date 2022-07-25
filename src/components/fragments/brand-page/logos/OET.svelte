<script>
	import LogoItem from './LogoItem.svelte';
	import LOGO from './Ognihro21Transparent.png';
	let data = {
		title: 'Ognidhro Ekush Transparent',
		color: 'var(--agnostic-light-modelight)',
		bgCol: 'var(--agnostic-primary)',
		img: LOGO,
		description: 'In most cases, this logo will be used.'
	};
</script>

<LogoItem {data} />

<script>
	import Container from '$lib/components/shared/Container.svelte';
	const stacks = [
		{ name: 'Source Code', href: 'https://github.com/ognidhro21/ognidhro21.github.io' },
		{ name: 'SvelteKit', href: 'https://kit.svelte.dev/' },
		{ name: 'Arch Linux', href: 'https://archlinux.org/' },
		{ name: 'Visual Studio Code', href: 'https://code.visualstudio.com/' },
		{ name: 'Github', href: 'https://github.com' },
		{ name: 'Vercel', href: 'https://vercel.com' },
		{ name: 'Material You', href: 'https://m3.material.io/' }
	];
</script>

<Container>
	<h6 class="s6 l3 center-align">Powered and made with</h6>
	<section class="grid">
		{#each stacks as { name, href }}
			<a class="s6 l3" {href}>{name}</a>
		{/each}
	</section>
</Container>

<style>
	a:not([href*='yourdomain.com']):not([href*='localhost']):not([href^='/']):after {
		font-family: 'Material Symbols Outlined';
		content: '  \e89e';
	}
</style>

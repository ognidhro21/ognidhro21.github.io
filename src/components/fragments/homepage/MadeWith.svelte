<script>
	import Container from '../../shared/Container.svelte';
	const stacks = [
		{ name: 'SvelteKit', href: 'https://kit.svelte.dev/' },
		{ name: 'Arch Linux', href: 'https://archlinux.org/' },
		{ name: 'Visual Studio Code', href: 'https://code.visualstudio.com/' },
		{ name: 'Github', href: 'https://github.com' },
		{ name: 'Vercel', href: 'https://vercel.com' },
		{ name: 'Material You', href: 'https://m3.material.io/' }
	];
</script>

<Container>
	<section class="grid">
		<h6 class="s6 l3">Powered and made with</h6>
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

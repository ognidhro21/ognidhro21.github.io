<script>
	import { page } from '$app/stores';
	import LOGO from '$lib/images/OG21Nav.png';

	const nav = [
		{ path: '/', title: 'Home', icon: 'home' },
		{ title: 'Schedules', path: '/schedules', icon: 'event' },
		{ title: 'Courses', path: '/courses', icon: 'info' },
		{ title: 'Materials', path: '/materials', icon: 'collections_bookmark' }
	];
</script>

<nav class="m l left small-elevate noprint">
	<a href="/">
		<img src={LOGO} alt="OG21" style="max-width: 100%;" />
	</a>
	{#each nav as link}
		<a href={link.path} class:active={$page.url.pathname === link.path} data-sveltekit-noscroll>
			<i class:fill={$page.url.pathname === link.path}>{link.icon}</i>
			<p>{link.title}</p>
		</a>
	{/each}
</nav>
<nav class="s bottom small-elevate noprint">
	{#each nav as link}
		<a href={link.path} class:active={$page.url.pathname === link.path} data-sveltekit-noscroll>
			<i class:fill={$page.url.pathname === link.path}>{link.icon}</i>
			<p>{link.title}</p>
		</a>
	{/each}
</nav>
<div class="overlay" />

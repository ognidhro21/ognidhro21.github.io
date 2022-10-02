<script>
	import { page } from '$app/stores';
	import LOGO from '../../images/OG21Nav.png';
	import DATA from '../../stores/NoticeInfo';
	import Icon from './Icon.svelte';

	const nav = [
		{
			title: 'Home',
			path: '/',
			icon: 'home'
		},
		{
			title: 'Schedules',
			path: '/schedules',
			icon: 'event'
		},
		{
			title: 'Courses',
			path: '/courses',
			icon: 'info'
		},
		{
			title: 'Notices',
			path: '/notices',
			icon: 'notifications',
			showDot: true
		}
	];
	let y;
</script>

<svelte:window bind:scrollY={y} />

<nav class="m l left">
	<a href="/">
		<img src={LOGO} alt="OG21" style="max-width: 100%;" />
	</a>
	{#each nav as link}
		<a href={link.path} class:active={$page.url.pathname === link.path} data-sveltekit-noscroll>
			<i class:fill={$page.url.pathname === link.path}>{link.icon}</i>
			<p>{link.title}</p>
			{#if $DATA.newlyAdded.length > 0 && link.showDot}
				<div class="dot">
					<p>.</p>
				</div>
			{/if}
		</a>
	{/each}
</nav>
<nav class="s bottom">
	{#each nav as link}
		<a href={link.path} class:active={$page.url.pathname === link.path} data-sveltekit-noscroll>
			<i class:fill={$page.url.pathname === link.path}>{link.icon}</i>
			<p>{link.title}</p>
			{#if $DATA.newlyAdded.length > 0 && link.showDot}
				<span class="badge">New</span>
			{/if}
		</a>
	{/each}
</nav>
<!-- <header class="responsive fixed primary black-text " id="top-app-bar1">
	<nav>
		<p class="max" />
		<button class="transparent circle"><i>light_mode</i></button>
		<button class="transparent circle"><i>notifications</i></button>
		<button class="transparent circle"><i>more_vert</i></button>
	</nav>
</header> -->

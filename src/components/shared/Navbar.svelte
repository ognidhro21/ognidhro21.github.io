<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import LOGO from '../../images/OG21Nav.png';
	import DATA from '../../stores/NoticeInfo';
	import DARK from '../../stores/DarkMode';
	import GROUP from '../../stores/PersistantInfo';
	import Icon from './Icon.svelte';

	const nav = [
		// {
		// 	title: 'Home',
		// 	path: '#modal-menu',
		// 	icon: 'menu'
		// },
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
	let menu = false;
	function toggleMenu() {
		menu = !menu;
	}
	async function resetGroup() {
		let info = {
			section: 1,
			group: 2,
			saved: false
		};
		$GROUP[0] = info;
		// goto('/schedules');
	}
</script>

<svelte:window bind:scrollY={y} />

<nav class="m l left">
	<a href="/">
		<img src={LOGO} alt="OG21" style="max-width: 100%;" />
	</a>
	<!-- svelte-ignore a11y-missing-attribute -->
	<a on:click={toggleMenu} class="none">
		<i>menu</i>
		<p>Menu</p>
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
	<a on:click={toggleMenu} class="none">
		<i>menu</i>
		<p>Menu</p>
	</a>
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
<div class="overlay" class:active={menu} on:click={toggleMenu} />
<div class="modal left" id="modal-menu" class:active={menu}>
	<header class="fixed">
		<nav>
			<!-- <img src={LOGO} alt="OG21" style="max-width: 100%;" /> -->
			<div class="max">
				<h6>Ognidhro 21</h6>
				<div>v3.0.3</div>
			</div>
			<button on:click={toggleMenu} class="transparent circle"><i>close</i></button>
		</nav>
	</header>
	<a class="row round" href="/"><i>home</i><span>Home</span></a>
	<div class="small-divider" />
	<a
		class="row round"
		on:click={() => {
			$DARK = !$DARK;
		}}
	>
		<i>light_mode</i><span>Light / Dark</span>
	</a>
	<a class="row round" on:click={resetGroup} href="/"><i>upload_file</i><span>Change Group</span></a
	>
</div>

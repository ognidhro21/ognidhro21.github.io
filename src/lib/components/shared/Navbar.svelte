<script>
	import { page } from '$app/stores';
	import LOGO from '$lib/images/OG21Nav.png';
	import DATA from '$lib/stores/NoticeInfo';
	import DARK from '$lib/stores/DarkMode';
	import GROUP from '$lib/stores/PersistantInfo';
	import website from '$lib/config/website';
	const nav = [
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
			title: 'Materials',
			path: '/materials',
			icon: 'collections_bookmark'
		}
	];
	const navTwo = [
		{
			path: '/',
			title: 'Home',
			icon: 'home'
		},
		{
			path: '/notices',
			title: 'Notices',
			icon: 'notifications'
		},
		{
			path: '/classification',
			title: 'Hall of Fame',
			icon: 'leaderboard'
		},
		{
			path: 'https://www.facebook.com/ognidhro21/',
			title: 'Find us on Facebook',
			target: '_blank'
		},
		{
			path: 'https://github.com/ognidhro21/ognidhro21.github.io',
			title: 'Source Code',
			target: '_blank'
		}
	];
	let y;
	let toast = false;
	// --------------------re/setting default group--------------------
	const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
	let selectedGroup = 5;
	$: info = {
		section: 1,
		group: 2,
		saved: false
	};
	$: saved = false;
	$: {
		if ($GROUP) {
			info.section = $GROUP[0].section;
			info.group = $GROUP[0].group;
			info.saved = $GROUP[0].saved;
			saved = info.saved;
		} else {
			$GROUP[0] = info;
		}
	}
	$: {
		if (selectedGroup <= 2) {
			info.section = 0;
			info.group = selectedGroup;
		} else if (selectedGroup <= 5) {
			info.section = 1;
			info.group = selectedGroup - 3;
		} else {
			info.section = 2;
			info.group = selectedGroup - 6;
		}
	}

	function saveInfo() {
		info.saved = true;
		saved = true;
		$GROUP[0] = info;
		toast = true;
	}
</script>

<svelte:window bind:scrollY={y} />

<nav class="m l left small-elevate noprint">
	<a href="/">
		<img src={LOGO} alt="OG21" style="max-width: 100%;" />
	</a>
	<!-- svelte-ignore a11y-missing-attribute -->
	<a data-ui="#modal-menu" class="none">
		<i>menu</i>
		<p>Menu</p>
	</a>
	{#each nav as link}
		<a href={link.path} class:active={$page.url.pathname === link.path} data-sveltekit-noscroll>
			<i class:fill={$page.url.pathname === link.path}>{link.icon}</i>
			<p>{link.title}</p>
		</a>
	{/each}
</nav>
<nav class="s bottom small-elevate noprint">
	<!-- svelte-ignore a11y-missing-attribute -->
	<a data-ui="#modal-menu" class="none">
		<i>menu</i>
		<p>Menu</p>
	</a>
	{#each nav as link}
		<a href={link.path} class:active={$page.url.pathname === link.path} data-sveltekit-noscroll>
			<i class:fill={$page.url.pathname === link.path}>{link.icon}</i>
			<p>{link.title}</p>
		</a>
	{/each}
</nav>
<div class="overlay" />
<div class="modal left" id="modal-menu">
	<header class="fixed">
		<nav>
			<!-- <img src={LOGO} alt="OG21" style="max-width: 100%;" /> -->
			<div class="max row">
				<h6 class="max">Ognidhro 21</h6>
				<div>v{website.version}</div>
			</div>
		</nav>
	</header>

	{#each navTwo as nav}
		<a class="row round" data-ui="#modal-menu" href={nav.path} target={nav.target}>
			{#if nav.icon}
				<i>{nav.icon}</i>
			{/if}
			<span>{nav.title}</span>
		</a>
	{/each}
	<div class="small-divider" />
	<!-- svelte-ignore a11y-missing-attribute -->
	<a
		class="row round"
		on:click={() => {
			$DARK = !$DARK;
		}}
		data-ui="#modal-menu"
	>
		<i>light_mode</i><span>Light / Dark</span>
	</a>
	<!-- svelte-ignore a11y-missing-attribute -->
	<a class="row round" data-ui="#modal-reset-grp"
		><i>upload_file</i><span>Change Default Group</span></a
	>
</div>

<!-- ? ==================================MODAL===============================? -->
<div class="modal " id="modal-reset-grp">
	<header class="fixed">
		<nav>
			<!-- <img src={LOGO} alt="OG21" style="max-width: 100%;" /> -->
			<div class="max">
				<h6>Change Default Group</h6>
			</div>
			<button data-ui="#modal-reset-grp" class="transparent circle"><i>close</i></button>
		</nav>
	</header>
	<div class="inputs">
		<h4>Section {info.section + 1}</h4>
		<div class="field suffix">
			<select name="groups" id="groups" bind:value={selectedGroup}>
				{#each groups as group, i}
					<option value={i}>Group {group}</option>
				{/each}
			</select>
			<i>arrow_drop_down</i>
		</div>
		<button on:click={saveInfo} data-ui="#modal-reset-grp">Submit</button>
	</div>
</div>
<div
	class="toast green white-text"
	class:active={toast}
	on:click={() => {
		toast = false;
	}}
>
	<i>info</i>
	<span>Successfully saved</span>
</div>

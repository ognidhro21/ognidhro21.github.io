<script>
	import { page } from '$app/stores';
	import LOGO from '../../images/OG21Nav.png';
	import DATA from '../../stores/NoticeInfo';
	import DARK from '../../stores/DarkMode';
	import GROUP from '../../stores/PersistantInfo';
	import website from '../../lib/config/website';
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

<nav class="m l left small-elevate">
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
			{#if $DATA.newlyAdded.length > 0 && link.showDot}
				<div class="dot">
					<p>.</p>
				</div>
			{/if}
		</a>
	{/each}
</nav>
<nav class="s bottom small-elevate">
	<!-- svelte-ignore a11y-missing-attribute -->
	<a data-ui="#modal-menu" class="none">
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
<div class="overlay" />
<div class="modal bottom" id="modal-menu">
	<header class="fixed">
		<nav>
			<!-- <img src={LOGO} alt="OG21" style="max-width: 100%;" /> -->
			<div class="max row">
				<h6 class="max">Ognidhro 21</h6>
				<div>v{website.version}</div>
			</div>
		</nav>
	</header>
	<a class="row round" href="/" data-ui="#modal-menu"><i>home</i><span>Home</span></a>
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

<div class="modal " id="modal-reset-grp">
	<header class="fixed">
		<nav>
			<!-- <img src={LOGO} alt="OG21" style="max-width: 100%;" /> -->
			<div class="max">
				<h6>Change Default Group</h6>
			</div>
			<button data-ui="#modal-menu" class="transparent circle"><i>close</i></button>
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

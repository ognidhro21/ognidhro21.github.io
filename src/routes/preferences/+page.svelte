<script>
	import { browser } from '$app/environment';
	import PageContainer from '$lib/components/shared/PageContainer.svelte';
	import Skeleton from '$lib/components/shared/Skeleton.svelte';
	const themes = [
		{ name: 'Ognidhro Red', color: '#ff1744', onButton: 'white' },
		{ name: 'Wonderous Blue', color: '#0083d5', onButton: 'white' },
		{ name: 'Tommorow Green', color: '#009323', onButton: 'white' },
		{ name: 'Thriving Yellow', color: '#eacf00', onButton: 'black' }
	];

	import OGDATA from '$lib/stores/Ognidhro_data';

	// --------------------re/setting default group--------------------
	const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
	let info = { section: 1, group: 2, saved: true };
	let selectedGroup = grpToId($OGDATA.class.group, $OGDATA.class.section);

	function grpToId(grp, section) {
		return 3 * section + grp;
	}
	function save(e) {
		const grp = Number(e.target.value);
		if (grp <= 2) {
			info.section = 0;
			info.group = grp;
		} else if (grp <= 5) {
			info.section = 1;
			info.group = grp - 3;
		} else {
			info.section = 2;
			info.group = grp - 6;
		}
		$OGDATA = { ...$OGDATA, class: info };
	}
	async function loadData() {
		return $OGDATA.class;
	}
	function changeTheme(e) {
		const theme = e.target.value;
		if (theme === '#ff1744') {
			if (browser) document.body.removeAttribute('style');
		} else {
			let mode = window.ui('theme', theme);
		}
		$OGDATA.theme = theme;
	}
	let prom = loadData();
	let mode = $OGDATA.mode;
	$: modeText = mode ? 'dark' : 'light';
	function changeMode() {
		let m = window.ui('mode', modeText);
		$OGDATA = { ...$OGDATA, mode: mode };
	}
</script>

<PageContainer title="Preferences" icon="cloud">
	{#await prom}
		<Skeleton />
	{:then d}
		<div class="list">
			<h5>Change Group</h5>
			<div class="inputs">
				<div class="field suffix">
					<select name="groups" id="groups" on:input={save} value={selectedGroup}>
						{#each groups as group, i}
							<option value={i}>Group {group}</option>
						{/each}
					</select>
					<i>arrow_drop_down</i>
				</div>
			</div>
		</div>
		<div class="row list">
			<h5 class="max">Dark mode</h5>
			<label for="drkmd" class="switch">
				<input type="checkbox" name="drkmd" id="drkmd" bind:checked={mode} on:change={changeMode} />
				<span>
					<i>dark_mode</i>
				</span>
			</label>
		</div>
		<div class="list">
			<h5>Theme</h5>
			{#each themes as { name, color, onButton } (name)}
				<button
					style="background-color: {color} !important; color: {onButton}"
					class="theme-button"
					value={color}
					on:click={changeTheme}
				/>
			{/each}
		</div>
	{/await}
</PageContainer>

<style>
	.theme-button {
		max-width: 1rem !important;
		height: 4rem;
		margin: 0 1rem 1rem 0;
	}
	.list {
		margin-bottom: 1rem;
		background-color: var(--surface-variant);
		padding: 1rem;
		border-radius: 0.2rem;
	}
</style>

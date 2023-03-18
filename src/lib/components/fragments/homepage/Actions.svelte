<script>
	import GROUP from '$lib/stores/PersistantInfo';
	import website from '$lib/config/website';
	// --------------------re/setting default group--------------------
	const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
	let toast = false;

	$: info = {
		section: 1,
		group: 2,
		saved: false
	};
	$: saved = false;
	$: {
		if ($GROUP) {
			const k = {
				section: $GROUP[0].section,
				group: $GROUP[0].group,
				saved: $GROUP[0].saved
			};
			info = k;
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
	$: selectedGroup = 5;

	function saveInfo() {
		info.saved = true;
		saved = true;
		$GROUP[0] = info;
		toast = true;
	}
</script>

<header>
	<nav>
		<a class="row round max" data-ui="#modal-reset-grp">
			<i>upload_file</i>
			<span>Change Default Group</span>
		</a>
	</nav>
</header>

<!-- ? ==================================MODAL===============================? -->
<div class="modal top" id="modal-reset-grp">
	<header class="fixed">
		<nav>
			<div class="max">
				<h6>Change Default Group</h6>
			</div>
			<button data-ui="#modal-reset-grp" class="transparent circle">
				<i>close</i>
			</button>
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
		<!-- <div class="field label border">
			<input type="text" pattern="[0-9]{7}" maxlength="7" />
			<label>ID</label>
		</div> -->

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

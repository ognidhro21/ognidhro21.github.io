<script>
	import Anim from '../../Anim.svelte';
	export let tabindex = 2;
	import './TabData.css';
</script>

<Anim>
	<div id="panel-3" class="page padding active" role="tabpanel" {tabindex}>
		<h3>Events will be displayed here.</h3>
	</div>
</Anim>

<script>
	import Anim from '../../Anim.svelte';
	export let tabindex = 2;
</script>

<Anim>
	<div id="panel-3" class="tab-panel" role="tabpanel" {tabindex}>
		<h3>Events will be displayed here.</h3>
	</div>
</Anim>

<script>
	import BAD from './logos/bad-logos.png';
	import OET from './logos/OET.svelte';
	import Oeti from './logos/OETI.svelte';
	import Oetsr from './logos/OETSR.svelte';
	import Oetss from './logos/OETSS.svelte';
</script>

<div class="mbe64">
	<h2 class="mbe12">Logo Use Cases</h2>
	<a href="https://drive.google.com/drive/folders/1hVwpDRTC2UO1HTsN0FS0SPROjlrWvM-P?usp=sharing">
		<button mode="primary">Download the logos</button>
	</a>
</div>
<OET />
<Oeti />
<Oetss />
<Oetsr />
<h2>
	In no circumstances the logo should be stretched, distorted, rotated etc. the logo should be as is
	as created. Some examples of badly used logo are given below
</h2>
<img src={BAD} alt="" />

<style>
	h2 {
		text-transform: uppercase;
		text-align: justify;
	}
	img {
		width: 100%;
	}
</style>

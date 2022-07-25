<script>
	let text = 'The quick brown fox jumps over the lazy dog';
	let bdText = 'আমার ভাইয়ের রক্তে রাঙানো একুশে ফেব্রুয়ারি';

	let types = [
		{
			name: 'Heading 1',
			type: 'h1',
			text: text,
			size: '28.832px'
		},
		{
			name: 'Heading 2',
			type: 'h2',
			text: text,
			size: '25.632px'
		},
		{
			name: 'Heading 3',
			type: 'h3',
			text: text,
			size: '22.784px'
		},
		{
			name: 'Heading 4',
			type: 'h4',
			text: text,
			size: '20.256px'
		},
		{
			name: 'Heading 5',
			type: 'h5',
			text: text,
			size: '18px'
		},
		{
			name: 'Body',
			type: 'p',
			text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis eveniet consectetur odit eius
		nulla distinctio unde laborum esse. Vitae nemo consequatur optio ipsum saepe error eum! Quod,
		dolor. Repudiandae`,
			size: '16px'
		}
	];
	let ts = [];
	$: types.forEach((type) => {
		ts = [...ts, `<${type.type}>${type.text}</${type.type}>`];
	});
</script>

<div class="header">
	<h2>Typography</h2>
	<p>
		Even though a guide for typography is not necessary, as there are rarely any paperwork, a guide
		is provided here anyway for the future works.
	</p>
	<h4>
		Heading Font: <span><a href="https://fonts.google.com/specimen/Montserrat">Montserrat</a></span>
	</h4>
	<h4 class="mbe12">
		Body Font: <span><a href="https://fonts.google.com/specimen/Roboto">Roboto</a></span>
	</h4>
	<h4>
		Bangla Heading Font: <span
			><a href="https://lipighor.com/IhtishamDeshlipi.html">ইহতিশাম দেশলিপি</a></span
		>
	</h4>
	<p>
		Please note that the font ইহতিশাম দেশলিপি can only be used in graphics design, as it is not
		embeddable in any website as per license requirement. So for the usecases anything other than
		graphics design, please use the font কালপুরুষ.(for Bangla)
	</p>

	<h4>
		Bangla Body Font: <span
			><a href="https://www.omicronlab.com/download/fonts/kalpurush.ttf">কালপুরুষ</a></span
		>
	</h4>
</div>
<hr class="mbe24" />

<div class="fonts">
	{#each ts as t, i}
		<div class="details">
			<h4>{types[i].name}</h4>
			<p>{types[i].size}</p>
		</div>
		{@html t}
		<hr />
	{/each}
</div>

<style>
	.header {
		margin-bottom: 1rem;
	}
	.header h4 {
		margin: 0;
	}
	.details {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin-top: 1rem;
	}
	.details * {
		margin: 0;
	}
</style>

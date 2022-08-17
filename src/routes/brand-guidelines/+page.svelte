<script>
	import Colors from '../../components/fragments/brand-page/Colors.svelte';
	import Logo from '../../components/fragments/brand-page/Logo.svelte';
	import Typography from '../../components/fragments/brand-page/Typography.svelte';
	import Anim from '../../components/shared/Anim.svelte';
	import Container from '../../components/shared/Container.svelte';
	import SEO from '../../components/shared/SEO/index.svelte';
</script>

<Anim>
	<SEO title={`Brand Guidelines`} />
	<Container>
		<h1>Brand Guidelines</h1>
		<Colors />
	</Container>
	<Container>
		<Logo />
	</Container>
	<Container>
		<Typography />
	</Container>
</Anim>

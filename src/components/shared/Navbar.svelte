<script>
	import { page } from '$app/stores';
	import Home from '../../images/icons/Home.svg';
	import Bell from '../../images/icons/Bell.svg';
	import Calender from '../../images/icons/Calender.svg';
	import LOGO from '../../images/OG21Nav.svg';
	import DATA from '../../stores/NoticeInfo';

	const nav = [
		{
			title: 'Home',
			path: '/',
			icon: Home
		},
		{
			title: 'Schedules',
			path: '/schedules',
			icon: Calender
		},
		{
			title: 'Notices',
			path: '/notices',
			icon: Bell,
			showDot: true
		}
	];
	let y;
	$: Hide = () => {
		const b = y === 0 && $page.path.url === '/';
		return b;
	};
</script>

<svelte:window bind:scrollY={y} />
<nav class:sticky={y > 66} class:hide={$page.url.pathname === '/'}>
	<img src={LOGO} alt="OG21" />
	<div class="links">
		{#each nav as link}
			<a href={link.path} class:active={$page.url.pathname === link.path} sveltekit:noscroll>
				<div class="link-container">
					<img src={link.icon} alt="" />
					<p>{link.title}</p>
				</div>
				{#if $DATA.newlyAdded.length > 0 && link.showDot}
					<div class="dot">
						<p>.</p>
					</div>
				{/if}
			</a>
		{/each}
	</div>
</nav>

<style>
	nav {
		right: 0;
		left: 0;
		background-color: var(--agnostic-light-modelight);
		z-index: 999;
		overflow: hidden;
		box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		transition: all 0.2s ease-in-out;
	}
	nav > div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
	nav a {
		display: block;
		text-decoration: none;
		transition: all 0.3s ease-in-out;
		position: relative;
		color: var(--agnostic-dark-modelight);
		margin: 0.4rem 0;
	}

	.active {
		border-bottom: 2px solid var(--agnostic-primary);
	}
	.link-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		transition: all 0.3s ease-in-out;
		cursor: pointer;
		position: relative;
	}
	.link-container img {
		width: 1.5rem;
	}
	.link-container p {
		margin: 0;
		padding: 0;
	}
	.dot {
		position: absolute;
		right: 1rem;
		top: 0;
		width: 1rem;
		height: 1rem;
		background-color: var(--agnostic-primary);
		border-radius: 50%;
		transition: all 0.3s ease-in-out;
		color: var(--agnostic-primary);
	}
	.dot p {
		display: none;
	}

	/* media for tab and bigger */
	@media (min-width: 1024px) {
		nav {
			top: -100%;
			padding: 0 12rem;
		}
		nav > img {
			width: 7rem;
		}
		.sticky {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
		}
		.sticky + :global(div) {
			padding-top: 66px;
		}
		.hide + :global(div) {
			margin-top: -66px;
		}
	}
	@media (max-width: 1024px) {
		nav {
			bottom: 0;
			position: fixed;
			justify-content: center;
			box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
		}
		nav > img {
			display: none;
		}
	}
</style>

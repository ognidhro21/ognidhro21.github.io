import { writable } from 'svelte/store';

import { browser } from '$app/environment';

const storedData = (browser &&
	JSON.parse(
		// @ts-ignore
		localStorage.getItem('ognidhro21_AddToHome')
	)) || { closed: false };
const ognidhro21_AddToHome = writable(storedData);
ognidhro21_AddToHome.subscribe(
	(val) => browser && (localStorage.ognidhro21_AddToHome = JSON.stringify(val))
);

export default ognidhro21_AddToHome;

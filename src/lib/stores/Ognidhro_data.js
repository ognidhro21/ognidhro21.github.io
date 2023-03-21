import { writable } from 'svelte/store';

import { browser } from '$app/environment';

const storedData = (browser &&
	JSON.parse(
		// @ts-ignore
		localStorage.getItem('ognidhro21_data')
	)) || {
	class: { section: 1, group: 2, saved: false },
	theme: '#ff1744',
	mode: 'light'
};
const ognidhro21_data = writable(storedData);
ognidhro21_data.subscribe((val) => browser && (localStorage.ognidhro21_data = JSON.stringify(val)));

export default ognidhro21_data;

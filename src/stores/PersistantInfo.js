import { writable } from 'svelte/store';

import { browser } from '$app/env';

const storedData =
	(browser &&
		JSON.parse(
			// @ts-ignore
			localStorage.getItem('ognidhro21_PersistantInfo')
		)) ||
	[];
const ognidhro21_PersistantInfo = writable(storedData);
ognidhro21_PersistantInfo.subscribe(
	(val) => browser && (localStorage.ognidhro21_PersistantInfo = JSON.stringify(val))
);

export default ognidhro21_PersistantInfo;

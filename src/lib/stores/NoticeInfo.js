import { writable } from 'svelte/store';

import { browser } from '$app/environment';

const storedData = (browser &&
	JSON.parse(
		// @ts-ignore
		localStorage.getItem('ognidhro21_NoticeInfo')
	)) || {
	shownIds: [],
	newlyAdded: []
};
const ognidhro21_NoticeInfo = writable(storedData);
ognidhro21_NoticeInfo.subscribe(
	(val) => browser && (localStorage.ognidhro21_NoticeInfo = JSON.stringify(val))
);

export default ognidhro21_NoticeInfo;

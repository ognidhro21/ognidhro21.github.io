import { writable } from 'svelte/store';

const storedData = false;
const dark = writable(storedData);

export default dark;

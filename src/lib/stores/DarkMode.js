import { writable } from 'svelte/store';

const storedData = true;
const dark = writable(storedData);

export default dark;

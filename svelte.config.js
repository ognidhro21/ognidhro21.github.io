import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	kit: {
		adapter: adapter(),

		// prerender
		prerender: {
			enabled: true,
			crawl: true,
			entries: ['*'],
			default: true
		}
	},
	preprocess: [
		mdsvex({
			extensions: ['.md']
		})
	]
};

export default config;

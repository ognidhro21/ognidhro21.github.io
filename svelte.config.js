import adapter from '@sveltejs/adapter-vercel';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
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
	mdsvex: {
		extensions: ['.md']
	}
};

export default config;

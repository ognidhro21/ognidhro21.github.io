import adapter from '@sveltejs/adapter-auto';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// prerender
		prerender: {
			enabled: true,
			crawl: true,
			entries: ['*'],
			default: true
		}
	}
};

export default config;
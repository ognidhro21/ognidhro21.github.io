import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		browser: {
			hydrate: true,
			router: false
		},
		prerender: {
			default: true,
			crawl: true,
			enabled: true
		}
	}
};

export default config;

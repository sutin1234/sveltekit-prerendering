const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-node');
const static = require('@sveltejs/adapter-static');
const pkg = require('./package.json');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {

	preprocess: [
		sveltePreprocess.typescript(),
		require("svelte-windicss-preprocess").preprocess({
			config: 'tailwind.config.cjs',
			compile: true,
			prefix: "svelte-app-",
			globalPreflight: true,
			globalUtility: true,
		})
	],
	kit: {
		adapter: static(),
		target: '#svelte',
		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		},
		prerender: {
			crawl: true,
			enabled: true,
			force: true,
			pages: ['*']
		},
	}
};

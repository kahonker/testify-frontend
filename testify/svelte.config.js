import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */

const config = {
      preprocess: sveltePreprocess(),
}

export default {
    preprocess: sveltePreprocess(),
}

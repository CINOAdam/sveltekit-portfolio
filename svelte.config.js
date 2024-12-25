import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// Configure for static site generation
		adapter: adapter({
			// default options:
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false,
			strict: true
		}),
		// Enable prerendering
		prerender: {
			entries: ['*'],
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore 404s from portfolio links
				if (path.startsWith('/portfolio/')) {
					return;
				}
				// Otherwise throw the error
				throw new Error(message);
			},
			handleMissingId: ({ id }) => {
				// Ignore missing section IDs - they're handled by the SPA routing
				const knownSectionIds = ['testimonial', 'about', 'portfolio', 'blog', 'contact', 'services', 'resume'];
				if (knownSectionIds.includes(id)) {
					return;
				}
				throw new Error(`Missing ID "${id}"`);
			}
		}
	}
};

export default config;

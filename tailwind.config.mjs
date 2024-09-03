/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary-green": "#00FF00"
			},
			fontFamily: {
				"rubik": ['Rubik Mono One', "sans-serif"]
			},
			transitionTimingFunction : {
				'project-timing': 'cubic-bezier(0.36, 0.99, 0.11, 0.95)'
			}
		},
	},
	plugins: [],
}

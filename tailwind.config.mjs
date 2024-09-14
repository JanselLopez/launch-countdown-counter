/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {		
		colors:{
			'gray-blue':'hsl(237, 18%, 59%)',
			'soft-red':'hsl(345, 95%, 68%)',
			'white':'hsl(0, 0%, 100%)',
			'dark-blue':'hsl(236, 21%, 26%)',
			'very-dark-blue':'hsl(235, 16%, 14%)',
			'darkest-blue':'hsl(234, 17%, 12%)',
			'purple':'#2F2439',
			'purple-dark':'#1A1823'
		},
		extend: {},
	},
	plugins: [],
}

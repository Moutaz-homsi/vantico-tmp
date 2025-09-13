// ⚠️WARN: if you need to customize the tailwindcss configuration, use global.css instead of this file
// currently we need this just for storybook
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
		"./stories/**/*.{js,ts,jsx,tsx}" // Here!
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-gantari)"]
			},
			colors: {
				title: {
					DEFAULT: "var(--title-primary)"
				},
				text: {
					500: "var(--text-500)"
				},
				background: {
					900: "var(--bg-900)"
				}
			}
		}
	},
	safelist: ["text-lg", "md:text-2xl", "font-light", "text-gray-400", "text-xs"],
	plugins: []
}

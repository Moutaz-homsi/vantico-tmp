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
	theme: {},
	plugins: []
}

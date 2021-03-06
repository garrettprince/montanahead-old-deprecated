/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			nhaasrg: ['NHaasGroteskRg', 'sans-serif'],
			nhaasbd: ['NHaasGroteskBld', 'sans-serif']
		},
		extend: {
			rotate: {
				270: '270deg'
			}
		}
	},
	plugins: []
};

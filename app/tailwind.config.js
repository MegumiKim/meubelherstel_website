/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
			padding: '2rem', // You can adjust the padding as well
			screens: {
				xl: '1200px'
			}
		},
		extend: {}
	},
	plugins: []
};

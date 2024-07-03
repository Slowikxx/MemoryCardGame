/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				rockSalt: ['Rock Salt', 'cursive'],
				playWrite: ['Playwrite US Modern', 'cursive'],
			},
		},
	},
	plugins: [],
};

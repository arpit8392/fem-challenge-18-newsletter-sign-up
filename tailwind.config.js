/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			borderRadius: {
				'4xl': '36px',
			},
			colors: {
				tomato: 'hsl(4, 100%, 67%)',
				darkSlateGrey: 'hsl(234, 29%, 20%)',
				charcoalGrey: 'hsl(235, 18%, 26%)',
				grey: 'hsl(231, 7%, 60%)',
				grey25: 'hsl(243, 28%, 13%)',
			},
			backgroundImage: {
				btnGradient: 'linear-gradient(204.47deg, #FF6A3A 0%, #FF527B 100%)',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
}

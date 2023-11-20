/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						'code': {
							'&:after': {
								display: 'none',
							},
							'&:before': {
								display: 'none',
							},
							'> .line::before': {
								'content': 'counter(step)',
								'counter-increment': 'step',
								'margin-right': theme('spacing[4]'),
								'display': 'inline-block',
								'width': '1rem',
								'font-size': '0.75rem',
								'text-align': 'right',
								'color': theme('colors.gray[300]')
							},
							'background-color': theme('colors.gray[200]'),
							'padding': `0 ${theme('spacing[1]')}`,
							'border-radius': theme("borderRadius.sm"),
							'counter-reset': 'step',
							'counter-increment': 'step 0',
						},
					}
				}
			})
		},
		fontFamily: {
			'sans': ['Plus Jakarta Sans', 'sans-serif'],
			'mono': ['JetBrains Mono', 'monospace']
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}

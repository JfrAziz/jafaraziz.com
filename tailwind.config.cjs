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
							'background-color': theme('colors.gray[200]'),
							'padding': `0 ${theme('spacing[1]')}`,
							'border-radius': theme("borderRadius.sm")
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
		require('@tailwindcss/line-clamp'),
	],
}

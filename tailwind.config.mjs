/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#183052",
				secondary: "#56d2c6",
				"textc-primary": "#56d2c6",
				"textc-secondary": "#d1d5db",
				"textc-muted": "#9ca3af",
				"brand-surface": "#1e293b",
			},
			maxWidth: {
				"screen-2xl": "1536px",
			},
			animation: {
				"fade-in-up": "fadeInUp 0.6s ease-out forwards",
			},
			keyframes: {
				fadeInUp: {
					"0%": {
						opacity: "0",
						transform: "translateY(30px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
			},
		},
	},
	plugins: [],
};

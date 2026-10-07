import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#E31B23',
					light: '#E8454B',
					dark: '#C4141B',
					foreground: '#FFFFFF',
				},
				brand: {
					red: '#E31B23',
					dark: '#111111',
					gray: '#666666',
					'light-bg': '#F8F8F6',
					'card-bg': '#F2F2F0',
					border: '#E5E5E3',
				},
				// LEYONEX tasarım sistemi (2026 kimliği): tek kırmızı, mürekkep siyahı, kırık beyaz.
				lx: {
					red: '#E31B23',
					'red-hover': '#C4141B',
					'red-tint': '#FDEAEA',
					ink: '#0D0D0D',
					ink1: '#1A1A1A',
					ink2: '#2B2B2B',
					grey1: '#4D4D4D',
					grey2: '#767676',
					grey3: '#B3B3B3',
					'muted-dark': '#A3A3A3',
					line: '#E6E6E6',
					'line-dark': '#2E2E2E',
					paper: '#F5F5F3',
					paper2: '#ECECEA',
				},
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
				sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
				display: ['var(--font-display)', 'system-ui', 'sans-serif'],
			},
			transitionTimingFunction: {
				brand: 'cubic-bezier(0.2, 0.6, 0.2, 1)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'marquee': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-50%)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'marquee': 'marquee 30s linear infinite',
			},
		},
	},
	safelist: [
		'grid-rows-[1fr]',
		'grid-rows-[0fr]',
		'transition-[grid-template-rows]',
		'transition-[grid-template-rows,opacity]',
	],
	plugins: [require("tailwindcss-animate")],
};
export default config;

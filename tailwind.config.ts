
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'],
				'sans': ['Inter', 'sans-serif'],
				'serif': ['Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				// New custom accent and logo colors
				emerald: {
					DEFAULT: "#10b981",
					light: "#6ee7b7",
					dark: "#047857"
				},
				teal: {
					DEFAULT: "#14b8a6",
					light: "#5eead4",
					dark: "#0f766e"
				},
				gold: {
					DEFAULT: "#F9C846", // Logo-aligned gold accent
					light: "#FFE28C",
					dark: "#997200"
				},
				navy: {
					DEFAULT: "#1e293b", // Deep blue for contrast backgrounds
					light: "#334155",
					dark: "#0f172a"
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				success: "#34D399",
				info: "#38BDF8",
				warning: "#F59E42",
				error: "#EF4444"
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				// Enhanced new animation utilities
				'stagger-fade-in': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'40%': { opacity: '0.5', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'blur-in': {
					'0%': { opacity: '0', filter: 'blur(10px)' },
					'100%': { opacity: '1', filter: 'blur(0)' }
				},
				'spin-slow': {
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s cubic-bezier(0.32,0.72,0.3,1.25)',
				'fade-out': 'fade-out 0.3s cubic-bezier(0.32,0.72,0.3,1.25)',
				'scale-in': 'scale-in 0.2s ease-out',
				'slide-in-right': 'slide-in-right 0.3s cubic-bezier(0.32,0.72,0.3,1.25)',
				'stagger-fade-in': 'stagger-fade-in 0.6s cubic-bezier(0.26,0.91,0.6,1.2) both',
				'blur-in': 'blur-in 0.4s ease-out both',
				'spin-slow': 'spin-slow 6s linear infinite',
				'marquee': 'marquee 30s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;


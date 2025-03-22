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
				sans: ['Inter', 'sans-serif'],
				display: ['Plus Jakarta Sans', 'sans-serif'],
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
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				japa: {
					blue: "#d15809", // Primary brand color
					lightBlue: "#f57c3e", // Lighter shade
					darkBlue: "#a64507", // Darker shade
					slate: "#2c3e50", // Keeping this for contrast
					gray: "#f8fafc", // Light background
					darkGray: "#64748b", // For secondary text
					lightGray: "#f1f5f9", // For subtle backgrounds
					orange: "#CD5E14", // Updated to JAPA's official orange
					lightOrange: "#fec6a1", // Soft pastel orange
					paleOrange: "#fde1d3", // Very soft background
					dark: "#354558", // New dark blue brand color
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeInSlow: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideInRight: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				slideInLeft: {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
				scale: {
					'0%': { transform: 'scale(0.95)' },
					'100%': { transform: 'scale(1)' },
				},
				shimmer: {
					'0%': { backgroundPosition: '-1000px 0' },
					'100%': { backgroundPosition: '1000px 0' },
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-down': {
					'0%': { opacity: '0', transform: 'translateY(-20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-left': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'fade-right': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'zoom-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'fade-in-slow': 'fadeInSlow 1.2s ease-out forwards',
				'slide-in-right': 'slideInRight 0.5s ease-out forwards',
				'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'pulse': 'pulse 2s ease-in-out infinite',
				'scale': 'scale 0.3s ease-out forwards',
				'shimmer': 'shimmer 2s linear infinite',
				'fade-up': 'fade-up 0.4s ease-out forwards',
				'fade-down': 'fade-down 0.4s ease-out forwards',
				'fade-left': 'fade-left 0.4s ease-out forwards',
				'fade-right': 'fade-right 0.4s ease-out forwards',
				'zoom-in': 'zoom-in 0.4s ease-out forwards',
				'fill-forwards': 'forwards',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-pattern': 'linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(254, 242, 230, 0.9))',
				'feature-gradient': 'linear-gradient(135deg, #f8fafc 0%, #fde1d3 100%)',
				'blue-gradient': 'linear-gradient(135deg, #d15809 0%, #f57c3e 100%)',
				'dark-gradient': 'linear-gradient(135deg, #354558 0%, #4a6080 100%)',
			},
			boxShadow: {
				'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
				'hover': '0 10px 40px -15px rgba(0, 0, 0, 0.1)',
				'card': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.01)',
			},
			transitionTimingFunction: {
				'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
				'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

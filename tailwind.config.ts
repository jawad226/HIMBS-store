import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a", // Navy Blue / Slate 900
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#64748b", // Slate 500
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#f97316", // Construction Orange
          hover: "#ea580c",
          foreground: "#ffffff",
        },
        success: {
          DEFAULT: "#22c55e", // WhatsApp Green
          hover: "#16a34a",
          foreground: "#ffffff",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to bottom right, #0172B2 0%, #001D3D 100%)',
        'gradient-steel': 'linear-gradient(135deg, #1e293b 0%, #020617 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #B8860B 100%)',
        'glass-gradient': 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '3rem',
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.3)',
        'accent-glow': '0 0 20px rgba(59, 130, 246, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'reveal': 'reveal 0.8s cubic-bezier(0.2, 0, 0.2, 1) forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;

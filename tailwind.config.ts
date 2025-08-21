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
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        surface: "hsl(var(--surface))",
        "surface-alt": "hsl(var(--surface-alt))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      spacing: {
        section: "5rem",
        "section-sm": "3rem",
      },

      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },

        // 👉 Custom portfolio animations
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        typewriter: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        popIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        // 👉 Slowed animations
        "slide-in-left": "slideInLeft 1.5s ease-out forwards",
        "slide-in-right": "slideInRight 1.5s ease-out forwards",
        "slide-in-up": "slideInUp 1.5s ease-out forwards",
        "slow-zoom": "slowZoom 20s ease-in-out infinite alternate",
        "fade-up": "fadeUp 2s ease-out forwards",
        "typewriter": "typewriter 4s steps(40) forwards",
        "pop-in": "popIn 1.2s ease-out forwards",
        "spin-slow": "spinSlow 6s linear infinite",
      },
	  extend: {
  keyframes: {
    glow: {
      "0%, 100%": { opacity: "0.6" },
      "50%": { opacity: "1" },
    },
    bounceIn: {
      "0%": { transform: "scale(0.9)", opacity: "0" },
      "60%": { transform: "scale(1.05)", opacity: "1" },
      "100%": { transform: "scale(1)" },
    },
    pulseSlow: {
      "0%, 100%": { opacity: "0.4" },
      "50%": { opacity: "0.7" },
    },
  },
  animation: {
    glow: "glow 3s ease-in-out infinite",
    "bounce-in": "bounceIn 1s ease-out forwards",
    "pulse-slow": "pulseSlow 6s ease-in-out infinite",
  },
},
    },
  },

 
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(100%)", opacity: 0 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out forwards",
        fadeOut: "fadeOut 0.3s ease-in forwards",
        slideUp: "slideUp 0.3s ease-out forwards",
        slideDown: "slideDown 0.3s ease-in forwards",
      },
    },



  plugins: [require("tailwindcss-animate")],
} satisfies Config;

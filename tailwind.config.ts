import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2986FD",
        black: "#1A1A1A",
        subTitle: "#8D8D8D",
        white: "#FFFFFF",
        offWhite: "#BEBEBE",
        darkBlue: "#091E42",
        borderStroke: "#6C6C6C",
        orange: "#FF731C",
        skin: "#FFF4EF",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      boxShadow: {
        packages: "4px 4px 13px 4px rgba(0, 0, 0, 0.15)",
        about: "2px 2px 13px 4px rgba(0, 0, 0, 0.15)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "last-minute-card-gradient":
          "linear-gradient(113deg, rgba(255, 255, 255, 0.32) -3.49%, rgba(255, 255, 255, 0.10) 114.11%)",
        "last-minute-discount-gradient":
          "linear-gradient(114deg, #E42125 -43.53%, #6F8CC8 105.61%)",
        "explore-hero-gradient":
          "linear-gradient(113deg, rgba(255, 255, 255, 0.32) -3.49%, rgba(255, 255, 255, 0.10) 114.11%)",
        "all-packages-buttons":
          "linear-gradient(112deg, rgba(115, 115, 115, 0.32) -3.56%, rgba(59, 59, 59, 0.10) 98.92%)",
        "all-packages-images-gradient":
          "linear-gradient(98deg, rgba(16, 23, 32, 0.70) 13.2%, rgba(0, 0, 0, 0.20) 101.92%)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-aileron)", "sans-serif"],
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;

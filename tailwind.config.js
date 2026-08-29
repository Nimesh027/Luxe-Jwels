/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "var(--color-ink)",
          soft: "var(--color-ink-soft)",
        },
        gold: {
          DEFAULT: "var(--color-gold)",
          dark: "var(--color-gold-dark)",
        },
        cream: {
          DEFAULT: "var(--color-cream)",
          dark: "var(--color-cream-dark)",
        },
        surface: "var(--color-surface)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        wine: {
          DEFAULT: "var(--color-wine)",
          dark: "var(--color-wine-dark)",
          soft: "var(--color-wine-soft)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        'h1': 'clamp(36px, calc(31.38px + 1.154vw), 48px)',
        'h2': 'clamp(32px, calc(28.92px + 0.769vw), 40px)',
        'h3': 'clamp(26px, calc(23.69px + 0.577vw), 32px)',
        'h4': 'clamp(22px, calc(20.46px + 0.385vw), 26px)',
        'h5': 'clamp(20px, calc(19.23px + 0.192vw), 22px)',
        'h6': '18px',
        'body': 'clamp(15px, calc(14.62px + 0.096vw), 16px)',
        'small': '14px',
        'caption': '12px',
        'btn': 'clamp(15px, calc(14.62px + 0.096vw), 16px)',
        'label': 'clamp(13px, calc(12.62px + 0.096vw), 14px)',
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [],
};

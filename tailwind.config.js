/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "350px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        white: "#FFFFFF",
        primary: "#FF6D31",
        secondary: "#24345F",
        gray: "#374151",
        "primary-light": "#ed8e66",
        extra: "#44C1F8",
        body: "#FFFEFC",
        light: "#E8D5C4",
      },
      boxShadow: {
        sm: "0px 2px 4px 0px rgba(11,.10,.55,.0.15)",
        lg: "0px 8px 20px 0px rgba(18,.16,.99,.0.06)",
      },
      fontSize: {
        xs: ["14px", { lineHeight: "20px", letterSpacing: "-0.03em" }],
        sm: ["16px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
        lg: ["18px", { lineHeight: "28px", letterSpacing: "-0.03em" }],
        xl: ["24px", { lineHeight: "36px", letterSpacing: "-0.03em" }],
        "2xl": ["36px", { lineHeight: "48px", letterSpacing: "-0.032em" }],
        "3xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.032em" }],
        "4xl": ["56px", { lineHeight: "64px", letterSpacing: "-0.032em" }],
        "5xl": ["80px", { lineHeight: "80px", letterSpacing: "-0.032em" }],
      },
      fontWeight: {
        bold: 700,
        extraBold: 800,
        black: 900,
        normal: 400,
        light: 300,
        extraLight: 200,
      },
      fontFamily: {
        brand: ["var(--font-nunito)", ...fontFamily.sans],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      animation: {
        typing: "typing 2s steps(50, end)",
      },
      animation: {
        caret: "caret 1s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        typing: {
          from: { width: 0 },
          to: { width: "100%" },
        },
        caret: {
          "from, to": {
            opacity: 1,
          },
          "50%": {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

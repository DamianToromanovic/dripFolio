export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bounce-slow": "bounce 2.5s infinite",
      },
      colors: {
        "my-gold": "#D7AA58",
        "my-background": "#121212",
        "my-card": "#1E1E1F",
        "my-foreground": "#FAFAFA",
        "my-muted": "#2B2B2C",
        "my-muted-foreground": "#989898",
        "bright-gray": "#383839",
        "minor-cards": "#222123",
      },
      boxShadow: {
        innerShadow: "inset 3px 3px 9px -10px",
        hoverShadow: "4px 4px 10px -10px",
      },
      screens: {
        "3xl": "1800px",
      },
    },
  },
  plugins: [],
};

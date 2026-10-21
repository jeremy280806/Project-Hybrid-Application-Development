/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // ─── PRIMARY: Indigo ───────────────────────────────────────────
        primary: "#3D3DE8",
        "primary-light": "#6060F0",
        "primary-container": "#E0E0FF",
        "on-primary": "#FFFFFF",
        "on-primary-container": "#0000AA",
        "primary-fixed": "#EBEBFF",

        // ─── SECONDARY: Teal ───────────────────────────────────────────
        secondary: "#009688",
        "secondary-container": "#E0F2F1",
        "on-secondary": "#FFFFFF",
        "on-secondary-container": "#00352F",

        // ─── TERTIARY: Hijau ───────────────────────────────────────────
        tertiary: "#00897B",
        "tertiary-container": "#B2DFDB",
        "tertiary-fixed": "#A7F3D0",
        "tertiary-fixed-dim": "#6EE7B7",
        "on-tertiary": "#FFFFFF",

        // ─── ERROR ─────────────────────────────────────────────────────
        error: "#BA1A1A",
        "error-container": "#FFDAD6",
        "on-error": "#FFFFFF",

        // ─── SURFACE (Background & Cards) ──────────────────────────────
        surface: "#EEEEFF",                   // App background: lavender muda
        "surface-container": "#E4E4F8",       // Container umum
        "surface-container-low": "#EEEEFF",   // Input field background
        "surface-container-high": "#D8D8F0",  // Badge / chips
        "surface-container-highest": "#CACAE8", // Divider / border kuat
        "surface-container-lowest": "#FFFFFF",  // Card / modal

        // ─── TEXT ──────────────────────────────────────────────────────
        "on-surface": "#1A1A2E",
        "on-surface-variant": "#5A5A7A",

        // ─── OUTLINE ───────────────────────────────────────────────────
        outline: "#9090B0",
        "outline-variant": "#C4C4DC",

        // ─── WARNA KHUSUS ──────────────────────────────────────────────
        "apple-dark": "#1C1C2E",
      },
    },
  },
  plugins: [],
};
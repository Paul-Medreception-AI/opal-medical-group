/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: { primary: "#4ba3db", dark: "#316a8e", light: "#e4f1fa", ink: "#1a2030", cream: "#fafcfe", muted: "#64748b", border: "#dbeefb" },
      fontFamily: { cormorant: ["var(--font-cormorant)", "Georgia", "serif"], sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
module.exports = config;
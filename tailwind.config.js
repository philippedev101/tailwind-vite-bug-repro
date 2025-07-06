/** @type {import('tailwindcss').Config} */
export default {
  // Add a safelist to test if the config is loaded AT ALL by the vite plugin path.
  // If this class does NOT appear, it's definitive proof the config is not being found.
  safelist: [
    'rotate-12',
  ],
  content: [
    './index.html',
    './src/**/*.{ts,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

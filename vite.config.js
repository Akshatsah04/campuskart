import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from 'tailwindcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
          tailwindcss({
              content: [
                "./index.html",
                "./src/**/*.{js,ts,jsx,tsx}",
              ],
              theme: {
                  extend: {
                      colors: {
                        'dark-bg': '#0D0D0D',
                        'dark-surface': '#121212',
                        'dark-surface2': '#1A1A1A',
                        'dark-border': '#262626',
                        'accent-neon': '#00FF9D',
                        'accent-hover': '#00E68A',
                      }
                  }
              }
          })
      ],
    },
  },
})

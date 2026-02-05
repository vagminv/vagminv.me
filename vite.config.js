import eslint from 'vite-plugin-eslint2'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import tailwindcss from '@tailwindcss/postcss'

export default defineConfig({
  plugins: [
    react(),
    eslint(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
})

import eslint from 'vite-plugin-eslint2'
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'
import tailwindcss from '@tailwindcss/postcss'

export default defineConfig({
  plugins: [
    eslint(),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
})

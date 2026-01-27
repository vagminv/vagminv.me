import eslint from 'vite-plugin-eslint2';
import { defineConfig } from "vite";
import autoprefixer from 'autoprefixer';
import tailwindcss from '@tailwindcss/postcss';
import VitePluginFavicon from 'vite-plugin-favicon';

export default defineConfig({
    plugins: [
        eslint(),
        VitePluginFavicon('./src/img/friday_logo_v1.png'),
    ],
    css: {
        postcss: {
            plugins: [tailwindcss(), autoprefixer()],
        }
    }
})
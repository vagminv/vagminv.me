import eslint from 'vite-plugin-eslint2';
import { defineConfig } from "vite";
import autoprefixer from 'autoprefixer';

export default defineConfig({
    plugins: [
        eslint(),
    ],
    css: {
        postcss: {
            plugins: [autoprefixer()],
        }
    }
})
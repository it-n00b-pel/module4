import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: 'https://it-n00b-pel.github.io/',
    resolve: {
        alias: {
            src: '/src',
        },
    },
    optimizeDeps: {
        // @ts-ignore
        esmDependencies: ['classnames'],
    },
});

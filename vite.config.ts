import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/module4/',
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

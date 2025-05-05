import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
    plugins: [tsconfigPaths(), react()],
    resolve: {
        alias: {
            src: '/src',
        },
    },
    server: {
        port: 5000,
    },
});

import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@mals/property-web': resolve(__dirname, './src'),
            '@mals/common-web': resolve(__dirname, '../common-web/src'),
            '@mals/types': resolve(__dirname, '../types/src'),
            '@mals/utils': resolve(__dirname, '../utils/src')
        }
    },
    css: {
        modules: {
            generateScopedName: '[name]_[hash:base64:5]',
            hashPrefix: 'prefix',
            scopeBehaviour: 'local',
            localsConvention: 'camelCaseOnly'
        }
    },
    plugins: [react()],
    build: {
        target: 'es2015',
        // minify: 'terser',
        cssCodeSplit: true,
        rollupOptions: {
            plugins: [],
            output: {
                chunkFileNames: 'static/js/[name]-[hash].js',
                entryFileNames: 'static/js/[name]-[hash].js',
                assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
            }
        }
    },
    server: {
        host: '127.0.0.1',
        port: 3000,
        open: true,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:7666',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, '')
            }
        },
        hmr: {
            overlay: true
        }
    }
});

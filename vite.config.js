import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@/components': resolve(__dirname, './src/components'),
            '@/lumiere': resolve(__dirname, './src/lumiere'),
            '@/styles': resolve(__dirname, './src/styles'),
            '@/utils': resolve(__dirname, './src/utils'),
            '@/types': resolve(__dirname, './src/types'),
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/components/lumiere/index.ts'),
            name: 'LumiereDesignSystem',
            fileName: (format) => `lumiere.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});

import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MochimoWOTS',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['crypto-js'],
      output: {
        globals: {
          'crypto-js': 'CryptoJS'
        }
      }
    }
  },
  plugins: [dts()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
}); 
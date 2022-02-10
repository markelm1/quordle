import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'es2015',
    assetsInlineLimit: 8192,
  },
  server: {
    host: true
  }
});

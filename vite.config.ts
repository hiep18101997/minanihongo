import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'vosk-browser': path.resolve(__dirname, 'node_modules/vosk-browser/dist/vosk.js'),
    },
  },
  optimizeDeps: {
    include: ['vosk-browser'],
  },
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})

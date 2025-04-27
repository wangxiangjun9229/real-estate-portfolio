import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/real-estate-portfolio/',
  server: {
    port: 3002,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  preview: {
    host: true,
    port: 8080,
    strictPort: false,
    cors: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@headlessui/react', '@heroicons/react', 'framer-motion']
  }
}) 
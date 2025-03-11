import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/real-estate-portfolio/',
  server: {
    host: '0.0.0.0',
    port: 8080,
    hmr: {
      overlay: false
    }
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['@headlessui/react', '@heroicons/react'],
          'motion-vendor': ['framer-motion']
        }
      }
    }
  },
  preview: {
    host: true,
    port: 8080,
    strictPort: false,
    cors: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@headlessui/react', '@heroicons/react', 'framer-motion']
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment'
  }
}) 
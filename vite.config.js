import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  define: {
    'process.env': 'import.meta.env',
    global: 'globalThis'
  },
  esbuild: {
    target: 'es2020'
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Ensure polyfills are in the main chunk and load first
          if (id.includes('polyfills.js') || id.includes('main.jsx')) {
            return 'index'
          }
          // Group other dependencies
          if (id.includes('monaco-editor')) {
            return 'monaco-editor'
          }
          if (id.includes('firebase')) {
            return 'firebase'
          }
          if (id.includes('react') && !id.includes('react-router')) {
            return 'react-vendor'
          }
          if (id.includes('framer-motion') || id.includes('lucide-react')) {
            return 'ui-vendor'
          }
          if (id.includes('@monaco-editor/react')) {
            return 'editor-vendor'
          }
          if (id.includes('react-router')) {
            return 'router-vendor'
          }
          if (id.includes('axios') || id.includes('date-fns') || id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'utils-vendor'
          }
          if (id.includes('scheduler')) {
            return 'scheduler'
          }
          // Default to index for everything else to ensure polyfills load first
          return 'index'
        }
      }
    },
    chunkSizeWarningLimit: 500,
    target: 'esnext',
    cssCodeSplit: true
  },
  server: {
    port: 3000,
    host: true
  },
  optimizeDeps: {
    include: ['monaco-editor', 'firebase/app', 'firebase/firestore', 'firebase/auth', 'scheduler']
  },
  envPrefix: 'REACT_APP_',
  envDir: '.'
})
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
    target: 'es2020',
    keepNames: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          // Keep polyfills and main app in index chunk
          'index': ['src/polyfills.js', 'src/main.jsx'],
          // Combine React and Router in the same chunk to ensure proper loading order
          'react-router-vendor': ['react', 'react-dom', 'scheduler', 'react-router-dom'],
          // Other dependencies
          'monaco-editor': ['monaco-editor'],
          'firebase': ['firebase/app', 'firebase/firestore', 'firebase/auth'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
          'editor-vendor': ['@monaco-editor/react'],
          'utils-vendor': ['axios', 'date-fns', 'clsx', 'tailwind-merge']
        }
      },
      external: [],
      onwarn(warning, warn) {
        // Suppress circular dependency warnings for now
        if (warning.code === 'CIRCULAR_DEPENDENCY') {
          return
        }
        warn(warning)
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
    include: [
      'react', 
      'react-dom', 
      'scheduler',
      'react-router-dom',
      'monaco-editor', 
      'firebase/app', 
      'firebase/firestore', 
      'firebase/auth'
    ],
    force: true
  },
  envPrefix: 'REACT_APP_',
  envDir: '.'
})
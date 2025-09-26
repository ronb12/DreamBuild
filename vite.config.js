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
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'monaco-editor': ['monaco-editor'],
          'firebase': ['firebase/app', 'firebase/firestore', 'firebase/auth'],
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
          'editor-vendor': ['@monaco-editor/react'],
          'router-vendor': ['react-router-dom'],
          'utils-vendor': ['axios', 'date-fns', 'clsx', 'tailwind-merge']
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
    include: ['monaco-editor', 'firebase/app', 'firebase/firestore', 'firebase/auth']
  },
  envPrefix: 'REACT_APP_',
  envDir: '.',
  define: {
    'process.env': 'import.meta.env'
  }
})
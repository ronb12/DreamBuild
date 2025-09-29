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
          // Separate React and core dependencies
          'react-core': ['react', 'react-dom', 'scheduler'],
          // Main app entry point
          'index': ['src/main.jsx'],
          // Other dependencies
          'monaco-editor': ['monaco-editor'],
          'editor-vendor': ['@monaco-editor/react'],
          'ui-vendor': ['framer-motion', 'lucide-react'],
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
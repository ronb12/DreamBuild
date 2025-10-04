import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom')) {
            return 'react-vendor'
          }
          
          // UI and animation libraries
          if (id.includes('framer-motion') || id.includes('lucide-react')) {
            return 'ui-vendor'
          }
          
          // Editor libraries
          if (id.includes('monaco-editor') || id.includes('@monaco-editor')) {
            return 'editor-vendor'
          }
          
          // Router
          if (id.includes('react-router-dom')) {
            return 'router-vendor'
          }
          
          // Firebase
          if (id.includes('firebase')) {
            return 'firebase-vendor'
          }
          
          // AI/ML libraries
          if (id.includes('@mlc-ai') || id.includes('web-llm')) {
            return 'ai-vendor'
          }
          
          // Utility libraries
          if (id.includes('date-fns') || id.includes('clsx') || id.includes('tailwind-merge')) {
            return 'utils-vendor'
          }
          
          // HTTP libraries
          if (id.includes('axios')) {
            return 'http-vendor'
          }
          
          // App components (split by feature)
          if (id.includes('/src/components/')) {
            if (id.includes('AIBuilder') || id.includes('AIPrompt')) {
              return 'ai-components'
            }
            if (id.includes('Editor') || id.includes('Preview')) {
              return 'editor-components'
            }
            if (id.includes('Navbar') || id.includes('Footer')) {
              return 'layout-components'
            }
            return 'shared-components'
          }
          
          // App pages (split by feature)
          if (id.includes('/src/pages/')) {
            if (id.includes('AIBuilder') || id.includes('Dashboard')) {
              return 'core-pages'
            }
            if (id.includes('Templates') || id.includes('Gallery')) {
              return 'content-pages'
            }
            if (id.includes('Login') || id.includes('Signup')) {
              return 'auth-pages'
            }
            return 'other-pages'
          }
          
          // Services (split by functionality)
          if (id.includes('/src/services/')) {
            if (id.includes('AI') || id.includes('LLM')) {
              return 'ai-services'
            }
            if (id.includes('firebase') || id.includes('cache')) {
              return 'data-services'
            }
            if (id.includes('deployment') || id.includes('collaboration')) {
              return 'platform-services'
            }
            return 'utility-services'
          }
          
          // Node modules
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Increased limit for better chunking
    target: 'esnext',
    cssCodeSplit: true
  },
  optimizeDeps: {
    include: [
      'react', 
      'react-dom',
      'firebase/app',
      'firebase/auth',
      'firebase/firestore',
      'firebase/storage'
    ],
    exclude: ['@mlc-ai/web-llm'] // Exclude large AI library from pre-bundling
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      strict: false // Allow serving files from outside root
    }
  },
  define: {
    // Reduce bundle size by excluding development code
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
})
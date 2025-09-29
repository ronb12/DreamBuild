// Import React and other dependencies
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// CRITICAL: Ensure polyfills are loaded before any modules
if (typeof window !== 'undefined') {
  // Wait for polyfills to be available
  const waitForPolyfills = () => {
    return new Promise((resolve) => {
      const checkPolyfills = () => {
        if (window.Request && window.Headers && window.Response && window.fetch) {
          console.log('✅ Polyfills ready, proceeding with React initialization...')
          resolve(true)
        } else {
          console.log('⏳ Waiting for polyfills...', {
            Request: !!window.Request,
            Headers: !!window.Headers,
            Response: !!window.Response,
            fetch: !!window.fetch
          })
          setTimeout(checkPolyfills, 10)
        }
      }
      checkPolyfills()
    })
  }

  // Wait for polyfills before proceeding
  waitForPolyfills().then(() => {
    initializeReact()
  })
} else {
  // If not in browser, initialize immediately
  initializeReact()
}

function initializeReact() {
  // CRITICAL: Make React available globally IMMEDIATELY
  // This must happen before any other modules try to access React
  window.React = React
  window.ReactDOM = { createRoot }

  // Ensure React is available on all global objects
  if (typeof globalThis !== 'undefined') {
    globalThis.React = React
  }
  if (typeof global !== 'undefined') {
    global.React = React
  }
  if (typeof self !== 'undefined') {
    self.React = React
  }

  // Also make React available as a module export for other modules
  if (typeof module !== 'undefined' && module.exports) {
    module.exports.React = React
  }

  console.log('✅ React made available globally:', !!window.React)
  console.log('✅ React hooks available:', !!React.useState, !!React.useEffect)

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderApp)
  } else {
    renderApp()
  }
}

function renderApp() {
  console.log('🚀 Starting React app rendering...')
  
  // Ensure the root element exists before rendering
  const rootElement = document.getElementById('root')
  if (!rootElement) {
    console.error('❌ Root element not found!')
    throw new Error('Root element not found')
  }

  // Render the app
  console.log('📦 React version:', React.version)
  console.log('🎯 Root element:', rootElement)

  try {
    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
    console.log('✅ React app rendered successfully!')
  } catch (error) {
    console.error('❌ React app rendering failed:', error)
    // Show error in the UI
    rootElement.innerHTML = `
      <div style="padding: 20px; color: red; font-family: monospace;">
        <h2>React App Error</h2>
        <p>Error: ${error.message}</p>
        <pre>${error.stack}</pre>
      </div>
    `
  }
}

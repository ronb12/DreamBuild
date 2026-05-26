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
    // Add a small delay to ensure all modules are ready
    setTimeout(() => {
      initializeReact()
    }, 200)
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
    console.log('✅ Full React app rendered successfully!')
  } catch (error) {
    console.error('❌ Full app loading failed:', error)
    loadSimpleApp(rootElement)
  }
}

function loadSimpleApp(rootElement) {
  console.log('🔄 Loading simple fallback app...')
  
  // Simple fallback app component
  const SimpleApp = () => {
    const [status, setStatus] = React.useState('Loading...')
    
    React.useEffect(() => {
      // Check what's available
      const checks = {
        'React': !!window.React,
        'ReactDOM': !!window.ReactDOM,
        'Firebase': !!window.firebase,
        'Request': !!window.Request,
        'Headers': !!window.Headers,
        'Response': !!window.Response,
        'fetch': !!window.fetch
      }
      
      setStatus(`DreamBuild - Full App Fallback\n\nStatus:\n${Object.entries(checks).map(([key, value]) => `${key}: ${value ? '✅' : '❌'}`).join('\n')}\n\nIf you can see this, the core app is working!\nThe full app had a loading issue, but this fallback is functional.`)
    }, [])
    
    return React.createElement('div', {
      style: {
        padding: '20px',
        fontFamily: 'monospace',
        backgroundColor: '#0f172a',
        color: '#e2e8f0',
        minHeight: '100vh',
        whiteSpace: 'pre-line',
        lineHeight: '1.6'
      }
    }, status)
  }

  createRoot(rootElement).render(
    <StrictMode>
      <SimpleApp />
    </StrictMode>,
  )
  console.log('✅ Simple fallback app rendered successfully!')
}

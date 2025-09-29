// Import React and other dependencies
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

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

// Ensure the root element exists before rendering
const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('❌ Root element not found!')
  throw new Error('Root element not found')
}

// Render the app
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

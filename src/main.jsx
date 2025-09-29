// Import React and other dependencies
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Make React available globally and ensure it's available in module system
window.React = React
window.ReactDOM = { createRoot }

// Ensure React is available for any modules that might need it
if (typeof globalThis !== 'undefined') {
  globalThis.React = React
}
if (typeof global !== 'undefined') {
  global.React = React
}
if (typeof self !== 'undefined') {
  self.React = React
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

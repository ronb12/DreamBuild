// CRITICAL: Import polyfills FIRST before any other code
import './polyfills.js'

// Now import React and other dependencies AFTER polyfills are loaded
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Make React available globally
window.React = React

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

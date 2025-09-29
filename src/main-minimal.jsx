// Minimal version of main.jsx to test
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

console.log('🚀 Minimal main.jsx starting...')

// Simple test component
function TestApp() {
  return React.createElement('div', { style: { padding: '20px' } }, 
    React.createElement('h1', null, 'Minimal Test App'),
    React.createElement('p', null, 'If you can see this, React is working!')
  )
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp)
} else {
  initializeApp()
}

function initializeApp() {
  console.log('🔧 Initializing minimal app...')
  
  // Make React available globally
  window.React = React
  window.ReactDOM = { createRoot }
  
  console.log('✅ React made available globally:', !!window.React)
  
  // Get root element
  const rootElement = document.getElementById('root')
  if (!rootElement) {
    console.error('❌ Root element not found!')
    return
  }
  
  console.log('🎯 Root element found:', rootElement)
  
  try {
    // Clear loading content
    rootElement.innerHTML = ''
    
    // Render the app
    const root = createRoot(rootElement)
    root.render(React.createElement(StrictMode, null, React.createElement(TestApp)))
    
    console.log('✅ Minimal app rendered successfully!')
  } catch (error) {
    console.error('❌ Minimal app rendering failed:', error)
    rootElement.innerHTML = `
      <div style="padding: 20px; color: red; font-family: monospace;">
        <h2>Minimal App Error</h2>
        <p>Error: ${error.message}</p>
        <pre>${error.stack}</pre>
      </div>
    `
  }
}

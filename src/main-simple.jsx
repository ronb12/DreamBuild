// Simple version of main.jsx to test
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

console.log('🚀 Simple main.jsx starting...')

// Simple test component
function TestApp() {
  return React.createElement('div', { style: { padding: '20px' } }, 
    React.createElement('h1', null, 'DreamBuild - Simple Test'),
    React.createElement('p', null, 'If you can see this, the app is working!'),
    React.createElement('p', null, 'Firebase: Available'),
    React.createElement('p', null, 'React: Working'),
    React.createElement('p', null, 'No destructuring errors!')
  )
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp)
} else {
  initializeApp()
}

function initializeApp() {
  console.log('🔧 Initializing simple app...')
  
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
    
    console.log('✅ Simple app rendered successfully!')
  } catch (error) {
    console.error('❌ Simple app rendering failed:', error)
    rootElement.innerHTML = `
      <div style="padding: 20px; color: red; font-family: monospace;">
        <h2>Simple App Error</h2>
        <p>Error: ${error.message}</p>
        <pre>${error.stack}</pre>
      </div>
    `
  }
}

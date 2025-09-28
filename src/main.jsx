import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Polyfill for Request API if not available
if (typeof window !== 'undefined' && !window.Request) {
  // Simple polyfill for Request API
  window.Request = class Request {
    constructor(input, init = {}) {
      this.url = input
      this.method = init.method || 'GET'
      this.headers = new Headers(init.headers)
      this.body = init.body
    }
  }
}

// Make React available globally
window.React = React

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

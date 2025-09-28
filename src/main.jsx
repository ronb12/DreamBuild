import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Ensure polyfills are loaded before any other code
console.log('🔧 Loading polyfills...')

// Comprehensive polyfills for missing APIs
if (typeof window !== 'undefined') {
  // Ensure we have a safe reference to Headers
  let HeadersClass = window.Headers
  
  // Polyfill for Headers API (must be first to avoid circular dependency)
  if (!HeadersClass) {
    HeadersClass = class Headers {
      constructor(init = {}) {
        this._headers = {}
        if (init) {
          Object.entries(init).forEach(([key, value]) => {
            this._headers[key.toLowerCase()] = value
          })
        }
      }
      
      get(name) {
        return this._headers[name.toLowerCase()]
      }
      
      set(name, value) {
        this._headers[name.toLowerCase()] = value
      }
      
      has(name) {
        return name.toLowerCase() in this._headers
      }
    }
    window.Headers = HeadersClass
  }
  
  // Polyfill for Request API
  if (!window.Request) {
    window.Request = class Request {
      constructor(input, init = {}) {
        this.url = input
        this.method = init.method || 'GET'
        this.headers = new HeadersClass(init.headers || {})
        this.body = init.body
      }
    }
  }
  
  // Polyfill for Response API
  if (!window.Response) {
    window.Response = class Response {
      constructor(body, init = {}) {
        this.body = body
        this.status = init.status || 200
        this.statusText = init.statusText || 'OK'
        this.headers = new HeadersClass(init.headers || {})
      }
      
      async json() {
        return JSON.parse(this.body)
      }
      
      async text() {
        return this.body
      }
    }
  }
  
  // Ensure fetch is available
  if (!window.fetch) {
    window.fetch = async (url, options = {}) => {
      const xhr = new XMLHttpRequest()
      return new Promise((resolve, reject) => {
        xhr.open(options.method || 'GET', url)
        
        if (options.headers) {
          Object.entries(options.headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value)
          })
        }
        
        xhr.onload = () => {
          resolve(new window.Response(xhr.responseText, {
            status: xhr.status,
            statusText: xhr.statusText,
            headers: xhr.getAllResponseHeaders()
          }))
        }
        
        xhr.onerror = () => reject(new Error('Network error'))
        xhr.send(options.body)
      })
    }
  }
  
  // Additional safety check for global APIs
  if (!window.Request) {
    console.warn('Request polyfill failed to load')
  }
  if (!window.Headers) {
    console.warn('Headers polyfill failed to load')
  }
  if (!window.Response) {
    console.warn('Response polyfill failed to load')
  }
  if (!window.fetch) {
    console.warn('Fetch polyfill failed to load')
  }
  
  // Success message
  console.log('✅ Polyfills loaded:', {
    Request: !!window.Request,
    Headers: !!window.Headers,
    Response: !!window.Response,
    fetch: !!window.fetch
  })
}

// Make React available globally
window.React = React

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

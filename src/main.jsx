import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Comprehensive polyfills for missing APIs
if (typeof window !== 'undefined') {
  // Polyfill for Request API
  if (!window.Request) {
    window.Request = class Request {
      constructor(input, init = {}) {
        this.url = input
        this.method = init.method || 'GET'
        this.headers = new Headers(init.headers)
        this.body = init.body
      }
    }
  }
  
  // Polyfill for Headers API
  if (!window.Headers) {
    window.Headers = class Headers {
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
  }
  
  // Polyfill for Response API
  if (!window.Response) {
    window.Response = class Response {
      constructor(body, init = {}) {
        this.body = body
        this.status = init.status || 200
        this.statusText = init.statusText || 'OK'
        this.headers = new Headers(init.headers)
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
          resolve(new Response(xhr.responseText, {
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
}

// Make React available globally
window.React = React

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

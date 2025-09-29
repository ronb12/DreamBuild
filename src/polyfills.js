// CRITICAL: This file must be loaded FIRST before any other code
// It provides essential polyfills for Request, Headers, Response, fetch APIs, and React scheduler

console.log('🔧 Loading polyfills immediately...')

// Comprehensive polyfills for missing APIs - MUST be loaded first
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
  
  // React Scheduler setup for React 18.2.0 compatibility
  // This ensures the scheduler is available globally before React tries to use it
  if (!window.scheduler) {
    // Create a basic scheduler implementation
    window.scheduler = {
      unstable_scheduleCallback: function(priority, callback, options) {
        // Use setTimeout as fallback for older browsers
        return setTimeout(callback, 0)
      },
      unstable_cancelCallback: function(callbackId) {
        clearTimeout(callbackId)
      },
      unstable_now: function() {
        return Date.now()
      },
      unstable_getCurrentPriorityLevel: function() {
        return 1 // Normal priority
      },
      unstable_shouldYield: function() {
        return false
      },
      unstable_requestPaint: function() {
        // No-op for older browsers
      }
    }
  }

  // Success message
  console.log('✅ Polyfills loaded:', {
    Request: !!window.Request,
    Headers: !!window.Headers,
    Response: !!window.Response,
    fetch: !!window.fetch,
    scheduler: !!window.scheduler
  })
}

// Export for potential use in other modules
export const Request = window.Request
export const Headers = window.Headers
export const Response = window.Response
export const fetch = window.fetch

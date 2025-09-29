import React, { useState, useEffect } from 'react'

// Simple hash-based router
export function SimpleRouter({ children }) {
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.hash.slice(1) || '/'
  })

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/')
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Find the matching route
  const findRoute = (path, routes) => {
    for (const route of routes) {
      if (route.path === path) {
        return route
      }
      // Handle dynamic routes like /apps/:appId
      if (route.path.includes(':')) {
        const routeParts = route.path.split('/')
        const pathParts = path.split('/')
        
        if (routeParts.length === pathParts.length) {
          let matches = true
          for (let i = 0; i < routeParts.length; i++) {
            if (routeParts[i].startsWith(':')) {
              continue // Dynamic segment
            }
            if (routeParts[i] !== pathParts[i]) {
              matches = false
              break
            }
          }
          if (matches) {
            return { ...route, params: extractParams(route.path, path) }
          }
        }
      }
    }
    return null
  }

  // Extract parameters from dynamic routes
  const extractParams = (routePath, actualPath) => {
    const routeParts = routePath.split('/')
    const pathParts = actualPath.split('/')
    const params = {}
    
    for (let i = 0; i < routeParts.length; i++) {
      if (routeParts[i].startsWith(':')) {
        const paramName = routeParts[i].slice(1)
        params[paramName] = pathParts[i]
      }
    }
    
    return params
  }

  // Create context for current route
  const routeContext = {
    pathname: currentPath,
    params: {},
    navigate: (path) => {
      window.location.hash = path
    }
  }

  // Return children without injecting route context to avoid React warnings
  return <>{children}</>
}

// Simple Route component
export function Route({ path, element, children }) {
  return { path, element, children }
}

// Simple Routes component
export function Routes({ children }) {
  const [currentPath, setCurrentPath] = useState(() => {
    // Get the current path from URL
    const hash = window.location.hash
    const pathname = window.location.pathname
    
    // Only use pathname if it's a specific route like /ai-builder, /templates, etc.
    // and there's no meaningful hash
    if (pathname && pathname !== '/' && (!hash || hash === '#' || hash === '#/')) {
      return pathname
    }
    
    // Otherwise, use the hash
    let path = hash.slice(1) || '/'
    if (path.includes('#')) {
      // If there's a double hash, take the first part
      path = path.split('#')[0]
    }
    return path
  })

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      const pathname = window.location.pathname
      
      // Only use pathname if it's a specific route like /ai-builder, /templates, etc.
      // and there's no meaningful hash
      if (pathname && pathname !== '/' && (!hash || hash === '#' || hash === '#/')) {
        setCurrentPath(pathname)
        return
      }
      
      // Otherwise, use the hash
      let path = hash.slice(1) || '/'
      if (path.includes('#')) {
        // If there's a double hash, take the first part
        path = path.split('#')[0]
      }
      setCurrentPath(path)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Collect all routes from children
  const routes = React.Children.toArray(children).map(child => {
    if (React.isValidElement(child) && child.type === Route) {
      return {
        path: child.props.path,
        element: child.props.element,
        children: child.props.children
      }
    }
    return null
  }).filter(Boolean)

  // Find matching route
  const findRoute = (path, routes) => {
    for (const route of routes) {
      if (route.path === path) {
        return route
      }
      // Handle dynamic routes like /apps/:appId
      if (route.path.includes(':')) {
        const routeParts = route.path.split('/')
        const pathParts = path.split('/')
        
        if (routeParts.length === pathParts.length) {
          let matches = true
          for (let i = 0; i < routeParts.length; i++) {
            if (routeParts[i].startsWith(':')) {
              continue // Dynamic segment
            }
            if (routeParts[i] !== pathParts[i]) {
              matches = false
              break
            }
          }
          if (matches) {
            return route
          }
        }
      }
    }
    return null
  }

  const matchedRoute = findRoute(currentPath, routes)
  
  if (matchedRoute) {
    return matchedRoute.element
  }

  // Default to 404 or home
  return routes.find(route => route.path === '/')?.element || <div>Page not found</div>
}

// Navigate component for redirects
export function Navigate({ to, replace }) {
  useEffect(() => {
    if (replace) {
      window.location.replace(`#${to}`)
    } else {
      window.location.hash = to
    }
  }, [to, replace])

  return null
}

// useLocation hook replacement
export function useLocation() {
  const [location, setLocation] = useState(() => {
    // Get the current path from URL
    const hash = window.location.hash
    const pathname = window.location.pathname
    
    // Only use pathname if it's a specific route like /ai-builder, /templates, etc.
    // and there's no meaningful hash
    let currentPathname = '/'
    if (pathname && pathname !== '/' && (!hash || hash === '#' || hash === '#/')) {
      currentPathname = pathname
    } else {
      // Otherwise, use the hash
      currentPathname = hash.slice(1) || '/'
      if (currentPathname.includes('#')) {
        // If there's a double hash, take the first part
        currentPathname = currentPathname.split('#')[0]
      }
    }
    
    return {
      pathname: currentPathname,
      search: '',
      hash: window.location.hash,
      state: null
    }
  })

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      const pathname = window.location.pathname
      
      // Only use pathname if it's a specific route like /ai-builder, /templates, etc.
      // and there's no meaningful hash
      let currentPathname = '/'
      if (pathname && pathname !== '/' && (!hash || hash === '#' || hash === '#/')) {
        currentPathname = pathname
      } else {
        // Otherwise, use the hash
        currentPathname = hash.slice(1) || '/'
        if (currentPathname.includes('#')) {
          // If there's a double hash, take the first part
          currentPathname = currentPathname.split('#')[0]
        }
      }
      
      setLocation({
        pathname: currentPathname,
        search: '',
        hash: window.location.hash,
        state: null
      })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return location
}

// BrowserRouter replacement
export function BrowserRouter({ children }) {
  return <SimpleRouter>{children}</SimpleRouter>
}

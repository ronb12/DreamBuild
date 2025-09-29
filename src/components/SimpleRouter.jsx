import React, { useState, useEffect } from 'react'

// Simple hash-based router
export function SimpleRouter({ children }) {
  const [currentPath, setCurrentPath] = useState(() => {
    const hash = window.location.hash
    const pathname = window.location.pathname
    
    console.log('🔍 Initial routing:', { pathname, hash, fullUrl: window.location.href })
    
    // URL correction: Fix malformed URLs like /ai-builder#/ to /#/ai-builder
    if (pathname === '/ai-builder' && hash === '#/') {
      console.log('🔧 Correcting malformed URL: /ai-builder#/ -> /#/ai-builder')
      window.history.replaceState(null, '', '/#/ai-builder')
      return '/ai-builder'
    }
    if (pathname === '/templates' && hash === '#/') {
      console.log('🔧 Correcting malformed URL: /templates#/ -> /#/templates')
      window.history.replaceState(null, '', '/#/templates')
      return '/templates'
    }
    if (pathname === '/dashboard' && hash === '#/') {
      console.log('🔧 Correcting malformed URL: /dashboard#/ -> /#/dashboard')
      window.history.replaceState(null, '', '/#/dashboard')
      return '/dashboard'
    }
    if (pathname === '/projects' && hash === '#/') {
      console.log('🔧 Correcting malformed URL: /projects#/ -> /#/projects')
      window.history.replaceState(null, '', '/#/projects')
      return '/projects'
    }
    if (pathname === '/gallery' && hash === '#/') {
      console.log('🔧 Correcting malformed URL: /gallery#/ -> /#/gallery')
      window.history.replaceState(null, '', '/#/gallery')
      return '/gallery'
    }
    if (pathname === '/education' && hash === '#/') {
      console.log('🔧 Correcting malformed URL: /education#/ -> /#/education')
      window.history.replaceState(null, '', '/#/education')
      return '/education'
    }
    
    // For the root path, check if there's a meaningful hash first
    if (pathname === '/') {
      // If there's a hash with content, use the hash path
      if (hash && hash !== '#' && hash !== '#/') {
        let path = hash.slice(1)
        if (path.includes('#')) {
          path = path.split('#')[0]
        }
        console.log('✅ Root path with hash, using hash path:', path)
        return path
      }
      console.log('✅ Root path detected, returning /')
      return '/'
    }
    
    // Only use pathname if it's a specific route like /ai-builder, /templates, etc.
    // and there's no meaningful hash
    if (pathname && pathname !== '/' && (!hash || hash === '#' || hash === '#/')) {
      console.log('✅ Using pathname:', pathname)
      return pathname
    }
    
    // Otherwise, use the hash
    let path = hash.slice(1) || '/'
    if (path.includes('#')) {
      // If there's a double hash, take the first part
      path = path.split('#')[0]
    }
    console.log('✅ Using hash path:', path)
    return path
  })

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      const pathname = window.location.pathname
      
      // URL correction: Fix malformed URLs like /ai-builder#/ to /#/ai-builder
      if (pathname === '/ai-builder' && hash === '#/') {
        console.log('🔧 Correcting malformed URL: /ai-builder#/ -> /#/ai-builder')
        window.history.replaceState(null, '', '/#/ai-builder')
        setCurrentPath('/ai-builder')
        return
      }
      if (pathname === '/templates' && hash === '#/') {
        console.log('🔧 Correcting malformed URL: /templates#/ -> /#/templates')
        window.history.replaceState(null, '', '/#/templates')
        setCurrentPath('/templates')
        return
      }
      if (pathname === '/dashboard' && hash === '#/') {
        console.log('🔧 Correcting malformed URL: /dashboard#/ -> /#/dashboard')
        window.history.replaceState(null, '', '/#/dashboard')
        setCurrentPath('/dashboard')
        return
      }
      if (pathname === '/projects' && hash === '#/') {
        console.log('🔧 Correcting malformed URL: /projects#/ -> /#/projects')
        window.history.replaceState(null, '', '/#/projects')
        setCurrentPath('/projects')
        return
      }
      if (pathname === '/gallery' && hash === '#/') {
        console.log('🔧 Correcting malformed URL: /gallery#/ -> /#/gallery')
        window.history.replaceState(null, '', '/#/gallery')
        setCurrentPath('/gallery')
        return
      }
      if (pathname === '/education' && hash === '#/') {
        console.log('🔧 Correcting malformed URL: /education#/ -> /#/education')
        window.history.replaceState(null, '', '/#/education')
        setCurrentPath('/education')
        return
      }
      
      // For the root path, check if there's a meaningful hash first
      if (pathname === '/') {
        // If there's a hash with content, use the hash path
        if (hash && hash !== '#' && hash !== '#/') {
          let path = hash.slice(1)
          if (path.includes('#')) {
            path = path.split('#')[0]
          }
          setCurrentPath(path)
          return
        }
        setCurrentPath('/')
        return
      }
      
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
    
    console.log('🔍 Initial routing:', { pathname, hash, fullUrl: window.location.href })
    
    // For the root path, check if there's a meaningful hash first
    if (pathname === '/') {
      // If there's a hash with content, use the hash path
      if (hash && hash !== '#' && hash !== '#/') {
        let path = hash.slice(1)
        if (path.includes('#')) {
          path = path.split('#')[0]
        }
        console.log('✅ Root path with hash, using hash path:', path)
        return path
      }
      console.log('✅ Root path detected, returning /')
      return '/'
    }
    
    // Only use pathname if it's a specific route like /ai-builder, /templates, etc.
    // and there's no meaningful hash (but not if hash is just #/)
    if (pathname && pathname !== '/' && (!hash || hash === '#' || hash === '#/')) {
      // Special case: if pathname is /ai-builder and hash is #/, treat as root path
      if (pathname === '/ai-builder' && hash === '#/') {
        console.log('✅ Special case: /ai-builder#/ treated as root path')
        return '/'
      }
      console.log('✅ Using pathname:', pathname)
      return pathname
    }
    
    // Otherwise, use the hash
    let path = hash.slice(1) || '/'
    if (path.includes('#')) {
      // If there's a double hash, take the first part
      path = path.split('#')[0]
    }
    console.log('✅ Using hash path:', path)
    return path
  })

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      const pathname = window.location.pathname
      
    // For the root path, check if there's a meaningful hash first
    if (pathname === '/') {
      // If there's a hash with content, use the hash path
      if (hash && hash !== '#' && hash !== '#/') {
        let path = hash.slice(1)
        if (path.includes('#')) {
          path = path.split('#')[0]
        }
        setCurrentPath(path)
        return
      }
      setCurrentPath('/')
      return
    }
      
      // Only use pathname if it's a specific route like /ai-builder, /templates, etc.
      // and there's no meaningful hash (but not if hash is just #/)
      if (pathname && pathname !== '/' && (!hash || hash === '#' || hash === '#/')) {
        // Special case: if pathname is /ai-builder and hash is #/, treat as root path
        if (pathname === '/ai-builder' && hash === '#/') {
          setCurrentPath('/')
          return
        }
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
    // Debug logging
    console.log('🔍 Routing Debug:', { currentPath: path, availableRoutes: routes.map(r => r.path) })
    
    for (const route of routes) {
      if (route.path === path) {
        console.log('✅ Route matched:', route.path)
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
  
  console.log('🎯 Route matching result:', { currentPath, matchedRoute: matchedRoute?.path })
  
  if (matchedRoute) {
    console.log('✅ Rendering matched route:', matchedRoute.path)
    return matchedRoute.element
  }

  // Default to 404 or home
  const defaultRoute = routes.find(route => route.path === '/')
  console.log('⚠️ No route matched, using default:', defaultRoute?.path || 'none')
  return defaultRoute?.element || <div>Page not found</div>
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

// Navigation function
export const navigate = (path) => {
  window.location.hash = path
}

// Simple Link component
export const Link = ({ to, children, className, ...props }) => {
  const handleClick = (e) => {
    e.preventDefault()
    navigate(to)
  }

  return React.createElement('a', {
    href: `#${to}`,
    onClick: handleClick,
    className: className,
    ...props
  }, children)
}

// BrowserRouter replacement
export function BrowserRouter({ children }) {
  return <SimpleRouter>{children}</SimpleRouter>
}

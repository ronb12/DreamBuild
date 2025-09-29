// Simple navigation utilities to replace React Router
import React from 'react'

export const navigate = (path) => {
  window.location.hash = path
}

// useNavigate hook
export const useNavigate = () => {
  return navigate
}

// useParams hook - extract params from hash
export const useParams = () => {
  const location = useLocation()
  const params = {}
  
  // Extract params from dynamic routes like /apps/:appId
  const pathParts = location.pathname.split('/')
  const currentHash = window.location.hash.slice(1)
  const hashParts = currentHash.split('/')
  
  // Simple param extraction for common patterns
  if (currentHash.startsWith('/apps/') && hashParts.length >= 3) {
    params.appId = hashParts[2]
  }
  
  return params
}

export const useLocation = () => {
  const [location, setLocation] = React.useState(() => ({
    pathname: window.location.hash.slice(1) || '/',
    search: '',
    hash: window.location.hash,
    state: null
  }))

  React.useEffect(() => {
    const handleHashChange = () => {
      setLocation({
        pathname: window.location.hash.slice(1) || '/',
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

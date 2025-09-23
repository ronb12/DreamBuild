import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'
import { ProjectProvider } from './contexts/ProjectContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AIBuilder from './pages/AIBuilder'
import Templates from './pages/Templates'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Projects from './pages/Projects'
import GitHubCallback from './pages/GitHubCallback'
import Settings from './pages/Settings'
import Documentation from './pages/Documentation'
import Examples from './pages/Examples'
import Community from './pages/Community'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

// Component to conditionally render footer
function ConditionalFooter() {
  const location = useLocation()
  
  // Don't show footer on AI Builder page to maximize workspace
  const noFooterRoutes = ['/ai-builder']
  
  if (noFooterRoutes.includes(location.pathname)) {
    return null
  }
  
  return <Footer />
}

// Component to conditionally apply main padding
function ConditionalMain({ children }) {
  const location = useLocation()
  
  // Don't apply pt-16 on AI Builder and Dashboard pages as they handle their own spacing
  const noPaddingRoutes = ['/ai-builder', '/dashboard']
  
  if (noPaddingRoutes.includes(location.pathname)) {
    return <main>{children}</main>
  }
  
  return <main className="pt-16">{children}</main>
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProjectProvider>
          <Router>
            <div className="min-h-screen bg-background">
              <Navbar />
              <ConditionalMain>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/app" element={<Navigate to="/ai-builder" replace />} />
                  <Route path="/ai-builder" element={<AIBuilder />} />
                  <Route path="/templates" element={<Templates />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/auth/github/callback" element={<GitHubCallback />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/documentation" element={<Documentation />} />
                  <Route path="/examples" element={<Examples />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </ConditionalMain>
              <ConditionalFooter />
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: 'var(--card)',
                    color: 'var(--card-foreground)',
                    border: '1px solid var(--border)',
                  },
                }}
              />
            </div>
          </Router>
        </ProjectProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
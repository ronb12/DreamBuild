import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'
import { ProjectProvider } from './contexts/ProjectContext'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const AIBuilder = lazy(() => import('./pages/AIBuilder'))
const Templates = lazy(() => import('./pages/Templates'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const Login = lazy(() => import('./pages/Login'))
const Signup = lazy(() => import('./pages/Signup'))
const Projects = lazy(() => import('./pages/Projects'))
const Settings = lazy(() => import('./pages/Settings'))
const Documentation = lazy(() => import('./pages/Documentation'))
const Examples = lazy(() => import('./pages/Examples'))
const Community = lazy(() => import('./pages/Community'))
const About = lazy(() => import('./pages/About'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Education = lazy(() => import('./pages/Education'))
const AppHost = lazy(() => import('./pages/AppHost'))
const AppGallery = lazy(() => import('./pages/AppGallery'))
const DeleteApps = lazy(() => import('./pages/DeleteApps'))

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="text-center">
      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
)

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
  
  // Don't apply pt-16 on AI Builder, Dashboard, and Projects pages as they handle their own spacing
  const noPaddingRoutes = ['/ai-builder', '/dashboard', '/projects']
  
  if (noPaddingRoutes.includes(location.pathname)) {
    return <main>{children}</main>
  }
  
  return <main className="pt-16">{children}</main>
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <AuthProvider>
          <ProjectProvider>
            <Router>
              <div className="min-h-screen bg-background">
                <ErrorBoundary>
                  <Navbar />
                </ErrorBoundary>
                <ConditionalMain>
                  <ErrorBoundary>
                    <Suspense fallback={<PageLoader />}>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/app" element={<Navigate to="/ai-builder" replace />} />
                        <Route path="/ai-builder" element={<AIBuilder />} />
                        <Route path="/templates" element={<Templates />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/documentation" element={<Documentation />} />
                        <Route path="/examples" element={<Examples />} />
                        <Route path="/community" element={<Community />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/apps/:appId" element={<AppHost />} />
                        <Route path="/gallery" element={<AppGallery />} />
                        <Route path="/delete-apps" element={<DeleteApps />} />
                      </Routes>
                    </Suspense>
                  </ErrorBoundary>
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
    </ErrorBoundary>
  )
}

export default App
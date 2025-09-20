import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './contexts/ThemeContext'
import { AuthProvider } from './contexts/AuthContext'
import { ProjectProvider } from './contexts/ProjectContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AIBuilder from './pages/AIBuilder'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Projects from './pages/Projects'
import Settings from './pages/Settings'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProjectProvider>
          <Router>
            <div className="min-h-screen bg-background">
              <Navbar />
              <main className="pt-16">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/ai-builder" element={<AIBuilder />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </main>
              <Footer />
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
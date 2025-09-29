import React, { useState } from 'react'
import { Link, useLocation } from '../utils/navigation'

const AIBuilderMinimal = () => {
  const [activeTab, setActiveTab] = useState('editor')
  const location = useLocation()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2 text-foreground hover:text-primary">
                <span className="text-xl font-bold">DreamBuild</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link to="/templates" className="text-muted-foreground hover:text-foreground">
                  Templates
                </Link>
                <Link to="/dashboard" className="text-muted-foreground hover:text-foreground">
                  Dashboard
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="h-screen flex flex-col">
          {/* Tab Navigation */}
          <div className="bg-card border-b border-border">
            <div className="px-4 py-2">
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveTab('editor')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'editor'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Editor
                </button>
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'preview'
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Preview
                </button>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-4">
            {activeTab === 'editor' && (
              <div className="h-full bg-card rounded-lg border border-border p-4">
                <h2 className="text-lg font-semibold mb-4">Code Editor</h2>
                <div className="h-64 bg-muted rounded-md p-4">
                  <p className="text-muted-foreground">
                    Simple code editor will be implemented here.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'preview' && (
              <div className="h-full bg-card rounded-lg border border-border p-4">
                <h2 className="text-lg font-semibold mb-4">Preview</h2>
                <div className="h-64 bg-muted rounded-md p-4">
                  <p className="text-muted-foreground">
                    Preview will be shown here.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default AIBuilderMinimal

import React, { useState } from 'react'

const AIBuilderIsolated = () => {
  const [activeTab, setActiveTab] = useState('editor')
  const [code, setCode] = useState('// Welcome to DreamBuild AI Builder\nconsole.log("Hello World");')

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="#/" className="flex items-center space-x-2 text-foreground hover:text-primary">
                <span className="text-xl font-bold">DreamBuild</span>
              </a>
              <nav className="hidden md:flex space-x-6">
                <a href="#/templates" className="text-muted-foreground hover:text-foreground">
                  Templates
                </a>
                <a href="#/dashboard" className="text-muted-foreground hover:text-foreground">
                  Dashboard
                </a>
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
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-64 bg-muted rounded-md p-4 font-mono text-sm resize-none"
                  placeholder="Enter your code here..."
                />
                <div className="mt-4 flex space-x-2">
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                    Run Code
                  </button>
                  <button className="px-4 py-2 bg-muted text-foreground rounded-md hover:bg-muted/80">
                    Save
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'preview' && (
              <div className="h-full bg-card rounded-lg border border-border p-4">
                <h2 className="text-lg font-semibold mb-4">Preview</h2>
                <div className="h-64 bg-muted rounded-md p-4">
                  <pre className="text-sm font-mono text-foreground whitespace-pre-wrap">
                    {code}
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default AIBuilderIsolated

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  Eye, 
  Play, 
  Save, 
  Download, 
  Upload, 
  Settings, 
  Terminal, 
  FileText, 
  Folder,
  Brain,
  Sparkles,
  Plus,
  Trash2,
  Copy,
  Share
} from 'lucide-react'

const AIBuilderSimple = () => {
  const [activeTab, setActiveTab] = useState('editor')
  const [code, setCode] = useState(`// Welcome to DreamBuild AI Builder
import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="app">
      <h1>Hello DreamBuild!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default App`)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)

  const runCode = async () => {
    setIsRunning(true)
    setOutput('Running code...')
    
    // Simulate code execution
    setTimeout(() => {
      setOutput('Code executed successfully!\nOutput: Hello DreamBuild!\nCount: 0')
      setIsRunning(false)
    }, 1000)
  }

  const saveCode = () => {
    // Simulate saving
    setOutput('Code saved successfully!')
  }

  const tabs = [
    { id: 'editor', label: 'Editor', icon: Code },
    { id: 'preview', label: 'Preview', icon: Eye },
    { id: 'terminal', label: 'Terminal', icon: Terminal },
    { id: 'files', label: 'Files', icon: Folder }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Brain className="h-8 w-8 text-primary" />
                <span className="text-2xl font-bold">DreamBuild AI Builder</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                <Share className="h-4 w-4" />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                <Download className="h-4 w-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <div className="w-64 bg-card border-r border-border p-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">PROJECT FILES</h3>
              <div className="space-y-1">
                <div className="flex items-center space-x-2 px-2 py-1 bg-primary/10 text-primary rounded text-sm">
                  <FileText className="h-4 w-4" />
                  <span>App.jsx</span>
                </div>
                <div className="flex items-center space-x-2 px-2 py-1 text-muted-foreground hover:text-foreground rounded text-sm cursor-pointer">
                  <FileText className="h-4 w-4" />
                  <span>index.css</span>
                </div>
                <div className="flex items-center space-x-2 px-2 py-1 text-muted-foreground hover:text-foreground rounded text-sm cursor-pointer">
                  <FileText className="h-4 w-4" />
                  <span>package.json</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2">AI ASSISTANT</h3>
              <div className="space-y-2">
                <button className="w-full flex items-center space-x-2 px-3 py-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors text-sm">
                  <Brain className="h-4 w-4" />
                  <span>Generate Code</span>
                </button>
                <button className="w-full flex items-center space-x-2 px-3 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors text-sm">
                  <Sparkles className="h-4 w-4" />
                  <span>Fix Bugs</span>
                </button>
                <button className="w-full flex items-center space-x-2 px-3 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors text-sm">
                  <Code className="h-4 w-4" />
                  <span>Optimize</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col">
          {/* Tab Navigation */}
          <div className="bg-card border-b border-border">
            <div className="flex space-x-1 px-4">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium rounded-t-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-background text-foreground border-b-2 border-primary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 flex">
            {/* Editor/Preview Area */}
            <div className="flex-1 flex flex-col">
              {activeTab === 'editor' && (
                <div className="flex-1 flex flex-col">
                  <div className="flex-1 p-4">
                    <div className="h-full bg-card rounded-lg border border-border overflow-hidden">
                      <div className="h-full">
                        <textarea
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                          className="w-full h-full bg-transparent p-4 font-mono text-sm resize-none focus:outline-none"
                          placeholder="Enter your code here..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-4 border-t border-border">
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={runCode}
                        disabled={isRunning}
                        className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-colors"
                      >
                        <Play className="h-4 w-4" />
                        <span>{isRunning ? 'Running...' : 'Run Code'}</span>
                      </button>
                      <button
                        onClick={saveCode}
                        className="flex items-center space-x-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
                      >
                        <Save className="h-4 w-4" />
                        <span>Save</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors">
                        <Copy className="h-4 w-4" />
                        <span>Copy</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'preview' && (
                <div className="flex-1 p-4">
                  <div className="h-full bg-card rounded-lg border border-border p-4">
                    <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
                    <div className="h-full bg-muted rounded-lg p-4 overflow-auto">
                      <pre className="text-sm font-mono text-foreground whitespace-pre-wrap">
                        {code}
                      </pre>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'terminal' && (
                <div className="flex-1 p-4">
                  <div className="h-full bg-card rounded-lg border border-border p-4">
                    <h3 className="text-lg font-semibold mb-4">Terminal</h3>
                    <div className="h-full bg-black text-green-400 rounded-lg p-4 font-mono text-sm overflow-auto">
                      <div className="mb-2">$ npm start</div>
                      <div className="mb-2">Starting development server...</div>
                      <div className="mb-2">Local: http://localhost:3000</div>
                      <div className="mb-2">On Your Network: http://192.168.1.100:3000</div>
                      <div className="text-yellow-400">✓ Compiled successfully!</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'files' && (
                <div className="flex-1 p-4">
                  <div className="h-full bg-card rounded-lg border border-border p-4">
                    <h3 className="text-lg font-semibold mb-4">Project Files</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-muted rounded-lg">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-blue-500" />
                          <span>App.jsx</span>
                        </div>
                        <div className="text-xs text-muted-foreground">2.1 KB</div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted rounded-lg">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-green-500" />
                          <span>index.css</span>
                        </div>
                        <div className="text-xs text-muted-foreground">1.2 KB</div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted rounded-lg">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-4 w-4 text-yellow-500" />
                          <span>package.json</span>
                        </div>
                        <div className="text-xs text-muted-foreground">856 B</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Output Panel */}
            <div className="w-80 border-l border-border bg-card">
              <div className="p-4 border-b border-border">
                <h3 className="text-lg font-semibold">Output</h3>
              </div>
              <div className="p-4 h-full overflow-auto">
                <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                  <pre className="whitespace-pre-wrap text-foreground">
                    {output || 'No output yet. Run your code to see results here.'}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIBuilderSimple

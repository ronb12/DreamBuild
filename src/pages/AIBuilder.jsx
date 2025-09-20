import React, { useState } from 'react'
import FileManager from '../components/FileManager'
import CodeEditor from '../components/CodeEditor'
import Preview from '../components/Preview'
import AIPrompt from '../components/AIPrompt'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '../components/ui/Resizable'
import { motion } from 'framer-motion'
import { Terminal as TerminalIcon, Code, Eye, Brain, Sparkles, Home } from 'lucide-react'

const AIBuilder = () => {
  const [activeTab, setActiveTab] = useState('editor')

  const tabs = [
    { id: 'editor', label: 'Code Editor', icon: Code, description: 'Edit your code with live preview' },
    { id: 'preview', label: 'Live Preview', icon: Eye, description: 'View your application in real-time' },
    { id: 'terminal', label: 'Terminal', icon: TerminalIcon, description: 'Command line interface' }
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col pt-16">
      {/* Back to Home Button */}
      <div className="absolute top-20 left-4 z-30">
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-3 py-2 bg-card/95 backdrop-blur-sm border border-border/50 rounded-lg hover:bg-card transition-colors shadow-lg"
        >
          <Home className="h-4 w-4" />
          <span className="text-sm font-medium hidden sm:inline">Back to Home</span>
        </motion.a>
      </div>

      {/* Tab Navigation */}
      <div className="absolute top-20 right-4 z-30">
        <div className="flex items-center gap-1 bg-card/95 backdrop-blur-sm p-1 rounded-xl border border-border/50 shadow-lg">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                }`}
                title={tab.description}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">
        <ResizablePanelGroup direction="horizontal" className="h-full gap-2">
          
          {/* Left Panel - File Manager */}
          <ResizablePanel defaultSize={20} minSize={10} maxSize={50}>
            <div className="h-full bg-card border border-border rounded-xl shadow-sm overflow-hidden">
              <FileManager />
            </div>
          </ResizablePanel>
          
          <ResizableHandle className="w-3 bg-border/40 hover:bg-primary/40 transition-colors rounded-full cursor-col-resize hover:w-4" />
          
          {/* Center Panel - Code Editor */}
          <ResizablePanel defaultSize={50} minSize={25} maxSize={70}>
            <div className="h-full bg-card border border-border rounded-xl shadow-sm overflow-hidden">
              {activeTab === 'editor' && <CodeEditor />}
              {activeTab === 'preview' && <Preview />}
              {activeTab === 'terminal' && (
                <div className="h-full flex flex-col bg-gradient-to-br from-card via-card/80 to-card rounded-lg border border-border/50 shadow-sm overflow-hidden">
                  {/* Terminal Header */}
                  <div className="p-4 border-b border-border/50 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                        <TerminalIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <span className="font-semibold text-foreground">Terminal</span>
                        <p className="text-xs text-muted-foreground">Command line interface</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Terminal Content */}
                  <div className="flex-grow p-6 bg-gray-900 text-green-400 font-mono text-sm overflow-y-auto">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">ronellbradley@DreamBuild</span>
                        <span className="text-gray-500">%</span>
                        <span className="text-gray-300">npm run dev</span>
                      </div>
                      <div className="text-gray-400">Starting development server...</div>
                      <div className="text-green-400">✓ Server running on http://localhost:3000</div>
                      <div className="text-blue-400">✓ Ready in 2.3s</div>
                      <div className="mt-4">
                        <div className="flex items-center gap-2">
                          <span className="text-green-400">ronellbradley@DreamBuild</span>
                          <span className="text-gray-500">%</span>
                          <span className="text-gray-300 animate-pulse">_</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ResizablePanel>
          
          <ResizableHandle className="w-3 bg-border/40 hover:bg-primary/40 transition-colors rounded-full cursor-col-resize hover:w-4" />
          
          {/* Right Panel - AI Assistant */}
          <ResizablePanel defaultSize={30} minSize={15} maxSize={60}>
            <div className="h-full bg-card border border-border rounded-xl shadow-sm overflow-hidden">
              <AIPrompt />
            </div>
          </ResizablePanel>
          
        </ResizablePanelGroup>
      </div>
    </div>
  )
}

export default AIBuilder
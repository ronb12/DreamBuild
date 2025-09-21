import React, { useState } from 'react'
import FileManager from '../components/FileManager'
import CodeEditor from '../components/CodeEditor'
import Preview from '../components/Preview'
import AIPrompt from '../components/AIPrompt'
import IntegratedWorkspace from '../components/IntegratedWorkspace'
import ChatInterface from '../components/chat/ChatInterface'
import { ChatProvider } from '../contexts/ChatContext'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '../components/ui/Resizable'
import { motion } from 'framer-motion'
import { Terminal as TerminalIcon, Code, Eye, Brain, Sparkles, Home, Folder, MessageSquare } from 'lucide-react'

const AIBuilder = () => {
  const [activeTab, setActiveTab] = useState('editor')
  const [isWorkspaceVisible, setIsWorkspaceVisible] = useState(false)

  const tabs = [
    { id: 'editor', label: 'Code Editor', icon: Code, description: 'Edit your code with live preview' },
    { id: 'preview', label: 'Live Preview', icon: Eye, description: 'View your application in real-time' },
    { id: 'chat', label: 'AI Chat', icon: MessageSquare, description: 'Conversational AI assistant with recommendations' },
    { id: 'terminal', label: 'Terminal', icon: TerminalIcon, description: 'Command line interface' },
    { id: 'workspace', label: 'Advanced Workspace', icon: Brain, description: 'Full-featured workspace with collaboration, visual editor, and deployment' }
  ]

  const handleTabClick = (tabId) => {
    if (tabId === 'workspace') {
      // Toggle workspace visibility
      if (activeTab === 'workspace' && isWorkspaceVisible) {
        setIsWorkspaceVisible(false)
        setActiveTab('editor') // Switch back to editor when hiding
      } else {
        setIsWorkspaceVisible(true)
        setActiveTab(tabId)
      }
    } else {
      // For other tabs, just switch normally
      setActiveTab(tabId)
      setIsWorkspaceVisible(false) // Hide workspace when switching to other tabs
    }
  }

  return (
    <div className="h-screen bg-background flex flex-col pt-16">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-card/80 backdrop-blur-sm border-b border-border/50 shadow-sm">
        {/* Left Side - Title */}
        <div className="flex items-center gap-4">
          <h1 className="text-lg font-semibold text-foreground">AI Builder</h1>
        </div>

        {/* Right Side - Tab Navigation */}
        <div className="flex items-center gap-1 bg-background/50 p-1 rounded-lg border border-border/50">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleTabClick(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                }`}
                title={tab.description}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </motion.button>
            )
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <ResizablePanelGroup direction="horizontal" className="h-full gap-2">
          
          {/* Left Panel - File Manager */}
          <ResizablePanel defaultSize={20} minSize={10} maxSize={50}>
            <div className="h-full bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
              {/* Panel Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <Folder className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Files</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Active</span>
                </div>
              </div>
              
              {/* Panel Content */}
              <div className="flex-1 overflow-hidden">
                <FileManager />
              </div>
            </div>
          </ResizablePanel>
          
          <ResizableHandle 
            className="w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group"
            handleIndex={0}
          >
            <div className="w-1 h-8 bg-border/50 rounded-full mx-auto group-hover:bg-primary/70 transition-colors" />
          </ResizableHandle>
          
          {/* Center Panel - Code Editor */}
          <ResizablePanel defaultSize={50} minSize={25} maxSize={70}>
            <div className="h-full bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
              {/* Panel Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50">
                <div className="flex items-center gap-2">
                  {activeTab === 'editor' && <Code className="h-4 w-4 text-primary" />}
                  {activeTab === 'preview' && <Eye className="h-4 w-4 text-primary" />}
                  {activeTab === 'chat' && <MessageSquare className="h-4 w-4 text-primary" />}
                  {activeTab === 'workspace' && <Brain className="h-4 w-4 text-primary" />}
                  {activeTab === 'terminal' && <TerminalIcon className="h-4 w-4 text-primary" />}
                  <span className="text-sm font-medium text-foreground capitalize">{activeTab}</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Ready</span>
                </div>
              </div>
              
              {/* Panel Content */}
              <div className="flex-1 overflow-hidden h-full min-h-[600px]">
                {activeTab === 'editor' && <CodeEditor />}
                {activeTab === 'preview' && <Preview />}
                {activeTab === 'chat' && (
                  <ChatProvider>
                    <ChatInterface />
                  </ChatProvider>
                )}
                {activeTab === 'workspace' && isWorkspaceVisible && <IntegratedWorkspace projectId="demo-project" />}
                {activeTab === 'workspace' && !isWorkspaceVisible && (
                  <div className="h-full flex items-center justify-center bg-muted/20">
                    <div className="text-center">
                      <Brain className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-foreground mb-2">Advanced Workspace</h3>
                      <p className="text-muted-foreground mb-4">Click the Advanced Workspace button to open the full-featured workspace</p>
                      <div className="text-sm text-muted-foreground">
                        <p>Features include:</p>
                        <ul className="mt-2 space-y-1">
                          <li>• Real-time Collaboration</li>
                          <li>• Visual Editor</li>
                          <li>• One-click Deployment</li>
                          <li>• Memory Management</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'terminal' && (
                  <div className="h-full flex flex-col bg-gray-900">
                    {/* Terminal Content */}
                    <div className="flex-grow p-4 text-green-400 font-mono text-sm overflow-y-auto">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-green-400">user@dreambuild</span>
                          <span className="text-gray-500">$</span>
                          <span className="text-gray-300">npm run dev</span>
                        </div>
                        <div className="text-gray-400">Starting development server...</div>
                        <div className="text-green-400">✓ Server running on http://localhost:3000</div>
                        <div className="text-blue-400">✓ Ready in 2.3s</div>
                        <div className="mt-4">
                          <div className="flex items-center gap-2">
                            <span className="text-green-400">user@dreambuild</span>
                            <span className="text-gray-500">$</span>
                            <span className="text-gray-300 animate-pulse">_</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ResizablePanel>
          
          <ResizableHandle 
            className="w-2 bg-border/30 hover:bg-primary/50 transition-all duration-200 cursor-col-resize hover:w-3 group"
            handleIndex={1}
          >
            <div className="w-1 h-8 bg-border/50 rounded-full mx-auto group-hover:bg-primary/70 transition-colors" />
          </ResizableHandle>
          
          {/* Right Panel - AI Assistant */}
          <ResizablePanel defaultSize={30} minSize={15} maxSize={60}>
            <div className="h-full bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
              {/* Panel Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <Brain className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">AI Assistant</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-muted-foreground">Online</span>
                </div>
              </div>
              
              {/* Panel Content */}
              <div className="flex-1 overflow-hidden">
                <AIPrompt />
              </div>
            </div>
          </ResizablePanel>
          
        </ResizablePanelGroup>
      </div>
    </div>
  )
}

export default AIBuilder
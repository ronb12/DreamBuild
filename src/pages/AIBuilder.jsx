import React, { useState } from 'react'
import FileManager from '../components/FileManager'
import CodeEditor from '../components/CodeEditor'
import Preview from '../components/Preview'
import AIPrompt from '../components/AIPrompt'
// import Terminal from '../components/Terminal' // Temporarily disabled
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '../components/ui/Resizable'
import { motion } from 'framer-motion'
import { Terminal as TerminalIcon, Code, Eye, Brain } from 'lucide-react'

const AIBuilder = () => {
  const [activeTab, setActiveTab] = useState('code') // 'code', 'preview', 'terminal'

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col bg-gradient-to-br from-background via-background to-muted/20">
      {/* Enhanced Header with Better Visual Hierarchy */}
      <div className="flex items-center justify-between p-6 border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">AI Builder</h1>
              <p className="text-sm text-muted-foreground">Build applications with AI assistance</p>
            </div>
          </div>
        </div>
        
        {/* Enhanced Tab Navigation */}
        <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-xl border border-border/50">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'code' 
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20' 
                : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
            }`}
          >
            <Code className="h-4 w-4" />
            <span>Code Editor</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('preview')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'preview' 
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20' 
                : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
            }`}
          >
            <Eye className="h-4 w-4" />
            <span>Live Preview</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeTab === 'terminal' 
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20' 
                : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
            }`}
          >
            <TerminalIcon className="h-4 w-4" />
            <span>Terminal</span>
          </motion.button>
        </div>
      </div>

      {/* Enhanced Main Content Area with Better Spacing */}
      <div className="flex-grow p-4">
        <ResizablePanelGroup direction="horizontal" className="h-full gap-2">
          {/* Project Files Panel */}
          <ResizablePanel defaultSize={18} minSize={12} maxSize={25}>
            <div className="h-full bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm">
              <FileManager />
            </div>
          </ResizablePanel>
          
          <ResizableHandle className="w-1 bg-border/30 hover:bg-primary/30 transition-colors rounded-full" />
          
          {/* Code Editor & Preview Panel */}
          <ResizablePanel defaultSize={52} minSize={35}>
            <div className="h-full bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm overflow-hidden">
              <ResizablePanelGroup direction="vertical" className="h-full gap-2">
                {/* Top Panel (Code Editor or Preview) */}
                <ResizablePanel defaultSize={60} minSize={30}>
                  <div className="h-full bg-card/80 rounded-lg border border-border/30 shadow-sm overflow-hidden">
                    {activeTab === 'code' && <CodeEditor />}
                    {activeTab === 'preview' && <Preview />}
                    {activeTab === 'terminal' && (
                      <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 rounded-lg border border-gray-700/50">
                        <div className="text-center p-8">
                          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <TerminalIcon className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold mb-3 text-foreground">Terminal Component</h3>
                          <p className="text-muted-foreground max-w-sm">
                            Terminal functionality is temporarily disabled while we optimize the local AI integration.
                          </p>
                          <div className="mt-6 p-3 bg-muted/50 rounded-lg border border-border/50">
                            <p className="text-sm text-muted-foreground">
                              💡 <strong>Tip:</strong> Use the AI Assistant to generate code and see live previews instead!
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ResizablePanel>
                
                <ResizableHandle className="h-1 bg-border/30 hover:bg-primary/30 transition-colors rounded-full" />
                
                {/* Bottom Panel (Preview or Code Editor) */}
                <ResizablePanel defaultSize={40} minSize={20}>
                  <div className="h-full bg-card/80 rounded-lg border border-border/30 shadow-sm overflow-hidden">
                    {activeTab === 'code' && <Preview />}
                    {activeTab === 'preview' && <CodeEditor />}
                    {activeTab === 'terminal' && (
                      <div className="flex flex-col h-full bg-gradient-to-br from-card via-card/80 to-card rounded-lg border border-border/50 shadow-sm overflow-hidden">
                        <div className="p-4 border-b border-border/50 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                              <Brain className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <span className="font-semibold text-foreground">AI Assistant</span>
                              <p className="text-xs text-muted-foreground">Ready to help you code</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow p-6 flex items-center justify-center text-muted-foreground">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                              <TerminalIcon className="h-8 w-8 text-primary" />
                            </div>
                            <p className="text-lg mb-2 text-foreground">Terminal Active</p>
                            <p className="text-sm max-w-xs">
                              Use the terminal above to run commands and manage your project files.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </ResizablePanel>
          
          <ResizableHandle className="w-1 bg-border/30 hover:bg-primary/30 transition-colors rounded-full" />
          
          {/* AI Assistant Panel */}
          <ResizablePanel defaultSize={30} minSize={20} maxSize={40}>
            <div className="h-full bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm overflow-hidden">
              <AIPrompt />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  )
}

export default AIBuilder
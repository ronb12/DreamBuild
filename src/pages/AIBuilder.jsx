import React, { useState } from 'react'
import FileManager from '../components/FileManager'
import CodeEditor from '../components/CodeEditor'
import Preview from '../components/Preview'
import AIPrompt from '../components/AIPrompt'
import Terminal from '../components/Terminal'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '../components/ui/Resizable'
import { motion } from 'framer-motion'
import { Terminal as TerminalIcon, Code, Eye, FileText, Brain } from 'lucide-react'

const AIBuilder = () => {
  const [showTerminal, setShowTerminal] = useState(false)
  const [activeTab, setActiveTab] = useState('code') // 'code', 'preview', 'terminal'

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col p-4">
      {/* Tab Navigation */}
      <div className="flex items-center gap-2 mb-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab('code')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'code' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          <Code className="h-4 w-4" />
          <span>Code Editor</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab('preview')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'preview' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          <Eye className="h-4 w-4" />
          <span>Live Preview</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab('terminal')}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'terminal' 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          <TerminalIcon className="h-4 w-4" />
          <span>Terminal</span>
        </motion.button>
      </div>

      {/* Main Content Area */}
      <ResizablePanelGroup direction="horizontal" className="flex-grow">
        <ResizablePanel defaultSize={15} minSize={10}>
          <FileManager />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={55} minSize={30}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={60} minSize={30}>
              {activeTab === 'code' && <CodeEditor />}
              {activeTab === 'preview' && <Preview />}
              {activeTab === 'terminal' && <Terminal />}
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={40} minSize={20}>
              {activeTab === 'code' && <Preview />}
              {activeTab === 'preview' && <CodeEditor />}
              {activeTab === 'terminal' && (
                <div className="flex flex-col h-full bg-card rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 border-b border-border bg-secondary flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-primary" />
                      <span className="font-semibold text-foreground">AI Assistant</span>
                    </div>
                  </div>
                  <div className="flex-grow p-4 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <TerminalIcon className="h-12 w-12 mx-auto mb-4 text-gray-400" />
                      <p className="text-lg mb-2">Terminal Active</p>
                      <p className="text-sm">Use the terminal above to run commands and manage your project.</p>
                    </div>
                  </div>
                </div>
              )}
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={30} minSize={20}>
          <AIPrompt />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default AIBuilder
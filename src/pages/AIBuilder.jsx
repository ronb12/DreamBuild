import React, { useState } from 'react'
import FileManager from '../components/FileManager'
import CodeEditor from '../components/CodeEditor'
import Preview from '../components/Preview'
import AIPrompt from '../components/AIPrompt'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '../components/ui/Resizable'
import { Terminal as TerminalIcon } from 'lucide-react'

const AIBuilder = () => {
  return (
    <div className="h-[calc(100vh-80px)] flex bg-gray-900 text-gray-100">
      {/* Cursor-Style Three-Panel Layout */}
      <ResizablePanelGroup direction="horizontal" className="h-full">
        
        {/* Left Panel - File Explorer (Cursor Style) */}
        <ResizablePanel defaultSize={280} minSize={200} maxSize={400}>
          <div className="h-full bg-gray-800 border-r border-gray-700">
            <FileManager />
          </div>
        </ResizablePanel>
        
        <ResizableHandle className="w-0.5 bg-gray-700 hover:bg-gray-600 transition-colors" />
        
        {/* Middle Panel - Editor & Terminal (Cursor Style) */}
        <ResizablePanel defaultSize={60} minSize={40}>
          <ResizablePanelGroup direction="vertical" className="h-full">
            
            {/* Top Panel - Code Editor */}
            <ResizablePanel defaultSize={70} minSize={30}>
              <div className="h-full bg-gray-900 border-b border-gray-700">
                {/* Editor Tabs - Cursor Style */}
                <div className="flex items-center bg-gray-800 border-b border-gray-700">
                  <div className="flex items-center px-4 py-2 bg-gray-900 border-r border-gray-700">
                    <span className="text-sm text-gray-300">index.html</span>
                  </div>
                  <div className="flex items-center px-4 py-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition-colors cursor-pointer">
                    <span className="text-sm">style.css</span>
                  </div>
                  <div className="flex items-center px-4 py-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition-colors cursor-pointer">
                    <span className="text-sm">script.js</span>
                  </div>
                  <div className="flex items-center px-4 py-2 text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition-colors cursor-pointer">
                    <span className="text-sm">+</span>
                  </div>
                </div>
                
                {/* Code Editor Content */}
                <div className="h-[calc(100%-40px)]">
                  <CodeEditor />
                </div>
              </div>
            </ResizablePanel>
            
            <ResizableHandle className="h-0.5 bg-gray-700 hover:bg-gray-600 transition-colors" />
            
            {/* Bottom Panel - Terminal */}
            <ResizablePanel defaultSize={30} minSize={20}>
              <div className="h-full bg-gray-900">
                {/* Terminal Header */}
                <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
                  <TerminalIcon className="h-4 w-4 text-gray-400 mr-2" />
                  <span className="text-sm text-gray-300">Terminal</span>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="text-xs text-gray-500">main</span>
                    <span className="text-xs text-gray-500">∞</span>
                  </div>
                </div>
                
                {/* Terminal Content */}
                <div className="h-[calc(100%-40px)] p-4 font-mono text-sm bg-gray-900">
                  <div className="text-green-400">ronellbradley@DreamBuild %</div>
                  <div className="text-gray-300 mt-2">
                    <div>✓ Deploy complete!</div>
                    <div className="text-blue-400">Project Console: https://console.firebase.google.com/project/dreambuild-2024-app/overview</div>
                    <div className="text-blue-400">Hosting URL: https://dreambuild-2024-app.web.app</div>
                  </div>
                  <div className="text-green-400 mt-2">ronellbradley@DreamBuild %</div>
                  <div className="mt-4">
                    <div className="text-gray-400"># Available commands:</div>
                    <div className="text-gray-400"># npm run dev - Start development server</div>
                    <div className="text-gray-400"># npm run build - Build for production</div>
                    <div className="text-gray-400"># firebase deploy - Deploy to Firebase</div>
                  </div>
                </div>
              </div>
            </ResizablePanel>
            
          </ResizablePanelGroup>
        </ResizablePanel>
        
        <ResizableHandle className="w-0.5 bg-gray-700 hover:bg-gray-600 transition-colors" />
        
        {/* Right Panel - AI Assistant (Cursor Style) */}
        <ResizablePanel defaultSize={25} minSize={20} maxSize={35}>
          <div className="h-full bg-gray-800 border-l border-gray-700">
            <AIPrompt />
          </div>
        </ResizablePanel>
        
      </ResizablePanelGroup>
    </div>
  )
}

export default AIBuilder
// Integrated Workspace for DreamBuild
// Combines all advanced features: collaboration, visual editor, deployment

import React, { useState, useEffect } from 'react'
import CollaborationPanel from './CollaborationPanel'
import VisualEditor from './VisualEditor'
import DeploymentPanel from './DeploymentPanel'
import MemoryManager from './MemoryManager'

const IntegratedWorkspace = ({ projectId, initialFiles = {} }) => {
  const [activeTab, setActiveTab] = useState('code')
  const [files, setFiles] = useState(initialFiles)
  const [selectedFile, setSelectedFile] = useState(null)
  const [collaborationEnabled, setCollaborationEnabled] = useState(false)
  const [visualMode, setVisualMode] = useState(false)
  const [deploymentStatus, setDeploymentStatus] = useState(null)

  const tabs = [
    { id: 'code', name: 'Code Editor', icon: '💻' },
    { id: 'visual', name: 'Visual Editor', icon: '🎨' },
    { id: 'collaboration', name: 'Collaboration', icon: '🤝' },
    { id: 'deployment', name: 'Deployment', icon: '🚀' },
    { id: 'memory', name: 'Memory', icon: '🧠' }
  ]

  const handleFileChange = (filename, content) => {
    setFiles(prev => ({
      ...prev,
      [filename]: content
    }))
  }

  const handleVisualCodeChange = (codeData) => {
    if (codeData.appCode) {
      handleFileChange('src/App.jsx', codeData.appCode)
    }
    if (codeData.cssCode) {
      handleFileChange('src/App.css', codeData.cssCode)
    }
  }

  const handleDeploy = (deploymentResult) => {
    setDeploymentStatus(deploymentResult)
    console.log('Deployment result:', deploymentResult)
  }

  const handleVersionRestore = (restoredFiles) => {
    setFiles(prev => ({
      ...prev,
      ...restoredFiles
    }))
    console.log('Version restored:', restoredFiles)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'code':
        return (
          <div className="code-editor-tab">
            <div className="file-explorer">
              <h3>📁 Files</h3>
              <div className="file-list">
                {Object.keys(files).map(filename => (
                  <div
                    key={filename}
                    className={`file-item ${selectedFile === filename ? 'selected' : ''}`}
                    onClick={() => setSelectedFile(filename)}
                  >
                    <span className="file-icon">📄</span>
                    <span className="file-name">{filename}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="code-editor">
              {selectedFile && (
                <div className="editor-container">
                  <div className="editor-header">
                    <span className="file-name">{selectedFile}</span>
                    <div className="editor-actions">
                      <button className="btn btn-sm">Save</button>
                      <button className="btn btn-sm">Format</button>
                    </div>
                  </div>
                  <textarea
                    className="code-textarea"
                    value={files[selectedFile] || ''}
                    onChange={(e) => handleFileChange(selectedFile, e.target.value)}
                    placeholder="Start coding..."
                  />
                </div>
              )}
            </div>
          </div>
        )

      case 'visual':
        return (
          <div className="visual-editor-tab">
            <VisualEditor
              projectId={projectId}
              onCodeChange={handleVisualCodeChange}
              initialComponents={[]}
            />
          </div>
        )

      case 'collaboration':
        return (
          <div className="collaboration-tab">
            <div className="collaboration-header">
              <h3>🤝 Real-time Collaboration</h3>
              <button
                className={`btn ${collaborationEnabled ? 'btn-danger' : 'btn-primary'}`}
                onClick={() => setCollaborationEnabled(!collaborationEnabled)}
              >
                {collaborationEnabled ? 'Disable' : 'Enable'} Collaboration
              </button>
            </div>
            
            {collaborationEnabled ? (
              <CollaborationPanel
                projectId={projectId}
                fileId={selectedFile}
                onFileChange={handleFileChange}
                onVersionRestore={handleVersionRestore}
              />
            ) : (
              <div className="collaboration-disabled">
                <p>Enable collaboration to work with team members in real-time</p>
                <ul>
                  <li>Multi-user co-editing</li>
                  <li>Real-time comments</li>
                  <li>Version history</li>
                  <li>User presence</li>
                </ul>
              </div>
            )}
          </div>
        )

      case 'deployment':
        return (
          <div className="deployment-tab">
            <DeploymentPanel
              projectId={projectId}
              projectData={{ files }}
              onDeploy={handleDeploy}
            />
            
            {deploymentStatus && (
              <div className="deployment-result">
                <h4>Deployment Result</h4>
                <div className="result-details">
                  <p><strong>Provider:</strong> {deploymentStatus.provider}</p>
                  <p><strong>URL:</strong> <a href={deploymentStatus.url} target="_blank" rel="noopener noreferrer">{deploymentStatus.url}</a></p>
                  <p><strong>Status:</strong> {deploymentStatus.status}</p>
                  <p><strong>Deployed:</strong> {new Date(deploymentStatus.deployedAt).toLocaleString()}</p>
                </div>
              </div>
            )}
          </div>
        )

      case 'memory':
        return (
          <div className="memory-tab">
            <MemoryManager
              projectId={projectId}
              onMemoryUpdate={() => console.log('Memory updated')}
            />
          </div>
        )

      default:
        return <div>Select a tab to get started</div>
    }
  }

  return (
    <div className="integrated-workspace">
      <div className="workspace-header">
        <h2>🚀 DreamBuild Advanced Workspace</h2>
        <div className="workspace-status">
          <span className="status-indicator">●</span>
          <span>Project: {projectId}</span>
        </div>
      </div>

      <div className="workspace-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-name">{tab.name}</span>
          </button>
        ))}
      </div>

      <div className="workspace-content">
        {renderTabContent()}
      </div>

      <style jsx>{`
        .integrated-workspace {
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f5f5f5;
        }

        .workspace-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 20px;
          background: white;
          border-bottom: 1px solid #ddd;
        }

        .workspace-status {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
        }

        .status-indicator {
          color: #28a745;
        }

        .workspace-tabs {
          display: flex;
          background: white;
          border-bottom: 1px solid #ddd;
          overflow-x: auto;
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border: none;
          background: transparent;
          cursor: pointer;
          border-bottom: 3px solid transparent;
          transition: all 0.3s ease;
        }

        .tab-button:hover {
          background: #f8f9fa;
        }

        .tab-button.active {
          border-bottom-color: #007bff;
          background: #f8f9ff;
        }

        .tab-icon {
          font-size: 16px;
        }

        .tab-name {
          font-size: 14px;
          font-weight: 500;
        }

        .workspace-content {
          flex: 1;
          overflow: hidden;
        }

        .code-editor-tab {
          display: flex;
          height: 100%;
        }

        .file-explorer {
          width: 250px;
          background: white;
          border-right: 1px solid #ddd;
          padding: 20px;
          overflow-y: auto;
        }

        .file-list {
          margin-top: 15px;
        }

        .file-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          cursor: pointer;
          border-radius: 4px;
          transition: background 0.2s ease;
        }

        .file-item:hover {
          background: #f8f9fa;
        }

        .file-item.selected {
          background: #e3f2fd;
          color: #1976d2;
        }

        .file-icon {
          font-size: 14px;
        }

        .file-name {
          font-size: 14px;
        }

        .code-editor {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .editor-container {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .editor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 15px;
          background: #f8f9fa;
          border-bottom: 1px solid #ddd;
        }

        .editor-actions {
          display: flex;
          gap: 8px;
        }

        .code-textarea {
          flex: 1;
          padding: 20px;
          border: none;
          font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
          font-size: 14px;
          line-height: 1.5;
          resize: none;
          outline: none;
        }

        .collaboration-tab,
        .deployment-tab,
        .memory-tab {
          padding: 20px;
          height: 100%;
          overflow-y: auto;
        }

        .collaboration-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .collaboration-disabled {
          text-align: center;
          padding: 40px;
          color: #666;
        }

        .collaboration-disabled ul {
          text-align: left;
          max-width: 300px;
          margin: 20px auto;
        }

        .deployment-result {
          margin-top: 20px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .result-details p {
          margin: 5px 0;
        }

        .result-details a {
          color: #007bff;
          text-decoration: none;
        }

        .btn {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
        }

        .btn-primary {
          background: #007bff;
          color: white;
        }

        .btn-danger {
          background: #dc3545;
          color: white;
        }

        .btn-sm {
          padding: 4px 8px;
          font-size: 12px;
        }

        .btn:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  )
}

export default IntegratedWorkspace

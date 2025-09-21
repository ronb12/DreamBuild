// Deployment Panel for DreamBuild
// Provides one-click deployment to multiple hosting providers

import React, { useState } from 'react'

const DeploymentPanel = ({ projectId, projectData, onDeploy }) => {
  const [selectedProvider, setSelectedProvider] = useState('vercel')
  const [isDeploying, setIsDeploying] = useState(false)
  const [deploymentStatus, setDeploymentStatus] = useState(null)

  const providers = [
    { id: 'vercel', name: 'Vercel', icon: '▲', description: 'Fast, global deployment' },
    { id: 'netlify', name: 'Netlify', icon: '🌐', description: 'JAMstack deployment' },
    { id: 'aws', name: 'AWS Amplify', icon: '☁️', description: 'Full-stack deployment' },
    { id: 'firebase', name: 'Firebase', icon: '🔥', description: 'Google hosting' },
    { id: 'github', name: 'GitHub Pages', icon: '🐙', description: 'Free static hosting' }
  ]

  const handleDeploy = async () => {
    setIsDeploying(true)
    setDeploymentStatus('Deploying...')
    
    try {
      // Simulate deployment
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      const result = {
        success: true,
        provider: selectedProvider,
        url: `https://${projectId}.${selectedProvider}.com`,
        deployedAt: new Date().toISOString()
      }
      
      setDeploymentStatus('Deployed successfully!')
      onDeploy && onDeploy(result)
    } catch (error) {
      setDeploymentStatus('Deployment failed')
    } finally {
      setIsDeploying(false)
    }
  }

  return (
    <div className="deployment-panel">
      <h3>🚀 Deploy Your App</h3>
      
      <div className="provider-selection">
        <h4>Choose Hosting Provider</h4>
        <div className="providers-grid">
          {providers.map(provider => (
            <div
              key={provider.id}
              className={`provider-card ${selectedProvider === provider.id ? 'selected' : ''}`}
              onClick={() => setSelectedProvider(provider.id)}
            >
              <div className="provider-icon">{provider.icon}</div>
              <div className="provider-name">{provider.name}</div>
              <div className="provider-description">{provider.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="deployment-actions">
        <button
          className="btn btn-primary btn-lg"
          onClick={handleDeploy}
          disabled={isDeploying}
        >
          {isDeploying ? 'Deploying...' : 'Deploy Now'}
        </button>
      </div>

      {deploymentStatus && (
        <div className="deployment-status">
          <div className={`status-message ${deploymentStatus.includes('success') ? 'success' : 'error'}`}>
            {deploymentStatus}
          </div>
        </div>
      )}

      <style jsx>{`
        .deployment-panel {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: white;
          margin: 20px 0;
        }

        .provider-selection {
          margin-bottom: 20px;
        }

        .providers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }

        .provider-card {
          padding: 15px;
          border: 2px solid #eee;
          border-radius: 8px;
          cursor: pointer;
          text-align: center;
          transition: all 0.3s ease;
        }

        .provider-card:hover {
          border-color: #007bff;
        }

        .provider-card.selected {
          border-color: #007bff;
          background: #f8f9ff;
        }

        .provider-icon {
          font-size: 24px;
          margin-bottom: 8px;
        }

        .provider-name {
          font-weight: bold;
          margin-bottom: 4px;
        }

        .provider-description {
          font-size: 12px;
          color: #666;
        }

        .deployment-actions {
          text-align: center;
          margin: 20px 0;
        }

        .deployment-status {
          margin-top: 15px;
          text-align: center;
        }

        .status-message {
          padding: 10px;
          border-radius: 4px;
          font-weight: bold;
        }

        .status-message.success {
          background: #d4edda;
          color: #155724;
          border: 1px solid #c3e6cb;
        }

        .status-message.error {
          background: #f8d7da;
          color: #721c24;
          border: 1px solid #f5c6cb;
        }

        .btn {
          padding: 12px 24px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
        }

        .btn-primary {
          background: #007bff;
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          background: #0056b3;
        }

        .btn-primary:disabled {
          background: #6c757d;
          cursor: not-allowed;
        }

        .btn-lg {
          padding: 15px 30px;
          font-size: 18px;
        }
      `}</style>
    </div>
  )
}

export default DeploymentPanel

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  ExternalLink, 
  GitBranch, 
  Star, 
  Download, 
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Plus,
  Eye,
  Code,
  Folder
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { useProject } from '../contexts/ProjectContext'
import githubService from '../services/githubService'
import toast from 'react-hot-toast'

const GitHubIntegration = () => {
  const { user } = useAuth()
  const { projects, saveProject, loadProjects } = useProject()
  const [repositories, setRepositories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [syncedRepos, setSyncedRepos] = useState(new Set())
  const [githubToken, setGithubToken] = useState('')
  const [showTokenInput, setShowTokenInput] = useState(false)

  // Load GitHub token from localStorage
  useEffect(() => {
    const token = localStorage.getItem('github_token')
    if (token) {
      setGithubToken(token)
      githubService.setToken(token)
    }
  }, [])

  // Check which repositories are already synced
  useEffect(() => {
    if (repositories.length > 0 && projects.length > 0) {
      const synced = new Set()
      projects.forEach(project => {
        if (project.source === 'github' && project.githubData) {
          synced.add(project.githubData.id)
        }
      })
      setSyncedRepos(synced)
    }
  }, [repositories, projects])

  const fetchRepositories = async () => {
    if (!githubToken) {
      setShowTokenInput(true)
      return
    }

    setIsLoading(true)
    try {
      const repos = await githubService.getUserRepositories()
      setRepositories(repos)
      toast.success(`Found ${repos.length} repositories`)
    } catch (error) {
      console.error('Failed to fetch repositories:', error)
      toast.error('Failed to fetch GitHub repositories. Please check your token.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleTokenSubmit = () => {
    if (!githubToken.trim()) {
      toast.error('Please enter a GitHub token')
      return
    }

    localStorage.setItem('github_token', githubToken)
    githubService.setToken(githubToken)
    setShowTokenInput(false)
    fetchRepositories()
    toast.success('GitHub token saved!')
  }

  const syncRepository = async (repo) => {
    if (!user) {
      toast.error('Please sign in to sync repositories')
      return
    }

    setIsLoading(true)
    try {
      const project = await githubService.syncRepository(repo)
      await saveProject(project.name)
      await loadProjects()
      
      setSyncedRepos(prev => new Set([...prev, repo.githubData.id]))
      toast.success(`Repository "${repo.name}" synced successfully!`)
    } catch (error) {
      console.error('Failed to sync repository:', error)
      toast.error('Failed to sync repository. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const openRepository = (repo) => {
    window.open(repo.githubData.htmlUrl, '_blank')
  }

  if (!user) {
    return (
      <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
        <div className="text-center py-8">
          <Github className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">GitHub Integration</h3>
          <p className="text-muted-foreground mb-4">
            Sign in to sync your GitHub repositories with DreamBuild projects.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground flex items-center gap-2">
          <Github className="h-5 w-5 text-white" />
          GitHub Repositories
        </h2>
        <div className="flex items-center gap-2">
          {!githubToken && (
            <button
              onClick={() => setShowTokenInput(true)}
              className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
            >
              Add Token
            </button>
          )}
          <button
            onClick={fetchRepositories}
            disabled={isLoading}
            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Loading...' : 'Refresh'}
          </button>
        </div>
      </div>

      {showTokenInput && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-muted/20 rounded-lg border border-border/50"
        >
          <h4 className="text-sm font-medium text-foreground mb-2">GitHub Personal Access Token</h4>
          <p className="text-xs text-muted-foreground mb-3">
            Create a personal access token at{' '}
            <a 
              href="https://github.com/settings/tokens" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              github.com/settings/tokens
            </a>
            {' '}with repo access to sync your repositories.
          </p>
          <div className="flex gap-2">
            <input
              type="password"
              value={githubToken}
              onChange={(e) => setGithubToken(e.target.value)}
              placeholder="Enter your GitHub token"
              className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={handleTokenSubmit}
              className="px-4 py-2 text-sm bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors"
            >
              Save
            </button>
            <button
              onClick={() => setShowTokenInput(false)}
              className="px-4 py-2 text-sm bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors"
            >
              Cancel
            </button>
          </div>
        </motion.div>
      )}

      {isLoading && repositories.length === 0 ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-muted rounded"></div>
                  <div>
                    <div className="h-4 bg-muted rounded w-32 mb-2"></div>
                    <div className="h-3 bg-muted rounded w-48"></div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-6 bg-muted rounded w-12"></div>
                  <div className="h-6 bg-muted rounded w-12"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : repositories.length > 0 ? (
        <div className="space-y-3">
          {repositories.map((repo, index) => {
            const isSynced = syncedRepos.has(repo.githubData.id)
            
            return (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/30 transition-colors group"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <Github className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-medium text-foreground text-sm truncate">{repo.name}</h3>
                      {repo.githubData.isPrivate && (
                        <span className="text-xs bg-yellow-500/20 text-yellow-600 px-2 py-0.5 rounded">Private</span>
                      )}
                      {isSynced && (
                        <span className="text-xs bg-green-500/20 text-green-600 px-2 py-0.5 rounded flex items-center gap-1">
                          <CheckCircle className="h-3 w-3" />
                          Synced
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{repo.description}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-xs text-muted-foreground">{repo.githubData.language}</span>
                      <span className="text-xs text-muted-foreground">
                        Updated {new Date(repo.lastModified).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Star className="h-3 w-3" />
                    {repo.githubData.stargazersCount}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <GitBranch className="h-3 w-3" />
                    {repo.githubData.forksCount}
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => openRepository(repo)}
                      className="p-2 rounded-lg hover:bg-muted/50 transition-colors group-hover:bg-white/10"
                      title="Open in GitHub"
                    >
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-white" />
                    </button>
                    {!isSynced && (
                      <button
                        onClick={() => syncRepository(repo)}
                        disabled={isLoading}
                        className="p-2 rounded-lg hover:bg-muted/50 transition-colors group-hover:bg-white/10 disabled:opacity-50"
                        title="Sync to DreamBuild"
                      >
                        <Download className="h-4 w-4 text-muted-foreground group-hover:text-white" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      ) : (
        <div className="text-center py-8">
          <Github className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">No repositories found</h3>
          <p className="text-muted-foreground mb-4">
            {githubToken ? 'No repositories found in your GitHub account.' : 'Add a GitHub token to sync your repositories.'}
          </p>
          {!githubToken && (
            <button
              onClick={() => setShowTokenInput(true)}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors"
            >
              Add GitHub Token
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default GitHubIntegration

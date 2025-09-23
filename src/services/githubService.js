// GitHub Service for integrating GitHub repositories with DreamBuild projects
class GitHubService {
  constructor() {
    this.baseUrl = 'https://api.github.com'
    this.token = null
  }

  // Set GitHub token for API access
  setToken(token) {
    this.token = token
  }

  // Get headers for API requests
  getHeaders() {
    const headers = {
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    }
    
    if (this.token) {
      headers['Authorization'] = `token ${this.token}`
    }
    
    return headers
  }

  // Fetch user's repositories
  async getUserRepositories() {
    if (!this.token) {
      throw new Error('GitHub token required')
    }

    try {
      const response = await fetch(`${this.baseUrl}/user/repos?sort=updated&per_page=100`, {
        headers: this.getHeaders()
      })

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }

      const repos = await response.json()
      return repos.map(repo => this.transformRepository(repo))
    } catch (error) {
      console.error('Failed to fetch GitHub repositories:', error)
      throw error
    }
  }

  // Transform GitHub repository to DreamBuild project format
  transformRepository(repo) {
    return {
      id: `github_${repo.id}`,
      name: repo.name,
      description: repo.description || 'No description',
      type: this.detectProjectType(repo),
      status: 'github_synced',
      lastModified: new Date(repo.updated_at),
      files: 0, // Will be populated when files are fetched
      size: 'Unknown',
      tags: this.extractTags(repo),
      preview: repo.owner.avatar_url,
      githubData: {
        id: repo.id,
        fullName: repo.full_name,
        htmlUrl: repo.html_url,
        cloneUrl: repo.clone_url,
        language: repo.language,
        stargazersCount: repo.stargazers_count,
        forksCount: repo.forks_count,
        isPrivate: repo.private,
        defaultBranch: repo.default_branch,
        owner: repo.owner.login
      },
      source: 'github'
    }
  }

  // Detect project type based on repository data
  detectProjectType(repo) {
    const name = repo.name.toLowerCase()
    const description = (repo.description || '').toLowerCase()
    const language = repo.language?.toLowerCase()

    // Check for specific project types
    if (name.includes('api') || name.includes('backend') || name.includes('server')) {
      return 'api'
    }
    if (name.includes('mobile') || name.includes('app') || name.includes('ios') || name.includes('android')) {
      return 'mobile'
    }
    if (name.includes('dashboard') || name.includes('admin')) {
      return 'dashboard'
    }
    if (name.includes('ecommerce') || name.includes('shop') || name.includes('store')) {
      return 'ecommerce'
    }
    if (name.includes('portfolio') || name.includes('personal')) {
      return 'web'
    }

    // Check by language
    if (language === 'javascript' || language === 'typescript') {
      return 'web'
    }
    if (language === 'python') {
      return 'api'
    }
    if (language === 'java' || language === 'kotlin') {
      return 'mobile'
    }

    // Default to web
    return 'web'
  }

  // Extract tags from repository
  extractTags(repo) {
    const tags = []
    
    if (repo.language) {
      tags.push(repo.language)
    }
    
    if (repo.topics && repo.topics.length > 0) {
      tags.push(...repo.topics.slice(0, 3)) // Limit to 3 topics
    }

    // Add common tags based on repository name/description
    const name = repo.name.toLowerCase()
    const description = (repo.description || '').toLowerCase()
    
    if (name.includes('react') || description.includes('react')) {
      tags.push('React')
    }
    if (name.includes('vue') || description.includes('vue')) {
      tags.push('Vue.js')
    }
    if (name.includes('angular') || description.includes('angular')) {
      tags.push('Angular')
    }
    if (name.includes('node') || description.includes('node')) {
      tags.push('Node.js')
    }
    if (name.includes('express') || description.includes('express')) {
      tags.push('Express')
    }
    if (name.includes('mongodb') || description.includes('mongodb')) {
      tags.push('MongoDB')
    }
    if (name.includes('postgres') || description.includes('postgres')) {
      tags.push('PostgreSQL')
    }

    return [...new Set(tags)] // Remove duplicates
  }

  // Fetch repository files
  async getRepositoryFiles(repoFullName, branch = 'main') {
    if (!this.token) {
      throw new Error('GitHub token required')
    }

    try {
      const response = await fetch(
        `${this.baseUrl}/repos/${repoFullName}/git/trees/${branch}?recursive=1`,
        { headers: this.getHeaders() }
      )

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }

      const data = await response.json()
      return data.tree || []
    } catch (error) {
      console.error('Failed to fetch repository files:', error)
      throw error
    }
  }

  // Fetch file content
  async getFileContent(repoFullName, filePath, branch = 'main') {
    if (!this.token) {
      throw new Error('GitHub token required')
    }

    try {
      const response = await fetch(
        `${this.baseUrl}/repos/${repoFullName}/contents/${filePath}?ref=${branch}`,
        { headers: this.getHeaders() }
      )

      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.type === 'file' && data.content) {
        // Decode base64 content
        return atob(data.content)
      }
      
      return null
    } catch (error) {
      console.error('Failed to fetch file content:', error)
      throw error
    }
  }

  // Convert GitHub repository to DreamBuild project
  async convertRepositoryToProject(repo) {
    try {
      const files = await this.getRepositoryFiles(repo.full_name, repo.default_branch)
      
      // Filter for common web development files
      const webFiles = files.filter(file => 
        file.type === 'blob' && 
        this.isWebFile(file.path)
      )

      // Create project files object
      const projectFiles = {}
      
      for (const file of webFiles.slice(0, 10)) { // Limit to 10 files
        try {
          const content = await this.getFileContent(repo.full_name, file.path, repo.default_branch)
          if (content) {
            projectFiles[file.path] = content
          }
        } catch (error) {
          console.warn(`Failed to fetch content for ${file.path}:`, error)
        }
      }

      return {
        id: `github_${repo.id}`,
        name: repo.name,
        description: repo.description || 'Imported from GitHub',
        files: projectFiles,
        activeFile: this.getDefaultFile(projectFiles),
        config: {
          appType: this.detectProjectType(repo),
          language: repo.language?.toLowerCase() || 'javascript',
          styling: this.detectStyling(projectFiles),
          database: this.detectDatabase(projectFiles),
          auth: this.detectAuth(projectFiles)
        },
        lastModified: new Date(repo.updated_at),
        githubData: {
          id: repo.id,
          fullName: repo.full_name,
          htmlUrl: repo.html_url,
          cloneUrl: repo.clone_url,
          language: repo.language,
          stargazersCount: repo.stargazers_count,
          forksCount: repo.forks_count,
          isPrivate: repo.private,
          defaultBranch: repo.default_branch,
          owner: repo.owner.login
        },
        source: 'github'
      }
    } catch (error) {
      console.error('Failed to convert repository to project:', error)
      throw error
    }
  }

  // Check if file is a web development file
  isWebFile(filePath) {
    const webExtensions = [
      '.html', '.htm', '.css', '.scss', '.sass', '.less',
      '.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte',
      '.php', '.py', '.rb', '.go', '.rs', '.java',
      '.json', '.xml', '.yaml', '.yml', '.md', '.txt'
    ]
    
    return webExtensions.some(ext => filePath.toLowerCase().endsWith(ext))
  }

  // Get default file to open
  getDefaultFile(files) {
    const priority = ['index.html', 'index.js', 'index.jsx', 'index.ts', 'index.tsx', 'app.js', 'main.js']
    
    for (const file of priority) {
      if (files[file]) {
        return file
      }
    }
    
    return Object.keys(files)[0] || 'index.html'
  }

  // Detect styling framework
  detectStyling(files) {
    const fileNames = Object.keys(files).join(' ').toLowerCase()
    
    if (fileNames.includes('tailwind') || fileNames.includes('@tailwind')) {
      return 'tailwind'
    }
    if (fileNames.includes('bootstrap') || fileNames.includes('@bootstrap')) {
      return 'bootstrap'
    }
    if (fileNames.includes('styled-components') || fileNames.includes('styled-components')) {
      return 'styled-components'
    }
    if (fileNames.includes('sass') || fileNames.includes('scss')) {
      return 'sass'
    }
    
    return 'css'
  }

  // Detect database
  detectDatabase(files) {
    const fileNames = Object.keys(files).join(' ').toLowerCase()
    const content = Object.values(files).join(' ').toLowerCase()
    
    if (content.includes('mongodb') || content.includes('mongoose')) {
      return 'mongodb'
    }
    if (content.includes('postgresql') || content.includes('postgres')) {
      return 'postgresql'
    }
    if (content.includes('mysql')) {
      return 'mysql'
    }
    if (content.includes('sqlite')) {
      return 'sqlite'
    }
    if (content.includes('firebase') || content.includes('firestore')) {
      return 'firebase'
    }
    
    return 'none'
  }

  // Detect authentication
  detectAuth(files) {
    const content = Object.values(files).join(' ').toLowerCase()
    
    if (content.includes('firebase') && content.includes('auth')) {
      return 'firebase'
    }
    if (content.includes('auth0')) {
      return 'auth0'
    }
    if (content.includes('jwt') || content.includes('jsonwebtoken')) {
      return 'jwt'
    }
    if (content.includes('passport')) {
      return 'passport'
    }
    
    return 'none'
  }

  // Sync repository with DreamBuild project
  async syncRepository(repo, projectId = null) {
    try {
      const project = await this.convertRepositoryToProject(repo)
      
      if (projectId) {
        project.id = projectId
      }
      
      return project
    } catch (error) {
      console.error('Failed to sync repository:', error)
      throw error
    }
  }
}

export default new GitHubService()

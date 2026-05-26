const STORAGE_KEY = 'dreambuild_repositories_v1'

const clone = (value) => JSON.parse(JSON.stringify(value || {}))

const createId = (prefix) => `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`

const hashFiles = (files = {}) => {
  const payload = Object.keys(files)
    .sort()
    .map((name) => `${name}:${files[name] || ''}`)
    .join('|')

  let hash = 0
  for (let i = 0; i < payload.length; i += 1) {
    hash = ((hash << 5) - hash + payload.charCodeAt(i)) | 0
  }
  return Math.abs(hash).toString(16).padStart(8, '0').slice(0, 8)
}

const loadStore = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')
  } catch {
    return {}
  }
}

const saveStore = (store) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store))
}

const getRepoKey = (project) => project?.id || project?.name || 'untitled-project'

const buildInitialRepo = (project) => ({
  id: createId('repo'),
  projectKey: getRepoKey(project),
  name: project?.name || 'Untitled Project',
  defaultBranch: 'main',
  currentBranch: 'main',
  branches: {
    main: {
      name: 'main',
      createdAt: new Date().toISOString(),
      head: null
    }
  },
  commits: [],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
})

const getRepository = (project) => {
  const store = loadStore()
  const key = getRepoKey(project)
  if (!store[key]) {
    store[key] = buildInitialRepo(project)
    saveStore(store)
  }
  return store[key]
}

const saveRepository = (project, repository) => {
  const store = loadStore()
  store[getRepoKey(project)] = {
    ...repository,
    updatedAt: new Date().toISOString()
  }
  saveStore(store)
  return store[getRepoKey(project)]
}

const getHeadCommit = (repository) => {
  const headId = repository.branches?.[repository.currentBranch]?.head
  return repository.commits.find((commit) => commit.id === headId) || null
}

const compareFiles = (baseFiles = {}, currentFiles = {}) => {
  const names = Array.from(new Set([...Object.keys(baseFiles), ...Object.keys(currentFiles)])).sort()
  return names.reduce((changes, filename) => {
    const before = baseFiles[filename]
    const after = currentFiles[filename]
    if (before === undefined) changes.push({ filename, status: 'added' })
    else if (after === undefined) changes.push({ filename, status: 'deleted' })
    else if (before !== after) changes.push({ filename, status: 'modified' })
    return changes
  }, [])
}

class DreamRepositoryService {
  getRepository(project) {
    return getRepository(project)
  }

  getStatus(project) {
    const repository = getRepository(project)
    const headCommit = getHeadCommit(repository)
    const baseFiles = headCommit?.files || {}
    const changes = compareFiles(baseFiles, project?.files || {})
    return {
      repository,
      headCommit,
      changes,
      isClean: changes.length === 0 && Boolean(headCommit),
      hasInitialCommit: Boolean(headCommit),
      currentHash: hashFiles(project?.files)
    }
  }

  commit(project, message) {
    const repository = getRepository(project)
    const changes = this.getStatus(project).changes
    const commit = {
      id: createId('commit'),
      hash: hashFiles(project?.files),
      message: message || 'Update project files',
      branch: repository.currentBranch,
      files: clone(project?.files),
      changedFiles: changes,
      author: 'DreamBuild User',
      createdAt: new Date().toISOString()
    }

    const nextRepository = {
      ...repository,
      name: project?.name || repository.name,
      commits: [commit, ...repository.commits],
      branches: {
        ...repository.branches,
        [repository.currentBranch]: {
          ...repository.branches[repository.currentBranch],
          head: commit.id
        }
      }
    }

    return {
      repository: saveRepository(project, nextRepository),
      commit
    }
  }

  createBranch(project, branchName) {
    const safeName = String(branchName || '').trim().replace(/\s+/g, '-').toLowerCase()
    if (!safeName) throw new Error('Branch name is required')

    const repository = getRepository(project)
    if (repository.branches[safeName]) throw new Error('Branch already exists')

    const currentHead = repository.branches[repository.currentBranch]?.head || null
    const nextRepository = {
      ...repository,
      currentBranch: safeName,
      branches: {
        ...repository.branches,
        [safeName]: {
          name: safeName,
          createdAt: new Date().toISOString(),
          head: currentHead
        }
      }
    }

    return saveRepository(project, nextRepository)
  }

  switchBranch(project, branchName) {
    const repository = getRepository(project)
    if (!repository.branches[branchName]) throw new Error('Branch not found')
    const nextRepository = saveRepository(project, {
      ...repository,
      currentBranch: branchName
    })
    const headCommit = getHeadCommit(nextRepository)
    return {
      repository: nextRepository,
      files: headCommit ? clone(headCommit.files) : null,
      headCommit
    }
  }

  restoreCommit(project, commitId) {
    const repository = getRepository(project)
    const commit = repository.commits.find((item) => item.id === commitId)
    if (!commit) throw new Error('Commit not found')
    return clone(commit.files)
  }

  importRepository(project, payload) {
    const repository = payload?.repository || payload
    if (!repository || !repository.branches || !Array.isArray(repository.commits)) {
      throw new Error('Invalid DreamBuild repository file')
    }

    const normalizedRepository = {
      ...repository,
      projectKey: getRepoKey(project),
      name: project?.name || repository.name || 'Imported Repository',
      currentBranch: repository.currentBranch || repository.defaultBranch || 'main',
      defaultBranch: repository.defaultBranch || 'main',
      updatedAt: new Date().toISOString()
    }

    return saveRepository(project, normalizedRepository)
  }

  getCapabilities() {
    return [
      'Local repository storage',
      'Commit snapshots',
      'Branch creation',
      'Branch checkout with file restore',
      'Commit history',
      'Restore any commit',
      'Change tracking',
      'Repository export/import'
    ]
  }

  exportRepository(project) {
    const repository = getRepository(project)
    const payload = {
      repository,
      exportedAt: new Date().toISOString()
    }
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `${repository.name.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}-repository.json`
    anchor.click()
    URL.revokeObjectURL(url)
  }
}

export default new DreamRepositoryService()

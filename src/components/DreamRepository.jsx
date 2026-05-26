import React, { useEffect, useState } from 'react'
import { Archive, CheckCircle, Download, GitBranch, GitCommit, History, Plus, RefreshCw, RotateCcw, Upload } from 'lucide-react'
import toast from 'react-hot-toast'
import { useProject } from '../contexts/ProjectContext'
import dreamRepositoryService from '../services/dreamRepositoryService'

const statusStyles = {
  added: 'text-emerald-300 bg-emerald-500/12 border-emerald-400/30',
  modified: 'text-amber-300 bg-amber-500/12 border-amber-400/30',
  deleted: 'text-rose-300 bg-rose-500/12 border-rose-400/30'
}

export default function DreamRepository() {
  const { currentProject, replaceProjectFiles } = useProject()
  const [status, setStatus] = useState(null)
  const [message, setMessage] = useState('')
  const [branchName, setBranchName] = useState('')

  const refresh = () => {
    setStatus(dreamRepositoryService.getStatus(currentProject))
  }

  useEffect(() => {
    refresh()
  }, [currentProject])

  const handleCommit = () => {
    const commitMessage = message.trim() || 'Update project files'
    const result = dreamRepositoryService.commit(currentProject, commitMessage)
    setMessage('')
    setStatus(dreamRepositoryService.getStatus(currentProject))
    toast.success(`Committed ${result.commit.hash}`)
  }

  const handleCreateBranch = () => {
    try {
      dreamRepositoryService.createBranch(currentProject, branchName)
      setBranchName('')
      refresh()
      toast.success('Branch created')
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleSwitchBranch = (name) => {
    try {
      const result = dreamRepositoryService.switchBranch(currentProject, name)
      if (result.files) {
        replaceProjectFiles(result.files, null, {
          message: `Checked out ${name} branch files`
        })
      }
      refresh()
      toast.success(`Switched to ${name}`)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleImportRepository = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    try {
      const text = await file.text()
      const payload = JSON.parse(text)
      dreamRepositoryService.importRepository(currentProject, payload)
      refresh()
      toast.success('Repository imported')
    } catch (error) {
      toast.error(error.message)
    } finally {
      event.target.value = ''
    }
  }

  const handleRestore = (commitId) => {
    try {
      const files = dreamRepositoryService.restoreCommit(currentProject, commitId)
      replaceProjectFiles(files)
      refresh()
    } catch (error) {
      toast.error(error.message)
    }
  }

  if (!status) return null

  const { repository, changes, headCommit } = status
  const branchNames = Object.keys(repository.branches || {})
  const capabilities = dreamRepositoryService.getCapabilities()

  return (
    <div className="dreambuild-repository h-full overflow-auto p-5">
      <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 shadow-2xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-blue-500/15 p-3 text-blue-200">
                <Archive className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">DreamBuild Repository</h2>
                <p className="text-sm text-slate-300">
                  GitHub-style version control built into DreamBuild. No external account required.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-600 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800">
              <Upload className="h-4 w-4" />
              Import Repo
              <input
                type="file"
                accept="application/json,.json"
                onChange={handleImportRepository}
                className="hidden"
              />
            </label>
            <button
              onClick={() => dreamRepositoryService.exportRepository(currentProject)}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800"
            >
              <Download className="h-4 w-4" />
              Export Repo
            </button>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-4">
          <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
            <div className="text-xs uppercase tracking-wide text-slate-400">Repository</div>
            <div className="mt-1 font-semibold text-white">{repository.name}</div>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
            <div className="text-xs uppercase tracking-wide text-slate-400">Branch</div>
            <div className="mt-1 flex items-center gap-2 font-semibold text-white">
              <GitBranch className="h-4 w-4 text-blue-300" />
              {repository.currentBranch}
            </div>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
            <div className="text-xs uppercase tracking-wide text-slate-400">Commits</div>
            <div className="mt-1 font-semibold text-white">{repository.commits.length}</div>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-4">
            <div className="text-xs uppercase tracking-wide text-slate-400">Status</div>
            <div className={`mt-1 font-semibold ${changes.length ? 'text-amber-300' : 'text-emerald-300'}`}>
              {changes.length ? `${changes.length} change${changes.length === 1 ? '' : 's'}` : headCommit ? 'Clean' : 'No commits yet'}
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-xl border border-blue-400/20 bg-blue-500/10 p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-bold text-blue-100">
            <CheckCircle className="h-4 w-4" />
            Full local repository features
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <div key={capability} className="rounded-lg border border-blue-300/10 bg-slate-950/60 px-3 py-2 text-xs font-semibold text-slate-200">
                {capability}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-400">
            This is DreamBuild's built-in repository. GitHub remote push/pull still uses the separate GitHub integration when a connected remote is needed.
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-white">Changes</h3>
              <p className="text-sm text-slate-400">Commit snapshots before big AI edits, design changes, or deployments.</p>
            </div>
            <button
              onClick={refresh}
              className="rounded-lg border border-slate-700 p-2 text-slate-300 hover:bg-slate-800"
              title="Refresh repository status"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-2">
            {changes.length === 0 ? (
              <div className="rounded-xl border border-emerald-400/25 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                Working tree is clean. Your current files match the latest repository commit.
              </div>
            ) : (
              changes.map((change) => (
                <div
                  key={`${change.status}-${change.filename}`}
                  className={`flex items-center justify-between rounded-xl border px-3 py-2 text-sm ${statusStyles[change.status]}`}
                >
                  <span className="font-medium">{change.filename}</span>
                  <span className="capitalize">{change.status}</span>
                </div>
              ))
            )}
          </div>

          <div className="mt-5 rounded-xl border border-slate-700 bg-slate-900/70 p-4">
            <label className="text-sm font-semibold text-slate-200" htmlFor="dream-repo-commit">
              Commit message
            </label>
            <textarea
              id="dream-repo-commit"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Describe what changed, like: Add booking checkout flow"
              className="mt-2 min-h-24 w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-blue-400"
            />
            <button
              onClick={handleCommit}
              disabled={changes.length === 0 && Boolean(headCommit)}
              className="mt-3 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-bold text-white hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <GitCommit className="h-4 w-4" />
              Commit Snapshot
            </button>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5">
          <h3 className="text-lg font-bold text-white">Branches</h3>
          <p className="text-sm text-slate-400">Create branches for experiments before changing the main version.</p>

          <div className="mt-4 flex gap-2">
            <input
              value={branchName}
              onChange={(event) => setBranchName(event.target.value)}
              placeholder="feature-name"
              className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 outline-none focus:border-blue-400"
            />
            <button
              onClick={handleCreateBranch}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-800 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-700"
            >
              <Plus className="h-4 w-4" />
              Branch
            </button>
          </div>

          <div className="mt-4 space-y-2">
            {branchNames.map((name) => (
              <button
                key={name}
                onClick={() => handleSwitchBranch(name)}
                className={`flex w-full items-center justify-between rounded-xl border px-3 py-2 text-sm ${
                  name === repository.currentBranch
                    ? 'border-blue-400/60 bg-blue-500/15 text-blue-100'
                    : 'border-slate-700 bg-slate-900/70 text-slate-200 hover:bg-slate-800'
                }`}
              >
                <span className="flex items-center gap-2">
                  <GitBranch className="h-4 w-4" />
                  {name}
                </span>
                {name === repository.currentBranch ? <span>Current</span> : <span>Switch</span>}
              </button>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-5 rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5">
        <h3 className="flex items-center gap-2 text-lg font-bold text-white">
          <History className="h-5 w-5 text-blue-300" />
          Commit History
        </h3>

        <div className="mt-4 space-y-3">
          {repository.commits.length === 0 ? (
            <div className="rounded-xl border border-slate-700 bg-slate-900/70 p-4 text-sm text-slate-300">
              No commits yet. Create the first repository snapshot to start tracking this project.
            </div>
          ) : (
            repository.commits.map((commit) => (
              <div key={commit.id} className="rounded-xl border border-slate-700 bg-slate-900/70 p-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-white">{commit.message}</div>
                    <div className="mt-1 text-xs text-slate-400">
                      {commit.hash} • {commit.branch} • {new Date(commit.createdAt).toLocaleString()}
                    </div>
                  </div>
                  <button
                    onClick={() => handleRestore(commit.id)}
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-3 py-1.5 text-xs font-semibold text-slate-100 hover:bg-slate-800"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                    Restore
                  </button>
                </div>
                {commit.changedFiles?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {commit.changedFiles.map((file) => (
                      <span key={`${commit.id}-${file.filename}`} className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">
                        {file.status}: {file.filename}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  )
}

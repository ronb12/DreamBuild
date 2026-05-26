import React, { useMemo, useState } from 'react'
import { CheckCircle, CloudCog, KeyRound, Loader2, Play, Server, Wrench } from 'lucide-react'
import { toast } from 'react-hot-toast'
import { useProject } from '../contexts/ProjectContext'
import cloudToolchainRunnerService from '../services/cloudToolchainRunnerService'

const CloudToolchainRunnerPanel = () => {
  const { currentProject } = useProject()
  const [selectedTarget, setSelectedTarget] = useState(() => cloudToolchainRunnerService.detectTarget(currentProject))
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmittingParallel, setIsSubmittingParallel] = useState(false)
  const [jobResult, setJobResult] = useState(null)
  const [parallelResult, setParallelResult] = useState(null)

  const runnerStatus = useMemo(() => cloudToolchainRunnerService.getStatus(), [])
  const requirements = cloudToolchainRunnerService.getRequirements(selectedTarget)
  const targets = Object.entries(runnerStatus.supportedTargets)

  const handleCreateBuildJob = async () => {
    setIsSubmitting(true)
    setJobResult(null)

    try {
      const result = await cloudToolchainRunnerService.createBuildJob(currentProject, {
        target: selectedTarget
      })
      setJobResult(result)
      toast.success(result.status === 'needs-runner-connection' ? 'Build request saved' : 'Build job queued')
    } catch (error) {
      console.error('Cloud runner build request failed:', error)
      toast.error(error.message || 'Build request failed')
      setJobResult({
        success: false,
        status: 'failed',
        message: error.message
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCreateParallelBuilds = async () => {
    setIsSubmittingParallel(true)
    setParallelResult(null)

    try {
      const result = await cloudToolchainRunnerService.createParallelBuildJobs(currentProject, [
        {
          projectName: `${currentProject?.name || 'DreamBuild'} Website`,
          target: 'web',
          buildPrompt: 'Build a polished customer-facing website with responsive sections and a contact flow.'
        },
        {
          projectName: `${currentProject?.name || 'DreamBuild'} Admin Portal`,
          target: 'web',
          buildPrompt: 'Build an admin dashboard with user management, analytics, forms, and settings.'
        },
        {
          projectName: `${currentProject?.name || 'DreamBuild'} API`,
          target: 'backend',
          buildPrompt: 'Build a backend API with validation, health checks, and deployment-ready structure.'
        }
      ])
      setParallelResult(result)
      toast.success(`Queued ${result.jobs.length} parallel builds`)
    } catch (error) {
      console.error('Parallel build request failed:', error)
      toast.error(error.message || 'Parallel build request failed')
      setParallelResult({
        success: false,
        jobs: [],
        message: error.message
      })
    } finally {
      setIsSubmittingParallel(false)
    }
  }

  return (
    <div className="space-y-4 rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-primary">
            <CloudCog className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-[0.22em]">DreamBuild Cloud Runner</span>
          </div>
          <h3 className="mt-2 text-xl font-bold text-foreground">Run native, mobile, backend, and database builds from inside the app</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
            Browser preview still handles web projects instantly. For compiled languages, DreamBuild now creates an in-app build job and routes it to a connected runner instead of sending users away to install tools manually.
          </p>
        </div>
        <div className={`rounded-xl border px-4 py-3 text-sm ${
          runnerStatus.configured
            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
            : 'border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300'
        }`}>
          <div className="font-semibold">{runnerStatus.configured ? 'Runner Connected' : 'DreamBuild Cloud Queue'}</div>
          <div className="text-xs opacity-80">{runnerStatus.mode}</div>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
        {targets.map(([target, info]) => {
          const selected = selectedTarget === target
          return (
            <button
              key={target}
              onClick={() => setSelectedTarget(target)}
              className={`rounded-xl border p-3 text-left transition-all ${
                selected
                  ? 'border-primary bg-primary/10 shadow-sm'
                  : 'border-border/70 bg-background hover:border-primary/40'
              }`}
            >
              <div className="flex items-center gap-2 font-semibold text-foreground">
                {info.status === 'runs-in-browser' ? <CheckCircle className="h-4 w-4 text-emerald-500" /> : <Server className="h-4 w-4 text-primary" />}
                {info.label}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {info.status === 'runs-in-browser' ? 'Runs now' : 'Runner build'}
              </div>
            </button>
          )
        })}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-border/70 bg-muted/20 p-4">
          <div className="mb-3 flex items-center gap-2 font-semibold text-foreground">
            <Wrench className="h-4 w-4" />
            Required Toolchains
          </div>
          <div className="space-y-2">
            {requirements.requirements.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border/70 bg-muted/20 p-4">
          <div className="mb-3 flex items-center gap-2 font-semibold text-foreground">
            <KeyRound className="h-4 w-4" />
            Credential Checks
          </div>
          {requirements.credentials.length === 0 ? (
            <p className="text-sm text-muted-foreground">No external signing or deployment credentials required for browser preview.</p>
          ) : (
            <div className="space-y-2">
              {requirements.credentials.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <KeyRound className="h-4 w-4 text-amber-500" />
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="rounded-xl border border-border/70 bg-background p-4">
        <p className="text-sm leading-6 text-muted-foreground">{requirements.message}</p>
        <button
          onClick={handleCreateBuildJob}
          disabled={isSubmitting}
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 disabled:opacity-60"
        >
          {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
          {requirements.canRunNow ? 'Queue Build In DreamBuild' : 'Create Runner Setup Job'}
        </button>
      </div>

      {jobResult && (
        <div className={`rounded-xl border p-4 text-sm ${
          jobResult.success
            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200'
            : 'border-red-500/30 bg-red-500/10 text-red-800 dark:text-red-200'
        }`}>
          <div className="font-semibold">Build Request Status: {jobResult.status || 'created'}</div>
          <div className="mt-1">Job ID: {jobResult.jobId || jobResult.id || 'pending'}</div>
          <div className="mt-1">{jobResult.message}</div>
        </div>
      )}

      <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="font-semibold text-foreground">Parallel Build Queue</div>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-muted-foreground">
              DreamBuild can queue multiple apps or websites in the same batch. With a connected DreamBuild Cloud Runner, those jobs can be processed concurrently up to the runner's configured capacity. Without a runner, the app still tracks all jobs as queued build requests.
            </p>
          </div>
          <button
            onClick={handleCreateParallelBuilds}
            disabled={isSubmittingParallel}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-blue-400 disabled:opacity-60"
          >
            {isSubmittingParallel ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
            Queue 3 Parallel Builds
          </button>
        </div>

        {parallelResult && (
          <div className={`mt-4 rounded-xl border p-4 text-sm ${
            parallelResult.success
              ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200'
              : 'border-red-500/30 bg-red-500/10 text-red-800 dark:text-red-200'
          }`}>
            <div className="font-semibold">
              Parallel Batch: {parallelResult.success ? `${parallelResult.jobs.length} build jobs queued` : 'failed'}
            </div>
            {parallelResult.batchId && <div className="mt-1">Batch ID: {parallelResult.batchId}</div>}
            <div className="mt-3 grid gap-2 md:grid-cols-3">
              {(parallelResult.jobs || []).map((job, index) => (
                <div key={job.jobId || index} className="rounded-lg border border-current/20 bg-background/40 p-3">
                  <div className="font-semibold">Build {index + 1}</div>
                  <div className="mt-1 break-all text-xs">Job ID: {job.jobId || 'pending'}</div>
                  <div className="mt-1 text-xs">Status: {job.status || 'queued'}</div>
                  <div className="mt-1 text-xs">Source: {job.source || 'dreambuild-cloud-queue'}</div>
                </div>
              ))}
            </div>
            {parallelResult.message && <div className="mt-2">{parallelResult.message}</div>}
          </div>
        )}
      </div>
    </div>
  )
}

export default CloudToolchainRunnerPanel

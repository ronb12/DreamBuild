import React from 'react'
import { Bot, CheckCircle, CloudCog, Code2, Eye, FileCode2, GitBranch, Globe, ShieldAlert, TerminalSquare, Wrench } from 'lucide-react'

const capabilities = [
  {
    name: 'DreamBuild Agents',
    status: 'Live',
    icon: Bot,
    description: 'Autonomous planning, task breakdown, auto mode, iteration feed, and background quality monitoring.'
  },
  {
    name: 'DreamBuild Editor',
    status: 'Live',
    icon: Code2,
    description: 'In-app file editing, AI generation, incremental updates, multi-file projects, and language-aware scaffolds.'
  },
  {
    name: 'DreamBuild Self-Repair',
    status: 'Supported',
    icon: Wrench,
    description: 'Scans project files and applies safe repairs for common code issues while marking complex or unknown bugs for review.'
  },
  {
    name: 'DreamBuild Files',
    status: 'Live',
    icon: FileCode2,
    description: 'Project file tree, upload/download, generated files, active-file switching, and export flow.'
  },
  {
    name: 'DreamBuild Repository',
    status: 'Live',
    icon: GitBranch,
    description: 'Built-in commits, branches, snapshots, restore, repository export, and change tracking without GitHub.'
  },
  {
    name: 'DreamBuild Preview',
    status: 'Live',
    icon: Eye,
    description: 'Browser-rendered preview for generated web projects and hosted app routes.'
  },
  {
    name: 'DreamBuild Cloud',
    status: 'Live Queue',
    icon: CloudCog,
    description: 'Provider-neutral DreamBuild Cloud queue for hosted apps, runner build jobs, and parallel build batches without requiring Firebase as the product cloud.'
  },
  {
    name: 'DreamBuild Terminal',
    status: 'Runner Needed',
    icon: TerminalSquare,
    description: 'Terminal UI routes real commands to DreamBuild Desktop or Cloud Runner when connected; browser-only mode keeps command execution blocked or simulated.'
  },
  {
    name: 'DreamBuild Web Reach',
    status: 'Partial',
    icon: Globe,
    description: 'Can use browser-safe APIs and contextual web knowledge; full live browsing/control needs a connected browser runner.'
  },
  {
    name: 'DreamBuild Guardrails',
    status: 'Active',
    icon: ShieldAlert,
    description: 'The app labels simulated, queued, browser-limited, and live capabilities so customers are not promised fake automation.'
  }
]

const getStatusClass = (status) => {
  if (status === 'Live') return 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
  if (status === 'Active') return 'border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300'
  if (status === 'Live Queue') return 'border-blue-500/30 bg-blue-500/10 text-blue-700 dark:text-blue-300'
  if (status === 'Supported') return 'border-indigo-500/30 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300'
  if (status === 'Partial') return 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300'
  return 'border-slate-500/30 bg-slate-500/10 text-slate-700 dark:text-slate-300'
}

export default function DreamBuildStudioCapabilities() {
  return (
    <section className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">DreamBuild Studio</p>
          <h3 className="mt-2 text-xl font-bold text-foreground">DreamBuild-native developer workspace</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
            These are DreamBuild's own equivalents for AI coding, repository work, app preview, cloud hosting, and build orchestration.
          </p>
        </div>
        <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
          <CheckCircle className="mr-2 inline h-4 w-4" />
          Branded as DreamBuild
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {capabilities.map((capability) => {
          const Icon = capability.icon
          const statusClass = getStatusClass(capability.status)

          return (
            <article key={capability.name} className="rounded-xl border border-border/70 bg-background p-4">
              <div className="flex items-start gap-3">
                <div className={`rounded-xl border p-2 ${statusClass}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-semibold text-foreground">{capability.name}</h4>
                    <span className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${statusClass}`}>
                      {capability.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{capability.description}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

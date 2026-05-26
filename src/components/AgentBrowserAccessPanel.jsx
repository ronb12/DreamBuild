import React, { useEffect, useState } from 'react'
import { AlertTriangle, CheckCircle, CloudCog, Code2, Database, ExternalLink, Globe, Monitor, ShieldAlert, Wifi } from 'lucide-react'
import systemIntegrationService from '../services/systemIntegrationService'
import realTimeWebBrowsingService from '../services/realTimeWebBrowsingService'
import CloudToolchainRunnerPanel from './CloudToolchainRunnerPanel'
import DreamBuildStudioCapabilities from './DreamBuildStudioCapabilities'
import ExecutionConnectorPanel from './ExecutionConnectorPanel'
import InternetResearchPanel from './InternetResearchPanel'
import DreamBuildDatabasePanel from './DreamBuildDatabasePanel'

const AgentBrowserAccessPanel = () => {
  const [capabilities, setCapabilities] = useState(null)
  const [webStats, setWebStats] = useState(null)

  useEffect(() => {
    let isMounted = true

    const loadCapabilities = async () => {
      try {
        const browserCapabilities = await systemIntegrationService.getBrowserCapabilities()
        const browsingStats = realTimeWebBrowsingService.getBrowsingStats()

        if (isMounted) {
          setCapabilities(browserCapabilities)
          setWebStats(browsingStats)
        }
      } catch (error) {
        console.error('Failed to load DreamBuild capability status:', error)
      }
    }

    loadCapabilities()

    return () => {
      isMounted = false
    }
  }, [])

  const cards = [
    {
      title: 'DreamBuild Agents',
      status: 'Available',
      tone: 'success',
      icon: CheckCircle,
      description: 'The app has its own AI agent service for auto mode, task breakdown, continuous iteration, file-change simulation, quality checks, and background monitoring.'
    },
    {
      title: 'Code Error Self-Repair',
      status: 'Supported',
      tone: 'success',
      icon: Code2,
      description: 'DreamBuild includes debug and validation services that detect and attempt fixes for common syntax, DOM, event-handler, CSS, API, and performance issues. Complex or unknown bugs still need review.'
    },
    {
      title: 'Browser Preview',
      status: 'Available',
      tone: 'success',
      icon: Monitor,
      description: 'The builder includes a live preview surface so generated web apps can be rendered and checked inside DreamBuild.'
    },
    {
      title: 'Cloud Toolchain Runner',
      status: 'In-App Queue',
      tone: 'success',
      icon: CloudCog,
      description: 'Native, mobile, backend, database, and infrastructure projects now stay inside DreamBuild through a runner job that checks toolchains and credentials.'
    },
    {
      title: 'DreamBuild Database',
      status: 'Local + Runner Ready',
      tone: 'success',
      icon: Database,
      description: 'DreamBuild includes its own database layer for schema planning, generated CRUD helpers, seed data, migrations, local project persistence, and hosted database handoff through DreamBuild Database API or Cloud Runner.'
    },
    {
      title: 'Sourced Internet Research',
      status: 'Runner Ready',
      tone: 'success',
      icon: Wifi,
      description: 'DreamBuild now has a dedicated research capability for coding docs, image references, graphics/icons, and templates. Live arbitrary search requires DreamBuild Cloud Runner or a configured search API; curated sources and browser-safe APIs are available in-app.'
    },
    {
      title: 'General Web Browsing',
      status: 'Needs Connector',
      tone: 'warning',
      icon: Globe,
      description: 'The browser app can prepare sourced research and call allowed APIs. Full web crawling/search with citations needs a backend runner/search connector because browser CORS and security rules block arbitrary website scraping.'
    },
    {
      title: 'External Browser Control',
      status: 'Not Connected',
      tone: 'danger',
      icon: ShieldAlert,
      description: 'Real control of outside websites requires a backend browser runner or browser extension. The web app itself cannot automate arbitrary tabs because of browser security rules.'
    }
  ]

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-border/70 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-5 text-white shadow-lg shadow-primary/10">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Capability Verification</p>
            <h3 className="mt-2 text-2xl font-bold">Agents, Browser, and Internet Access</h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
              This panel separates live DreamBuild capabilities from browser-security limits, so customers are not promised fake automation.
            </p>
          </div>
          <div className="rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
            <div className="font-semibold">Web Context Service</div>
            <div className="text-cyan-200/80">{webStats?.isEnabled ? 'Enabled' : 'Checking...'}</div>
          </div>
        </div>
      </div>

      <ExecutionConnectorPanel />

      <DreamBuildDatabasePanel />

      <InternetResearchPanel />

      <div className="grid gap-4 lg:grid-cols-2">
        {cards.map((card) => {
          const Icon = card.icon
          const toneClass = card.tone === 'success'
            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300'
            : card.tone === 'danger'
              ? 'border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300'
              : 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300'

          return (
            <div key={card.title} className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className={`rounded-xl border p-3 ${toneClass}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-semibold text-foreground">{card.title}</h4>
                    <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${toneClass}`}>
                      {card.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <DreamBuildStudioCapabilities />

      <CloudToolchainRunnerPanel />

      <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-900 dark:text-amber-100">
        <div className="flex gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 flex-shrink-0" />
          <div>
            <div className="font-semibold">Runner connection required for compiled targets</div>
            <p className="mt-1 leading-6">
              DreamBuild can create and track the build from inside the app. A connected runner endpoint or worker must execute platform-specific compilers, signing, deployment, and private credentials because browsers cannot safely run those toolchains directly.
            </p>
          </div>
        </div>
      </div>

      {capabilities && (
        <div className="rounded-2xl border border-border/70 bg-muted/30 p-4 text-sm">
          <div className="mb-2 flex items-center gap-2 font-semibold text-foreground">
            <ExternalLink className="h-4 w-4" />
            Browser Security Status
          </div>
          <div className="grid gap-2 text-muted-foreground md:grid-cols-2">
            <span>System commands: {capabilities.canExecuteSystemCommands ? 'Available' : 'Blocked'}</span>
            <span>Local file system: {capabilities.canAccessFileSystem ? 'Available' : 'Blocked'}</span>
            <span>GitHub API: {capabilities.canAccessGitHub ? 'Available' : 'Allowed when configured'}</span>
            <span>Terminal process control: {capabilities.canAccessTerminal ? 'Available' : 'Blocked'}</span>
            <span>External browser control: {capabilities.canControlExternalBrowser ? 'Available' : 'Blocked'}</span>
            <span>Compiled builds: {capabilities.canRunCompiledTargets ? 'Available' : 'Needs connector'}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default AgentBrowserAccessPanel

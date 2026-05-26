import React, { useMemo, useState } from 'react'
import { AlertTriangle, CheckCircle, CloudCog, Monitor, TerminalSquare, Workflow } from 'lucide-react'
import executionConnectorService from '../services/executionConnectorService'

const capabilityRows = [
  {
    key: 'realTerminalAvailable',
    label: 'Real terminal commands',
    description: 'Runs shell commands through DreamBuild Desktop or Cloud Runner.'
  },
  {
    key: 'fullBrowserControlAvailable',
    label: 'Full browser control',
    description: 'Controls external browser sessions through an approved connector.'
  },
  {
    key: 'compiledExecutionAvailable',
    label: 'Compiled native/mobile/backend execution',
    description: 'Runs platform toolchains, signing, tests, and backend builds outside the browser sandbox.'
  }
]

export default function ExecutionConnectorPanel() {
  const [status, setStatus] = useState(() => executionConnectorService.getStatus())
  const connected = status.desktopConnected || status.cloudRunnerConnected
  const tone = connected
    ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-100'
    : 'border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-100'

  const connectorSummary = useMemo(() => {
    if (status.desktopConnected) return 'DreamBuild Desktop connected'
    if (status.cloudRunnerConnected) return 'DreamBuild Cloud Runner connected'
    return 'Connector required'
  }, [status])

  return (
    <section className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex items-center gap-2 text-primary">
            <Workflow className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-[0.22em]">Execution Connectors</span>
          </div>
          <h3 className="mt-2 text-xl font-bold text-foreground">Desktop App and Cloud Runner Gateways</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
            Real terminal commands, full browser control, and compiled native/mobile/backend execution now route through DreamBuild Desktop or DreamBuild Cloud Runner. If neither is connected, DreamBuild keeps the work queued instead of falsely claiming browser-only execution.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus(executionConnectorService.getStatus())}
          className={`rounded-xl border px-4 py-3 text-left text-sm font-semibold ${tone}`}
        >
          <div>{connectorSummary}</div>
          <div className="mt-1 text-xs opacity-80">Mode: {status.mode}</div>
        </button>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        {capabilityRows.map((row) => {
          const available = Boolean(status[row.key])
          return (
            <div key={row.key} className="rounded-xl border border-border/70 bg-background p-4">
              <div className="flex items-start gap-3">
                <div className={`rounded-xl border p-2 ${available ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-amber-500/30 bg-amber-500/10 text-amber-300'}`}>
                  {available ? <CheckCircle className="h-4 w-4" /> : <AlertTriangle className="h-4 w-4" />}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{row.label}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {available ? 'Available through connector' : 'Needs Desktop or Runner'}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{row.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-border/70 bg-muted/20 p-4">
          <div className="mb-2 flex items-center gap-2 font-semibold text-foreground">
            <Monitor className="h-4 w-4" />
            DreamBuild Desktop
          </div>
          <p className="text-sm leading-6 text-muted-foreground">
            Connect with <span className="font-semibold">VITE_DREAMBUILD_DESKTOP_URL</span> to enable local terminal, file-system access, browser control, and local toolchains.
          </p>
        </div>
        <div className="rounded-xl border border-border/70 bg-muted/20 p-4">
          <div className="mb-2 flex items-center gap-2 font-semibold text-foreground">
            <CloudCog className="h-4 w-4" />
            DreamBuild Cloud Runner
          </div>
          <p className="text-sm leading-6 text-muted-foreground">
            Connect with <span className="font-semibold">VITE_DREAMBUILD_RUNNER_URL</span> to run hosted terminal jobs, browser automation, tests, and compiled builds.
          </p>
        </div>
      </div>

      {!connected && (
        <div className="mt-4 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-sm text-amber-900 dark:text-amber-100">
          <TerminalSquare className="mr-2 inline h-4 w-4" />
          Browser-only mode is active. DreamBuild can design, generate, preview web projects, queue jobs, and track requests, but real shell/browser/toolchain execution waits for a Desktop or Cloud Runner connection.
        </div>
      )}
    </section>
  )
}

import React, { useMemo } from 'react'
import { CheckCircle, Database, HardDrive, KeyRound, Layers, ServerCog } from 'lucide-react'
import dreamBuildDatabaseService from '../services/dreamBuildDatabaseService'

const adapterIcons = {
  'dreambuild-tables': Database,
  'dreambuild-postgres': ServerCog,
  'dreambuild-kv': KeyRound,
  'dreambuild-blob': HardDrive
}

const DreamBuildDatabasePanel = () => {
  const status = useMemo(() => dreamBuildDatabaseService.getStatus(), [])
  const examplePlan = useMemo(() => (
    dreamBuildDatabaseService.createDatabasePlan('Build a booking app with customer accounts, payments, admin reports, and image uploads', {
      appType: 'booking app',
      features: ['accounts', 'payments', 'reports', 'uploads']
    })
  ), [])

  return (
    <section className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 p-5 text-white shadow-lg shadow-emerald-500/10">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">DreamBuild Database</p>
          <h3 className="mt-2 text-2xl font-bold">Own Database Layer for Apps, APIs, and Admin Data</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-emerald-50/80">
            DreamBuild now has a provider-neutral database layer for schema planning, generated CRUD helpers, seed data, migrations, and app data storage. Browser mode keeps project database plans local; hosted shared data connects through DreamBuild Database API or Cloud Runner.
          </p>
        </div>

        <div className={`rounded-xl border px-4 py-3 text-sm ${
          status.hasHostedDatabase
            ? 'border-emerald-300/40 bg-emerald-300/10 text-emerald-50'
            : 'border-amber-300/40 bg-amber-300/10 text-amber-50'
        }`}>
          <div className="flex items-center gap-2 font-semibold">
            <Database className="h-4 w-4" />
            Database Status
          </div>
          <div className="mt-1 text-xs opacity-90">{status.statusLabel}</div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-4">
        {status.adapters.map((adapter) => {
          const Icon = adapterIcons[adapter.id] || Database

          return (
            <div key={adapter.id} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <div className="rounded-xl border border-emerald-300/30 bg-emerald-300/10 p-3 text-emerald-100 w-fit">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="mt-3 font-bold text-white">{adapter.name}</h4>
              <span className="mt-2 inline-flex rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2 py-0.5 text-xs font-semibold text-emerald-50">
                {adapter.status}
              </span>
              <p className="mt-3 text-sm leading-6 text-emerald-50/75">{adapter.use}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
          <div className="mb-3 flex items-center gap-2 font-semibold text-slate-100">
            <Layers className="h-4 w-4 text-emerald-300" />
            Schema templates DreamBuild can generate
          </div>
          <div className="grid gap-2 md:grid-cols-2">
            {status.schemaTemplates.map((template) => (
              <div key={template.id} className="rounded-xl border border-emerald-300/15 bg-emerald-300/5 p-3">
                <div className="font-semibold text-emerald-50">{template.name}</div>
                <div className="mt-1 text-xs leading-5 text-emerald-50/65">{template.bestFor}</div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {template.tables.slice(0, 4).map((table) => (
                    <span key={table} className="rounded-full bg-slate-900 px-2 py-1 text-[11px] text-emerald-100">
                      {table}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
          <div className="mb-3 flex items-center gap-2 font-semibold text-slate-100">
            <CheckCircle className="h-4 w-4 text-emerald-300" />
            Automatic schema from a build request
          </div>
          <div className="space-y-2 text-sm text-emerald-50/80">
            <p><span className="font-semibold text-white">Recommended adapter:</span> {examplePlan.recommendedAdapter.name}</p>
            <p><span className="font-semibold text-white">Mode:</span> {examplePlan.statusLabel}</p>
            <p><span className="font-semibold text-white">Selected schemas:</span> {examplePlan.selectedTemplates.map((template) => template.name).join(', ')}</p>
          </div>
          <div className="mt-3 grid gap-2">
            {examplePlan.schema.tables.slice(0, 6).map((table) => (
              <div key={table.name} className="rounded-xl border border-emerald-300/15 bg-emerald-300/5 p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-semibold text-emerald-50">{table.name}</span>
                  <span className="text-[11px] text-emerald-100">{table.columns.length} columns</span>
                </div>
                <p className="mt-1 text-xs leading-5 text-emerald-50/60">{table.purpose}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {table.columns.slice(0, 5).map((column) => (
                    <span key={`${table.name}-${column.name}`} className="rounded-full bg-slate-900 px-2 py-1 text-[11px] text-emerald-100">
                      {column.name}: {column.type}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {examplePlan.schema.relationships.length > 0 && (
            <div className="mt-3 rounded-xl border border-emerald-300/15 bg-slate-950/70 p-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-emerald-200">Relationships</div>
              <div className="mt-2 grid gap-1">
                {examplePlan.schema.relationships.map((relationship) => (
                  <div key={relationship} className="text-xs text-emerald-50/70">{relationship}</div>
                ))}
              </div>
            </div>
          )}
          <div className="mt-3 grid gap-2">
            {examplePlan.generatedTasks.map((task) => (
              <div key={task} className="rounded-xl border border-emerald-300/15 bg-emerald-300/5 px-3 py-2 text-xs text-emerald-50">
                {task}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs leading-5 text-emerald-50/60">{examplePlan.hostedPersistenceNote}</p>
        </div>
      </div>
    </section>
  )
}

export default DreamBuildDatabasePanel

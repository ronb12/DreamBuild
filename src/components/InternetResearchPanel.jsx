import React, { useMemo } from 'react'
import { BookOpen, CheckCircle, ExternalLink, Image, LayoutTemplate, Palette, Radar, Search, ServerCog, Wifi } from 'lucide-react'
import internetResearchService from '../services/internetResearchService'

const iconMap = {
  coding: BookOpen,
  images: Image,
  graphics: Palette,
  templates: LayoutTemplate
}

const InternetResearchPanel = () => {
  const status = useMemo(() => internetResearchService.getCapabilityStatus(), [])
  const samplePlan = useMemo(() => (
    internetResearchService.buildResearchPlan('Build a polished booking app with hero images, icons, checkout, and admin dashboard', {
      appType: 'booking app'
    })
  ), [])

  return (
    <section className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-5 text-white shadow-lg shadow-cyan-500/10">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">Internet Research</p>
          <h3 className="mt-2 text-2xl font-bold">Sourced Coding, Images, Graphics, and Templates</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
            DreamBuild can prepare sourced research plans, use browser-safe APIs, and use a connected DreamBuild Cloud Runner/Search API for live web search. When live search is not connected, it falls back to curated source lists and clearly labels that limitation.
          </p>
        </div>

        <div className={`rounded-xl border px-4 py-3 text-sm ${
          status.canUseLiveSearch
            ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-100'
            : 'border-amber-400/40 bg-amber-400/10 text-amber-100'
        }`}>
          <div className="flex items-center gap-2 font-semibold">
            <Wifi className="h-4 w-4" />
            Live Search
          </div>
          <div className="mt-1 text-xs opacity-85">{status.liveSearchStatus}</div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
          <div className="flex items-center gap-2 font-semibold text-slate-100">
            <ServerCog className="h-4 w-4 text-cyan-200" />
            Search API Contract
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            DreamBuild calls <span className="font-semibold text-white">/search</span> on the configured runner for live sourced results.
          </p>
          <div className="mt-3 rounded-xl border border-cyan-300/15 bg-cyan-300/5 px-3 py-2 text-xs text-cyan-50">
            {status.connectorContract.requiredEnv.join(' or ')}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
          <div className="flex items-center gap-2 font-semibold text-slate-100">
            <Radar className="h-4 w-4 text-cyan-200" />
            Server-Side Crawler
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            DreamBuild calls <span className="font-semibold text-white">/crawl</span> from Cloud Runner so arbitrary websites are fetched server-side, not scraped by the browser.
          </p>
          <div className={`mt-3 rounded-xl border px-3 py-2 text-xs ${
            status.canCrawlArbitrarySites
              ? 'border-emerald-300/20 bg-emerald-300/10 text-emerald-50'
              : 'border-amber-300/20 bg-amber-300/10 text-amber-50'
          }`}>
            {status.crawlerStatus}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
          <div className="flex items-center gap-2 font-semibold text-slate-100">
            <CheckCircle className="h-4 w-4 text-cyan-200" />
            Supported Search Providers
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            The backend supports Brave Search, Serper, or Tavily keys while keeping browser-only mode honest.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {status.connectorContract.providerKeys.map((key) => (
              <span key={key} className="rounded-full border border-cyan-300/15 bg-cyan-300/5 px-2 py-1 text-[11px] text-cyan-50">
                {key}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {status.categories.map((category) => {
          const Icon = iconMap[category.id] || Search

          return (
            <div key={category.id} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
              <div className="flex items-start gap-3">
                <div className="rounded-xl border border-cyan-300/30 bg-cyan-300/10 p-3 text-cyan-100">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-bold text-white">{category.title}</h4>
                    <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-2 py-0.5 text-xs font-semibold text-emerald-100">
                      {category.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{category.description}</p>
                </div>
              </div>

              <div className="mt-4 grid gap-2">
                {category.sources.slice(0, 4).map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-2 rounded-xl border border-white/10 bg-slate-950/60 p-3 text-sm transition hover:border-cyan-300/40 hover:bg-slate-900"
                  >
                    <ExternalLink className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-200" />
                    <span>
                      <span className="block font-semibold text-slate-100 group-hover:text-white">{source.name}</span>
                      <span className="mt-1 block text-xs leading-5 text-slate-400">{source.use}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4">
        <div className="mb-3 flex items-center gap-2 font-semibold text-slate-100">
          <CheckCircle className="h-4 w-4 text-emerald-300" />
          Example research plan DreamBuild can attach to a build
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          {samplePlan.queries.slice(0, 6).map((query) => (
            <div key={query} className="rounded-xl border border-cyan-300/15 bg-cyan-300/5 px-3 py-2 text-xs text-cyan-50">
              {query}
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs leading-5 text-slate-400">{samplePlan.citationPolicy}</p>
      </div>
    </section>
  )
}

export default InternetResearchPanel

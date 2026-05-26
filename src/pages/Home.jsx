import React from 'react'
import { Link } from '../components/SimpleRouter'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Brain,
  Code,
  Layers,
  Play,
  Rocket,
  Shield,
  Sparkles,
  Terminal,
  Wand2
} from 'lucide-react'

const Home = () => {
  const capabilities = [
    {
      icon: Brain,
      title: 'Describe the build',
      description: 'Start with plain language. DreamBuild turns the request into app structure, files, and next steps.'
    },
    {
      icon: Layers,
      title: 'Use smart starters',
      description: 'Choose polished starters, games, feature blocks, and design directions when a faster launch path helps.'
    },
    {
      icon: Wand2,
      title: 'Generate visuals automatically',
      description: 'Icons, favicons, and hero images are created quietly in the background for each generated project.'
    },
    {
      icon: Terminal,
      title: 'Open the workspace when needed',
      description: 'Non-technical users can stay in guided mode, while developers can open files, terminal, and preview.'
    }
  ]

  const workflow = [
    'Tell DreamBuild what you want to create.',
    'Review the generated preview and project files.',
    'Refine, repair, and prepare the app for launch.'
  ]

  return (
    <div className="dreambuild-home min-h-screen bg-background">
      <section className="relative overflow-hidden px-4 pt-28 pb-14 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-light/10" />
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                DreamBuild Development Platform
              </div>

              <h1 className="text-5xl font-black leading-tight text-foreground sm:text-6xl lg:text-7xl">
                Build apps by describing the outcome.
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground lg:mx-0">
                DreamBuild helps users create websites, apps, games, dashboards, and backend-ready projects with guided generation, live preview, background visuals, and developer tools when needed.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="#/ai-builder"
                  className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-2xl shadow-primary/20 transition hover:bg-primary-dark hover:scale-[1.02]"
                >
                  <Rocket className="h-5 w-5 transition group-hover:rotate-12" />
                  Start Building
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </Link>
                <Link
                  href="#/templates"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-primary/30 px-8 py-4 text-lg font-bold text-primary transition hover:border-primary/60 hover:bg-primary/10"
                >
                  <Play className="h-5 w-5" />
                  Browse Templates
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-[2rem] border border-border/70 bg-card/80 p-5 shadow-2xl shadow-primary/10 backdrop-blur-xl"
            >
              <div className="rounded-[1.5rem] border border-primary/20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-5 text-white">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">Workspace Preview</p>
                    <h2 className="mt-2 text-2xl font-black">Guided build flow</h2>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3">
                    <Code className="h-6 w-6 text-cyan-200" />
                  </div>
                </div>

                <div className="space-y-3">
                  {workflow.map((step, index) => (
                    <div key={step} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,.8)]" />
                      <p className="text-sm leading-6 text-slate-200">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm text-emerald-100">
                  Background self-repair, visual generation, and project organization run behind the scenes so the main experience stays simple.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">What DreamBuild Handles</p>
              <h2 className="mt-2 text-3xl font-black text-foreground">A shorter path from idea to working project</h2>
            </div>
            <Link href="#/ai-builder" className="inline-flex items-center gap-2 font-bold text-primary">
              Open builder <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-border/60 bg-card/70 p-5 shadow-lg shadow-primary/5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-black text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-8 rounded-3xl border border-border/60 bg-card/70 p-6 shadow-xl shadow-primary/5">
            <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">
                  <Shield className="h-4 w-4" />
                  Simple for customers, powerful for developers
                </div>
                <p className="mt-3 text-muted-foreground">
                  Keep the home page focused. Deeper details stay inside the builder, templates, repository, cloud runner, and workspace screens.
                </p>
              </div>
              <Link
                href="#/templates"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:bg-primary-dark"
              >
                Explore Templates
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

import React from 'react'
import { motion } from 'framer-motion'
import { Code, ArrowRight } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-white font-bold text-3xl">D</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              About <span className="text-blue-600">DreamBuild</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              DreamBuild is an AI-powered development platform that makes coding accessible to everyone. 
              Build applications in 170+ programming languages using natural language prompts.
            </p>
          </motion.div>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                  AI-Powered Development
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Transform your ideas into code using advanced AI models. Simply describe what you want to build, 
                  and DreamBuild generates the complete application for you.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                  Multi-Language Support
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Build applications in 170+ programming languages including React, Vue, Python, Java, 
                  Swift, and many more. Choose your preferred technology stack.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                  Instant Deployment
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Deploy your applications instantly to Firebase Hosting and GitHub Pages. 
                  No complex setup required - just click and deploy.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                  Local AI Integration
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Use local AI models for complete privacy and control. No API keys required - 
                  run everything on your own machine.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 text-center leading-relaxed">
              To democratize software development by making AI-powered coding tools accessible to everyone. 
              Whether you're a seasoned developer or just starting out, DreamBuild empowers you to turn 
              your ideas into reality with the power of artificial intelligence.
            </p>
          </motion.div>
        </div>

        {/* Company Info */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">
              About Bradley Virtual Solutions
            </h2>
            <div className="text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                DreamBuild is developed by <strong className="text-slate-800 dark:text-white">Bradley Virtual Solutions, LLC</strong>, 
                a company dedicated to creating innovative AI-powered development tools.
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                Founded by Ronell Bradley, a full-stack developer with extensive experience in AI and web development, 
                we're committed to making advanced development tools accessible to everyone.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Building?</h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Join thousands of developers who are already creating amazing applications with DreamBuild.
            </p>
            <motion.a
              href="/ai-builder"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg"
            >
              <Code className="h-5 w-5" />
              Start Building Now
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

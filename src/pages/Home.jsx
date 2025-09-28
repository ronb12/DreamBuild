import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Rocket, 
  Code, 
  Database, 
  Users, 
  Zap, 
  Shield, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Award
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Code,
      title: 'AI Code Generation',
      description: 'Generate code with AI assistance.'
    },
    {
      icon: Database,
      title: 'Smart Templates',
      description: 'Pre-built templates for quick start.'
    },
    {
      icon: Zap,
      title: 'Real-time Collaboration',
      description: 'Work together with your team.'
    }
  ]

  const stats = [
    { label: 'AI Models', value: '10+', icon: Code },
    { label: 'Languages', value: '50+', icon: Database },
    { label: 'Templates', value: '25+', icon: TrendingUp }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative flex justify-center">
          <div className="text-center max-w-4xl w-full ml-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8"
            >
              <Sparkles className="h-4 w-4" />
              AI-Powered Development Platform
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Build with{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                AI
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Create amazing projects with AI-powered code generation. Simple, fast, and effective.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 max-w-md mx-auto"
            >
              <Link
                to="/ai-builder"
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary-dark transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                <Rocket className="h-5 w-5" />
                Start Building
              </Link>
              <Link
                to="/templates"
                className="inline-flex items-center gap-3 px-10 py-4 border-2 border-primary/20 text-primary rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 text-lg font-semibold"
              >
                <Code className="h-5 w-5" />
                Browse Templates
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center group">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-3xl font-bold text-primary group-hover:text-primary-light transition-colors">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to build amazing projects
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl ml-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-xl hover:bg-card/70 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Download DreamBuild Desktop
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get the full desktop experience with complete system access, just like Cursor IDE
              </p>
            </motion.div>
          </div>
          
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl p-8 max-w-2xl w-full shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Apple className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">macOS Desktop App</h3>
                <p className="text-muted-foreground mb-6">
                  Full desktop application with complete system access, real terminal commands, 
                  and native macOS performance. Works on both Intel and Apple Silicon Macs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Real Terminal Commands</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Full File System Access</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Native macOS Performance</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Universal Binary (Intel + Apple Silicon)</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Link
                    to="/download"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary-dark transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl w-full justify-center"
                  >
                    <Download className="h-5 w-5" />
                    Download for macOS (327MB)
                  </Link>
                  
                  <div className="text-xs text-muted-foreground">
                    <p>• The desktop app provides full system access like Cursor IDE</p>
                    <p>• Real terminal commands and file system operations</p>
                    <p>• No App Store required - direct installation</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary-light/5"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto ml-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Start creating amazing projects with AI-powered development tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-builder"
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary-dark transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
              >
                <Rocket className="h-5 w-5" />
                Get Started
              </Link>
              <Link
                to="/templates"
                className="inline-flex items-center gap-3 px-10 py-4 border-2 border-primary/20 text-primary rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 text-lg font-semibold"
              >
                <Code className="h-5 w-5" />
                View Templates
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
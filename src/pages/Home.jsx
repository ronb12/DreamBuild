import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Sparkles, Code, Brain, Rocket, ArrowRight, Github, ExternalLink,
  Zap, Shield, Users
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Code Generation',
      description: 'Generate code using advanced AI with multiple free services including Groq, Hugging Face, and Ollama.'
    },
    {
      icon: Code,
      title: '170+ Programming Languages',
      description: 'Support for JavaScript, Python, Java, C++, Rust, Go, and many more programming languages.'
    },
    {
      icon: Zap,
      title: 'Real-time Preview',
      description: 'See your code come to life instantly with our live preview system powered by Monaco Editor.'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your code stays private. Use local AI models or trusted cloud services with encryption.'
    }
  ]

  const stats = [
    { label: 'Languages', value: '170+', icon: Code },
    { label: 'AI Services', value: '4', icon: Brain },
    { label: 'Free Forever', value: '100%', icon: Shield },
    { label: 'Open Source', value: 'Yes', icon: Users }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8 border border-primary/20"
          >
            <Sparkles className="h-4 w-4" />
            AI Development Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Build with{' '}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              AI Power
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            The universal AI development platform supporting 170+ programming languages. 
            Generate, edit, and deploy code with artificial intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link
              to="/ai-builder"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Rocket className="h-5 w-5" />
              Start Building
            </Link>
            <a
              href="https://github.com/ronb12/DreamBuild"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-lg hover:bg-muted transition-all duration-200 text-lg font-semibold hover:border-primary/50"
            >
              <Github className="h-5 w-5" />
              View on GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="h-5 w-5 text-primary group-hover:text-primary-light transition-colors" />
                  <div className="text-2xl font-bold text-primary group-hover:text-primary-light transition-colors">{stat.value}</div>
                </div>
                <div className="text-sm text-foreground group-hover:text-primary transition-colors">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to build with AI
            </h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              From simple websites to complex applications, DreamBuild provides all the tools 
              you need to bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-lg hover:bg-card/70 transition-all duration-200"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start building?
          </h2>
          <p className="text-lg text-foreground mb-8">
            Join thousands of developers who are already using DreamBuild to create amazing applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-builder"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors text-lg font-semibold"
            >
              Get Started Free
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors text-lg font-semibold"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Code, Zap, Globe, Shield, Users, ArrowRight, Play, Github, Star } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Generation',
      description: 'Generate code using advanced AI with multiple free services including Groq, Hugging Face, and Ollama.'
    },
    {
      icon: Code,
      title: '170+ Languages',
      description: 'Support for JavaScript, Python, Java, C++, Rust, Go, and many more programming languages.'
    },
    {
      icon: Zap,
      title: 'Real-time Preview',
      description: 'See your code come to life instantly with our live preview system powered by Monaco Editor.'
    },
    {
      icon: Globe,
      title: 'Full-Stack Support',
      description: 'Build frontend, backend, mobile, and desktop applications with comprehensive templates.'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your code stays private. Use local AI models or trusted cloud services with encryption.'
    },
    {
      icon: Users,
      title: 'Open Source',
      description: 'Completely open source and free to use. Contribute to the future of AI-powered development.'
    }
  ]

  const stats = [
    { label: 'Programming Languages', value: '170+' },
    { label: 'AI Services', value: '4' },
    { label: 'Free Tier', value: '100%' },
    { label: 'Open Source', value: 'Yes' }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build with{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI Power
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              DreamBuild is the universal AI development platform supporting 170+ programming languages. 
              Generate, edit, and deploy code with the power of artificial intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/ai-builder"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
              >
                <Play className="h-5 w-5" />
                Start Building
              </Link>
              <a
                href="https://github.com/ronb12/DreamBuild"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-lg hover:bg-muted transition-colors text-lg font-semibold"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need to build with AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From simple websites to complex applications, DreamBuild provides all the tools 
              you need to bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
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
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of developers who are already using DreamBuild to create amazing applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ai-builder"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-lg font-semibold"
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
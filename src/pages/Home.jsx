import React from 'react'
import { Link, useLocation, useNavigate } from '../utils/navigation';
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
  Award,
  Monitor,
  Download,
  Brain,
  Cpu,
  Layers,
  GitBranch,
  Terminal,
  FileText,
  Play,
  Settings,
  BarChart3,
  Lightbulb,
  Target,
  Infinity
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Code Generation',
      description: 'Generate code with advanced AI models. Support for 50+ programming languages with intelligent suggestions and auto-completion.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Layers,
      title: 'Smart Templates',
      description: 'Pre-built templates for React, Vue, Angular, Node.js, Python, and more. Start projects instantly with production-ready code.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time. Share code, comment, and collaborate seamlessly across all devices.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Terminal,
      title: 'Integrated Terminal',
      description: 'Built-in terminal with full system access. Run commands, manage files, and deploy applications directly from the platform.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Integrated Git support with visual diff tools, branch management, and seamless GitHub integration.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Track your coding progress, analyze performance metrics, and get insights to improve your development workflow.',
      color: 'from-teal-500 to-blue-500'
    }
  ]

  const stats = [
    { label: 'AI Models', value: '10+', icon: Brain, description: 'Advanced AI models' },
    { label: 'Languages', value: '50+', icon: Code, description: 'Programming languages' },
    { label: 'Templates', value: '100+', icon: Layers, description: 'Ready-to-use templates' },
    { label: 'Users', value: '10K+', icon: Users, description: 'Active developers' }
  ]

  const benefits = [
    {
      icon: Clock,
      title: '10x Faster Development',
      description: 'Build applications 10x faster with AI-powered code generation and smart templates.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and secure cloud infrastructure.'
    },
    {
      icon: Globe,
      title: 'Universal Compatibility',
      description: 'Works on any device, any platform. Web, desktop, and mobile support included.'
    },
    {
      icon: Award,
      title: 'Industry Leading',
      description: 'Trusted by developers at top companies worldwide for mission-critical projects.'
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer at TechCorp",
      content: "DreamBuild has revolutionized how we develop applications. The AI code generation is incredibly accurate and saves us hours every day.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Full-Stack Developer",
      content: "The templates are amazing! I can spin up a complete React app with authentication in minutes. This is the future of development.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Startup Founder",
      content: "As a non-technical founder, DreamBuild's AI assistance helped me build my MVP without hiring expensive developers.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary-light/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary-light/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary/5 rounded-full blur-lg animate-pulse delay-2000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4" />
              The Future of AI-Powered Development
              <Star className="h-4 w-4 text-yellow-500" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            >
              Build with{' '}
              <span className="bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent animate-pulse">
                AI
              </span>
              <br />
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Deploy with{' '}
                <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">
                  Confidence
                </span>
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              The world's most advanced AI-powered development platform. 
              <br className="hidden sm:block" />
              Generate, build, and deploy applications with unprecedented speed and intelligence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <Link
                href='#/ai-builder'
                className="group inline-flex items-center gap-3 px-12 py-5 bg-primary text-primary-foreground rounded-2xl hover:bg-primary-dark transition-all duration-300 text-xl font-semibold shadow-2xl hover:shadow-primary/25 hover:scale-105"
              >
                <Rocket className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Start Building Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href='#/templates'
                className="group inline-flex items-center gap-3 px-12 py-5 border-2 border-primary/30 text-primary rounded-2xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-xl font-semibold backdrop-blur-sm"
              >
                <Code className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                Explore Templates
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div 
                    key={index} 
                    className="text-center group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="text-4xl font-bold text-primary group-hover:text-primary-light transition-colors">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Powerful Features for{' '}
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Modern Development
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Everything you need to build, deploy, and scale applications with AI assistance
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-2xl hover:bg-card/80 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose DreamBuild?
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join thousands of developers who are building the future with AI
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Developers Are Saying
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join thousands of satisfied developers who trust DreamBuild
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-xl hover:bg-card/80 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-transparent to-primary-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Get the Full Experience
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Download our desktop app for complete system access and native performance
              </p>
            </motion.div>
          </div>
          
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card/80 backdrop-blur-sm border border-border/60 rounded-3xl p-12 max-w-4xl w-full shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-3xl flex items-center justify-center mx-auto mb-8">
                  <Monitor className="h-12 w-12 text-white" />
                </div>
                
                <h3 className="text-3xl font-bold mb-4">DreamBuild Desktop</h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Full desktop application with complete system access, real terminal commands, 
                  and native performance. Works on macOS, Windows, and Linux.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-center gap-4 text-lg">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span>Real Terminal Commands</span>
                  </div>
                  <div className="flex items-center gap-4 text-lg">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span>Full File System Access</span>
                  </div>
                  <div className="flex items-center gap-4 text-lg">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span>Native Performance</span>
                  </div>
                  <div className="flex items-center gap-4 text-lg">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span>Cross-Platform Support</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <Link
                    href='#/download'
                    className="group inline-flex items-center gap-4 px-12 py-6 bg-primary text-primary-foreground rounded-2xl hover:bg-primary-dark transition-all duration-300 text-xl font-semibold shadow-2xl hover:shadow-primary/25 hover:scale-105 w-full justify-center"
                  >
                    <Download className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    Download Desktop App
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p>• Available for macOS, Windows, and Linux</p>
                    <p>• No App Store required - direct installation</p>
                    <p>• Free to use with optional premium features</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary-light/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Development?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Join thousands of developers who are already building the future with AI. 
              Start your journey today and experience the power of intelligent development.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href='#/ai-builder'
                className="group inline-flex items-center gap-4 px-12 py-6 bg-primary text-primary-foreground rounded-2xl hover:bg-primary-dark transition-all duration-300 text-xl font-semibold shadow-2xl hover:shadow-primary/25 hover:scale-105"
              >
                <Rocket className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                Start Building for Free
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href='#/templates'
                className="group inline-flex items-center gap-4 px-12 py-6 border-2 border-primary/30 text-primary rounded-2xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-xl font-semibold backdrop-blur-sm"
              >
                <Code className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                Browse Templates
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
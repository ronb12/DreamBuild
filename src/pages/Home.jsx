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
      description: 'Generate high-quality code in multiple languages with advanced AI models.'
    },
    {
      icon: Database,
      title: 'Smart Templates',
      description: 'Access a library of pre-built templates for rapid development.'
    },
    {
      icon: Zap,
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time on projects.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption for all projects.'
    }
  ]

  const stats = [
    { label: 'Early Adopters', value: '500+', icon: Users },
    { label: 'Beta Projects', value: '1K+', icon: Code },
    { label: 'Innovation Score', value: '100%', icon: TrendingUp }
  ]

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Beta Tester',
      content: 'I was skeptical about AI development tools, but DreamBuild blew my mind. This is the future!',
      rating: 5
    },
    {
      name: 'Maria Santos',
      role: 'Early Adopter',
      content: 'Being part of the DreamBuild beta has been incredible. The innovation is unmatched.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'Tech Innovator',
      content: 'DreamBuild is rewriting the rules of development. I feel like I\'m using technology from 2030!',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary-light/10 rounded-full text-primary text-sm font-medium mb-8 border border-primary/20"
            >
              <Sparkles className="h-4 w-4" />
              🚀 New AI Development Platform
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              The Future of{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                AI Development
              </span>
              {' '}is Here
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Experience the next generation of development with DreamBuild - the revolutionary AI platform 
              that's changing how developers build, create, and innovate. Be among the first to discover what's possible.
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Rocket className="h-5 w-5" />
                Try DreamBuild Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/templates"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-lg hover:bg-muted transition-all duration-200 text-lg font-semibold hover:border-primary/50"
              >
                <Code className="h-5 w-5" />
                See What's New
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

      {/* Social Proof Section */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Join the AI Development Revolution
            </h2>
            <p className="text-lg text-muted-foreground">
              Be part of the next generation of developers shaping the future with cutting-edge AI tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-xl hover:bg-card/70 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4">
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

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary Features That Change Everything
            </h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Discover the groundbreaking capabilities that make DreamBuild the most advanced AI development platform ever created
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
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary-light/5"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Be a Pioneer?
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Join the exclusive group of forward-thinking developers who are already experiencing the future of AI development with DreamBuild.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-builder"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Rocket className="h-5 w-5" />
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/templates"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-lg hover:bg-muted transition-all duration-200 text-lg font-semibold hover:border-primary/50"
              >
                <Code className="h-5 w-5" />
                Discover Features
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
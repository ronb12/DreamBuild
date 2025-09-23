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
    { label: 'Active Developers', value: '10K+', icon: Users },
    { label: 'Projects Created', value: '50K+', icon: Code },
    { label: 'Uptime', value: '99.9%', icon: Clock }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Full Stack Developer',
      content: 'DreamBuild has revolutionized how I approach development. The AI assistance is incredible.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Tech Lead',
      content: 'The collaboration features and code generation capabilities are game-changing.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Startup Founder',
      content: 'We built our MVP 3x faster with DreamBuild. Highly recommended!',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-light/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
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
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Build the Future with{' '}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                AI-Powered Development
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Transform your ideas into reality with our cutting-edge AI development platform. 
              Generate code, collaborate seamlessly, and ship faster than ever before.
            </motion.p>

            {/* CTA Buttons */}
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
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/templates"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-lg hover:bg-muted transition-all duration-200 text-lg font-semibold hover:border-primary/50"
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
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
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
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Trusted by Developers Worldwide
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of developers who are building the future with AI
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
              Powerful Features for Modern Development
            </h2>
            <p className="text-lg text-foreground max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale your applications with AI assistance
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
              Ready to Transform Your Development?
            </h2>
            <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers who are already building the future with AI-powered development tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/ai-builder"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-all duration-200 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Rocket className="h-5 w-5" />
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/templates"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-lg hover:bg-muted transition-all duration-200 text-lg font-semibold hover:border-primary/50"
              >
                <Code className="h-5 w-5" />
                Explore Templates
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
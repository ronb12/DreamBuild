import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Zap, Shield, Code, Globe, Smartphone } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Generation',
      description: 'Build apps and websites from natural language prompts using advanced AI.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Multi-Language Support',
      description: 'Generate code in JavaScript, Python, Dart, Swift, Kotlin, Go, Rust and more.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Framework Agnostic',
      description: 'Support for React, Vue, Angular, Flutter, Flask, Django, and many others.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Smartphone,
      title: 'Cross-Platform',
      description: 'Build for web, mobile, and desktop with a single prompt.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'Instant Build & Deploy',
      description: 'Automatically compile and deploy your AI-generated projects.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Ready',
      description: 'Production-grade code with security and scalability built-in.',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const quickTemplates = [
    'E-commerce website with payment integration',
    'Social media app with real-time chat',
    'Task management dashboard',
    'Weather app with location services',
    'Recipe finder with search and filters',
    'Fitness tracker with progress charts'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Development Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Build Apps Like
              <span className="block text-gradient">Never Before</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Transform your ideas into production-ready applications with AI-powered code generation. 
              Build websites, mobile apps, and desktop applications using natural language prompts in any programming language.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/ai-builder" className="btn-primary text-lg px-8 py-4">
                Start Building with AI
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="btn-secondary text-lg px-8 py-4">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Builder Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI-Powered Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Just describe what you want to build, and our AI will generate the complete codebase, 
              build it, and deploy it automatically.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Try It Now</h3>
              <p className="text-gray-600 mb-6">Example prompts that work instantly:</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {quickTemplates.map((template, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-300 transition-colors">
                  <p className="text-gray-800 font-medium">"{template}"</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to="/ai-builder" className="btn-primary text-lg px-8 py-4">
                <Code className="w-5 h-5 mr-2" />
                Start Building with AI
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI platform provides all the tools you need to build production-ready applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="card group hover:scale-105 transition-transform duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of developers who are already building amazing applications with AI.
          </p>
          <Link to="/ai-builder" className="bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center">
            <ArrowRight className="w-5 h-5 mr-2" />
            Launch Your First AI App
          </Link>
        </div>
      </section>

      {/* Company Branding Section */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Powered by Bradley Virtual Solutions, LLC
            </h3>
            <p className="text-gray-600 mb-6">
              DreamBuild is a cutting-edge AI development platform created by Bradley Virtual Solutions, LLC, 
              dedicated to revolutionizing how developers build applications through intelligent automation.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <span>Enterprise-Grade AI</span>
              <span>•</span>
              <span>Professional Support</span>
              <span>•</span>
              <span>Trusted by Developers</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

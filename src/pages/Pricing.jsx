import React, { useState } from 'react'
import { Check, Star, Zap, Crown, Users, Globe, Shield, Code } from 'lucide-react'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individual developers and small projects',
      price: billingCycle === 'monthly' ? 29 : 290,
      features: [
        'Up to 5 projects',
        'AI code generation (100 requests/month)',
        'Basic build tools',
        'Community support',
        'Standard deployment',
        'Git integration'
      ],
      icon: Code,
      color: 'bg-blue-500',
      popular: false
    },
    {
      name: 'Professional',
      description: 'Ideal for growing teams and businesses',
      price: billingCycle === 'monthly' ? 99 : 990,
      features: [
        'Up to 25 projects',
        'AI code generation (1000 requests/month)',
        'Advanced build tools',
        'Priority support',
        'Custom domains',
        'Team collaboration',
        'Advanced analytics',
        'CI/CD pipelines'
      ],
      icon: Zap,
      color: 'bg-green-500',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with advanced needs',
      price: billingCycle === 'monthly' ? 299 : 2990,
      features: [
        'Unlimited projects',
        'Unlimited AI requests',
        'Enterprise build tools',
        '24/7 dedicated support',
        'Custom infrastructure',
        'Advanced security',
        'SLA guarantees',
        'White-label options',
        'Custom integrations'
      ],
      icon: Crown,
      color: 'bg-purple-500',
      popular: false
    }
  ]

  const features = [
    {
      title: 'AI-Powered Development',
      description: 'Generate production-ready code in any programming language',
      icon: Code,
      color: 'text-blue-600'
    },
    {
      title: 'Multi-Platform Support',
      description: 'Build for web, mobile, desktop, and backend applications',
      icon: Globe,
      color: 'text-green-600'
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and encryption',
      icon: Shield,
      color: 'text-purple-600'
    },
    {
      title: 'Team Collaboration',
      description: 'Real-time collaboration with role-based access control',
      icon: Users,
      color: 'text-orange-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your development needs. All plans include our core AI-powered development platform.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-1 text-green-600 font-medium">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary-500 px-4 py-1 text-sm font-medium text-white">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <div className={`inline-flex p-3 rounded-full ${plan.color} mb-4`}>
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-500">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                </div>

                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.popular ? 'Get Started' : 'Choose Plan'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Everything you need to build amazing applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className={`inline-flex p-3 rounded-full bg-gray-100 mb-4`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I change plans at any time?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What programming languages do you support?
              </h3>
              <p className="text-gray-600">
                We support all major programming languages including JavaScript, Python, Java, C#, Go, Rust, and more.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Is there a free trial available?
              </h3>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial for all plans with full access to all features.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer custom enterprise plans?
              </h3>
              <p className="text-gray-600">
                Absolutely! Contact our sales team for custom pricing and features tailored to your needs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to start building?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of developers who are already building amazing applications with DreamBuild.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors">
              Start Free Trial
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing

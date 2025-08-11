import React from 'react'
import { Shield, Cookie, Settings, Eye, Lock } from 'lucide-react'

const Cookies = () => {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      description: 'These cookies are necessary for the website to function properly.',
      examples: ['Authentication', 'Security', 'Basic functionality'],
      icon: Shield,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website.',
      examples: ['Page views', 'User behavior', 'Performance metrics'],
      icon: Eye,
      color: 'bg-green-100 text-green-600'
    },
    {
      name: 'Preference Cookies',
      description: 'Remember your settings and preferences for a better experience.',
      examples: ['Language settings', 'Theme preferences', 'Customizations'],
      icon: Settings,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      name: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and track campaign performance.',
      examples: ['Ad targeting', 'Social media', 'Campaign tracking'],
      icon: Cookie,
      color: 'bg-orange-100 text-orange-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Cookie className="w-4 h-4" />
            <span>Cookie Policy</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about how we use cookies and similar technologies to enhance your experience on DreamBuild.
          </p>
        </div>

        {/* What are Cookies */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
          <p className="text-gray-600 mb-4">
            Cookies are small text files that are stored on your device when you visit our website. 
            They help us provide you with a better experience by remembering your preferences and 
            understanding how you use our services.
          </p>
          <p className="text-gray-600">
            Cookies are essential for the proper functioning of our website and help us improve 
            our services based on how you interact with them.
          </p>
        </div>

        {/* Cookie Types */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookieTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <div key={index} className="card">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${type.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 ml-3">{type.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Examples:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Cookie Management */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h2>
          <p className="text-gray-600 mb-6">
            You have control over the cookies we use. You can manage your preferences through your browser settings 
            or use our cookie consent manager.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Browser Settings</h3>
              <p className="text-sm text-gray-600 mb-3">
                Most browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Block all cookies</li>
                <li>• Allow cookies from specific sites</li>
                <li>• Delete existing cookies</li>
                <li>• Set cookie expiration</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Cookie Consent Manager</h3>
              <p className="text-sm text-gray-600 mb-3">
                Use our built-in cookie consent manager to:
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Accept or reject specific cookie types</li>
                <li>• Update preferences anytime</li>
                <li>• View detailed cookie information</li>
                <li>• Opt-out of non-essential cookies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Third-Party Cookies */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
          <p className="text-gray-600 mb-4">
            Some cookies on our website are set by third-party services that help us provide 
            better functionality and analytics.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start">
              <Lock className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-yellow-800 font-medium">Important Note</p>
                <p className="text-yellow-700 text-sm mt-1">
                  Third-party cookies are subject to the privacy policies of those services. 
                  We recommend reviewing their policies to understand how they use your data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Updates */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update this Cookie Policy from time to time to reflect changes in our practices 
            or for other operational, legal, or regulatory reasons.
          </p>
          <p className="text-gray-600">
            We will notify you of any material changes by posting the new policy on this page 
            and updating the "Last Updated" date below.
          </p>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>Last Updated:</strong> August 10, 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cookies

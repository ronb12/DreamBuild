import React from 'react'
import { Shield, Eye, Download, Trash2, Lock, CheckCircle, AlertCircle } from 'lucide-react'

const GDPR = () => {
  const rights = [
    {
      title: 'Right to Access',
      description: 'You have the right to request access to your personal data.',
      icon: Eye,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Right to Rectification',
      description: 'You can request correction of inaccurate or incomplete personal data.',
      icon: CheckCircle,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Right to Erasure',
      description: 'You can request deletion of your personal data under certain circumstances.',
      icon: Trash2,
      color: 'bg-red-100 text-red-600'
    },
    {
      title: 'Right to Portability',
      description: 'You can request a copy of your data in a machine-readable format.',
      icon: Download,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Right to Restrict Processing',
      description: 'You can request limitation of how we process your personal data.',
      icon: Lock,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Right to Object',
      description: 'You can object to processing of your personal data.',
      icon: AlertCircle,
      color: 'bg-yellow-100 text-yellow-600'
    }
  ]

  const dataCategories = [
    {
      category: 'Account Information',
      examples: ['Name', 'Email address', 'Password', 'Profile picture'],
      purpose: 'User authentication and account management',
      retention: 'Until account deletion'
    },
    {
      category: 'Usage Data',
      examples: ['Login times', 'Pages visited', 'Features used', 'Search queries'],
      purpose: 'Improve user experience and service functionality',
      retention: '2 years'
    },
    {
      category: 'Technical Data',
      examples: ['IP address', 'Browser type', 'Device information', 'Cookies'],
      purpose: 'Security, analytics, and technical support',
      retention: '1 year'
    },
    {
      category: 'Communication Data',
      examples: ['Support tickets', 'Feedback', 'Survey responses', 'Email communications'],
      purpose: 'Customer support and service improvement',
      retention: '3 years'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>GDPR Compliance</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            GDPR Compliance
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your data protection rights under the General Data Protection Regulation (GDPR) 
            and how we ensure compliance.
          </p>
        </div>

        {/* What is GDPR */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What is GDPR?</h2>
          <p className="text-gray-600 mb-4">
            The General Data Protection Regulation (GDPR) is a comprehensive data protection law 
            that gives you control over your personal data and ensures that organizations handle 
            your information responsibly and transparently.
          </p>
          <p className="text-gray-600">
            At DreamBuild, we are committed to full GDPR compliance and protecting your privacy rights.
          </p>
        </div>

        {/* Your Rights */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Data Protection Rights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rights.map((right, index) => {
              const Icon = right.icon
              return (
                <div key={index} className="card">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg ${right.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 ml-3">{right.title}</h3>
                  </div>
                  <p className="text-gray-600">{right.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Data Categories */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Process Your Data</h2>
          <div className="space-y-6">
            {dataCategories.map((category, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Examples:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {category.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Purpose:</p>
                    <p className="text-sm text-gray-600">{category.purpose}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-2">Retention:</p>
                    <p className="text-sm text-gray-600">{category.retention}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legal Basis */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Basis for Processing</h2>
          <p className="text-gray-600 mb-4">
            We process your personal data based on the following legal grounds:
          </p>
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Contract Performance</h3>
              <p className="text-blue-800 text-sm">
                Processing necessary to provide our services and fulfill our contractual obligations.
              </p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">Legitimate Interest</h3>
              <p className="text-green-800 text-sm">
                Processing for our legitimate business interests, such as improving our services and security.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 mb-2">Consent</h3>
              <p className="text-purple-800 text-sm">
                Processing based on your explicit consent for specific purposes like marketing communications.
              </p>
            </div>
          </div>
        </div>

        {/* Data Transfers */}
        <div className="card mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
          <p className="text-gray-600 mb-4">
            Your data may be transferred to and processed in countries outside the European Economic Area (EEA). 
            We ensure adequate protection through:
          </p>
          <ul className="text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              Standard Contractual Clauses (SCCs) approved by the European Commission
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              Adequacy decisions for countries with equivalent data protection standards
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 mt-2 flex-shrink-0"></span>
              Binding corporate rules for intra-group transfers
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="card">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Exercising Your Rights</h2>
          <p className="text-gray-600 mb-6">
            To exercise any of your GDPR rights or if you have questions about our data processing, 
            please contact our Data Protection Officer:
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Data Protection Officer</h3>
                <p className="text-gray-600">privacy@dreambuild.app</p>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
                <p className="text-gray-600">We will respond to your request within 30 days</p>
                <p className="text-gray-600">Complex requests may take up to 60 days</p>
              </div>
            </div>
          </div>

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

export default GDPR

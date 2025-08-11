import React from 'react'
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle, 
  AlertTriangle,
  Users,
  Database,
  Code,
  Zap
} from 'lucide-react'

const Security = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption.'
    },
    {
      icon: Shield,
      title: 'SOC 2 Type II Compliance',
      description: 'We maintain SOC 2 Type II compliance, ensuring the highest standards of security and privacy.'
    },
    {
      icon: Users,
      title: 'Role-Based Access Control',
      description: 'Granular permissions and access controls to ensure users only see what they need.'
    },
    {
      icon: Database,
      title: 'Secure Data Storage',
      description: 'Data is stored in secure, redundant cloud infrastructure with regular backups and monitoring.'
    },
    {
      icon: Code,
      title: 'Secure Code Generation',
      description: 'AI-generated code is scanned for security vulnerabilities before deployment.'
    },
    {
      icon: Zap,
      title: 'Real-Time Threat Detection',
      description: 'Advanced monitoring and alerting systems detect and respond to security threats instantly.'
    }
  ]

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      status: 'Compliant',
      description: 'Service Organization Control 2 compliance for security, availability, and confidentiality.',
      icon: CheckCircle
    },
    {
      name: 'GDPR',
      status: 'Compliant',
      description: 'General Data Protection Regulation compliance for EU data protection standards.',
      icon: CheckCircle
    },
    {
      name: 'CCPA',
      status: 'Compliant',
      description: 'California Consumer Privacy Act compliance for California residents.',
      icon: CheckCircle
    },
    {
      name: 'ISO 27001',
      status: 'In Progress',
      description: 'Information Security Management System certification.',
      icon: AlertTriangle
    }
  ]

  const securityPractices = [
    {
      title: 'Regular Security Audits',
      description: 'We conduct comprehensive security audits quarterly, including penetration testing and vulnerability assessments.',
      frequency: 'Quarterly'
    },
    {
      title: 'Employee Security Training',
      description: 'All employees undergo regular security training and background checks.',
      frequency: 'Monthly'
    },
    {
      title: 'Incident Response Plan',
      description: 'Comprehensive incident response procedures with 24/7 security monitoring.',
      frequency: 'Always Active'
    },
    {
      title: 'Third-Party Security Reviews',
      description: 'Regular security assessments of all third-party vendors and integrations.',
      frequency: 'Annually'
    }
  ]

  const dataProtection = [
    {
      category: 'Personal Data',
      measures: [
        'Data minimization and purpose limitation',
        'Secure data processing and storage',
        'Right to access, rectification, and deletion',
        'Data portability and portability'
      ]
    },
    {
      category: 'Code & Projects',
      measures: [
        'Secure code repository access',
        'Encrypted project data storage',
        'Secure deployment pipelines',
        'Access logging and monitoring'
      ]
    },
    {
      category: 'Infrastructure',
      measures: [
        'Multi-factor authentication',
        'Network segmentation and isolation',
        'Regular security updates and patches',
        'Intrusion detection and prevention'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-primary-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Security & Compliance</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your security is our top priority. We implement industry-leading security practices 
              and maintain compliance with the highest standards to protect your data and code.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Security Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Compliance & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{standard.name}</h3>
                  <div className="flex items-center space-x-2">
                    <standard.icon className={`w-5 h-5 ${
                      standard.status === 'Compliant' ? 'text-green-500' : 'text-yellow-500'
                    }`} />
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      standard.status === 'Compliant' 
                        ? 'text-green-600 bg-green-100' 
                        : 'text-yellow-600 bg-yellow-100'
                    }`}>
                      {standard.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Practices */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Security Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityPractices.map((practice, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{practice.title}</h3>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                    {practice.frequency}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data Protection */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Data Protection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dataProtection.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.measures.map((measure, measureIndex) => (
                    <li key={measureIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{measure}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Security Contact */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Report a Security Issue</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you've discovered a security vulnerability, please report it to our security team. 
            We take all security reports seriously and will respond promptly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Report Vulnerability
            </button>
            <button className="btn-secondary">
              Security Documentation
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            <p>For urgent security matters, contact: <strong>security@dreambuild.com</strong></p>
            <p>PGP Key: <code className="bg-gray-100 px-2 py-1 rounded">0x1234567890ABCDEF</code></p>
          </div>
        </div>

        {/* Security Resources */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Security Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <a href="/docs" className="text-primary-600 hover:text-primary-700 flex items-center space-x-2">
              <Eye className="w-4 h-4" />
              <span>Security Documentation</span>
            </a>
            <a href="/privacy" className="text-primary-600 hover:text-primary-700 flex items-center space-x-2">
              <Lock className="w-4 h-4" />
              <span>Privacy Policy</span>
            </a>
            <a href="/terms" className="text-primary-600 hover:text-primary-700 flex items-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Terms of Service</span>
            </a>
            <a href="/contact" className="text-primary-600 hover:text-primary-700 flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Contact Security Team</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Security

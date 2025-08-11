import React from 'react'
import { 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  Database, 
  Globe, 
  CheckCircle,
  Calendar,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

const Privacy = () => {
  const lastUpdated = 'January 15, 2024'

  const dataCategories = [
    {
      category: 'Account Information',
      description: 'Name, email address, company, and profile information you provide when creating an account.',
      examples: ['Full name', 'Email address', 'Company name', 'Job title', 'Profile picture']
    },
    {
      category: 'Usage Data',
      description: 'Information about how you use our platform and services.',
      examples: ['Projects created', 'Build logs', 'Deployment history', 'Feature usage', 'Performance metrics']
    },
    {
      category: 'Technical Data',
      description: 'Technical information about your device and connection to our services.',
      examples: ['IP address', 'Browser type', 'Device information', 'Log data', 'Cookies and similar technologies']
    },
    {
      category: 'AI-Generated Content',
      description: 'Code and content generated through our AI Builder service.',
      examples: ['Generated code', 'AI prompts', 'Code analysis results', 'Optimization suggestions']
    }
  ]

  const dataUses = [
    {
      purpose: 'Provide Services',
      description: 'To deliver our AI-powered development platform and related services.',
      examples: ['Code generation', 'Project building', 'Deployment management', 'User support']
    },
    {
      purpose: 'Improve Services',
      description: 'To analyze usage patterns and improve our platform functionality.',
      examples: ['Feature development', 'Performance optimization', 'Bug fixes', 'User experience improvements']
    },
    {
      purpose: 'Security & Compliance',
      description: 'To ensure platform security and comply with legal obligations.',
      examples: ['Fraud prevention', 'Security monitoring', 'Legal compliance', 'Data protection']
    },
    {
      purpose: 'Communication',
      description: 'To communicate with you about our services and updates.',
      examples: ['Service notifications', 'Product updates', 'Support responses', 'Marketing communications']
    }
  ]

  const dataSharing = [
    {
      category: 'Service Providers',
      description: 'We share data with trusted third-party service providers who help us operate our platform.',
      examples: ['Cloud hosting providers', 'Payment processors', 'Analytics services', 'Customer support tools']
    },
    {
      category: 'Legal Requirements',
      description: 'We may disclose data when required by law or to protect our rights and safety.',
      examples: ['Court orders', 'Government requests', 'Legal proceedings', 'Safety protection']
    },
    {
      category: 'Business Transfers',
      description: 'In the event of a merger, acquisition, or sale of assets, data may be transferred.',
      examples: ['Company mergers', 'Asset sales', 'Business restructuring', 'Successor entities']
    }
  ]

  const userRights = [
    {
      right: 'Access',
      description: 'Request access to your personal data and information about how it\'s processed.',
      icon: Eye
    },
    {
      right: 'Rectification',
      description: 'Request correction of inaccurate or incomplete personal data.',
      icon: CheckCircle
    },
    {
      right: 'Erasure',
      description: 'Request deletion of your personal data in certain circumstances.',
      icon: Lock
    },
    {
      right: 'Portability',
      description: 'Request a copy of your data in a structured, machine-readable format.',
      icon: Database
    },
    {
      right: 'Restriction',
      description: 'Request limitation of processing in certain circumstances.',
      icon: Shield
    },
    {
      right: 'Objection',
      description: 'Object to processing of your data for certain purposes.',
      icon: Users
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to protecting your privacy and being transparent about how we collect, 
              use, and protect your personal information.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last updated: {lastUpdated}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-600 mb-4">
            DreamBuild ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
            explains how we collect, use, disclose, and safeguard your information when you use our AI-powered 
            development platform and related services.
          </p>
          <p className="text-gray-600 mb-4">
            By using our services, you agree to the collection and use of information in accordance with this policy. 
            If you do not agree with our policies and practices, please do not use our services.
          </p>
          <p className="text-gray-600">
            <strong>DreamBuild is a product of Bradley Virtual Solutions, LLC.</strong>
          </p>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
          <div className="space-y-6">
            {dataCategories.map((category, index) => (
              <div key={index} className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.category}</h3>
                <p className="text-gray-600 mb-3">{category.description}</p>
                <div className="text-sm text-gray-500">
                  <strong>Examples:</strong> {category.examples.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How We Use Your Information */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
          <div className="space-y-6">
            {dataUses.map((use, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{use.purpose}</h3>
                <p className="text-gray-600 mb-3">{use.description}</p>
                <div className="text-sm text-gray-500">
                  <strong>Examples:</strong> {use.examples.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Sharing */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Sharing and Disclosure</h2>
          <p className="text-gray-600 mb-6">
            We do not sell, trade, or otherwise transfer your personal information to third parties without 
            your consent, except as described in this policy.
          </p>
          <div className="space-y-6">
            {dataSharing.map((share, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{share.category}</h3>
                <p className="text-gray-600 mb-3">{share.description}</p>
                <div className="text-sm text-gray-500">
                  <strong>Examples:</strong> {share.examples.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Security */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
          <p className="text-gray-600 mb-4">
            We implement appropriate technical and organizational security measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start space-x-3">
              <Lock className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">End-to-end encryption for data in transit and at rest</span>
            </div>
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">Regular security audits and vulnerability assessments</span>
            </div>
            <div className="flex items-start space-x-3">
              <Users className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">Role-based access controls and authentication</span>
            </div>
            <div className="flex items-start space-x-3">
              <Database className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">Secure data storage with regular backups</span>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
          <p className="text-gray-600 mb-6">
            Depending on your location, you may have certain rights regarding your personal information. 
            We will respond to your requests in accordance with applicable law.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userRights.map((right, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <right.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{right.right}</h3>
                  <p className="text-sm text-gray-600">{right.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Retention */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Retention</h2>
          <p className="text-gray-600 mb-4">
            We retain your personal information for as long as necessary to provide our services, 
            comply with legal obligations, resolve disputes, and enforce our agreements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Calendar className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-lg font-semibold text-gray-900">Account Data</div>
              <div className="text-sm text-gray-600">Retained while account is active</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Database className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-lg font-semibold text-gray-900">Project Data</div>
              <div className="text-sm text-gray-600">Retained per project settings</div>
            </div>
            <div className="text-center p-4 border border-gray-200 rounded-lg">
              <Globe className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-lg font-semibold text-gray-900">Usage Analytics</div>
              <div className="text-sm text-gray-600">Retained for 2 years</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about this Privacy Policy or our data practices, 
            please contact us using the information below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary-600" />
              <div>
                <div className="font-medium text-gray-900">Email</div>
                <div className="text-gray-600">privacy@dreambuild.com</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary-600" />
              <div>
                <div className="font-medium text-gray-900">Phone</div>
                <div className="text-gray-600">+1 (555) 123-4567</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary-600" />
              <div>
                <div className="font-medium text-gray-900">Address</div>
                <div className="text-gray-600">
                  Bradley Virtual Solutions, LLC<br />
                  123 Innovation Drive<br />
                  San Francisco, CA 94105
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privacy

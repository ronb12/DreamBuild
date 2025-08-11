import React from 'react'
import { 
  FileText, 
  CheckCircle, 
  AlertTriangle, 
  Shield, 
  Users, 
  Globe,
  Mail,
  Phone,
  MapPin,
  Building
} from 'lucide-react'

const Terms = () => {
  const lastUpdated = 'January 15, 2024'

  const keyTerms = [
    {
      term: 'Service',
      definition: 'The DreamBuild AI-powered development platform and related services.'
    },
    {
      term: 'User',
      definition: 'Any individual or entity that accesses or uses our Service.'
    },
    {
      term: 'Content',
      definition: 'Code, projects, data, and other materials created or uploaded to our Service.'
    },
    {
      term: 'AI-Generated Content',
      definition: 'Code and content generated through our AI Builder service.'
    }
  ]

  const userObligations = [
    {
      obligation: 'Account Security',
      description: 'Maintain the security of your account credentials and notify us of any unauthorized use.'
    },
    {
      obligation: 'Acceptable Use',
      description: 'Use the Service only for lawful purposes and in accordance with these Terms.'
    },
    {
      obligation: 'Content Responsibility',
      description: 'Ensure that all content you create or upload complies with applicable laws and regulations.'
    },
    {
      obligation: 'Prohibited Activities',
      description: 'Refrain from activities that could harm the Service or other users.'
    }
  ]

  const prohibitedActivities = [
    'Attempting to gain unauthorized access to our systems or other users\' accounts',
    'Using the Service to distribute malware, viruses, or other harmful code',
    'Engaging in activities that could overload or damage our infrastructure',
    'Violating intellectual property rights or other legal rights',
    'Harassing, abusing, or threatening other users',
    'Using the Service for illegal or fraudulent purposes'
  ]

  const intellectualProperty = [
    {
      category: 'Our IP',
      description: 'DreamBuild retains all rights to our platform, technology, and proprietary content.',
      examples: ['Platform code', 'User interface design', 'AI models', 'Branding and trademarks']
    },
    {
      category: 'Your Content',
      description: 'You retain ownership of content you create, subject to our license to use it.',
      examples: ['Your projects', 'Custom code', 'Project data', 'User-generated content']
    },
    {
      category: 'AI-Generated Content',
      description: 'AI-generated content is subject to our AI Content Policy and licensing terms.',
      examples: ['Generated code', 'AI suggestions', 'Optimization recommendations']
    }
  ]

  const serviceLimitations = [
    {
      limitation: 'Availability',
      description: 'We strive for high availability but cannot guarantee uninterrupted service.',
      details: 'Scheduled maintenance, updates, and unforeseen technical issues may cause temporary outages.'
    },
    {
      limitation: 'Performance',
      description: 'Service performance depends on various factors including your internet connection.',
      details: 'We optimize for performance but cannot guarantee specific response times or throughput.'
    },
    {
      limitation: 'AI Accuracy',
      description: 'AI-generated content is provided "as is" and may require review and modification.',
      details: 'While we strive for accuracy, AI-generated code should be tested before production use.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-primary-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These terms govern your use of DreamBuild. By using our service, 
              you agree to be bound by these terms and conditions.
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
            These Terms of Service ("Terms") govern your use of DreamBuild, an AI-powered development 
            platform provided by Bradley Virtual Solutions, LLC ("we," "our," or "us").
          </p>
          <p className="text-gray-600 mb-4">
            By accessing or using our Service, you agree to be bound by these Terms. If you disagree 
            with any part of these terms, you may not access the Service.
          </p>
          <p className="text-gray-600">
            <strong>DreamBuild is a product of Bradley Virtual Solutions, LLC.</strong>
          </p>
        </div>

        {/* Key Terms */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Terms</h2>
          <div className="space-y-4">
            {keyTerms.map((item, index) => (
              <div key={index} className="border-l-4 border-primary-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.term}</h3>
                <p className="text-gray-600">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* User Obligations */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">User Obligations</h2>
          <div className="space-y-4">
            {userObligations.map((obligation, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{obligation.obligation}</h3>
                <p className="text-gray-600">{obligation.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prohibited Activities */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prohibited Activities</h2>
          <p className="text-gray-600 mb-4">
            The following activities are strictly prohibited and may result in account suspension or termination:
          </p>
          <ul className="space-y-2">
            {prohibitedActivities.map((activity, index) => (
              <li key={index} className="flex items-start space-x-2 text-gray-600">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>{activity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property Rights</h2>
          <div className="space-y-6">
            {intellectualProperty.map((item, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.category}</h3>
                <p className="text-gray-600 mb-3">{item.description}</p>
                <div className="text-sm text-gray-500">
                  <strong>Examples:</strong> {item.examples.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Limitations */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Limitations</h2>
          <div className="space-y-6">
            {serviceLimitations.map((limitation, index) => (
              <div key={index} className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{limitation.limitation}</h3>
                <p className="text-gray-600 mb-2">{limitation.description}</p>
                <p className="text-sm text-gray-500">{limitation.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy and Data */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Privacy and Data Protection</h2>
          <p className="text-gray-600 mb-4">
            Your privacy is important to us. Our collection and use of personal information is governed by our 
            Privacy Policy, which is incorporated into these Terms by reference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">Data encryption and secure storage</span>
            </div>
            <div className="flex items-start space-x-3">
              <Users className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">User control over personal data</span>
            </div>
            <div className="flex items-start space-x-3">
              <Globe className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">GDPR and CCPA compliance</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-gray-600">Regular security audits</span>
            </div>
          </div>
        </div>

        {/* Termination */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Account Termination</h3>
              <p className="text-gray-600">
                We may terminate or suspend your account immediately, without prior notice, for conduct that 
                we believe violates these Terms or is harmful to other users or the Service.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Effect of Termination</h3>
              <p className="text-gray-600">
                Upon termination, your right to use the Service will cease immediately. We may delete your 
                account and data, though we will retain certain information as required by law.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Disclaimers and Limitations</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-gray-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Service "As Is"</h3>
              <p className="text-gray-600">
                The Service is provided "as is" and "as available" without warranties of any kind, 
                either express or implied.
              </p>
            </div>
            <div className="border-l-4 border-gray-500 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">Limitation of Liability</h3>
              <p className="text-gray-600">
                Our liability is limited to the amount you paid for the Service in the 12 months 
                preceding the claim.
              </p>
            </div>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to modify these Terms at any time. We will notify users of any material 
            changes by posting the new Terms on this page and updating the "Last updated" date.
          </p>
          <p className="text-gray-600">
            Your continued use of the Service after any changes constitutes acceptance of the new Terms. 
            If you do not agree to the new terms, you should discontinue use of the Service.
          </p>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about these Terms of Service, please contact us using the information below.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary-600" />
              <div>
                <div className="font-medium text-gray-900">Email</div>
                <div className="text-gray-600">legal@dreambuild.com</div>
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
            <div className="flex items-center space-x-3">
              <Building className="w-5 h-5 text-primary-600" />
              <div>
                <div className="font-medium text-gray-900">Company</div>
                <div className="text-gray-600">Bradley Virtual Solutions, LLC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms

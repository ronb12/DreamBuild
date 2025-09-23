import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Database, UserCheck, FileText, Mail, Phone } from 'lucide-react'

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Account information (name, email, profile picture)',
        'Project data and code you create using our platform',
        'Usage analytics to improve our services',
        'Device information for compatibility purposes',
        'Communication data when you contact our support team'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Provide and maintain our AI development platform',
        'Process your code generation requests and project management',
        'Improve our AI models and service quality',
        'Send important updates about your projects',
        'Provide customer support and technical assistance',
        'Comply with legal obligations and protect our rights'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'All data is encrypted in transit and at rest',
        'We use industry-standard security measures',
        'Regular security audits and updates',
        'Limited access to your data by authorized personnel only',
        'Secure cloud infrastructure with enterprise-grade protection',
        'Your code and projects are stored securely and privately'
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: [
        'Access your personal data at any time',
        'Request correction of inaccurate information',
        'Delete your account and associated data',
        'Export your projects and data',
        'Opt out of non-essential communications',
        'Withdraw consent for data processing'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100" style={{ paddingTop: '100px' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Privacy <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use DreamBuild.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: September 23, 2024
            </p>
          </motion.div>
        </div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            DreamBuild ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered development platform.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By using DreamBuild, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our service.
          </p>
        </motion.div>

        {/* Main Content Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mt-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Information</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              <strong>Data Retention:</strong> We retain your information for as long as your account is active or as needed to provide services. You may request deletion of your data at any time.
            </p>
            <p>
              <strong>Third-Party Services:</strong> We may use third-party services for analytics, hosting, and other functions. These services have their own privacy policies.
            </p>
            <p>
              <strong>International Transfers:</strong> Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place.
            </p>
            <p>
              <strong>Children's Privacy:</strong> Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.
            </p>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 mt-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-600">privacy@dreambuild.dev</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Data Protection Officer</p>
                <p className="text-gray-600">dpo@dreambuild.dev</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8 p-6 bg-gray-50 rounded-xl"
        >
          <p className="text-sm text-gray-500">
            This Privacy Policy may be updated from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Privacy



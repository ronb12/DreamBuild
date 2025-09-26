import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, XCircle, Users, Code, Database, Globe, Mail, Phone } from 'lucide-react'

const Terms = () => {
  const sections = [
    {
      icon: FileText,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using DreamBuild, you accept and agree to be bound by these Terms of Service',
        'If you do not agree to these terms, you may not use our service',
        'We reserve the right to modify these terms at any time without prior notice',
        'Your continued use of the service after changes constitutes acceptance of the new terms',
        'These terms apply to all users, including visitors, registered users, and premium subscribers'
      ]
    },
    {
      icon: Code,
      title: 'Service Description',
      content: [
        'DreamBuild is an AI-powered development platform supporting 100+ programming languages',
        'We provide code generation, project management, and development tools',
        'Our service includes both free and premium features',
        'We may modify, suspend, or discontinue any part of our service at any time',
        'We do not guarantee uninterrupted access to our service'
      ]
    },
    {
      icon: Users,
      title: 'User Accounts',
      content: [
        'You must provide accurate and complete information when creating an account',
        'You are responsible for maintaining the confidentiality of your account credentials',
        'You must notify us immediately of any unauthorized use of your account',
        'You are responsible for all activities that occur under your account',
        'We reserve the right to suspend or terminate accounts that violate these terms'
      ]
    },
    {
      icon: Database,
      title: 'User Content and Data',
      content: [
        'You retain ownership of all code and projects you create using our platform',
        'You grant us a limited license to process your content to provide our services',
        'You are responsible for ensuring your content does not violate any laws or third-party rights',
        'We may use anonymized data to improve our AI models and services',
        'You must not upload malicious code, viruses, or harmful content'
      ]
    },
    {
      icon: Shield,
      title: 'Prohibited Uses',
      content: [
        'Use our service for any unlawful purpose or to solicit others to perform unlawful acts',
        'Violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances',
        'Transmit or procure the sending of any advertising or promotional material without our consent',
        'Impersonate or attempt to impersonate another person or entity',
        'Engage in any other conduct that restricts or inhibits anyone\'s use of the service'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Intellectual Property',
      content: [
        'DreamBuild and its original content, features, and functionality are owned by Bradley Virtual Solutions, LLC',
        'Our service is protected by copyright, trademark, and other intellectual property laws',
        'You may not reproduce, distribute, or create derivative works without our permission',
        'Any feedback or suggestions you provide may be used by us without compensation',
        'Third-party trademarks and copyrights remain the property of their respective owners'
      ]
    }
  ]

  const additionalSections = [
    {
      title: 'Service Availability',
      content: 'We strive to maintain high service availability but do not guarantee uninterrupted access. We may perform maintenance, updates, or modifications that temporarily affect service availability.'
    },
    {
      title: 'Limitation of Liability',
      content: 'To the maximum extent permitted by law, DreamBuild and Bradley Virtual Solutions, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our service.'
    },
    {
      title: 'Indemnification',
      content: 'You agree to defend, indemnify, and hold harmless DreamBuild and Bradley Virtual Solutions, LLC from any claims, damages, or expenses arising from your use of our service or violation of these terms.'
    },
    {
      title: 'Termination',
      content: 'We may terminate or suspend your account and access to our service immediately, without prior notice, for any reason, including if you breach these Terms of Service.'
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
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Scale className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Terms of <span className="text-green-600">Service</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These terms govern your use of DreamBuild. Please read them carefully before using our AI development platform.
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
            Welcome to DreamBuild, operated by Bradley Virtual Solutions, LLC ("Company," "we," "our," or "us"). These Terms of Service ("Terms") govern your use of our AI-powered development platform and services.
          </p>
          <p className="text-gray-600 leading-relaxed">
            By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access the service.
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
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Legal Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 space-y-6"
        >
          {additionalSections.map((section, index) => (
            <div key={section.title} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </motion.div>

        {/* Governing Law */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="bg-green-50 border border-green-200 rounded-2xl p-8 mt-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              These Terms shall be interpreted and governed by the laws of the State of California, United States, without regard to its conflict of law provisions.
            </p>
            <p>
              Any disputes arising from these Terms or your use of our service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will remain in full force and effect.
            </p>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 mt-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">Email</p>
                <p className="text-gray-600">legal@dreambuild.dev</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">Legal Department</p>
                <p className="text-gray-600">Bradley Virtual Solutions, LLC</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-center mt-8 p-6 bg-gray-50 rounded-xl"
        >
          <p className="text-sm text-gray-500">
            These Terms of Service may be updated from time to time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last updated" date.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Terms


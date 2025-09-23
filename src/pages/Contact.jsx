import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, CheckCircle, Github, Twitter, Linkedin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      value: 'hello@dreambuild.dev',
      action: 'mailto:hello@dreambuild.dev'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ronb12/DreamBuild', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    setFormData({ name: '', email: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000)
  }

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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about DreamBuild? We'd love to hear from you.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-800">Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon
                  return (
                    <a
                      key={method.title}
                      href={method.action}
                      className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-1">{method.description}</p>
                        <p className="text-sm font-medium text-primary">{method.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Us</h3>
              <div className="space-y-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <Icon className="h-5 w-5 text-gray-600 group-hover:text-primary transition-colors" />
                      <span className="text-sm font-medium text-gray-900 group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </a>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

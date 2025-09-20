import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MapPin, MessageSquare, Send, Clock,
  Github, Twitter, Linkedin, Globe, CheckCircle, AlertCircle
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours',
      value: 'hello@dreambuild.dev',
      action: 'mailto:hello@dreambuild.dev'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      value: 'Available 9 AM - 6 PM EST',
      action: '#'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our headquarters location',
      value: 'San Francisco, CA',
      action: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ronb12/DreamBuild', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Globe, href: '#', label: 'Website' }
  ]

  const faqs = [
    {
      question: 'How do I get started with DreamBuild?',
      answer: 'Simply visit our documentation page for a complete getting started guide. You can also try our AI Builder without any setup required.'
    },
    {
      question: 'Do you offer technical support?',
      answer: 'Yes! We provide comprehensive technical support through email, live chat, and our community forum. Premium users get priority support.'
    },
    {
      question: 'Can I use DreamBuild for commercial projects?',
      answer: 'Absolutely! DreamBuild is designed for both personal and commercial use. Check our pricing page for details on different plans.'
    },
    {
      question: 'How does the AI code generation work?',
      answer: 'DreamBuild uses advanced AI models to generate code based on your prompts. You can use our cloud AI services or set up local AI with Ollama for complete privacy.'
    }
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
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about DreamBuild? Need help getting started? Want to share feedback? 
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="sales">Sales Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Partnership</option>
                    <option value="bug">Bug Report</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
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
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Other Ways to Reach Us</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <a
                      key={method.title}
                      href={method.action}
                      className="flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-muted transition-colors group"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
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
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">Follow Us</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 border border-border rounded-lg hover:bg-muted transition-colors group"
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {social.label}
                      </span>
                    </a>
                  )
                })}
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary/5 border border-primary/20 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-foreground">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Emergency support available 24/7 for premium users.
              </p>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about DreamBuild and our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join thousands of developers who are already building amazing applications with DreamBuild.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors">
              Try DreamBuild Free
            </button>
            <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
              View Documentation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact

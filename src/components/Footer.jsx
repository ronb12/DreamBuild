import React, { useState } from 'react'
import { Github, Twitter, Mail, Heart, Send, Sparkles, Code, Database, Users, ExternalLink } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">DreamBuild</span>
                <p className="text-xs text-muted-foreground -mt-1">AI Development Platform</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Build amazing projects with AI-powered code generation. Simple, fast, and effective development tools for modern developers.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/ronb12/DreamBuild"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-muted rounded-lg transition-colors group"
                title="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-muted rounded-lg transition-colors group"
                title="Twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
              </a>
              <a
                href="mailto:contact@dreambuild.ai"
                className="p-2 hover:bg-muted rounded-lg transition-colors group"
                title="Email"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get the latest updates, new features, and development tips delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubscribed ? (
                    <>
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span className="text-sm">Subscribe</span>
                    </>
                  )}
                </button>
              </div>
              {isSubscribed && (
                <p className="text-sm text-green-600 flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Thanks for subscribing! We'll keep you updated.
                </p>
              )}
            </form>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Product</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/ai-builder" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
                  <span>AI Builder</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="/templates" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
                  <span>Templates</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="/projects" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
                  <span>Projects</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
                  <span>Dashboard</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">Resources</h3>
            </div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/documentation" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
                  <span>Documentation</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="/examples" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
                  <span>Code Examples</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="/community" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
                  <span>Community</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="/support" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
                  <span>Support</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>&copy; 2024 Bradley Virtual Solutions, LLC</span>
                <span>•</span>
                <span>All rights reserved</span>
              </div>
              <div className="flex items-center gap-4">
                <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a>
                <a href="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>for developers worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
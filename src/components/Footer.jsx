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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">DreamBuild</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered development platform for modern developers.
            </p>
            <div className="flex gap-2">
              <a
                href="https://github.com/ronb12/DreamBuild"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                title="GitHub"
              >
                <Github className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                title="Twitter"
              >
                <Twitter className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </a>
              <a
                href="mailto:contact@dreambuild.ai"
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                title="Email"
              >
                <Mail className="h-4 w-4 text-muted-foreground hover:text-foreground" />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest updates and features.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubscribed ? (
                    <Mail className="h-4 w-4" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </button>
              </div>
              {isSubscribed && (
                <p className="text-sm text-green-600">Thanks for subscribing!</p>
              )}
            </form>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Product</h3>
                <p className="text-xs text-muted-foreground">Platform Features</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="/ai-builder" className="text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-3 group p-2 rounded-lg hover:bg-muted/50">
                  <span className="text-sm font-medium">AI Builder</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </a>
              </li>
              <li>
                <a href="/templates" className="text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-3 group p-2 rounded-lg hover:bg-muted/50">
                  <span className="text-sm font-medium">Templates</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </a>
              </li>
              <li>
                <a href="/projects" className="text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-3 group p-2 rounded-lg hover:bg-muted/50">
                  <span className="text-sm font-medium">Projects</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-3 group p-2 rounded-lg hover:bg-muted/50">
                  <span className="text-sm font-medium">Dashboard</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Resources</h3>
                <p className="text-xs text-muted-foreground">Help & Support</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li>
                <a href="/documentation" className="text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-3 group p-2 rounded-lg hover:bg-muted/50">
                  <span className="text-sm font-medium">Documentation</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </a>
              </li>
              <li>
                <a href="/examples" className="text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-3 group p-2 rounded-lg hover:bg-muted/50">
                  <span className="text-sm font-medium">Code Examples</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </a>
              </li>
              <li>
                <a href="/community" className="text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-3 group p-2 rounded-lg hover:bg-muted/50">
                  <span className="text-sm font-medium">Community</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </a>
              </li>
              <li>
                <a href="/support" className="text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-3 group p-2 rounded-lg hover:bg-muted/50">
                  <span className="text-sm font-medium">Support</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-12 mt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col lg:flex-row items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <span className="font-medium">&copy; 2024 Bradley Virtual Solutions, LLC</span>
                <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                <span>All rights reserved</span>
              </div>
              <div className="flex items-center gap-6">
                <a href="/privacy" className="hover:text-foreground transition-colors duration-200 font-medium">Privacy Policy</a>
                <a href="/terms" className="hover:text-foreground transition-colors duration-200 font-medium">Terms of Service</a>
                <a href="/cookies" className="hover:text-foreground transition-colors duration-200 font-medium">Cookie Policy</a>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="font-medium">Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span className="font-medium">for developers worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
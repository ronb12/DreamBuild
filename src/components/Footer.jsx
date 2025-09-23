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
    <footer className="bg-gradient-to-b from-background to-muted/20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-xl flex items-center justify-center shadow-lg ring-1 ring-primary/20">
                <Sparkles className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <span className="text-2xl font-bold text-foreground">DreamBuild</span>
                <p className="text-sm text-muted-foreground -mt-1 font-medium">AI Development Platform</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Build amazing projects with AI-powered code generation. Simple, fast, and effective development tools for modern developers.
            </p>
            <div className="flex gap-2">
              <a
                href="https://github.com/ronb12/DreamBuild"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-muted rounded-xl transition-all duration-200 group hover:scale-105"
                title="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-muted rounded-xl transition-all duration-200 group hover:scale-105"
                title="Twitter"
              >
                <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
              </a>
              <a
                href="mailto:contact@dreambuild.ai"
                className="p-3 hover:bg-muted rounded-xl transition-all duration-200 group hover:scale-105"
                title="Email"
              >
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-foreground" />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Stay Updated</h3>
                <p className="text-xs text-muted-foreground">Newsletter & Updates</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Get the latest updates, new features, and development tips delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 text-sm border border-border rounded-xl bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 shadow-sm"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary-dark transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  {isSubscribed ? (
                    <>
                      <Mail className="h-4 w-4" />
                      <span className="text-sm font-medium">Subscribed!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span className="text-sm font-medium">Subscribe</span>
                    </>
                  )}
                </button>
              </div>
              {isSubscribed && (
                <div className="flex items-center gap-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <Heart className="h-4 w-4 text-green-600" />
                  <p className="text-sm text-green-600 font-medium">Thanks for subscribing! We'll keep you updated.</p>
                </div>
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
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

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/ai-builder" className="text-muted-foreground hover:text-foreground transition-colors">AI Builder</a></li>
              <li><a href="/templates" className="text-muted-foreground hover:text-foreground transition-colors">Templates</a></li>
              <li><a href="/documentation" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="/support" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              <span>&copy; 2024 Bradley Virtual Solutions, LLC</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
              <a href="/contact" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
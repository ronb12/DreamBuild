import React from 'react'
import { motion } from 'framer-motion'
import { 
  Download as DownloadIcon, 
  Apple, 
  CheckCircle, 
  Monitor,
  Terminal,
  Folder,
  Zap,
  Shield
} from 'lucide-react'

const DownloadPage = () => {
  const features = [
    {
      icon: Terminal,
      title: 'Real Terminal Commands',
      description: 'Execute actual system commands, not simulated ones'
    },
    {
      icon: Folder,
      title: 'Full File System Access',
      description: 'Read, write, and manage files anywhere on your system'
    },
    {
      icon: Zap,
      title: 'Native Performance',
      description: 'Desktop-level performance with full system integration'
    },
    {
      icon: Shield,
      title: 'Complete System Access',
      description: 'Access hardware, processes, and system APIs'
    }
  ]

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Apple className="h-10 w-10 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Download DreamBuild Desktop
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Get the full desktop experience with complete system access, 
              just like modern IDEs. Works on both Intel and Apple Silicon Macs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Desktop App Features</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need for professional development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl p-8 shadow-xl"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Download Instructions</h2>
              
              <div className="bg-muted/50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Quick Setup (5 minutes)</h3>
                <div className="text-left space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">1</span>
                    <div>
                      <p className="font-medium">Open Terminal on your Mac</p>
                      <p className="text-sm text-muted-foreground">Press Cmd+Space, type "Terminal", and press Enter</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">2</span>
                    <div>
                      <p className="font-medium">Navigate to Desktop</p>
                      <code className="bg-muted px-2 py-1 rounded text-sm">cd ~/Desktop</code>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">3</span>
                    <div>
                      <p className="font-medium">Clone DreamBuild repository</p>
                      <code className="bg-muted px-2 py-1 rounded text-sm">git clone https://github.com/yourusername/DreamBuild.git</code>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">4</span>
                    <div>
                      <p className="font-medium">Build the desktop app</p>
                      <code className="bg-muted px-2 py-1 rounded text-sm">cd DreamBuild && npm run build-desktop</code>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">5</span>
                    <div>
                      <p className="font-medium">Install the app</p>
                      <p className="text-sm text-muted-foreground">Drag <code className="bg-muted px-1 rounded">DreamBuild.app</code> from <code className="bg-muted px-1 rounded">dist-electron/mac/</code> to Applications folder</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">✅ What You Get</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Real terminal commands</li>
                    <li>• Full file system access</li>
                    <li>• Native macOS performance</li>
                    <li>• Complete system integration</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">📋 Requirements</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• macOS 10.14 or later</li>
                    <li>• Node.js and npm installed</li>
                    <li>• Git installed</li>
                    <li>• 2GB free disk space</li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-muted-foreground mb-4">
                  The desktop app provides the same functionality as modern IDEs with additional AI features
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/ai-builder"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary-dark transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
                  >
                    <Monitor className="h-5 w-5" />
                    Try Web Version First
                  </a>
                  <a
                    href="/templates"
                    className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary/20 text-primary rounded-xl hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 text-lg font-semibold"
                  >
                    <DownloadIcon className="h-5 w-5" />
                    Browse Templates
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DownloadPage

import React from 'react'
import { Code } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <Code className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your personal dashboard is coming soon! Track your projects and AI usage here.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
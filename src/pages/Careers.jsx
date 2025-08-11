import React from 'react'
import { 
  Clock, 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Code,
  Building,
  Rocket,
  Lightbulb,
  TrendingUp
} from 'lucide-react'

const Careers = () => {



  const companyValues = [
    {
      icon: Heart,
      title: 'User-First',
      description: 'Everything we build is designed to make developers more productive and successful.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI and development tools.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Great products come from diverse teams working together towards common goals.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We\'re building tools that will change how millions of developers work.'
    }
  ]

  const benefits = [
    {
      icon: Building,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible schedules and modern collaboration tools.'
    },
    {
      icon: Rocket,
      title: 'Career Growth',
      description: 'Clear career paths and opportunities to take on new challenges and responsibilities.'
    },
    {
      icon: Lightbulb,
      title: 'Learning & Development',
      description: 'Budget for conferences, courses, and tools to help you grow professionally.'
    },
    {
      icon: TrendingUp,
      title: 'Competitive Compensation',
      description: 'Attractive salary, equity packages, and comprehensive benefits.'
    }
  ]



  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Help us revolutionize how developers build, test, and deploy applications. 
              Join a team that's passionate about AI, developer productivity, and building the future.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>50+ Team Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Remote-First</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Cutting-Edge Tech</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Opportunities */}
        <div className="mb-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Future Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're currently focused on building and launching our AI-powered development platform. 
              While we're not actively hiring at the moment, we're always interested in connecting with 
              talented individuals who share our vision for the future of software development.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Stay Connected</h3>
              <p className="text-blue-800 mb-4">
                When we do start hiring, we'll be looking for passionate engineers, designers, and product 
                professionals who want to revolutionize how developers build applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Join Talent Network
                </button>
                <button className="btn-secondary">
                  Follow Our Journey
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in Future Opportunities?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            While we're not actively hiring right now, we'd love to stay connected with talented professionals 
            who are passionate about AI-powered development tools. Let's keep in touch!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Join Talent Network
            </button>
            <button className="btn-secondary">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers

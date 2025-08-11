import React, { useState } from 'react'
import { 
  Briefcase, 
  MapPin, 
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
  const [selectedDepartment, setSelectedDepartment] = useState('all')

  const departments = [
    { id: 'all', name: 'All Departments', count: 12 },
    { id: 'engineering', name: 'Engineering', count: 6 },
    { id: 'product', name: 'Product', count: 3 },
    { id: 'design', name: 'Design', count: 2 },
    { id: 'marketing', name: 'Marketing', count: 1 }
  ]

  const openPositions = [
    {
      id: 1,
      title: 'Senior Full-Stack Engineer',
      department: 'engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Join our core engineering team to build the next generation of AI-powered development tools.',
      requirements: [
        'Expert in React, Node.js, and TypeScript',
        'Experience with AI/ML integration',
        'Strong understanding of cloud infrastructure',
        'Passion for developer productivity tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible remote work options',
        'Health, dental, and vision insurance',
        'Professional development budget'
      ]
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help us build intelligent code generation and analysis systems that revolutionize development.',
      requirements: [
        'Strong background in machine learning',
        'Experience with NLP and code analysis',
        'Proficiency in Python and PyTorch',
        'Understanding of software development workflows'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote-first culture',
        'Latest AI/ML tools and infrastructure',
        'Conference and training opportunities'
      ]
    },
    {
      id: 3,
      title: 'Product Manager',
      department: 'product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and execution for our AI-powered development platform.',
      requirements: [
        'Experience in developer tools or SaaS products',
        'Strong analytical and strategic thinking',
        'Excellent communication and collaboration skills',
        'Understanding of software development lifecycle'
      ],
      benefits: [
        'Competitive salary and equity',
        'Hybrid work environment',
        'Comprehensive benefits package',
        'Career growth opportunities'
      ]
    },
    {
      id: 4,
      title: 'Senior UX Designer',
      department: 'design',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Create intuitive and powerful user experiences for developers using our platform.',
      requirements: [
        'Strong portfolio of complex web applications',
        'Experience with developer tools or technical products',
        'Proficiency in Figma and design systems',
        'User research and testing experience'
      ],
      benefits: [
        'Competitive salary and equity',
        'Remote work flexibility',
        'Design tools and resources',
        'Creative freedom and ownership'
      ]
    }
  ]

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
      title: 'Modern Office',
      description: 'Beautiful workspace in the heart of San Francisco with stunning city views.'
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

  const filteredPositions = openPositions.filter(position =>
    selectedDepartment === 'all' || position.department === selectedDepartment
  )

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

        {/* Open Positions */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Open Positions</h2>
            <div className="flex items-center space-x-4">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name} ({dept.count})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {filteredPositions.map((position) => (
              <div key={position.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{position.department.charAt(0).toUpperCase() + position.department.slice(1)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-500">
                    Posted recently • {Math.floor(Math.random() * 7) + 1} days ago
                  </div>
                  <button className="btn-primary">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't See the Right Role?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. 
            Send us your resume and let's discuss how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Send Resume
            </button>
            <button className="btn-secondary">
              Contact Recruiting
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers

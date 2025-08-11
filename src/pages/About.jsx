import React from 'react'
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Code, 
  Zap, 
  Shield, 
  Heart,
  Building,
  Rocket,
  Lightbulb,
  TrendingUp
} from 'lucide-react'

const About = () => {
  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI-powered development tools.',
      icon: Lightbulb,
      color: 'text-blue-600'
    },
    {
      title: 'Developer Experience',
      description: 'Every feature is designed with developers in mind, ensuring a seamless workflow.',
      icon: Code,
      color: 'text-green-600'
    },
    {
      title: 'Quality & Reliability',
      description: 'Enterprise-grade infrastructure with 99.9% uptime and robust security.',
      icon: Shield,
      color: 'text-purple-600'
    },
    {
      title: 'Community Driven',
      description: 'We build in public and listen to our community to shape the future of development.',
      icon: Users,
      color: 'text-orange-600'
    }
  ]

  const milestones = [
    {
      year: '2024',
      title: 'DreamBuild Launch',
      description: 'Launched our revolutionary AI-powered development platform',
      icon: Rocket
    },
    {
      year: '2023',
      title: 'Platform Development',
      description: 'Built the foundation with advanced AI and build tools',
      icon: Building
    },
    {
      year: '2022',
      title: 'Company Founded',
      description: 'Bradley Virtual Solutions, LLC established with a vision for the future',
      icon: Target
    }
  ]

  const team = [
    {
      name: 'Ronell Bradley',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 15+ years in software development and AI',
      avatar: 'RB'
    },
    {
      name: 'Development Team',
      role: 'Engineering',
      bio: 'World-class engineers building the future of development',
      avatar: 'DT'
    },
    {
      name: 'AI Research Team',
      role: 'Machine Learning',
      bio: 'Experts in AI and code generation technologies',
      avatar: 'AI'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About DreamBuild
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're revolutionizing how developers build applications by combining the power of artificial intelligence 
              with cutting-edge development tools. Our mission is to make software development accessible, efficient, 
              and enjoyable for everyone.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Building className="w-4 h-4 mr-2" />
                Bradley Virtual Solutions, LLC
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2" />
                Global Platform
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Industry Leading
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At DreamBuild, we believe that every developer should have access to the tools and technologies 
                that enable them to build amazing applications quickly and efficiently.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                By leveraging artificial intelligence and modern development practices, we're democratizing 
                software development and empowering developers to focus on what matters most: creating 
                innovative solutions that solve real-world problems.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-green-600">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <span className="font-medium">Growing rapidly</span>
                </div>
                <div className="flex items-center text-blue-600">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-medium">10,000+ developers</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why DreamBuild?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Zap className="w-5 h-5 mr-3" />
                    AI-powered code generation
                  </li>
                  <li className="flex items-center">
                    <Globe className="w-5 h-5 mr-3" />
                    Multi-platform support
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 mr-3" />
                    Enterprise-grade security
                  </li>
                  <li className="flex items-center">
                    <Heart className="w-5 h-5 mr-3" />
                    Developer-first approach
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do at DreamBuild
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="inline-flex p-3 rounded-full bg-white shadow-sm mb-4">
                  <value.icon className={`w-6 h-6 ${value.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Info */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About Bradley Virtual Solutions, LLC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DreamBuild is a product of Bradley Virtual Solutions, LLC, a forward-thinking technology company 
              dedicated to advancing the field of software development through innovative AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Company Structure</h3>
              <p className="text-gray-600">
                Bradley Virtual Solutions, LLC is a registered business entity focused on developing 
                cutting-edge software development tools and platforms.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Focus</h3>
              <p className="text-gray-600">
                Our strategic focus is on AI-powered development tools that increase productivity 
                and reduce time-to-market for software projects.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">
                We serve developers worldwide, providing tools and platforms that work seamlessly 
                across different regions and development environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our company's development
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center">
                    <milestone.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <div className="text-3xl font-bold text-primary-600">{milestone.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind DreamBuild who are committed to revolutionizing software development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{member.avatar}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join the Future of Development?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Start building amazing applications with DreamBuild today. Experience the power of AI-powered 
            development and join thousands of developers who are already transforming their workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Get Started Free
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, Target, Heart, Code, Zap, Globe, Award, TrendingUp,
  Github, Twitter, Mail, Linkedin, ArrowRight, Star, CheckCircle
} from 'lucide-react'

const About = () => {
  const team = [
    {
      name: 'Ronell Bradley',
      role: 'Founder & CEO',
      bio: 'Full-stack developer with 10+ years of experience building scalable applications and AI-powered solutions.',
      avatar: 'https://via.placeholder.com/150x150/2563eb/ffffff?text=RB',
      social: {
        github: 'https://github.com/ronb12',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Sarah Chen',
      role: 'Lead AI Engineer',
      bio: 'Machine learning expert specializing in natural language processing and code generation models.',
      avatar: 'https://via.placeholder.com/150x150/10b981/ffffff?text=SC',
      social: {
        github: '#',
        twitter: '#',
        linkedin: '#'
      }
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Frontend Architect',
      bio: 'React specialist with a passion for creating beautiful, performant user interfaces and developer tools.',
      avatar: 'https://via.placeholder.com/150x150/f59e0b/ffffff?text=MR',
      social: {
        github: '#',
        twitter: '#',
        linkedin: '#'
      }
    }
  ]

  const values = [
    {
      icon: Code,
      title: 'Developer-First',
      description: 'Everything we build is designed with developers in mind, prioritizing productivity and ease of use.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and constantly push the boundaries of what\'s possible with AI.'
    },
    {
      icon: Globe,
      title: 'Accessibility',
      description: 'We believe AI development tools should be accessible to everyone, regardless of experience level.'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Our community is at the heart of everything we do. We listen, learn, and grow together.'
    }
  ]

  const milestones = [
    {
      year: '2024',
      title: 'DreamBuild Launch',
      description: 'Launched the first version of DreamBuild with local AI integration and template system.'
    },
    {
      year: '2023',
      title: 'Company Founded',
      description: 'Bradley Virtual Solutions, LLC was founded with a vision to democratize AI development.'
    },
    {
      year: '2022',
      title: 'Research Phase',
      description: 'Extensive research into AI development tools and developer pain points.'
    }
  ]

  const stats = [
    { label: 'Active Users', value: '10,000+', icon: Users },
    { label: 'Projects Created', value: '50,000+', icon: Code },
    { label: 'Languages Supported', value: '170+', icon: Globe },
    { label: 'Community Members', value: '2,500+', icon: Heart }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">DreamBuild</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We're on a mission to democratize AI development and make it accessible to developers of all skill levels. 
              DreamBuild is more than just a tool—it's a platform that empowers creativity and innovation.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            )
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To revolutionize how developers create software by making AI-powered development tools 
              accessible, intuitive, and powerful. We believe that every developer should have the 
              ability to leverage AI to build amazing applications, regardless of their experience level.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A world where AI and human creativity work together seamlessly to build the next 
              generation of applications. We envision a future where development barriers are 
              eliminated and innovation is accelerated through intelligent automation.
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape how we build DreamBuild.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind DreamBuild, dedicated to making AI development accessible to everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to revolutionize AI development.
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{milestone.title}</h3>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {milestone.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">Join Our Mission</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to be part of the future of AI development? Join thousands of developers 
            who are already building amazing applications with DreamBuild.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary-dark transition-colors">
              <Code className="h-5 w-5" />
              Start Building
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
              <Users className="h-5 w-5" />
              Join Community
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

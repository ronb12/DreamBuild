import React, { useState, useEffect } from 'react'
import { 
  BookOpen, 
  Code, 
  Globe, 
  Smartphone, 
  Database, 
  Server, 
  Palette, 
  Zap,
  Play,
  CheckCircle,
  Clock,
  Star,
  ArrowRight,
  Download,
  ExternalLink,
  Video,
  FileText,
  Trophy,
  Users,
  Target,
  BarChart3,
  TrendingUp
} from 'lucide-react'
import EducationDashboard from '../components/EducationDashboard'
import InteractiveTutorial from '../components/InteractiveTutorial'
import CodingChallenges from '../components/CodingChallenges'
import LearningProgress from '../components/LearningProgress'
import tutorialService from '../services/tutorialService'

const Education = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [activeCategory, setActiveCategory] = useState('web-development')
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [selectedTutorial, setSelectedTutorial] = useState(null)
  const [progress, setProgress] = useState({})
  const [completedLessons, setCompletedLessons] = useState(new Set())

  // Course categories and content
  const categories = {
    'web-development': {
      title: 'Web Development',
      icon: Globe,
      color: 'blue',
      description: 'Learn to build modern websites and web applications',
      courses: [
        {
          id: 'html-css-basics',
          title: 'HTML & CSS Fundamentals',
          duration: '4 hours',
          difficulty: 'Beginner',
          rating: 4.8,
          students: 12500,
          description: 'Master the building blocks of web development',
          lessons: [
            { id: 1, title: 'Introduction to HTML', duration: '30 min', completed: false },
            { id: 2, title: 'HTML Elements and Tags', duration: '45 min', completed: false },
            { id: 3, title: 'CSS Basics and Styling', duration: '40 min', completed: false },
            { id: 4, title: 'Layout with Flexbox', duration: '35 min', completed: false },
            { id: 5, title: 'Responsive Design', duration: '50 min', completed: false }
          ]
        },
        {
          id: 'javascript-essentials',
          title: 'JavaScript Essentials',
          duration: '6 hours',
          difficulty: 'Intermediate',
          rating: 4.9,
          students: 18900,
          description: 'Learn JavaScript from basics to advanced concepts',
          lessons: [
            { id: 1, title: 'Variables and Data Types', duration: '25 min', completed: false },
            { id: 2, title: 'Functions and Scope', duration: '40 min', completed: false },
            { id: 3, title: 'DOM Manipulation', duration: '45 min', completed: false },
            { id: 4, title: 'Async Programming', duration: '35 min', completed: false },
            { id: 5, title: 'ES6+ Features', duration: '50 min', completed: false }
          ]
        },
        {
          id: 'react-complete',
          title: 'React Complete Guide',
          duration: '8 hours',
          difficulty: 'Intermediate',
          rating: 4.7,
          students: 22100,
          description: 'Build modern web applications with React',
          lessons: [
            { id: 1, title: 'React Components', duration: '40 min', completed: false },
            { id: 2, title: 'State and Props', duration: '35 min', completed: false },
            { id: 3, title: 'Hooks and Lifecycle', duration: '45 min', completed: false },
            { id: 4, title: 'Routing and Navigation', duration: '30 min', completed: false },
            { id: 5, title: 'State Management', duration: '50 min', completed: false }
          ]
        }
      ]
    },
    'mobile-development': {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'green',
      description: 'Create mobile apps for iOS and Android',
      courses: [
        {
          id: 'react-native-basics',
          title: 'React Native Basics',
          duration: '5 hours',
          difficulty: 'Intermediate',
          rating: 4.6,
          students: 9800,
          description: 'Build cross-platform mobile apps',
          lessons: [
            { id: 1, title: 'React Native Setup', duration: '30 min', completed: false },
            { id: 2, title: 'Components and Navigation', duration: '45 min', completed: false },
            { id: 3, title: 'State Management', duration: '40 min', completed: false },
            { id: 4, title: 'API Integration', duration: '35 min', completed: false },
            { id: 5, title: 'App Deployment', duration: '50 min', completed: false }
          ]
        }
      ]
    },
    'backend-development': {
      title: 'Backend Development',
      icon: Server,
      color: 'purple',
      description: 'Learn server-side development and APIs',
      courses: [
        {
          id: 'nodejs-express',
          title: 'Node.js & Express',
          duration: '6 hours',
          difficulty: 'Intermediate',
          rating: 4.8,
          students: 15200,
          description: 'Build robust backend services',
          lessons: [
            { id: 1, title: 'Node.js Fundamentals', duration: '35 min', completed: false },
            { id: 2, title: 'Express Framework', duration: '40 min', completed: false },
            { id: 3, title: 'RESTful APIs', duration: '45 min', completed: false },
            { id: 4, title: 'Database Integration', duration: '50 min', completed: false },
            { id: 5, title: 'Authentication & Security', duration: '40 min', completed: false }
          ]
        }
      ]
    },
    'data-science': {
      title: 'Data Science',
      icon: Database,
      color: 'orange',
      description: 'Analyze data and build machine learning models',
      courses: [
        {
          id: 'python-data-analysis',
          title: 'Python Data Analysis',
          duration: '7 hours',
          difficulty: 'Beginner',
          rating: 4.5,
          students: 11200,
          description: 'Learn data analysis with Python',
          lessons: [
            { id: 1, title: 'Python Basics', duration: '30 min', completed: false },
            { id: 2, title: 'Pandas Library', duration: '45 min', completed: false },
            { id: 3, title: 'Data Visualization', duration: '40 min', completed: false },
            { id: 4, title: 'Statistical Analysis', duration: '50 min', completed: false },
            { id: 5, title: 'Machine Learning Intro', duration: '45 min', completed: false }
          ]
        }
      ]
    }
  }

  const learningPaths = [
    {
      id: 'full-stack-developer',
      title: 'Full-Stack Developer',
      duration: '12 weeks',
      difficulty: 'Intermediate',
      description: 'Complete path to become a full-stack developer',
      courses: ['html-css-basics', 'javascript-essentials', 'react-complete', 'nodejs-express'],
      color: 'blue'
    },
    {
      id: 'mobile-developer',
      title: 'Mobile App Developer',
      duration: '8 weeks',
      difficulty: 'Intermediate',
      description: 'Learn to build mobile applications',
      courses: ['html-css-basics', 'javascript-essentials', 'react-native-basics'],
      color: 'green'
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      duration: '10 weeks',
      difficulty: 'Advanced',
      description: 'Master data analysis and machine learning',
      courses: ['python-data-analysis'],
      color: 'orange'
    }
  ]

  const resources = [
    {
      title: 'Interactive Code Editor',
      description: 'Practice coding with our built-in editor',
      icon: Code,
      color: 'blue',
      link: '/editor'
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step video guides',
      icon: Video,
      color: 'red',
      link: '/tutorials'
    },
    {
      title: 'Documentation',
      description: 'Comprehensive coding documentation',
      icon: FileText,
      color: 'green',
      link: '/docs'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other learners',
      icon: Users,
      color: 'purple',
      link: '/community'
    }
  ]

  const achievements = [
    { title: 'First Code', description: 'Write your first line of code', icon: Code, unlocked: true },
    { title: 'Web Master', description: 'Complete web development course', icon: Globe, unlocked: false },
    { title: 'Mobile Expert', description: 'Build your first mobile app', icon: Smartphone, unlocked: false },
    { title: 'Data Wizard', description: 'Complete data science course', icon: Database, unlocked: false }
  ]

  const handleStartCourse = (courseId) => {
    setSelectedCourse(courseId)
  }

  const handleStartTutorial = (tutorialId) => {
    const tutorial = tutorialService.getTutorial(tutorialId)
    setSelectedTutorial(tutorial)
    setActiveTab('tutorial')
  }

  const handleCompleteTutorial = (completionData) => {
    console.log('Tutorial completed:', completionData)
    setSelectedTutorial(null)
    setActiveTab('dashboard')
  }

  const handleCompleteLesson = (lessonId) => {
    setCompletedLessons(prev => new Set([...prev, lessonId]))
  }

  const getProgressPercentage = (courseId) => {
    const course = categories[activeCategory]?.courses.find(c => c.id === courseId)
    if (!course) return 0
    
    const completedCount = course.lessons.filter(lesson => 
      completedLessons.has(lesson.id)
    ).length
    
    return (completedCount / course.lessons.length) * 100
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Learn to Code</h1>
            <p className="text-xl text-blue-100 mb-8">
              Master programming skills with our comprehensive educational platform
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Start Learning
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Browse Courses
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
            { id: 'tutorials', label: 'Tutorials', icon: BookOpen },
            { id: 'challenges', label: 'Challenges', icon: Code },
            { id: 'progress', label: 'Progress', icon: TrendingUp }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && <EducationDashboard />}

        {/* Tutorial Tab */}
        {activeTab === 'tutorial' && selectedTutorial && (
          <InteractiveTutorial 
            tutorial={selectedTutorial} 
            onComplete={handleCompleteTutorial}
          />
        )}

        {/* Challenges Tab */}
        {activeTab === 'challenges' && <CodingChallenges />}

        {/* Progress Tab */}
        {activeTab === 'progress' && <LearningProgress />}

        {/* Tutorials Tab */}
        {activeTab === 'tutorials' && (
          <div className="space-y-6">
            {/* Learning Paths */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Learning Paths</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {learningPaths.map((path) => (
                  <div key={path.id} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 bg-${path.color}-500 rounded-lg flex items-center justify-center`}>
                        <Target className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{path.title}</h3>
                        <p className="text-sm text-gray-600">{path.duration} • {path.difficulty}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{path.description}</p>
                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                      Start Path
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Categories */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Categories</h2>
              
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-4 mb-8">
                {Object.entries(categories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeCategory === key
                        ? 'bg-blue-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <category.icon className="h-5 w-5" />
                    {category.title}
                  </button>
                ))}
              </div>

              {/* Courses Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories[activeCategory]?.courses.map((course) => (
                  <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{course.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{course.description}</p>
                      
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {course.students.toLocaleString()} students
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>Progress</span>
                          <span>{Math.round(getProgressPercentage(course.id))}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${getProgressPercentage(course.id)}%` }}
                          ></div>
                        </div>
                      </div>

                      <button
                        onClick={() => handleStartTutorial(course.id)}
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <Play className="h-4 w-4" />
                        {getProgressPercentage(course.id) > 0 ? 'Continue' : 'Start Course'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Learning Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((resource, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div className={`w-12 h-12 bg-${resource.color}-500 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <resource.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <button className="text-blue-500 hover:text-blue-600 font-medium flex items-center justify-center gap-1 mx-auto">
                      <span>Explore</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`bg-white rounded-lg shadow-lg p-6 text-center ${
                    achievement.unlocked ? 'border-2 border-green-500' : 'opacity-60'
                  }`}>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                      achievement.unlocked ? 'bg-green-500' : 'bg-gray-300'
                    }`}>
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 mb-4">{achievement.description}</p>
                    {achievement.unlocked && (
                      <div className="flex items-center justify-center gap-1 text-green-600">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">Unlocked</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-blue-100">Courses Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100K+</div>
                  <div className="text-blue-100">Students Learning</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-blue-100">Hours of Content</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">4.8</div>
                  <div className="text-blue-100">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Education

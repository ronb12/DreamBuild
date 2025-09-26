import React, { useState, useEffect } from 'react'
import { 
  BookOpen, 
  Play, 
  CheckCircle, 
  Clock, 
  Star, 
  TrendingUp,
  Target,
  Award,
  BarChart3,
  PieChart,
  Activity,
  Calendar,
  Trophy,
  Zap,
  Code,
  Globe,
  Smartphone,
  Database
} from 'lucide-react'
import tutorialService from '../services/tutorialService'

const EducationDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [tutorials, setTutorials] = useState([])
  const [stats, setStats] = useState({})
  const [recentActivity, setRecentActivity] = useState([])

  useEffect(() => {
    loadTutorialData()
  }, [])

  const loadTutorialData = () => {
    const allTutorials = tutorialService.getAllTutorials()
    const tutorialStats = tutorialService.getTutorialStats()
    
    setTutorials(allTutorials)
    setStats(tutorialStats)
    
    // Mock recent activity
    setRecentActivity([
      { type: 'completed', tutorial: 'HTML & CSS Fundamentals', time: '2 hours ago' },
      { type: 'started', tutorial: 'JavaScript Essentials', time: '1 day ago' },
      { type: 'completed', tutorial: 'React Complete Guide', time: '3 days ago' },
      { type: 'started', tutorial: 'Node.js & Express', time: '1 week ago' }
    ])
  }

  const getTutorialIcon = (language) => {
    switch (language) {
      case 'HTML/CSS': return Globe
      case 'JavaScript': return Code
      case 'React': return Zap
      case 'Node.js': return Database
      default: return BookOpen
    }
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100'
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100'
      case 'Advanced': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'tutorials', label: 'Tutorials', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: TrendingUp },
    { id: 'achievements', label: 'Achievements', icon: Trophy }
  ]

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Education Dashboard</h1>
        <p className="text-gray-600">Track your learning progress and achievements</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Tutorials Completed</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.completedTutorials}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Steps Completed</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.completedSteps}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Completion Rate</p>
                  <p className="text-2xl font-bold text-gray-900">{Math.round(stats.completionRate)}%</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total Time</p>
                  <p className="text-2xl font-bold text-gray-900">24h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activity
            </h3>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    activity.type === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                    {activity.type === 'completed' ? (
                      <CheckCircle className="h-4 w-4 text-white" />
                    ) : (
                      <Play className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">
                      {activity.type === 'completed' ? 'Completed' : 'Started'} {activity.tutorial}
                    </p>
                    <p className="text-sm text-gray-600">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Paths */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Paths</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-medium text-gray-900 mb-2">Web Development</h4>
                <p className="text-sm text-gray-600 mb-3">Learn HTML, CSS, JavaScript, and React</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <span className="text-sm text-gray-600">75%</span>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-medium text-gray-900 mb-2">Mobile Development</h4>
                <p className="text-sm text-gray-600 mb-3">Build mobile apps with React Native</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                  <span className="text-sm text-gray-600">30%</span>
                </div>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <h4 className="font-medium text-gray-900 mb-2">Backend Development</h4>
                <p className="text-sm text-gray-600 mb-3">Learn Node.js, Express, and databases</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                  </div>
                  <span className="text-sm text-gray-600">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tutorials Tab */}
      {activeTab === 'tutorials' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => {
              const Icon = getTutorialIcon(tutorial.language)
              const progress = tutorialService.getTutorialProgress(tutorial.id)
              const progressPercentage = tutorial.steps.length > 0 
                ? (progress.completedSteps.length / tutorial.steps.length) * 100 
                : 0

              return (
                <div key={tutorial.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{tutorial.title}</h3>
                        <p className="text-sm text-gray-600">{tutorial.language}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">{tutorial.description}</p>

                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {tutorial.duration}
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
                        {tutorial.difficulty}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{Math.round(progressPercentage)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progressPercentage}%` }}
                        ></div>
                      </div>
                    </div>

                    <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                      <Play className="h-4 w-4" />
                      {progress.completedSteps.length > 0 ? 'Continue' : 'Start Tutorial'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Progress Tab */}
      {activeTab === 'progress' && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning Progress</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">Weekly Progress</h4>
                <div className="space-y-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                    <div key={day} className="flex items-center gap-3">
                      <span className="w-8 text-sm text-gray-600">{day}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${Math.random() * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600">{Math.floor(Math.random() * 4)}h</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">Skill Development</h4>
                <div className="space-y-3">
                  {[
                    { skill: 'HTML/CSS', level: 85 },
                    { skill: 'JavaScript', level: 70 },
                    { skill: 'React', level: 60 },
                    { skill: 'Node.js', level: 30 }
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{skill.skill}</span>
                        <span className="text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Achievements Tab */}
      {activeTab === 'achievements' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'First Steps', description: 'Complete your first tutorial', icon: BookOpen, unlocked: true, points: 10 },
              { title: 'Code Warrior', description: 'Complete 5 tutorials', icon: Code, unlocked: true, points: 50 },
              { title: 'Streak Master', description: 'Learn for 7 days in a row', icon: Trophy, unlocked: true, points: 100 },
              { title: 'Speed Learner', description: 'Complete a tutorial in one day', icon: Zap, unlocked: false, points: 75 },
              { title: 'Perfectionist', description: 'Get 100% on all quizzes', icon: Star, unlocked: false, points: 150 },
              { title: 'Scholar', description: 'Complete 20 tutorials', icon: Award, unlocked: false, points: 300 }
            ].map((achievement, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 ${
                achievement.unlocked ? 'border-2 border-green-500' : 'opacity-60'
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    achievement.unlocked ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    <achievement.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-600">+{achievement.points} points</span>
                  {achievement.unlocked && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default EducationDashboard


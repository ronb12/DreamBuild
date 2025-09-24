import React, { useState, useEffect } from 'react'
import { 
  TrendingUp, 
  Calendar, 
  Target, 
  Award, 
  BookOpen, 
  Code, 
  Trophy,
  Star,
  Clock,
  CheckCircle,
  Play,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react'

const LearningProgress = () => {
  const [timeframe, setTimeframe] = useState('week')
  const [progressData, setProgressData] = useState({})
  const [achievements, setAchievements] = useState([])
  const [streak, setStreak] = useState(0)
  const [totalTime, setTotalTime] = useState(0)

  const timeframes = [
    { id: 'week', label: 'This Week', days: 7 },
    { id: 'month', label: 'This Month', days: 30 },
    { id: 'year', label: 'This Year', days: 365 }
  ]

  const mockProgressData = {
    week: {
      totalTime: 12.5,
      coursesCompleted: 2,
      challengesSolved: 8,
      streak: 5,
      dailyActivity: [
        { day: 'Mon', hours: 2.5, challenges: 3 },
        { day: 'Tue', hours: 1.5, challenges: 2 },
        { day: 'Wed', hours: 3.0, challenges: 4 },
        { day: 'Thu', hours: 2.0, challenges: 1 },
        { day: 'Fri', hours: 1.5, challenges: 2 },
        { day: 'Sat', hours: 1.0, challenges: 1 },
        { day: 'Sun', hours: 1.0, challenges: 0 }
      ]
    },
    month: {
      totalTime: 45.2,
      coursesCompleted: 8,
      challengesSolved: 35,
      streak: 12,
      dailyActivity: Array.from({ length: 30 }, (_, i) => ({
        day: `Day ${i + 1}`,
        hours: Math.random() * 3,
        challenges: Math.floor(Math.random() * 5)
      }))
    },
    year: {
      totalTime: 180.5,
      coursesCompleted: 25,
      challengesSolved: 150,
      streak: 25,
      dailyActivity: Array.from({ length: 365 }, (_, i) => ({
        day: `Day ${i + 1}`,
        hours: Math.random() * 4,
        challenges: Math.floor(Math.random() * 8)
      }))
    }
  }

  const mockAchievements = [
    {
      id: 1,
      title: 'First Steps',
      description: 'Complete your first lesson',
      icon: BookOpen,
      unlocked: true,
      unlockedAt: '2024-01-15',
      points: 10
    },
    {
      id: 2,
      title: 'Code Warrior',
      description: 'Solve 10 coding challenges',
      icon: Code,
      unlocked: true,
      unlockedAt: '2024-01-20',
      points: 50
    },
    {
      id: 3,
      title: 'Streak Master',
      description: 'Maintain a 7-day learning streak',
      icon: Trophy,
      unlocked: true,
      unlockedAt: '2024-01-25',
      points: 100
    },
    {
      id: 4,
      title: 'Course Conqueror',
      description: 'Complete 5 courses',
      icon: Award,
      unlocked: false,
      points: 200
    },
    {
      id: 5,
      title: 'Challenge Champion',
      description: 'Solve 50 coding challenges',
      icon: Star,
      unlocked: false,
      points: 300
    }
  ]

  useEffect(() => {
    setProgressData(mockProgressData[timeframe])
    setAchievements(mockAchievements)
    setStreak(mockProgressData[timeframe].streak)
    setTotalTime(mockProgressData[timeframe].totalTime)
  }, [timeframe])

  const getStreakColor = (streak) => {
    if (streak >= 30) return 'text-red-600'
    if (streak >= 14) return 'text-orange-600'
    if (streak >= 7) return 'text-yellow-600'
    return 'text-green-600'
  }

  const getStreakIcon = (streak) => {
    if (streak >= 30) return <Trophy className="h-5 w-5" />
    if (streak >= 14) return <Award className="h-5 w-5" />
    if (streak >= 7) return <Star className="h-5 w-5" />
    return <Target className="h-5 w-5" />
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Learning Progress</h1>
          <p className="text-gray-600">Track your coding journey and achievements</p>
        </div>
        <div className="flex items-center gap-2">
          {timeframes.map(tf => (
            <button
              key={tf.id}
              onClick={() => setTimeframe(tf.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                timeframe === tf.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tf.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <Clock className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Time</p>
              <p className="text-2xl font-bold text-gray-900">{totalTime}h</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Courses Completed</p>
              <p className="text-2xl font-bold text-gray-900">{progressData.coursesCompleted}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
              <Code className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Challenges Solved</p>
              <p className="text-2xl font-bold text-gray-900">{progressData.challengesSolved}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              {getStreakIcon(streak)}
            </div>
            <div>
              <p className="text-sm text-gray-600">Current Streak</p>
              <p className={`text-2xl font-bold ${getStreakColor(streak)}`}>{streak} days</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Daily Activity
          </h3>
          <div className="h-64 flex items-end gap-2">
            {progressData.dailyActivity?.slice(0, 7).map((day, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-gray-200 rounded-t-lg relative">
                  <div 
                    className="bg-blue-500 rounded-t-lg transition-all duration-500"
                    style={{ height: `${(day.hours / 4) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-600 mt-2">{day.day}</div>
                <div className="text-xs text-gray-500">{day.hours.toFixed(1)}h</div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Achievements
          </h3>
          <div className="space-y-3">
            {achievements.map((achievement) => (
              <div key={achievement.id} className={`p-3 rounded-lg border ${
                achievement.unlocked 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    achievement.unlocked ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    <achievement.icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                    {achievement.unlocked && (
                      <p className="text-xs text-green-600 mt-1">
                        +{achievement.points} points
                      </p>
                    )}
                  </div>
                  {achievement.unlocked && (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Goals */}
      <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Target className="h-5 w-5" />
          Learning Goals
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Weekly Goal</h4>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <span className="text-sm text-gray-600">15/20h</span>
            </div>
            <p className="text-sm text-gray-600">Study 20 hours this week</p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Monthly Goal</h4>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <span className="text-sm text-gray-600">3/5 courses</span>
            </div>
            <p className="text-sm text-gray-600">Complete 5 courses this month</p>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <h4 className="font-medium text-gray-900 mb-2">Challenge Goal</h4>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <span className="text-sm text-gray-600">20/50 challenges</span>
            </div>
            <p className="text-sm text-gray-600">Solve 50 challenges this month</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningProgress

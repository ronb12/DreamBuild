import React, { useState, useEffect } from 'react'
import { 
  Trophy, 
  Star, 
  Clock, 
  Target, 
  Zap, 
  CheckCircle, 
  AlertCircle,
  Code,
  Play,
  RotateCcw,
  Download,
  Share2,
  Flame,
  Award
} from 'lucide-react'

const CodingChallenges = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [selectedLanguage, setSelectedLanguage] = useState('all')
  const [challenges, setChallenges] = useState([])
  const [userProgress, setUserProgress] = useState({})
  const [leaderboard, setLeaderboard] = useState([])

  const difficulties = [
    { id: 'all', label: 'All Levels', color: 'gray' },
    { id: 'easy', label: 'Easy', color: 'green' },
    { id: 'medium', label: 'Medium', color: 'yellow' },
    { id: 'hard', label: 'Hard', color: 'red' }
  ]

  const languages = [
    { id: 'all', label: 'All Languages', icon: Code },
    { id: 'javascript', label: 'JavaScript', icon: Code },
    { id: 'python', label: 'Python', icon: Code },
    { id: 'java', label: 'Java', icon: Code },
    { id: 'cpp', label: 'C++', icon: Code }
  ]

  const challengeData = [
    {
      id: 1,
      title: 'Two Sum',
      description: 'Find two numbers in an array that add up to a target value.',
      difficulty: 'easy',
      language: 'javascript',
      points: 10,
      timeLimit: 30,
      tags: ['arrays', 'hash-table'],
      testCases: [
        { input: '[2,7,11,15], 9', output: '[0,1]' },
        { input: '[3,2,4], 6', output: '[1,2]' }
      ],
      starterCode: `function twoSum(nums, target) {
    // Your code here
    return [];
}`,
      solution: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`
    },
    {
      id: 2,
      title: 'Reverse Linked List',
      description: 'Reverse a singly linked list.',
      difficulty: 'medium',
      language: 'javascript',
      points: 20,
      timeLimit: 45,
      tags: ['linked-list', 'recursion'],
      testCases: [
        { input: '[1,2,3,4,5]', output: '[5,4,3,2,1]' },
        { input: '[1,2]', output: '[2,1]' }
      ],
      starterCode: `function reverseList(head) {
    // Your code here
    return null;
}`,
      solution: `function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}`
    },
    {
      id: 3,
      title: 'Binary Tree Maximum Path Sum',
      description: 'Find the maximum path sum in a binary tree.',
      difficulty: 'hard',
      language: 'javascript',
      points: 50,
      timeLimit: 60,
      tags: ['binary-tree', 'dynamic-programming'],
      testCases: [
        { input: '[1,2,3]', output: '6' },
        { input: '[-10,9,20,null,null,15,7]', output: '42' }
      ],
      starterCode: `function maxPathSum(root) {
    // Your code here
    return 0;
}`,
      solution: `function maxPathSum(root) {
    let maxSum = -Infinity;
    
    function maxGain(node) {
        if (!node) return 0;
        
        const leftGain = Math.max(maxGain(node.left), 0);
        const rightGain = Math.max(maxGain(node.right), 0);
        
        const priceNewPath = node.val + leftGain + rightGain;
        maxSum = Math.max(maxSum, priceNewPath);
        
        return node.val + Math.max(leftGain, rightGain);
    }
    
    maxGain(root);
    return maxSum;
}`
    }
  ]

  const leaderboardData = [
    { rank: 1, name: 'Alex Chen', points: 1250, avatar: '👨‍💻', streak: 15 },
    { rank: 2, name: 'Sarah Kim', points: 1180, avatar: '👩‍💻', streak: 12 },
    { rank: 3, name: 'Mike Johnson', points: 1100, avatar: '👨‍💻', streak: 8 },
    { rank: 4, name: 'Emma Wilson', points: 1050, avatar: '👩‍💻', streak: 10 },
    { rank: 5, name: 'David Lee', points: 980, avatar: '👨‍💻', streak: 6 }
  ]

  useEffect(() => {
    setChallenges(challengeData)
    setLeaderboard(leaderboardData)
  }, [])

  const filteredChallenges = challenges.filter(challenge => {
    const difficultyMatch = selectedDifficulty === 'all' || challenge.difficulty === selectedDifficulty
    const languageMatch = selectedLanguage === 'all' || challenge.language === selectedLanguage
    return difficultyMatch && languageMatch
  })

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100'
      case 'medium': return 'text-yellow-600 bg-yellow-100'
      case 'hard': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getDifficultyIcon = (difficulty) => {
    switch (difficulty) {
      case 'easy': return <CheckCircle className="h-4 w-4" />
      case 'medium': return <Target className="h-4 w-4" />
      case 'hard': return <Zap className="h-4 w-4" />
      default: return <Code className="h-4 w-4" />
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Coding Challenges</h1>
        <p className="text-xl text-gray-600 mb-8">
          Test your skills with interactive coding challenges
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters and Leaderboard */}
        <div className="lg:col-span-1 space-y-6">
          {/* Filters */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
            
            {/* Difficulty Filter */}
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">Difficulty</h4>
              <div className="space-y-2">
                {difficulties.map(difficulty => (
                  <button
                    key={difficulty.id}
                    onClick={() => setSelectedDifficulty(difficulty.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedDifficulty === difficulty.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {getDifficultyIcon(difficulty.id)}
                    {difficulty.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Language Filter */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Language</h4>
              <div className="space-y-2">
                {languages.map(language => (
                  <button
                    key={language.id}
                    onClick={() => setSelectedLanguage(language.id)}
                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedLanguage === language.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <language.icon className="h-4 w-4" />
                    {language.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Leaderboard */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              Leaderboard
            </h3>
            <div className="space-y-3">
              {leaderboard.map((user, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{user.avatar}</span>
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.points} points</p>
                    </div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Flame className="h-4 w-4 text-orange-500" />
                      {user.streak}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Challenges List */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredChallenges.map((challenge) => (
              <div key={challenge.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {challenge.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{challenge.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                        {challenge.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      {challenge.points} points
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {challenge.timeLimit} min
                    </div>
                    <div className="flex items-center gap-1">
                      <Code className="h-4 w-4" />
                      {challenge.language}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {challenge.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                      <Play className="h-4 w-4" />
                      Start Challenge
                    </button>
                    <button className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredChallenges.length === 0 && (
            <div className="text-center py-12">
              <Code className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No challenges found</h3>
              <p className="text-gray-600">Try adjusting your filters</p>
            </div>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">100+</div>
            <div className="text-blue-100">Challenges</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">50K+</div>
            <div className="text-blue-100">Solutions</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">10K+</div>
            <div className="text-blue-100">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">95%</div>
            <div className="text-blue-100">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodingChallenges

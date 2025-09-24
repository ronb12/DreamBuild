import React, { useState, useEffect, useRef } from 'react'
import { 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle, 
  AlertCircle, 
  Code, 
  Eye,
  Download,
  Share2,
  Trophy,
  Clock,
  Target
} from 'lucide-react'

const InteractiveTutorial = ({ tutorial, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [userCode, setUserCode] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState('')
  const [errors, setErrors] = useState([])
  const [hints, setHints] = useState([])
  const [completedSteps, setCompletedSteps] = useState(new Set())
  const [timeSpent, setTimeSpent] = useState(0)
  const [startTime, setStartTime] = useState(null)
  const editorRef = useRef(null)

  useEffect(() => {
    if (tutorial && tutorial.steps.length > 0) {
      setUserCode(tutorial.steps[0].startingCode || '')
      setStartTime(Date.now())
    }
  }, [tutorial])

  useEffect(() => {
    let interval
    if (isRunning && startTime) {
      interval = setInterval(() => {
        setTimeSpent(Math.floor((Date.now() - startTime) / 1000))
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning, startTime])

  const runCode = () => {
    setIsRunning(true)
    setErrors([])
    
    try {
      // Simulate code execution
      const result = executeCode(userCode)
      setOutput(result)
      
      // Check if code matches expected output
      const currentStepData = tutorial.steps[currentStep]
      if (currentStepData.expectedOutput && result.includes(currentStepData.expectedOutput)) {
        setCompletedSteps(prev => new Set([...prev, currentStep]))
        if (currentStep === tutorial.steps.length - 1) {
          onComplete?.({
            timeSpent,
            stepsCompleted: completedSteps.size + 1,
            totalSteps: tutorial.steps.length
          })
        }
      }
    } catch (error) {
      setErrors([error.message])
    }
    
    setIsRunning(false)
  }

  const executeCode = (code) => {
    // Simple code execution simulation
    if (code.includes('console.log')) {
      const matches = code.match(/console\.log\(['"`]([^'"`]+)['"`]\)/g)
      if (matches) {
        return matches.map(match => 
          match.match(/console\.log\(['"`]([^'"`]+)['"`]\)/)[1]
        ).join('\n')
      }
    }
    return 'Code executed successfully!'
  }

  const nextStep = () => {
    if (currentStep < tutorial.steps.length - 1) {
      setCurrentStep(currentStep + 1)
      const nextStepData = tutorial.steps[currentStep + 1]
      setUserCode(nextStepData.startingCode || '')
    }
  }

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
      const prevStepData = tutorial.steps[currentStep - 1]
      setUserCode(prevStepData.startingCode || '')
    }
  }

  const resetCode = () => {
    const currentStepData = tutorial.steps[currentStep]
    setUserCode(currentStepData.startingCode || '')
    setOutput('')
    setErrors([])
  }

  const getHint = () => {
    const currentStepData = tutorial.steps[currentStep]
    if (currentStepData.hints && currentStepData.hints.length > 0) {
      const randomHint = currentStepData.hints[Math.floor(Math.random() * currentStepData.hints.length)]
      setHints(prev => [...prev, randomHint])
    }
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (!tutorial) return null

  const currentStepData = tutorial.steps[currentStep]
  const progress = ((currentStep + 1) / tutorial.steps.length) * 100

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Tutorial Header */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{tutorial.title}</h1>
            <p className="text-gray-600">{tutorial.description}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock className="h-4 w-4" />
              {formatTime(timeSpent)}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Target className="h-4 w-4" />
              {currentStep + 1} of {tutorial.steps.length}
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Step Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={previousStep}
            disabled={currentStep === 0}
            className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <span className="text-sm text-gray-600">
            Step {currentStep + 1}: {currentStepData.title}
          </span>
          <button
            onClick={nextStep}
            disabled={currentStep === tutorial.steps.length - 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Code Editor */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <Code className="h-5 w-5" />
              Code Editor
            </h3>
            <div className="flex items-center gap-2">
              <button
                onClick={getHint}
                className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-lg text-sm hover:bg-yellow-200"
              >
                Get Hint
              </button>
              <button
                onClick={resetCode}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="p-4">
            <textarea
              ref={editorRef}
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your code here..."
            />
            
            <div className="flex items-center gap-2 mt-4">
              <button
                onClick={runCode}
                disabled={isRunning}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50"
              >
                {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {isRunning ? 'Running...' : 'Run Code'}
              </button>
            </div>
          </div>
        </div>

        {/* Output and Instructions */}
        <div className="space-y-6">
          {/* Instructions */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Instructions</h3>
            <div className="prose prose-sm max-w-none">
              <p className="text-gray-700 mb-4">{currentStepData.instructions}</p>
              {currentStepData.examples && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Example:</h4>
                  <pre className="text-sm text-gray-700">{currentStepData.examples}</pre>
                </div>
              )}
            </div>
          </div>

          {/* Output */}
          <div className="bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Output
              </h3>
            </div>
            <div className="p-4">
              {output && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                  <pre className="text-sm text-green-800 whitespace-pre-wrap">{output}</pre>
                </div>
              )}
              
              {errors.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <span className="font-medium text-red-800">Errors:</span>
                  </div>
                  {errors.map((error, index) => (
                    <p key={index} className="text-sm text-red-700">{error}</p>
                  ))}
                </div>
              )}

              {hints.length > 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-4 w-4 text-yellow-500" />
                    <span className="font-medium text-yellow-800">Hints:</span>
                  </div>
                  {hints.map((hint, index) => (
                    <p key={index} className="text-sm text-yellow-700">{hint}</p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Completion Status */}
          {completedSteps.has(currentStep) && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-medium text-green-800">Step completed!</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hints */}
      {hints.length > 0 && (
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-medium text-yellow-800 mb-2">Available Hints:</h4>
          <ul className="list-disc list-inside text-sm text-yellow-700">
            {hints.map((hint, index) => (
              <li key={index}>{hint}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default InteractiveTutorial

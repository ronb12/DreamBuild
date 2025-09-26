import React, { useState, useEffect } from 'react';
import InteractiveCodeEditor from './InteractiveCodeEditor';
import { CheckCircle, Clock, Star, Trophy, ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';

const LiveTutorial = ({ tutorial, onComplete, onNext, onPrevious }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCodeComplete = (success) => {
    if (success) {
      setIsCompleted(true);
      onComplete({
        tutorialId: tutorial.id,
        timeSpent,
        hintsUsed,
        attempts,
        completed: true
      });
    } else {
      setAttempts(prev => prev + 1);
    }
  };

  const handleHintUsed = () => {
    setHintsUsed(prev => prev + 1);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onPrevious}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
            <div className="h-6 w-px bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">{tutorial.title}</h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(tutorial.difficulty)}`}>
              {tutorial.difficulty}
            </span>
            <div className="flex items-center gap-1 text-gray-600">
              <Clock className="h-4 w-4" />
              <span className="text-sm">{tutorial.duration}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-4">{tutorial.description}</p>

        {/* Progress Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{formatTime(timeSpent)}</div>
            <div className="text-sm text-gray-600">Time Spent</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{attempts}</div>
            <div className="text-sm text-gray-600">Attempts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{hintsUsed}</div>
            <div className="text-sm text-gray-600">Hints Used</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${isCompleted ? 'text-green-600' : 'text-gray-400'}`}>
              {isCompleted ? '✓' : '○'}
            </div>
            <div className="text-sm text-gray-600">Status</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Code Editor */}
        <div className="lg:col-span-2">
          <InteractiveCodeEditor
            initialCode={tutorial.initialCode}
            expectedOutput={tutorial.expectedOutput}
            instructions={tutorial.instructions}
            hints={tutorial.hints}
            onComplete={handleCodeComplete}
            language={tutorial.language}
          />
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Concepts */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Concepts Covered</h3>
            <div className="space-y-2">
              {tutorial.concepts?.map((concept, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-gray-700">{concept}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hints */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Hints Available</h3>
            <div className="space-y-2">
              {tutorial.hints?.map((hint, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-sm text-gray-700">{hint}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution */}
          {isCompleted && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Solution</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{tutorial.solution}</pre>
              </div>
            </div>
          )}

          {/* Achievement */}
          {isCompleted && (
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="h-6 w-6" />
                <h3 className="text-lg font-semibold">Tutorial Completed!</h3>
              </div>
              <p className="text-green-100 mb-4">Great job! You've mastered this concept.</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-green-200">Time</div>
                  <div className="font-semibold">{formatTime(timeSpent)}</div>
                </div>
                <div>
                  <div className="text-green-200">Hints Used</div>
                  <div className="font-semibold">{hintsUsed}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={onPrevious}
          className="flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Previous
        </button>
        
        <div className="flex items-center gap-4">
          <div className="text-sm text-gray-600">
            Progress: {currentStep + 1} of {tutorial.concepts?.length || 1}
          </div>
          <div className="w-32 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / (tutorial.concepts?.length || 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        <button
          onClick={onNext}
          disabled={!isCompleted}
          className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Next
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default LiveTutorial;


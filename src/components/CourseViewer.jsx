import React, { useState, useEffect } from 'react';
import { 
  Play, 
  CheckCircle, 
  Clock, 
  BookOpen, 
  ArrowLeft, 
  ArrowRight, 
  User, 
  Star,
  Award,
  Target,
  ChevronRight,
  Lock,
  Unlock
} from 'lucide-react';
import VideoPlayer from './VideoPlayer';

const CourseViewer = ({ courseId, courseData, onComplete, onBack }) => {
  const [currentModule, setCurrentModule] = useState(0);
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState(new Set());
  const [timeSpent, setTimeSpent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPlaying) {
        setTimeSpent(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    const totalLessons = courseData.modules.reduce((acc, module) => acc + module.lessons.length, 0);
    const completed = completedLessons.size;
    return (completed / totalLessons) * 100;
  };

  const handleLessonComplete = (lessonId) => {
    setCompletedLessons(prev => new Set([...prev, lessonId]));
    
    // Check if module is complete
    const currentModuleData = courseData.modules[currentModule];
    const moduleLessons = currentModuleData.lessons.map(l => l.id);
    const completedModuleLessons = moduleLessons.filter(id => completedLessons.has(id));
    
    if (completedModuleLessons.length === moduleLessons.length - 1) {
      // Module completed
      if (currentModule < courseData.modules.length - 1) {
        setCurrentModule(currentModule + 1);
        setCurrentLesson(0);
      } else {
        // Course completed
        onComplete({
          courseId,
          timeSpent,
          completedLessons: completedLessons.size,
          progress: 100
        });
      }
    } else {
      // Move to next lesson
      if (currentLesson < currentModuleData.lessons.length - 1) {
        setCurrentLesson(currentLesson + 1);
      } else {
        // Move to next module
        if (currentModule < courseData.modules.length - 1) {
          setCurrentModule(currentModule + 1);
          setCurrentLesson(0);
        }
      }
    }
  };

  const handleNext = () => {
    const currentModuleData = courseData.modules[currentModule];
    if (currentLesson < currentModuleData.lessons.length - 1) {
      setCurrentLesson(currentLesson + 1);
    } else if (currentModule < courseData.modules.length - 1) {
      setCurrentModule(currentModule + 1);
      setCurrentLesson(0);
    }
  };

  const handlePrevious = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1);
    } else if (currentModule > 0) {
      setCurrentModule(currentModule - 1);
      setCurrentLesson(courseData.modules[currentModule - 1].lessons.length - 1);
    }
  };

  const currentModuleData = courseData.modules[currentModule];
  const currentLessonData = currentModuleData.lessons[currentLesson];
  const isLessonCompleted = completedLessons.has(currentLessonData.id);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </button>
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              {formatTime(timeSpent)} spent
            </div>
            <div className="text-sm text-gray-600">
              {Math.round(getProgressPercentage())}% complete
            </div>
          </div>
        </div>

        <div className="flex items-start gap-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{courseData.title}</h1>
            <p className="text-gray-600 mb-4">{courseData.description}</p>
            
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {courseData.instructor}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {courseData.duration}
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                {courseData.rating}
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                {courseData.students.toLocaleString()} students
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Course Progress</span>
            <span>{Math.round(getProgressPercentage())}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-blue-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Course Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Course Content</h3>
            <div className="space-y-2">
              {courseData.modules.map((module, moduleIndex) => (
                <div key={module.id} className="space-y-1">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                      moduleIndex < currentModule ? 'bg-green-500' :
                      moduleIndex === currentModule ? 'bg-blue-500' : 'bg-gray-300'
                    }`}>
                      {moduleIndex < currentModule ? (
                        <CheckCircle className="h-3 w-3 text-white" />
                      ) : (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    {module.title}
                  </div>
                  <div className="ml-6 space-y-1">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div 
                        key={lesson.id}
                        className={`flex items-center gap-2 text-sm cursor-pointer p-2 rounded ${
                          moduleIndex === currentModule && lessonIndex === currentLesson
                            ? 'bg-blue-50 text-blue-700'
                            : completedLessons.has(lesson.id)
                            ? 'text-green-600'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={() => {
                          setCurrentModule(moduleIndex);
                          setCurrentLesson(lessonIndex);
                        }}
                      >
                        <div className={`w-3 h-3 rounded-full ${
                          completedLessons.has(lesson.id) ? 'bg-green-500' :
                          moduleIndex === currentModule && lessonIndex === currentLesson ? 'bg-blue-500' : 'bg-gray-300'
                        }`}></div>
                        <span className="flex-1">{lesson.title}</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span className="text-xs">{lesson.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Lesson Header */}
            <div className="bg-gray-50 px-6 py-4 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {currentLessonData.title}
                  </h2>
                  <p className="text-sm text-gray-600">
                    Module {currentModule + 1} • Lesson {currentLesson + 1} of {currentModuleData.lessons.length}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{currentLessonData.duration}</span>
                </div>
              </div>
            </div>

            {/* Lesson Content */}
            <div className="p-6">
              {currentLessonData.type === 'video' && (
                <div className="space-y-4">
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    {isPlaying ? (
                      <div className="relative">
                        <div className="aspect-video bg-gray-800 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                            <h3 className="text-lg font-semibold mb-2">Video Loading...</h3>
                            <p className="text-gray-300">This would be a real video lesson</p>
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-black bg-opacity-50 rounded-lg p-3">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => setIsPlaying(false)}
                                className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                              >
                                Pause
                              </button>
                              <div className="flex-1 bg-gray-600 rounded-full h-2">
                                <div className="bg-white h-2 rounded-full" style={{ width: '30%' }}></div>
                              </div>
                              <span className="text-white text-sm">2:30 / 8:45</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-video bg-gray-800 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Play className="h-16 w-16 mx-auto mb-4 hover:scale-110 transition-transform cursor-pointer" 
                                onClick={() => setIsPlaying(true)} />
                          <h3 className="text-xl font-semibold mb-2">Video Lesson</h3>
                          <p className="text-gray-300 mb-4">Click to start the video lesson</p>
                          <div className="text-sm text-gray-400">
                            Duration: {currentLessonData.duration}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Lesson Content</h4>
                    <p className="text-gray-700 mb-3">{currentLessonData.content.transcript}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>📹 Video Lesson</span>
                      <span>⏱️ {currentLessonData.duration}</span>
                      <span>🎯 {currentLessonData.content.objectives.length} objectives</span>
                    </div>
                  </div>
                </div>
              )}

              {currentLessonData.type === 'reading' && (
                <div className="space-y-4">
                  <div className="prose max-w-none">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Reading Material</h3>
                    <p className="text-gray-700 leading-relaxed">{currentLessonData.content.text}</p>
                  </div>
                </div>
              )}

              {currentLessonData.type === 'interactive' && (
                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Interactive Exercise</h4>
                    <p className="text-gray-700">{currentLessonData.content.instructions}</p>
                  </div>
                  
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                    <pre>// Your code will be executed here</pre>
                  </div>
                </div>
              )}

              {/* Learning Objectives */}
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Learning Objectives</h4>
                <ul className="space-y-2">
                  {currentLessonData.content.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={handlePrevious}
                  disabled={currentModule === 0 && currentLesson === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </button>

                <div className="flex items-center gap-4">
                  {!isLessonCompleted && (
                    <button
                      onClick={() => handleLessonComplete(currentLessonData.id)}
                      className="flex items-center gap-2 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <CheckCircle className="h-4 w-4" />
                      Mark Complete
                    </button>
                  )}
                  
                  {isLessonCompleted && (
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">Completed</span>
                    </div>
                  )}

                  <button
                    onClick={handleNext}
                    disabled={currentModule === courseData.modules.length - 1 && currentLesson === currentModuleData.lessons.length - 1}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseViewer;

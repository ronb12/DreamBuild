import React from 'react';
import { 
  Play, 
  Clock, 
  Star, 
  Users, 
  BookOpen, 
  Target,
  Award,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

const CourseSelection = ({ onSelectCourse, courseProgress }) => {
  const courses = [
    {
      id: 'html-css-basics',
      title: 'HTML & CSS Fundamentals',
      description: 'Master the building blocks of web development with HTML structure and CSS styling',
      duration: '4 hours',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 12500,
      instructor: 'Sarah Johnson',
      modules: 4,
      lessons: 12,
      color: 'blue',
      icon: '🌐',
      topics: ['HTML Structure', 'CSS Styling', 'Responsive Design', 'Layout'],
      prerequisites: 'No prior experience required',
      whatYoullLearn: [
        'Create semantic HTML documents',
        'Style pages with CSS',
        'Build responsive layouts',
        'Use modern CSS features'
      ]
    },
    {
      id: 'javascript-essentials',
      title: 'JavaScript Essentials',
      description: 'Learn JavaScript from basics to advanced concepts including DOM manipulation and async programming',
      duration: '6 hours',
      difficulty: 'Intermediate',
      rating: 4.9,
      students: 18900,
      instructor: 'Mike Chen',
      modules: 3,
      lessons: 9,
      color: 'yellow',
      icon: '⚡',
      topics: ['Variables & Functions', 'DOM Manipulation', 'Async JavaScript', 'ES6+ Features'],
      prerequisites: 'Basic HTML/CSS knowledge',
      whatYoullLearn: [
        'Master JavaScript fundamentals',
        'Manipulate the DOM',
        'Handle asynchronous operations',
        'Use modern JavaScript features'
      ]
    },
    {
      id: 'react-development',
      title: 'React Development',
      description: 'Build modern web applications with React, including hooks, state management, and component patterns',
      duration: '8 hours',
      difficulty: 'Intermediate',
      rating: 4.7,
      students: 15200,
      instructor: 'Alex Rodriguez',
      modules: 3,
      lessons: 9,
      color: 'purple',
      icon: '⚛️',
      topics: ['Components & JSX', 'State Management', 'Hooks', 'Performance'],
      prerequisites: 'JavaScript knowledge required',
      whatYoullLearn: [
        'Build React components',
        'Manage component state',
        'Use React hooks effectively',
        'Optimize React performance'
      ]
    }
  ];

  const getProgressPercentage = (courseId) => {
    const progress = courseProgress[courseId];
    if (!progress) return 0;
    return progress.progress || 0;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getColorClasses = (color) => {
    switch (color) {
      case 'blue': return 'from-blue-500 to-blue-600';
      case 'yellow': return 'from-yellow-500 to-yellow-600';
      case 'purple': return 'from-purple-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Select a course that matches your skill level and interests. Each course includes structured lessons, 
          interactive exercises, and hands-on projects.
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {courses.map((course) => {
          const progress = getProgressPercentage(course.id);
          const isStarted = progress > 0;
          
          return (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Course Header */}
              <div className={`bg-gradient-to-r ${getColorClasses(course.color)} p-6 text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{course.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold">{course.title}</h3>
                      <p className="text-sm opacity-90">{course.instructor}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-semibold">{course.rating}</span>
                    </div>
                    <div className="text-xs opacity-75">{course.students.toLocaleString()} students</div>
                  </div>
                </div>

                {/* Progress Bar */}
                {isStarted && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                      <div 
                        className="bg-white h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Course Stats */}
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.modules} modules</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="h-4 w-4" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{course.description}</p>

                {/* Difficulty Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(course.difficulty)}`}>
                    {course.difficulty}
                  </span>
                  <span className="text-sm text-gray-500">• {course.prerequisites}</span>
                </div>

                {/* Topics */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What you'll learn:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learning Outcomes */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Learning Outcomes:</h4>
                  <ul className="space-y-1">
                    {course.whatYoullLearn.map((outcome, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button
                  onClick={() => onSelectCourse(course.id)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    isStarted
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : `bg-gradient-to-r ${getColorClasses(course.color)} text-white hover:opacity-90`
                  }`}
                >
                  {isStarted ? (
                    <>
                      <Play className="h-4 w-4" />
                      Continue Course
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      Start Course
                    </>
                  )}
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className="mt-12 bg-gray-50 rounded-xl p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Not sure where to start?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you're new to web development, we recommend starting with HTML & CSS Fundamentals. 
            If you have some experience, JavaScript Essentials is a great next step.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
              <Award className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">Self-paced learning</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
              <Users className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">Community support</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
              <BookOpen className="h-5 w-5 text-purple-500" />
              <span className="text-sm font-medium">Hands-on projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSelection;

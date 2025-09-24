import React, { useState, useMemo } from 'react';
import { 
  Play, 
  Clock, 
  Star, 
  Users, 
  BookOpen, 
  Target,
  Award,
  ChevronRight,
  CheckCircle,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight as ChevronRightIcon
} from 'lucide-react';
import { courseModules } from '../data/courseContent50';

const CourseSelection = ({ onSelectCourse, courseProgress }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;

  // Get all courses from the imported data
  const allCourses = Object.values(courseModules).map(course => ({
    ...course,
    modules: 4, // Default modules count
    lessons: 12, // Default lessons count
    color: getRandomColor(),
    icon: getCategoryIcon(course.category),
    topics: course.topics || [],
    prerequisites: course.prerequisites?.join(', ') || 'None',
    whatYoullLearn: course.outcomes || []
  }));

  // Get unique categories
  const categories = ['All', ...new Set(allCourses.map(course => course.category))];

  // Filter courses based on search and filters
  const filteredCourses = useMemo(() => {
    return allCourses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || course.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [allCourses, searchTerm, selectedCategory, selectedDifficulty]);

  // Pagination
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  // Helper functions
  function getRandomColor() {
    const colors = ['blue', 'yellow', 'purple', 'green', 'red', 'indigo', 'pink', 'orange'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function getCategoryIcon(category) {
    const icons = {
      'Web Development': '🌐',
      'Backend Development': '⚙️',
      'Mobile Development': '📱',
      'Data Science': '📊',
      'Database': '🗄️',
      'DevOps': '🔧',
      'Cloud Computing': '☁️',
      'Cybersecurity': '🔒',
      'Programming Languages': '💻',
      'Game Development': '🎮',
      'Blockchain': '⛓️',
      'Artificial Intelligence': '🤖',
      'System Administration': '🖥️'
    };
    return icons[category] || '📚';
  }

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto p-6">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Choose Your Learning Path
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our comprehensive collection of 50+ courses across multiple categories. 
            Each course includes structured lessons, interactive exercises, and hands-on projects.
          </p>
        </div>

        {/* Enhanced Search and Filters */}
        <div className="mb-12 bg-white rounded-2xl shadow-lg border p-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses, topics, or instructors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-56">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div className="lg:w-56">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-lg font-medium"
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          {/* Enhanced Results Count */}
          <div className="mt-6 flex items-center justify-between bg-gray-50 rounded-lg p-4">
            <p className="text-lg font-medium text-gray-700">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredCourses.length)} of {filteredCourses.length} courses
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-blue-600 hover:text-blue-800 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Clear search
              </button>
            )}
          </div>
        </div>

        {/* Enhanced Course Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {currentCourses.map((course) => {
          const progress = getProgressPercentage(course.id);
          const isStarted = progress > 0;
          
          return (
            <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
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

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>
            
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const page = i + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          currentPage === page
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                            : 'text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}
                  {totalPages > 5 && (
                    <>
                      <span className="px-2 text-gray-500">...</span>
                      <button
                        onClick={() => setCurrentPage(totalPages)}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          currentPage === totalPages
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                            : 'text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                        }`}
                      >
                        {totalPages}
                      </button>
                    </>
                  )}
                </div>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium"
                >
                  Next
                  <ChevronRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Not sure where to start?</h3>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
              Browse our 50+ courses across 13 categories. If you're new to programming, start with beginner courses. 
              If you have experience, explore intermediate and advanced topics.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-lg">
                <Award className="h-6 w-6 text-blue-500" />
                <span className="text-lg font-semibold">50+ Courses</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-lg">
                <Users className="h-6 w-6 text-green-500" />
                <span className="text-lg font-semibold">13 Categories</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-lg">
                <BookOpen className="h-6 w-6 text-purple-500" />
                <span className="text-lg font-semibold">Hands-on Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSelection;

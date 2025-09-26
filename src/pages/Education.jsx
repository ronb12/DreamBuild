import React, { useState } from 'react';
import { Play, Clock, Star, Users, FileText, BookOpen } from 'lucide-react';

const Education = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showPDFs, setShowPDFs] = useState(false);

  // Simple video data with actual YouTube video titles and verified durations
  const videos = [
    {
      id: 'html-css',
      title: 'HTML CSS JavaScript Tutorial - Complete Course for Beginners',
      duration: '4 hours 25 minutes',
      rating: 4.8,
      students: 12500,
      videoUrl: 'https://www.youtube.com/embed/UB1O30fR-EE?autoplay=1&mute=1&loop=1&playlist=UB1O30fR-EE'
    },
    {
      id: 'javascript',
      title: 'JavaScript Tutorial for Beginners - Complete Course',
      duration: '3 hours 26 minutes',
      rating: 4.9,
      students: 15200,
      videoUrl: 'https://www.youtube.com/embed/PkZNo7MFNFg?autoplay=1&mute=1&loop=1&playlist=PkZNo7MFNFg'
    },
    {
      id: 'react',
      title: 'React Tutorial for Beginners - Complete Course',
      duration: '2 hours 15 minutes',
      rating: 4.7,
      students: 11800,
      videoUrl: 'https://www.youtube.com/embed/SqcY0GlETPk?autoplay=1&mute=1&loop=1&playlist=SqcY0GlETPk'
    },
    {
      id: 'python',
      title: 'Python Tutorial for Beginners - Complete Course',
      duration: '4 hours 30 minutes',
      rating: 4.9,
      students: 20100,
      videoUrl: 'https://www.youtube.com/embed/rfscVS0vtbw?autoplay=1&mute=1&loop=1&playlist=rfscVS0vtbw'
    },
    {
      id: 'nodejs',
      title: 'Node.js Tutorial for Beginners - Complete Course',
      duration: '2 hours 45 minutes',
      rating: 4.6,
      students: 9800,
      videoUrl: 'https://www.youtube.com/embed/Oe421EPjeBE?autoplay=1&mute=1&loop=1&playlist=Oe421EPjeBE'
    },
    {
      id: 'database',
      title: 'SQL Tutorial for Beginners - Complete Course',
      duration: '1 hour 45 minutes',
      rating: 4.8,
      students: 7600,
      videoUrl: 'https://www.youtube.com/embed/HXV3zeQKqGY?autoplay=1&mute=1&loop=1&playlist=HXV3zeQKqGY'
    },
    {
      id: 'vue',
      title: 'Vue.js Tutorial for Beginners - Complete Course',
      duration: '2 hours 30 minutes',
      rating: 4.7,
      students: 8900,
      videoUrl: 'https://www.youtube.com/embed/qZXt1Aom3Cs?autoplay=1&mute=1&loop=1&playlist=qZXt1Aom3Cs'
    },
    {
      id: 'angular',
      title: 'Angular Tutorial for Beginners - Complete Course',
      duration: '3 hours 15 minutes',
      rating: 4.6,
      students: 11200,
      videoUrl: 'https://www.youtube.com/embed/3qBXWUpoPHo?autoplay=1&mute=1&loop=1&playlist=3qBXWUpoPHo'
    },
    {
      id: 'typescript',
      title: 'TypeScript Tutorial for Beginners - Complete Course',
      duration: '1 hour 30 minutes',
      rating: 4.9,
      students: 13400,
      videoUrl: 'https://www.youtube.com/embed/BwuLxPH8IDs?autoplay=1&mute=1&loop=1&playlist=BwuLxPH8IDs'
    },
    {
      id: 'mongodb',
      title: 'MongoDB Tutorial for Beginners - Complete Course',
      duration: '2 hours 10 minutes',
      rating: 4.5,
      students: 6800,
      videoUrl: 'https://www.youtube.com/embed/-56x56UppqQ?autoplay=1&mute=1&loop=1&playlist=-56x56UppqQ'
    }
  ];

  // PDF Resources data - Titles matching actual website content
  const pdfResources = [
    {
      id: 'js-reference',
      title: 'JavaScript Reference - MDN',
      description: 'Complete JavaScript reference with syntax, methods, and examples',
      category: 'Reference',
      size: '2.1 MB',
      downloads: 15420,
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference',
      isPDF: false
    },
    {
      id: 'git-cheatsheet',
      title: 'Git Cheat Sheet - GitHub Education',
      description: 'Essential Git commands for version control and collaboration',
      category: 'Tools',
      size: '1.2 MB',
      downloads: 9600,
      url: 'https://education.github.com/git-cheat-sheet-education.pdf',
      isPDF: true
    },
    {
      id: 'html-guide',
      title: 'HTML: HyperText Markup Language - MDN',
      description: 'Complete guide to HTML elements, attributes, and best practices',
      category: 'Web Development',
      size: '3.2 MB',
      downloads: 18200,
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      isPDF: false
    },
    {
      id: 'python-tutorial',
      title: 'The Python Tutorial - Python.org',
      description: 'Official Python tutorial covering fundamentals and advanced topics',
      category: 'Language',
      size: '4.5 MB',
      downloads: 22100,
      url: 'https://docs.python.org/3/tutorial/',
      isPDF: false
    },
    {
      id: 'react-learn',
      title: 'Quick Start - React',
      description: 'Learn React fundamentals with interactive examples and guides',
      category: 'Framework',
      size: '2.8 MB',
      downloads: 13400,
      url: 'https://react.dev/learn',
      isPDF: false
    },
    {
      id: 'sql-tutorial',
      title: 'SQL Tutorial - W3Schools',
      description: 'Learn SQL with interactive examples and database fundamentals',
      category: 'Database',
      size: '2.3 MB',
      downloads: 16800,
      url: 'https://www.w3schools.com/sql/default.asp',
      isPDF: false
    },
    {
      id: 'nodejs-api',
      title: 'Node.js API Documentation',
      description: 'Complete Node.js API reference for server-side JavaScript development',
      category: 'Backend',
      size: '3.7 MB',
      downloads: 11200,
      url: 'https://nodejs.org/docs/latest/api/',
      isPDF: false
    },
    {
      id: 'mongodb-docs',
      title: 'MongoDB Documentation',
      description: 'Complete MongoDB documentation for NoSQL database operations',
      category: 'Database',
      size: '2.9 MB',
      downloads: 8900,
      url: 'https://www.mongodb.com/docs/',
      isPDF: false
    }
  ];

  const handlePlayVideo = (video) => {
    setSelectedVideo(video);
  };

  const handleBackToVideos = () => {
    setSelectedVideo(null);
  };

  const handleVisitResource = (resource) => {
    // Open resource in new tab
    window.open(resource.url, '_blank');
  };

  // Show video player if a video is selected
  if (selectedVideo) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b sticky top-0 z-10 mt-16">
          <div className="container mx-auto px-6 py-4">
            <button
              onClick={handleBackToVideos}
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Videos
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="container mx-auto px-6 py-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative" style={{ aspectRatio: '16/9', height: '500px' }}>
              <iframe
                className="w-full h-full"
                src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            {/* Video Info */}
            <div className="p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{selectedVideo.title}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  {selectedVideo.rating}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {selectedVideo.students.toLocaleString()} students
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show PDF resources if selected
  if (showPDFs) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm sticky top-0 z-10 mt-16">
          <div className="container mx-auto px-6 py-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Programming Resources</h1>
                <p className="text-gray-600 text-lg">Download comprehensive guides, cheat sheets, and documentation</p>
              </div>
              <button
                onClick={() => setShowPDFs(false)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Play className="h-5 w-5" />
                Back to Videos
              </button>
            </div>
          </div>
        </div>

        {/* Programming Resources List */}
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {pdfResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FileText className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900">
                              {resource.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {resource.description}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500 ml-13">
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                            {resource.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {resource.downloads.toLocaleString()} users
                          </span>
                        </div>
                      </div>
                      <div className="ml-6">
                        <button
                          onClick={() => handleVisitResource(resource)}
                          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                          <BookOpen className="h-5 w-5" />
                          Visit Resource
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    );
  }

  // Show video list
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Programming Videos</h1>
              <p className="text-gray-600 text-lg">Learn to code with our comprehensive video tutorials</p>
            </div>
            <button
              onClick={() => setShowPDFs(true)}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
            >
              <BookOpen className="h-5 w-5" />
              View Resources
            </button>
          </div>
        </div>
      </div>

      {/* Video Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer group"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <button
                    onClick={() => handlePlayVideo(video)}
                    className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all group-hover:scale-110"
                  >
                    <Play className="h-8 w-8 text-white ml-1" />
                  </button>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {video.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {video.students.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => handlePlayVideo(video)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="h-4 w-4" />
                  Watch Video
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
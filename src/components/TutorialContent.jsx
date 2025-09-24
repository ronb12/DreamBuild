import React from 'react';

const TutorialContent = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Interactive Tutorials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">HTML & CSS Basics</h3>
          <p className="text-gray-600 mb-4">Learn the fundamentals of web development</p>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
            Start Tutorial
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">JavaScript Essentials</h3>
          <p className="text-gray-600 mb-4">Master JavaScript programming</p>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
            Start Tutorial
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">React Complete Guide</h3>
          <p className="text-gray-600 mb-4">Build modern web applications</p>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
            Start Tutorial
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialContent;
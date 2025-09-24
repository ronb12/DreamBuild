import React from 'react';

const ChallengeContent = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900">Coding Challenges</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Two Sum</h3>
          <p className="text-gray-600 mb-4">Find two numbers that add up to target</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm">Easy</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">JavaScript</span>
          </div>
          <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
            Start Challenge
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Reverse Linked List</h3>
          <p className="text-gray-600 mb-4">Reverse a singly linked list</p>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-sm">Medium</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm">JavaScript</span>
          </div>
          <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors">
            Start Challenge
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeContent;
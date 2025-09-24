import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';

const VideoPlayer = ({ lesson, onComplete }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(600); // 10 minutes in seconds
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            onComplete && onComplete();
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration, onComplete]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    setCurrentTime(newTime);
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(false);
  };

  const progressPercentage = (currentTime / duration) * 100;

  return (
    <div 
      className="relative bg-gray-900 rounded-lg overflow-hidden group"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(true)}
    >
      {/* Video Area */}
      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
        {!isPlaying ? (
          <div className="text-center text-white">
            <div 
              className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-opacity-30 transition-all cursor-pointer"
              onClick={handlePlayPause}
            >
              <Play className="h-8 w-8 ml-1" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
            <p className="text-gray-300 mb-4">Click to start the video lesson</p>
            <div className="text-sm text-gray-400">
              Duration: {lesson.duration}
            </div>
          </div>
        ) : (
          <div className="text-center text-white">
            <div className="animate-pulse">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Pause className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Video Playing...</h3>
              <p className="text-gray-300">Learning in progress</p>
            </div>
          </div>
        )}
      </div>

      {/* Video Controls */}
      {showControls && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <div className="flex items-center gap-3">
            {/* Play/Pause Button */}
            <button
              onClick={handlePlayPause}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>

            {/* Progress Bar */}
            <div className="flex-1 relative">
              <div 
                className="w-full h-2 bg-gray-600 rounded-full cursor-pointer"
                onClick={handleSeek}
              >
                <div 
                  className="h-2 bg-blue-500 rounded-full transition-all"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Time Display */}
            <div className="text-white text-sm font-mono">
              {formatTime(Math.floor(currentTime))} / {formatTime(duration)}
            </div>

            {/* Volume Button */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </button>

            {/* Restart Button */}
            <button
              onClick={handleRestart}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
            >
              <RotateCcw className="h-4 w-4" />
            </button>

            {/* Fullscreen Button */}
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all">
              <Maximize className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* Video Info Overlay */}
      <div className="absolute top-4 left-4 right-4">
        <div className="bg-black bg-opacity-50 rounded-lg p-3">
          <div className="flex items-center justify-between text-white text-sm">
            <div className="flex items-center gap-2">
              <span className="bg-red-500 px-2 py-1 rounded text-xs font-semibold">LIVE</span>
              <span>📹 Video Lesson</span>
            </div>
            <div className="flex items-center gap-4">
              <span>⏱️ {lesson.duration}</span>
              <span>🎯 {lesson.content.objectives.length} objectives</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;

import React, { useState, useEffect } from 'react';

function AudioControl({ tracks, onTrackChange }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio());

  useEffect(() => {
    // Check if tracks are available
    if (tracks.length > 0) {
      audio.src = tracks[currentTrackIndex]?.url || ''; // Safely access the track URL
      if (isPlaying) {
        audio.play();
      }
    }

    // Cleanup the audio object on component unmount
    return () => {
      audio.pause();
      audio.src = '';
    };
  }, [currentTrackIndex, audio, tracks, isPlaying]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % tracks.length;
      onTrackChange(nextIndex);
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prevIndex) => {
      const prevIndexValue = (prevIndex - 1 + tracks.length) % tracks.length;
      onTrackChange(prevIndexValue);
      return prevIndexValue;
    });
  };

  if (tracks.length === 0) {
    return <div className="text-white">No tracks available</div>; // Handle no tracks case
  }

  return (
    <div className="audio-control">
      <h2 className="text-white">{tracks[currentTrackIndex]?.title}</h2>
      <div className="flex items-center justify-center">
        <button onClick={handlePrev} className="text-white hover:text-blue-400">
          Prev
        </button>
        <button onClick={handlePlayPause} className="text-white hover:text-blue-400 mx-4">
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={handleNext} className="text-white hover:text-blue-400">
          Next
        </button>
      </div>
    </div>
  );
}

export default AudioControl;

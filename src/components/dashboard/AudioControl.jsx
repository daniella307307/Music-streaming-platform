import React, { useState, useEffect } from 'react';

function AudioControl({ onTrackChange }) {
  const [tracks, setTracks] = useState([]); // State for storing tracks
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio());
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchTracks = async (album) => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/getTracksByAlbumId/${album._id}`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTracks(data.tracks || []); // Adjust according to your API response structure
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []); // Empty dependency array to run once on mount

  useEffect(() => {
    if (tracks.length > 0) {
      audio.src = tracks[currentTrackIndex]?.audioURL || ''; // Use the audioURL for YouTube embeds
      if (isPlaying) {
        audio.play();
      }
    }

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

  // Handle loading and error states
  if (loading) {
    return <div className="text-white">Loading tracks...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Show error message
  }

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

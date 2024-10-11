import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  faChevronLeft,
  faChevronRight,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "./Loading";

function Featured() {
  const [albums, setAlbums] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/getAll"); // Replace with your API route
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums", error);
      }
    };

    fetchAlbums();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === albums.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [albums]);

  if (albums.length === 0) {
    return <Loading />;
  }

  const getVisibleAlbums = () => {
    const total = albums.length;
    const visibleAlbums = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + total) % total;
      visibleAlbums.push(albums[index]);
    }
    return visibleAlbums;
  };

  const visibleAlbums = getVisibleAlbums();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? albums.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === albums.length - 1 ? 0 : prevIndex + 1
    );
  };


  const handleAlbumClick = async (album)=>{
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/getTracksByAlbumId/${album._id}`);
       const albumData = response.data;
       playTracks(albumData.tracks);
    } catch (error) {
      console.error("Error fetching tracks for album", error);
    }
  }
  const playTracks = (tracks) => {
    const audioElement = document.createElement('audio');
    audioElement.src = tracks[0].audioURL; // Replace with your audio URL
    audioElement.play();
  };

  return (
    <div className="items-center justify-center h-[50vh] relative">
      <div>
        <h1 className="text-gray-200 text-2xl font-bold">Featured</h1>
      </div>

      <div className="relative flex justify-center items-center space-x-6 ml-[1em] mt-[3em]">
        {/* Left Chevron */}
        <button
          onClick={handlePrev}
          className="absolute left-[.5em] p-2 text-gray-400 hover:text-white transition"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Albums */}
        <div className="flex justify-between items-center space-x-[4em]">
          {visibleAlbums.map((album, index) => {
            return (
              <div
                key={index}
                className="relative w-[15em] h-[18em] cursor-pointer transition-transform duration-300 transform hover:scale-105"
              >
                <div className="absolute inset-0 w-full h-full rounded-lg before:content-[''] before:absolute before:inset-0 before:bg-blue-400 before:blur-3xl before:opacity-50 before:rounded-full" />
                <div>
                  {/* Play Button */}
                  <button
                    className="absolute top-[4em] right-3 text-5xl text-blue-700 shadow-lg hover:text-blue-400 transition z-20"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent triggering album click
                      handleAlbumClick(album);
                    }}
                  >
                    <FontAwesomeIcon icon={faPlayCircle} />
                  </button>

                  {/* Album Cover Image */}
                  <img
                    src={album.coverImageUrl}
                    alt={album.name}
                    className="relative z-10 w-full h-[14em] object-cover shadow-lg"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black to-transparent rounded-b-lg">
                  <h2 className="text-white font-bold text-center">
                    {album.name}
                  </h2>
                  <p className="text-gray-300 text-center">{album.artist}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Chevron */}
        <button
          onClick={handleNext}
          className="absolute right-[-1em] mr-[1em] p-2 rounded-lg text-gray-400 hover:text-white transition"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default Featured;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "./Loading";

function Popular() {
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
    // Change center album every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === albums.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [albums]);

  if (albums.length === 0) {
    return <Loading/>;
  }

  // Function to get the 5 visible albums centered on currentIndex
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

  // Functions to handle manual navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? albums.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === albums.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="items-center justify-center h-[100vh] relative">
      <div className="space-y-4">
        <h1 className="text-gray-400 text-md">Albums</h1>
        <h1 className="text-gray-200 text-2xl font-bold">Popular</h1>
      </div>

      <div className="relative flex justify-center items-center space-x-6 ml-[4em] mt-[3em]">
        {/* Left Chevron */}
        <button
          onClick={handlePrev}
          className="absolute left-[-3em] h-[4em] w-[3em] mr-[2em] bg-blue-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-blue-700 transition"
        >
        <FontAwesomeIcon icon={faChevronLeft}/>
        </button>

        {/* Albums */}
        <div className="flex justify-between items-center space-x-20">
          {visibleAlbums.map((album, index) => {
            const isCenter = index === 2;
            return (
              <div
                key={index}
                className={`relative transition-all duration-300 ${
                  isCenter ? "scale-130" : "scale-110 opacity-50"
                }`}
                style={{
                  width: isCenter ? "18em" : "9em",
                  height: isCenter ? "18em" : "9em",
                }}
              >
                {/* Blob effect */}
                {isCenter && (
                  <div className="absolute inset-0 w-full h-full rounded-full before:content-[''] before:absolute before:inset-0 before:bg-blue-400 before:blur-3xl before:opacity-50 before:rounded-full" />
                )}
                <img
                  src={album.coverImageUrl}
                  alt={album.name}
                  className="relative z-10 w-full h-full object-cover shadow-lg rounded-[50%]"
                />
              </div>
            );
          })}
        </div>

        {/* Right Chevron */}
        <button
          onClick={handleNext}
          className="absolute right-[-5em] h-[4em] w-[3em]  bg-blue-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-blue-700 transition"
        >
          <FontAwesomeIcon icon={faChevronRight}/>
        </button>
      </div>

      <div className="mt-4 text-center">
        <h1 className="text-gray-200 text-2xl ml-[3.6em] font-bold">
          {visibleAlbums[2].name}
        </h1>
      </div>
    </div>
  );
}

export default Popular;

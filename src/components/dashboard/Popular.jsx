import React, { useEffect, useState } from "react";
import axios from "axios";

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
    return <div>Loading...</div>;
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

  return (
    <div>
      <div className="space-y-4">
        <h1 className="text-gray-400 text-md">Albums</h1>
        <h1 className="text-gray-200 text-2xl font-bold">Popular</h1>
      </div>
      <div>
        <div>
          <div className="mt-[3em] flex items-center  w-[100vw] justify-center space-x-6">
            {visibleAlbums.map((album, index) => {
              // Center the middle album and adjust size and opacity for others
              const isCenter = index === 2;
              return (
                <div
                  key={index}
                  className={`transition-all duration-300 w-[100vw] ${
                    isCenter ? "scale-[2em]" : "scale-90 opacity-50"
                  }`}
                  style={{
                    width: isCenter ? "20em" : "10em",
                    height: isCenter ? "20em" : "10em",
                  }}
                >
                  <img
                    src={album.coverImageUrl}
                    alt={album.name}
                    className="w-full h-full object-cover shadow-lg rounded-xl"
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-4 text-center">
            <h1 className="text-gray-200 text-2xl font-bold">
              {visibleAlbums[2].name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;

"use client";
import React, { useState, useEffect } from 'react';

const AstronomyPicture = () => {
  const [apodDataList, setApodDataList] = useState([]);

  const fetchLatestMedia = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=ErEj4l3LJRZ3jVTQC8qYqxecEhsMSfK42zobwecP&count=5`
      );
      const dataList = await response.json();
      setApodDataList(dataList);
    } catch (error) {
      console.error('Error fetching latest APOD data:', error);
    }
  };

  useEffect(() => {
    fetchLatestMedia();
  }, []);

  return (
    <div className="space-y-4">
      {apodDataList.map((apodData) => (
        <div key={apodData.date} className="max-w-lg p-4 shadow-md text-gray-500 mx-auto">
          <div className="flex justify-between pb-4 ">
            <div className="flex items-center">
              {/* ... */}
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              {apodData.media_type === 'image' ? (
                <img
                  src={apodData.url}
                  alt={apodData.title}
                  className="block object-cover object-center w-full rounded-md h-72 dark:border-gray-500"
                />
              ) : (
                <iframe
                  title={apodData.title}
                  width="100%"
                  height="400"
                  src={apodData.url}
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-md dark:border-gray-500"
                />
              )}
              <div className="flex items-center text-xs">
                <span>{apodData.date}</span>
              </div>
            </div>
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold dark:text-violet-400">{apodData.title}</h3>
              </a>
              <p className="leadi dark:text-gray-400 mt-4 mb-10">{apodData.explanation}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AstronomyPicture;

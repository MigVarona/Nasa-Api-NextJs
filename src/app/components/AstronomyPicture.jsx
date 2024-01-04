"use client";
import React, { useState, useEffect } from 'react';
import Link from "next/link"


const AstronomyPicture = () => {
  const [apodDataList, setApodDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLatestMedia = async () => {
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=ErEj4l3LJRZ3jVTQC8qYqxecEhsMSfK42zobwecP&count=5`
      );
      const dataList = await response.json();
      setApodDataList(dataList);
      setLoading(false); // Marcar la carga como completa
    } catch (error) {
      console.error('Error fetching latest APOD data:', error);
    }
  };

  useEffect(() => {
    fetchLatestMedia();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col items-center justify-center">
        {loading && (
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        )}
        {apodDataList.map((apodData) => (
          <div key={apodData.date} className="max-w-lg p-4 shadow-md text-gray-500 mx-auto">
            <div className="flex justify-between pb-4 ">
              <div className="flex items-center">
                {/* ... Puedes agregar más contenido aquí si es necesario */}
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
      
     
    </div>
  );
};

export default AstronomyPicture;
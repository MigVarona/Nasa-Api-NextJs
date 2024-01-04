"use client"

import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';

const Epic = () => {
  const [epicData, setEpicData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const fetchEpicImages = async () => {
      try {
        const response = await fetch('https://epic.gsfc.nasa.gov/api/natural');

        if (!response.ok) {
          throw new Error('Error al obtener datos de la API');
        }

        const data = await response.json();
        setEpicData(data);
      } catch (error) {
        console.error('Error fetching NASA EPIC data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEpicImages();
  }, []);

  const imagesForGalleria = epicData.map((image) => ({
    itemImageSrc: `https://epic.gsfc.nasa.gov/archive/natural/${image.date.slice(0, 4)}/${image.date.slice(5, 7)}/${image.date.slice(8, 10)}/png/${image.image}.png`,
    thumbnailImageSrc: `https://epic.gsfc.nasa.gov/archive/natural/${image.date.slice(0, 4)}/${image.date.slice(5, 7)}/${image.date.slice(8, 10)}/thumbs/${image.image}.jpg`,
    alt: image.caption,
  }));

  const handleThumbnailMouseOver = (event, index) => {
    console.log('Mouse over on thumbnail:', index);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <div className="text-2xl text-gray-600">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="max-w-screen-lg mt-10">
          <Galleria
            value={imagesForGalleria}
            numVisible={5}
            style={{ maxWidth: '640px', margin: '0 auto' }}
            item={(item) => (
              <img
                src={item.itemImageSrc}
                alt={item.alt}
                style={{ width: '80%' }}
                loading="lazy"
              />
            )}
            thumbnail={(item, index) => (
              <img
                src={item.thumbnailImageSrc}
                alt={item.alt}
                onMouseOver={(event) => handleThumbnailMouseOver(event, index)}
                onClick={() => setSelectedImageIndex(index)}
                className={index === selectedImageIndex ? 'selected-thumbnail' : ''}
                loading="lazy"
              />
            )}
          />
        </div>
      )}
    </div>
  );
};

export default Epic;

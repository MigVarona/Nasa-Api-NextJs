"use client"

import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';

const Epic = () => {
  const [epicData, setEpicData] = useState([]);
  const [loading, setLoading] = useState(true);

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
    thumbnailImageSrc: `https://epic.gsfc.nasa.gov/archive/natural/${image.date.slice(0, 4)}/${image.date.slice(5, 7)}/${image.date.slice(8, 10)}/thumbs/${image.image}.jpg`, // Cambié la extensión de la miniatura a jpg
    alt: image.caption,
  }));

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? (
        <div className="text-2xl text-gray-600">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-ping dark:border-violet-400"></div>
          
        </div>
      ) : (
        <div className="max-w-screen-lg">
          <Galleria
            value={imagesForGalleria}
            numVisible={5}
            style={{ maxWidth: '640px', margin: '0 auto' }}
            item={(item) => (
              <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%' }} />
            )}
            thumbnail={(item) => <img src={item.thumbnailImageSrc} alt={item.alt} />}
          />
        </div>
      )}
    </div>
  );
};

export default Epic;

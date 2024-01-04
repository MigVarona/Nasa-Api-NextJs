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
    thumbnailImageSrc: `https://epic.gsfc.nasa.gov/archive/natural/${image.date.slice(0, 4)}/${image.date.slice(5, 7)}/${image.date.slice(8, 10)}/thumbs/${image.image}.jpg`, // Cambié la extensión de la miniatura a jpg
    alt: image.caption,
  }));

  const handleThumbnailMouseOver = (event, index) => {
    // Puedes realizar acciones adicionales al hacer hover sobre la miniatura
    // Por ejemplo, puedes mostrar información adicional o cambiar estilos.
    console.log('Mouse over on thumbnail:', index);
  };

  return (
    
    <div className="flex flex-col items-center">
      
    <h1  className="text-2xl font-bold text-gray-300 mb-4 mt-20">DSCOVR: EPIC</h1>
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
                loading="lazy" // Añadido lazy aquí
              />
            )}
          />
        </div>
      )}
    </div>
  );
};

export default Epic;

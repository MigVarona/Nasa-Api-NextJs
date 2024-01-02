// components/NasaImages.js
"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NasaImages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(20);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://images-api.nasa.gov/search?media_type=image&keywords=${searchTerm}`,
          {
            headers: {
              Authorization: 'ErEj4l3LJRZ3jVTQC8qYqxecEhsMSfK42zobwecP',
            },
          }
        );
        setImages(response.data.collection.items);
      } catch (error) {
        console.error('Error fetching NASA images:', error);
      }
    };

    fetchImages();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleImageClick = async (image) => {
    try {
      const detailsResponse = await axios.get(
        `https://images-api.nasa.gov/asset/${image.data[0].nasa_id}`
      );

      const details = detailsResponse.data.collection.items[0];
      setSelectedImage({ ...image, details });
    } catch (error) {
      console.error('Error fetching image details:', error);
    }
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='buscador flex-wrap'>
      <div className="mb-4 flex justify-center mt-20">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="input input-bordered input-md w-full max-w-xs mt-5"
          placeholder="Enter search term"
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mr-20 ml-10 gap-10 mt-20 flex-wrap">
        {currentImages.map((image) => (
          <div
            key={image.data[0].nasa_id}
            className="card bg-base-100 shadow-xl flex flex-col"
            onClick={() => handleImageClick(image)}
          >
            <figure className="flex-grow">
              <img
                src={image.links[0].href}
                alt={image.data[0].title}
                className="w-full object-cover"
              />
            </figure>
          </div>
        ))}
      </div>
      <div className="mt-10 flex justify-center text-white">
        <div className="join">
          {pageNumbers.map((number) => (
            <input
              key={number}
              className={`join-item btn btn-square ${currentPage === number ? 'btn-active' : ''}`}
              type="radio"
              name="options"
              aria-label={number.toString()}
              checked={currentPage === number}
              onChange={() => handlePageClick(number)}
            />
          ))}
        </div>
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
          <div className="max-w-screen-lg overflow-hidden bg-white shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-white"
              onClick={handleCloseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.links[0].href}
              alt={selectedImage.data[0].title}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{selectedImage.data[0].title}</h2>
              <p className="text-gray-700">{selectedImage.details[0]?.description}</p>
              {/* Agrega aquí más detalles según la estructura de la API */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NasaImages;

"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from "next/image";

const NasaImages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(20);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);

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
      } finally {
        setLoading(false);
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

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className='buscador flex-wrap text-center items-center'>
      <div className="mb-4 flex justify-center mt-20 ">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="input input-bordered input-md w-full max-w-xs mt-5"
          placeholder="Enter search term"
        />
      </div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin mb-60 rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mr-20 ml-10 gap-10 mt-20 flex flex-wrap items-center justify-center">
          {currentImages.map((image) => (
            <div
              key={image.data[0].nasa_id}
              className="card bg-base-100 shadow-xl flex flex-col mx-auto items-center bg-black"
              onClick={() => handleImageClick(image)}
            >
              <figure className="flex-grow mx-auto items-center ml-8">
                <img
                  src={image.links[0].href}
                  alt={image.data[0].title}
                  className="w-full h-full object-cover mx-auto rounded-md"
                />
              </figure>
            </div>
          ))}
        </div>
      )}
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
            <image
              src={selectedImage.links[0].href}
              alt={selectedImage.data[0].title}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{selectedImage.data[0].title}</h2>
              <p className="text-gray-700">{selectedImage.details[0]?.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NasaImages;

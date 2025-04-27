import React, { useEffect, useState } from 'react';

const images = [
  'https://images.pexels.com/photos/21787/pexels-photo.jpg',
  'https://images.pexels.com/photos/2131614/pexels-photo-2131614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/3131634/pexels-photo-3131634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[500px] md:h-[600px] overflow-hidden relative mt-0">
      {/* Background image */}
      <img
        src={images[currentIndex]}
        alt="Slider"
        className="w-full h-full object-cover transition-all duration-700 ease-in-out"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Introduction Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Welcome to Our Blog
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl">
          Explore amazing stories, ideas, and creativity. Join our community of writers and readers.
        </p>
      </div>
    </div>
  );
};

export default ImageSlider;

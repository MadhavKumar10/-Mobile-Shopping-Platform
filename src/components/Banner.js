import React, { useState, useEffect } from 'react';
import '../styles/Banner.css';

// Import banner images
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

const Banner = () => {
  const banners = [banner1, banner2, banner3]; // Array of banner images
  const [currentBanner, setCurrentBanner] = useState(0); // State to track the current slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [banners.length]);

  return (
    <div className="banner">
      {banners.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentBanner ? 'active' : ''}`}
        >
          <img src={image} alt={`Banner ${index + 1}`} />
        </div>
      ))}
      <div className="dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentBanner ? 'active' : ''}`}
            onClick={() => setCurrentBanner(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;

import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
  interval?: number; // Interval in milliseconds
  className?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
  images, 
  interval = 4000, // Default to 4 seconds to match About page
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate images
  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images.length, interval]);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  if (images.length === 0) return null;

  return (
    <div className={`relative rounded-xl overflow-hidden shadow-lg border border-japa-orange/10 bg-white/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 ${className}`}>
      {/* Images */}
      <div className="relative h-[300px] md:h-[400px]">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image doesn't exist
                e.currentTarget.src = "https://images.unsplash.com/photo-1611288875785-bac4435af0e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Navigation arrows - more transparent */}
      <button 
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/15 hover:bg-black/30 text-white p-2 rounded-full z-20 transition-colors"
        aria-label="Previous image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/15 hover:bg-black/30 text-white p-2 rounded-full z-20 transition-colors"
        aria-label="Next image"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Caption - semi-transparent background */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
        <div className="bg-white/90 text-japa-orange inline-block px-3 py-1 rounded-md text-sm font-semibold mb-2">
          Install in Minutes
        </div>
        <h3 className="text-xl font-bold">Per Sensor Installation</h3>
      </div>

      {/* Improved Carousel Indicators to match About page */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white w-4' 
                : 'bg-white/50 w-2'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider; 
import React from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

/**
 * LoadingScreen component displays during initial page load and page transitions
 */
const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm transition-opacity duration-300"
      style={{ 
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? 'auto' : 'none',
      }}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* JAPA logo */}
        <div className="w-16 h-16 relative">
          <div className="absolute inset-0 bg-japa-orange rounded-full opacity-20 animate-ping"></div>
          <div className="relative flex items-center justify-center w-full h-full bg-white rounded-full shadow-md">
            <span className="text-japa-orange font-bold text-xl">JAPA</span>
          </div>
        </div>
        
        {/* Loading spinner */}
        <div className="w-10 h-10 border-4 border-japa-orange/20 border-t-japa-orange rounded-full animate-spin"></div>
        
        {/* Loading text */}
        <p className="text-japa-slate font-medium text-sm">
          Loading amazing parking experiences...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen; 
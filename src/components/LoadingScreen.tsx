
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Show button after loading completes
          setTimeout(() => setShowButton(true), 300);
          return 100;
        }
        return prev + 2; // Increment by 2 every 100ms = 5 seconds total
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    onLoadingComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      {/* Background Image - Full screen without filters */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/122cdf5e-4b2a-4b0e-ac40-c541db5b884b.png')`
        }}
      />
      
      {/* Shuffle Button - Center of screen, much bigger size */}
      {showButton && (
        <div className="relative z-10 flex items-center justify-center">
          <button
            onClick={handleButtonClick}
            className="transform transition-all duration-300 hover:scale-110 button-pulse"
          >
            <img 
              src="/lovable-uploads/a27ad4d4-aa5e-49b5-b83b-c9ffa59770b5.png"
              alt="Shuffle - Play More"
              className="w-[32rem] h-auto drop-shadow-2xl max-w-[90vw]"
            />
          </button>
        </div>
      )}

      {/* Loading Bar - Bottom of screen, much thicker */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-96 max-w-[80vw] z-10">
        <div className="relative">
          {/* Custom glowing pink loading bar - 2x thicker */}
          <div className="h-8 w-full bg-black border-2 border-black rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 transition-all duration-100 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-pink-400 animate-pulse opacity-75" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            </div>
          </div>
          
          {/* Progress text */}
          <div className="text-center mt-4">
            <span className="text-white text-xl font-bold drop-shadow-lg">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

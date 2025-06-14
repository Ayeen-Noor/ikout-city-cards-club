
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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
        style={{
          backgroundImage: `url('/lovable-uploads/122cdf5e-4b2a-4b0e-ac40-c541db5b884b.png')`
        }}
      />
      
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8 px-8">
        {/* Loading Bar */}
        {!showButton && (
          <div className="w-80 max-w-sm">
            <div className="relative">
              {/* Custom glowing pink loading bar */}
              <div className="h-4 w-full bg-black border-2 border-black rounded-full overflow-hidden">
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
                <span className="text-white text-lg font-bold drop-shadow-lg">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Shuffle Button */}
        {showButton && (
          <button
            onClick={handleButtonClick}
            className="transform transition-all duration-300 hover:scale-110 animate-pulse"
            style={{
              animation: 'buttonPulse 1.5s ease-in-out infinite'
            }}
          >
            <img 
              src="/lovable-uploads/a27ad4d4-aa5e-49b5-b83b-c9ffa59770b5.png"
              alt="Shuffle - Play More"
              className="w-48 h-auto drop-shadow-2xl"
            />
          </button>
        )}
      </div>

      {/* Custom CSS for button animation */}
      <style jsx>{`
        @keyframes buttonPulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;

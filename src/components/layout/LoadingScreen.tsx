import React, { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setFade(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600);
          }, 300);
          return 100;
        }
        return prev + 12;
      });
    }, 70);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-charcoal-950 flex flex-col items-center justify-center transition-opacity duration-600 ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center space-y-6">
        {/* Animated Rotating 3D Golden Rice Grain & Handi Glyph */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Pulsing Aura */}
          <div className="absolute inset-0 rounded-full bg-saffron-gold/20 blur-xl animate-pulse" />

          {/* Rotating Outer Ring */}
          <div className="absolute inset-0 rounded-full border border-teal-light/30 border-t-teal-light animate-spin" />

          {/* Saffron Rice Grain / Handi Icon */}
          <div className="w-12 h-16 rounded-[45%] bg-gradient-to-tr from-saffron-dark via-saffron-gold to-yellow-100 shadow-lg transform -rotate-12 animate-bounce">
            <div className="w-full h-full opacity-60 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
          </div>
        </div>

        {/* Brand Text */}
        <div className="text-center space-y-2">
          <p className="font-serif text-xl sm:text-2xl font-bold text-offwhite tracking-wide">
            Preparing your biryani…
          </p>
          <p className="text-xs text-saffron-gold tracking-widest uppercase font-semibold">
            HMR BIRIYANI HUT · R.S. PURAM
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-teal-hmr transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

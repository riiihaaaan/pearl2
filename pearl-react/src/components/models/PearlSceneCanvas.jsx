import React from 'react';

/**
 * 3D Pearl/Orb placeholder component for the hero section
 * Temporarily using 2D animation until Three.js compatibility is resolved
 */
const PearlSceneCanvas = ({ className = '' }) => {
  return (
    <div className={`w-full h-96 flex items-center justify-center relative ${className}`}>
      {/* Background gradient orb */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue via-accent-gradientMid to-accent-blueSoft opacity-20 blur-sm"></div>

      {/* Main orb */}
      <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-accent-blue to-accent-blueSoft shadow-2xl">
        {/* Pearl texture overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-accent-highlight/20"></div>

        {/* Shining highlight */}
        <div className="absolute top-8 left-12 w-16 h-16 rounded-full bg-white/40 blur-sm animate-pulse"></div>
        <div className="absolute bottom-12 right-8 w-8 h-8 rounded-full bg-accent-highlight/60 blur-sm animate-bounce"></div>

        {/* Inner radiance */}
        <div className="absolute inset-4 rounded-full bg-gradient-radial from-accent-highlight/20 to-transparent animate-pulse"></div>
      </div>

      {/* Gentle floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default PearlSceneCanvas;

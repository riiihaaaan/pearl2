import React from 'react';

/**
 * 3D Pearl/Orb placeholder component for the hero section
 * Temporarily using 2D animation until Three.js compatibility is resolved
 */
const PearlSceneCanvas = ({ className = '' }) => {
  return (
    <div className={`w-full h-96 flex items-center justify-center relative ${className}`}>
      {/* Diffuse shadow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pearl-accent/10 to-transparent blur-2xl transform scale-150"></div>

      {/* Main orb container */}
      <div className="relative w-52 h-52 rounded-full">
        {/* Outer white ring */}
        <div className="absolute inset-0 rounded-full bg-white/60 shadow-pearl-shadow"></div>

        {/* Inner pearl gradient */}
        <div className="absolute inset-2 rounded-full bg-gradient-radial from-pearl-accent-soft via-pearl-accent to-pearl-accent-soft shadow-inner">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white/50 via-transparent to-pearl-accent/20"></div>
        </div>

        {/* Subtle highlights */}
        <div className="absolute top-6 left-8 w-12 h-12 rounded-full bg-white/30 blur-sm"></div>
      </div>
    </div>
  );
};

export default PearlSceneCanvas;

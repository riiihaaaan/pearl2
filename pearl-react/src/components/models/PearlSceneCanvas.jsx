import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Pearl orb component with gentle floating animation
 * Simulates breathing movement like a calm pearl in water
 */
const PearlSceneCanvas = ({ className = '' }) => {
  const orbRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (orbRef.current) {
      // Calm vertical floating animation - 6s cycle with subtle amplitude
      // Creates living, breathing presence inspired by pearl reference
      gsap.to(orbRef.current, {
        y: 12,
        duration: 6,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        onStart: () => {
          gsap.set(orbRef.current, { y: -12 });
        }
      });

      // Very subtle rotation for iridescent pearl effect
      gsap.to(orbRef.current, {
        rotation: 360,
        duration: 20, // Slow rotation over 20 seconds
        ease: "none",
        repeat: -1,
      });
    }

    return () => {
      gsap.killTweensOf(orbRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full h-96 flex items-center justify-center relative ${className}`}
    >
      {/* Diffuse shadow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pearl-accent/10 to-transparent blur-2xl transform scale-150"></div>

      {/* Main orb container with floating animation */}
      <div ref={orbRef} className="relative w-52 h-52 rounded-full">
        {/* Outer white ring */}
        <div className="absolute inset-0 rounded-full bg-white/60 shadow-pearl-shadow"></div>

        {/* Inner pearl gradient - subtle rotation animation for iridescence */}
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

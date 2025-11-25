import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Typing indicator component for when AI is generating a response
 * Includes a pulsing orb and text
 */
const TypingIndicator = ({ className = '' }) => {
  const [dots, setDots] = useState('');
  const orbRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (orbRef.current) {
      // Soft pulsing animation for the thinking orb
      gsap.to(orbRef.current, {
        scale: 1.2,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
        filter: 'drop-shadow(0 0 10px rgba(108, 197, 244, 0.5))',
      });
    }

    return () => {
      gsap.killTweensOf(orbRef.current);
    };
  }, []);

  return (
    <div className={`flex mb-4 justify-start ${className}`}>
      <div className="bg-pearl-base-200 text-pearl-text-primary border border-pearl-border-soft rounded-2xl px-6 py-4 max-w-[85%]">
        <div className="flex items-center space-x-3">
          {/* Pulsing thinking orb */}
          <div
            ref={orbRef}
            className="w-4 h-4 bg-gradient-to-br from-pearl-accent to-pearl-accent-soft rounded-full flex-shrink-0 shadow-lg"
          />
          <div className="flex items-center space-x-2">
            <span className="text-sm">PEARL is thinking</span>
            <span className="text-accent-blue font-bold">{dots}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;

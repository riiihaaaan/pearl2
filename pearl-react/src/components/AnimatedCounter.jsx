import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

/**
 * Animated counter component that counts up on scroll
 */
const AnimatedCounter = ({
  targetValue,
  duration = 2,
  suffix = '',
  className = ''
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          gsap.to(counterRef, {
            innerText: targetValue,
            duration: duration,
            snap: { innerText: 1 },
            ease: "power2.out",
            onUpdate: () => {
              const value = Math.floor(parseFloat(counterRef.current.innerText));
              setCurrentValue(value);
            }
          });
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [targetValue, duration]);

  return (
    <span
      ref={counterRef}
      className={`font-bold text-2xl text-accent-blue ${className}`}
    >
      {currentValue}{suffix}
    </span>
  );
};

export default AnimatedCounter;

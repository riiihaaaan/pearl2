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
    const node = counterRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          gsap.to(node, {
            innerText: targetValue,
            duration: duration,
            snap: { innerText: 1 },
            ease: "power2.out",
            onUpdate: () => {
              const value = Math.floor(parseFloat(node.innerText));
              setCurrentValue(value);
            }
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
      observer.disconnect();
    };
  }, [targetValue, duration]);

  return (
    <span
      ref={counterRef}
      className={`font-bold text-2xl text-accent-iridescent ${className}`}
    >
      {currentValue}{suffix}
    </span>
  );
};

export default AnimatedCounter;

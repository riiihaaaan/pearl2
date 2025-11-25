import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for scroll-based animations
 * Provides smooth fade-in and subtle motion effects for sections
 */
export const useScrollAnimation = (animationId = null) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Create ScrollTrigger animation with subtle timings for calm experience
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play none none reverse',
        // markers: import.meta.env.DEV, // Uncomment to show markers in dev
      },
    });

    // Gentle fade-in with slight upward motion - 0.6s duration for smooth feel
    tl.fromTo(element, {
      opacity: 0,
      y: 30, // Subtle movement, not jarring
    }, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out', // Natural, not bouncy
    });

    return () => {
      if (tl) tl.kill();
      if (elementRef.current) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, [animationId]);

  return elementRef;
};

/**
 * Hook for staggered card animations (e.g., feature cards, testimonials)
 */
export const useStaggeredAnimation = (itemsCount, staggerDelay = 0.1) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.children;

    gsap.set(cards, { opacity: 0, y: 20 });

    ScrollTrigger.create({
      trigger: container,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: staggerDelay,
          ease: 'power2.out',
        });
      },
      onLeaveBack: () => {
        gsap.set(cards, { opacity: 0, y: 20 });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [itemsCount, staggerDelay]);

  return containerRef;
};

/**
 * Hook for hero text animation - fade with subtle upward motion
 */
export const useHeroTextAnimation = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    if (!text) return;

    // Slight delay then smooth entrance
    gsap.fromTo(text, {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.3,
      ease: 'power2.out',
    });

    return () => {
      gsap.killTweensOf(text);
    };
  }, []);

  return textRef;
};

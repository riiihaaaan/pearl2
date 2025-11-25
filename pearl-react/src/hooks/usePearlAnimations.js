import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Comprehensive motion system for PEARL app
 * Implements calm, premium animations across all sections
 */
export const usePearlAnimations = () => {
  const prefs = window.matchMedia('(prefers-reduced-motion: reduce)');
  const prefersReducedMotion = prefs.matches;

  // Prefers-reduced-motion: disable non-essential animations, keep opacity fades
  if (prefersReducedMotion) {
    gsap.set('.animate-on-scroll, .hero-text, .hero-btns, .section-title', { opacity: 1 });
    return {};
  }

  return {
    // Hero section animations
    useHeroElements: () => {
      const textRef = useRef();
      const buttonsRef = useRef();

      useEffect(() => {
        // Hero text fade in with upward motion
        if (textRef.current) {
          gsap.fromTo(textRef.current, {
            opacity: 0,
            y: 20,
          }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
            ease: 'power2.out',
          });
        }

        // Hero buttons gentle scale-in
        if (buttonsRef.current) {
          gsap.fromTo(buttonsRef.current.children, {
            opacity: 0,
            scale: 0.95,
          }, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
          });
        }

        return () => {
          gsap.killTweensOf([textRef.current, ...(buttonsRef.current?.children || [])]);
        };
      }, []);

      return { textRef, buttonsRef };
    },

    // Section reveal animations
    useSectionReveal: (delay = 0) => {
      const elementRef = useRef();

      useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // General section fade-up with calm timing
        gsap.fromTo(element, {
          opacity: 0,
          y: 20,
        }, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });

        return () => {
          if (element) ScrollTrigger.getAll().forEach(trigger => trigger.kill());
          gsap.killTweensOf(element);
        };
      }, [delay]);

      return elementRef;
    },

    // Feature cards staggered animation
    useFeatureCards: (cardCount) => {
      const gridRef = useRef();

      useEffect(() => {
        const grid = gridRef.current;
        if (!grid) return;

        const cards = grid.children;
        gsap.set(cards, { opacity: 0, y: 20 });

        ScrollTrigger.create({
          trigger: grid,
          start: 'top 80%',
          onEnter: () => {
            gsap.to(cards, {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.1, // 50-100ms stagger
              ease: 'power2.out',
              onStart: () => {
                // Add shadow intensification during animation
                gsap.to(cards, {
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  duration: 0.5,
                  ease: 'power2.out',
                });
              },
            });
          },
          onLeaveBack: () => {
            gsap.set(cards, { opacity: 0, y: 20 });
          },
        });

        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, [cardCount]);

      return gridRef;
    },

    // Step sequential animation for How It Works
    useStepsReveal: (stepCount) => {
      const containerRef = useRef();

      useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const steps = Array.from(container.children).filter(child =>
          child.classList.contains('step-card')
        );

        gsap.set(steps, { opacity: 0, x: -30 });

        ScrollTrigger.create({
          trigger: container,
          start: 'top 75%',
          onEnter: () => {
            gsap.to(steps, {
              opacity: 1,
              x: 0,
              duration: 0.6,
              stagger: 0.2, // Sequential timing 0.4-0.7s apart
              ease: 'power2.out',
            });
          },
          onLeaveBack: () => {
            gsap.set(steps, { opacity: 0, x: -30 });
          },
        });

        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, [stepCount]);

      return containerRef;
    },

    // Animated connecting lines between sections
    useConnectionLines: () => {
      const linesRef = useRef();

      useEffect(() => {
        const lines = linesRef.current?.querySelectorAll('line');
        if (!lines) return;

        // Set up dashed lines
        lines.forEach(line => {
          const length = line.getTotalLength();
          gsap.set(line, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        });

        // Animate on scroll when sections enter
        ScrollTrigger.batch(lines, {
          start: 'top 90%',
          onEnter: batch => gsap.to(batch, {
            strokeDashoffset: 0,
            duration: 2,
            ease: 'power2.out',
            stagger: 0.3,
          }),
          onLeaveBack: batch => gsap.to(batch, {
            strokeDashoffset: batch.map(line => line.getTotalLength()),
            duration: 0.5,
            ease: 'power2.out',
          }),
        });

        return () => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []);

      return linesRef;
    },

    // Chat thinking orb animation
    useChatOrb: (isLoading) => {
      const orbRef = useRef();

      useEffect(() => {
        const orb = orbRef.current;
        if (!orb) return;

        if (isLoading) {
          // Soft pulse and float when thinking
          gsap.to(orb, {
            scale: 1.1,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut',
          });
        } else {
          // Return to idle floating
          gsap.to(orb, {
            scale: 1,
            y: 5,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'power2.inOut',
          });
        }

        return () => {
          gsap.killTweensOf(orb);
        };
      }, [isLoading]);

      return orbRef;
    },

    // Micro-interactions for cards
    useCardHover: () => {
      const cardRef = useRef();

      useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseEnter = () => {
          gsap.to(card, {
            scale: 1.01, // Subtle scale
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)', // Deeper shadow
            duration: 0.2,
            ease: 'power2.out',
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
            duration: 0.2,
            ease: 'power2.out',
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          card.removeEventListener('mouseenter', handleMouseEnter);
          card.removeEventListener('mouseleave', handleMouseLeave);
        };
      }, []);

      return cardRef;
    },

    // Button hover micro-interactions
    useButtonHover: () => {
      const buttonRef = useRef();

      useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleMouseEnter = () => {
          gsap.to(button, {
            y: -2, // Gentle lift
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
            duration: 0.15,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(button, {
            y: 0,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            duration: 0.15,
          });
        };

        button.addEventListener('mouseenter', handleMouseEnter);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          button.removeEventListener('mouseenter', handleMouseEnter);
          button.removeEventListener('mouseleave', handleMouseLeave);
        };
      }, []);

      return buttonRef;
    },
  };
};

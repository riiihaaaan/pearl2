import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { STEPS } from '../constants';
import { usePearlAnimations } from '../hooks/usePearlAnimations';

/**
 * How It Works section
 */
const HowItWorks = ({ className = '', id = 'how-it-works' }) => {
  const { useStepsReveal, useSectionReveal } = usePearlAnimations();
  const containerRef = useStepsReveal(3);
  const headerRef = useSectionReveal();

  return (
    <section
      id={id}
      className={`py-24 bg-pearl-bg ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-4xl font-bold text-pearl-text mb-6">
            How It Works
          </h2>
          <p className="text-xl text-pearl-muted max-w-3xl mx-auto mb-8">
            Your personal medical companion is always available to provide clear, actionable health information.
          </p>
        </div>

        <div ref={containerRef} className="relative flex flex-col md:flex-row items-center justify-center gap-12">
          {STEPS.map((step, index) => (
            <React.Fragment key={step.number}>
              <StepCard step={step} />
              {index < STEPS.length - 1 && (
                <ConnectingLine visible={true} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

const ConnectingLine = ({ visible }) => {
  const lineRef = useRef(null);

  useEffect(() => {
    if (visible && lineRef.current) {
      const path = lineRef.current.querySelector('line');
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power2.out',
          delay: 0.5,
        });
      }
    }
  }, [visible]);

  return (
    <div className="hidden md:flex items-center justify-center px-4">
      <svg width="80" height="3" viewBox="0 0 80 3" fill="none" ref={lineRef}>
        <line
          x1="0"
          y1="1.5"
          x2="80"
          y2="1.5"
          stroke="url(#gradient)"
          strokeWidth="3"
          opacity="0.8"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(154,179,255, 0.3)" />
            <stop offset="50%" stopColor="rgba(214,219,255, 0.5)" />
            <stop offset="100%" stopColor="rgba(154,179,255, 0.3)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const StepCard = ({ step }) => (
  <div className="step-card pearl-card p-8 shadow-pearl-soft cursor-default flex flex-col items-center text-center min-h-80 w-full md:w-72">
    <div className="w-16 h-16 bg-linear-to-br from-accent-iridescent to-accent-iridescent-2 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-6 shadow-pearl-soft shrink-0">
      {step.number}
    </div>
    <h3 className="text-xl font-semibold text-pearl-text mb-4 line-clamp-2">
      {step.title}
    </h3>
    <p className="text-sm text-pearl-muted leading-relaxed grow">
      {step.description}
    </p>
  </div>
);

export default HowItWorks;

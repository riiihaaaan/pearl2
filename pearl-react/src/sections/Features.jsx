import React from 'react';
import { FEATURES } from '../constants';
import AnimatedCounter from '../components/AnimatedCounter';
import { usePearlAnimations } from '../hooks/usePearlAnimations';

/**
 * Features section showcasing what PEARL can do
 */
const Features = ({ className = '', id = 'features' }) => {
  const { useFeatureCards, useCardHover, useSectionReveal } = usePearlAnimations();
  const gridRef = useFeatureCards(4);
  const sectionRef = useSectionReveal();

  return (
    <section
      id={id}
      className={`py-24 bg-pearl-bg ${className}`}
    >
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-pearl-text mb-6">
            How PEARL Helps You
          </h2>
          <p className="text-xl text-pearl-muted max-w-3xl mx-auto mb-8">
            Get clear, actionable information about your health without overwhelming jargon.
            PEARL provides helpful explanations and preparation tips for your medical journey.
          </p>
        </div>

        {/* Feature cards */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20 items-stretch">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={index}
              useCardHover={useCardHover}
              feature={feature}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="text-center">
            <AnimatedCounter targetValue={100} suffix="%" className="text-4xl" />
            <p className="text-pearl-muted mt-2">Privacy Focused</p>
          </div>
          <div className="text-center">
            <AnimatedCounter targetValue={0} suffix=" Cloud" className="text-4xl" />
            <p className="text-pearl-muted mt-2">Cloud Usage</p>
          </div>
          <div className="text-center">
            <AnimatedCounter targetValue={24} suffix="/7" className="text-4xl" />
            <p className="text-pearl-muted mt-2">Local Access</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ useCardHover, feature }) => {
  const cardRef = useCardHover();

  return (
    <div
      ref={cardRef}
      className="pearl-card p-6 md:p-8 shadow-pearl-soft cursor-default h-full flex flex-col"
    >
      <div className="text-4xl mb-4 shrink-0">{feature.icon}</div>
      <h3 className="text-lg font-semibold text-pearl-text mb-3 max-w-prose">
        {feature.title}
      </h3>
      <p className="text-sm text-pearl-muted leading-relaxed grow max-w-prose">
        {feature.description}
      </p>
    </div>
  );
};

export default Features;

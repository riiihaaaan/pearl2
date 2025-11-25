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
          <h2 className="text-4xl font-bold text-pearl-text-primary mb-6">
            How PEARL Helps You
          </h2>
          <p className="text-xl text-pearl-text-secondary max-w-3xl mx-auto mb-8">
            Get clear, actionable information about your health without overwhelming jargon.
            PEARL provides helpful explanations and preparation tips for your medical journey.
          </p>
        </div>

        {/* Feature cards */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
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
            <p className="text-pearl-text-secondary mt-2">Privacy Focused</p>
          </div>
          <div className="text-center">
            <AnimatedCounter targetValue={0} suffix=" Cloud" className="text-4xl" />
            <p className="text-pearl-text-secondary mt-2">Cloud Usage</p>
          </div>
          <div className="text-center">
            <AnimatedCounter targetValue={24} suffix="/7" className="text-4xl" />
            <p className="text-pearl-text-secondary mt-2">Local Access</p>
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
      className="bg-pearl-surface/75 backdrop-blur-sm p-8 rounded-3xl border border-pearl-border-soft cursor-default"
    >
      <div className="text-4xl mb-4">{feature.icon}</div>
      <h3 className="text-xl font-semibold text-pearl-text-primary mb-3">
        {feature.title}
      </h3>
      <p className="text-pearl-text-secondary">
        {feature.description}
      </p>
    </div>
  );
};

export default Features;

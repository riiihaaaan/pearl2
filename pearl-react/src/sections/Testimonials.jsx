import React from 'react';
import { TESTIMONIALS } from '../constants';
import { useStaggeredAnimation} from '../hooks/useScrollAnimation';

/**
 * Testimonials section
 */
const Testimonials = ({ className = '' }) => {
  const staggeredRef = useStaggeredAnimation(3, 0.15); // 3 testimonials, 0.15s stagger

  return (
    <section className={`py-24 bg-pearl-bg ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-pearl-text mb-6">
            What People Say
          </h2>
          <p className="text-xl text-pearl-muted max-w-3xl mx-auto mb-8">
            Early experiences with PEARL from our community
          </p>
        </div>

        <div ref={staggeredRef} className="grid md:grid-cols-3 gap-10">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="pearl-card p-8 shadow-pearl-soft hover:shadow-pearl-soft transition-shadow cursor-default h-full flex flex-col min-h-64"
            >
              <blockquote className="text-base text-pearl-muted mb-6 leading-relaxed grow">
                "{testimonial.quote}"
              </blockquote>
              <cite className="text-pearl-text font-semibold text-sm">
                {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

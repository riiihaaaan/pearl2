import React from 'react';

/**
 * Safety and disclaimers section
 */
const Safety = ({ className = '', id = 'safety' }) => {
  return (
    <section
      id={id}
      className={`py-24 bg-pearl-bg ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-pearl-text mb-6">
            Safety & Trust
          </h2>
          <p className="text-xl text-pearl-muted max-w-3xl mx-auto mb-12">
            Your health and privacy are our top priorities. Here's what PEARL is and isn't.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* What PEARL is */}
          <div className="pearl-card shadow-pearl-soft cursor-default h-full flex flex-col">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-accent-iridescent/20 rounded-full flex items-center justify-center text-accent-iridescent font-bold shrink-0">✓</div>
              <div>
                <h3 className="text-lg font-semibold text-pearl-text mb-3">What PEARL IS</h3>
                <p className="text-sm text-pearl-muted leading-relaxed">An empathetic AI companion that explains medical terms, suggests preparation questions, and provides general health information. All processing stays completely local on your device.</p>
              </div>
            </div>
          </div>

          {/* What PEARL isn't */}
          <div className="pearl-card shadow-pearl-soft cursor-default h-full flex flex-col">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-accent-iridescent/20 rounded-full flex items-center justify-center text-accent-iridescent font-bold shrink-0">○</div>
              <div>
                <h3 className="text-lg font-semibold text-pearl-text mb-3">What PEARL IS NOT</h3>
                <p className="text-sm text-pearl-muted leading-relaxed">A medical device, diagnostic tool, or substitute for professional healthcare. PEARL never prescribes, diagnoses, or gives definitive medical conclusions.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pearl-card shadow-pearl-soft">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-pearl-text mb-6 max-w-prose">
              Important Disclaimers
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-pearl-text mb-3">Emergency Situations</h4>
                <p className="text-sm text-pearl-muted leading-relaxed">For urgent health concerns, call emergency services immediately. Do not wait for AI responses in critical situations.</p>
              </div>
              <div>
                <h4 className="font-semibold text-pearl-text mb-3">Medical Professional Required</h4>
                <p className="text-sm text-pearl-muted leading-relaxed">Always consult licensed healthcare professionals for diagnosis, treatment, and medical advice. PEARL is for informational purposes only.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;

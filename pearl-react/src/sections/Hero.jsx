import React from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import PearlSceneCanvas from '../components/models/PearlSceneCanvas';

/**
 * Hero section with navigation and 3D pearl
 */
const Hero = ({ className = '', id = 'hero' }) => {
  const scrollToChat = () => {
    const element = document.querySelector('#chat');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id={id}
      className={`relative min-h-screen bg-pearl-gradient overflow-hidden ${className}`}
    >
      <NavBar />

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-highlight rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-light rounded-full opacity-8 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        {/* Desktop Layout (two-column) */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:min-h-[calc(100vh-4rem)]">
          {/* Left: Hero Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-pearl-primary leading-tight">
                PEARL — Your Calm,
                <span className="text-accent-blue"> Local</span> AI Medical Companion
              </h1>

              <p className="text-xl text-pearl-secondary leading-relaxed">
                Get clear health information and medical explanations from an AI that respects your privacy.
                All processing happens locally on your device with Llama 3.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={scrollToChat}
                  className="text-lg px-8 py-4"
                >
                  Start Consultation
                </Button>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => document.querySelector('#features').scrollIntoView({ behavior: 'smooth' })}
                  className="text-lg px-8 py-4"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="bg-pearl-surface/75 backdrop-blur-sm rounded-3xl p-6 border border-pearl-border-soft shadow-pearl-shadow">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-blue">0%</div>
                  <p className="text-sm text-pearl-secondary">Cloud Usage</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent-blue">24/7</div>
                  <p className="text-sm text-pearl-secondary">Availability</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 3D Pearl Canvas */}
          <div className="order-first lg:order-last">
            <div className="relative">
              <PearlSceneCanvas className="h-[400px] lg:h-[500px]" />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-12 pt-8">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-pearl-primary leading-tight text-center">
              PEARL — Your Calm,
              <span className="text-accent-blue"> Local</span> AI Medical Companion
            </h1>

            <p className="text-lg text-pearl-secondary leading-relaxed text-center max-w-2xl mx-auto">
              Get clear health information and medical explanations from an AI that respects your privacy.
              All processing happens locally on your device with Llama 3.
            </p>

            <div className="flex flex-col gap-4 items-center">
              <Button
                size="lg"
                onClick={scrollToChat}
                className="text-lg px-8 py-4 w-full max-w-xs"
              >
                Start Consultation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => document.querySelector('#features').scrollIntoView({ behavior: 'smooth' })}
                className="text-lg px-8 py-4 w-full max-w-xs"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Mobile 3D Pearl */}
          <div className="relative">
            <PearlSceneCanvas className="h-[300px] mx-auto" />
          </div>

          {/* Mobile trust indicators */}
          <div className="bg-pearl-surface/75 backdrop-blur-sm rounded-3xl p-6 border border-pearl-border-soft shadow-pearl-shadow max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-pearl-accent">0%</div>
                <p className="text-sm text-pearl-text-secondary">Cloud Usage</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-pearl-accent">24/7</div>
                <p className="text-sm text-pearl-text-secondary">Availability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

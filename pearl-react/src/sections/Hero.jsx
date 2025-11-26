import React from 'react';
import NavBar from '../components/NavBar';
import Button from '../components/Button';
import PearlSceneCanvas from '../components/models/PearlSceneCanvas';
import InteractiveGraph from '../components/InteractiveGraph';
import PearlCard from '../components/PearlCard';
import { usePearlAnimations } from '../hooks/usePearlAnimations';
import { usePearlChat } from '../hooks/usePearlChat';

/**
 * Hero section with navigation and interactive graph
 */
const Hero = ({ className = '', id = 'hero' }) => {
  const { useHeroElements, useButtonHover } = usePearlAnimations();
  const { textRef, buttonsRef } = useHeroElements();
  const { isLoading } = usePearlChat();
  const heroButtonRef1 = useButtonHover();
  const heroButtonRef2 = useButtonHover();

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
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pearl-decal"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pearl-decal"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        {/* Desktop Layout (two-column) */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:min-h-[calc(100vh-4rem)]">
          {/* Left: Hero Content */}
          <div ref={textRef} className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-pearl-text leading-tight">
                Meet PEARL — Your Gentle,
                <span className="text-accent-iridescent"> Local</span> AI Health Guide
              </h1>

              <p className="text-xl text-pearl-muted leading-relaxed">
                Discover general health information and medical explanations from an AI that stays completely private.
                Everything runs locally on your device with Llama 3 — zero cloud data ever leaves your computer.
              </p>

              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
                <Button
                  ref={heroButtonRef1}
                  size="lg"
                  onClick={scrollToChat}
                  className="text-lg px-8 py-4"
                >
                  Start a Conversation
                </Button>
                <Button
                  ref={heroButtonRef2}
                  variant="secondary"
                  size="lg"
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="text-lg px-8 py-4"
                >
                  See How It Works
                </Button>
              </div>
            </div>

            {/* Trust indicators */}
            <PearlCard className="p-8 shadow-pearl-soft">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-iridescent mb-2">0%</div>
                  <p className="text-sm text-pearl-muted">Cloud Usage</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-iridescent mb-2">24/7</div>
                  <p className="text-sm text-pearl-muted">Availability</p>
                </div>
              </div>
            </PearlCard>
          </div>

          {/* Right: Interactive Graph */}
          <div className="order-first lg:order-last">
            <div className="relative overflow-visible h-[400px] lg:h-[500px]">
              <InteractiveGraph isLoading={isLoading} />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-12 pt-8">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold text-pearl-text leading-tight text-center">
              Meet PEARL — Your Gentle,
              <span className="text-accent-iridescent"> Local</span> AI Health Guide
            </h1>

            <p className="text-lg text-pearl-muted leading-relaxed text-center max-w-2xl mx-auto">
              Discover general health information and medical explanations from an AI that stays completely private.
              Everything runs locally on your device with Llama 3 — zero cloud data ever leaves your computer.
            </p>

            <div className="flex flex-col gap-4 items-center">
              <Button
                size="lg"
                onClick={scrollToChat}
                className="text-lg px-8 py-4 w-full max-w-xs"
              >
                Start a Conversation
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="text-lg px-8 py-4 w-full max-w-xs"
              >
                See How It Works
              </Button>
            </div>
          </div>

          {/* Mobile 3D Pearl */}
          <div className="relative">
            <PearlSceneCanvas className="h-[300px] mx-auto" />
          </div>

          {/* Mobile trust indicators */}
          <PearlCard className="p-8 shadow-pearl-soft max-w-md mx-auto">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-iridescent mb-2">0%</div>
                <p className="text-sm text-pearl-muted">Cloud Usage</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-iridescent mb-2">24/7</div>
                <p className="text-sm text-pearl-muted">Availability</p>
              </div>
            </div>
          </PearlCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;

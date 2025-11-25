import React, { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './sections/Hero'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import Safety from './sections/Safety'
import Testimonials from './sections/Testimonials'
import ChatSection from './sections/ChatSection'
import Contact from './sections/Contact'

/**
 * Main PEARL application component
 * A modern, scrollable website for the AI medical assistant
 */
function App() {
  useEffect(() => {
    // Set history scroll restoration to manual
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Remove any location.hash on load by replacing state
    window.history.replaceState(null, '', window.location.pathname + window.location.search);

    // Immediately scrollTo(0, 0) on first mount
    window.scrollTo(0, 0);

    // Refresh GSAP ScrollTrigger after restoring scroll
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="App">
      {/* Hero Section (includes NavBar) */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <HowItWorks id="how-it-works" />

      {/* Safety Section */}
      <Safety id="safety" />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Chat Section */}
      <ChatSection id="chat" />

      {/* Contact Section */}
      <Contact id="contact" />
    </div>
  )
}

export default App

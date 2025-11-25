import React from 'react'
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

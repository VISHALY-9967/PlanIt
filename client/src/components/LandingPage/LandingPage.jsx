import React from 'react';
import { motion } from 'framer-motion';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Features from './sections/Features';
import Testimonials from './sections/Testimonials';
import Stats from './sections/Stats';
import Contact from './sections/Contact';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <main className="landing-page">
      <Hero />
      <Services />
      <Features />
      <Testimonials />
      <Stats />
      <Contact />
    </main>
  );
};

export default LandingPage; 
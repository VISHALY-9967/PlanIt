import React from 'react';
import { motion } from 'framer-motion';
import './css/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-title"
        >
          Simplify Specialized Bookings
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-subtitle"
        >
          Transform your planning experience with PlanIt - Your all-in-one solution for Medical Tourism, MICE, and Destination Weddings
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-cta"
        >
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="hero-image"
      >
        <img 
          src={require("../../../assets/images/Hero-image.png")}
          alt="PlanIt booking platform showcase"
          className="hero-main-image"
        />
      </motion.div>
    </section>
  );
};

export default Hero; 
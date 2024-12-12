import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section className="features" id="features">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Why Choose PlanIt
      </motion.h2>
      
      <div className="features-grid">
        {[
          {
            title: "Unified Platform",
            description: "All your planning needs in one place"
          },
          {
            title: "Smart Automation",
            description: "AI-powered recommendations and scheduling"
          },
          {
            title: "Expert Support",
            description: "24/7 assistance from industry specialists"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features; 
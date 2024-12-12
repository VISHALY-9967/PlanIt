import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Medical Tourism",
      description: "Expert healthcare planning and coordination across borders.",
      icon: "🏥"
    },
    {
      title: "MICE",
      description: "Comprehensive meeting and event management solutions.",
      icon: "🎯"
    },
    {
      title: "Destination Weddings",
      description: "Turn your dream wedding into reality at exotic locations.",
      icon: "💒"
    }
  ];

  return (
    <section className="services" id="services">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Our Services
      </motion.h2>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services; 
import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { number: "1000+", label: "Events Planned" },
    { number: "50+", label: "Countries Served" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "10K+", label: "Happy Clients" }
  ];

  return (
    <section className="stats" id="stats">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-label">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Event Organizer",
      text: "PlanIt transformed how we manage our MICE events. The platform is intuitive and powerful."
    },
    {
      name: "Sarah Smith",
      role: "Medical Tourist",
      text: "Made my medical journey smooth and worry-free. Highly recommended!"
    },
    {
      name: "Mike Johnson",
      role: "Wedding Planner",
      text: "The perfect tool for planning destination weddings. Saves time and reduces stress."
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        What Our Clients Say
      </motion.h2>
      
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <p>"{testimonial.text}"</p>
            <div className="testimonial-author">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 
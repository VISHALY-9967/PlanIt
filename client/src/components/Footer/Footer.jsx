import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>PlanIt</h3>
          <p>Simplifying specialized bookings for Medical Tourism, MICE, and Destination Weddings.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: </p>
          <p>Phone: </p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 PlanIt. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 
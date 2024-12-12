import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLoggedIn] = useState(false); // Set to true for testing
  const dropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown when route changes
  useEffect(() => {
    setIsProfileOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        PlanIt
      </Link>

      <div className="nav-links">
        <div className="services-dropdown" ref={servicesDropdownRef}>
          <button 
            className="services-btn"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            Services
          </button>
          
          {isServicesOpen && (
            <motion.div 
              className="dropdown-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Link to="/services/mice">
                <i className="fas fa-building"></i> MICE
              </Link>
              <Link to="/services/medical">
                <i className="fas fa-hospital"></i> Medical
              </Link>
              <Link to="/services/weddings">
                <i className="fas fa-rings-wedding"></i> Weddings
              </Link>
            </motion.div>
          )}
        </div>
        
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        
        {isLoggedIn ? (
          <div className="profile-dropdown" ref={dropdownRef}>
            <button 
              className="profile-btn"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img 
                  src=""
                  alt="" 
                  className="profile-avatar"
                />
              </motion.div>
            </button>
            
            {isProfileOpen && (
              <motion.div 
                className="dropdown-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Link to="/dashboard">
                  <i className="fas fa-columns"></i> Dashboard
                </Link>
                <Link to="/profile">
                  <i className="fas fa-user"></i> My Profile
                </Link>
                <Link to="/bookings">
                  <i className="fas fa-calendar"></i> My Bookings
                </Link>
                <Link to="/settings">
                  <i className="fas fa-cog"></i> Settings
                </Link>
                <button className="logout-btn">
                  <i className="fas fa-sign-out-alt"></i> Logout
                </button>
              </motion.div>
            )}
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 
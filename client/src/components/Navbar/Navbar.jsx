import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Login from '../Auth/Login';
import Contact from '../LandingPage/sections/Contact';

import SignUp from '../Auth/SignUp';

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLoggedIn] = useState(true); 
  const dropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const location = useLocation();
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          PlanIt
        </Link>

        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search..."
          />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="nav-links">
          <div className="services-dropdown" ref={servicesDropdownRef}>
            <button 
              className="services-btn"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
            </button>
            
            {isServicesOpen && (
              <div 
                className="dropdown-menu"
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
              </div>
            )}
          </div>
          
          <Link to="/about">About</Link>
          <button 
            className="nav-links a"
            onClick={() => setIsContactModalOpen(true)}
            style={{ border: 'none', background: 'none', cursor: 'pointer' }}
          >
            Contact
          </button>
          
          {isLoggedIn ? (
            <div className="profile-dropdown" ref={dropdownRef}>
              <button 
                className="profile-btn"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <div
                  className="profile-avatar"
                >
                  <img 
                    src=""
                    alt="" 
                  />
                </div>
              </button>
              
              {isProfileOpen && (
                <div 
                  className="dropdown-menu"
                >
                  <Link to="/dashboard">
                    <i className="fas fa-columns"></i> Dashboard
                  </Link>
                  <Link to="/bookings">
                    <i className="fas fa-calendar"></i> My Bookings
                  </Link>
                  <button className="logout-btn">
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-buttons">
              <button 
                onClick={() => setIsLoginModalOpen(true)} 
                className="login-btn"
              >
                Login
              </button>
              <button 
                onClick={() => setIsSignUpModalOpen(true)} 
                className="signup-btn"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </nav>

      {isContactModalOpen && (
        <div className="modal-overlay" onClick={() => setIsContactModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setIsContactModalOpen(false)}
            >
              ×
            </button>
            <Contact />
          </div>
        </div>
      )}

      {isSignUpModalOpen && (
        <div className="modal-overlay" onClick={() => setIsSignUpModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setIsSignUpModalOpen(false)}
            >
              
            </button>
            <SignUp onClose={() => setIsSignUpModalOpen(false)} />
          </div>
        </div>
      )}

      {isLoginModalOpen && (
        <div className="modal-overlay" onClick={() => setIsLoginModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setIsLoginModalOpen(false)}
            >
              
            </button>
            <Login onClose={() => setIsLoginModalOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 
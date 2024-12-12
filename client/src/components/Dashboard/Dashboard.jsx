import React from 'react';
import { motion } from 'framer-motion';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Welcome back, User!</h1>
        <p>Manage your bookings and account settings</p>
      </div>

      <div className="dashboard-grid">
        <motion.div 
          className="dashboard-card"
          whileHover={{ scale: 1.02 }}
        >
          <h2>My Bookings</h2>
          <p>View and manage your current bookings</p>
          <div className="booking-stats">
            <span>Active Bookings: 2</span>
            <span>Completed: 5</span>
          </div>
        </motion.div>

        <motion.div 
          className="dashboard-card"
          whileHover={{ scale: 1.02 }}
        >
          <h2>Profile Settings</h2>
          <p>Update your personal information</p>
          <button className="edit-profile-btn">Edit Profile</button>
        </motion.div>

        <motion.div 
          className="dashboard-card"
          whileHover={{ scale: 1.02 }}
        >
          <h2>Notifications</h2>
          <p>You have 3 unread notifications</p>
          <button className="view-all-btn">View All</button>
        </motion.div>

        <motion.div 
          className="dashboard-card"
          whileHover={{ scale: 1.02 }}
        >
          <h2>Saved Items</h2>
          <p>Access your saved destinations and packages</p>
          <span className="saved-count">5 items saved</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard; 
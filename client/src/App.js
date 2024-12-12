// src/App.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import './styles/theme.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <LandingPage />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

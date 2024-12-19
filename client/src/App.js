import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
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
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

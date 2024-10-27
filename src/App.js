import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './compnents/Home';
import About from './compnents/About';
import Project from './compnents/Project';
import Contact from './compnents/contact';
import './style.css';
import './shape.css';


const App = () => {
  return (
    <Router>
      <div>
        <header>
        <nav>
          <div className="lefts">Mohit's Portfolio</div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/project">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>

  );
};

export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import Bio from './components/Bio';
import Projects from './components/Projects';
import RandomStuff from './components/RandomStuff';
import Footer from './components/Footer'; // Import the Footer

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/random" element={<RandomStuff />} />
      </Routes>
      <Footer /> {/* Add the Footer */}
    </Router>
  );
}

export default App;

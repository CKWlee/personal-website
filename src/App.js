// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './components/Home';
import Bio from './components/Bio';
import Projects from './components/Projects';
import RandomStuff from './components/RandomStuff';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router basename="/">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/random" element={<RandomStuff />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

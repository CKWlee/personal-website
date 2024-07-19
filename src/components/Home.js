// src/components/Home.js
import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'; // Import the updated CSS file

const Home = () => {
  return (
    <div className="home-page">
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
        <div className="text-center">
          <h1>Hello, I'm Corwin!</h1>
          <p>Welcome to my website that I designed and programmed!</p>
        </div>
      </Container>
      
      <div className="carousel-header">
        <h2>Feel free to explore</h2>
      </div>

      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <div className="carousel-item-content">
              <h3>Home</h3>
              <p>Explore the main page of the website.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-content">
              <h3>Bio</h3>
              <p>Learn more about me and my background.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-content">
              <h3>Coding Projects</h3>
              <p>Check out the projects I've worked on.</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-item-content">
              <h3>Random Stuff</h3>
              <p>Discover some fun and interesting content.</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;

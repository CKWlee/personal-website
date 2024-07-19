import React from 'react';
import { Container } from 'react-bootstrap';
import './Home.css'; // Ensure this path is correct

const Home = () => {
  return (
    <div className="home-page">
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
        <div className="text-center">
          <h1>Hello, I'm Corwin!</h1>
          <p>Welcome to my website that I designed and programmed!</p>
          {/* Add more content as needed */}
        </div>
      </Container>
    </div>
  );
};

export default Home;

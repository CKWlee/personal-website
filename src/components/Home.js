import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home-page">
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
        <div className="text-center">
          <h1>Welcome to My Portfolio</h1>
          <p>Explore my projects and learn more about me.</p>
          {/* Add more content as needed */}
        </div>
      </Container>
    </div>
  );
};

export default Home;

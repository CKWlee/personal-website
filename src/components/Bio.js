import React from 'react';
import { Container } from 'react-bootstrap';
import './Page.css'; // Import your CSS file for Page styles

const Bio = () => {
  return (
    <div className="page-content">
      <Container fluid className="content-center">
        {/* Your Bio content here */}
        <h1>Bio Page</h1>
        <p>This is the bio content.</p>
      </Container>
    </div>
  );
};

export default Bio;

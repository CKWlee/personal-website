import React from 'react';
import { Container } from 'react-bootstrap';
import './Page.css'; // Import your CSS file for Page styles

const RandomStuff = () => {
  return (
    <div className="page-content">
      <Container fluid className="content-center">
        {/* Your Random Stuff content here */}
        <h1>Random Stuff Page</h1>
        <p>This is the random stuff content.</p>
      </Container>
    </div>
  );
};

export default RandomStuff;

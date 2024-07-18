import React from 'react';
import { Container } from 'react-bootstrap';
import './Page.css'; // Import your CSS file for Page styles

const Projects = () => {
  return (
    <div className="page-content">
      <Container fluid className="content-center">
        {/* Your Projects content here */}
        <h1>Projects Page</h1>
        <p>This is the projects content.</p>
      </Container>
    </div>
  );
};

export default Projects;

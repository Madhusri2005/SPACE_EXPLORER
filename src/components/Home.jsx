import React from "react";
import { Container, Navbar, Nav, Card, Button, Row, Col } from "react-bootstrap";
import "../styles/home.css";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="page">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">🚀 Space Explorer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/spaceview">SpaceView</Nav.Link>
                <Nav.Link as={Link} to="/learning">Learning</Nav.Link>
                <Nav.Link as={Link} to="/wallpaper">Wallpaper</Nav.Link>
                <Nav.Link as={Link} to="/news">News</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div
        className="text-center d-flex flex-column justify-content-center align-items-center hero"
      >
        <h1 className="fw-bold">Welcome to Space Explorer 🌌</h1>
        <p className="lead">Discover the universe, learn space science, and stay updated with cosmic news.</p>
        <Button variant="primary" size="lg" href="#spaceview">Go to SpaceView</Button>
      </div>

      {/* About Project Section */}
      <Container className="text-center my-5 about">
        <h2 className="mb-4">About This Project</h2>
        <Row>
          <Col md={4}>
            <Card bg="dark" text="light" className="shadow-lg">
              <Card.Body>
                <Card.Title>🌍 Explore</Card.Title>
                <Card.Text>
                  Navigate through planets, galaxies, and space missions with interactive visuals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card bg="dark" text="light" className="shadow-lg">
              <Card.Body>
                <Card.Title>📚 Learn</Card.Title>
                <Card.Text>
                  Access learning materials, quizzes, and fun facts about astronomy and astrophysics.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card bg="dark" text="light" className="shadow-lg">
              <Card.Body>
                <Card.Title>🛰️ Stay Updated</Card.Title>
                <Card.Text>
                  Get the latest space news, discoveries, and live mission updates from NASA & ISRO.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;

import React from "react";
import { Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import spaceData from "../data/spaceData";

function Learning() {
  return (
    <div
      style={{
        backgroundImage: "url('https://wallpapercave.com/wp/wp3493593.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">🚀 Space Explorer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/learning">Learning</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-5 text-center">
        <h1 className="fw-bold mb-4">📚 Space Learning Hub</h1>
        <Row>
          {Object.keys(spaceData).map((topic, i) => (
            <Col md={4} sm={6} xs={12} key={i} className="mb-4">
              <Card bg="dark" text="light" className="shadow-lg h-100">
                <Card.Body
                  as={Link}
                  to={`/learning/${encodeURIComponent(topic)}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Card.Title>{topic}</Card.Title>
                  <Card.Text>Explore {topic} in detail</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Learning;

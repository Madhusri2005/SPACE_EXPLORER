// src/pages/Contact.jsx
import React from "react";
import { Container, Form, Button, Navbar, Nav } from "react-bootstrap";

function Contact() {
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
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="/">🚀 Space Explorer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/wallpaper">Wallpapers</Nav.Link>
              <Nav.Link href="/spaceview">Space View</Nav.Link>
              <Nav.Link href="/learning">Learning</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contact Form */}
      <Container className="py-5">
        <h2 className="text-center mb-4">📩 Contact Us</h2>
        <Form
          className="p-4 rounded shadow-lg bg-dark"
          style={{ maxWidth: "600px", margin: "0 auto" }}
        >
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Type your message" />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" size="md" type="submit">
              Send Message
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Contact;

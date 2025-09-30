import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Navbar, Nav, Card, Button, Row, Col } from "react-bootstrap";
import spaceData from "../data/spaceData";

function LearningDetail() {
  const { id } = useParams();
  const decodedId = decodeURIComponent(id);
  const [selected, setSelected] = useState(null);
  const topic = spaceData[decodedId];

  if (!topic) return <h2 className="text-light text-center">Topic not found 🚀</h2>;

  // Show subtopic details
  if (selected) {
    const sub = topic.subtopics[selected];
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

        <Container className="py-5">
          <Button variant="light" className="mb-3" onClick={() => setSelected(null)}>
            ← Back to Subtopics
          </Button>
          <h2>{sub.title}</h2>
          <img
            src={sub.image}
            alt={sub.title}
            style={{ maxWidth: "100%", borderRadius: "10px", marginTop: "20px" }}
          />
          <p className="mt-3" style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>{sub.definition}</p>

          <Card bg="dark" text="light" className="p-3 my-4">
            <h4>✨ Fun Facts</h4>
            <ul>
              {sub.facts.map((fact, i) => (
                <li key={i}>{fact}</li>
              ))}
            </ul>
          </Card>

          <Card bg="secondary" text="light" className="p-3">
            <h4>🧩 Quiz Time</h4>
            {sub.quiz.map((q, i) => (
              <div key={i} className="mb-2">
                <p>{i + 1}. {q.q}</p>
                {q.options.map((opt, idx) => (
                  <Button
                    key={idx}
                    variant="dark"
                    className="m-1"
                    onClick={() => alert(opt === q.answer ? "✅ Correct!" : "❌ Try again!")}
                  >
                    {opt}
                  </Button>
                ))}
              </div>
            ))}
          </Card>
        </Container>
      </div>
    );
  }

  // Show list of subtopics
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

      <Container className="py-5">
        <h2>{decodedId}</h2>
        <Row className="mt-4">
          {Object.keys(topic.subtopics).map((sub, i) => (
            <Col md={4} sm={6} xs={12} key={i} className="mb-4">
              <Card
                bg="dark"
                text="light"
                className="shadow-lg h-100"
                style={{ cursor: "pointer" }}
                onClick={() => setSelected(sub)}
              >
                <Card.Body>
                  <Card.Title>{topic.subtopics[sub].title}</Card.Title>
                  <Card.Text>Click to learn more</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default LearningDetail;

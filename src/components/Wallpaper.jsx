// src/pages/Wallpaper.jsx
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form, Navbar, Nav } from "react-bootstrap";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const Wallpaper = () => {
  const [images, setImages] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [query, setQuery] = useState("space");
  const [pageNum, setPageNum] = useState(1);

  // Fetch images from Unsplash
  const fetchImages = async (search = "space", page = 1) => {
    if (!ACCESS_KEY) {
      console.error("❌ Missing Unsplash Access Key");
      return;
    }

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=${ACCESS_KEY}&per_page=12`
      );
      const data = await response.json();

      if (page === 1) {
        setImages(data.results || []);
      } else {
        setImages((prev) => [...prev, ...(data.results || [])]);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // Load images on first render and when query/page changes
  useEffect(() => {
    fetchImages(query, pageNum);
  }, [query, pageNum]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    setQuery(searchInput.trim());
    setPageNum(1);
    setSearchInput("");
  };

  // Force download instead of opening new tab
  const downloadImage = (url) => {
    fetch(url)
      .then((res) => res.blob())
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "wallpaper.jpg";
        link.click();
      })
      .catch((err) => console.error("Download error:", err));
  };

  return (
    <div
      style={{
        backgroundColor: "black",
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

      {/* Search Bar */}
      <Container className="py-4 text-center">
        <h2 className="mb-3">🌌 Explore Space Wallpapers</h2>
        <Form className="d-flex justify-content-center" onSubmit={handleSearch}>
          <Form.Control
            type="text"
            placeholder="Search space images..."
            className="me-2"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{ width: "350px" }}
          />
          <Button type="submit" variant="light">
            Search
          </Button>
        </Form>
      </Container>

      {/* Image Grid */}
      <Container>
        <Row>
          {images.length > 0 ? (
            images.map((img) => (
              <Col key={img.id} xs={12} sm={6} md={4} className="mb-4">
                <Card className="h-100 shadow-lg">
                  <Card.Img
                    variant="top"
                    src={img.urls.small}
                    alt={img.alt_description}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="text-dark">
                      {img.alt_description || "Space Wallpaper"}
                    </Card.Title>
                    <Button
                      variant="primary"
                      className="me-2"
                      onClick={() => window.open(img.links.html, "_blank")}
                    >
                      View
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => downloadImage(img.urls.full)}
                    >
                      Download
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className="text-center">No images found.</p>
          )}
        </Row>
      </Container>

      {/* Load More */}
      <Container className="text-center py-4">
        <Button
          variant="warning"
          onClick={() => setPageNum((prev) => prev + 1)}
        >
          Load More
        </Button>
      </Container>
    </div>
  );
};

export default Wallpaper;

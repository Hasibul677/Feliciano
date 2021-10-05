import React from "react";
import { Card, Container } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <Container>
      <div className="position-relative margin text-center">
        <span className="blogTitle">Blog</span>
        <h1 className="display-3 fw-bold mb-3">Recent Posts</h1>
      </div>
      <div className="row g-3">
        <div className="col-12 col-md-4">
          <Card>
            <img className="images" src="./images/blog/1.webp" alt="" />
            <Card.Body>
              <Card.Text>Sept. 06, 2019 Admin</Card.Text>
              <Card.Title>Taste the delicious foods in Asia</Card.Title>
              <div className="d-flex justify-content-between align-items-center mt-5">
                <button className="rounded-pill px-2">Read More</button>
                <i class="fas fa-comment-dots">3</i>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-4">
          <Card>
            <img className="images" src="./images/blog/2.webp" alt="" />
            <Card.Body>
              <Card.Text>Sept. 06, 2019 Admin</Card.Text>
              <Card.Title>Taste the delicious foods in Asia</Card.Title>
              <div className="d-flex justify-content-between align-items-center mt-5">
                <button className="rounded-pill px-2">Read More</button>
                <i class="fas fa-comment-dots">3</i>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-4">
          <Card>
            <img className="images" src="./images/blog/3.webp" alt="" />
            <Card.Body>
              <Card.Text>Sept. 06, 2019 Admin</Card.Text>
              <Card.Title>Taste the delicious foods in Asia</Card.Title>
              <div className="d-flex justify-content-between align-items-center mt-5">
                <button className="rounded-pill px-2">Read More</button>
                <i class="fas fa-comment-dots">3</i>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Blog;

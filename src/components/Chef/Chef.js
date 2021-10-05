import React from "react";
import { Card } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Chef = () => {
  return (
    <Container>
      <div className="position-relative margin text-center">
        <span className="menuTitle">Chef</span>
        <h1 className="display-3 fw-bold mb-3">Our Master Chef</h1>
      </div>
      <div className="row g-3">
        <div className="col-12 col-md-6 col-lg-3">
          <Card>
            <Card.Img variant="top" src="./images/chef/1.webp" />
            <Card.Body>
              <Card.Title>John Smooth</Card.Title>
              <Card.Text>
              Restaurant Owner
              </Card.Text>
              <Card.Text>
              <a href='https://facebook.com/' target='blank'><i class="me-3 fab fa-facebook-f"></i></a>
              <a href='https://twitter.com/' target='blank'><i class="me-3 fab fa-twitter"></i></a>
              <a href='https://www.instagram.com/' target='blank'><i class="me-3 fab fa-instagram"></i></a>
              <a href='https://www.google.com/' target='blank'><i class="fab fa-google-plus-g"></i></a>
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Card>
            <Card.Img variant="top" src="./images/chef/2.webp" />
            <Card.Body>
              <Card.Title>Rebeca Welson</Card.Title>
              <Card.Text>
              Head Chef
              </Card.Text>
              <Card.Text>
              <a href='https://facebook.com/' target='blank'><i class="me-3 fab fa-facebook-f"></i></a>
              <a href='https://twitter.com/' target='blank'><i class="me-3 fab fa-twitter"></i></a>
              <a href='https://www.instagram.com/' target='blank'><i class="me-3 fab fa-instagram"></i></a>
              <a href='https://www.google.com/' target='blank'><i class="fab fa-google-plus-g"></i></a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
         <Card>
            <Card.Img variant="top" src="./images/chef/3.webp" />
            <Card.Body>
              <Card.Title>Kharl Branyt</Card.Title>
              <Card.Text>
              Chef
              </Card.Text>
              <Card.Text>
              <a href='https://facebook.com/' target='blank'><i class="me-3 fab fa-facebook-f"></i></a>
              <a href='https://twitter.com/' target='blank'><i class="me-3 fab fa-twitter"></i></a>
              <a href='https://www.instagram.com/' target='blank'><i class="me-3 fab fa-instagram"></i></a>
              <a href='https://www.google.com/' target='blank'><i class="fab fa-google-plus-g"></i></a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-12 col-md-6 col-lg-3">
          <Card>
            <Card.Img variant="top" src="./images/chef/4.webp" />
            <Card.Body>
              <Card.Title>Luke Simon</Card.Title>
              <Card.Text>
              Chef
              </Card.Text>
              <Card.Text>
              <a href='https://facebook.com/' target='blank'><i class="me-3 fab fa-facebook-f"></i></a>
              <a href='https://twitter.com/' target='blank'><i class="me-3 fab fa-twitter"></i></a>
              <a href='https://www.instagram.com/' target='blank'><i class="me-3 fab fa-instagram"></i></a>
              <a href='https://www.google.com/' target='blank'><i class="fab fa-google-plus-g"></i></a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Chef;

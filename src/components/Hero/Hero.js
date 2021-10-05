import React from "react";
import { Card, Container } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        data-interval="500" 
        data-bs-pause="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/hero/1.webp" className="caruImg w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/hero/2.webp" className="caruImg w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/hero/3.webp" className="caruImg w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className='text-center title'>BEST RESTURANT</div>
         
      <Container className='mt-5'>
        <Card className='bgcolor'>
          <div className="row g-4">
            <div className="col-12 col-lg-3 p-4">
              <div className="d-flex justify-content-center">
                <img
                  className="heroImg rounded-pill"
                  src="./images/hero/4.webp"
                  alt=""
                />
              </div>
              <div className="text-center">
                <h6>Grilled Beef with potatoes</h6>
                <p>Meat, Potatoes, Rice, Tomatoe</p>
              </div>
            </div>
            <div className="col-12 col-lg-3 p-4">
              <div className="d-flex justify-content-center">
                <img
                  className="heroImg rounded-pill"
                  src="./images/hero/5.webp"
                  alt=""
                />
              </div>
              <div className="text-center">
                <h6>Grilled Beef with potatoes</h6>
                <p>Meat, Potatoes, Rice, Tomatoe</p>
              </div>
            </div>
            <div className="col-12 col-lg-3 p-4">
              <div className="d-flex justify-content-center">
                <img
                  className="heroImg rounded-pill"
                  src="./images/hero/6.webp"
                  alt=""
                />
              </div>
              <div className="text-center">
                <h6>Grilled Beef with potatoes</h6>
                <p>Meat, Potatoes, Rice, Tomatoe</p>
              </div>
            </div>
            <div className="col-12 col-lg-3 p-4">
              <div className="d-flex justify-content-center">
                <img
                  className="heroImg rounded-pill"
                  src="./images/hero/7.webp"
                  alt=""
                />
              </div>
              <div className="text-center">
                <h6>Grilled Beef with potatoes</h6>
                <p>Meat, Potatoes, Rice, Tomatoe</p>
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;

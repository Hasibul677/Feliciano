import React, { useEffect, useState } from "react";
import "./About.css";
import { Container } from "react-bootstrap";

const About = () => {
  let [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds += 1));
      if (seconds >= 100) {
        clearInterval(interval);
      }
    },0);
  }, []);

  return (
    <Container className="margin-top">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-7">
          <div className="row gap-4">
            <div
              style={{ backgroundImage: "url(./images/about/1.webp)" }}
              className="col-5 first-img rounded"
            >
             
            </div>
            <div
              style={{ backgroundImage: "url(./images/about/2.webp)" }}
              className="col-5 second-img mt-4 rounded"
            >
           
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-5 position-relative mt-5">
          <span className="aboutTitle">About</span>
          <h1 className="display-3 fw-bold mb-3">Feliciano Restaurant</h1>
          <p className="discription">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <p>
            Mon - Fri <strong>8 AM - 11 PM</strong>
          </p>
          <h3 className="fw-bold">+ 1-978-123-4567</h3>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 col-md-12 col-lg-9">
          <div className="row">
            <div className="col-6 col-lg-3">
              <div className="parent d-flex justify-content-center">
                <h1 className="number">{seconds-88}</h1>
              </div>
              <span className='statistic'>YEARS OF EXPERIENCED</span>
            </div>
            <div className="col-6 col-lg-3">
              <div className="parent">
                <h1 className="number">{seconds}</h1>
              </div>
              <span className='ms-3 statistic'>MENUS/DISH</span>
            </div>
            <div className="col-6 col-lg-3">
              <div className="parent">
                <h1 className="number">{seconds/2}</h1>
              </div>
              <span className='ms-5 statistic'>STAFFS</span>
            </div>
            <div className="col-6 col-lg-3">
              <div className="parent">
                <h1 className="number">{seconds-85},000</h1>
              </div>
              <span className='statistic'>HAPPY CUSTOMERS</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-3">
          <p className='fs-5 text-dark'>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default About;

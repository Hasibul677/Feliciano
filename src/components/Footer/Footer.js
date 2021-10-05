import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark margin py-5">
      <Container>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3 text-white mb-5">
            <h3>Feliciano</h3>
            <p className="mt-5">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className='mt-4'>
            <a href="https://facebook.com/" target="blank">
              <i className="me-3 fa-2x fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/" target="blank">
              <i className="me-3 fa-2x fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/" target="blank">
              <i className="me-3 fa-2x fab fa-instagram"></i>
            </a>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-white mb-5">
          <h3>Open Hours</h3>
            <div className="d-flex justify-content-between align-items-center mt-5">
              <div>
                  <p>Monday</p>
                  <p>Tuesday</p>
                  <p>Wednesday</p>
                  <p>Thursda</p>
                  <p>Friday</p>
                  <p>Saturday</p>
                  <p>Sunday</p>
              </div>
              <div>
                  <p>9:00-24:00</p>
                  <p>9:00-24:00</p>
                  <p>9:00-24:00</p>
                  <p>9:00-24:00</p>
                  <p>9:00-24:00</p>
                  <p>9:00-24:00</p>
                  <p>9:00-24:00</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-white mb-5">
          <h3>Instagram</h3>
          <div className="row mt-5">
              <div className="col-4">
                  <img className='footimg' src="./images/footer/1.jpg" alt="" />
              </div>
              <div className="col-4">
                  <img className='footimg' src="./images/footer/2.webp" alt="" />
              </div>
              <div className="col-4">
                  <img className='footimg' src="./images/footer/3.webp" alt="" />
              </div>
              <div className="col-4">
                  <img className='footimg' src="./images/footer/4.webp" alt="" />
              </div>
              <div className="col-4">
                  <img className='footimg' src="./images/footer/5.webp" alt="" />
              </div>
              <div className="col-4">
                  <img className='footimg' src="./images/footer/6.webp" alt="" />
              </div>
          </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-white">
              <h3>Newsletter</h3>
              <p className='mt-5'>Far far away, behind the word mountains, far from the countries.</p>
              <input className='py-2 w-75' type="text" placeholder='Enter Your Email' />
              <div className='mt-2'>
              <button className='py-2 w-75 btn-primary'>SUBMIT</button>
              </div>
          </div>
        </div>
      </Container>
      <div className='text-white text-center mt-5'><strong>&copy;Copyright design by <span className='text-danger bg-white px-3 rounded-pill'>Md Hasibul Hasan</span></strong></div>
    </div>
  );
};

export default Footer;

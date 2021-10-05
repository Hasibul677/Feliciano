import React from "react";
import "./Reservation.css";
import { Card, Container } from "react-bootstrap";

const Reservation = () => {
  return (
    <div
      className="margin py-5 resbg"
      style={{ backgroundImage: "url(./images/hero/3.webp)" }}
    >
      <Container>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <Card className="px-4">
              <div className="position-relative margin text-center">
                <span className="reservationTitle">Book a Table</span>
                <h1 className="display-4 fw-bold mb-3">Make Reservation</h1>
              </div>
              <div className="row">
                <div className="col-6 mb-5">
                  <input
                    className="w-100 py-2"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="col-6 mb-5">
                  <input
                    className="w-100 py-2"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="col-6 mb-5">
                  <input
                    className="w-100 py-2"
                    type="number"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="col-6 mb-5">
                  <input className="w-100 py-2" type="date" />
                </div>
                <div className="col-6">
                  <input
                    className="w-100 py-2"
                    type="time"
                    placeholder="Time"
                  />
                </div>
                <div className="col-6">
                  <select className="w-100 py-2" id="cars" name="cars">
                    <option value="volvo">Person</option>
                    <option value="saab">1</option>
                    <option value="fiat">2</option>
                    <option value="fiat">3</option>
                    <option value="audi">4+</option>
                  </select>
                </div>
              </div>
              <button className='w-50 m-auto mt-5 mb-5 p-2 btn-primary fs-5 fw-bold'>Make a Reservation</button>
            </Card>
          </div>
          <div className="col-12 col-md-6"></div>
        </div>
      </Container>
    </div>
  );
};

export default Reservation;

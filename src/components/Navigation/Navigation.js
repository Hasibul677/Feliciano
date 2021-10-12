import React from "react";
import "./Navigation.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="d-flex justify-content-between mx-4">
          <div className="fw-bold">
            <i className="fas fa-phone"></i> +1235 2355 98
          </div>
          <div className="fw-bold">
            <i className="fas fa-location-arrow"></i> hhasibul677@gamil.com
          </div>
          <div>
            <p className="fw-bold">
              Open hours: Monday - Sunday 8:00AM - 9:00PM
            </p>
          </div>
        </div>
      </div>
      <Navbar className="background-color bg-dark" expand="lg">
        <Container>
          <NavLink
            activeClassName="selected"
            to="/home"
            className="fs-3 fw-bold text-white text-decoration-none"
          >
            Feliciano
          </NavLink>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto fs-5 fw-bold mt-2">
              <NavLink
                activeClassName="selected"
                to="/home"
                className="text-decoration-none ms-3"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="selected"
                to="/about"
                className="text-decoration-none ms-3"
              >
                About
              </NavLink>
              <NavLink
                activeClassName="selected"
                to="/menu"
                className="text-decoration-none ms-3"
              >
                Menu
              </NavLink>
              <NavLink
                activeClassName="selected"
                to="/service"
                className="text-decoration-none ms-3"
              >
                Service
              </NavLink>
              <NavLink
                activeClassName="selected"
                to="/contact"
                className="text-decoration-none ms-3"
              >
                Contact
              </NavLink>
              <NavLink
                activeClassName="selected"
                to="/table"
                className="text-decoration-none ms-3"
              >
                <button className="btn-primary fs-6 rounded">
                  Book a table
                </button>
              </NavLink>
              <NavLink
                to="/cart"
                className="text-decoration-none ms-3 mt-sm-3 mt-lg-0"
              >
                <span className="position-relative">
                  <i className="text-white fa-2x fas fa-cart-plus"></i>
                  <span className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-info">0<span className="visually-hidden">unread messages</span>
                  </span>
                </span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

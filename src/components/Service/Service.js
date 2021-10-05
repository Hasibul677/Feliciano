import React from "react";
import { Card, Container } from "react-bootstrap";
import "./Service.css";

const Service = () => {
  return (
    <Container>
      <div className="position-relative margin text-center">
        <span className="serviceTitle">Services</span>
        <h1 className="display-3 fw-bold mb-3">Catering Services</h1>
      </div>
      <div className="row mt-5">
          <div className="col-12 col-md-4 text-center">
          <Card style={{ width: '18rem' }} className='p-3'>
          <i className="fa-3x icon fas fa-birthday-cake"></i>
				<Card.Body>
					<Card.Title className='info fw-bold fs-4 text-dark'>Birthday Party</Card.Title>
					<Card.Text className='info'>
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
    				</Card.Text>
					
				</Card.Body>
			</Card>
          </div>
          <div className="col-12 col-md-4 text-center">
          <Card style={{ width: '18rem' }} className='p-3'>
          <i className="fa-3x icon fas fa-handshake"></i>
				<Card.Body>
					<Card.Title className='info fw-bold fs-4 text-dark'>Business Meetings</Card.Title>
					<Card.Text className='info'>
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
    				</Card.Text>
				</Card.Body>
			</Card>
          </div>
          <div className="col-12 col-md-4 text-center">
          <Card style={{ width: '18rem' }} className='p-3'>
          <i className="fa-3x icon fas fa-glass-cheers"></i>
				<Card.Body>
					<Card.Title className='info fw-bold fs-4 text-dark'>Wedding Party</Card.Title>
					<Card.Text className='info'>
                    Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
    				</Card.Text>
				</Card.Body>
			</Card>
          </div>
      </div>
    </Container>
  );
};

export default Service;

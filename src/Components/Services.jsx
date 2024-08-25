import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Deals.css';

const Deals = () => {
  return (
    <div className="deals-container">
      <h2 className="deals-title">Services Offered</h2>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="deals-card">
            <Card.Img
              variant="top"
              src={"/Images/wheel-balancing.jpg"}
              className="deals-card-img"
              alt="Wheel Balancing"
            />
            <Card.Body>
              <Card.Title>Wheel Balancing</Card.Title>
              <Card.Text>
                Ensure your wheels are perfectly balanced for a smoother ride and better tire longevity.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="deals-card">
            <Card.Img
              variant="top"
              src={"/Images/wheelalign.jpg"}
              className="deals-card-img"
              alt="Wheel Alignment"
            />
            <Card.Body>
              <Card.Title>Wheel Alignment</Card.Title>
              <Card.Text>
                Proper wheel alignment improves handling, prevents uneven tire wear, and enhances safety.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Deals;

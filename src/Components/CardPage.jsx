
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import config from '../config.json'; // Import your JSON data
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './CardPage.css'; // Import the custom CSS

const CardPage = () => {
  return (
    <>
    <h2 style={{textAlign:"center",marginTop:"23px"}}>Tyres Sold</h2>
    <div className="container my-4"> 
      <Row>
        {config.map((eachCard, ind) => (
          <Col xs={12} sm={6} md={4} lg={3} key={ind} className="mb-4"> 
            <Card className="card-custom h-100">
              <Card.Img
                variant="top"
                src={`/Images/${eachCard.img}.jpg`} 
                alt={eachCard.title} 
                className="card-img-custom" 
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{eachCard.title}</Card.Title>
                <Card.Text>{eachCard.text}</Card.Text>
                <div className="rating-container">
                  <span className="rating-background">
                    <span className="rating-stars">★</span> 
                    <span className="rating-text">{eachCard.rating}</span>
                  </span>
                </div>
                <Card.Text>
                  <strong>Tubeless:</strong> {eachCard.tubeless ? 'Yes' : 'No'}
                </Card.Text>
                <Card.Text>
                 {eachCard.model}
                </Card.Text>
                <Card.Text>
                   {eachCard.price}
                </Card.Text>
              </Card.Body>
              {eachCard.link && ( 
                <Card.Footer>
                  <Card.Link href={eachCard.link} target="_blank" rel="noopener noreferrer">
                    More Details
                  </Card.Link>
                </Card.Footer>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    </>
  );
};



export default CardPage;

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselPage = () => {
  return (
    <div>
        <Carousel>
    <Carousel.Item>
      <img style={{height:"50vh"}} className="d-block w-100" src="/Images/tyre-1.jpg" alt="First slide" /> 

      <Carousel.Caption>
        <h3>Number one tyre selling website</h3>
        <p>Safety Starts With Reliable Tires.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:"50vh"}}className="d-block w-100" src="/Images/tyre-2.jpg" alt="second image" />

      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:"50vh"}} className="d-block w-100" src="/Images/tyre-3.jpg" alt="Third slide" />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default CarouselPage;
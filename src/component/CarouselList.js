import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/d1.jpeg'
import image2 from '../images/d2.jpeg'
import image3 from '../images/d3.jpeg'
import image4 from '../images/d4.jpeg'
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function CarouselList() {
  return (
    <div className="carousel-container">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src={image1} className="d-block w-100 carousel-image" alt="Slide 1" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={image2} className="d-block w-100 carousel-image" alt="Slide 2" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image3} className="d-block w-100 carousel-image" alt="Slide 3" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselList;
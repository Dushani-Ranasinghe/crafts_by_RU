import React from 'react'
import "../Styles/HeroSection.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from "react-bootstrap"

//images
import MainImg from "../Resources/hero-main-img.png"
import first from "../Resources/2.png"
import second from "../Resources/3.png"
import third from "../Resources/4.png"
import fourth from "../Resources/5.png"
import fifth from "../Resources/6.png"
import sixth from "../Resources/7.png"

function HeroSection() {
  return (
    <div className='HeroSection'>
        <div className='Carousel-container'>

<Carousel fade>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={MainImg}
      alt="First slide"
      height={500}/>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={first}
      alt="Second slide"
      height={500}
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={second}
      alt="Third slide"
      height={500}
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={third}
      alt="Third slide"
      height={500}
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fourth}
      alt="Third slide"
      height={500}
    />
    <Carousel.Caption>
      <h3>fourth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={fifth}
      alt="Third slide"
      height={500}
    />
    <Carousel.Caption>
      <h3>fifth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src={sixth}
      alt="Third slide"
      height={500}
    />
    <Carousel.Caption>
      <h3>sixth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    </div>
  )
}

export default HeroSection
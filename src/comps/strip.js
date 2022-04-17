import React from 'react'
import "./strip.css"
import Carousel from 'react-bootstrap/Carousel'
export default function Strip() {


      
        return (<Carousel>
            <Carousel.Item>
              <img
                className="stripImg d-block w-100"
                src="../images/1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" stripImg d-block w-100"
                src="../images/2.jpg"
                alt="Second slide"
              />
          
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="stripImg d-block w-100"
                src="../images/3.jpg"
                alt="Third slide"
              />
          
              <Carousel.Caption>

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
    }
    



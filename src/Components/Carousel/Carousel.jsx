import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { TbPlane } from "react-icons/tb";
import { FaHotel } from "react-icons/fa";
import { BiTrain } from "react-icons/bi";
import { GiShipBow } from "react-icons/gi";
import { IoMdRestaurant } from "react-icons/io";
import "./Carousel.css";

const TravelInfoCarousel = ({ pageRef, pageNumber }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container" ref={pageRef} id={`page-${pageNumber}`}>
      <Carousel
        className="carousel"
        activeIndex={index}
        onSelect={handleSelect}
        slide={false}
      >
        <Carousel.Item className="carousel-container">
          <Row>
            <Col md={4} className="item-container">
              <div className="item-header">
                <TbPlane />
                <div className="item-header-right">
                  <span>FLIGHT INFORMATION</span>
                  <span>Arrival and Departure</span>
                </div>
              </div>
              <Row className="carousel-body" style={{ width: "100%" }}>
                <img
                  src="https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmxpZ2h0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  style={{ width: "100%", height: "200px" }}
                  alt=""
                />
              </Row>
              <Row className="carousel-footer">
                <h6>AIRPORT</h6>
                <p>
                  Lorem ipsum dolor sit ametr consectetur adipi scing elit.
                  Donec feugiat iaculis tortor molestie. Nunc imperdiet commodo
                  nunc, a porta eros iaculis sit amet iaculis tortor molestie
                  iaculis tortor molestie.
                </p>
              </Row>
            </Col>{" "}
            <Col md={4} className="item-container">
              <div className="item-header">
                <FaHotel />
                <div className="item-header-right">
                  <span>HOTEL INFORMATION</span>
                  <span>Accomodation and Dining</span>
                </div>
              </div>

              <Row className="carousel-body" style={{ width: "100%" }}>
                <img
                  src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/hotel.jpg"
                  style={{ width: "100%", height: "200px" }}
                  alt=""
                />
              </Row>
              <Row className="carousel-footer">
                <h6>HOTEL</h6>

                <p>
                  Lorem ipsum dolor sit ametr consectetur adipi scing elit.
                  Donec feugiat iaculis tortor molestie. Nunc imperdiet commodo
                  nunc, a porta eros iaculis sit amet iaculis tortor molestie
                  iaculis tortor molestie.
                </p>
              </Row>
            </Col>
            <Col md={4} className="item-container">
              <div className="item-header">
                <IoMdRestaurant />
                <div className="item-header-right">
                  <span>RESTAURANT INFORMATION</span>
                  <span>Dining</span>
                </div>
              </div>

              <Row className="carousel-body" style={{ width: "100%" }}>
                <img
                  src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/restaurant.jpg"
                  style={{ width: "100%", height: "200px" }}
                  alt=""
                />
              </Row>
              <Row className="carousel-footer">
                <h6>RESTAURANT</h6>

                <p>
                  Lorem ipsum dolor sit ametr consectetur adipi scing elit.
                  Donec feugiat iaculis tortor molestie. Nunc imperdiet commodo
                  nunc, a porta eros iaculis sit amet iaculis tortor molestie
                  iaculis tortor molestie.
                </p>
              </Row>
            </Col>
          </Row>
        </Carousel.Item>

        {/* 2nd item */}
        <Carousel.Item className="carousel-container">
          <Row>
            <Col md={4} className="item-container">
              <div className="item-header">
                <BiTrain />
                <div className="item-header-right">
                  <span>TRAIN INFORMATION</span>
                  <span>Arrival and Departure</span>
                </div>
              </div>

              <Row className="carousel-body" style={{ width: "100%" }}>
                <img
                  src="https://images.pexels.com/photos/28614/pexels-photo.jpg"
                  style={{ width: "100%", height: "200px" }}
                  alt=""
                />
              </Row>
              <Row className="carousel-footer">
                <h6>TRAINS</h6>
                <p>
                  Lorem ipsum dolor sit ametr consectetur adipi scing elit.
                  Donec feugiat iaculis tortor molestie. Nunc imperdiet commodo
                  nunc, a porta eros iaculis sit amet iaculis tortor molestie
                  iaculis tortor molestie.
                </p>
              </Row>
            </Col>{" "}
            <Col md={4} className="item-container">
              <div className="item-header">
                <GiShipBow />
                <div className="item-header-right">
                  <span>CRUISE INFORMATION</span>
                  <span>Arrival and Departure</span>
                </div>
              </div>
              <Row className="carousel-body" style={{ width: "100%" }}>
                <img
                  src="https://images.pexels.com/photos/775294/pexels-photo-775294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ width: "100%", height: "200px" }}
                  alt=""
                />
              </Row>
              <Row className="carousel-footer">
                <h6>CRUISE</h6>

                <p>
                  Lorem ipsum dolor sit ametr consectetur adipi scing elit.
                  Donec feugiat iaculis tortor molestie. Nunc imperdiet commodo
                  nunc, a porta eros iaculis sit amet iaculis tortor molestie
                  iaculis tortor molestie.
                </p>
              </Row>
            </Col>
            <Col md={4} className="item-container">
              <div className="item-header">
                <IoMdRestaurant />
                <div className="item-header-right">
                  <span>RESTAURANT INFORMATION</span>
                  <span>Arrival and Departure</span>
                </div>
              </div>
              <Row className="carousel-body" style={{ width: "100%" }}>
                <img
                  src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/restaurant.jpg"
                  style={{ width: "100%", height: "200px" }}
                  alt=""
                />
              </Row>
              <Row className="carousel-footer">
                <h6>RESTAURANT</h6>

                <p>
                  Lorem ipsum dolor sit ametr consectetur adipi scing elit.
                  Donec feugiat iaculis tortor molestie. Nunc imperdiet commodo
                  nunc, a porta eros iaculis sit amet iaculis tortor molestie
                  iaculis tortor molestie.
                </p>
              </Row>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
      {/* <div className="text-center">
        <Button onClick={() => handleNext()}>Prev</Button>
        <Button onClick={() => handlePrev()}>Next</Button>
      </div> */}
    </div>
  );
};

export default TravelInfoCarousel;

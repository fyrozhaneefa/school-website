import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row } from "react-bootstrap";
import "./Feedback.scss";

const Feedback = ({ pageRef, pageNumber }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="feedback-container" ref={pageRef} id={`page-${pageNumber}`}>
      <div className="container">
        <Row>
          <Col md={12} className="feedback-header">
            <div className="header-top">
              CLIENT <span>FEEDBACK</span>
            </div>
            <div className="header-sep"></div>
            <div className="header-bottom">
              <span>Words From Our Happy Tourist</span>
            </div>
          </Col>
        </Row>
      </div>
      <div className="feedback-carousel container">
        <Carousel
          className="carousel"
          activeIndex={index}
          onSelect={handleSelect}
        >
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>AWESOME PLACES</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <p>
                    Lorem ipsum dolor sit ametr consectetur adipi scing elit.
                    Donec feugiat iaculis tortor molestie. Nunc imperdiet
                    commodo nunc, a porta eros iaculis sit amet iaculis tortor
                    molestie iaculis tortor molestie.
                  </p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    <div className="carousel-footer-icon">
                      <img
                        src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/quote/01.jpg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-footer-text">
                      <h4>NATASHA ROMONOFF</h4>
                      <span>Secret Agent</span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          {/* 2nd item */}
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>TRAIN INFORMATION</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <p>
                    Lorem ipsum dolor sit ametr consectetur adipi scing elit.
                    Donec feugiat iaculis tortor molestie. Nunc imperdiet
                    commodo nunc, a porta eros iaculis sit amet iaculis tortor
                    molestie iaculis tortor molestie.
                  </p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    <div className="carousel-footer-icon">
                      <img
                        src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/quote/02.jpg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-footer-text">
                      <h4>JOHN DOEN</h4>
                      <span>CEO At IT Company</span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          {/* 3rd item */}
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>BEST FOOD & PLACE</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <p>
                    Lorem ipsum dolor sit ametr consectetur adipi scing elit.
                    Donec feugiat iaculis tortor molestie. Nunc imperdiet
                    commodo nunc, a porta eros iaculis sit amet iaculis tortor
                    molestie iaculis tortor molestie.
                  </p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    <div className="carousel-footer-icon">
                      <img
                        src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/quote/03.jpg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-footer-text">
                      <h4>RICHARD SIMON</h4>
                      <span>CEO At IT Company</span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Feedback;

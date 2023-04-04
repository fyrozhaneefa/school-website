import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row } from "react-bootstrap";
import "./Feedback.scss";
import chairman from "../Assets/ImportantPersons/Chairman.jpg";
import secretary from "../Assets/ImportantPersons/rkrishnan.png";
import principal from "../Assets/ImportantPersons/principal.jpg";

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
              MANAGEMENT <span>TESTIMONIALS</span>
            </div>
            <div className="header-sep"></div>
            <div className="header-bottom">
              <span>Words From Our Influential people </span>
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
                    <h4>CHAIRMAN MESSAGE</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <p>
                    Bharatiya Vidya Bhavan, is an institution which aims at
                    synthesizing Indian and Western cultures. Such a philosophy,
                    as propagated by the institution, is to help the youth of
                    the country to grow as ideal citizens of not only India, but
                    of the world as well. I wish you all success
                  </p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    <div className="carousel-footer-icon">
                      <img
                        src={chairman}
                        // src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/quote/01.jpg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-footer-text">
                      <h4>SHRI T.S. PATTABHIRAMAN</h4>
                      <span>CHAIRMAN</span>
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
                    <h4>SECRETARY MESSAGE</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <p>
                    "Literacy in itself is not education.Literacy is not end of
                    education or even the beginning.By education, I mean an all
                    round drawing out of the best in the child and man- body,
                    mind and spirit . The future depends on what we do in the
                    present". Bharatiya Vidya Bhavan’s Vidya Mandir,
                  </p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    <div className="carousel-footer-icon">
                      <img
                        src={secretary}
                        // src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/quote/02.jpg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-footer-text">
                      <h4>SHRI K.P. RADHAKRISHNAN</h4>
                      <span>HON. SECRETARY</span>
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
                    <h4>PRINCIPAL MESSAGE</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <p>
                    In its early stages, human mind is a coarse grain of sand,
                    nurturing a shell of broad spectrum of learning
                    opportunities and experiences. It eventually gets nourished
                    into natures most gifted ominous pearl of creative ideas,
                    knowledge and critical thinking that had revolutionized the
                    world.
                  </p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    <div className="carousel-footer-icon">
                      <img
                        src={principal}
                        // src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/quote/03.jpg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-footer-text">
                      <h4>UNKNOWN</h4>
                      {/* <h4>SMT.SATHI DEVI P.S</h4> */}
                      <span>PRINCIPAL</span>
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

import React from "react";
import { Col, Row } from "react-bootstrap";
import Footer from "../Footer/Footer";
import "./Contact.scss";

const Contact = ({ pageRef, pageNumber }) => {
  return (
    <div className="contact-container" ref={pageRef} id={`page-${pageNumber}`}>
      <div className="container">
        <Row>
          <Col md={12} className="contact-header">
            <div className="header-top">
              BHARATIYA VIDYA <span>BHAVAN </span>
            </div>
            <div className="header-sep"></div>
            <div className="header-bottom">
              <span>Thrissur Kendra</span>
            </div>
          </Col>
        </Row>
      </div>
      {/* <div className="container padding-bottom">
        <Row>
          <Col className="body-left" md={6}>
            <div className="input-wrapper">
              <div className="input">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-control input"
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="form-control input"
                />
              </div>
              <div className="input">
                <input
                  type="text"
                  placeholder="Your Phone"
                  className="form-control input"
                />
              </div>
            </div>
          </Col>
          <Col className="body-right" md={6}>
            <div className="text-area">
              <input
                type="textarea"
                placeholder="Write your comment here"
                className=" form-control text-area"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <div className="submit-btn">
            <input
              type="submit"
              className="wpcf7-form-control  wpcf7-submit btn btn-primary btn-lg"
              value="Send message"
            />
          </div>
        </Row>
      </div> */}
      <Footer />
    </div>
  );
};

export default Contact;

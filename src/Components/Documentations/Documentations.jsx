import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Documentations.css";
import { FaCalendarAlt, FaBullhorn, FaCloud } from "react-icons/fa";
const Documentations = ({ pageRef, pageNumber }) => {
  return (
    <div className="doc-container" ref={pageRef} id={`page-${pageNumber}`}>
      <div className="container">
        <Row>
          <Col md={12}>
            <Row>
              <Col md={6} className="doc-left">
                <Row>
                  <Col md={12}>
                    <h2 className="main-header-text">MARIANA TRENCH</h2>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="doc-left-bottom">
                    <small className="sub-header-text">
                      Deepest Place In The Ocean
                    </small>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <div className="doc-right">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  scelerisque, purus sit amet elementum blandit, sem arcu
                  egestas quam, eget malesuada sem libero eu ante. Duis nec
                  ultricies enim. Sed cursus volutpat finibus. Morbi at ornare
                  purus. Vivamus congue suscipit dui nec fringilla. Nam auctor
                  velit nec nisi molestie, ut maximus libero euismod. Nam dolor
                  nunc, consequat nec sollicitudin vel, commodo vitae ex.
                  Vestibulum rhoncus mollis felis in auctor. Donec at ultricies
                  erat, eu pulvinar est. Integer pretium nunc quis dui
                  sollicitudin commodo.
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
      </div>

      <div className="container doc-bottom">
        <Row>
          <Col md={4} className="space">
            <div className="service">
              <div className="icon">
                <FaCalendarAlt color="white" size={30} />
              </div>
              <div className="icon-text-div">
                <span>Adventure Begins</span>
                <span>25 Jan 2023</span>
              </div>
            </div>
          </Col>
          <Col md={4} className="space">
            <div className="service">
              <div className="icon">
                <FaBullhorn color="white" size={30} />
              </div>
              <div className="icon-text-div">
                <span>Duration</span>
                <span>5 Days</span>
              </div>
            </div>
          </Col>
          <Col md={4} className="space">
            <div className="service">
              <div className="icon">
                <FaCloud color="white" size={30} />
              </div>
              <div className="icon-text-div">
                <span>Wheather</span>
                <span>Summer - 95℉ to 100.4℉</span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Documentations;

import React from "react";
import "./CenterofExcellence.scss";
import { Col, Row } from "react-bootstrap";

const CenterofExcellence = ({ pageRef, pageNumber }) => {
  return (
    <div className="contact-container" ref={pageRef} id={`page-${pageNumber}`}>
      <div className="container">
        <Row>
          <Col md={12} className="contact-header">
            <div className="header-top">
              CENTER OF <span>EXCELLENCE</span>
            </div>
            <div className="header-sep"></div>
            <div className="header-bottom">
              <span>Interventions for Developing Programs</span>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CenterofExcellence;

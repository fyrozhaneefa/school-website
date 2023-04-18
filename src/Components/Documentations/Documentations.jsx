import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Documentations.css";
import building from "../Assets/Images/doc_left_img.png";
const Documentations = ({ pageRef, pageNumber }) => {
  return (
    <div className="doc-container" ref={pageRef} id={`page-${pageNumber}`}>
      <div className="container">
        <Row>
          <Col md={12}>
            <Row>
              <Col md={6} className="doc-left">
                <div className="doc-left-img">
                  <img src={building} alt="" />
                </div>
                {/* <Row>
                  <Col md={12}>
                    <h2 className="main-header-text">PERCEPTION </h2>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="doc-left-bottom">
                    <small className="sub-header-text">
                      LET NOBLE THOUGHTS COME TO US FROM EVERY SIDE...
                    </small>
                  </Col>
                </Row> */}
              </Col>
              <Col md={6} className="doc-right-container">
                <div>
                  <Row style={{ marginBottom: "4rem" }}>
                    <div className="doc-right-header">OUR VISION</div>
                    <div className="doc-right">
                      The test of Bhavan´s right to exist is whether those who
                      work for it in different spheres and in different places
                      and those who study in its many institutions can develop a
                      sense of mission as would enable them to translate the
                      fundamental values even in a small measure into their
                      individual life. Creative vitality of a culture consists
                      in this: whether the ‘best’ among those who belong to it
                      however small their number find self-fulfillment by living
                      up to the fundamental values of our ageless culture.
                    </div>
                  </Row>
                  <Row>
                    <div className="doc-right-header">OUR MISSION</div>
                    <div className="doc-right">
                      The test of Bhavan´s right to exist is whether those who
                      work for it in different spheres and in different places
                      and those who study in its many institutions can develop a
                      sense of mission as would enable them to translate the
                      fundamental values even in a small measure into their
                      individual life. Creative vitality of a culture consists
                      in this: whether the ‘best’ among those who belong to it
                      however small their number find self-fulfillment by living
                      up to the fundamental values of our ageless culture.
                    </div>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* <hr /> */}
      </div>

      {/* <div className="container doc-bottom">
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
      </div> */}
    </div>
  );
};

export default Documentations;

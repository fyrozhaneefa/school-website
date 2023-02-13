import React, { useEffect, useState } from "react";
// import Navbar from "../Navbar/Navbar";
import "./Homepage.css";
import Image1 from "../Assets/Images/Image1.jpg";
import Image2 from "../Assets/Images/Image2.jpg";
import Image3 from "../Assets/Images/Image3.jpg";
import Image4 from "../Assets/Images/Image4.jpg";
import { Col, Row } from "react-bootstrap";

const HomePage = ({ pageRef, pageNumber }) => {
  const [index, setIndex] = useState(0);

  const images = [Image1, Image2, Image3, Image4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [index, images.length]);

  const style = {
    backgroundImage: `url(${images[index]})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "calc(100vh - 70px)",
    zIndex: -1,
    transition: "background-image 1s ease-out",
  };

  return (
    <div className="wraper" ref={pageRef} id={`page-${pageNumber}`}>
      <div className="home-page" style={style}>
        <div className="container">
          <div className="inside">
            <Row>
              <Col md="6">
                <div className="date-box">
                  <div className="date-left">
                    <span>Departure On</span>
                    <span>25 JAN</span>
                    <span>2023</span>
                  </div>
                  <div className="date-right">
                    Sorry Folks, try our next Tour!
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="subscribe-box">
                  <div className="subscribe-box-left">
                    <Row className="w-100">
                      <Col md={6} className="input-s">
                        <div className="w-100">
                          <input
                            className="input-fields w-100"
                            type="text"
                            placeholder="First Name"
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="w-100">
                          <input
                            className="input-fields w-100"
                            type="text"
                            placeholder="Last Name"
                          />
                        </div>
                      </Col>
                    </Row>
                    <div className="mt-4">
                      <input
                        className="input-fields w-100"
                        type="text"
                        placeholder="Enter email address here..."
                      />
                    </div>
                  </div>
                  <div className="subscribe-box-right">
                    <span>SUBSCRIBE TO GET UPDATES</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          {/* <div className="home-page-container">
            <Row>
              <Col md={6}>
                <div className="date-box">
                  <div className="date-left">
                    <span>Departure On</span>
                    <span>25 JAN</span>
                    <span>2023</span>
                  </div>
                  <div className="date-right">
                    Sorry Folks, try our next Tour!
                  </div>
                </div>
              </Col>
              <Col md={6} className="subscribe-box">
                <div className="subscribe-box-input w-60 ">
                  <div>
                    <div className="d-flex">
                      <input
                        className="input-fields"
                        type="text"
                        placeholder="First Name"
                      />
                      <input
                        className="input-fields"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                    <input
                      className="input-fields"
                      type="text"
                      placeholder="Enter Your Email Address Here..."
                    />
                  </div>
                </div>
                <div className="subscribe-box-icon w-40 d-flex justify-content-center align-items-center">
                  <span className="subscribe-text">
                    SUBSCRIBE TO GET UPDATES
                  </span>
                </div>
              </Col>
            </Row>
          </div> */}
        </div>

        <div />
      </div>
    </div>
  );
};

export default HomePage;

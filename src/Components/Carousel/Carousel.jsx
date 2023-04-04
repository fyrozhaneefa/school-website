import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { RiComputerFill } from "react-icons/ri";
import { FiActivity } from "react-icons/fi";
import { ImLab } from "react-icons/im";
import "./Carousel.css";
import { IoLibrary } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdOutlineSportsSoccer } from "react-icons/md";
import computer from "../Assets/CarouselImages/computer.jpg";
import fitness from "../Assets/CarouselImages/fitness.jpg";
import hostel from "../Assets/CarouselImages/hostel.jpg";
import lab from "../Assets/CarouselImages/lab.jpg";
import library from "../Assets/CarouselImages/library.jpg";
import creative from "../Assets/CarouselImages/creative.jpg";

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
        fade={true}
      >
        <Carousel.Item className="carousel-container carousel-item">
          <Row>
            <Col md={4} className="item-container">
              <div className="item-header">
                <IoLibrary />
                <div className="item-header-right">
                  <span style={{}}>KNOWLEDGE HUB</span>
                  <span>Collection of Books</span>
                </div>
              </div>
              <Row className="carousel-body" style={{ width: "100%" }}>
                <img
                  src={library}
                  // src="https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmxpZ2h0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  style={{ width: "100%", height: "200px" }}
                  alt=""
                />
              </Row>
              <Row className="carousel-footer">
                <h6>LIBRARY</h6>
                <p>
                  The institution has a well-stocked library that provides
                  students access to a vast collection of books, journals,
                  magazines, and other study materials. This facility helps
                  students expand their knowledge base and improve their
                  academic performance.
                </p>
              </Row>
            </Col>{" "}
            <Col md={4} className="item-container">
              <div className="item-header">
                <RiComputerFill />
                <div className="item-header-right">
                  <span>TECH ZONE</span>
                  <span>Technology Access</span>
                </div>
              </div>

              <Row className="carousel-body" style={{ width: "100%" }}>
                <img
                  src={computer}
                  // src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/hotel.jpg"
                  style={{ width: "100%", height: "200px" }}
                  alt=""
                />
              </Row>
              <Row className="carousel-footer">
                <h6>COMPUTER LAB</h6>

                <p>
                  The institution has a modern computer lab with advanced
                  infrastructure, which allows students to use computers and
                  internet facilities for research, project work, and other
                  academic purposes. This facility helps students to stay
                  updated with the latest technology and gain practical
                  knowledge.
                </p>
              </Row>
            </Col>
            <Col md={4} className="item-container">
              <div className="item-header">
                <ImLab />
                <div className="item-header-right">
                  <span>SCIENCE HUB</span>
                  <span>Science Equipment</span>
                </div>
              </div>

              <Row className="carousel-body" style={{ width: "100%" }}>
                <img
                  src={lab}
                  // src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/restaurant.jpg"
                  style={{ width: "100%", height: "200px" }}
                  alt=""
                />
              </Row>
              <Row className="carousel-footer">
                <h6>LABORATORY</h6>

                <p>
                  The institution has well-equipped laboratories for science
                  students to conduct experiments and research work. This
                  facility helps students to gain hands-on experience and
                  develop their analytical skills.
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
                <MdOutlineSportsSoccer />
                <div className="item-header-right">
                  <span>FITNESS ZONE</span>
                  <span>Fitness Opportunities</span>
                </div>
              </div>

              <Row className="carousel-body" style={{ width: "100%" }}>
                <img
                  src={fitness}
                  // src="https://images.pexels.com/photos/28614/pexels-photo.jpg"
                  style={{ width: "100%", height: "200px" }}
                  alt=""
                />
              </Row>
              <Row className="carousel-footer">
                <h6>SPORT FACILITIES</h6>
                <p>
                  Bharatiya Vidya Bhavan Thrissur provides various sports
                  facilities such as playgrounds, gymnasium, and indoor game
                  facilities to encourage students to participate in physical
                  activities. This facility helps students to stay fit, healthy,
                  and improve their overall well-being.
                </p>
              </Row>
            </Col>{" "}
            <Col md={4} className="item-container">
              <div className="item-header">
                <FaHome />
                <div className="item-header-right">
                  <span>HOME AWAY FROM HOME</span>
                  <span>Student Accommodation</span>
                </div>
              </div>
              <Row className="carousel-body" style={{ width: "100%" }}>
                <img
                  src={hostel}
                  // src="https://images.pexels.com/photos/775294/pexels-photo-775294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ width: "100%", height: "200px" }}
                  alt=""
                />
              </Row>
              <Row className="carousel-footer">
                <h6>HOSTEL FACILITIES</h6>

                <p>
                  The institution provides hostel facilities for outstation
                  students with well-furnished rooms, nutritious food, and a
                  comfortable environment for studying and living. This facility
                  helps students to focus on their studies and feel at ease in
                  an unfamiliar place.
                </p>
              </Row>
            </Col>
            <Col md={4} className="item-container">
              <div className="item-header">
                <FiActivity />
                <div className="item-header-right">
                  <span>CREATIVE HUB</span>
                  <span>Creative Pursuits</span>
                </div>
              </div>
              <Row className="carousel-body" style={{ width: "100%" }}>
                <img
                  src={creative}
                  // src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/restaurant.jpg"
                  style={{ width: "100%", height: "200px" }}
                  alt=""
                />
              </Row>
              <Row className="carousel-footer">
                <h6>CULTURAL AND EXTRACURRICULAR ACTIVITIES</h6>

                <p>
                  The institution organizes various cultural and extracurricular
                  activities, such as seminars, workshops, debates, music, and
                  dance competitions, to enhance the overall development of
                  students. This facility helps students to improve their
                  creative skills, socialize, and develop their personality.
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

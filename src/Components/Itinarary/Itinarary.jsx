import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Itinarary.scss";
import "./layout.scss";
import logo from "../Assets/logo/logobvb2.png";
import bvbthrissur from "../Assets/Images/bvb_kendra.jpg";
import poochetty from "../Assets/Images/poochetty.png";
import potoore from "../Assets/Images/potoore.png";
// import { IoCart } from "react-icons/io5";
// import { IoMdRestaurant } from "react-icons/io";
// import { FaStreetView } from "react-icons/fa";

const Itinarary = ({ pageRef, pageNumber }) => {
  return (
    <div
      className="itinarary-container"
      ref={pageRef}
      id={`page-${pageNumber}`}
    >
      <div className="container">
        <Row>
          <Col md={12} className="itinarary-header">
            <div className="header-top">
              BHARATIYA VIDYA <span>BHAVAN </span>
            </div>
            <div className="header-sep"></div>
            <div className="header-bottom">
              {/* <span>Highlights Of Your Journey</span> */}
            </div>
          </Col>
        </Row>
      </div>
      <div className="itinarary-main">
        <div className="tube">
          <span className="tube-top"></span>
          <span className="tube-end"></span>
        </div>
        <div className="car-scroll">
          <div className="car">
            <img
              // src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/car.png"
              src={logo}
              alt=""
            />
          </div>
        </div>
        <div className="content-div">
          <div className="line"></div>
          <div className="itinarary-left">
            <img
              // src="https://jthemes.com/themes/wp/travelers/wp-content/uploads/2017/01/01-800x400.jpg"
              src={bvbthrissur}
              alt=""
            />
          </div>
          <div className="itinarary-right">
            {/* <div className="day-container">
              <span>Day 1</span>
            </div> */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  BHARATIYA VIDYA BHAVAN THRISSUR, KENDRA
                </h5>
                <hr className="separator-color" />

                {/* <h6 className="card-subtitle mb-2">Province / Snow Mountain</h6> */}
                <p className="card-text">
                  All the above titles are synonymous with this great
                  personality. In the words of Shri. R. Venkataraman, the former
                  President of India, “In the galaxy of eminent men of India,
                  Kanhaiyalal Maneklal Munshi is the shining star that still
                  beckons humanity to the path of duty and dharma.” He had a
                  sense of rootedness in the region, locale, and culture of
                  India and never underestimated tradition and continuity.
                  According to Munshiji, Bharatiya Vidya was based on the
                  inalienable principles of Satyam, Shivam, and Sundaram-Truth,
                  Godliness, and Beauty-all of which are the basic tenets of
                  every religion in the world. He wanted to give a physical form
                  to these metaphysical concepts and thus germinated the thought
                  of an institution to promote, propagate and spread this
                  universal education. And, thus was born "Bharatiya Vidya
                  Bhavan"
                </p>
                {/* <Row>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                </Row> */}
                {/* <hr className="separator-color" /> */}
                {/* <Row>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                </Row> */}
              </div>
            </div>
          </div>
        </div>
        <div className="content-div reverse-row">
          <div className="line"></div>
          <div className="itinarary-left">
            <img
              // src="https://jthemes.com/themes/wp/travelers/wp-content/uploads/2017/01/02-800x400.jpg"
              src={poochetty}
              alt=""
            />
          </div>
          <div className="itinarary-right">
            {/* <div className="day-reverse">
              <span>Day 2</span>
            </div> */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <a href="http://bvbpoochatty.in/">
                    BHARATIYA VIDYA BHAVAN, POOCHATTY
                  </a>
                </h5>

                {/* <h6 className="card-subtitle mb-2">Province / Blue Sky City</h6> */}
                <p className="card-text">
                  Bharatiya Vidya Bhavan,Poochatty has been on a consistent and
                  exciting path of renewal and can boast some quality
                  achievements. BVM, Poochatty is a school that values
                  tradition, as well as embracing what is new, contemporary and
                  innovative, to support and enhance our student's journey into
                  the future. Tangibly, this can be seen in our re-branding
                  programs. We entered the 42nd year of our glorious academic
                  journey in June 2018 from the humble beginning we made in
                  1979, having crossed many memorable milestones, today our
                  school is a dream destination for students ,teachers and
                  parents alike. We are committed to the intellectual, creative,
                  physical and social growth of our students and we respect them
                  as individuals with different histories, needs, interests,
                  abilities and aptitudes. Our students are friendly, confident
                  and successful and we invite you to share our pride in their
                  achievements.
                </p>
                {/* <Row>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr className="separator-color" />
                <Row>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                </Row> */}
              </div>
            </div>
          </div>
        </div>
        <div className="content-div">
          <div className="line"></div>
          <div className="itinarary-left">
            <img src={potoore} alt="" />
          </div>
          <div className="itinarary-right">
            {/* <div className="day-container">
              <span>Day 3</span>
            </div> */}
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <a href="https://www.bvbpottore.com/">
                    KULAPATI MUNSHI BHAVAN’S VIDYA MANDIR POTTORE
                  </a>
                </h5>
                {/* <h6 className="card-subtitle mb-2">Province / Lake City</h6> */}
                <p className="card-text">
                  Bharatiya Vidya Bhavan's Vidya Mandir at Pottore is a
                  co-educational school affiliated with the Central Board of
                  Secondary Education (CBSE), New Delhi. The school offers
                  education from kindergarten to grade 12 and follows a
                  comprehensive and holistic approach to education that focuses
                  on the overall development of the students. The school has a
                  highly qualified and experienced faculty who use innovative
                  teaching methods to make the learning process more interesting
                  and effective. The curriculum is designed to provide a
                  well-rounded education that helps the students to acquire
                  knowledge, skills, and values that will enable them to excel
                  in their future endeavors. The school has well-equipped
                  classrooms, science and computer labs, a well-stocked library,
                  a playground, and other facilities that are necessary for the
                  students' academic and overall development. The school also
                  offers extracurricular activities such as sports, music,
                  dance, drama, and other cultural events that help to develop
                  the students' talents and interests.
                </p>
                {/* <Row>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr className="separator-color" />
                <Row>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                </Row> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="content-div reverse-row">
          <div className="line"></div>
          <div className="itinarary-left">
            <img
              src="https://jthemes.com/themes/wp/travelers/wp-content/uploads/2017/01/05-800x400.jpg"
              alt=""
            />
          </div>
          <div className="itinarary-right">
            <div className="day-reverse">
              <span>Day 4</span>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Penguin Beach</h5>
                <h6 className="card-subtitle mb-2">Province / Penguin Beach</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  scelerisque, purus sit amet elementum blandit, sem arcu
                  egestas quam, eget malesuada sem libero eu ante. Duis nec
                  ultricies enim. Sed cursus volutpat finibus. Morbi at ornare
                  purus. Vivamus congue suscipit dui nec fringilla. Nam auctor
                  velit nec nisi molestie, ut maximus libero euismod. Nam dolor
                  nunc, consequat nec sollicitudin vel, commodo vitae ex.
                </p>
                <Row>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr className="separator-color" />
                <Row>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="content-div">
          <div className="line"></div>
          <div className="itinarary-left">
            <img
              src="https://jthemes.com/themes/wp/travelers/wp-content/uploads/2017/01/03-800x400.jpg"
              alt=""
            />
          </div>
          <div className="itinarary-right">
            <div className="day-container">
              <span>Day 3</span>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Lake City</h5>
                <h6 className="card-subtitle mb-2">Province / Lake City</h6>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  scelerisque, purus sit amet elementum blandit, sem arcu
                  egestas quam, eget malesuada sem libero eu ante. Duis nec
                  ultricies enim. Sed cursus volutpat finibus. Morbi at ornare
                  purus. Vivamus congue suscipit dui nec fringilla. Nam auctor
                  velit nec nisi molestie, ut maximus libero euismod. Nam dolor
                  nunc, consequat nec sollicitudin vel, commodo vitae ex.
                </p>
                <Row>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <hr className="separator-color" />
                <Row>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6} className="itinarary-content">
                    <Row>
                      <Col md={2} className="itinarary-icon">
                        <HiMapPin size={30} />
                      </Col>
                      <Col md={10} className="itinarary-content-text">
                        <span>Tourist Attraction</span>
                        <span> Sunrise Point of Riverview</span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <Row>
        <Col className="itinarary-body-left" md={6}>
          <div
            className="card"
            // style={{ width: "18rem" }}
            >
            <div className="card-body">
              <h5 className="card-title">Snow Mountain City</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Province / Snow Mountain
              </h6>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                scelerisque, purus sit amet elementum blandit, sem arcu egestas
                quam, eget malesuada sem libero eu ante. Duis nec ultricies
                enim. Sed cursus volutpat finibus. Morbi at ornare purus.
                Vivamus congue suscipit dui nec fringilla. Nam auctor velit nec
                nisi molestie, ut maximus libero euismod. Nam dolor nunc,
                consequat nec sollicitudin vel, commodo vitae ex.
              </p>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col md={2} className="itinarary-icon">
                      <HiMapPin size={30} />
                    </Col>
                    <Col md={10}>
                      Tourist Attraction: Sunrise Point of Riverview
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <Row>
                    <Col md={2} className="carousel-Header-icon">
                      <IoCart size={30} />
                    </Col>
                    <Col md={10}>
                      Best Buy Of This Place: Handmade Wooden Accessories
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col md={2} className="carousel-Header-icon">
                      <IoMdRestaurant size={30} />
                    </Col>
                    <Col md={10}>Food Speciality: Sushie</Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <Row>
                    <Col md={2} className="carousel-Header-icon">
                      <FaStreetView size={30} />
                    </Col>
                    <Col md={10}>Activity: Two Hours Boating Ride</Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col className="itinarary-body-right" md={6}>
          <div
            className="card"
            // style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">Snow Mountain City</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Province / Snow Mountain
              </h6>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                scelerisque, purus sit amet elementum blandit, sem arcu egestas
                quam, eget malesuada sem libero eu ante. Duis nec ultricies
                enim. Sed cursus volutpat finibus. Morbi at ornare purus.
                Vivamus congue suscipit dui nec fringilla. Nam auctor velit nec
                nisi molestie, ut maximus libero euismod. Nam dolor nunc,
                consequat nec sollicitudin vel, commodo vitae ex.
              </p>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col md={2} className="carousel-Header-icon">
                      <HiMapPin size={30} />
                    </Col>
                    <Col md={10}>
                      Tourist Attraction: Sunrise Point of Riverview
                    </Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <Row>
                    <Col md={2} className="carousel-Header-icon">
                      <IoCart size={30} />
                    </Col>
                    <Col md={10}>
                      Best Buy Of This Place: Handmade Wooden Accessories
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col md={2} className="carousel-Header-icon">
                      <IoMdRestaurant size={30} />
                    </Col>
                    <Col md={10}>Food Speciality: Sushie</Col>
                  </Row>
                </Col>
                <Col md={6}>
                  <Row>
                    <Col md={2} className="carousel-Header-icon">
                      <FaStreetView size={30} />
                    </Col>
                    <Col md={10}>Activity: Two Hours Boating Ride</Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row> */}
    </div>
  );
};

export default Itinarary;

import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Itinarary.scss";
import "./layout.scss";
import logo from "../Assets/logo/logobvb2.png";
import bvbthrissur from "../Assets/Images/bvb_kendra.jpg";
import bvb_bendra_2 from "../Assets/Images/bvb_bendra_2.jpg";
import { HiMapPin } from "react-icons/hi2";
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
          <span className="tube-top">start</span>
          <span className="tube-end">end</span>
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
            <div className="day-container">
              <span>Day 1</span>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Welcome to Bharatiya Vidya Bhavan, Thrissur, Kendra
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
              src={bvb_bendra_2}
              alt=""
            />
          </div>
          <div className="itinarary-right">
            <div className="day-reverse">
              <span>Day 2</span>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  CENTRE OF EXCELLENCE-INTERVENTIONS FORDEVELOPING PROGRAMMES
                </h5>
                {/* <h6 class="card-subtitle mb-2">Province / Blue Sky City</h6> */}
                <p class="card-text">
                  The only way to live is to grow. And we will grow, when we are
                  ready to change. The changes happen only if we learn. And
                  learning happens when we are exposed to the world of
                  happenings. Bharatiya Vidya Bhavan’s Thrissur Kendra’s schools
                  have set up a voyage to grow; to reach on centers of
                  excellence. Bhavan’s family as a dedicated team is on a path
                  to excellence by focusing the existing expertise and resources
                  we possess to achieve and sustain the world class preferences
                  and values. Bharatiya Vidya Bhavan is organizing and
                  conducting new programs and activities which pave way to
                  knowledge and management of new skills, values and qualities.
                  While planning the program for learning and enhancement all
                  stakeholders – students, parents and teachers – of this
                  institution. Development of skills, values, positive attitude,
                  healthy and safe environment physical and mental health and
                  well being strong bonding with parents, and alumni charitable
                  activities, preparing students for competitive examinations,
                  being well used in technology, the awareness campaign,
                  orientation classes model scholarship examination, etc. are
                  done on a regular basis. Coaching classes for entrance
                  examination are arranged during off school hours, but in line
                  with the school syllabus, etc. are two various aspects we
                  focus on.
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
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Lake City</h5>
                <h6 class="card-subtitle mb-2">Province / Lake City</h6>
                <p class="card-text">
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
        </div>
        <div className="content-div reverse-row">
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
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Penguin Beach</h5>
                <h6 class="card-subtitle mb-2">Province / Penguin Beach</h6>
                <p class="card-text">
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
        </div>
        <div className="content-div">
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
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Lake City</h5>
                <h6 class="card-subtitle mb-2">Province / Lake City</h6>
                <p class="card-text">
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
            class="card"
            // style={{ width: "18rem" }}
            >
            <div class="card-body">
              <h5 class="card-title">Snow Mountain City</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Province / Snow Mountain
              </h6>
              <p class="card-text">
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
            class="card"
            // style={{ width: "18rem" }}
          >
            <div class="card-body">
              <h5 class="card-title">Snow Mountain City</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                Province / Snow Mountain
              </h6>
              <p class="card-text">
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

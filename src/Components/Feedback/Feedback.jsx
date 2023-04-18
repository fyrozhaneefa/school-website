import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row } from "react-bootstrap";
import "./Feedback.scss";
// import chairman from "../Assets/ImportantPersons/Chairman.jpg";
import MAANEY from "../Assets/Centerofexcellence/001.jpg";
import Sapna from "../Assets/Centerofexcellence/002.jpg";
import Suresan from "../Assets/Centerofexcellence/003.jpg";
import Nair from "../Assets/Centerofexcellence/004.jpg";
// import Jino from "../Assets/Centerofexcellence/00.jpg";
import Ramkumar from "../Assets/Centerofexcellence/005.jpg";
import Sethumadhavan from "../Assets/Centerofexcellence/006.jpg";
import Sreekumar from "../Assets/Centerofexcellence/007.jpg";
import Shreekumar from "../Assets/Centerofexcellence/008.jpg";
import Divya from "../Assets/Centerofexcellence/019.jpg";
import Lajish from "../Assets/Centerofexcellence/010.jpg";
import Ravichandra from "../Assets/Centerofexcellence/011.jpg";
import Madhavi from "../Assets/Centerofexcellence/012.jpg";
import Riju from "../Assets/Centerofexcellence/013.jpg";
import Suresh from "../Assets/Centerofexcellence/014.jpg";
// import secretary from "../Assets/ImportantPersons/rkrishnan5.png";
// import principal from "../Assets/ImportantPersons/principal.jpg";

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
              ENRICHMENT <span>PROGRAMS</span>
            </div>
            <div className="header-sep"></div>
            <div className="header-bottom">
              <span>Series of Teachers Training Programmes </span>
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
          {/* 2019 */}
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>JAGARAN 2019</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>
                    Powerful Motivational Speaker& Awakener with a Doctorate in
                    PersonalityDevelopment
                  </span>
                  <p>
                    Creative Awareness on How to be a Powerful & Loving Teacher
                  </p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    {/* <div className="carousel-footer-icon">
                      <img
                        src={MAANEY}
                        
                        alt=""
                      />
                    </div> */}
                    <div className="carousel-footer-text">
                      <h4>DR.MAANEY PAUL</h4>
                      <span></span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>JAGARAN 2019</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>
                    Principal RMK ResidentialSenior Secondary School, Chennai-
                    CertifiedTeacher Trainer as Resource Person for CBSE,Centre
                    of Excellence (Coe), Chennai
                  </span>{" "}
                  <p>
                    Learning Outcomes, Innovative Teaching,Methodology & 21st
                    Century Teaching
                  </p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    {/* <div className="carousel-footer-icon">
                      <img
                        src={Sapna}
                        
                        alt=""
                      />
                    </div> */}
                    <div className="carousel-footer-text">
                      <h4>Mrs.Sapna Sankla</h4>
                      <span></span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>JAGARAN 2019</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>Eminent Advocate</span>{" "}
                  <p>Awareness of Legal Formalities</p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    {/* <div className="carousel-footer-icon">
                      <img
                        src={Suresan}
                        
                        alt=""
                      />
                    </div> */}
                    <div className="carousel-footer-text">
                      <h4>A. Suresan</h4>
                      <span></span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>JAGARAN 2019</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>
                    Former Vice-Chancellor, Health University and Renowned
                    Paediatrician, Counsellor & Academician in the field of
                    Child Development and Paediatrics.
                  </span>{" "}
                  <p>Child Development & Adolescence</p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    {/* <div className="carousel-footer-icon">
                      <img
                        src={Nair}
                        
                        alt=""
                      />
                    </div> */}
                    <div className="carousel-footer-text">
                      <h4>Prof (Dr) MKC Nair</h4>
                      <span></span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>JAGARAN 2019</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>District Coordinator Childline</span>{" "}
                  <p>Childline Activity</p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    {/* <div className="carousel-footer-icon">
                      <img
                        // src={Jino}
                        
                        alt=""
                      />
                    </div> */}
                    <div className="carousel-footer-text">
                      <h4>Mr.Jino TD</h4>
                      <span></span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          {/* 2020 */}
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>JAGARAN 2020</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>
                    Dean, RajivGandhi Institute of Veterinary Education
                    &Research, Puducherry
                  </span>{" "}
                  <p>Teaching for Academic Excellence</p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    {/* <div className="carousel-footer-icon">
                      <img
                        src={Ramkumar}
                        
                        alt=""
                      />
                    </div> */}
                    <div className="carousel-footer-text">
                      <h4>Professor ( Dr) S. Ramkumar</h4>
                      <span></span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>JAGARAN 2020</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>Director, ULEducation, UL Cyber Park, Kozhikode</span>{" "}
                  <p>
                    How to Identify the Right Career Path for Students.Academic
                    Planning to Unlock Career Success
                  </p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    {/* <div className="carousel-footer-icon">
                      <img
                        src={Sethumadhavan}
                        
                        alt=""
                      />
                    </div> */}
                    <div className="carousel-footer-text">
                      <h4>Dr TP Sethumadhavan</h4>
                      <span></span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>JAGARAN 2020</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>
                    Professor & DoctoralProgramme Co-ordinator (Amrita Institute
                    ofMedical Sciences & Research, AmritaUniversity, Kochi)
                  </span>{" "}
                  <p>How to Become a Better & Effective Teacher.</p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    {/* <div className="carousel-footer-icon">
                      <img
                        src={Sreekumar}
                        
                        alt=""
                      />
                    </div> */}
                    <div className="carousel-footer-text">
                      <h4>Dr KP Sreekumar</h4>
                      <span></span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>JAGARAN 2020</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>
                    Director, IndianInstitute of Infrastructure &
                    Construction,Kollam.
                  </span>{" "}
                  <p>
                    Drug Addiction Among Youth- What Teachers cando to Prevent
                    Drug Use?
                  </p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    {/* <div className="carousel-footer-icon">
                      <img
                        src={Shreekumar}
                        
                        alt=""
                      />
                    </div> */}
                    <div className="carousel-footer-text">
                      <h4>Dr G Shreekumar-Menon</h4>
                      <span></span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>JAGARAN 2020</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>CELTA Certified Teacher &Trainer, Chennai.</span>{" "}
                  <p>Effective Communication for Teachers (2 sessions)</p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    {/* <div className="carousel-footer-icon">
                      <img
                        src={Divya}
                        
                        alt=""
                      />
                    </div> */}
                    <div className="carousel-footer-text">
                      <h4>Mrs Divya Seles</h4>
                      <span></span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>JAGARAN 2020</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>
                    Asst Professor, Department of Computer Science & Director,
                    Calicut University Computer Centre, University of Calicut.
                  </span>{" "}
                  <p>Pathways to Tech-enabled Teachers Leaders.</p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    {/* <div className="carousel-footer-icon">
                      <img
                        src={Lajish}
                        
                        alt=""
                      />
                    </div> */}
                    <div className="carousel-footer-text">
                      <h4>Dr Lajish V L</h4>
                      <span></span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>JAGARAN 2020</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>
                    Associate Professor,Department of Psychiatry,
                    YenepoyaUniversity, Mangalore
                  </span>{" "}
                  <p>Child & Adolescent Mental Health- Role of Teachers</p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    {/* <div className="carousel-footer-icon">
                      <img
                        src={Ravichandra}
                        
                        alt=""
                      />
                    </div> */}
                    <div className="carousel-footer-text">
                      <h4>Dr Ravichandra Karkal</h4>
                      <span></span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>JAGARAN 2020</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>
                    Asst Professor,Department of Community Medicine,Yenepoya
                    Medical College, Mangalore
                  </span>{" "}
                  <p>Nutrition for School Children & Adolescents</p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    {/* <div className="carousel-footer-icon">
                      <img
                        src={Madhavi}
                        
                        alt=""
                      />
                    </div> */}
                    <div className="carousel-footer-text">
                      <h4>Dr Madhavi Bhargava. MD</h4>
                      <span></span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>JAGARAN 2020</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>Director- cum-Founder- Riju & PSK Classes</span>{" "}
                  <p>Pathways of Success in Competitive Examinations.</p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    {/* <div className="carousel-footer-icon">
                      <img
                        src={Riju}
                        
                        alt=""
                      />
                    </div> */}
                    <div className="carousel-footer-text">
                      <h4>Mr Riju Shankar</h4>
                      <span></span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>JAGARAN 2020</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>
                    Eminent Physics Guru, Founder Director-Riju & PSK Classes,
                    Counsellor,and Columnist.
                  </span>{" "}
                  <p>Pathways of Success in Competitive Examinations.</p>
                </Row>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    {/* <div className="carousel-footer-icon">
                      <img
                        src={Suresh}
                        
                        alt=""
                      />
                    </div> */}
                    <div className="carousel-footer-text">
                      <h4>P Suresh Kumar</h4>
                      <span></span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          {/* <Carousel.Item className="carousel-container">
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
                    // <div className="carousel-footer-icon">
                    //   <img
                    //     src={chairman}
                        
                    //     alt=""
                    //   />
                    // </div>
                    <div className="carousel-footer-text">
                      <h4>SHRI T.S. PATTABHIRAMAN</h4>
                      <span>CHAIRMAN</span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item> */}
          {/* 2nd item */}
          {/* <Carousel.Item className="carousel-container">
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
                    // <div className="carousel-footer-icon">
                    //   <img
                    //     src={secretary}
                    //     // src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/quote/02.jpg"
                    //     alt=""
                    //   />
                    // </div>
                    <div className="carousel-footer-text">
                      <h4>SHRI K.P. RADHAKRISHNAN</h4>
                      <span>HON. SECRETARY</span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item> */}
          {/* 3rd item */}
          {/* <Carousel.Item className="carousel-container">
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
                    // <div className="carousel-footer-icon">
                    //   <img
                    //     src={principal}
                    //     // src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/quote/03.jpg"
                    //     alt=""
                    //   />
                    // </div>
                    <div className="carousel-footer-text">
                      <h4>SMT.SATHI DEVI P.S</h4>
                      <span>PRINCIPAL</span>
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Carousel.Item> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Feedback;

import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Col, Row } from "react-bootstrap";
import Pattabhiraman from "../Assets/Management/Pattabhiraman.jpg";
// import ChithranNamboodiripad from "../Assets/Management/ChithranNamboodiripad.jpg";
import HaridasMenon from "../Assets/Management/HaridasMenon.jpg";
import Radhakrishnan from "../Assets/Management/Radhakrishnan.jpeg";
import Venugopal from "../Assets/Management/Venugopal.jpg";

const Management = ({ pageRef, pageNumber }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="feedback-container" ref={pageRef} id={`page-${pageNumber}`}>
      <div className="container">
        <Row>
          <Col md={12} className="feedback-header">
            <div className="header-top">
              RE-CONSTITUTED <span>COMMITTEE</span>
            </div>
            <div className="header-sep"></div>
            <div className="header-bottom">
              {/* <span>Series of Teachers Training Programmes </span> */}
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
                    {" "}
                    <Row className="carousel-footer">
                      <div className="carousel-footer-container">
                        <div className="carousel-footer-icon">
                          <img src={Pattabhiraman} alt="" />
                        </div>
                        <div className="carousel-footer-text">
                          <h4 style={{ color: "#000000", fontWeight: "600" }}>
                            T.S. Pattabhiraman
                          </h4>
                          <span>Mobile: 09995211550</span>
                        </div>
                      </div>
                    </Row>
                    <h4>CHAIRMAN</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>Managing Director</span>
                  <span>M/s.Kalyan Silks Group,</span>
                  <span>Palace Road, Thrissur-680 020</span>
                  <span>Email:kalyanmdpg@gmail.com</span>
                  <p></p>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          {/* <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    {" "}
                    <Row className="carousel-footer">
                      <div className="carousel-footer-container">
                        <div className="carousel-footer-icon">
                          <img src={ChithranNamboodiripad} alt="" />
                        </div>
                        <div className="carousel-footer-text">
                          <h4 style={{ color: "#000000", fontWeight: "600" }}>
                            P. Chithran Namboodiripad
                          </h4>
                          <span>Tel: (0487) 2333371</span>
                        </div>
                      </div>
                    </Row>
                    <h4>SR.VICE-CHAIRMAN</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>Joint Director of Public Instruction (Retd).</span>
                  <span>"Mukthi", Chembukkavu</span>
                  <span>Thrissur-680 020</span>
                  <p></p>
                </Row>
              </Col>
            </Row>
          </Carousel.Item> */}
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                {" "}
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    <div className="carousel-footer-icon">
                      <img src={HaridasMenon} alt="" />
                    </div>
                    <div className="carousel-footer-text">
                      <h4 style={{ color: "#000000", fontWeight: "600" }}>
                        P. Haridas Menon
                      </h4>
                      <span>Tel: (0487) 2388794</span>
                    </div>
                  </div>
                </Row>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>VICE-CHAIRMEN</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>District Educational Officer (Retd),</span>
                  <span>"Lakshmi",Kalveri Road,Poothole</span>
                  <span>Thrissur-680 004</span>
                  <p></p>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    <div className="carousel-footer-icon">
                      <img src={Venugopal} alt="" />
                    </div>
                    <div className="carousel-footer-text">
                      <h4 style={{ color: "#000000", fontWeight: "600" }}>
                        N. Venugopal
                      </h4>
                      <span>Mobile: 09447036563</span>
                    </div>
                  </div>
                </Row>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>VICE-CHAIRMEN</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>Senior Audit Officer (Retd),</span>
                  <span>"Indeevaram" Cherumukh Temple Road.</span>
                  <span>Thrissur-680 020</span>
                  <p></p>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-container">
            <Row>
              <Col md={12}>
                <Row className="carousel-footer">
                  <div className="carousel-footer-container">
                    <div className="carousel-footer-icon">
                      <img src={Radhakrishnan} alt="" />
                    </div>
                    <div className="carousel-footer-text">
                      <h4 style={{ color: "#000000", fontWeight: "600" }}>
                        K.P.Radhakrishnan,
                      </h4>
                      <span>Mobile: 0944702421</span>
                    </div>
                  </div>
                </Row>
                <Row className="carousel-Header">
                  <Col md={12} className="carousel-Header-text">
                    <h4>HON. SECRETARY</h4>
                  </Col>
                </Row>
                <Row className="carousel-body">
                  <span>"Sreekovil",</span>
                  <span>Marar Road, Thrissur.</span>
                  <span>Email: kpr.sreekoviol@gmail.com</span>
                  <p></p>
                </Row>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </div>
      {showMore ? (
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row d-flex justify-content-around">
                <div className="col-md-4 management-card ">
                  <strong>Shri K.P. Achuthan</strong>
                  <br />
                  <span> A commissioner of Income Tax (Retd) </span>
                  <br />
                  <span> "Paliyam", Parakkotte Line,</span>
                  <br />
                  <span> Thrissur-680 022,</span>
                  <br />
                  <span> Tel: (0487) 2339217 </span>
                  <br />
                  <span> Mobile: 9387118867</span>
                  <br />
                  <span> Email: kp.achuthn@gmail.com</span>
                </div>
                <div className="col-md-4 management-card">
                  <strong>Shri C. Vijayan </strong>
                  <br />
                  <span> "Shreyas"</span>
                  <br />
                  <span> Kuttankulangara,</span>
                  <br />
                  <span> P.O. Punkunnam,</span>
                  <br />
                  <span> Thrissur-680 002.</span>
                  <br />
                  <span> Mobile: 09447042829</span>
                </div>
                <div className="col-md-4 management-card">
                  <strong>Shri TR Vijayakumar</strong>
                  <br />
                  <span>Managing Director,</span>
                  <br />
                  <span>Elite Super Market,</span>
                  <br />
                  <span>Roud North, Thrissur-680 001</span>
                  <br />
                  <span>Tel: 9846073345</span>
                </div>
              </div>
              <div className="row d-flex justify-content-around">
                <div className="col-md-4 management-card">
                  <strong>Adv. A.Suresan, </strong>
                  <br />
                  <span>"Anurag", S.N. Park,</span>
                  <br />
                  <span>Main Road, Ayyanthole,</span>
                  <br />
                  <span>Thrissur-680 006.</span>
                  <br />
                  <span>Email: advocatesuresh@ya</span>
                </div>
                <div className="col-md-4 management-card">
                  <strong>Shri Unni K. Warrier</strong>
                  <br />
                  <span>Bureau Chief,</span>
                  <br />
                  <span>Malayala Manorama</span>
                  <br />
                  <span>Thrissur- 680001</span>
                  <br />
                  <span>Mobile: 09846061090</span>
                  <br />
                  <span>E.mail: unniwarrierQmm.co.in</span>
                </div>
                <div className="col-md-4 management-card">
                  <strong>Dr.T.P.Sethumadhavan</strong>
                  <br />
                  <span>Villa No.3,Kalyan Sun Field</span>
                  <br />
                  <span>Kuttur, Thrissur Dist.-680013</span>
                  <br />
                  <span>Mobile: 9446052800</span>
                  <br />
                  <span>Email: tpsethu2000mail.com.</span>
                </div>
              </div>
              <div className="row d-flex justify-content-around">
                <div className="col-md-4 management-card">
                  <strong>Dr.A.A.Baby</strong>
                  <br />
                  <span>"Jyothis"</span>
                  <br />
                  <span>6/1358, Mylipadam,.</span>
                  <br />
                  <span>Thrissur-East,680 005.</span>
                  <br />
                  <span>Mobile:944723520</span>
                  <br />
                  <span>Email: aabahy55Qgmail.com</span>
                </div>
                <div className="col-md-4 management-card">
                  <strong>Shri I. Unnikrishnan</strong>
                  <br />
                  <span>Chartered Accountant</span>
                  <br />
                  <span>Mannath House</span>
                  <br />
                  <span>Mannath Lane</span>
                  <br />
                  <span>Thrissur-680 001</span>
                  <br />
                  <span>Mobile: 9387111148</span>
                  <br />
                  <span>Email: unni@yogloans.com</span>
                </div>
                <div className="col-md-4 management-card">
                  <strong>Shri K.P. Karunakaran</strong>
                  <br />
                  <span>Plot No.394,4th Lannnam,</span>
                  <br />
                  <span>M.G. Nagar, Punkunnam,</span>
                  <br />
                  <span>Thrissur-680 002.</span>
                  <br />
                  <span>Tel: (0487) 2361020</span>
                </div>
              </div>
              <div className="row d-flex justify-content-around">
                <div className="col-md-4 management-card">
                  <strong>Dr.P. Indiradevi</strong>
                  <br />
                  <span>ICAR Emeritus</span>
                  <br />
                  <span>Professor, Kerala Agricultural University.</span>
                  <br />
                  <span>KAU P.O.</span>
                  <br />
                  <span>Thrissur-680 056</span>
                </div>
                <div className="col-md-4 management-card">
                  <strong>Shri E. Ramankutty</strong>
                  <br />
                  <span>Director, Bharatiya Vidya Bhavan,</span>
                  <br />
                  <span>T.D. Road, Emakulam,</span>
                  <br />
                  <span>Kochi-682 011.</span>
                  <br />
                  <span>Mobile: 09447178862</span>
                  <br />
                  <span>(Central Bhavan Nominee)</span>
                </div>
                <div className="col-md-4 management-card">
                  <strong>Shri P.M. Madkaikar</strong>
                  <br />
                  <span>Chief Accountant,</span>
                  <br />
                  <span>Bharatiya Vidya Bhavan,</span>
                  <br />
                  <span>Dr.K.M. Mushi Marg,</span>
                  <br />
                  <span>Mumbai400 007.</span>
                  <br />
                  <span>(Central Bhavan Nominee)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="container">
        <Row>
          <Col md={12}>
            <div className="show-more" onClick={() => setShowMore(!showMore)}>
              <div className="more">Show {showMore ? "less" : "more..."}</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Management;

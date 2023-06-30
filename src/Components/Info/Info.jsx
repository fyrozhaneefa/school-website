import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaPinterestSquare, FaTelegramPlane } from "react-icons/fa";
import { IoLogoGoogleplus, IoLogoInstagram } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import "./Info.scss";
import { IoMail } from "react-icons/io5";

const Info = ({ pageRef, pageNumber }) => {
  return (
    <div className="info-container" ref={pageRef} id={`page-${pageNumber}`}>
      <div className="container padding2em">
        <Row>
          <Col md={12}>
            <Row>
              <Col md={6} className="info-left">
                <Row>
                  <Col md={12}>
                    <img
                      className="main-header-text col-md-6 col-sm-6 col-xs-12"
                      src="http://www.bvbthrissur.com/images/logo1.png"
                      alt="Bhavans logo"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={12} className="info-left-bottom">
                    <div className="sub-header-icon">
                      <TiSocialFacebook
                        className="icons"
                        color="white"
                        size={30}
                      />
                    </div>
                    <div className="sub-header-icon">
                      <TiSocialTwitter
                        className="icons"
                        color="white"
                        size={30}
                      />
                    </div>
                    <div className="sub-header-icon">
                      <TiSocialYoutube
                        className="icons"
                        color="white"
                        size={30}
                      />
                    </div>
                    <div className="sub-header-icon">
                      <TiSocialLinkedin
                        className="icons"
                        color="white"
                        size={30}
                      />
                    </div>
                    <div className="sub-header-icon">
                      <FaPinterestSquare
                        className="icons"
                        color="white"
                        size={30}
                      />
                    </div>
                    <div className="sub-header-icon">
                      <IoLogoGoogleplus
                        className="icons"
                        color="white"
                        size={30}
                      />
                    </div>
                    <div className="sub-header-icon">
                      <IoLogoInstagram
                        className="icons"
                        color="white"
                        size={30}
                      />
                    </div>
                    <div className="sub-header-icon">
                      <FaTelegramPlane
                        className="icons"
                        color="white"
                        size={30}
                      />
                    </div>
                    <div className="sub-header-icon">
                      <SiGmail className="icons" color="white" size={30} />
                    </div>
                    {/* <div className="sub-header-icon">
                      <TiSocialFacebook
                        className="icons"
                        color="white"
                        size={30}
                      />
                    </div> */}
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <div className="info-right">
                  Founded in 1939 by Dr. K.M. Munshi, Bharatiya Vidya Bhavan is
                  today an All India intellectual, cultural and educational
                  movement dedicated to the twin task of interpreting the age
                  old yet ageless message of our country and of integrating our
                  varied and vibrant culture with the changing needs of the
                  present day world. During the seven decades of its existence,
                  the Bhavan has come to be recognised as a symbol of India’s
                  glorious past and as a comprehensive national institution with
                  an international outlook touching all aspects of life and
                  enriching all spheres of activity . Bharatiya Vidya Bhavan
                  conducts classes from Kindergarten to Post Graduate research
                  and imparts education in subjects ranging from Carnatic Music
                  to Engineering, from Sanskrit to Business Management and from
                  Yoga to Journalism. This is being accomplished through its
                  centres spread all over the country and abroad, through
                  cultural and educational programmes it conducts from time to
                  time and above all through personal discussions and dialogue.
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
      </div>
      <div className="container info-bottom">
        <Row>
          <Col md={4} className="space">
            <div className="service">
              <div className="icon">
                <MdLocationPin color="white" size={30} />
              </div>
              <div className="icon-text-div">
                <span>Sarva Dharma Maitri Pratishthan Complex</span>
                <span>Vadakkechira Road, Thrissur</span>
              </div>
            </div>
          </Col>
          <Col md={4} className="space">
            <div className="service">
              <div className="icon">
                <BsFillTelephoneFill color="white" size={30} />
              </div>
              <div className="icon-text-div">
                {/* <span>(+91) 93887 80503</span> */}
                <span>(+91) 93887 80522</span>
              </div>
            </div>
          </Col>
          <Col md={4} className="space">
            <div className="service">
              <div className="icon">
                <IoMail color="white" size={30} />
              </div>
              <div className="icon-text-div">
                <a href="info@companyname.com"> bvbthrissur@gmail.com</a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Info;

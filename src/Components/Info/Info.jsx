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
      <div className="container info-bottom">
        <Row>
          <Col md={4} className="space">
            <div className="service">
              <div className="icon">
                <MdLocationPin color="white" size={30} />
              </div>
              <div className="icon-text-div">
                <span>123 Main Street</span>
                <span>Your City, State Country.</span>
              </div>
            </div>
          </Col>
          <Col md={4} className="space">
            <div className="service">
              <div className="icon">
                <BsFillTelephoneFill color="white" size={30} />
              </div>
              <div className="icon-text-div">
                <span>(123) 456-7890</span>
                <span>(123) 456-7890</span>
              </div>
            </div>
          </Col>
          <Col md={4} className="space">
            <div className="service">
              <div className="icon">
                <IoMail color="white" size={30} />
              </div>
              <div className="icon-text-div">
                <a href="info@companyname.com">contact@companyname.com</a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Info;

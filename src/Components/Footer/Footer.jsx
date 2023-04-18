import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container justify-content-center align-items-center">
        <Row>
          <Col className="col-md-10">
            <Row>
              {" "}
              <span>Copyright © 2023. All Rights Reserved</span>
            </Row>
            <Row>
              <span> Designed & Developed By: Opine infotech pvt.ltd</span>
            </Row>
          </Col>
          <Col className="col-md-2">
            <Row>
              <span>Terms & Conditions</span>
            </Row>
            <Row>
              <div className="icon-container ">
                <div className="footer-icons">
                  <TiSocialFacebook className="icons" color="white" size={25} />
                </div>
                <div className="footer-icons">
                  <TiSocialTwitter className="icons" color="white" size={25} />
                </div>
                <div className="footer-icons">
                  <TiSocialYoutube className="icons" color="white" size={25} />
                </div>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;

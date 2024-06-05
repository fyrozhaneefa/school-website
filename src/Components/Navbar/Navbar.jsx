import React, { useRef, useState } from "react";
import "./Navbar.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { FaHome } from "react-icons/fa";
import logo from "../Assets/logo/logo.png";
import { Dropdown, NavDropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import TeachersTraining from "./TeachersTraining";
import ProspectusPDF from "../Assets/pdf/Prospectus.pdf";
import Recognition from "../Assets/pdf/Recognitions.pdf";
import FeeStructure from "../Assets/pdf/fees_structure.pdf";
import CourseContent from "./CourseContent";

const NavbarResponsive = ({ scrollToPage }) => {
  const dropdownRef = useRef(null);
  const isSecondToggle = useRef(false);
  // const navRef = useRef();
  // const [icons, seticons] = useState(false);
  // const handleClick = () => {
  //   seticons(!icons);
  // };
  const [showModal, setShowModal] = useState(false);
  const [showCourseContentModal, setShowCourseContentModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCBSEDropdown, setShowCBSEDropdown] = useState(false);
  const handleModalClose = () => {
    setShowModal(false);
    setShowCourseContentModal(false);
  };
  const toggleDropdown = (...e) => {
    console.log("e first", e);
    if (isSecondToggle.current) {
      isSecondToggle.current = false;
      return;
    }

    // console.log("e class", e.originalEvent.target.className);
    // if (e[1].originalEvent.target.className.contains("courseDD")) return;
    setShowDropdown(!showDropdown);
    Dropdown.Toggle();
    alert("something happened");
    dropdownRef.current.show();
  };

  const toggleCBSEDropdown = (...e) => {
    console.log("e inside", e);
    isSecondToggle.current = true;
    setShowCBSEDropdown(!showCBSEDropdown);
  };

  const handleTeachersTraining = () => {
    setShowModal(true);
  };
  const handleCourseContent = (e) => {
    console.log("e CCC", e.target);
    setShowCourseContentModal(true);
  };

  const openProspectusPDF = () => {
    window.open(ProspectusPDF, "_blank");
  };
  const openFeesStructurePDF = () => {
    window.open(FeeStructure, "_blank");
  };
  const openRecognitionPDF = () => {
    window.open(Recognition, "_blank");
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="xxl"
        // style={{ maxWidth: "100%" }}
        sticky="top"
        className="navbar-main"
      >
        <Container fluid>
          <Navbar.Brand onClick={() => scrollToPage(0)} className="me-auto">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto navbar-item-container">
              {/* <Nav.Link onClick={() => scrollToPage(0)}></Nav.Link> */}
              <Nav.Link onClick={() => scrollToPage(0)}>
                <FaHome size={25} color="#fff" />
              </Nav.Link>
              <Nav.Link onClick={() => scrollToPage(1)}>INFO</Nav.Link>
              {/* <Nav.Link onClick={() => scrollToPage(2)}>FACILITIES</Nav.Link> */}
              <Nav.Link onClick={() => scrollToPage(2)}>NEWS</Nav.Link>
              <Nav.Link onClick={() => scrollToPage(3)}>ITINARARY</Nav.Link>
              <Nav.Link onClick={() => scrollToPage(8)}>BALAMANDIR</Nav.Link>
              <Nav.Link onClick={() => scrollToPage(11)}>NIOS</Nav.Link>
              <Nav.Link
                onClick={() => scrollToPage()}
                style={{ whiteSpace: "nowrap" }}
                href="https://bvbpoochatty.in/"
                target="_blank"
              >
                BVB POOCHATTY
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToPage()}
                style={{ whiteSpace: "nowrap" }}
                href="https://www.bvbpottore.com/"
                target="_blank"
              >
                {" "}
                KMBVM POTTORE
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToPage(4)}
                style={{ whiteSpace: "nowrap" }}
              >
                ENRICHMENT PROGRAM
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToPage(5)}
                style={{ whiteSpace: "nowrap" }}
              >
                CENTRE OF EXCELLENCE
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToPage(6)}
                style={{ whiteSpace: "nowrap" }}
              >
                COMMITTEE
              </Nav.Link>
              <Nav.Link onClick={() => scrollToPage(7)}>GALLERY</Nav.Link>
              <Nav.Link onClick={() => scrollToPage(9)}>CONTACT</Nav.Link>

              <Dropdown show={showDropdown} onToggle={(e) => toggleDropdown(e)}>
                <Dropdown.Toggle as={Nav.Link} style={{ whiteSpace: "nowrap" }}>
                  {/* QUICK  */}
                  NAVIGATE
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {" "}
                  <DropdownItem
                    className="dd-items"
                    onClick={handleTeachersTraining}
                  >
                    TEACHERS TRAINING
                  </DropdownItem>
                  <DropdownItem
                    href="https://www.cbse.gov.in/cbsenew/cbse.html"
                    className="dd-items"
                    target="_blank"
                    // onClick={() => setShowModal(true)}
                  >
                    CBSE
                  </DropdownItem>
                  <DropdownItem
                    href="https://www.instagram.com/bvbk.t/"
                    className="dd-items"
                    target="_blank"
                    // onClick={() => setShowModal(true)}
                  >
                    INSTAGRAM
                  </DropdownItem>
                  <DropdownItem
                    href="https://www.facebook.com/bvbk.t"
                    className="dd-items"
                    target="_blank"
                    // onClick={() => setShowModal(true)}
                  >
                    FACEBOOK
                  </DropdownItem>
                  <Dropdown
                    // className="courseDD"
                    show={showCBSEDropdown}
                    onToggle={toggleCBSEDropdown}
                  >
                    <Dropdown.Toggle
                      as={DropdownItem}
                      className="dd-items courseDD"
                    >
                      Courses
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <DropdownItem
                        className="dd-items"
                        target="_blank"
                        onClick={openProspectusPDF}
                      >
                        PROSPECTUS
                      </DropdownItem>
                      <DropdownItem
                        className="dd-items"
                        target="_blank"
                        onClick={openRecognitionPDF}
                      >
                        CENTRAL AND STATE RECOGNITION
                      </DropdownItem>
                      <DropdownItem
                        className="dd-items"
                        target="_blank"
                        onClick={handleCourseContent}
                      >
                        COURSE CONTENT
                      </DropdownItem>
                      <DropdownItem
                        className="dd-items"
                        target="_blank"
                        onClick={openFeesStructurePDF}
                      >
                        FEE STRUCTURE
                      </DropdownItem>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <TeachersTraining
        showModal={showModal}
        setShowModal={setShowModal}
        handleModalClose={handleModalClose}
      />
      <CourseContent
        showModal={showCourseContentModal}
        setShowModal={setShowCourseContentModal}
        handleModalClose={handleModalClose}
      />
    </>
  );
};

export default NavbarResponsive;

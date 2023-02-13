import React from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaHome } from "react-icons/fa";
import logo from "../Assets/logo/logo.png";
const NavbarResponsive = ({ scrollToPage }) => {
  // const navRef = useRef();

  // const [icons, seticons] = useState(false);
  // const handleClick = () => {
  //   seticons(!icons);
  // };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar-main">
        <Container>
          <Navbar.Brand onClick={() => scrollToPage(0)} className="me-auto">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto navbar-item-container">
              <Nav.Link onClick={() => scrollToPage(0)}>
                <FaHome size={25} color="#fff" />
              </Nav.Link>
              <Nav.Link onClick={() => scrollToPage(1)}>INFO</Nav.Link>
              <Nav.Link onClick={() => scrollToPage(2)}>SERVICE</Nav.Link>
              <Nav.Link onClick={() => scrollToPage(3)}>ITINARARY</Nav.Link>
              <Nav.Link onClick={() => scrollToPage(4)}>GALLERY</Nav.Link>
              {/* <Nav.Link href="#contact">CONTACT</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarResponsive;

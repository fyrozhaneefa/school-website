import React from "react";
import "./Navbar.scss";
import Modal from "react-bootstrap/Modal";
import { Col, Container, Row } from "react-bootstrap";
import { HiUserGroup } from "react-icons/hi";
import { ImBooks } from "react-icons/im";
import { PiStudentFill } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
// import footerBackgroundImage from "../Assets/pdf/2.jpg";

const CourseContent = (props) => {
  return (
    <div>
      {" "}
      <Modal
        className="teacherModal"
        // size="xl"
        fullscreen
        show={props.showModal}
        onHide={props.handleModalClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div>
              <div className="modal-title"> COURSE CONTENT</div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12} className="modal-body">
              <Row className="modal-row">
                <Col md={12} className="modal-description">
                  <ul>
                    <strong style={{ textDecoration: "underLine" }}>
                      Hospital Management
                    </strong>
                    <li>
                      With Principles and Practices of Management,Laws,Inventory
                      Control,Healthcare,Hospital,Clinical and Non-Clinical
                      Services Adminisdtration,Softwares,Hospi tal
                      Planning,Medical Terminolohy and more.
                    </li>
                    <strong style={{ textDecoration: "underLine" }}>
                      Digital Media
                    </strong>
                    <li>
                      With Essentials of online journalism,Social Media
                      Content,Content Creation & its Marketing.
                    </li>
                  </ul>
                </Col>{" "}
              </Row>
              <Row className="modal-row">
                {/* <Col md={6}> */}
                <div class="col-md-6 pd-l_r">
                  <h3 class="page-title1">GROUP C-1</h3>
                  <h3 class="page-title1">JOURNALISM</h3>
                  <h4 class="page-title1">
                    (INCLUDING ONLINE EDITING RADIO AND TV WRITING)
                  </h4>
                  <table class="table table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">Paper I</th>
                        <td>
                          Introduction to Journalism,Constitution of India and
                          Press Laws
                        </td>
                        <td>(100 Marks)</td>
                      </tr>
                      <tr>
                        <th scope="row">Paper II</th>
                        <td>Reporting (including Current Affairs)</td>
                        <td>(100 Marks)</td>
                      </tr>
                      <tr>
                        <th scope="row">Paper III</th>
                        <td>Writing, including Content Writing</td>
                        <td>(100 Marks)</td>
                      </tr>
                      <tr>
                        <th scope="row">Paper IV</th>
                        <td>Editing </td>
                        <td>(100 Marks)</td>
                      </tr>
                      <tr>
                        <th scope="row">Paper V</th>
                        <td>
                          Newspaper Management, Printing And Mass
                          Communication(including Radio &amp; TV Writing) OR
                          Human Communication{" "}
                        </td>
                        <td>(100 Marks)</td>
                      </tr>
                      <tr>
                        <th scope="row">Paper VI</th>
                        <td>Cultural Heritage of India </td>
                        <td>(100 Marks)</td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td>Study Paper/Project Report </td>
                        <td>(100 Marks)</td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td>
                          Internal Assessment
                          <br />
                          (Internal Tests [atleast two] Class Work: Reporting,
                          Writing, Editing and Alpha Journals, Viva Voce)
                        </td>
                        <td>(125 Marks)</td>
                      </tr>

                      <tr>
                        <th scope="rows"></th>
                        <th colspan="2">(Total Marks 825)</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* </Col> */}
                {/* <Col md={6}> */}
                <div class="col-md-6 pd-l_r">
                  <h3 class="page-title1">GROUP C-2</h3>
                  <h3 class="page-title1">PUBLIC RELATIONS</h3>
                  <h4 class="page-title1">
                    (INCLUDING EVENT MANAGEMENT, MEDIA RELATIONS AND CONTENT
                    WRITING)
                  </h4>
                  <table class="table table-striped">
                    <tbody>
                      <tr>
                        <th scope="row">Paper I</th>
                        <td>
                          Principles of Public Relations and Communication
                        </td>
                        <td>(100 Marks)</td>
                      </tr>
                      <tr>
                        <th scope="row">Paper II</th>
                        <td>
                          Media of Public Relations, including Event Management
                          and Media Relations
                        </td>
                        <td>(100 Marks)</td>
                      </tr>
                      <tr>
                        <th scope="row">Paper III</th>
                        <td>Corporate Public Relations</td>
                        <td>(100 Marks)</td>
                      </tr>
                      <tr>
                        <th scope="row">Paper IV</th>
                        <td>
                          Editing and Production of Publications, including
                          Content Writing
                        </td>
                        <td>(100 Marks)</td>
                      </tr>
                      <tr>
                        <th scope="row">Paper V</th>
                        <td>Advertising Theory and Practice</td>
                        <td>(100 Marks)</td>
                      </tr>
                      <tr>
                        <th scope="row">Paper VI</th>
                        <td>Cultural Heritage of India </td>
                        <td>(100 Marks)</td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td>Study Paper/Project Report </td>
                        <td>(100 Marks)</td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td>
                          Internal Assessment
                          <br />
                          (Internal Tests [atleast two], Viva Voce Based on
                          current trends in the fields of Public Relations)
                        </td>
                        <td>(75 Marks)</td>
                      </tr>

                      <tr>
                        <th scope="rows"></th>
                        <th colspan="2">(Total Marks 775)</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Row>
              <Row
                className="d-flex justify-content-center"
                style={{
                  fontSize: "25px",
                  fontWeight: "600",
                  //   height: "10em",
                  //   backgroundImage: `url(${footerBackgroundImage})`, // Add this line
                  //   backgroundSize: " cover",
                  //   backgroundPosition: "center",
                  //   backgroundRepeat: "noRepeat",
                  //   backgroundAttachment: "fixed",
                }}
              >
                <Container>
                  <Row className="courses-footer d-flex justify-content-around">
                    <Col
                      md={3}
                      className="d-flex flex-column align-items-center"
                    >
                      <HiUserGroup size={60} color="#003a6a" />
                      <div className="footer-title">52</div>
                      <span>TEACHERS</span>
                    </Col>
                    <Col
                      md={3}
                      className="d-flex flex-column align-items-center"
                    >
                      <ImBooks size={60} color="#003a6a" />
                      <div className="footer-title">32</div>
                      <span>COURSES</span>
                    </Col>
                    <Col
                      md={3}
                      className="d-flex flex-column align-items-center"
                    >
                      <PiStudentFill size={60} color="#003a6a" />
                      <div className="footer-title">2025</div>
                      <span>STUDENTS</span>
                    </Col>
                    <Col
                      md={3}
                      className="d-flex flex-column align-items-center"
                    >
                      <FaUniversity size={60} color="#003a6a" />
                      <div className="footer-title">36</div>
                      <span>EXPERIENCE</span>
                    </Col>
                  </Row>
                </Container>
              </Row>{" "}
            </Col>
          </Row>
        </Modal.Body>
        {/* <Modal.Footer
        
        ></Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default CourseContent;

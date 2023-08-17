import React from "react";
import "./Navbar.scss";
import Modal from "react-bootstrap/Modal";
import { Col, Row } from "react-bootstrap";

const TeachersTraining = (props) => {
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
              <div className="modal-title">
                {" "}
                DIPLOMA IN PRE-PRIMARY TEACHERS TRAINING
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12} className="modal-body">
              <Row className="modal-row">
                <Col md={12} className="modal-description">
                  Embark on an extraordinary journey into the realm of teaching
                  with Bhavan's esteemed Diploma in Pro-Primary Teachers
                  Training program. As an aspiring educator. you possess the
                  awe-inspiring ability to shape young minds and ignite a
                  lifelong love for learning. Our meticulously designed program
                  is your gateway to becoming a skilled preschool teacher,
                  guiding children less than 6 years through a Crucial Stage of
                  their development. With a laser focus on foundational
                  literacy, we empower you to fortify the educational
                  groundwork, ensuring that each child builds a sturdy
                  foundation for their future academic pursuits. At Bhavans,
                  embrace the power Of fostering a positive and holistic
                  classroom environment. The art Of progressive pedagogy, our
                  program equips you with cutting-edge teaching strategies that
                  captivate young hearts and minds. We teach you to cultivate an
                  inclusive and nurturing space that nurtures the holistic
                  growth of every child, transforming the learning journey into
                  an enchanting and enriching experience Unleash your boundless
                  potential as an educator and become a light for young
                  learners. Immerse in our meticulously crafted academic
                  schedule, where you'll explore the intricate science and
                  profound philosophy behind effective teaching practices.
                  Choose Bhavan's Diploma in Pre-primary Teachers Training to
                  embark on that leaves an indelible mark on the lives of
                  children.EnroII now to embark on a transformative voyage in
                  the world of education.
                </Col>{" "}
              </Row>
              <Row className="modal-row">
                <Col md={6}>
                  <h5>COURSE DETAILS</h5>
                  <div>Eligibility : Graduation</div>
                  <div>Duration : One year (class room learning and</div>
                  internship)
                  <div>Classes will be held three days a week</div>
                  <div>Timing: IO am to 12 noon</div>{" "}
                </Col>
                <Col md={6}>
                  <h5>COURSE CURRICUUM</h5>
                  <div>• Paper 1- Child Psychology and Guidance</div>
                  <div>• Paper 2- Cultural Heritage of IntEa</div>
                  <div>• Paper 3-Cammunicative English and Phonetics</div>
                  <div>• Paper 4- Pre-School Theory and Practice</div>
                  <div>• Paper 5- Viva-Voce & Applied Practicum</div>{" "}
                </Col>
              </Row>
              <Row className="modal-row">
                <Col md={6}>
                  <h5>ASSESSMENT</h5>
                  <div>• Year end exams</div>
                  <div>• Viva Voce</div>
                  <div>• Projects</div>
                  <div>• Assignments</div>{" "}
                </Col>{" "}
                <Col md={6}>
                  {" "}
                  <h5>FEE STRUCTURE</h5>
                  <div>Application fee Rs.500/.</div>
                  <div>Admission fee Rs.500/•</div>
                  <div>Course materials Rs.1000/-</div>
                  <div>Exam fees Rs.500/-</div>
                  <div>Course Fee: Rs. 23,000/-</div>
                  <div>
                    First Instalment (Due at the time of admission):Rs. 13,000/.
                  </div>
                  <div>Second Instalment (Due in October): Rs. 5,000/-</div>
                  <div>Third Instalment (Due in February): Rs. 5,000/•</div>
                  <div>
                    Please submit attested copy of Graduation mark list along
                    with the application form.
                  </div>{" "}
                </Col>
              </Row>
              <Row className="modal-row ">
                <Col md={12} className="modal-row-bottom">
                  {" "}
                  <div>
                    {" "}
                    "A TEACHER IS A COMPASS THAT ACTIVATES THE MAGNETS OF
                    CURIOSITY,KNOWLDGE AND WISDOM"
                  </div>
                  <div> -Ever Garrison</div>
                </Col>{" "}
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        {/* <Modal.Footer>
      {" "}
      "A TEACHER IS A COMPASS THAT ACTIVATES THE MAGNETS OF
      CURIOSITY,KNOWLDGE AND WISDOM " <br />
      -Ever Garrison
    </Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default TeachersTraining;

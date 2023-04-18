import React from "react";
import "./CenterofExcellence.scss";
import { Col, Row } from "react-bootstrap";

const CenterofExcellence = ({ pageRef, pageNumber }) => {
  return (
    <div className="contact-container" ref={pageRef} id={`page-${pageNumber}`}>
      <div className="container">
        <Row>
          <Col md={12} className="contact-header">
            <div className="header-top">
              CENTER OF <span>EXCELLENCE</span>
            </div>
            <div className="header-sep"></div>
            <div className="header-bottom">
              <span>
                As part of the "Centre of Excellence- Interventions for
                Developing Programmes"- under the guidance of Dr TP
                Sethumadhavan-innumerable brainstorming sessions gave rise to
                the formation of nine groups to spearhead a variety of
                activities.
              </span>
            </div>
          </Col>
        </Row>
      </div>
      <div className="coe-container container">
        <Row>
          <Col md={4} className="item-container">
            <div className="item-header">
              {/* <IoLibrary /> */}
              <div className="item-header-right">
                <span style={{}}></span>
                <span>Group I</span>
              </div>
            </div>
            {/* <Row className="carousel-body" style={{ width: "100%" }}>
              <img
                // src={library}
                // src="https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmxpZ2h0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                style={{ width: "100%", height: "200px" }}
                alt=""
              />
            </Row> */}
            <Row className="carousel-footer">
              <h6>Anavaran - 'to explore'</h6>
              <p>
                A "Sarva Kala Pradarshini"- themed 'Vividhta Me Ekta'- Unity in
                Diversity- a culmination of the year's programmes involving a
                wide range of topics from the world of Science, Mathematics, Art
                and Craft, Language, History and Culture- was the goal of Group
                1-Anavaran- 'to explore'
              </p>
            </Row>
          </Col>{" "}
          <Col md={4} className="item-container">
            <div className="item-header">
              {/* <RiComputerFill /> */}
              <div className="item-header-right">
                <span></span>
                <span>Group II</span>
              </div>
            </div>

            {/* <Row className="carousel-body" style={{ width: "100%" }}>
              <img
                // src={computer}
                // src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/hotel.jpg"
                style={{ width: "100%", height: "200px" }}
                alt=""
              />
            </Row> */}
            <Row className="carousel-footer">
              <h6> Infinitum</h6>

              <p>
                Pursue your dreams It was a programme to give an awareness about
                various courses,colleges and opportunities in and out of India.
                Informations are given about many international universities and
                their admission procedures also.It was really a motivating
                session.Explore the diversity It was a session to introduce a
                course IPM to our children.....not that familiar with us. Course
                details, admission procedures and the job opportunities etc are
                explained well by a panel of students and faculties.
              </p>
            </Row>
          </Col>
          <Col md={4} className="item-container">
            <div className="item-header">
              {/* <ImLab /> */}
              <div className="item-header-right">
                <span></span>
                <span>Group III </span>
              </div>
            </div>

            {/* <Row className="carousel-body" style={{ width: "100%" }}>
              <img
                // src={lab}
                // src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/restaurant.jpg"
                style={{ width: "100%", height: "200px" }}
                alt=""
              />
            </Row> */}
            <Row className="carousel-footer">
              <h6>Germination</h6>

              <p>
                THEME-FUTURE TECHNOLOGY AND DIGITAL BHAVAN’S Blending offline
                teaching along with online tools and technology.The future
                challenges can be met by building classrooms with latest
                technologies and tools by incorporating the emerging innovative
                trends and approaches. For this the teachers and students have
                toget trained and equipped.The objective of the group is to
                raise the standard of the students as per the current and
                contemporary need.We have created Bhavan's e-library to motivate
                students to read by giving access to our e-library.
              </p>
            </Row>
          </Col>
          <Col md={4} className="item-container">
            <div className="item-header">
              {/* <ImLab /> */}
              <div className="item-header-right">
                <span></span>
                <span>Group IV</span>
              </div>
            </div>

            {/* <Row className="carousel-body" style={{ width: "100%" }}>
              <img
                // src={lab}
                // src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/restaurant.jpg"
                style={{ width: "100%", height: "200px" }}
                alt=""
              />
            </Row> */}
            <Row className="carousel-footer">
              <h6>Asmita</h6>

              <p>
                The future challenges can be met by building classrooms with
                latest technologies and tools by incorporating the emerging
                innovative trends and approaches. For this the teachers and
                students have to get trained and equipped.The objective of the
                group is to raise the standard of the students as per the
                current and contemporary need.We have created Bhavan's e-library
                to motivate students to read by giving access to our e-library.
              </p>
            </Row>
          </Col>
          <Col md={4} className="item-container">
            <div className="item-header">
              {/* <ImLab /> */}
              <div className="item-header-right">
                <span></span>
                <span>Group V</span>
              </div>
            </div>

            {/* <Row className="carousel-body" style={{ width: "100%" }}>
              <img
                // src={lab}
                // src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/restaurant.jpg"
                style={{ width: "100%", height: "200px" }}
                alt=""
              />
            </Row> */}
            <Row className="carousel-footer">
              <h6>Saatwika</h6>

              <p>
                Satwika means Spirited and Energised.Satwika focuses on the
                theme of PTA Strengthening It is aimed at creating a Spirit of
                Harmony between parents,teachers and the school Management on
                the basis of mutual trustand co-operation.Satwika believes in
                the positive and effective participation of parents, ensuring
                our children to reach better heights.Through parenting sessions
                and other educative programmes,Satwika aims at energising
                parents to co-operate and support the school in the effort
                towards the multifaceted development of our children.
              </p>
            </Row>
          </Col>
          <Col md={4} className="item-container">
            <div className="item-header">
              {/* <ImLab /> */}
              <div className="item-header-right">
                <span></span>
                <span>Group VI</span>
              </div>
            </div>

            {/* <Row className="carousel-body" style={{ width: "100%" }}>
              <img
                // src={lab}
                // src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/restaurant.jpg"
                style={{ width: "100%", height: "200px" }}
                alt=""
              />
            </Row> */}
            <Row className="carousel-footer">
              <h6>Dream Team</h6>

              <p>
                Green Campus taken up by our team, Dream Team is a dream project
                for replenishing greenery in the school campus. Our aim is to
                create a beautiful garden in front of the school a vegetable
                garden and an area of medicinal plants. We have also planned to
                install a bio-waste plant near the playground to keep the campus
                clean and also to use bio waste as manure for the plants. All
                these can be realised only after school reopened and regular
                classes begin. Students’ involvement is essential for
                maintaining the garden.
              </p>
            </Row>
          </Col>
          <Col md={4} className="item-container">
            <div className="item-header">
              {/* <ImLab /> */}
              <div className="item-header-right">
                <span></span>
                <span>Group VII </span>
              </div>
            </div>

            {/* <Row className="carousel-body" style={{ width: "100%" }}>
              <img
                // src={lab}
                // src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/restaurant.jpg"
                style={{ width: "100%", height: "200px" }}
                alt=""
              />
            </Row> */}
            <Row className="carousel-footer">
              <h6>Udbodhan</h6>

              <p>
                Udbodhan means awakening or enlightening. The out reach
                programmes planned are consolidated under the title
                Arpitam-Character Moulding Through Charity. As the title
                suggests each activity under this program aims at character
                moulding through charitable activities ranging from monetary
                help to visits and surveys.Students need to realise that Charity
                isn't about pity but that it is about love.
              </p>
            </Row>
          </Col>
          <Col md={4} className="item-container">
            <div className="item-header">
              {/* <ImLab /> */}
              <div className="item-header-right">
                <span></span>
                <span>Group VIII </span>
              </div>
            </div>

            {/* <Row className="carousel-body" style={{ width: "100%" }}>
              <img
                // src={lab}
                // src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/restaurant.jpg"
                style={{ width: "100%", height: "200px" }}
                alt=""
              />
            </Row> */}
            <Row className="carousel-footer">
              <h6>Spectrum</h6>

              <p>
                The title of our group is Spectrum and the group focuses on the
                conduct of skill based activities. Skill based learning helps
                the children in enhancing their strengths and learning important
                skills to achieve their vocational goals. Just as the title
                denotes,children produce a gamut of their talents by attending
                to various skill related workshops and activities.
              </p>
            </Row>
          </Col>
          <Col md={4} className="item-container">
            <div className="item-header">
              {/* <ImLab /> */}
              <div className="item-header-right">
                <span></span>
                <span>Group IX </span>
              </div>
            </div>

            {/* <Row className="carousel-body" style={{ width: "100%" }}>
              <img
                // src={lab}
                // src="https://jthemes.com/themes/wp/travelers/wp-content/themes/travellers/images/restaurant.jpg"
                style={{ width: "100%", height: "200px" }}
                alt=""
              />
            </Row> */}
            <Row className="carousel-footer">
              <h6>Zenith</h6>

              <p>
                The title of our group is Spectrum and the group focuses on the
                conduct of skill based activities. Skill based learning helps
                the children in enhancing their strengths and learning important
                skills to achieve their vocational goals. Just as the title
                denotes,children produce a gamut of their talents by attending
                to various skill related workshops and activities.
              </p>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CenterofExcellence;

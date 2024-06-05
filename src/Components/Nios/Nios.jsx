import React, { useEffect, useState } from "react";
import "../CenterofExcellence/CenterofExcellence.scss";
import { Col, Row } from "react-bootstrap";

const Nios = ({ pageRef, pageNumber }) => {
  const [showMore, setShowMore] = useState(false);
  const importAll = (r) => r.keys().map(r);
  const NIOS_IMAGES = importAll(
    require.context("../Assets/niosImages", false, /\.(png|jpe?g|svg)$/)
  );
  useEffect(() => {
    console.log("NIOS_IMAGES", NIOS_IMAGES);
  }, [NIOS_IMAGES]);

  return (
    <div className="contact-container" ref={pageRef} id={`page-${pageNumber}`}>
      <div className="container">
        <Row>
          <Col md={12} className="contact-header">
            <div className="header-top">
              <span>NIOS</span>
            </div>
            <div className="header-sep"></div>
            <div className="header-bottom">
              {/* <h2 className="d-flex">asdasfd</h2> */}
              <span>
                National Institute of Schooling is a recognised board under
                MHRD, Government of India. It offers courses in elementary,
                secondary and senior secondary level. In KMBVM, Bhavan’s
                Learning Centre was set up to support children with special
                needs. We offer support for registration in NIOS, coaching
                classes in different subjects, guidance and escort to NIOS exam
                centres as per the situation. We admit students to BLC in
                9th(secondary level) and 11th(senior secondary level).
              </span>
            </div>
          </Col>
          <div className="header-bottom">
            <h2 className="d-flex">Annual Report (2022-23)</h2>
            <span>
              These are the words of Swami Vivekananda and that is the guiding
              light of Bhavan’s Learning Centre. The idea of Bhavan’s Learning
              Centre, a place where students who have difficulty in pursuing
              mainstream syllabus of CBSE can be trained in the syllabus of
              NIOS, became a reality in the year 2014 at KMBVM, Pottore. Though
              we began the wing for NIOS after a lot of deliberation and
              trepidation, it has become a place where students can learn and
              portray their skills and talents without fear of rejection and
              ridicule. We are indeed proud to have been instrumental in
              bringing relief and smiles to many parents and students over the
              past 9 years.
            </span>
          </div>

          {showMore && (
            <>
              <div className="header-bottom">
                <span className="d-flex justify-content-*-start">
                  As you are all aware, National Institute of Open Schooling is
                  a national board under MHRD offering curriculum for secondary
                  and senior secondary courses. This board allows you to choose
                  your subjects and appear for exams in a flexible manner. In
                  recent years children are opting for NIOS syllabus to pursue
                  their professional dreams of being a cricketer, tennis player
                  or to attend entrance coaching classes. A student of ours has
                  been selected in the Indian cricket A team. After this, most
                  of our students have joined reputed colleges and pursued
                  courses of their choice and interest.
                  <br />
                </span>
              </div>
              <div className="header-bottom">
                <br />
                <h2 className="d-flex">A few of our alumni achievements</h2>
                <span className="d-flex justify-content-*-start">
                  Ashique P Sasidharan -Music Composing
                  <br />
                  Mahalakshmi V - assistant Professor at St Aloysious College
                  <br />
                  Niveditha Ramnath- Professional Choreographer
                  <br />
                  Firdhouse A F- joined Emirates
                  <br />
                  Joet Biju is working in Le Meridian, Dubai
                  <br />
                  Sreeram T M is working in Hyatt, Thrissur
                  <br />
                  Aswathy Nandakumar who completed her B Sc in costume and
                  fashion designing is working in Bangalore as Merchandise
                  executive. Althaf T A and Bharat Raj pursued Hotel management
                  at IHM, Akhila Prasad did her graduation from St Theresas
                  college in psychology. Our alumni Jamaima Firoz completed her
                  BDS from Mahi Dental College. There are many more students who
                  have pursued their degree in commerce, literature, visual
                  communication, social work and so on, but time does not permit
                  me to name all of them. Last year as our results were
                  announced late we were not able to felicitate our toppers.
                  <br />
                </span>
              </div>
              <div className="header-bottom">
                <br />

                <span className="d-flex justify-content-*-start">
                  Our previous year results are as follows-
                  <br />
                  Senior Secondary :
                  <br />
                  Number of students who appeared for the exam : 13
                  <br />
                  Number of students who passed the exam : 13
                  <br />
                  <br />
                  In the commerce stream :
                  <br />
                  First Topper is Abhinav Madhav with 73.8%
                  <br />
                  Second topper is Madhav Jobin with 73.2%
                  <br />
                  Third is Anusree K Unni with 72.2%
                  <br />
                  <br />
                  In Humanities stream :
                  <br />
                  First topper is Athira v Satheesh with 85.8%
                  <br />
                  Second topper is Serah Kurien with 80.6%
                  <br />
                  Third is Saniya Babu with 76%
                  <br />
                  <br />
                  In the secondary section :
                  <br />
                  No. of students Appeared : 11
                  <br /> No. of students passed : 11
                  <br />
                  First Topper is Prarthana Sasikumar with 83.6%
                  <br />
                  Second topper is Gadlin Maria Paiva with 75.8%
                  <br />
                  Third is Devalakshmi A R with 74.6%
                  <br />
                  <br />
                  In the previous year we had conducted classes on mushroom
                  cultivation, horticulture and also career counselling sessions
                  . This year we have concentrated on developing our culinary
                  and art and craft skills. Through RUCHIBHAVANA, a food and
                  craft fete organised by Students and teachers on Children’s
                  day we were able to showcase the talents of our students.
                  Another avenue for developing their talents is BHAVANA SPARSH,
                  our annual day. This year we were fortunate to have Gayathri
                  Padmanabhan, granddaughter of late Krishnan Nair, founder of
                  KalaNilayam and late Kodungalloor Ammini Amma, actress who was
                  very popular in her days. Her interest in drama and dance has
                  brought her many accolades. We also instill team spirit and
                  bonding through games and tours. We try to take our students
                  on a 3 days trip which helps them to independently take care
                  of themselves and be responsible along with having loads of
                  fun. These results and achievements indeed make us proud and
                  give us the momentum to continue our work as facilitators. We
                  thank our Principal and the members of the management, both
                  present and past for the whole hearted support. A big thank
                  you to everyone who has always supported and encouraged us.
                </span>
              </div>
              <div className="d-flex flex-wrap px-5">
                {NIOS_IMAGES.map((image, index) => (
                  <div
                    key={index}
                    className=" "
                    style={{
                      margin: "1.5em",
                      width: "254px",
                      height: "190px",
                      borderRadius: "30px",
                      background: "#e0e0e0",
                      // boxShadow: "5px 5px 10px #bebebe, -5px -5px 10px #ffffff",
                      webkitBoxShadow:
                        "5px 5px 10px #001e37, -5px -5px 10px #001e37",
                    }}
                  >
                    <img
                      src={image}
                      alt={`Image ${index}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "30px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </Row>
        <Row>
          <Col md={12}>
            <div className="read-more" onClick={() => setShowMore(!showMore)}>
              <div className="more">Show {showMore ? "less" : "more..."}</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Nios;
